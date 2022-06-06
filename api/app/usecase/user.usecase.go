package usecase

import (
	"context"
	"server/app/usecase/dto"
)

// UserUsecase interface represents all methods to interact with user
type UserUseCase interface {
	UserSendReviewRequest(ctx context.Context, test_result *dto.ReviewTestUserRequest) (*dto.ResponseUserReviewRequest, error)
}
