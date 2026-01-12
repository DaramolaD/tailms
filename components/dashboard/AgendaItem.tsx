import React from "react";

interface AgendaItemProps {
  title: string;
  instructor?: string;
  duration?: string;
  icon: React.ReactNode;
  iconBgColor?: string;
  buttonText?: string;
  buttonVariant?: "primary" | "secondary";
  onStart?: () => void;
}

export default function AgendaItem({
  title,
  instructor,
  duration,
  icon,
  iconBgColor = "bg-yellow-100",
  buttonText = "Start",
  buttonVariant = "primary",
  onStart,
}: AgendaItemProps) {
  return (
    <div className={`flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-lg p-4 hover:bg-gray-06`}>
      <div className="flex items-center gap-4 min-w-0 flex-1">
        <div className={`shrink-0 ${iconBgColor} w-14 h-14 flex items-center justify-center rounded-full`}>{icon}</div>
        <div className="min-w-0 flex-1 grid gap-1">
          <h4 className="line-clamp-2 font-medium text-base text-gray-01 lg:line-clamp-1">{title}{title}</h4>
          {instructor && (
            <p className="text-sm font-normal text-gray-02 truncate">{instructor}</p>
          )}
        </div>
      </div>
      <div className="flex shrink-0 pl-4 md:pl-0 justify-between md:justify-start items-center gap-6 lg:gap-8">
        {duration && (
          <div className="grid gap-1">
            <span className="text-sm text-normal text-gray-02">Duration</span>
            <span className="text-sm text-medium text-gray-01">{duration}</span>
          </div>
        )}
        <button
          onClick={onStart}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors shrink-0 ${buttonVariant === "primary"
            ? "bg-orange-500 text-white hover:bg-orange-600"
            : "bg-gray-06 text-gray-04 hover:bg-gray-300"
            }`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

