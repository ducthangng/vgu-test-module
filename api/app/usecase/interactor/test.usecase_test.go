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

func buildTestModuleTest() *TestUsecase {
	var repo repository.DataService
	testusecase := NewTestUsecase(repo)
	return testusecase
}

func TestQueryInfor(t *testing.T) {
	type args struct {
		ctx    context.Context
		testId int
		userId int
	}

	tests := []struct {
		name    string
		args    args
		want    usecase_dto.Test
		wantErr error
	}{
		{
			name: "QueryInforSuccess",
			args: args{
				ctx:    context.Background(),
				testId: 1,
				userId: 1,
			},
			want:    usecase_dto.Test{},
			wantErr: nil,
		},

		{
			name: "QueryInforError",
			args: args{
				ctx:    context.Background(),
				testId: 1,
				userId: 1,
			},
			want:    usecase_dto.Test{},
			wantErr: errors.New("query infor error"),
		},
	}

	mockCtrl := gomock.NewController(t)
	defer mockCtrl.Finish()

	mockRepo := mockusecase.NewMockTestUseCase(mockCtrl)
	testusecase := buildTestModuleTest()

	for _, tt := range tests {
		if tt.name == "QueryInforSuccess" {
			t.Run(tt.name, func(t *testing.T) {
				mockRepo.EXPECT().QueryTestInfo(tt.args.ctx, tt.args.testId, tt.args.userId).Return(tt.want, tt.wantErr)
				got, err := testusecase.QueryTestInfo(tt.args.ctx, tt.args.testId, tt.args.userId)
				if err != nil {
					t.Errorf("TestUsecase.QueryInfor() error = %v", err)
				}
				if !reflect.DeepEqual(got, tt.want) {
					t.Errorf("TestUsecase.QueryInfor() = %v, want %v", got, tt.want)
				}
			})
		}
		if tt.name == "QueryInforError" {
			t.Run(tt.name, func(t *testing.T) {
				mockRepo.EXPECT().QueryTestInfo(tt.args.ctx, tt.args.testId, tt.args.userId).Return(tt.want, tt.wantErr)
				got, err := testusecase.QueryTestInfo(tt.args.ctx, tt.args.testId, tt.args.userId)
				if err == nil {
					t.Errorf("TestUsecase.QueryInfor() error = %v", err)
				}
				if !reflect.DeepEqual(got, tt.want) {
					t.Errorf("TestUsecase.QueryInfor() = %v, want %v", got, tt.want)
				}
			})
		}
	}
}
