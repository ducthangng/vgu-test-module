// Code generated by MockGen. DO NOT EDIT.
// Source: server/app/domain/repository (interfaces: DataService)

// Package mock_repository is a generated GoMock package.
package mock_repository

import (
	context "context"
	reflect "reflect"
	entity "server/app/domain/entity"
	time "time"

	gomock "github.com/golang/mock/gomock"
)

// MockDataService is a mock of DataService interface.
type MockDataService struct {
	ctrl     *gomock.Controller
	recorder *MockDataServiceMockRecorder
}

// MockDataServiceMockRecorder is the mock recorder for MockDataService.
type MockDataServiceMockRecorder struct {
	mock *MockDataService
}

// NewMockDataService creates a new mock instance.
func NewMockDataService(ctrl *gomock.Controller) *MockDataService {
	mock := &MockDataService{ctrl: ctrl}
	mock.recorder = &MockDataServiceMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockDataService) EXPECT() *MockDataServiceMockRecorder {
	return m.recorder
}

// AddUserClass mocks base method.
func (m *MockDataService) AddUserClass(arg0 context.Context, arg1, arg2 int) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "AddUserClass", arg0, arg1, arg2)
	ret0, _ := ret[0].(error)
	return ret0
}

// AddUserClass indicates an expected call of AddUserClass.
func (mr *MockDataServiceMockRecorder) AddUserClass(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AddUserClass", reflect.TypeOf((*MockDataService)(nil).AddUserClass), arg0, arg1, arg2)
}

// ArchieveTestResult mocks base method.
func (m *MockDataService) ArchieveTestResult(arg0 context.Context, arg1, arg2 int) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ArchieveTestResult", arg0, arg1, arg2)
	ret0, _ := ret[0].(error)
	return ret0
}

// ArchieveTestResult indicates an expected call of ArchieveTestResult.
func (mr *MockDataServiceMockRecorder) ArchieveTestResult(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ArchieveTestResult", reflect.TypeOf((*MockDataService)(nil).ArchieveTestResult), arg0, arg1, arg2)
}

// AssignSkillTest2Test mocks base method.
func (m *MockDataService) AssignSkillTest2Test(arg0 context.Context, arg1, arg2 int) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "AssignSkillTest2Test", arg0, arg1, arg2)
	ret0, _ := ret[0].(error)
	return ret0
}

// AssignSkillTest2Test indicates an expected call of AssignSkillTest2Test.
func (mr *MockDataServiceMockRecorder) AssignSkillTest2Test(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AssignSkillTest2Test", reflect.TypeOf((*MockDataService)(nil).AssignSkillTest2Test), arg0, arg1, arg2)
}

// AssignTestClass mocks base method.
func (m *MockDataService) AssignTestClass(arg0 context.Context, arg1 entity.TestClassRelation) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "AssignTestClass", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// AssignTestClass indicates an expected call of AssignTestClass.
func (mr *MockDataServiceMockRecorder) AssignTestClass(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AssignTestClass", reflect.TypeOf((*MockDataService)(nil).AssignTestClass), arg0, arg1)
}

// CheckExistedUserClass mocks base method.
func (m *MockDataService) CheckExistedUserClass(arg0 context.Context, arg1, arg2 int) (bool, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "CheckExistedUserClass", arg0, arg1, arg2)
	ret0, _ := ret[0].(bool)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// CheckExistedUserClass indicates an expected call of CheckExistedUserClass.
func (mr *MockDataServiceMockRecorder) CheckExistedUserClass(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CheckExistedUserClass", reflect.TypeOf((*MockDataService)(nil).CheckExistedUserClass), arg0, arg1, arg2)
}

// CreateClass mocks base method.
func (m *MockDataService) CreateClass(arg0 context.Context, arg1 entity.Class) (int, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "CreateClass", arg0, arg1)
	ret0, _ := ret[0].(int)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// CreateClass indicates an expected call of CreateClass.
func (mr *MockDataServiceMockRecorder) CreateClass(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CreateClass", reflect.TypeOf((*MockDataService)(nil).CreateClass), arg0, arg1)
}

// CreateSkillTest mocks base method.
func (m *MockDataService) CreateSkillTest(arg0 context.Context, arg1 entity.SkillTest) (int, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "CreateSkillTest", arg0, arg1)
	ret0, _ := ret[0].(int)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// CreateSkillTest indicates an expected call of CreateSkillTest.
