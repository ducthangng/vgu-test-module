package interactor

import (
	"context"
	"fmt"
	"server/app/domain/entity"
	"server/app/domain/repository"
	"server/app/usecase/usecase_dto"

	"github.com/jinzhu/copier"
)

type TestUsecase struct {
	TestRepository repository.DataService
}

func NewTestUsecase(testRepository repository.DataService) *TestUsecase {
	return &TestUsecase{
		TestRepository: testRepository,
	}
}

// Return only the test information.
func (t *TestUsecase) QueryTestInfo(ctx context.Context, testId int) (test usecase_dto.Test, err error) {
	record, err := t.TestRepository.QueryTestHeadline(ctx, testId, "")
	if err != nil {
		return
	}

	if err := copier.Copy(&test, record); err != nil {
		return test, err
	}

	return
}

func (t *TestUsecase) QueryTestDetails(ctx context.Context, testId int) (test usecase_dto.SkillTest, err error) {
	return
}

func (t *TestUsecase) QuerySkillTest(ctx context.Context, testId int) (test usecase_dto.SkillTest, err error) {
	skID, err := t.TestRepository.QuerySkillTestOfTest(ctx, testId)
	if err != nil {
		return
	}

	for _, v := range skID {
		record, err := t.TestRepository.QuerySkillTest(ctx, v)
		if err != nil {
			return test, err
		}

		if err := copier.Copy(&test, record); err != nil {
			return test, err
		}
	}

	return
}

// @transaction
// Steps:
// @1. Compare result to the database answer to produce the test result.
// @2. Insert the test answer into database.
func (t *TestUsecase) SubmitTest(ctx context.Context, data usecase_dto.SubmitData, userId int, entityCode int, testClassId int, testSkillId int) (testResultId int, err error) {
	sk, err := t.TestRepository.QuerySkillTest(ctx, testSkillId)
	if err != nil {
		return testResultId, err
	}

	if len(data.Sections) != len(sk.Sections) {
		return testResultId, fmt.Errorf("The number of sections is not equal")

	}

	correctAns := 0
	totalAns := 0
	for i, section := range sk.Sections {
		// @1. Compare result to the database answer to produce the test result.
		// @2. Save-up user's answer.
		if len(section.Content) != len(data.Sections[i].Answers) {
			return 0, fmt.Errorf("The number of sections is not equal")
		}

		for j, content := range section.Content {
			totalAns++
			if content.CorrectAns == data.Sections[i].Answers[j] {
				correctAns++
			}
		}
	}

	if err := t.TestRepository.EnableTx(func() error {
		// @1. Create test result
		id, err := t.TestRepository.CreateTestResult(ctx, entity.TestResult{
			ID:          0,
			TestClassID: testClassId,
			UserID:      userId,
			EntityCode:  entityCode,
			Score:       int(float32(correctAns) / float32(totalAns) * 100),
			Comment:     "N/A",
			ResultNote:  "Little Sloww",
		})

		if err != nil {
			return err
		}

		var entitySubmittedData entity.SubmittedAnswer
		if err := copier.Copy(&entitySubmittedData.Sections, &data.Sections); err != nil {
			return err
		}

		entitySubmittedData.ID = id

		// @2. Insert the test answer into database.
		err = t.TestRepository.CreateTestAnswer(ctx, entitySubmittedData)
		if err != nil {
			return err
		}

		return nil
	}); err != nil {
		return testResultId, err
	}

	return
}
