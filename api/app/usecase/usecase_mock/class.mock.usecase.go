package mockusecase

import "github.com/golang/mock/gomock"

type MockClassUseCase struct {
	ctrl     *gomock.Controller
	recorder *MockUserUseCaseMockRecorder
}

// MockUserUseCaseMockRecorder is the mock recorder for MockUserUseCase
type MockClassUseCaseMockRecorder struct {
	mock *MockUserUseCase
}

// NewMockUserUseCase creates a new mock instance
func NewMockClassUseCase(ctrl *gomock.Controller) *MockUserUseCase {
	mock := &MockUserUseCase{ctrl: ctrl}
	mock.recorder = &MockUserUseCaseMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use
func (m *MockClassUseCase) EXPECT() *MockUserUseCaseMockRecorder {
	return m.recorder
}
