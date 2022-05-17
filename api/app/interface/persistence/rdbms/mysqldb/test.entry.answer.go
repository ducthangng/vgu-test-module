package mysqldb

import (
	"context"
	"database/sql"
	"fmt"
	"server/app/domain/entity"
)

var (
	TestEntryAnswerTable     = "testentryanswers"
	TestEntryAnswerTextTable = "testentryanswertexts"
)

func buildBulkInsertTestAnswerQuery(texts []entity.TestEntryAnswerText, entries []entity.TestEntryAnswer, table string) (string, []interface{}) {
	var sqlqueries string
	vals := []interface{}{}

	switch table {
	case TestEntryAnswerTextTable:
		sqlqueries = fmt.Sprintf("INSERT INTO %s(result_id, questionid, answer) VALUES ", table)

		for _, v := range texts {
			sqlqueries += "(?, ?, ?, ?),"
			vals = append(vals, v.ResultID, v.QuestionID, v.Answer)
		}

	case TestEntryAnswerTable:
		sqlqueries = fmt.Sprintf("INSERT INTO %s(id, questionid, answer_id) VALUES ", table)

		for _, v := range entries {
			sqlqueries += "(?, ?, ?, ?),"
			vals = append(vals, v.ResultID, v.QuestionID, v.AnswerID)
		}
	}

	// Trim the last comma
	sqlqueries = sqlqueries[0 : len(sqlqueries)-1]
	return sqlqueries, vals
}

func buildBulkUpdateTestAnswerQuery(texts []entity.TestEntryAnswerText, entries []entity.TestEntryAnswer, table string) (string, []interface{}) {
	var sqlqueries string
	vals := []interface{}{}

	switch table {
	case TestEntryAnswerTextTable:
		sqlqueries = fmt.Sprintf("INSERT INTO %s(id, question_id, answer) VALUES ", table)

		for _, v := range texts {
			sqlqueries += "(?, ?, ?, ?),"
			vals = append(vals, v.ResultID, v.QuestionID, v.Answer)
		}

		// Trim the last comma
		sqlqueries = sqlqueries[0 : len(sqlqueries)-1]

	case TestEntryAnswerTable:
		sqlqueries = fmt.Sprintf("INSERT INTO %s(id, question_id, answer_id) VALUES ", table)

		for _, v := range entries {
			sqlqueries += "(?, ?, ?, ?),"
			vals = append(vals, v.ResultID, v.QuestionID, v.AnswerID)
		}

		// Trim the last comma
		sqlqueries = sqlqueries[0 : len(sqlqueries)-1]
	}

	return sqlqueries, vals
}

func (q *Querier) CreateTestEntryAnswer(ctx context.Context, records []entity.TestEntryAnswer) error {
	query_string, vals := buildBulkInsertTestAnswerQuery(nil, records, TestEntryAnswerTable)
	stmt, err := q.DB.PrepareContext(ctx, query_string)
	if err != nil {
		return err
	}

	_, err = stmt.ExecContext(ctx, vals...)
	return err
}

func (q *Querier) UpdateTestEntryAnswer(ctx context.Context, records []entity.TestEntryAnswer) error {
	query_string, vals := buildBulkUpdateTestAnswerQuery(nil, records, TestEntryAnswerTable)
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

func (q *Querier) QueryTestEntryAnswer(ctx context.Context, TestResultID int) (result []entity.TestEntryAnswer, err error) {
	rows, err := q.DB.QueryContext(ctx, "SELECT * FROM testentryanswers WHERE id = ?", TestResultID)
	if err == sql.ErrNoRows {
		return result, nil
	}

	if err != nil {
		return nil, err
	}

	for rows.Next() {
		var t entity.TestEntryAnswer
		err := rows.Scan(&t.ResultID, &t.QuestionID, &t.AnswerID)

		if err != nil {
			return result, err
		}

		result = append(result, t)
	}

	return result, nil

}

func (q *Querier) DeleteTestEntryAnswer(ctx context.Context, TestResultID int) error {
	stmt, err := q.DB.PrepareContext(ctx, "DELETE FROM testentryanswers WHERE id = ?")
	if err != nil {
		return err
	}

	_, err = stmt.ExecContext(ctx, TestResultID)
	if err != nil {
		return err
	}

	return nil
}

func (q *Querier) CreateTestEntryAnswerText(ctx context.Context, records []entity.TestEntryAnswerText) error {
	query_string, vals := buildBulkInsertTestAnswerQuery(records, nil, TestEntryAnswerTextTable)
	stmt, err := q.DB.PrepareContext(ctx, query_string)
	if err != nil {
		return err
	}

	_, err = stmt.ExecContext(ctx, vals...)
	return err
}

func (q *Querier) UpdateTestEntryAnswerText(ctx context.Context, records []entity.TestEntryAnswerText) error {
	query_string, vals := buildBulkUpdateTestAnswerQuery(records, nil, TestEntryAnswerTable)
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

func (q *Querier) QueryTestEntryAnswerText(ctx context.Context, TestResultID int) (result []entity.TestEntryAnswerText, err error) {
	var answer, teachercomment sql.NullString
	rows, err := q.DB.QueryContext(ctx, "SELECT * FROM testentryanswertexts WHERE id = ?", TestResultID)
	if err == sql.ErrNoRows {
		return result, nil
	}

	if err != nil {
		return result, err
	}

	for rows.Next() {
		var dto entity.TestEntryAnswerText
		err := rows.Scan(&dto.ResultID, &dto.QuestionID, &answer, &teachercomment)
		if err != nil {
			return result, err
		}

		if answer.Valid {
			dto.Answer = answer.String
		}

		result = append(result, dto)
	}

	return result, nil

}

func (q *Querier) DeleteTestEntryAnswerText(ctx context.Context, TestResultID int) error {
	stmt, err := q.DB.PrepareContext(ctx, "DELETE FROM testentryanswertexts WHERE id = ?")
	if err != nil {
		return err
	}

	_, err = stmt.ExecContext(ctx, TestResultID)
	if err != nil {
		return err
	}

	return nil
}
