package interactor

import (
	"context"
	"server/app/domain/entity"
	"server/app/domain/repository"
	"server/app/usecase/usecase_dto"

	"github.com/jinzhu/copier"
)

type UserUsecase struct {
	UserRepository repository.DataService
}

func NewUserUsecase(dataService repository.DataService) *UserUsecase {
	return &UserUsecase{
		UserRepository: dataService,
	}
}

func (u *UserUsecase) CreateUser(ctx context.Context, user usecase_dto.User) (id int, err error) {
	var record entity.User
	err = copier.Copy(&record, &user)
	if err != nil {
		return 0, err
	}

	created, err := u.UserRepository.CreateUser(ctx, record)
	if err != nil {
		return 0, err
	}

	err = copier.Copy(&id, &created)
	if err != nil {
		return 0, err
	}

	return id, nil
}

func (u *UserUsecase) UpdateUser(ctx context.Context, user usecase_dto.User) (err error) {
	var record entity.User
	err = copier.Copy(&record, &user)
	if err != nil {
		return err
	}
	err = u.UserRepository.UpdateUser(ctx, record)
	if err != nil {
		return err
	}

	return nil
}

func (u *UserUsecase) FindUser(ctx context.Context, user usecase_dto.User, HasPassword bool) (result []usecase_dto.User, err error) {
	var totalRecord []entity.User
	if len(user.Username) != 0 {
		record, err := u.UserRepository.QueryUser(ctx, user.Username, user.FullName, user.ID, 0, HasPassword)
		if err != nil {
			return result, err
		}

		totalRecord = append(totalRecord, record...)
	}

	if len(user.FullName) != 0 {
		record, err := u.UserRepository.QueryUser(ctx, user.Username, user.FullName, user.ID, 1, HasPassword)
		if err != nil {
			return result, err
		}

		totalRecord = append(totalRecord, record...)
	}

	if user.ID != 0 {
		record, err := u.UserRepository.QueryUser(ctx, user.Username, user.FullName, user.ID, 2, HasPassword)
		if err != nil {
			return result, err
		}

		totalRecord = append(totalRecord, record...)
	}

	if err := copier.Copy(&result, &totalRecord); err != nil {
		return result, err
	}

	return result, err
}

func (u *UserUsecase) FindUserClasses(ctx context.Context, userId int) (classes []usecase_dto.Class, err error) {
	classID, err := u.UserRepository.QueryClassOfUser(ctx, userId)
	if err != nil {
		return classes, err
	}

	for _, v := range classID {
		class, err := u.UserRepository.QueryClass(ctx, v, "")
		if err != nil {
			return classes, err
		}

		if len(class) == 0 {
			continue
		}

		classes = append(classes, usecase_dto.Class{
			ID:           class[0].ID,
			Classname:    class[0].Classname,
			Info:         class[0].Info,
			Announcement: class[0].Announcement,
			RoomCode:     class[0].RoomCode,
			Level:        class[0].Level,
		})
	}

	return classes, nil
}

func (u *UserUsecase) ReviewTestResult(ctx context.Context, resultId int) (skilltest usecase_dto.SkillTest, err error) {

	return
}
