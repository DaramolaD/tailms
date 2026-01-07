**Functional Requirement Document**

**MVP Features**

**1\.** 	**User Authentication**

**Description**:  
 Secure login system to differentiate between students and admins.

**Acceptance Criteria:**

* Students and admins can log in using unique credentials.  
* Role-based dashboard access (Student vs Admin).

 

**2\.** 	**Admin Dashboard**

**Description:**  
 Admins can manage users, upload content, and view performance.

**Acceptance Criteria:**

* Add/edit/delete students  
* Upload course materials  
* Track student progress (e.g., lessons completed, quiz scores)

 

**3\. Student Dashboard**

**Description:**  
 A dashboard where students can get a high-level summary of their activities in the LMS, including viewing their enrolled courses, seeing lesson completion status, and accessing learning resources.

**Acceptance Criteria:**

* Displays available courses/modules.  
* Shows attempted quizzes  
* Shows completed lessons/modules

 

 

**4\. Course Content Delivery**

**Description:**  
 Each course includes offline-accessible videos and reading materials to support self-paced learning.

**Acceptance Criteria:**

* Admins can upload:  
  * Video lessons (MP4)  
  * Reading materials (PDF, text)  
* Lessons can be accessed by students via their dashboard.

 

**5-  Integrated Development Environment**

      **Description:**

An embedded IDE where code can be written and run within the LMS. The IDE should be user-friendly but still contain the tools needed to write and deploy HTML, CSS and JavaScript code. Important tools such as plug-ins should also be accessible within the IDE.

**Acceptance Criteria**

* Users can write and edit code within the IDE  
* The IDE contains assistive tools for beginners, such as:  
  * \-Syntax highlighting,  
  * \-Code completion,  
  * \-Console output and  
  * \-Basic Debugging  
* Users can access the IDE from the global navigation and also within the lesson outline.

**POST-MVP Features**

**1-**	**Closed captioning**

**Description**

Closed captioning provides text subtitles alongside the video lessons to ensure learners can follow along easily and not miss important information. This is vital for students who may not have good listening skills or struggle with understanding diction.

**Acceptance criteria**

* Each video lesson comes with closed captions that are enabled by default  
* The CCs can be optionally disabled by the user.

Notes: Probably AI based if native Moodle support is not available

 

**2-**	**Playback controls**

       **Description**

The video content comes with basic playback controls to help users customize their listening and viewing experience. Controls like pause, play, rewind, forward and playback speed are essential to cater to a wide range of student comprehension abilities.

       **Acceptance criteria**

        The native video player comes with added playback control functions, which include:

* Pause/Play  
* Rewind/forward  
* Adjust playback speed

**4 \- Quizzes** 

      **Description**

Each Lesson should have a quiz section that tests the student’s ability based on the content taught. The quizzes will include various question types: multiple-choice and essay questions.

      **Acceptance Criteria**

* Each lesson contains a quiz based on the lesson content  
* Each question automatically marks and shows the correct answer when submitted

**5- Progress Indicator**

         **Description**

Each lesson and module should have an indicator that shows the progress level as students continue with the lessons. This indicator will motivate the learners and provide a high level overview of their progress.

         **Acceptance Criteria**

* There is a progress indicator for each lesson, module and course.  
* The indicator is student-friendly and easy to understand.  
* Celebratory message when a course or lesson is completed

        	

**Final Notes**

* MVP features will be developed and tested in the prototype  
* Post-MVP features will be prioritized once the prototype is validated  
* All features must work offline within a local network setup

 

