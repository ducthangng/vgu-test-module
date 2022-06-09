package interactor

import (
	"context"
	"server/app/domain/repository"
	"server/app/usecase/usecase_dto"
)

type TestUsecase struct {
	TestRepository repository.DataService
}

func NewTestUsecase(testRepository repository.DataService) *TestUsecase {
	return &TestUsecase{
		TestRepository: testRepository,
	}
}

func (t *TestUsecase) QueryTestInfo(ctx context.Context, testId int) (test usecase_dto.Test, err error) {
	return
}

func (t *TestUsecase) QueryTestDetails(ctx context.Context, testId int) (test usecase_dto.SkillTest, err error) {
	return
}

func (t *TestUsecase) SubmitTest(ctx context.Context, data usecase_dto.SubmitData) (testResultId int, err error) {
	return
}
