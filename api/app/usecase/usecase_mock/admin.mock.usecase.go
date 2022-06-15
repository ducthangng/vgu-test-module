package mockusecase

type MockAdminUseCase struct {
	ctrl     *gomock.Controller
	recorder *MockAdminUseCaseMockRecorder
}

type MockAdminUseCaseMockRecorder struct {
	mock *MockAdminUseCase
}

func NewMockAdminUseCase(ctrl *gomock.Controller) *MockAdminUseCase {
	mock := &MockAdminUseCase{ctrl: ctrl}
	mock.recorder = &MockAdminUseCaseMockRecorder{mock}
	return mock
}

func (m *MockAdminUseCase) EXPECT() *MockAdminUseCaseMockRecorder {
	return m.recorder
}