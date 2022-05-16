package mysqldb

import (
	"context"
	"database/sql"
	"server/app/domain/entity"
	"strings"
)

func (q *Querier) AssignTestClass(ctx context.Context, TestClass entity.TestClassRelation) error {
	stmt, err := q.DB.PrepareContext(ctx, "INSERT test_class SET tid = ?, cid = ?, ispublished = ?")
	if err != nil {
		return err
	}

	_, err = stmt.ExecContext(ctx, TestClass.TestID, TestClass.ClassID, TestClass.IsPublished)
	if err != nil {
		if (strings.Index(err.Error(), "1062")) != 0 {
			return nil
		} else {
			return err
		}
	}

	return nil
}

func (q *Querier) UpdateTestClass(ctx context.Context, TestClass entity.TestClassRelation) error {
	stmt, err := q.DB.PrepareContext(ctx, "UPDATE test_class SET ispublished = ? WHERE tid = ? AND cid = ?")
	if err != nil {
		return err
	}

	_, err = stmt.ExecContext(ctx, TestClass.IsPublished, TestClass.TestID, TestClass.ClassID)
	if err != nil {
		return err
	}

	return nil
}

func (q *Querier) QueryTestClass(ctx context.Context, TestClassID int) (result []entity.TestClassRelation, err error) {
	rows, err := q.DB.QueryContext(ctx, "SELECT cid, tid, ispublished FROM test_class WHERE id = ? ", TestClassID)
	if err == sql.ErrNoRows {
		return nil, nil
	}

	if err != nil {
		return nil, err
	}

	for rows.Next() {
		var tid, cid, published int
		err := rows.Scan(&cid, &tid, &published)
		if err != nil {
			return result, err
		}

		result = append(result, entity.TestClassRelation{ID: TestClassID, TestID: tid, ClassID: cid, IsPublished: published})
	}

	return result, nil
}

func (q *Querier) QueryTestOfClass(ctx context.Context, ClassID int) (result []entity.TestClassRelation, err error) {
	rows, err := q.DB.QueryContext(ctx, "SELECT id, tid, ispublished FROM test_class WHERE cid = ? ", ClassID)
	if err == sql.ErrNoRows {
		return nil, nil
	}

	if err != nil {
		return nil, err
	}

	for rows.Next() {
		var id, tid, published int
		err := rows.Scan(&id, &tid, &published)
		if err != nil {
			return result, err
		}

		result = append(result, entity.TestClassRelation{ID: id, TestID: tid, ClassID: ClassID, IsPublished: published})
	}

	return result, nil
}

func (q *Querier) QueryClassDoneTest(ctx context.Context, TestID int) (result []entity.TestClassRelation, err error) {
	rows, err := q.DB.QueryContext(ctx, "SELECT id, cid, ispublished FROM test_class WHERE tid = ?", TestID)
	if err == sql.ErrNoRows {
		return nil, nil
	}

	if err != nil {
		return nil, err
	}

	for rows.Next() {
		var id, cid, published int
		err := rows.Scan(&id, &cid, &published)
		if err != nil {
			return result, err
		}

		result = append(result, entity.TestClassRelation{ID: id, TestID: TestID, ClassID: cid, IsPublished: published})
	}

	return result, nil
}

func (q *Querier) DeleteTestClass(ctx context.Context, TestID int, ClassID int) error {
	_, err := q.DB.ExecContext(ctx, "DELETE FROM test_class WHERE tid = ? AND cid = ?", TestID, ClassID)
	if err != nil {
		return err
	}

	return nil
}
