"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ResourceActivity {
  id: string;
  title: string;
  duration: string;
}

interface Module {
  id: string;
  title: string;
  activities: ResourceActivity[];
}

export default function ResourcesPage() {
  // Sample data - replace with real data from API
  const modules: Module[] = [
    {
      id: "1",
      title: "Module 1",
      activities: [
        {
          id: "1",
          title: "Introduction to Design Thinking",
          duration: "10 min",
        },
        {
          id: "2",
          title: "Introduction to Design Thinking",
          duration: "10 min",
        },
      ],
    },
    {
      id: "2",
      title: "Module 2",
      activities: [
        {
          id: "3",
          title: "Introduction to Design Thinking",
          duration: "10 min",
        },
      ],
    },
    {
      id: "3",
      title: "Module 3",
      activities: [
        {
          id: "4",
          title: "Introduction to Design Thinking",
          duration: "10 min",
        },
      ],
    },
    {
      id: "4",
      title: "Module 4",
      activities: [
        {
          id: "5",
          title: "Introduction to Design Thinking",
          duration: "10 min",
        },
        {
          id: "6",
          title: "Introduction to Design Thinking",
          duration: "10 min",
        },
      ],
    },
  ];

  const handleStart = (activityId: string) => {
    // Handle start action - navigate to activity or open modal
    console.log("Start activity:", activityId);
  };

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-gray-900">Resources</h1>

      {/* Modules */}
      <div className="space-y-6 bg-white/80 rounded-lg p-4">
        {modules.map((module, moduleIndex) => (
          <div key={module.id}>
            {/* Module Header */}
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900">{module.title}</h2>
            </div>

            <div className="bg-white rounded-lg pl-4 pr-4">
              {/* Module Activities */}
              <div className="space-y-4">
                {module.activities.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center justify-between gap-4 rounded-lg py-4 px-4 hover:bg-gray-06 transition-colors"
                  >
                    {/* Left: Icon and Activity Info */}
                    <div className="flex items-center gap-4 min-w-0 flex-1">
                      {/* Light Blue Icon Circle */}
                      <div className="shrink-0 bg-blue-100 w-14 h-14 flex items-center justify-center rounded-full">
                        <Image
                          src="/icons/targetIcon.svg"
                          alt="Target"
                          width={20}
                          height={20}
                          className="h-8 w-8"
                        />
                      </div>

                      {/* Activity Details */}
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-normal text-gray-02 mb-1">Course Activity</p>
                        <h4 className="text-base font-medium text-gray-01 line-clamp-1">
                          {activity.title}
                        </h4>
                      </div>
                    </div>

                    {/* Right: Duration and Start Button */}
                    <div className="flex items-center gap-6 shrink-0">
                      {/* Duration */}
                      <div className="grid gap-1">
                        <span className="text-sm font-normal text-gray-02">Duration</span>
                        <span className="text-sm font-medium text-gray-01">{activity.duration}</span>
                      </div>

                      {/* Start Button */}
                      <button
                        onClick={() => handleStart(activity.id)}
                        className="rounded-lg px-4 py-2 text-sm font-medium bg-orange-500 text-white hover:bg-orange-600 transition-colors shrink-0"
                      >
                        Start
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider between modules (except for last module) */}
              {moduleIndex < modules.length - 1 && (
                <div className="mt-6 border-t border-gray-200" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
