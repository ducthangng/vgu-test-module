package interactor

import (
	"context"
	"server/app/domain/entity"
	"server/app/domain/repository"
	"server/app/usecase/usecase_dto"
	"time"

	"github.com/jinzhu/copier"
)

type ClassUsecase struct {
	ClassRepository repository.DataService
}

func NewClassUsecase(DataService repository.DataService) *ClassUsecase {
	return &ClassUsecase{
		ClassRepository: DataService,
	}
}

// @transaction
// Delete all the test result from test from the class.
// Delete all the test class id.
// Delete all the user class id.
// Delete the class id.
func (c *ClassUsecase) DeleteClass(ctx context.Context, classId int) error {
	TestClassID, err := c.ClassRepository.QueryTestOfClass(ctx, classId)
	if err != nil {
		return err
	}

	UserClassID, err := c.ClassRepository.QueryUserOfClass(ctx, classId)
	if err != nil {
		return err
	}

	return c.ClassRepository.EnableTx(func() error {
		for _, v := range TestClassID {
			testResult, err := c.ClassRepository.QueryTestResultIndexScore(ctx, v.ID, 0, time.Now(), 1)
			if err != nil {
				return err
			}

			for _, r := range testResult {
				err := c.ClassRepository.DeleteTestResult(ctx, r.ID)
				if err != nil {
					return err
				}
			}

			err = c.ClassRepository.DeleteTestClass(ctx, v.TestID, v.ClassID)
			if err != nil {
				return err
			}
		}

		for _, id := range UserClassID {
			if err := c.ClassRepository.DeleteUserClass(ctx, classId, id); err != nil {
				return err
			}
		}

		if err := c.ClassRepository.DeleteClass(ctx, classId); err != nil {
			return err
		}

		return nil
	})
}

func (c *ClassUsecase) CreateClass(ctx context.Context, class usecase_dto.Class) error {
	var record entity.Class
	err := copier.Copy(&record, &class)
	if err != nil {
		return err
	}
	_, err = c.ClassRepository.CreateClass(ctx, record)
	if err != nil {
		return err
	}
	return nil
}

func (c *ClassUsecase) GetClasses(ctx context.Context) (classes []usecase_dto.Class, err error) {
	records, err := c.ClassRepository.QueryAllClass(ctx)
	if err != nil {
		return nil, err
	}
	for _, record := range records {
		var class usecase_dto.Class
		err = copier.Copy(&class, &record)
		if err != nil {
			return nil, err
		}
		classes = append(classes, class)
	}

	return classes, nil
}

func (c *ClassUsecase) QueryClassMembers(ctx context.Context, classId int) (users []usecase_dto.User, err error) {
	records_id, err := c.ClassRepository.QueryUserOfClass(ctx, classId)
	if err != nil {
		return nil, err
	}
	for _, record_id := range records_id {
		var user usecase_dto.User
		err = copier.Copy(&user, &record_id)
		if err != nil {
			return nil, err
		}
		users = append(users, user)
	}
	return users, nil

}

func (c *ClassUsecase) AddMember2Class(ctx context.Context, classId int, userId int) (err error) {
	err = c.ClassRepository.AddUserClass(ctx, classId, userId)
	if err != nil {
		return err
	}
	return nil
}

func (c *ClassUsecase) RemoveMemberFromClass(ctx context.Context, classId int, userId int) (err error) {
	err = c.ClassRepository.DeleteUserClass(ctx, classId, userId)
	if err != nil {
		return err
	}
	return nil
}

// get all reults of corresponding class and test
func (c *ClassUsecase) QueryClassTestResult(ctx context.Context, testResult usecase_dto.TestResult) (results []usecase_dto.TestResult, err error) {
	var totalRecord []entity.TestResult
	if testResult.TestClassID != 0 {
		record, err := c.ClassRepository.QueryTestResultIndexScore(ctx, testResult.TestClassID, testResult.UserID, time.Unix(testResult.DateCreated, 0), 1)
		if err != nil {
			return results, err
		}
		totalRecord = append(totalRecord, record...)
	}

	if testResult.UserID != 0 {
		record, err := c.ClassRepository.QueryTestResultIndexScore(ctx, testResult.TestClassID, testResult.UserID, time.Unix(testResult.DateCreated, 0), 1)
		if err != nil {
			return results, err
		}
		totalRecord = append(totalRecord, record...)
	}

	if testResult.DateCreated != 0 {
		record, err := c.ClassRepository.QueryTestResultIndexScore(ctx, testResult.TestClassID, testResult.UserID, time.Unix(testResult.DateCreated, 0), 2)
		if err != nil {
			return results, err
		}
		totalRecord = append(totalRecord, record...)
	}

	err = copier.Copy(&results, &totalRecord) // copy to dto
	if err != nil {
		return results, err
	}

	return results, nil
}

// get all test within a class
func (c *ClassUsecase) GetClassTest(ctx context.Context, classId int) (tests []usecase_dto.Test, err error) {
	var test usecase_dto.Test
	records, err := c.ClassRepository.QueryTestOfClass(ctx, classId)
	if err != nil {
		return nil, err
	}
	for _, item := range records {
		record_item, err := c.ClassRepository.QueryTestHeadline(ctx, item.TestID, "")
		if err != nil {
			return nil, err
		}

		if len(record_item) == 0 {
			continue
		}

		if err := copier.Copy(&test, &record_item[0]); err != nil {
			return nil, err
		}

		tests = append(tests, test)
	}

	return tests, nil
}
