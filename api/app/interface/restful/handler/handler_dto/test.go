package handler_dto

import (
	"server/utils/e"

	"github.com/gin-gonic/gin"
)

type Test struct {
	ID               int    `json:"id"`
	TagID            int    `json:"tagid"`
	TagName          string `json:"tagName"`
	TestName         string `json:"testName"`
	CreatedUserID    int    `json:"created_user_id"`
	TargetEntityCode int    `json:"target_entity_code"`
	Title            string `json:"title"`
	Info             string `json:"info"`
	Duration         int    `json:"duration"`
	Status           string `json:"status"`
	IsPublished      int    `json:"isPublished"`
	IsCompleted      int    `json:"completed"`
	DateAssigned     int64  `json:"dateAssigned"`
	Deadline         int64  `json:"deadline"`
	DateUpdated      int64  `json:"dateUpdated"`
}

func (t Test) Validate(WithID bool, WithBody bool) error {
	if (WithID) && (t.ID == 0) {
		return e.ErrorInputInvalid
	}

	if WithBody {
		if (len(t.TestName) == 0) || (len(t.Info) == 0) || (t.DateAssigned == 0) || (t.Deadline == 0) {
			return e.ErrorInputInvalid
		}

		if (t.Duration == 0) || (t.IsPublished > 1) {
			return e.ErrorInputInvalid
		}
	}

	return nil
}

func BindTest(c *gin.Context, WithID bool, WithBody bool) (Test, error) {
	var t Test
	if err := c.ShouldBindJSON(&t); err != nil {
		return t, err
	}

	if err := t.Validate(WithID, WithBody); err != nil {
		return t, err
	}

	return t, nil
}
