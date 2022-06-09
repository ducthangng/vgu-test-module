package interactor

import (
	"context"
	"server/app/domain/repository"
	"server/app/usecase/usecase_dto"
	"time"

	"github.com/jinzhu/copier"
)

type TestResultUsecase struct {
	TestResultRepository repository.DataService
}

func NewTestResultUsecase(TestSkillRepository repository.DataService) *TestResultUsecase {
	return &TestResultUsecase{
		TestResultRepository: TestSkillRepository,
	}
}

func (s *TestResultUsecase) QueryTestSkill() (result []usecase_dto.SkillTest, err error) {
	return
}

func (s *TestResultUsecase) InsertTestResult() (result []usecase_dto.SkillTest, err error) {
	return
}

func (s *TestResultUsecase) GradeTest() (result []usecase_dto.SkillTest, err error) {
	return
}

func (s *TestResultUsecase) QueryTestResult(ctx context.Context, userId int) {
}

func (s *TestResultUsecase) GetAllUserTestResults(ctx context.Context, userID int) (results []usecase_dto.TestResult, err error) {
	classes, err := s.TestResultRepository.QueryClassOfUser(ctx, userID)
	if err != nil {
		return
	}

	for _, v := range classes {
		testClass, err := s.TestResultRepository.QueryTestOfClass(ctx, v)
		if err != nil {
			return nil, err
		}

		for _, tc := range testClass {
			testResult, err := s.TestResultRepository.QueryTestResultIndexScore(ctx, tc.ID, userID, time.Now(), 4)
			if err != nil {
				return nil, err
			}

			var tr []usecase_dto.TestResult
			if err := copier.Copy(&tr, &testResult); err != nil {
				return nil, err
			}

			results = append(results, tr...)
		}
	}

	return
}

func (s *TestResultUsecase) GetUserTestResultDetail(ctx context.Context, testId int) (result usecase_dto.TestResult, err error) {
	record, err := s.TestResultRepository.QueryTestResultDetails(ctx, testId)
	if err != nil {
		return result, err
	}

	if err := copier.Copy(&result, &record); err != nil {
		return result, err
	}

	return
}
