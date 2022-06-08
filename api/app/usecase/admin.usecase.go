package usecase

import (
	"context"
	"server/app/usecase/dto"
)

type AdminUseCase interface {
	UpdateUserTestResult(ctx context.Context, testResult *dto.UpdatedTestResultResponse) (updated *dto.UpdatedTestResultResponse, err error)
	DeleteUserTestResult(ctx context.Context, id interface{}) (deleted *dto.DeletedTestResultResponse, err error)
}
