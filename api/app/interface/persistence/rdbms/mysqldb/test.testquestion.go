package mysqldb

import (
	"context"
	"database/sql"
	"server/app/domain/entity"
)

func buildBulkInsertTestAndQuestion(records []entity.QuestionTest) (string, []interface{}) {
	var sqlqueries string
	vals := []interface{}{}

	sqlqueries = "INSERT INTO test_testquestion(tid, qid) VALUES "
	for _, v := range records {
		sqlqueries += "(?, ?),"
		vals = append(vals, v.TestID, v.QuestionID)
	}

	// Trim the last comma
	sqlqueries = sqlqueries[0 : len(sqlqueries)-1]
	return sqlqueries, vals
}

func (q *Querier) AddTestQuestionToTest(ctx context.Context, records []entity.QuestionTest) error {
	query_string, vals := buildBulkInsertTestAndQuestion(records)
	stmt, err := q.DB.PrepareContext(ctx, query_string)
	if err != nil {
		return err
	}

	_, err = stmt.ExecContext(ctx, vals...)
	if err != nil {
		return err
	}

	return nil
}

func (q *Querier) QueryTestQuestionOfTest(ctx context.Context, TestID int) (result []int, err error) {
	rows, err := q.DB.QueryContext(ctx, "SELECT qid FROM test_testquestion WHERE tid = ?", TestID)
	if err == sql.ErrNoRows {
		return nil, nil
	}

	if err != nil {
		return nil, err
	}

	for rows.Next() {
		var x int
		err := rows.Scan(&x)
		if err != nil {
			return result, err
		}

		result = append(result, x)
	}

	return result, nil
}

func (q *Querier) QueryTestOfTestQuestion(ctx context.Context, QuestionID int) (result []int, err error) {
	rows, err := q.DB.QueryContext(ctx, "SELECT tid FROM test_testquestion WHERE qid = ?", QuestionID)
	if err == sql.ErrNoRows {
		return nil, nil
	}

	if err != nil {
		return nil, err
	}

	for rows.Next() {
		var x int
		err := rows.Scan(&x)
		if err != nil {
			return result, err
		}

		result = append(result, x)
	}

	return result, nil
}

func (q *Querier) DeleteTestQuestionFromTest(ctx context.Context, TestID int, QuestionID int) error {
	_, err := q.DB.ExecContext(ctx, "Delete from test_testquestion where tid = ? and qid = ?", TestID, QuestionID)
	if err != nil {
		return err
	}

	return nil
}

func (q *Querier) DeleteAllTestQuestionOfTest(ctx context.Context, TestID int) error {
	_, err := q.DB.ExecContext(ctx, "Delete from test_testquestion where test_id = ?", TestID)
	if err != nil {
		return err
	}

	return nil
}
