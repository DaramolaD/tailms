import React from "react";

interface AssignmentCardProps {
  title: string;
  instructor?: string;
  status: "pending" | "submitted" | "graded";
  icon: React.ReactNode;
  iconBgColor?: string;
  onClick?: () => void;
}

export default function AssignmentCard({
  title,
  instructor,
  status,
  icon,
  iconBgColor = "bg-blue-100",
  onClick,
}: AssignmentCardProps) {
  const statusColors = {
    pending: "bg-[#FA85001A] text-[#FA8500]",
    submitted: "bg-green-30 green-30",
    graded: "bg-blue-100 text-blue-800",
  };

  const statusLabels = {
    pending: "Pending",
    submitted: "Submitted",
    graded: "Graded",
  };

  return (
    <div
      className={`flex flex-col md:flex-row cursor-pointer md:items-center gap-4 rounded-lg p-4 transition-transform hover:bg-gray-06`}
      onClick={onClick}
    >
      <div className="flex gap-4">
        <div className={`shrink-0 ${iconBgColor} w-14 h-14 flex items-center justify-center rounded-full`}>{icon}</div>
        <div className="min-w-0 flex-1">
          <h4 className="line-clamp-2 font-medium text-base text-gray-01 lg:line-clamp-1">{title}</h4>
          {instructor && (
            <p className="text-sm font-normal text-gray-02 truncate">{instructor}</p>
          )}
        </div>
      </div>
      <span
        className={`w-fit shrink-0 rounded-[5px] px-2 py-1 text-xs font-medium ${statusColors[status]}`}
      >
        {statusLabels[status]}
      </span>
    </div>
  );
}

