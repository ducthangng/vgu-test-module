package mockusecase

type MockTestUseCase struct {
	ctrl     *gomock.Controller
	recorder *MockTestUseCaseMockRecorder
}

type MockTestUseCaseMockRecorder struct {
	mock *MockTestUseCase
}

func NewMockTestUseCase(ctrl *gomock.Controller) *MockTestUseCase {
	mock := &MockTestUseCase{ctrl: ctrl}
	mock.recorder = &MockTestUseCaseMockRecorder{mock}
	return mock
}

func (m *MockTestUseCase) EXPECT() *MockTestUseCaseMockRecorder {
	return m.recorder
}