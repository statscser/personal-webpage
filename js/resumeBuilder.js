// Resume Header
var name = "Xueying Liu";
var role = "Application Developer/Data Scientist";

// Bio info
var bio = {
    "name": "Xueying Liu",
    "role": "Application Developer/Data Scientist",
    "contact": {
        "mobile": "(650) 285-7353",
        "email": "xyliu44@stanford.edu",
        "github": "statscser",
        "linkedin": "Xueying (Grace) Liu",
        "location": "Stanford, CA"
    },
    "welcomeMessage": ["", "A passionate coder and data follower.", "A capable action taker and enthusiastic motivator.",
    "An effective communicator and reliable collaborator."],
    "skills": [
        "Python", "R", "Java", "C++", "SQL", "Matlab", "Spark", "Hadoop", "JavaScript", "LaTex", "Microsoft Office", "Data Mining", "Machine Learning"
    ],
    "bioPic": "images/photo.jpg"
}

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", name);
    var formattedRole = HTMLheaderRole.replace("%data%", role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
    $("#topContacts").append(formattedEmail);
    var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contact.linkedin);
    $("#topContacts").append(formattedLinkedin);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
    $("#topContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
    $("#topContacts").append(formattedLocation);

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedBiopic);

    for (msg in bio.welcomeMessage) {
        var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage[msg]);
        $("#header").append(formattedMsg + "<br/>");
    }

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (item in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[item]);
            $("#skills").append(formattedSkill);
        }
    }
}

bio.display();


// Education
var education = {
    "schools": [
        {
            "name": "Stanford University",
            "city": "Stanford, CA, US",
            "degree": "MS",
            "majors": "Statistics",
            "dates": "2014.09-2016.06",
            "url": "http://www.stanford.edu/",
            "image": "images/stanford.png"
        },
        {
            "name": "Renmin University of China",
            "city": "Beijing, China",
            "degree": "BA",
            "majors": "Statistics",
            "dates": "2010.09-2014.06",
            "url": "http://www.ruc.edu.cn/en",
            "image": "images/ruc.png"
        },
        {
            "name": "Yale University",
            "city": "New Haven, CT, US",
            "degree": "Summer Program",
            "majors": "Business Seminar, English Language Institute",
            "dates": "2013.07-2013.08",
            "url": "http://www.yale.edu/",
            "image": "images/yale.png"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": 2015,
            "url": "https://www.udacity.com/course/javascript-basics--ud804"
        },
        {
            "title": "Scalable Machine Learning",
            "school": "edX",
            "dates": 2015,
            "url": "https://www.edx.org/course/scalable-machine-learning-uc-berkeleyx-cs190-1x"
        },
        {
            "title": "Machine Learning",
            "school": "Coursera",
            "dates": 2014,
            "url": "https://www.coursera.org/learn/machine-learning"
        },
        {
            "title": "Computing for Data Analysis",
            "school": "Coursera",
            "dates": 2013,
            "url": ""
        }
    ]
}

education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (school in education.schools) {
        var formattedImage = HTMLschoolImage.replace("%data%", education.schools[school].image);
        $(".education-entry:last").append(formattedImage);
    }

    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        if (education.schools[school].url !== "") {
            formattedName = formattedName.replace("#", education.schools[school].url);
        }
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedTitle = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedTitle);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);  //undefined???

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedMajor);
    }

    $("#education").append(HTMLonlineClasses);
    for (course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        if (education.onlineCourses[course].url !== "") {
            formattedTitle = formattedTitle.replace("#", education.onlineCourses[course].url);
        }
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedCourse = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedCourse);

        var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $(".education-entry:last").append(formattedDates);
    }
}

education.display();


