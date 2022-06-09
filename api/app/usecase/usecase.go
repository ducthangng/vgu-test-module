package usecase

import (
	"context"
	"server/app/usecase/usecase_dto"
)

type AdminService interface {
	UpdateUserTestResult(ctx context.Context, testResult usecase_dto.TestResult) (err error)

	DeleteUserTestResult(ctx context.Context, id int) (err error)

	// @transaction
	DeleteUser(ctx context.Context, id int) (err error)
}

type UserService interface {
	CreateUser(ctx context.Context, user usecase_dto.User) (id int, err error)

	UpdateUser(ctx context.Context, user usecase_dto.User) (err error)

	FindUser(ctx context.Context, user usecase_dto.User, HasPassword bool) (result usecase_dto.User, err error)

	GetAllUserTestResults(ctx context.Context, userId int) (results []usecase_dto.TestResult, err error)

	ReviewTestResult(ctx context.Context, resultId int) (skilltest usecase_dto.SkillTest, err error)
}

type ClassService interface {
	DeleteClass(ctx context.Context, classId int) error

	CreateClass(ctx context.Context, class usecase_dto.Class) error

	GetClasses(ctx context.Context) (classes []usecase_dto.Class, err error)

	QueryClassMembers(ctx context.Context, classId int) (users []usecase_dto.User, err error)

	AddMember2Class(ctx context.Context, classId int, userId int) (err error)

	RemoveMember2Class(ctx context.Context, classId int, userId int) (err error)

	QueryClassTestResult(ctx context.Context, classId int, testId int) (err error)

	GetClassTest(ctx context.Context, classId int) (tests []usecase_dto.Test, err error)
}

type TestService interface {
	// GetTestByID returns a test by its ID.
	QueryTestInfo(ctx context.Context, testId int) (test usecase_dto.Test, err error)

	QueryTestDetails(ctx context.Context, testId int) (test usecase_dto.SkillTest, err error)

	SubmitTest(ctx context.Context, data usecase_dto.SubmitData) (testResultId int, err error)
}

type TestSkillService interface {
	QueryTestSkill() (result []usecase_dto.SkillTest, err error)

	InsertTestResult() (result []usecase_dto.SkillTest, err error)

	GradeTest() (result []usecase_dto.SkillTest, err error)

	QueryTestResult(ctx context.Context, userId int)

	GetAllUserTestResults(ctx context.Context, userID int) (results []usecase_dto.TestResult, err error)

	GetUserTestResultDetail(ctx context.Context, testId int) (result usecase_dto.TestResult, err error)
}

type TestResultService interface {
	QueryTestSkill() (result []usecase_dto.SkillTest, err error)

	InsertTestResult() (result []usecase_dto.SkillTest, err error)

	GradeTest() (result []usecase_dto.SkillTest, err error)

	QueryTestResult(ctx context.Context, userId int)

	GetAllUserTestResults(ctx context.Context, userID int) (results []usecase_dto.TestResult, err error)

	GetUserTestResultDetail(ctx context.Context, testId int) (result usecase_dto.TestResult, err error)
}