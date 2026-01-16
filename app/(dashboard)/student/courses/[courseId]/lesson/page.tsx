"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import CourseSidebar from "@/components/dashboard/CourseSidebar";
import VideoPlayer from "@/components/dashboard/VideoPlayer";
import CodeEditor from "@/components/dashboard/CodeEditor";

export default function CourseLessonPage() {
    const params = useParams();
    const router = useRouter();
    const courseId = params.courseId as string;
    const [isCompleted, setIsCompleted] = useState(false);
    const [isCodeEditorOpen, setIsCodeEditorOpen] = useState(false);

    // Sample data - replace with real data from API
    const courseData = {
        title: "Introduction to Design Thinking",
        module: "Module 1 - Introduction to Design Thinking",
        progress: 0,
        lessons: [
            {
                id: "1",
                title: "Introduction to Design thinking",
                duration: "10 mins",
                type: "video" as const,
                status: "completed" as const,
            },
            {
                id: "2",
                title: "Introduction to Design thinking",
                duration: "10 mins",
                type: "video" as const,
                status: "active" as const,
            },
            {
                id: "3",
                title: "Introduction to Design thinking",
                duration: "10 mins",
                type: "video" as const,
                status: "locked" as const,
            },
            {
                id: "4",
                title: "Introduction to Design thinking",
                duration: "10 mins",
                type: "video" as const,
                status: "locked" as const,
            },
            {
                id: "5",
                title: "Reading Material",
                duration: "15 mins",
                type: "reading" as const,
                status: "locked" as const,
            },
            {
                id: "6",
                title: "Quiz",
                duration: "20 mins",
                type: "quiz" as const,
                status: "locked" as const,
            },
        ],
        currentLesson: {
            id: "2",
            title: "Introduction to Design thinking",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
    };

    const handleMarkAsCompleted = () => {
        setIsCompleted(true);
        // Handle completion logic here
    };

    const handlePrevious = () => {
        // Navigate to previous lesson
        const currentIndex = courseData.lessons.findIndex(
            (l) => l.id === courseData.currentLesson.id
        );
        if (currentIndex > 0) {
            const prevLesson = courseData.lessons[currentIndex - 1];
            // Navigate to previous lesson
        }
    };

    const handleNext = () => {
        // Navigate to next lesson
        const currentIndex = courseData.lessons.findIndex(
            (l) => l.id === courseData.currentLesson.id
        );
        if (currentIndex < courseData.lessons.length - 1) {
            const nextLesson = courseData.lessons[currentIndex + 1];
            // Navigate to next lesson
        }
    };

    const user = {
        name: "John Johnson",
        role: "Student",
        avatar: "/images/avatar.png",
    };

    return (
        <div className="flex h-screen overflow-hidden bg-gray-06">
            {/* Sidebar */}
            <CourseSidebar
                courseTitle={courseData.title}
                moduleTitle={courseData.module}
                lessons={courseData.lessons}
                currentLessonId={courseData.currentLesson.id}
            />

            {/* Main Content */}
            <div className="flex flex-1 overflow-hidden">
                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto bg-white">
                    <div className="container mx-auto px-6 py-6">
                        <div className="space-y-6">
                            {/* Video Player */}
                            <VideoPlayer
                                title={courseData.currentLesson.title}
                                thumbnail="/images/course-thumbnail.png"
                                onCodeToggle={() => setIsCodeEditorOpen(!isCodeEditorOpen)}
                            />

                            {/* Course Details */}
                            <div className="bg-white rounded-2xl p-6">
                                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                                    {courseData.currentLesson.title}
                                </h1>
                                <p className="text-sm text-gray-700 leading-relaxed mb-6">
                                    {courseData.currentLesson.description}
                                </p>
                            </div>

                            {/* Navigation */}
                            <div className="flex items-center justify-between">
                                {/* Mark as Completed Button */}
                                <button
                                    onClick={handleMarkAsCompleted}
                                    className={`w-full sm:w-auto px-6 py-3 rounded-lg font-bold text-white transition-colors flex items-center justify-center gap-2 ${
                                        isCompleted
                                            ? "bg-green-500 hover:bg-green-600"
                                            : "bg-orange-500 hover:bg-orange-600"
                                    }`}
                                >
                                    {isCompleted ? (
                                        <>
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            Completed
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            Mark as completed
                                        </>
                                    )}
                                </button>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={handlePrevious}
                                        className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 19l-7-7 7-7"
                                            />
                                        </svg>
                                        <span>Previous</span>
                                    </button>

                                    <button
                                        onClick={handleNext}
                                        className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                                    >
                                        <span>Next</span>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Right: Code Editor Panel */}
                {isCodeEditorOpen && (
                    <CodeEditor
                        isOpen={isCodeEditorOpen}
                        onClose={() => setIsCodeEditorOpen(false)}
                    />
                )}
            </div>
        </div>
    );
}
