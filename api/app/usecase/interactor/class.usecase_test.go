package interactor

import (
	"testing"

	"server/app/domain/repository"

	"github.com/golang/mock/gomock"
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
	//ctx := context.Background()
	defer ctr.Finish()

	t.Run("QueryClassTestResult", func(t *testing.T) {
		// classusecase := setupTest()
		// c := mockusecase.NewMockClassUseCase(ctr)
		// c.EXPECT().QueryClassTestResult(ctx, testResult).Return(expected, nil)
		// _, err := classusecase.QueryClassTestResult(ctx, testResult)
		// assert.NoError(t, err)
	})

}

func TestGetClassTest(t *testing.T) {
	t.Skip("not implemented")
}