func (mr *MockDataServiceMockRecorder) CreateSkillTest(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CreateSkillTest", reflect.TypeOf((*MockDataService)(nil).CreateSkillTest), arg0, arg1)
}

// CreateTag mocks base method.
func (m *MockDataService) CreateTag(arg0 context.Context, arg1 entity.Tag) (int, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "CreateTag", arg0, arg1)
	ret0, _ := ret[0].(int)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// CreateTag indicates an expected call of CreateTag.
func (mr *MockDataServiceMockRecorder) CreateTag(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CreateTag", reflect.TypeOf((*MockDataService)(nil).CreateTag), arg0, arg1)
}

// CreateTest mocks base method.
func (m *MockDataService) CreateTest(arg0 context.Context, arg1 entity.Test) (int, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "CreateTest", arg0, arg1)
	ret0, _ := ret[0].(int)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// CreateTest indicates an expected call of CreateTest.
func (mr *MockDataServiceMockRecorder) CreateTest(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CreateTest", reflect.TypeOf((*MockDataService)(nil).CreateTest), arg0, arg1)
}

// CreateTestAnswer mocks base method.
func (m *MockDataService) CreateTestAnswer(arg0 context.Context, arg1 entity.SubmittedAnswer) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "CreateTestAnswer", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// CreateTestAnswer indicates an expected call of CreateTestAnswer.
func (mr *MockDataServiceMockRecorder) CreateTestAnswer(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CreateTestAnswer", reflect.TypeOf((*MockDataService)(nil).CreateTestAnswer), arg0, arg1)
}

// CreateTestResult mocks base method.
func (m *MockDataService) CreateTestResult(arg0 context.Context, arg1 entity.TestResult) (int, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "CreateTestResult", arg0, arg1)
	ret0, _ := ret[0].(int)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// CreateTestResult indicates an expected call of CreateTestResult.
func (mr *MockDataServiceMockRecorder) CreateTestResult(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CreateTestResult", reflect.TypeOf((*MockDataService)(nil).CreateTestResult), arg0, arg1)
}

// CreateUser mocks base method.
func (m *MockDataService) CreateUser(arg0 context.Context, arg1 entity.User) (int, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "CreateUser", arg0, arg1)
	ret0, _ := ret[0].(int)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// CreateUser indicates an expected call of CreateUser.
func (mr *MockDataServiceMockRecorder) CreateUser(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CreateUser", reflect.TypeOf((*MockDataService)(nil).CreateUser), arg0, arg1)
}

// DeleteClass mocks base method.
func (m *MockDataService) DeleteClass(arg0 context.Context, arg1 int) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DeleteClass", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// DeleteClass indicates an expected call of DeleteClass.
func (mr *MockDataServiceMockRecorder) DeleteClass(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DeleteClass", reflect.TypeOf((*MockDataService)(nil).DeleteClass), arg0, arg1)
}

// DeleteSkillTest mocks base method.
func (m *MockDataService) DeleteSkillTest(arg0 context.Context, arg1 entity.SkillTest) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DeleteSkillTest", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// DeleteSkillTest indicates an expected call of DeleteSkillTest.
func (mr *MockDataServiceMockRecorder) DeleteSkillTest(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DeleteSkillTest", reflect.TypeOf((*MockDataService)(nil).DeleteSkillTest), arg0, arg1)
}

// DeleteSkillTestAndTest mocks base method.
func (m *MockDataService) DeleteSkillTestAndTest(arg0 context.Context, arg1, arg2 int) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DeleteSkillTestAndTest", arg0, arg1, arg2)
	ret0, _ := ret[0].(error)
	return ret0
}

// DeleteSkillTestAndTest indicates an expected call of DeleteSkillTestAndTest.
func (mr *MockDataServiceMockRecorder) DeleteSkillTestAndTest(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DeleteSkillTestAndTest", reflect.TypeOf((*MockDataService)(nil).DeleteSkillTestAndTest), arg0, arg1, arg2)
}

