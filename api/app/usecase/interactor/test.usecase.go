package usecase

import (
	"context"
	"server/app/domain/repository"
	"server/app/usecase/dto"
	"server/utils/conversion"
)

type TestUseCase struct {
	TestRepository repository.TestRepository
}

func NewTestUseCase(testRepository repository.TestRepository) *TestUseCase {
	return &TestUseCase{
		TestRepository: testRepository,
	}
}

func (t *TestUseCase) GetAllUserTestResults(ctx context.Context) (alluser []dto.UserTestResultResponse, err error) {
	res, err := t.TestRepository.GetAllUserTestResults(ctx)
	if err != nil {
		return nil, err
	}
	conversion.Coppier(&alluser, &res)
	return alluser, nil
}

func (t *TestUseCase) GetUserTestResultsByID(ctx context.Context, user_id interface{}) (oneuser dto.UserTestResultResponse, err error) {
	res, err := t.TestRepository.GetUserTestResultByID(ctx, user_id)
	if err != nil {
		return dto.UserTestResultResponse{}, err
	}
	conversion.Coppier(&oneuser, &res)
	return oneuser, nil
}
