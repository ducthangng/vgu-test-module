package interactor

import (
	"context"
	"server/app/domain/entity"
	"server/app/domain/repository"
	"server/app/usecase/usecase_dto"

	"github.com/jinzhu/copier"
)

type ClassUsecase struct {
	ClassRepository repository.DataService
}

func NewClassUsecase(TestSkillRepository repository.DataService) *ClassUsecase {
	return &ClassUsecase{
		ClassRepository: TestSkillRepository,
	}
}

func (c *ClassUsecase) DeleteClass(ctx context.Context, classId int) error {
	// some logic
	return nil
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

func (c *ClassUsecase) RemoveMember2Class(ctx context.Context, classId int, userId int) (err error) {
	err = c.ClassRepository.DeleteUserClass(ctx, classId, userId)
	if err != nil {
		return err
	}
	return nil
}

// get all reults of corresponding class and test
func (c *ClassUsecase) QueryClassTestResult(ctx context.Context, testResult usecase_dto.TestResult) (results []usecase_dto.TestResult, err error) {
	records, err := c.ClassRepository.QueryTestResultDetails(ctx, testResult.ID)
	if err != nil {
		return nil, err
	}
	for _, record := range records {
		var testResult usecase_dto.TestResult
		err = copier.Copy(&testResult, &record)
		if err != nil {
			return nil, err
		}
		results = append(results, testResult)
	}
	return results, nil
}

// get all test within a class
func (c *ClassUsecase) GetClassTest(ctx context.Context, classId int, testName string) (tests []usecase_dto.Test, err error) {
	test_class_records, err := c.ClassRepository.QueryTestOfClass(ctx, classId)
	if err != nil {
		return nil, err
	}
	for _, item := range test_class_records {
		test_records, err := c.ClassRepository.QueryTestHeadline(ctx, item.TestID, testName)
		if err != nil {
			return nil, err
		}

		err = copier.Copy(&tests, &test_records)
		if err != nil {
			return nil, err
		}

	}
	return tests, nil
}