// DeleteTag mocks base method.
func (m *MockDataService) DeleteTag(arg0 context.Context, arg1 int) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DeleteTag", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// DeleteTag indicates an expected call of DeleteTag.
func (mr *MockDataServiceMockRecorder) DeleteTag(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DeleteTag", reflect.TypeOf((*MockDataService)(nil).DeleteTag), arg0, arg1)
}

// DeleteTest mocks base method.
func (m *MockDataService) DeleteTest(arg0 context.Context, arg1 int) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DeleteTest", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// DeleteTest indicates an expected call of DeleteTest.
func (mr *MockDataServiceMockRecorder) DeleteTest(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DeleteTest", reflect.TypeOf((*MockDataService)(nil).DeleteTest), arg0, arg1)
}

// DeleteTestAnswer mocks base method.
func (m *MockDataService) DeleteTestAnswer(arg0 context.Context, arg1 entity.SubmittedAnswer) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DeleteTestAnswer", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// DeleteTestAnswer indicates an expected call of DeleteTestAnswer.
func (mr *MockDataServiceMockRecorder) DeleteTestAnswer(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DeleteTestAnswer", reflect.TypeOf((*MockDataService)(nil).DeleteTestAnswer), arg0, arg1)
}

// DeleteTestClass mocks base method.
func (m *MockDataService) DeleteTestClass(arg0 context.Context, arg1, arg2 int) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DeleteTestClass", arg0, arg1, arg2)
	ret0, _ := ret[0].(error)
	return ret0
}

// DeleteTestClass indicates an expected call of DeleteTestClass.
func (mr *MockDataServiceMockRecorder) DeleteTestClass(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DeleteTestClass", reflect.TypeOf((*MockDataService)(nil).DeleteTestClass), arg0, arg1, arg2)
}

// DeleteTestResult mocks base method.
func (m *MockDataService) DeleteTestResult(arg0 context.Context, arg1 int) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DeleteTestResult", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// DeleteTestResult indicates an expected call of DeleteTestResult.
func (mr *MockDataServiceMockRecorder) DeleteTestResult(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DeleteTestResult", reflect.TypeOf((*MockDataService)(nil).DeleteTestResult), arg0, arg1)
}

// DeleteTestResultOfClass mocks base method.
func (m *MockDataService) DeleteTestResultOfClass(arg0 context.Context, arg1 int) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DeleteTestResultOfClass", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// DeleteTestResultOfClass indicates an expected call of DeleteTestResultOfClass.
func (mr *MockDataServiceMockRecorder) DeleteTestResultOfClass(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DeleteTestResultOfClass", reflect.TypeOf((*MockDataService)(nil).DeleteTestResultOfClass), arg0, arg1)
}

// DeleteUser mocks base method.
func (m *MockDataService) DeleteUser(arg0 context.Context, arg1 int) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DeleteUser", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// DeleteUser indicates an expected call of DeleteUser.
func (mr *MockDataServiceMockRecorder) DeleteUser(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DeleteUser", reflect.TypeOf((*MockDataService)(nil).DeleteUser), arg0, arg1)
}

// DeleteUserClass mocks base method.
func (m *MockDataService) DeleteUserClass(arg0 context.Context, arg1, arg2 int) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DeleteUserClass", arg0, arg1, arg2)
	ret0, _ := ret[0].(error)
	return ret0
}

// DeleteUserClass indicates an expected call of DeleteUserClass.
func (mr *MockDataServiceMockRecorder) DeleteUserClass(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DeleteUserClass", reflect.TypeOf((*MockDataService)(nil).DeleteUserClass), arg0, arg1, arg2)
}

// EnableTx mocks base method.
func (m *MockDataService) EnableTx(arg0 func() error) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "EnableTx", arg0)
	ret0, _ := ret[0].(error)
	return ret0
}

// EnableTx indicates an expected call of EnableTx.
func (mr *MockDataServiceMockRecorder) EnableTx(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "EnableTx", reflect.TypeOf((*MockDataService)(nil).EnableTx), arg0)
}

// FindTestAnswer mocks base method.
func (m *MockDataService) FindTestAnswer(arg0 context.Context, arg1 int) (entity.SubmittedAnswer, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "FindTestAnswer", arg0, arg1)
	ret0, _ := ret[0].(entity.SubmittedAnswer)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// FindTestAnswer indicates an expected call of FindTestAnswer.
