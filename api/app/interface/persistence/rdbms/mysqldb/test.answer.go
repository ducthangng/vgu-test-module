package mysqldb

import (
	"context"
	"database/sql"
	"server/app/domain/entity"
	"server/utils/e"
)

func buildBulkInsertTestAnswers(records []entity.TestAnswer) (string, []interface{}) {
	var sqlqueries string
	vals := []interface{}{}

	sqlqueries = "INSERT INTO testanswers(question_id, content, is_correct) VALUES "
	for _, record := range records {
		sqlqueries += "(?, ?, ?),"
		vals = append(vals, record.QuestionID, record.Content)
	}

	// Trim the last comma
	sqlqueries = sqlqueries[0 : len(sqlqueries)-1]
	return sqlqueries, vals
}

func (q *Querier) CreateTestAnswer(ctx context.Context, record []entity.TestAnswer) (int, error) {
	execString, vals := buildBulkInsertTestAnswers(record)

	result, err := q.DB.ExecContext(ctx, execString, vals...)
	if err != nil {
		return 0, err
	}

	k, err := result.LastInsertId()
	if err != nil {
		return 0, err
	}

	id := int(k)
	return id, nil
}

// Replaceable fields: content, type, difficulty, answerid.
func (q *Querier) UpdateTestAnswer(ctx context.Context, record entity.TestAnswer) error {
	stmt, err := q.DB.PrepareContext(ctx, "UPDATE testanswers SET content = ?, is_correct = ? WHERE id = ?")
	if err != nil {
		return err
	}

	_, err = stmt.ExecContext(ctx, record.Content, record.IsCorrect, record.ID)

	if err != nil {
		return err
	}

	return nil
}

// Flag determine the query element of the functions: [0 - ID]  [1 - Content]
func (q *Querier) QueryTestAnswer(ctx context.Context, ID int, Content string, Flag int) (result []entity.TestAnswer, err error) {
	switch Flag {
	case 0:
		rows, err := q.DB.QueryContext(ctx, "SELECT * FROM testanswers WHERE id = ?", ID)
		return refactorQueryTestAnswer(rows, err)
	case 1:
		rows, err := q.DB.QueryContext(ctx, "SELECT * FROM testanswers WHERE content like ?", "%"+Content+"%", 1)
		return refactorQueryTestAnswer(rows, err)
	default:
		return result, e.ErrorInputInvalid
	}
}

func refactorQueryTestAnswer(rows *sql.Rows, err error) (result []entity.TestAnswer, nerr error) {
	if err == sql.ErrNoRows {
		return result, nil
	}

	if err != nil {
		return result, nil
	}

	for rows.Next() {
		var t entity.TestAnswer
		err := rows.Scan(&t.ID, &t.QuestionID, &t.Content, &t.IsCorrect)

		if err != nil {
			return result, err
		}

		result = append(result, t)
	}

	return result, nil
}

func (q *Querier) DeleteTestAnswer(ctx context.Context, ID int) error {
	stmt, err := q.DB.PrepareContext(ctx, "Delete from testanswers set WHERE id = ?")
	if err != nil {
		return err
	}

	_, err = stmt.ExecContext(ctx, 0, ID)
	if err != nil {
		return err
	}

	return nil
}
