"use client";

import { useState } from "react";
import Tabs from "@/components/dashboard/Tabs";
import CourseCardGrid from "@/components/dashboard/CourseCardGrid";

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState("my-courses");

  const tabs = [
    { id: "my-courses", label: "My Courses" },
    { id: "completed", label: "Completed" },
    { id: "explore", label: "Explore Courses" },
  ];

  // Sample course data
  const courses = [
    {
      title: "Introduction to Design Thinking",
      description: "An introductory course in design covering design thinking, laws and principles",
      progress: 50,
    },
    {
      title: "Introduction to Design Thinking",
      description: "An introductory course in design covering design thinking, laws and principles",
      progress: 50,
    },
    {
      title: "Introduction to Design Thinking",
      description: "An introductory course in design covering design thinking, laws and principles",
      progress: 50,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="mb-6">
        <Tabs
          tabs={tabs}
          defaultTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <CourseCardGrid
            key={index}
            title={course.title}
            description={course.description}
            progress={course.progress}
          />
        ))}
      </div>
    </div>
  );
}
