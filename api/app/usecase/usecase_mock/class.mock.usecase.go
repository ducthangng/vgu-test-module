package mockusecase

import (
	"context"
	"reflect"
	"server/app/usecase/usecase_dto"

	"github.com/golang/mock/gomock"
)

type MockClassUseCase struct {
	ctrl     *gomock.Controller
	recorder *MockClassUseCaseMockRecorder
}

// MockUserUseCaseMockRecorder is the mock recorder for MockUserUseCase
type MockClassUseCaseMockRecorder struct {
	mock *MockClassUseCase
}

// NewMockUserUseCase creates a new mock instance
func NewMockClassUseCase(ctrl *gomock.Controller) *MockClassUseCase {
	mock := &MockClassUseCase{ctrl: ctrl}
	mock.recorder = &MockClassUseCaseMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use
func (m *MockClassUseCase) EXPECT() *MockClassUseCaseMockRecorder {
	return m.recorder
}

func (m *MockClassUseCase) DeleteClass(ctx context.Context, classId int) error {
	ret := m.ctrl.Call(m, "DeleteClass", ctx, classId)
	ret0, _ := ret[0].(error)
	return ret0
}

func (m *MockClassUseCaseMockRecorder) DeleteClass(ctx context.Context, classId interface{}) *gomock.Call {
	return m.mock.ctrl.RecordCallWithMethodType(m.mock, "DeleteClass", reflect.TypeOf((*MockClassUseCase)(nil).DeleteClass), ctx, classId)
}

func (m *MockClassUseCase) CreateClass(ctx context.Context, class usecase_dto.Class) error {
	ret := m.ctrl.Call(m, "CreateClass", ctx, class)
	ret0, _ := ret[0].(error)
	return ret0
}

func (m *MockClassUseCaseMockRecorder) CreateClass(ctx context.Context, class interface{}) *gomock.Call {
	return m.mock.ctrl.RecordCallWithMethodType(m.mock, "CreateClass", reflect.TypeOf((*MockClassUseCase)(nil).CreateClass), ctx, class)
}

func (m *MockClassUseCase) GetClasses(ctx context.Context) (classes []usecase_dto.Class, err error) {
	ret := m.ctrl.Call(m, "GetClasses", ctx)
	ret0, _ := ret[0].([]usecase_dto.Class)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

func (m *MockClassUseCaseMockRecorder) GetClasses(ctx context.Context) *gomock.Call {
	return m.mock.ctrl.RecordCallWithMethodType(m.mock, "GetClasses", reflect.TypeOf((*MockClassUseCase)(nil).GetClasses), ctx)
}

func (m *MockClassUseCase) QueryClassMembers(ctx context.Context, classId int) (users []usecase_dto.User, err error) {
	ret := m.ctrl.Call(m, "QueryClassMembers", ctx, classId)
	ret0, _ := ret[0].([]usecase_dto.User)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

func (m *MockClassUseCaseMockRecorder) QueryClassMembers(ctx context.Context, classId interface{}) *gomock.Call {
	return m.mock.ctrl.RecordCallWithMethodType(m.mock, "QueryClassMembers", reflect.TypeOf((*MockClassUseCase)(nil).QueryClassMembers), ctx, classId)
}

func (m *MockClassUseCase) AddMember2Class(ctx context.Context, classId int, userId int) error {
	ret := m.ctrl.Call(m, "AddMember2Class", ctx, classId, userId)
	ret0, _ := ret[0].(error)
	return ret0
}

func (m *MockClassUseCaseMockRecorder) AddMember2Class(ctx context.Context, classId interface{}, userId interface{}) *gomock.Call {
	return m.mock.ctrl.RecordCallWithMethodType(m.mock, "AddMember2Class", reflect.TypeOf((*MockClassUseCase)(nil).AddMember2Class), ctx, classId, userId)
}

func (m *MockClassUseCase) RemoveMemberFromClass(ctx context.Context, classId int, userId int) error {
	ret := m.ctrl.Call(m, "RemoveMemberFromClass", ctx, classId, userId)
	ret0, _ := ret[0].(error)
	return ret0
}

func (m *MockClassUseCaseMockRecorder) RemoveMemberFromClass(ctx context.Context, classId interface{}, userId interface{}) *gomock.Call {
	return m.mock.ctrl.RecordCallWithMethodType(m.mock, "RemoveMemberFromClass", reflect.TypeOf((*MockClassUseCase)(nil).RemoveMemberFromClass), ctx, classId, userId)
}

func (m *MockClassUseCase) QueryClassTestResults(ctx context.Context, classId int) (testResults []usecase_dto.TestResult, err error) {
	ret := m.ctrl.Call(m, "QueryClassTestResults", ctx, classId)
	ret0, _ := ret[0].([]usecase_dto.TestResult)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

func (m *MockClassUseCaseMockRecorder) QueryClassTestResults(ctx context.Context, classId interface{}) *gomock.Call {
	return m.mock.ctrl.RecordCallWithMethodType(m.mock, "QueryClassTestResults", reflect.TypeOf((*MockClassUseCase)(nil).QueryClassTestResults), ctx, classId)
}

func (m *MockClassUseCase) GetClassTest(ctx context.Context, classId int, testName string) (tests []usecase_dto.Test, err error) {
	ret := m.ctrl.Call(m, "GetClassTest", ctx, classId, testName)
	ret0, _ := ret[0].([]usecase_dto.Test)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

func (m *MockClassUseCaseMockRecorder) GetClassTest(ctx context.Context, classId interface{}, testName interface{}) *gomock.Call {
	return m.mock.ctrl.RecordCallWithMethodType(m.mock, "GetClassTest", reflect.TypeOf((*MockClassUseCase)(nil).GetClassTest), ctx, classId, testName)
}
