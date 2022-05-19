package middleware

import (
	"log"
	"time"

	"github.com/gin-gonic/gin"
)

func Logger() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		t := time.Now()

		// before request
		ctx.Next()
		// after request
		latency := time.Since(t)
		// how long for the delay
		log.Print(latency)

		// print status we are sending
		status := ctx.Writer.Status()
		log.Println(status)
	}
}
