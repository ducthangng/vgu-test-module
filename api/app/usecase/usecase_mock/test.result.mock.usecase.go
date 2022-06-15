package mockusecase

type MockTestResultUseCase struct {
	ctrl     *gomock.Controller
	recorder *MockTestResultUseCaseMockRecorder
}

type MockTestResultUseCaseMockRecorder struct {
	mock *MockTestResultUseCase
}

func NewMockTestResultUseCase(ctrl *gomock.Controller) *MockTestResultUseCase {
	mock := &MockTestResultUseCase{ctrl: ctrl}
	mock.recorder = &MockTestResultUseCaseMockRecorder{mock}
	return mock
}

func (m *MockTestResultUseCase) EXPECT() *MockTestResultUseCaseMockRecorder {
	return m.recorder
}