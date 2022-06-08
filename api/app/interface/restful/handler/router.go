package handler

import (
	"log"
	middleware "server/app/interface/restful/appmiddleware"
	"server/app/interface/restful/handler/endpoints"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func init() {
	log.Println("Server Handler Started Successfully")
}

func Routing() *gin.Engine {
	gin.SetMode(gin.ReleaseMode)
	r := gin.New()
	r.Use(gin.Recovery(), gin.Logger())
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"POST"},
		AllowHeaders:     []string{"Origin", "Content-Type"},
		ExposeHeaders:    []string{"Content-Length", "Content-Type", "Access-Control-Allow-Headers", "Access-Control-Allow-Origin", "Origin", "Accept-Encoding", "X-CSRF-Token", "Authorization"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	// r.Use(middleware.Logger())
	r.Use(middleware.RateLimit(2, 5))
	r.Use(middleware.Tracer())

	endpoints.TestHandler(r.Group("/api"))

	return r
}
