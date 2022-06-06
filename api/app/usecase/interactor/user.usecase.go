package usecase

import (
	"context"
	"server/app/domain/entity"
	"server/app/domain/repository"
	"server/app/usecase/dto"
	"server/utils/conversion"
)

type UserUseCase struct {
	UserRepository repository.UserRepository
}

func NewUserUseCase(userRepository repository.UserRepository) *UserUseCase {
	return &UserUseCase{
		UserRepository: userRepository,
	}
}

func (u *UserUseCase) UserSendReviewRequest(ctx context.Context, test_result *dto.ReviewTestUserRequest) (admin_response *dto.ResponseUserReviewRequest, err error) {
	var ent entity.TestResult
	conversion.Coppier(&ent, &test_result)
	res, err := u.UserRepository.UserSendReviewRequest(ctx, &ent)
	if err != nil {
		return nil, err
	}
	conversion.Coppier(&admin_response, &res)
	return admin_response, nil
}
