package mysqldb

import (
	"context"
	"server/app/domain/entity"
	"server/utils/service"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestCreateTestQuestion(t *testing.T) {
	q := NewQuery("TestCreateTestQuestion")

	ctx := context.Background()
	for i := 1; i <= 100; i++ {
		qnaquizz := entity.TestQuestion{
			Content:    "testing quizz",
			Type:       service.RandomNumber(1, 2),
			Difficulty: service.RandomNumber(1, 5),
		}

		id1, err := q.CreateTestQuestion(ctx, qnaquizz)
		require.NoError(t, err)
		require.NotEmpty(t, id1)
	}
}

func TestUpdateTestQuestion(t *testing.T) {
	q := NewQuery("TestUpdateTestQuestion")

	ctx := context.Background()
	for i := 1; i <= 10; i++ {
		res, err := q.QueryTestQuestion(ctx, i, "", 0)
		require.NoError(t, err)
		require.NotEmpty(t, res)

		res[0].Content = `Nguyen Duc Thang just change this to be a very long content: Trong cuộc chạy đua tới bầu cử Chủ tịch Barca, Joan Laporta nói rằng ông có thể bổ nhiệm một HLV trẻ người Đức
				.Trong sáu HLV Đức kể trên, Terzic và Nagelsmann đều chưa tới 40 tuổi. `

		err = q.UpdateTestQuestion(ctx, res[0])
		require.NoError(t, err)
	}
}

func TestQueryTestQuestion(t *testing.T) {
	q := NewQuery("TestQueryTestQuestion")

	ctx := context.Background()
	for i := 1; i <= 10; i++ {
		result, err := q.QueryTestQuestion(ctx, i, "", 0)
		require.NoError(t, err)
		require.NotEmpty(t, result)
		require.NotEqual(t, result, entity.TestQuestion{})
	}
}

func TestDeleteTestQuestion(t *testing.T) {
	q := NewQuery("TestDeleteTestQuestion")

	ctx := context.Background()
	for i := 1; i <= 10; i++ {
		err := q.DeleteTestQuestion(ctx, i)
		require.NoError(t, err)
	}
}
