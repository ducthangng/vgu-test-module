package repository

import (
	"context"
	"server/app/domain/entity"
)

type UserDataService interface {
}

type UserRepository interface {
}

type TestRepository interface {
	GetAllUserTestResults(ctx context.Context) ([]entity.TestResult, error)
	GetUserTestResultByID(ctx context.Context, user_id interface{}) ([]entity.TestResult, error)
}

type AdminRepository interface {
	UpdateUserTestResult(ctx context.Context, testResult *entity.TestResult) (updated *entity.TestResult, err error)
	DeleteUserTestResult(ctx context.Context, id interface{}) (deleted *entity.TestResult, err error)
}