func (mr *MockDataServiceMockRecorder) FindTestAnswer(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "FindTestAnswer", reflect.TypeOf((*MockDataService)(nil).FindTestAnswer), arg0, arg1)
}

// QueryAllClass mocks base method.
func (m *MockDataService) QueryAllClass(arg0 context.Context) ([]entity.Class, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "QueryAllClass", arg0)
	ret0, _ := ret[0].([]entity.Class)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// QueryAllClass indicates an expected call of QueryAllClass.
func (mr *MockDataServiceMockRecorder) QueryAllClass(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "QueryAllClass", reflect.TypeOf((*MockDataService)(nil).QueryAllClass), arg0)
}

// QueryAllTest mocks base method.
func (m *MockDataService) QueryAllTest(arg0 context.Context) ([]entity.Test, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "QueryAllTest", arg0)
	ret0, _ := ret[0].([]entity.Test)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// QueryAllTest indicates an expected call of QueryAllTest.
func (mr *MockDataServiceMockRecorder) QueryAllTest(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "QueryAllTest", reflect.TypeOf((*MockDataService)(nil).QueryAllTest), arg0)
}

// QueryAllTestHeadlines mocks base method.
func (m *MockDataService) QueryAllTestHeadlines(arg0 context.Context) ([]entity.Test, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "QueryAllTestHeadlines", arg0)
	ret0, _ := ret[0].([]entity.Test)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// QueryAllTestHeadlines indicates an expected call of QueryAllTestHeadlines.
func (mr *MockDataServiceMockRecorder) QueryAllTestHeadlines(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "QueryAllTestHeadlines", reflect.TypeOf((*MockDataService)(nil).QueryAllTestHeadlines), arg0)
}

// QueryClass mocks base method.
func (m *MockDataService) QueryClass(arg0 context.Context, arg1 int, arg2 string) ([]entity.Class, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "QueryClass", arg0, arg1, arg2)
	ret0, _ := ret[0].([]entity.Class)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// QueryClass indicates an expected call of QueryClass.
func (mr *MockDataServiceMockRecorder) QueryClass(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "QueryClass", reflect.TypeOf((*MockDataService)(nil).QueryClass), arg0, arg1, arg2)
}

// QueryClassDoneTest mocks base method.
func (m *MockDataService) QueryClassDoneTest(arg0 context.Context, arg1 int) ([]entity.TestClassRelation, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "QueryClassDoneTest", arg0, arg1)
	ret0, _ := ret[0].([]entity.TestClassRelation)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// QueryClassDoneTest indicates an expected call of QueryClassDoneTest.
func (mr *MockDataServiceMockRecorder) QueryClassDoneTest(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "QueryClassDoneTest", reflect.TypeOf((*MockDataService)(nil).QueryClassDoneTest), arg0, arg1)
}

// QueryClassOfUser mocks base method.
func (m *MockDataService) QueryClassOfUser(arg0 context.Context, arg1 int) ([]int, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "QueryClassOfUser", arg0, arg1)
	ret0, _ := ret[0].([]int)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// QueryClassOfUser indicates an expected call of QueryClassOfUser.
func (mr *MockDataServiceMockRecorder) QueryClassOfUser(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "QueryClassOfUser", reflect.TypeOf((*MockDataService)(nil).QueryClassOfUser), arg0, arg1)
}

// QuerySkillTest mocks base method.
func (m *MockDataService) QuerySkillTest(arg0 context.Context, arg1 int) (entity.SkillTest, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "QuerySkillTest", arg0, arg1)
	ret0, _ := ret[0].(entity.SkillTest)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// QuerySkillTest indicates an expected call of QuerySkillTest.
func (mr *MockDataServiceMockRecorder) QuerySkillTest(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "QuerySkillTest", reflect.TypeOf((*MockDataService)(nil).QuerySkillTest), arg0, arg1)
}

// QuerySkillTestOfTest mocks base method.
func (m *MockDataService) QuerySkillTestOfTest(arg0 context.Context, arg1 int) ([]int, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "QuerySkillTestOfTest", arg0, arg1)
	ret0, _ := ret[0].([]int)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// QuerySkillTestOfTest indicates an expected call of QuerySkillTestOfTest.
