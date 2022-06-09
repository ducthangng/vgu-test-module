package usecase

import (
	"context"
	"server/app/domain/entity"
	"server/app/domain/repository"
	"server/app/usecase/dto"
	"server/utils/conversion"
)

type AdminUseCase struct {
	adminRepo repository.DataService
}

func NewAdminUseCase(adminRepo repository.DataService) *AdminUseCase {
	return &AdminUseCase{
		adminRepo: adminRepo,
	}
}

func (c *AdminUseCase) UpdateUserTestResult(ctx context.Context, testResult *dto.UpdatedTestResultResponse) (updated *dto.UpdatedTestResultResponse, err error) {
	var ent entity.TestResult
	conversion.Coppier(&ent, &testResult)
	updatedEnt, err := c.adminRepo.UpdateUserTestResult(ctx, &ent)
	if err != nil {
		return nil, err
	}
	conversion.Coppier(&updated, &updatedEnt)
	return updated, nil
}

func (c *AdminUseCase) DeleteUserTestResult(ctx context.Context, id interface{}) (deleted *dto.UpdatedTestResultResponse, err error) {
	res, err := c.adminRepo.DeleteUserTestResult(ctx, id)
	if err != nil {
		return nil, err
	}
	conversion.Coppier(&deleted, &res)
	return deleted, nil
}
