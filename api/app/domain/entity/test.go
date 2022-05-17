package entity

//Test is the test bank. There can be unlimited tests.
//TestName is the Topic/Assigned Name, etc.. of the test.
//TestName is used for init Query, therefore it should be carefully cared by trimming both ends.Content is the question itself.
//Each test will have a unique ID.
//Active means that does the PTest still exist [1] or not [0].
//Tag is based on the test_tag table, which is addable.
//Difficulty base on Linkert scales: 1 is smallest - 5 is largest.
//Duration is the time limit for the test.
type Test struct {
	ID               int    `db:"id"`
	TagID            int    `db:"tag_id"`
	TestName         string `db:"test_name"`
	CreatedUserID    int    `db:"created_user_id"`
	TargetEntityCode int    `db:"target_entity_code"`
	Title            string `db:"title"`
	Info             string `db:"info"`
	Duration         int    `db:"duration"`
	DateAssigned     int64  `db:"date_assigned"`
	Deadline         int64  `db:"deadline"`

	Active      int   `db:"active"`
	DateCreated int64 `db:"datecreated"`
	DateUpdated int64 `db:"dateupdated"`
	// Date, when inserting to database, should be set to type "yyyy-mm-dd"
}

// TestQuestion here: how questions struct works:
// first, QID is the primary key of the table.
// Type Question: either quiz (1) or opinion-type question (2).
// Difficulty base on Linkert scales: 1 is smallest - 5 is largest.
type TestQuestion struct {
	ID         int    `db:"id"`
	Content    string `db:"content"`
	Type       int    `db:"type"`
	Difficulty int    `db:"difficulty"`

	DateCreated int64 `db:"datecreated"`
	DateUpdated int64 `db:"dateupdated"`
}

type TestAnswer struct {
	ID         int    `db:"id"`
	QuestionID int    `db:"question_id"`
	Content    string `db:"content"`
	// 0: false, 1: true
	IsCorrect int `db:"is_correct"`
}

// Set unique constraint TestClassID, StudentID, StudentID.
type TestResult struct {
	ID          int    `db:"id"`            // Primary key
	TestClassID int    `db:"test_class_id"` // foreign key
	UserID      int    `db:"user_id"`       // foreign key
	EntityCode  int    `db:"entity_code"`   // foreign key
	DateCreated int64  `db:"datecreated"`
	Score       int    `db:"score"`
	Comment     string `db:"comment"`
	ResultNote  string `db:"resul_note"`
	Active      int    `db:"active"`

	DateUpdated int64 `db:"dateupdated"`
}

// Individuals answer record.
// Answer's ID will depend on which type is the question: multiple choice (testanswer table) or long answer (longanswer table).
type TestEntryAnswer struct {
	// Composite primary keys
	ResultID   int `db:"result_id"`
	QuestionID int `db:"question_id"`
	AnswerID   int `db:"answer_id"`
}

type TestEntryAnswerText struct {
	ResultID   int    `db:"result_id"`
	QuestionID int    `db:"question_id"`
	Answer     string `db:"answer"`
}

type TestClassRelation struct {
	ID          int `db:"id"`
	IsPublished int `db:"is_published"`
	TestID      int `db:"test_id"`
	ClassID     int `db:"class_id"`
}

type QuestionTest struct {
	QuestionID int `db:"question_id"`
	TestID     int `db:"test_id"`
}

type TestComponent struct {
	QuestionID      int    `json:"question_id"`
	Content         string `json:"content"`
	Type            int    `json:"type"`
	Difficulty      int    `json:"difficulty"`
	CorrectAnswerID int    `json:"correct_answer_id"`

	Answers        []TestAnswer  `json:"answers"`
	Comments       []TestComment `json:"comments"`
	ChosenAnswerID int           `json:"chosen_answer_id"`
	TextAnswer     string        `json:"text_answer"`
}

type TestComment struct {
	ResultID   int    `db:"result_id"`
	QuestionID int    `db:"question_id"`
	Comment    string `db:"comment"`
	UserID     int    `db:"user_id"`

	DateCreated int64 `db:"datecreated"`
	DateUpdated int64 `db:"dateupdated"`
}
