package handler

import (
	middleware "server/app/interface/restful/appmiddleware"

	"github.com/gin-gonic/gin"
)

func Hello() *gin.Engine {
	gin.SetMode(gin.ReleaseMode)
	r := gin.New()
	r.Use(gin.Recovery())
	r.Use(middleware.Logger())
	r.Use(middleware.CorsMiddleware())
	r.Use(middleware.RateLimit(2, 5))
	r.Use(middleware.Tracer())
	r.GET("/hello", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "hello",
		})
	})

	return r

}
