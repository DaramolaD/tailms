import React from "react";
import Image from "next/image";
import coursePlaceholder from "@/public/images/Courses.png";

interface CompletedCourseCardProps {
  title: string;
  description: string;
  onClick?: () => void;
}

export default function CompletedCourseCard({
  title,
  description,
  onClick,
}: CompletedCourseCardProps) {
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

        {/* Completed Status */}
        <div className="space-y-2 w-full flex flex-col items-end">
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
            <div
              className="h-full bg-orange-500 transition-all"
              style={{ width: "100%" }}
            ></div>
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="text-sm font-normal text-gray-02">Completed</span>
            <span className="text-sm font-normal text-gray-02">100%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
