package mysqldb

import (
	"context"
	"database/sql"
	"server/app/domain/entity"
	"server/utils/conversion"
	"server/utils/e"
	"time"
)

func buildBulkInsertTestQuestion(records []entity.TestQuestion) (string, []interface{}) {
	var sqlqueries string
	vals := []interface{}{}
	date := conversion.ConvertUnixTimeMySqlTime(time.Now().Unix())

	sqlqueries = "INSERT INTO testquestion(content, type , difficulty, datecreated) VALUES "
	for _, record := range records {
		sqlqueries += "(?, ?, ?, ?),"
		vals = append(vals, record.Content, record.Type, record.Difficulty, date)
	}

	// Trim the last comma
	sqlqueries = sqlqueries[0 : len(sqlqueries)-1]
	return sqlqueries, vals
}

func (q *Querier) CreateTestQuestion(ctx context.Context, record entity.TestQuestion) (int, error) {
	date := conversion.ConvertUnixTimeMySqlTime(time.Now().Unix())

	result, err := q.DB.ExecContext(ctx, "INSERT INTO testquestions(content, type , difficulty, datecreated) VALUES (?, ?, ?, ?)", record.Content, record.Type, record.Difficulty, date)
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
func (q *Querier) UpdateTestQuestion(ctx context.Context, record entity.TestQuestion) error {
	stmt, err := q.DB.PrepareContext(ctx, "UPDATE testquestions SET content = ?, type = ?, difficulty = ?,  dateupdated = ?  WHERE id = ?")
	if err != nil {
		return err
	}

	date := conversion.ConvertUnixTimeMySqlTime(time.Now().Unix())
	_, err = stmt.ExecContext(ctx, record.Content, record.Type, record.Difficulty, date, record.ID)
	if err != nil {
		return err
	}

	return nil
}

// Flag determine the query element of the functions: [0 - ID]  [1 - Content]
func (q *Querier) QueryTestQuestion(ctx context.Context, ID int, Content string, Flag int) (result []entity.TestQuestion, err error) {
	switch Flag {
	case 0:
		rows, err := q.DB.QueryContext(ctx, "SELECT * FROM testquestions WHERE id = ?", ID)
		return refactorQueryTestQuestion(rows, err)
	case 1:
		rows, err := q.DB.QueryContext(ctx, "SELECT * FROM testquestions WHERE content like ?", "%"+Content+"%")
		return refactorQueryTestQuestion(rows, err)
	default:
		return result, e.ErrorInputInvalid
	}
}

func refactorQueryTestQuestion(rows *sql.Rows, err error) (result []entity.TestQuestion, nerr error) {
	if err == sql.ErrNoRows {
		return result, nil
	}

	if err != nil {
		return result, nil
	}

	for rows.Next() {
		var t entity.TestQuestion
		var created string
		var updated sql.NullString
		err := rows.Scan(&t.ID, &t.Content, &t.Type, &t.Difficulty, &updated, &created)

		if err != nil {
			return result, err
		}

		if updated.Valid {
			t.DateUpdated = conversion.ConvertMysqlTimeUnixTime(updated.String)
		}

		t.DateCreated = conversion.ConvertMysqlTimeUnixTime(created)
		result = append(result, t)
	}

	return result, nil
}

func (q *Querier) DeleteTestQuestion(ctx context.Context, ID int) error {
	stmt, err := q.DB.PrepareContext(ctx, "Delete from testquestions WHERE id = ?")
	if err != nil {
		return err
	}

	_, err = stmt.ExecContext(ctx, ID)
	if err != nil {
		return err
	}

	return nil
}
