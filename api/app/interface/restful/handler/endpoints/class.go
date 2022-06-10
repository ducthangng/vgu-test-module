package endpoints

import "github.com/gin-gonic/gin"

func ClassHandler(c *gin.RouterGroup) {
	c.GET("/", GetClasses)
	c.GET("/test", GetClassTest)
	c.GET("/members", GetClassMembers)
	c.GET("/test_result", GetClassTestResult)

	c.POST("/add_member", AddMember)
	c.POST("/", CreateClass)

	c.DELETE("/", DeleteClass)
	c.DELETE("/remove_member", RemoveMember)
}

func GetClasses(c *gin.Context) {}

func GetClassTest(c *gin.Context) {}

func CreateClass(c *gin.Context) {}

func DeleteClass(c *gin.Context) {}

func GetClassMembers(c *gin.Context) {}

func GetClassTestResult(c *gin.Context) {}

func AddMember(c *gin.Context) {}

func RemoveMember(c *gin.Context) {}
