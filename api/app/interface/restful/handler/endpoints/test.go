package endpoints

import (
	"net/http"
	"server/app/interface/restful/handler/gctx"
	"server/app/interface/restful/handler/handler_dto"
	"strconv"

	"github.com/gin-gonic/gin"
)

func TestHandler(c *gin.RouterGroup) {
	c.GET("/", GetTestInfo)
	c.GET("/result", GetTestResult)
	c.GET("/detail", DoTest)

	c.POST("/submit", SubmitTest)
}

// Returns general test information
func GetTestInfo(c *gin.Context) {
	// ctx := context.Background()
	app := gctx.Gin{C: c}

	// BindData binds the request body to the struct
	// test, err := handler_dto.BindTest(c, true, false)
	// if err != nil {
	// 	app.Response(http.StatusInternalServerError, 0, err)
	// 	return
	// }

	test := handler_dto.Test{
		ID:               1,
		TagID:            1,
		TagName:          "Reading",
		TestName:         "IELTS Reading Mocktest March 2022",
		CreatedUserID:    1,
		TargetEntityCode: 3, // student
		Title:            "IELTS Reading Test 2: Mission PE 1.0",
		Info: `This reading is about a group of people trying to ace the Programming Exercise of Mr. Hieu. 
			Despite many hardships, their program finally works before the D-Day. Thus, they received 1.0`,
		Duration:     60,
		Status:       "Happening",
		IsPublished:  1,
		IsCompleted:  0,
		DateAssigned: 1585286400,
		Deadline:     1585552000,
	}

	// return fake data
	app.Response(http.StatusOK, test, nil)

}

func GetTestResult(c *gin.Context) {
	// ctx := context.Background()
	app := gctx.Gin{C: c}

	// BindData binds the request body to the struct
	// test, err := handler_dto.BindTest(c, true, false)
	// if err != nil {
	// 	app.Response(http.StatusInternalServerError, 0, err)
	// 	return
	// }

	test := handler_dto.Test{
		ID:               1,
		TagID:            1,
		TagName:          "Reading",
		TestName:         "IELTS Reading Mocktest March 2022",
		CreatedUserID:    1,
		TargetEntityCode: 3, // student
		Title:            "IELTS Reading Test 2: Mission PE 1.0",
		Info: `This reading is about a group of people trying to ace the Programming Exercise of Mr. Hieu. 
			Despite many hardships, their program finally works before the D-Day. Thus, they received 1.0`,
		Duration:     60,
		Status:       "Happening",
		IsPublished:  1,
		IsCompleted:  0,
		DateAssigned: 1585286400,
		Deadline:     1585552000,
	}

	// return fake data
	app.Response(http.StatusOK, test, nil)

}

