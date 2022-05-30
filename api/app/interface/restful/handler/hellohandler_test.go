package handler

import (
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/go-playground/assert/v2"
)

func TestHello(t *testing.T) {
	r := Hello()
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/hello", nil)

	r.ServeHTTP(w, req)
	expected := `{"message":"hello"}`
	assert.Equal(t, 200, w.Code)
	assert.Equal(t, expected, w.Body.String())

}
