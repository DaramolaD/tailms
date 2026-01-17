"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Tabs from "@/components/dashboard/Tabs";

interface QuizItem {
  id: string;
  module: string;
  title: string;
  duration: string;
  isActive: boolean;
  isCompleted?: boolean;
}

export default function QuizPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"all" | "completed">("all");

  // Sample data - replace with real data from API
  const allQuizzes: QuizItem[] = [
    {
      id: "1",
      module: "Module 1",
      title: "Module 1 Quiz",
      duration: "10 min",
      isActive: false,
      isCompleted: true,
    },
    {
      id: "2",
      module: "Module 2",
      title: "Module 2 Quiz",
      duration: "10 min",
      isActive: true,
      isCompleted: false,
    },
    {
      id: "3",
      module: "Module 3",
      title: "Module 3 Quiz",
      duration: "10 min",
      isActive: false,
      isCompleted: false,
    },
    {
      id: "4",
      module: "Module 4",
      title: "Module 4 Quiz",
      duration: "10 min",
      isActive: false,
      isCompleted: false,
    },
    {
      id: "5",
      module: "Module 5",
      title: "Module 5 Quiz",
      duration: "10 min",
      isActive: false,
      isCompleted: false,
    },
    {
      id: "6",
      module: "Module 6",
      title: "Module 6 Quiz",
      duration: "10 min",
      isActive: false,
      isCompleted: false,
    },
    {
      id: "7",
      module: "Module 7",
      title: "Module 7 Quiz",
      duration: "10 min",
      isActive: false,
      isCompleted: false,
    },
    {
      id: "8",
      module: "Module 8",
      title: "Module 8 Quiz",
      duration: "10 min",
      isActive: false,
      isCompleted: false,
    },
    {
      id: "9",
      module: "Module 9",
      title: "Module 9 Quiz",
      duration: "10 min",
      isActive: false,
      isCompleted: false,
    },
  ];

  // Filter quizzes based on active tab
  const displayedQuizzes = useMemo(() => {
    if (activeTab === "completed") {
      return allQuizzes.filter((quiz) => quiz.isCompleted);
    }
    return allQuizzes;
  }, [activeTab]);

  const handleStart = (quizId: string) => {
    // Navigate to quiz activity page
    router.push(`/student/quiz/${quizId}`);
  };

  const handleReview = (quizId: string) => {
    // Handle review action - navigate to quiz review/results page
    console.log("Review quiz:", quizId);
  };

  const tabs = [
    { id: "all", label: "All" },
    { id: "completed", label: "Completed" },
  ];

  return (
    <div className="space-y-6">
      {/* Page Title and Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Quiz</h1>
        <Tabs
          tabs={tabs}
          defaultTab={activeTab}
          onTabChange={(tabId) => setActiveTab(tabId as "all" | "completed")}
        />
      </div>

      {/* Quiz List */}
      <div className="space-y-4">
        {displayedQuizzes.length > 0 ? (
          displayedQuizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="flex items-center justify-between gap-4 rounded-lg p-4 bg-white hover:bg-gray-06 transition-colors shadow-sm"
            >
              {/* Left: Icon and Quiz Info */}
              <div className="flex items-center gap-4 min-w-0 flex-1">
                {/* Light Blue Icon Circle */}
                <div className="shrink-0 bg-blue-100 w-14 h-14 flex items-center justify-center rounded-full">
                  <Image
                    src="/icons/targetIcon.svg"
                    alt="Target"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                </div>

                {/* Quiz Details */}
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-normal text-gray-02 mb-1">Course Activity</p>
                  <h4 className="text-base font-medium text-gray-01 line-clamp-1">
                    {quiz.title}
                  </h4>
                </div>
              </div>

              {/* Right: Duration and Start Button */}
              <div className="flex items-center gap-6 shrink-0">
                {/* Duration */}
                <div className="grid gap-1">
                  <span className="text-sm font-normal text-gray-02">Duration</span>
                  <span className="text-sm font-medium text-gray-01">{quiz.duration}</span>
                </div>

                {/* Start/Review Button */}
                {quiz.isCompleted ? (
                  <button
                    onClick={() => handleReview(quiz.id)}
                    className="rounded-lg px-4 py-2 text-sm font-medium bg-orange-500 text-white hover:bg-orange-600 transition-colors shrink-0"
                  >
                    Review
                  </button>
                ) : (
                  <button
                    onClick={() => handleStart(quiz.id)}
                    disabled={!quiz.isActive}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors shrink-0 ${
                      quiz.isActive
                        ? "bg-orange-500 text-white hover:bg-orange-600"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Start
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No quizzes found</p>
          </div>
        )}
      </div>
    </div>
  );
}
