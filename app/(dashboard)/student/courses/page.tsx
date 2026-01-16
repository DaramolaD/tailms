"use client";

import { useState, useMemo } from "react";
import Tabs from "@/components/dashboard/Tabs";
import CourseCardGrid from "@/components/dashboard/CourseCardGrid";
import ExploreCourseCard from "@/components/dashboard/ExploreCourseCard";
import CompletedCourseCard from "@/components/dashboard/CompletedCourseCard";
import Pagination from "@/components/dashboard/Pagination";
import CourseDetailsModal from "@/components/dashboard/CourseDetailsModal";

const ITEMS_PER_PAGE = 5;

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState("my-courses");
  const [myCoursesPage, setMyCoursesPage] = useState(1);
  const [completedPage, setCompletedPage] = useState(1);
  const [explorePage, setExplorePage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  const tabs = [
    { id: "my-courses", label: "My Courses" },
    { id: "completed", label: "Completed" },
    { id: "explore", label: "Explore Courses" },
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    // Reset pagination when switching tabs
    setMyCoursesPage(1);
    setCompletedPage(1);
    setExplorePage(1);
  };

  const handleCourseClick = (course: any) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  // Sample course data for "My Courses"
  const myCourses = [
    {
      title: "Introduction to Design Thinking",
      description: "An introductory course in design covering design thinking, laws and principles",
      progress: 75,
    },
    {
      title: "Web Development Fundamentals",
      description: "Learn HTML, CSS, and JavaScript to build modern, responsive websites from scratch",
      progress: 45,
    },
    {
      title: "Data Science with Python",
      description: "Master data analysis, visualization, and machine learning using Python programming",
      progress: 60,
    },
    {
      title: "Digital Marketing Essentials",
      description: "Comprehensive guide to SEO, social media marketing, and content strategy",
      progress: 30,
    },
    {
      title: "Project Management Principles",
      description: "Learn agile methodologies, scrum frameworks, and team collaboration techniques",
      progress: 85,
    },
    {
      title: "UI/UX Design Mastery",
      description: "Create intuitive user interfaces and engaging user experiences for digital products",
      progress: 55,
    },
    {
      title: "Cloud Computing Basics",
      description: "Introduction to AWS, Azure, and Google Cloud platforms for modern applications",
      progress: 40,
    },
    {
      title: "Mobile App Development",
      description: "Build native and cross-platform mobile applications using React Native",
      progress: 25,
    },
    {
      title: "Business Analytics",
      description: "Analyze business data to make informed decisions and drive growth strategies",
      progress: 70,
    },
    {
      title: "Content Writing & Strategy",
      description: "Master the art of creating compelling content that engages and converts audiences",
      progress: 65,
    },
  ];

  // Sample course data for "Explore Courses"
  const exploreCourses = [
    {
      title: "Introduction to Design Thinking",
      description: "An introductory course in design covering design thinking, laws and principles",
      instructor: {
        name: "Sarah Chen",
        avatar: "/images/avatar.png",
      },
      enrolled: 245,
      enrolledAvatars: [
        "/images/avatar.png",
        "/images/avatar.png",
        "/images/avatar.png",
        "/images/avatar.png",
        "/images/avatar.png",
      ],
    },
    {
      title: "Full-Stack JavaScript Development",
      description: "Build complete web applications using Node.js, React, and MongoDB",
      instructor: {
        name: "Michael Torres",
        avatar: "/images/avatar.png",
      },
      enrolled: 189,
      enrolledAvatars: [
        "/images/avatar.png",
        "/images/avatar.png",
        "/images/avatar.png",
        "/images/avatar.png",
        "/images/avatar.png",
      ],
    },
    {
      title: "Artificial Intelligence Basics",
      description: "Explore machine learning, neural networks, and AI applications in real-world scenarios",
      instructor: {
        name: "Dr. Emily Watson",
        avatar: "/images/avatar.png",
      },
      enrolled: 312,
      enrolledAvatars: [
        "/images/avatar.png",
        "/images/avatar.png",
        "/images/avatar.png",
        "/images/avatar.png",
        "/images/avatar.png",
      ],
    },
    {
      title: "Cybersecurity Fundamentals",
      description: "Learn how to protect systems and networks from cyber threats and attacks",
      instructor: {
        name: "James Rodriguez",
        avatar: "/images/avatar.png",
      },
      enrolled: 156,
      enrolledAvatars: [
        "/images/avatar.png",
        "/images/avatar.png",
        "/images/avatar.png",
        "/images/avatar.png",
        "/images/avatar.png",
      ],
    },
    {
      title: "Graphic Design Principles",
      description: "Master visual communication through typography, color theory, and layout design",
      instructor: {
        name: "Lisa Park",
        avatar: "/images/avatar.png",
      },
      enrolled: 278,
      enrolledAvatars: [
        "/images/avatar.png",
        "/images/avatar.png",
        "/images/avatar.png",
        "/images/avatar.png",
        "/images/avatar.png",
      ],
    },
    {
      title: "Database Management Systems",
      description: "Design and manage relational databases using SQL and database optimization techniques",
      instructor: {
        name: "David Kim",
        avatar: "/images/avatar.png",
      },
      enrolled: 203,
      enrolledAvatars: [
        "/images/avatar.png",
        "/images/avatar.png",
        "/images/avatar.png",
        "/images/avatar.png",
        "/images/avatar.png",
      ],
    },
    {
      title: "Entrepreneurship & Innovation",
      description: "Learn to identify opportunities, validate ideas, and launch successful startups",
      instructor: {
        name: "Maria Garcia",
        avatar: "/images/avatar.png",
      },
      enrolled: 167,
      enrolledAvatars: [
        "/images/avatar.png",
        "/images/avatar.png",
        "/images/avatar.png",
        "/images/avatar.png",
        "/images/avatar.png",
      ],
    },
    {
      title: "Blockchain Technology",
      description: "Understand cryptocurrency, smart contracts, and decentralized applications",
      instructor: {
        name: "Robert Anderson",
        avatar: "/images/avatar.png",
      },
      enrolled: 134,
      enrolledAvatars: [
        "/images/avatar.png",
        "/images/avatar.png",
        "/images/avatar.png",
        "/images/avatar.png",
        "/images/avatar.png",
      ],
    },
    {
      title: "Video Editing & Production",
      description: "Create professional videos using industry-standard tools and editing techniques",
      instructor: {
        name: "Jennifer Lee",
        avatar: "/images/avatar.png",
      },
      enrolled: 221,
      enrolledAvatars: [
        "/images/avatar.png",
        "/images/avatar.png",
        "/images/avatar.png",
        "/images/avatar.png",
        "/images/avatar.png",
      ],
    },
  ];

  // Sample course data for "Completed"
  const completedCourses = [
    {
      title: "Introduction to Design Thinking",
      description: "An introductory course in design covering design thinking, laws and principles",
    },
    {
      title: "Introduction to Computer Science",
      description: "Fundamental programming concepts, algorithms, and data structures for beginners",
    },
    {
      title: "Public Speaking & Presentation Skills",
      description: "Build confidence and master techniques for effective communication and presentations",
    },
    {
      title: "Time Management & Productivity",
      description: "Learn strategies to organize tasks, set priorities, and maximize your efficiency",
    },
    {
      title: "Financial Literacy Basics",
      description: "Understand budgeting, saving, investing, and personal finance management",
    },
    {
      title: "Introduction to Psychology",
      description: "Explore human behavior, mental processes, and psychological research methods",
    },
    {
      title: "Creative Writing Fundamentals",
      description: "Develop your storytelling skills through fiction, poetry, and narrative techniques",
    },
    {
      title: "Photography Essentials",
      description: "Master camera settings, composition, lighting, and post-processing basics",
    },
    {
      title: "Network Security Basics",
      description: "Learn fundamental concepts of network protection and security protocols",
    },
    {
      title: "Leadership & Team Management",
      description: "Develop skills to lead teams, manage conflicts, and inspire organizational growth",
    },
  ];

  // Pagination logic for My Courses
  const myCoursesTotalPages = Math.ceil(myCourses.length / ITEMS_PER_PAGE);
  const paginatedMyCourses = useMemo(() => {
    const startIndex = (myCoursesPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return myCourses.slice(startIndex, endIndex);
  }, [myCoursesPage, myCourses]);

  // Pagination logic for Completed Courses
  const completedTotalPages = Math.ceil(completedCourses.length / ITEMS_PER_PAGE);
  const paginatedCompletedCourses = useMemo(() => {
    const startIndex = (completedPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return completedCourses.slice(startIndex, endIndex);
  }, [completedPage, completedCourses]);

  // Pagination logic for Explore Courses
  const exploreTotalPages = Math.ceil(exploreCourses.length / ITEMS_PER_PAGE);
  const paginatedExploreCourses = useMemo(() => {
    const startIndex = (explorePage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return exploreCourses.slice(startIndex, endIndex);
  }, [explorePage, exploreCourses]);

  return (
    <>
      <div className="space-y-6">
        {/* Tabs */}
        <div className="mb-6">
          <Tabs
            tabs={tabs}
            defaultTab={activeTab}
            onTabChange={handleTabChange}
          />
        </div>

        {/* Course Grid - Conditional Rendering Based on Active Tab */}
        {activeTab === "my-courses" && (
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {paginatedMyCourses.map((course, index) => (
                <CourseCardGrid
                  key={index}
                  title={course.title}
                  description={course.description}
                  progress={course.progress}
                  onClick={() => handleCourseClick(course)}
                />
              ))}
            </div>
            {myCoursesTotalPages > 1 && (
              <Pagination
                currentPage={myCoursesPage}
                totalPages={myCoursesTotalPages}
                onPageChange={setMyCoursesPage}
              />
            )}
          </>
        )}

        {activeTab === "completed" && (
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {paginatedCompletedCourses.map((course, index) => (
                <CompletedCourseCard
                  key={index}
                  title={course.title}
                  description={course.description}
                  onClick={() => handleCourseClick({ ...course, progress: 100 })}
                />
              ))}
            </div>
            {completedTotalPages > 1 && (
              <Pagination
                currentPage={completedPage}
                totalPages={completedTotalPages}
                onPageChange={setCompletedPage}
              />
            )}
          </>
        )}

        {activeTab === "explore" && (
          <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {paginatedExploreCourses.map((course, index) => (
                <ExploreCourseCard
                  key={index}
                  title={course.title}
                  description={course.description}
                  instructor={course.instructor}
                  enrolled={course.enrolled}
                  enrolledAvatars={course.enrolledAvatars}
                  onClick={() => handleCourseClick(course)}
                />
              ))}
            </div>
            {exploreTotalPages > 1 && (
              <Pagination
                currentPage={explorePage}
                totalPages={exploreTotalPages}
                onPageChange={setExplorePage}
              />
            )}
          </>
        )}
      </div>

      {/* Course Details Modal */}
      <CourseDetailsModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        course={selectedCourse}
      />
    </>
  );
}
