import React from "react";
import Image from "next/image";
import coursePlaceholder from "@/public/images/Courses.png";

interface ExploreCourseCardProps {
  title: string;
  description: string;
  instructor: {
    name: string;
    avatar?: string;
  };
  enrolled: number;
  enrolledAvatars?: string[];
  onClick?: () => void;
}

export default function ExploreCourseCard({
  title,
  description,
  instructor,
  enrolled,
  enrolledAvatars = [],
  onClick,
}: ExploreCourseCardProps) {
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
        <div className="grid gap-1 mb-4">
          {/* Title */}
          <h3 className="text-sm font-medium text-gray-01 line-clamp-1 overflow-hidden">{title}</h3>

          {/* Description */}
          <p className="text-sm font-normal text-gray-03 line-clamp-2 overflow-hidden">{description}</p>
        </div>

        {/* Instructor and Enrollment Info */}
        <div className="flex items-center justify-between">
          {/* Instructor */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 overflow-hidden rounded-full bg-gray-300">
              {instructor.avatar ? (
                <Image
                  src={instructor.avatar}
                  alt={instructor.name}
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-orange-500 text-xs font-medium text-white">
                  {instructor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </div>
              )}
            </div>
            <span className="text-sm text-gray-02">{instructor.name}</span>
          </div>

          {/* Enrollment */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {enrolledAvatars.slice(0, 5).map((avatar, index) => (
                <div
                  key={index}
                  className="h-6 w-6 overflow-hidden rounded-full border-2 border-white bg-gray-300"
                >
                  {avatar ? (
                    <Image
                      src={avatar}
                      alt={`Enrolled user ${index + 1}`}
                      width={24}
                      height={24}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-orange-500 text-[10px] font-medium text-white">
                      {String.fromCharCode(65 + index)}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <span className="text-sm text-gray-02">{enrolled} enrolled</span>
          </div>
        </div>
      </div>
    </div>
  );
}
