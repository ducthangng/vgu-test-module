package interactor

import (
	"context"
	"testing"

	"server/app/domain/repository"
	"server/app/usecase/usecase_dto"
	mockusecase "server/app/usecase/usecase_mock"

	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/assert"
)

func setupTest() *ClassUsecase {
	var repo repository.DataService
	classusecase := NewClassUsecase(repo)
	return classusecase

}

func TesrCreateClass(t *testing.T) {
	t.Skip("not implemented")
}

func TestGetClasses(t *testing.T) {
	t.Skip("not implemented")
}

func TestAddMember2Class(t *testing.T) {
	t.Skip("not implemented")
}

func TestRemoveMemberFromClass(t *testing.T) {
	t.Skip("not implemented")
}

func TestQueryClassTestResult(t *testing.T) {
	ctr := gomock.NewController(t)
	ctx := context.Background()
	defer ctr.Finish()

	var testResult = usecase_dto.TestResult{
		ID:          1,
		TestClassID: 2,
		UserID:      3,
		EntityCode:  3,
		Score:       9.0,
		Comment:     "comment",
		ResultNote:  "result note",
	}
	t.Run("QueryClassTestResult", func(t *testing.T) {
		classusecase := setupTest()
		c := mockusecase.NewMockClassUseCase(ctr)
		c.EXPECT().QueryClassTestResult(ctx, testResult).Return(testResult, nil)
		_, err := classusecase.QueryClassTestResult(ctx, testResult)
		assert.NoError(t, err)
	})

}

func TestGetClassTest(t *testing.T) {
	t.Skip("not implemented")
}
