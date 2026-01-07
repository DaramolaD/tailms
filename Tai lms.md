**Product requirement document**  
**Created: 06/07/2025**  
**Product: Learning Management System**

**Purpose & Goals**  
The LMS will be the primary medium through which we transmit the tech skill training, which is the cornerstone of our empowerment program at juvenile correctional facilities. The management system will improve the quality of our educational programs by:

1. Improving our efficiency by allowing us to reach more people at less cost  
2. Help us track student engagement and progress more effectively during the program through a personalised student dashboard.  
3. Serving as a repository to house our educational resources, including training videos, PDFs and other related learning files.  
4. Providing an interactive and cognitive-stimulating virtual environment that facilitates students' grasp of technical concepts.

**Product Goals:**

* Deliver a fully offline coding education platform  
* Ensure ease of use for both students and facility staff  
* Support multiple cohorts with a one-time setup  
* Enable tracking of student progress without internet

**Success Criteria:**

* The system works entirely offline on a local network  
* Supports at least 20 students per facility  
* Students can log in, take courses, and submit exercises  
* Admins can track progress and update content locally

**Target Audience**  
**User Demographics:**  
The LMS targets adolescents and young adults within correctional centres with the following demographic characteristics:  
**Age:** 10-23 (ranging from preadolescents to young adults)  
**Education**: Primary school leavers, high school graduates and university-level students  
**Digital Literacy**: A wide range of exposure to technology from minimal to experienced.

**Personas**  
Persona 1: The Student  
Name: Tunde A.  
Age: 20  
Location: Medium-Security Correctional Facility, Nigeria

Background:

* Awaiting trial for 2 years  
* Completed secondary school  
* Never used a laptop before incarceration

Goals:

* Learn a digital skill to improve his chances after release  
* Build confidence and feel productive  
* Understand how websites and design work

Pain Points:

* Limited exposure to technology  
* No consistent access to mentors  
* Distrust in whether learning will lead to real-world impact

Persona 2: The Facility Program Officer  
Name: Mrs. Okon  
Age: 42  
Role: Vocational Training Coordinator at Correctional Centre. Sees potential in using tech education as a reform tool.

Goals:

* Provide structured learning for youth in custody  
* Reduce idleness and behavioral issues  
* Showcase program success to superiors

Pain Points:

* No internet allowed for security reasons  
* Staff shortage makes live classes difficult  
* Limited budget and infrastructure

Persona 3: The Volunteer Mentor  
Name: Femi T.  
Age: 28  
Background: Frontend Developer at a tech company

Goals:

* Share skills and give back  
* Help one or two students succeed post-incarceration  
* Keep mentoring manageable alongside his job

Pain Points:

* Can't always visit facilities physically  
* Unclear how much impact he's making  
* Needs a way to review student progress asynchronously

**Core Features**

* Student login & dashboard  
* Admin dashboard for content management  
* Offline hosting of training videos  
* Reading resources (PDFs, slides)  
* In-app HTML/CSS/JS coding environment  
* Quizzes and auto-graded assessments  
* Student progress tracking (locally stored)  
* LMS mirror back-up 

**Technical Requirements**  
\-PHP-based LMS (Moodle)  
\-Local server setup (Bitnami Stack or XAMPP)  
\-Host on Intel NUC/facility PC  
\-LAN or local Wi-Fi for internal access  
\-Compatible with student laptops or tablets  
\-Cloud-based LMS mirror (via MoodleCloud)  
\-Backup/restore system using Moodle’s .mbz file format

**Timeline (Prototype Phase)**

| Week | Focus |
| ----- | ----- |
| 1 | Set up infrastructure, install Moodle, create user accounts |
| 2 | LMS customisation (theme, roles, layout) \+ basic course shell setup |
| 3 | Add course content, quizzes, videos, and code activities |
| 4 | Embed code environment, test interactivity, export data, demo prep |

