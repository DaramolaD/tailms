"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: "video" | "reading" | "quiz";
  status: "completed" | "active" | "locked";
}

interface CourseSidebarProps {
  courseTitle: string;
  moduleTitle: string;
  lessons: Lesson[];
  currentLessonId?: string;
}

export default function CourseSidebar({
  courseTitle,
  moduleTitle,
  lessons,
  currentLessonId,
}: CourseSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const getLessonIcon = (lesson: Lesson) => {
    if (lesson.status === "completed") {
      return (
        <Image src="/icons/checkmark.svg" alt="Completed" width={20} height={20} />
      );
    }
    if (lesson.type === "quiz") {
      return (
        <Image src="/icons/quizIcon.svg" alt="Quiz" width={20} height={20} />
      );
    }
    if (lesson.type === "reading") {
      return (
        <Image src="/icons/resourceIcon.svg" alt="Reading" width={20} height={20} />
      );
    }
    // Video/play icon
    return (
      <Image src="/icons/youtube.svg" alt="Play" width={20} height={20} />
    );
  };

  return (
    <aside className={`${isCollapsed ? "w-20" : "w-80"} shrink-0 border-r border-gray-200 bg-white h-full overflow-y-auto transition-all duration-300`}>
      <div className="p-6">
        {/* Module Title */}
        <div className="mb-6 flex gap-2 items-center justify-between">
          {!isCollapsed && (
            <h2 className="text-lg font-bold text-gray-900 truncate">{moduleTitle}</h2>
          )}
          <button
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 ml-auto"
            aria-label="Toggle menu"
          >
            <Image src="/icons/menu-collapse.svg" alt="Toggle" width={20} height={20} className="min-w-6! min-h-6!"/>
          </button>
        </div>

        {/* Lesson List */}
        <div className="space-y-1">
          {lessons.map((lesson) => {
            const isActive = lesson.id === currentLessonId;
            const isCompleted = lesson.status === "completed";
            const isLocked = lesson.status === "locked";

            return (
              <button
                key={lesson.id}
                disabled={isLocked}
                className={`relative w-full flex items-center ${isCollapsed ? "justify-center" : "gap-3"} px-4 py-3 rounded-lg text-left transition-colors ${isActive
                    ? "bg-orange-50 text-gray-900"
                    : isCompleted
                      ? "text-gray-700 hover:bg-orange-50"
                      : isLocked
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-700 hover:bg-orange-50"
                  }`}
              >
                {/* Vertical orange bar for active state */}
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 rounded-l-lg" />
                )}
                <span className="shrink-0">{getLessonIcon(lesson)}</span>
                {!isCollapsed && (
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{lesson.title}</div>
                    <div className={`text-xs ${isActive ? "text-gray-600" : "text-gray-500"}`}>
                      {lesson.duration}
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