func DoTest(c *gin.Context) {
	app := gctx.Gin{C: c}

	testId := c.Query("test_id")
	_, err := strconv.Atoi(testId)
	if err != nil {
		app.Response(http.StatusInternalServerError, 0, err)
		return
	}

	var sk handler_dto.SkillStest
	matchingHeadingContent := []handler_dto.Content{
		{
			Q: "Hotel managers need to know what would encourage good staff to remain.",
			A: []string{"Pfeffer"},
		},
		{
			Q: "The actions of managers may make staff feel they shouldn't move to a different employer.",
			A: []string{"Lucas"},
		},
		{
			Q: "Little is done in the hospitality industry to help workers improve their skills.",
			A: []string{"Lucas"},
		},
		{
			Q: "Staff are less likely to change jobs if cooperation is encouraged",
			A: []string{"Ng and Sorensen"},
		},
		{
			Q: "Disssatisfaction with pay is not the only reason why hospitality workers change jobs",
			A: []string{"LuEnz and Siguawcas"},
		},
		{
			Q: "",
			A: []string{"Deery"},
		},
	}

	MCQ := []handler_dto.Content{
		{
			Q: "Question 1",
			A: []string{"ans1", "ans2", "ans3", "ans4"},
		},
		{
			Q: "Question 2",
			A: []string{"ans1", "ans2", "ans3", "ans4"},
		},
		{
			Q: "Question 3",
			A: []string{"ans1", "ans2", "ans3", "ans4"},
		},
	}

	FB := []handler_dto.Content{
		{
			Q: "<form>He <input type='text' class='border border-2 text-center'/> a teacher. He is twenty-five <input type='text' class='border border-2 text-center'/> old. He love listening <input type='text' class='border border-2 text-center'/> music. He can <input type='text' class='border border-2 text-center'/> football. He often <input type='text' class='border border-2 text-center'/> fishing on Saturday.</form",
		},
	}

	TFNG := []handler_dto.Content{
		{
			Q: "Question 1",
		},
		{
			Q: "Question 2",
		},
		{
			Q: "Question 3",
		},
	}

	sk = handler_dto.SkillStest{
		ID:       "507362db-4212-4649-8068-a2ea9806082c",
		MediaURL: "https://www.dropbox.com/s/edek16sfvwl4jsh/NocturneInAMinor.mp3?dl=1",
		Title:    "Listen to everything and answer questions.",
		Content: `Open your eyes in sea water and it is difficult to see much more than a murky, 
				bleary green colour. Sounds, too, are garbled and difficult to comprehend. 
				Without specialised equipment humans would be lost in these deep sea habitats, 
				so how do fish make it seem so easy? Much of this is due to a biological phenomenon 
				known as electroreception – the ability to perceive and act upon electrical stimuli as 
				part of the overall senses. This ability is only found in aquatic or amphibious species 
				because water is an efficient conductor of electricity. \n\nElectroreception comes in two variants. 
				While all animals (including humans) generate electric signals, because they are emitted by the nervous 
				system, some animals have the ability – known as passive electroreception – to receive and decode 
				electric signals generated by other animals in order to sense their location. \n\nOther creatures 
				can go further still, however. Animals with active electroreception possess bodily organs that generate 
				special electric signals on cue. These can be used for mating signals and territorial displays as well as 
				locating objects in the water. Active electroreceptors can differentiate between the various resistances 
				that their electrical currents encounter. This can help them identify whether another creature is prey, 
				predator or something that is best left alone. Active electroreception has a range of about one body length – 
				usually just enough to give its host time to get out of the way or go in for the kill.`,
		Description: "You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below",
		Type:        "Listening",
		Sections: []handler_dto.Section{
			{
				StartIndex: 1,
				EndIndex:   5,
				Title:      "Matching Headings",
				Media: []handler_dto.Media{
					{
						Title:   "Illustration 1",
						Content: "https://www.ieltspodcast.com/wp-content/uploads/2015/04/Academic-Task-1-Describe-a-Diagram-in-IELTS.png",
					},
				},
				Type:                   "Matching Heading",
				SmallAnswerDescription: "List of Researchers",
				Content:                matchingHeadingContent,
			},
			{
				StartIndex: 6,
				EndIndex:   10,
				Title:      "Multiple Choice Questions",
				Media: []handler_dto.Media{
					{
						Title:   "Illustration 2",
						Content: "https://www.ieltspodcast.com/wp-content/uploads/2015/04/Academic-Task-1-Describe-a-Diagram-in-IELTS.png",
					},
				},
				SmallAnswerDescription: "Small Heading",
				Type:                   "MCQ",
				Content:                MCQ,
			},
			{
				StartIndex:             11,
				EndIndex:               16,
				Title:                  "Fill in the blank the below question about a boy who trying to build a sand castle of his own: golden, large, and fragile.",
				SmallAnswerDescription: "Sand Castle",
				Type:                   "FB",
				Content:                FB,
			},
			{

				StartIndex:             17,
				EndIndex:               20,
				Title:                  "True, False and Not given",
				SmallAnswerDescription: "Sand Castle",
				Type:                   "TFNG",
				Content:                TFNG,
			},
		},
	}

	app.Response(http.StatusOK, sk, nil)

}

func SubmitTest(c *gin.Context) {
	app := gctx.Gin{C: c}

	var data handler_dto.SubmitData

	data, err := handler_dto.BindSubmitData(c)
	if err != nil {
		app.Response(http.StatusInternalServerError, nil, err)
	}

	app.Response(http.StatusOK, data, nil)
}
