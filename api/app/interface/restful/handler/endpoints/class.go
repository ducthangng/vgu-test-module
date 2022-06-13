package endpoints

import (
	"context"
	"errors"
	"net/http"
	"server/app/interface/persistence/rdbms/sqlconnection"
	"server/app/interface/restful/handler/api_dto"
	"server/app/interface/restful/handler/gctx"
	"server/app/registry"
	"server/app/usecase/usecase_dto"
	"server/utils/e"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/copier"
)

func ClassHandler(c *gin.RouterGroup) {
	c.GET("/", GetAllClasses)
	c.GET("/test", GetClassTest)
	c.GET("/members", GetClassMembers)

	c.POST("/add_member", AddMember)
	c.POST("/", CreateClass)

	c.DELETE("/", DeleteClass)
	c.DELETE("/remove_member", RemoveMember)
}

func GetAllClasses(c *gin.Context) {
	app := gctx.Gin{C: c}
	ctx := context.Background()

	access := registry.BuildClassAccessPoint(false, sqlconnection.DBConn)
	classes, err := access.Service.GetClasses(ctx)
	if err != nil {
		app.Response(http.StatusInternalServerError, 0, err)
		return
	}

	app.Response(http.StatusOK, classes, nil)
}

func GetClassTest(c *gin.Context) {
	app := gctx.Gin{C: c}
	ctx := context.Background()

	classID := c.Query("class_id")
	if classID == "" {
		app.Response(http.StatusOK, 0, e.ErrorInputInvalid)
		return
	}

	ID, err := strconv.Atoi(classID)
	if err != nil {
		app.Response(http.StatusInternalServerError, 0, err)
		return
	}

	access := registry.BuildClassAccessPoint(false, sqlconnection.DBConn)
	tests, err := access.Service.GetClassTest(ctx, ID)
	if err != nil {
		app.Response(http.StatusInternalServerError, 0, err)
		return
	}

	app.Response(http.StatusOK, tests, nil)
}

func CreateClass(c *gin.Context) {
	app := gctx.Gin{C: c}
	ctx := context.Background()

	data, err := api_dto.BindClass(c, false, true)
	if err != nil {
		app.Response(http.StatusInternalServerError, 0, err)
		return
	}

	var class usecase_dto.Class
	if err := copier.Copy(&class, &data); err != nil {
		app.Response(http.StatusInternalServerError, 0, err)
		return
	}

	access := registry.BuildClassAccessPoint(false, sqlconnection.DBConn)
	id, err := access.Service.CreateClass(ctx, class)
	if err != nil {
		app.Response(http.StatusInternalServerError, 0, err)
		return
	}

	app.Response(http.StatusOK, id, nil)
}

func DeleteClass(c *gin.Context) {
	app := gctx.Gin{C: c}
	ctx := context.Background()

	EntityCode := c.GetInt("EntityCode")
	if EntityCode != 1 {
		app.Response(http.StatusOK, 0, e.ErrorNotAuthorized)
		return
	}

	ClassID := c.Query("class_id")
	if ClassID == "" {
		app.Response(http.StatusOK, 0, errors.New("no classId provided"))
		return
	}

	ID, err := strconv.Atoi(ClassID)
	if err != nil {
		app.Response(http.StatusInternalServerError, 0, err)
		return
	}

	access := registry.BuildClassAccessPoint(true, sqlconnection.DBConn)
	err = access.Service.DeleteClass(ctx, ID)
	if err != nil {
		app.Response(http.StatusInternalServerError, 0, err)
		return
	}

	app.Response(http.StatusOK, 1, nil)
}

func GetClassMembers(c *gin.Context) {
	app := gctx.Gin{C: c}
	ctx := context.Background()

	classID := c.Query("class_id")
	if classID == "" {
		app.Response(http.StatusOK, 0, e.ErrorInputInvalid)
		return
	}

	ID, err := strconv.Atoi(classID)
	if err != nil {
		app.Response(http.StatusInternalServerError, 0, err)
		return
	}

	access := registry.BuildClassAccessPoint(false, sqlconnection.DBConn)
	members, err := access.Service.QueryClassMembers(ctx, ID)
	if err != nil {
		app.Response(http.StatusInternalServerError, 0, err)
		return
	}

	app.Response(http.StatusOK, members, nil)
}

func AddMember(c *gin.Context) {
	app := gctx.Gin{C: c}
	ctx := context.Background()

	classID := c.Query("class_id")
	if classID == "" {
		app.Response(http.StatusOK, 0, e.ErrorInputInvalid)
		return
	}

	CID, err := strconv.Atoi(classID)
	if err != nil {
		app.Response(http.StatusInternalServerError, 0, err)
		return
	}

	userID := c.Query("user_id")
	if userID == "" {
		app.Response(http.StatusOK, 0, e.ErrorInputInvalid)
		return
	}

	UID, err := strconv.Atoi(userID)
	if err != nil {
		app.Response(http.StatusInternalServerError, 0, err)
		return
	}

	access := registry.BuildClassAccessPoint(false, sqlconnection.DBConn)
	err = access.Service.AddMember2Class(ctx, CID, UID)
	if err != nil {
		app.Response(http.StatusInternalServerError, 0, err)
		return
	}

	app.Response(http.StatusOK, 1, nil)
}

func RemoveMember(c *gin.Context) {
	app := gctx.Gin{C: c}
	ctx := context.Background()

	classID := c.Query("class_id")
	if classID == "" {
		app.Response(http.StatusOK, 0, e.ErrorInputInvalid)
		return
	}

	CID, err := strconv.Atoi(classID)
	if err != nil {
		app.Response(http.StatusInternalServerError, 0, err)
		return
	}

	userID := c.Query("user_id")
	if userID == "" {
		app.Response(http.StatusOK, 0, e.ErrorInputInvalid)
		return
	}

	UID, err := strconv.Atoi(userID)
	if err != nil {
		app.Response(http.StatusInternalServerError, 0, err)
		return
	}

	access := registry.BuildClassAccessPoint(false, sqlconnection.DBConn)
	err = access.Service.RemoveMemberFromClass(ctx, CID, UID)
	if err != nil {
		app.Response(http.StatusInternalServerError, 0, err)
		return
	}

	app.Response(http.StatusOK, 1, nil)
}