func (mr *MockDataServiceMockRecorder) QuerySkillTestOfTest(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "QuerySkillTestOfTest", reflect.TypeOf((*MockDataService)(nil).QuerySkillTestOfTest), arg0, arg1)
}

// QueryTag mocks base method.
func (m *MockDataService) QueryTag(arg0 context.Context, arg1, arg2 int) ([]entity.Tag, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "QueryTag", arg0, arg1, arg2)
	ret0, _ := ret[0].([]entity.Tag)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// QueryTag indicates an expected call of QueryTag.
func (mr *MockDataServiceMockRecorder) QueryTag(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "QueryTag", reflect.TypeOf((*MockDataService)(nil).QueryTag), arg0, arg1, arg2)
}

// QueryTestByTestTag mocks base method.
func (m *MockDataService) QueryTestByTestTag(arg0 context.Context, arg1 int) ([]entity.Test, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "QueryTestByTestTag", arg0, arg1)
	ret0, _ := ret[0].([]entity.Test)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// QueryTestByTestTag indicates an expected call of QueryTestByTestTag.
func (mr *MockDataServiceMockRecorder) QueryTestByTestTag(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "QueryTestByTestTag", reflect.TypeOf((*MockDataService)(nil).QueryTestByTestTag), arg0, arg1)
}

// QueryTestClass mocks base method.
func (m *MockDataService) QueryTestClass(arg0 context.Context, arg1 int) ([]entity.TestClassRelation, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "QueryTestClass", arg0, arg1)
	ret0, _ := ret[0].([]entity.TestClassRelation)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// QueryTestClass indicates an expected call of QueryTestClass.
func (mr *MockDataServiceMockRecorder) QueryTestClass(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "QueryTestClass", reflect.TypeOf((*MockDataService)(nil).QueryTestClass), arg0, arg1)
}

// QueryTestHeadline mocks base method.
func (m *MockDataService) QueryTestHeadline(arg0 context.Context, arg1 int, arg2 string) ([]entity.Test, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "QueryTestHeadline", arg0, arg1, arg2)
	ret0, _ := ret[0].([]entity.Test)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// QueryTestHeadline indicates an expected call of QueryTestHeadline.
func (mr *MockDataServiceMockRecorder) QueryTestHeadline(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "QueryTestHeadline", reflect.TypeOf((*MockDataService)(nil).QueryTestHeadline), arg0, arg1, arg2)
}

// QueryTestOfClass mocks base method.
func (m *MockDataService) QueryTestOfClass(arg0 context.Context, arg1 int) ([]entity.TestClassRelation, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "QueryTestOfClass", arg0, arg1)
	ret0, _ := ret[0].([]entity.TestClassRelation)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// QueryTestOfClass indicates an expected call of QueryTestOfClass.
func (mr *MockDataServiceMockRecorder) QueryTestOfClass(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "QueryTestOfClass", reflect.TypeOf((*MockDataService)(nil).QueryTestOfClass), arg0, arg1)
}

// QueryTestResultDetails mocks base method.
func (m *MockDataService) QueryTestResultDetails(arg0 context.Context, arg1 int) ([]entity.TestResult, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "QueryTestResultDetails", arg0, arg1)
	ret0, _ := ret[0].([]entity.TestResult)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// QueryTestResultDetails indicates an expected call of QueryTestResultDetails.
func (mr *MockDataServiceMockRecorder) QueryTestResultDetails(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "QueryTestResultDetails", reflect.TypeOf((*MockDataService)(nil).QueryTestResultDetails), arg0, arg1)
}

// QueryTestResultIndexScore mocks base method.
func (m *MockDataService) QueryTestResultIndexScore(arg0 context.Context, arg1, arg2 int, arg3 time.Time, arg4 int) ([]entity.TestResult, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "QueryTestResultIndexScore", arg0, arg1, arg2, arg3, arg4)
	ret0, _ := ret[0].([]entity.TestResult)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// QueryTestResultIndexScore indicates an expected call of QueryTestResultIndexScore.
func (mr *MockDataServiceMockRecorder) QueryTestResultIndexScore(arg0, arg1, arg2, arg3, arg4 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "QueryTestResultIndexScore", reflect.TypeOf((*MockDataService)(nil).QueryTestResultIndexScore), arg0, arg1, arg2, arg3, arg4)
}

