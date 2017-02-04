/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = { "name" : "Ian Absher",
			"role" : "Software Developer",
			"contacts" : {
				"mobile" : "206-734-7491",
				"email" : "ian.absher@gmail.com",
				"github" : "absheri",
				"twitter" : "",
				"location" : "Portland, OR"
			},
			"biopic" : "images/me.jpg",
			"welcomeMessage" : "Hay, welcome to my resume site.",
			"skills" : ["Python", "Computer Things", "SQL", "Java"]
		};

var education = {
	"schools" : [
		{
			"name" : "Georgia Tech",
			"location" : "online",
			"degree" : "Masters",
			"majors" : ["CS"],
			"dates" : 2016,
			"url" : "http://www.omscs.gatech.edu/"
		},
		{
			"name" : "Seattle University",
			"location" : "Seattle, WA",
			"degree" : "BA",
			"majors" : ["EE"],
			"dates" : 2011,
			"url" : "https://www.seattleu.edu/"
		}

	]
}

var work = {
	"jobs" : [
		{
			"employer" : "Tektronix",
			"title" : "Software Quality Engineer",
			"location" : "Porltna, OR",
			"dates" : 2016,
			"description" : "TBD"
		},
		{
			"employer" : "Boeing",
			"title" : "TBD",
			"location" : "TBD",
			"dates" : 2014,
			"description" : "TBD"
		}

	]
}

var projects = {
	"projects" : [
		{
			"title" : "TBD",
			"dates" : "TBD",
			"description" : "TBD",
			"images" : ["TBD"]
		},
		{
			"title" : "TBD",
			"dates" : "TBD",
			"description" : "TBD",
			"images" : ["TBD"]
		}
	]
}


$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role))
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name))

if(bio.skills.length > 0){

	$("#header").append(HTMLskillsStart)

	for(skill in bio.skills.length){
		$("#skills").append(HTMLskills.replace("%data%", skill))
	}

}