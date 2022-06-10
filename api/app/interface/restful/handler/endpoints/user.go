package endpoints

import "github.com/gin-gonic/gin"

func UserHandler(c *gin.RouterGroup) {
	c.GET("/", GetUserInfo)
	c.GET("/class", GetUserClass)
	c.GET("/test_result", ReviewTestResult)

	c.POST("/register", CreateUser)

	c.PUT("/", UpdateUser)
}

func GetUserInfo(c *gin.Context) {}

func GetUserClass(c *gin.Context) {}

func ReviewTestResult(c *gin.Context) {}

func UpdateUser(c *gin.Context) {}

func CreateUser(c *gin.Context) {}