// Work
var work = {
    "jobs": [
        {
            "employer": "Cablevision Systems Corporation",
            "url": "http://www.cablevision.com/",
            "title": "Data Analyst/Scientist Intern",
            "dates": "2015.06-2015.08",
            "location": "San Francisco, CA, US",
            "description": "Implemented churn modeling on the large data files with Open Source packages and toolkits " +
            "in R and Python and applied various decision tree and random forest algorithms." + "<br/>" +
            "Explored basic data manipulation and machine learning with Spark, and interactively access the Hadoop " +
            "cluster.",
            "image": "images/csc.png"
        },
        {
            "employer": "IBM China Development Lab",
            "url": "http://www-03.ibm.com/employment/greaterchina/cdl_intro.html",
            "title": "Data Analyst Intern",
            "dates": "2013.10-2013.12",
            "location": "Beijing, China",
            "description": "Participated as the only data analyst in innovative DB Analytic Project and independently " +
            "implemented algorithms for time series analysis/forecast of indexes and static analysis of database " +
            "snapshot." + "<br/>" +
            "Contributed to the core statistical analysis part of the automatic monitor and predictor of configuration " +
            "parameters and performance indicators of the DB2 by linking my R programs with database and PHP script " +
            "via SQL and Putty.",
            "image": "images/ibm.png"
        },
        {
            "employer": "Shenwan Hongyuan Securities (HK) Ltd",
            "url": "http://www.sywg.com/sw/english/index.html",
            "title": "Financial Analyst Intern",
            "dates": "2013.08-2013.09",
            "location": "Chengdu, Sichuan, China",
            "description": "Updated and analyzed daily financial data gathered from 17 administrative branches and " +
            "finished 2 monthly report." + "<br/>" +
            "Assisted in Establishment of Wechat Platform in charge of proposing the project plan and negotiating with collaborators",
            "image": "images/sws.png"
        }
    ]
}

work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    for (job in work.jobs) {
        var formattedImage = HTMLworkImage.replace("%data%", work.jobs[job].image);
        $(".work-entry:last").append(formattedImage);
    }

    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        if (work.jobs[job].url !== "") {
            formattedEmployer = formattedEmployer.replace("#", work.jobs[job].url);
        }
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        //var formattedLocation = HTMLworkLocation.append("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

work.display();

// Projects
var projects = {
    "projects": [
        {
            "title": "Mining Massive Datasets",
            "dates": "2015.01-2015.03",
            "description": "Implemented friend recommendation system within social network and generated tags for " +
            "documents with k-means clustering using MapReduce in Hadoop (Java)." + "<br/>" +
            "Programmed a streaming model to identify dense communities in networks (Java)." + "<br/>" +
            "Implemented A-priori algorithm for market basket analysis (Python)." + "<br/>" +
            "Applied SVM using different gradient descent methods (Matlab).",
            "images": ""
        },
        {
            "title": "Wine Quality Score Prediction",
            "dates": "2015.01-2015.03",
            "description": "Predict wine quality scores with physical and chemical attributes using data mining techniques, " +
            "including linear regression with subset selection, ridge regression, lasso, PCA, PLS, splines, SVR.",
            "images": ""
        },
        {
            "title": "Kaggle Competition: Getting a Handle on Data Science",
            "dates": "2014.09-2014.12",
            "description": "Predict the subscribers to the next season of America's leading period-instrument orchestra " +
            "using various data mining techniques in R (Ranked 20/93).",
            "images": ""
        },
        {
            "title": "Predict Stock Market Tendency with Data Mining Techniques",
            "dates": "2013.12-2014.05",
            "description": "Implemented a hybrid GASVM model combining the Genetic Algorithm and Support Vector Machines " +
            "to predict the stock market tendency." +"<br/>" +
            "Improved the prediction accuracy significantly compared with traditional ARIMA, BPNN and SVM models.",
            "images": ""
        },
        {
            "title": "Recommendation System Practice Based on Historical Ratings",
            "dates": "2013.01-2013.06",
            "description": "Proposed an innovative distribution-based model for baseline estimate of predictive ratings " +
            "and further adjust distribution to solve cold-start problem and introduce item correlation to the model.",
            "images": ""
        },
    ]
}

projects.display = function() {
    for (pro in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[pro].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[pro].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[pro].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[pro].images.length > 0) {
            for (image in projects.projects[pro].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[pro].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

projects.display();



