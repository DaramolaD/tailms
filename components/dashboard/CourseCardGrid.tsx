import React from "react";
import Image from "next/image";
import coursePlaceholder from "@/public/images/Courses.png";

interface CourseCardGridProps {
  title: string;
  description: string;
  progress: number;
  thumbnail?: string;
  onClick?: () => void;
}

export default function CourseCardGrid({
  title,
  description,
  progress,
  thumbnail,
  onClick,
}: CourseCardGridProps) {
  return (
    <div
      className="cursor-pointer overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="aspect-video w-full overflow-hidden bg-gray-200 h-[176px]">
        <Image
          src={coursePlaceholder}
          alt={title}
          width={400}
          height={176}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Course Info */}
      <div className="p-4">
        <div className="grid gap-1">
          {/* Title */}
          <h3 className="mb-2 text-sm font-medium text-gray-01 line-clamp-1">{title}</h3>

          {/* Description */}
          <p className="mb-4 text-sm text-normal text-gray-03 line-clamp-2">{description}</p>
        </div>

        {/* Progress Bar and Text */}
        <div className="space-y-2 w-full flex flex-col items-end">
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full bg-orange-500 transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-normal text-gray-02 w-fit text-left">{progress}% completed</p>
        </div>
      </div>
    </div>
  );
}

