package endpoints

import (
	"context"
	"net/http"
	"server/app/interface/persistence/rdbms/sqlconnection"
	"server/app/interface/restful/handler/gctx"
	"server/app/registry"
	"server/utils/e"
	"strconv"

	"github.com/gin-gonic/gin"
)

func AdminHandler(c *gin.RouterGroup) {
	c.DELETE("/user", DeleteUser)
	c.DELETE("/user_test_result", DeleteUserTestResult)
}

func DeleteUser(c *gin.Context) {
	app := gctx.Gin{C: c}
	ctx := context.Background()

	userID := c.Query("user_id")
	if userID == "" {
		app.Response(http.StatusOK, 0, e.ErrorInputInvalid)
		return
	}

	ID, err := strconv.Atoi(userID)
	if err != nil {
		app.Response(http.StatusInternalServerError, 0, err)
		return
	}

	access := registry.BuildAdminAccessPoint(true, sqlconnection.DBConn)
	err = access.Service.DeleteUser(ctx, ID)
	if err != nil {
		app.Response(http.StatusInternalServerError, 0, err)
		return
	}

	app.Response(http.StatusOK, 1, nil)
}

func DeleteUserTestResult(c *gin.Context) {
	app := gctx.Gin{C: c}
	ctx := context.Background()

	testResultID := c.Query("test_result_id")
	if testResultID == "" {
		app.Response(http.StatusOK, 0, e.ErrorInputInvalid)
		return
	}

	TRID, err := strconv.Atoi(testResultID)
	if err != nil {
		app.Response(http.StatusInternalServerError, 0, err)
		return
	}

	access := registry.BuildAdminAccessPoint(false, sqlconnection.DBConn)
	err = access.Service.DeleteUserTestResult(ctx, TRID)
	if err != nil {
		app.Response(http.StatusInternalServerError, 0, err)
		return
	}

	app.Response(http.StatusOK, 1, nil)
}
