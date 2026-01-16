"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import coursePlaceholder from "@/public/images/Courses.png";

interface CourseDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: {
    title: string;
    description: string;
    instructor?: {
      name: string;
      avatar?: string;
    };
    progress?: number;
    enrolled?: number;
  } | null;
}

export default function CourseDetailsModal({
  isOpen,
  onClose,
  course,
}: CourseDetailsModalProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"about" | "content">("about");

  // Reset tab to "about" when modal opens
  useEffect(() => {
    if (isOpen) {
      setActiveTab("about");
    }
  }, [isOpen]);

  const handleStartCourse = () => {
    // Generate a course ID from the title (in production, use actual course ID)
    const courseId = course?.title.toLowerCase().replace(/\s+/g, "-") || "course";
    router.push(`/student/courses/${courseId}/lesson`);
    onClose();
  };

  if (!isOpen || !course) return null;

  return (
    <>
      {/* Backdrop with blur */}
      <div
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-[624px] max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Course Details</h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Course Thumbnail/Banner */}
            <div className="relative w-full h-[300px] bg-gray-200 overflow-hidden">
              <Image
                src={coursePlaceholder}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Course Title and Instructor */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h3 className="text-2xl font-bold text-gray-900">{course.title}</h3>
                {course.instructor && (
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-300">
                      {course.instructor.avatar ? (
                        <Image
                          src={course.instructor.avatar}
                          alt={course.instructor.name}
                          width={40}
                          height={40}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-orange-500 text-sm font-medium text-white">
                          {course.instructor.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .toUpperCase()}
                        </div>
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {course.instructor.name}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Tabs */}
            <div className="px-6 pt-6 border-b border-gray-200">
              <div className="flex gap-8">
                <button
                  onClick={() => setActiveTab("about")}
                  className={`relative pb-4 text-sm font-medium transition-colors ${
                    activeTab === "about"
                      ? "text-gray-900 font-bold"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  About course
                  {activeTab === "about" && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500" />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("content")}
                  className={`relative pb-4 text-sm font-medium transition-colors ${
                    activeTab === "content"
                      ? "text-gray-900 font-bold"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Course content
                  {activeTab === "content" && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500" />
                  )}
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === "about" && (
                <div className="space-y-4">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {course.description}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  {course.progress !== undefined && (
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Progress</span>
                        <span className="text-sm text-gray-600">{course.progress}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                        <div
                          className="h-full bg-orange-500 transition-all"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === "content" && (
                <div className="space-y-4">
                  <div className="text-center py-12 text-gray-500">
                    <p className="text-sm">Course content will be displayed here</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer with Action Button */}
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <button
              onClick={handleStartCourse}
              className="w-full rounded-lg bg-orange-500 px-6 py-3 font-bold text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              {course.progress !== undefined && course.progress > 0
                ? "Continue Course"
                : "Start Course"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
