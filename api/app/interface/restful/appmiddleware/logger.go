package middleware

import (
	"fmt"
	"log"
	"os"
	"strconv"
	"time"

	"github.com/gin-gonic/gin"
)

func saveLog(name string, s ...string) {
	file, err := os.Create("../appmiddleware/log/" + name + ".log")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()
	for _, items := range s {
		file.WriteString(items + " ")
	}
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("%d bytes written\n", len(s))
	gin.DefaultWriter = file
}

func Logger() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		// print time
		t := time.Now()
		name := t.Format("2006-01-02")
		started := t.Format("2006-01-02 15:04:05")

		// executes pending handlers in the chain inside the calling handler.
		ctx.Next()
		// after request
		latency := time.Since(t)

		// print status we are sending
		status := ctx.Writer.Status()

		// print method used
		method := ctx.Request.Method

		// save to log file
		saveLog(name, started, latency.String(), strconv.Itoa(status), method,
			ctx.Request.URL.Path, ctx.ClientIP(), ctx.Request.UserAgent())

	}
}
