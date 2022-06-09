package usecase

import (
	"context"
	"server/app/domain/entity"
	"server/app/usecase/dto"
)

type TestUseCase interface {
	// GetTestByID returns a test by its ID.
	GetTestByID(testID int) (*entity.Test, error)
}

type TestResultUseCase interface {
	// GetTestResultByID returns a test result by its ID.
	GetAllUserTestResults(ctx context.Context, user_id interface{}) ([]dto.UserTestResultResponse, error)
	GetUserTestResultByID(ctx context.Context) (dto.UserTestResultResponse, error)
}
