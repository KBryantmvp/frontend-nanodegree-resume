var bio = {
  "name": "David Aguirre",
  "role": "Systems Engineer",
  "contacts": {
      "mobile": "312-123-4567",
      "email": "dal1986@gmail.com",
      "github": "KBryantmvp",
      "twitter": "@david.example",
      "location": "Chicago"
  },
  "welcomeMessage": "Current AT&T employee",
  "skills": [
      "SIP protocol",
      " VoIP",
      " TCP/IP",
      " LTE",
      " HTML",
      " CSS",
      " Git/GitHub",
      " JavaScript",
      " Java"
  ],
  "biopic": "images/fry.jpg"
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").append(formattedName);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").append(formattedRole);
  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMsg);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#header").append(formattedMobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#header").append(formattedEmail);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#header").append(formattedGithub);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#header").append(formattedTwitter);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#header").append(formattedLocation);
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedBioPic);
};

bio.display();

var work = {
  "jobs": [
    {
      "employer": "AT&T",
      "title": "Member of Technical Staff",
      "location": "Warrenville, IL, US",
      "dates": "Dec 2012 - current",
      "description": "VoIP and SIP tester on the IMS Core Network"
    },
    {
      "employer": "Acme Packet and Illinois Tech",
      "title": "Security Tester Intern",
      "location": "Chicago, IL, US",
      "dates": "Summer 2012",
      "description": "Tested and evaluated the secure function of the Acme Packet Net-Net Session Director, referred to as a Session Border Controller (SBC)"
    },
    {
      "employer": "Illinois Tech",
      "title": "Research and Teaching Assistant",
      "location": "Chicago, IL, US",
      "dates": "Jan 2012 - Aug 2012",
      "description": "Prepared lab exercises in a weekly basis and provided support for students in two courses related to Computer Networks and Telecommunications over the Internet"
    }
  ]
};

work.display = function () {
  for (var job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);
  var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
  var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  $(".work-entry:last").append(formattedWorkLocation);
  var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedWorkDates);
  var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedWorkDescription);
  }
}

work.display();

var projects = {
  "projects": [
    {
      "title": "Next Generation 911 - ESInet",
      "dates": "Jan 2012 - Aug 2012",
      "description": "Studied the functional elements, architectures, protocols and underlying networks carrying emergency services over IP infrastructure",
      "images": "images/nena.jpg"
    },
    {
      "title": "GSM Network Design for Madrid (Spain)",
      "dates": "Spring 2010",
      "description": "Analyzed, studied and estimated traffic for each BTS, based on vehicles and pedestrian traffic",
      "images": "images/gsm.jpg"
    },
    {
      "title": "Deployment of Next Generation Networks (NGN)",
      "dates": "Spring 2009",
      "description": "Led a 4-person engineering team in charge of the viability and economic analysis of deploying NGN (WiMax and GPON)",
      "images": "images/gpon.jpg"
    }
  ]
};

projects.display = function() {
    for (var project in projects.projects) {
      $("#projects").append(HTMLprojectStart);

      var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
      $(".project-entry:last").append(formattedProjectTitle);
      var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
      $(".project-entry:last").append(formattedProjectDates);
      var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
      $(".project-entry:last").append(formattedProjectDescription);
      var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
      $(".project-entry:last").append(formattedProjectImage);
    }
}

projects.display();


var education = {
  "schools": [
    {
      "name": "Illinois Tech",
      "location": "Chicago, IL, US",
      "degree": "MS",
      "major": "Information Tech & Mangmt",
      "dates": "2012",
      "url": "http://web.iit.edu/"
    },
    {
      "name": "Politecnica de Madrid",
      "location": "Madrid, Spain",
      "degree": ["BS", " MS"],
      "major": ["Telecomm Engineer", "Telecomm Engineer"],
      "dates": "2011",
      "url": "http://www.etsit.upm.es/index.php/en/"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Web Developer",
      "school": "Udacity",
      "dates": "Currently enrolled",
      "url": "https://www.udacity.com/course/nd001"
    }
  ]
};

education.display = function() {
  for (var school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchoolLocation);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedSchoolDates);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedSchoolMajor);
  }
}

education.display();


//function that appends skills if they exist
if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[4]);
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[5]);
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[6]);
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[7]);
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[8]);
  $("#skills").append(formattedSkills);
}

// $("#main").append(internationalizeButton);

// var inName = function(string_name){
//   array_name = string_name.split(" ");
//   var firstName = array_name[0].slice(0,1).toUpperCase() + array_name[0].slice(1).toLowerCase();
//   var lastName = array_name[1].toUpperCase();
//   var internationalName = firstName + " " +  lastName;
//   return internationalName;
// }

//Google Map
$("#mapDiv").append(googleMap);