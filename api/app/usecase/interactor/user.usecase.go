package interactor

import (
	"context"
	"server/app/domain/repository"
	"server/app/usecase/usecase_dto"
)

type UserUsecase struct {
	UserRepository repository.UserRepository
}

func NewUserUseCase(userRepository repository.UserRepository) *UserUsecase {
	return &UserUsecase{
		UserRepository: userRepository,
	}
}

func (u *UserUsecase) CreateUser(ctx context.Context, user usecase_dto.User) (id int, err error) {

	return
}

func (u *UserUsecase) UpdateUser(ctx context.Context, user usecase_dto.User) (err error) {

	return
}

func (u *UserUsecase) FindUser(ctx context.Context, user usecase_dto.User, HasPassword bool) (result usecase_dto.User, err error) {

	return
}

func (u *UserUsecase) GetAllUserTestResults(ctx context.Context, userId int) (results []usecase_dto.TestResult, err error) {

	return
}

func (u *UserUsecase) ReviewTestResult(ctx context.Context, resultId int) (skilltest usecase_dto.SkillTest, err error) {

	return
}
