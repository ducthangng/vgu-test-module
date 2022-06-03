package dto

type ReviewTestResultUserRequest struct {
	ID      int    `json:"test_result_id"`
	UserID  int    `json:"user_id"`
	Score   int    `json:"score"`
	Comment string `json:"comment"`
}
