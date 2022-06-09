package handler_dto

import "github.com/gin-gonic/gin"

type SkillStest struct {
	ID          string    `json:"id"`
	MediaURL    string    `json:"mediaURL"`
	Title       string    `json:"title"`
	Content     string    `json:"content"`
	Description string    `json:"description"`
	Type        string    `json:"type"`
	Sections    []Section `json:"sections"`
}

type Section struct {
	StartIndex             int       `json:"startIndex"`
	EndIndex               int       `json:"endIndex"`
	Title                  string    `json:"title"`
	Media                  []Media   `json:"media"`
	Type                   string    `json:"type"`
	SmallAnswerDescription string    `json:"smallAnswerDescription"`
	Content                []Content `json:"content"`
}

type Content struct {
	Q            string   `json:"q"`
	A            []string `json:"a"`
	CorrectAns   string   `json:"correctAns"`
	ChosenAns    string   `json:"chosenAns"`
	Explaination string   `json:"explaination"`
}

type Media struct {
	Title   string `json:"title"`
	Content string `json:"content"`
}

type (
	SubmitData struct {
		ID       string              `json:"id"`
		Sections []SubmitDataSection `json:"sections"`
	}

	SubmitDataSection struct {
		StartIndex int      `json:"startIndex"`
		EndIndex   int      `json:"endIndex"`
		Answers    []string `json:"answers"`
	}
)

func BindSubmitData(c *gin.Context) (SubmitData, error) {
	var s SubmitData
	err := c.BindJSON(&s)

	return s, err
}
