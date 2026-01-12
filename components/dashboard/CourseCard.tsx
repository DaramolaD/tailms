import React from "react";
import Image from "next/image";

interface CourseCardProps {
  title: string;
  instructor: string;
  progress: number;
  thumbnail?: string;
  onClick?: () => void;
}

export default function CourseCard({
  title,
  instructor,
  progress,
  thumbnail,
  onClick,
}: CourseCardProps) {
  return (
    <div
      className="cursor-pointer flex flex-col md:flex-row gap-3 rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md"
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="mb-3 aspect-video w-full overflow-hidden rounded-lg bg-gray-200 h-[115px] w-[214px]">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={title}
            width={400}
            height={225}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-orange-100 to-orange-200">
            <svg
              className="h-12 w-12 text-orange-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
        )}
      </div>

      <div className="grid gap-3">
        {/* Course Info */}
        <div className="grid gap-1">
          <h4 className="mb-1 line-clamp-2 font-medium text-base text-gray-01 lg:line-clamp-2">{title}</h4>
          <p className="text-normal text-sm text-gray-02 truncate">{instructor}</p>
        </div>

        {/* Progress Bar */}
        <div className="flex flex-col items-end gap-2">
          <div className="h-1 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full bg-orange-500 transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between font-normal text-sm text-gray-02">
            <span>{progress}% completed</span>
          </div>
        </div>
      </div>
    </div>
  );
}

