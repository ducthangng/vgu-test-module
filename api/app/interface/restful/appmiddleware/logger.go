package middleware

import (
	"log"
	"time"

	"github.com/gin-gonic/gin"
)

func Logger() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		// print time
		t := time.Now()
		log.Println("Request started at", t.Format("2006-01-02 15:04:05"))

		// before request
		// executes pending handlers in the chain inside the calling handler.
		ctx.Next()
		// after request
		latency := time.Since(t)

		// print status we are sending
		status := ctx.Writer.Status()

		// print method used
		method := ctx.Request.Method

		// print
		log.Printf("%s on %s with status %d which takes %s", method, ctx.Request.URL.Path, status, latency)

	}
}
