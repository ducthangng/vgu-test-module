package interactor

import (
	"context"
	"errors"
	"reflect"
	"server/app/domain/repository"
	"server/app/usecase/usecase_dto"
	mockusecase "server/app/usecase/usecase_mock"
	"testing"

	"github.com/golang/mock/gomock"
)

func buildUserTest() *UserUsecase {
	var repo repository.DataService
	userusecase := NewUserUsecase(repo)
	return userusecase
}

func TestCreateUser(t *testing.T) {
	type args struct {
		ctx  context.Context
		user usecase_dto.User
	}

	tests := []struct {
		name    string
		args    args
		want    int
		wantErr error
	}{
		{
			name: "CreateUserSuccess",
			args: args{
				ctx:  context.Background(),
				user: usecase_dto.User{},
			},
			want:    int(0),
			wantErr: nil,
		},

		{
			name: "CreateUserError",
			args: args{
				ctx:  context.Background(),
				user: usecase_dto.User{},
			},
			want:    int(0),
			wantErr: nil,
		},
	}

	mockCtrl := gomock.NewController(t)
	defer mockCtrl.Finish()

	mockRepo := mockusecase.NewMockUserUseCase(mockCtrl)

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if tt.name == "CreateUserSuccess" {
				mockRepo.EXPECT().CreateUser(tt.args.ctx, tt.args.user).Return(int(1), nil)
				userusecase := buildUserTest()
				got, err := userusecase.CreateUser(tt.args.ctx, tt.args.user)
				if err != nil {
					t.Errorf("UserUsecase.CreateUser() error = %v", err)
				}

				if got != tt.want {
					t.Errorf("CreateUser() = %v, want %v", got, tt.want)
				}
			}
			if tt.name == "CreateUserError" {
				mockRepo.EXPECT().CreateUser(tt.args.ctx, tt.args.user).Return(int(0), tt.wantErr)
				userusecase := buildUserTest()
				got, err := userusecase.CreateUser(tt.args.ctx, tt.args.user)
				if err != tt.wantErr {
					t.Errorf("UserUsecase.CreateUser() error = %v, want %v", err, tt.wantErr)
				}

				if got != tt.want {
					t.Errorf("CreateUser() = %v, want %v", got, tt.want)
				}
			}
		})
	}
}

func TestUpdateUser(t *testing.T) {
	type args struct {
		ctx  context.Context
		user usecase_dto.User
	}

	tests := []struct {
		name string
		args args
		want error
	}{
		{
			name: "UpdateUserSuccess",
			args: args{
				ctx:  context.Background(),
				user: usecase_dto.User{},
			},
			want: nil,
		},
		{
			name: "UpdateUserError",
			args: args{
				ctx:  context.Background(),
				user: usecase_dto.User{},
			},
			want: errors.New("can not update user"),
		},
	}
	mockCtrl := gomock.NewController(t)
	defer mockCtrl.Finish()

	mockRepo := mockusecase.NewMockUserUseCase(mockCtrl)

	for _, tt := range tests {
		if tt.name == "UpdateUserSuccess" {
			t.Run(tt.name, func(t *testing.T) {
				mockRepo.EXPECT().UpdateUser(tt.args.ctx, tt.args.user).Return(nil)
				userusecase := buildUserTest()
				if got := userusecase.UpdateUser(tt.args.ctx, tt.args.user); got != tt.want {
					t.Errorf("UserUsecase.UpdateUser() = %v error = %v", tt.want, got)
				}
			})
		}
		if tt.name == "UpdateUserError" {
			t.Run(tt.name, func(t *testing.T) {
				mockRepo.EXPECT().UpdateUser(tt.args.ctx, tt.args.user).Return(errors.New("can not update user"))
				userusecase := buildUserTest()
				got := userusecase.UpdateUser(tt.args.ctx, tt.args.user)
				if got != tt.want {
					t.Errorf("UserUsecase.UpdateUser() error = %v", got)
				}
			})
		}
	}
}

func TestFindUser(t *testing.T) {
	t.Skip("Not implemented")
}

func TestFindUserClasses(t *testing.T) {
	t.Skip("Not implemented")
}

func TestReviewTestResults(t *testing.T) {
	t.Skip("Not implemented")
}

