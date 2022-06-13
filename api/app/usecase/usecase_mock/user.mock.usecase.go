package mockusecase

import "github.com/golang/mock/gomock"

type MockUserUseCase struct {
	ctrl     *gomock.Controller
	recorder *MockUserUseCaseMockRecorder
}

// MockUserUseCaseMockRecorder is the mock recorder for MockUserUseCase
type MockUserUseCaseMockRecorder struct {
	mock *MockUserUseCase
}

// NewMockUserUseCase creates a new mock instance
func NewMockUserUseCase(ctrl *gomock.Controller) *MockUserUseCase {
	mock := &MockUserUseCase{ctrl: ctrl}
	mock.recorder = &MockUserUseCaseMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use
func (m *MockUserUseCase) EXPECT() *MockUserUseCaseMockRecorder {
	return m.recorder
}