// QueryUser mocks base method.
func (m *MockDataService) QueryUser(arg0 context.Context, arg1, arg2 string, arg3, arg4 int, arg5 bool) ([]entity.User, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "QueryUser", arg0, arg1, arg2, arg3, arg4, arg5)
	ret0, _ := ret[0].([]entity.User)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// QueryUser indicates an expected call of QueryUser.
func (mr *MockDataServiceMockRecorder) QueryUser(arg0, arg1, arg2, arg3, arg4, arg5 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "QueryUser", reflect.TypeOf((*MockDataService)(nil).QueryUser), arg0, arg1, arg2, arg3, arg4, arg5)
}

// QueryUserOfClass mocks base method.
func (m *MockDataService) QueryUserOfClass(arg0 context.Context, arg1 int) ([]int, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "QueryUserOfClass", arg0, arg1)
	ret0, _ := ret[0].([]int)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// QueryUserOfClass indicates an expected call of QueryUserOfClass.
func (mr *MockDataServiceMockRecorder) QueryUserOfClass(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "QueryUserOfClass", reflect.TypeOf((*MockDataService)(nil).QueryUserOfClass), arg0, arg1)
}

// UnarchieveUserClass mocks base method.
func (m *MockDataService) UnarchieveUserClass(arg0 context.Context, arg1, arg2 int) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "UnarchieveUserClass", arg0, arg1, arg2)
	ret0, _ := ret[0].(error)
	return ret0
}

// UnarchieveUserClass indicates an expected call of UnarchieveUserClass.
func (mr *MockDataServiceMockRecorder) UnarchieveUserClass(arg0, arg1, arg2 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UnarchieveUserClass", reflect.TypeOf((*MockDataService)(nil).UnarchieveUserClass), arg0, arg1, arg2)
}

// UpdateSkillTest mocks base method.
func (m *MockDataService) UpdateSkillTest(arg0 context.Context, arg1 entity.SkillTest) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "UpdateSkillTest", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// UpdateSkillTest indicates an expected call of UpdateSkillTest.
func (mr *MockDataServiceMockRecorder) UpdateSkillTest(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateSkillTest", reflect.TypeOf((*MockDataService)(nil).UpdateSkillTest), arg0, arg1)
}

// UpdateTag mocks base method.
func (m *MockDataService) UpdateTag(arg0 context.Context, arg1 entity.Tag) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "UpdateTag", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// UpdateTag indicates an expected call of UpdateTag.
func (mr *MockDataServiceMockRecorder) UpdateTag(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateTag", reflect.TypeOf((*MockDataService)(nil).UpdateTag), arg0, arg1)
}

// UpdateTest mocks base method.
func (m *MockDataService) UpdateTest(arg0 context.Context, arg1 entity.Test) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "UpdateTest", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// UpdateTest indicates an expected call of UpdateTest.
func (mr *MockDataServiceMockRecorder) UpdateTest(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateTest", reflect.TypeOf((*MockDataService)(nil).UpdateTest), arg0, arg1)
}

// UpdateTestAnswer mocks base method.
func (m *MockDataService) UpdateTestAnswer(arg0 context.Context, arg1 entity.SubmittedAnswer) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "UpdateTestAnswer", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// UpdateTestAnswer indicates an expected call of UpdateTestAnswer.
func (mr *MockDataServiceMockRecorder) UpdateTestAnswer(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateTestAnswer", reflect.TypeOf((*MockDataService)(nil).UpdateTestAnswer), arg0, arg1)
}

// UpdateTestResult mocks base method.
func (m *MockDataService) UpdateTestResult(arg0 context.Context, arg1 entity.TestResult) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "UpdateTestResult", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// UpdateTestResult indicates an expected call of UpdateTestResult.
func (mr *MockDataServiceMockRecorder) UpdateTestResult(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateTestResult", reflect.TypeOf((*MockDataService)(nil).UpdateTestResult), arg0, arg1)
}

// UpdateUser mocks base method.
func (m *MockDataService) UpdateUser(arg0 context.Context, arg1 entity.User) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "UpdateUser", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// UpdateUser indicates an expected call of UpdateUser.
func (mr *MockDataServiceMockRecorder) UpdateUser(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateUser", reflect.TypeOf((*MockDataService)(nil).UpdateUser), arg0, arg1)
}
