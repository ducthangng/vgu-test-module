package endpoints

import "github.com/gin-gonic/gin"

func AdminHandler(c *gin.RouterGroup) {
	c.DELETE("/user", DeleteUser)
	c.DELETE("/user_test_result", DeleteUserTestResult)
}

func DeleteUser(c *gin.Context) {}

func DeleteUserTestResult(c *gin.Context) {}
