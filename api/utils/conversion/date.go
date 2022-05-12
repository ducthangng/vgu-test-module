package conversion

import (
	"time"
)

// func ConvertGoTime2Unix(t time.Time) string {
// 	return strconv.FormatInt(t.Unix(), 10)
// }
func ConvertMysqlTimeUnixTime(mysqlTime string) int64 {
	// YYYY-MM-DD
	layout := "2006-01-02 15:04:05"
	str := "2015-12-23 00:00:00"
	t, err := time.Parse(layout, str)
	if err != nil {
		panic(err)
	}

	return t.Unix()
}

// Sample
func CompareTime(start int64, end int64, check int64) bool {
	return false
}

func ConvertUnixTimeMySqlTime(t int64) string {
	tm := time.Unix(t, 0)
	return tm.Format("2006-01-02 15:04:05")
}
