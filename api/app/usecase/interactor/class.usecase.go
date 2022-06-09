package interactor

import (
	"context"
	"server/app/domain/repository"
	"server/app/usecase/usecase_dto"
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
	return nil
}

func (c *ClassUsecase) CreateClass(ctx context.Context, class usecase_dto.Class) error {
	return nil
}

func (c *ClassUsecase) GetClasses(ctx context.Context) (classes []usecase_dto.Class, err error) {
	return
}

func (c *ClassUsecase) QueryClassMembers(ctx context.Context, classId int) (users []usecase_dto.User, err error) {
	return
}

func (c *ClassUsecase) AddMember2Class(ctx context.Context, classId int, userId int) (err error) {
	return
}

func (c *ClassUsecase) RemoveMember2Class(ctx context.Context, classId int, userId int) (err error) {
	return
}

func (c *ClassUsecase) QueryClassTestResult(ctx context.Context, classId int, testId int) (err error) {
	return
}

func (c *ClassUsecase) GetClassTest(ctx context.Context, classId int) (tests []usecase_dto.Test, err error) {
	return
}
