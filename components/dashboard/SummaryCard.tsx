import React from "react";

interface SummaryCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  bgColor?: string;
  iconBgColor?: string;
  status?: string;
  textColor?: string;
  titleColor?: string;
}

export default function SummaryCard({
  title,
  value,
  icon,
  bgColor = "bg-orange-100",
  iconBgColor = "bg-orange-600",
  status,
  textColor = "text-gray-900",
  titleColor = "text-gray-600",
}: SummaryCardProps) {
  return (
    <div
      className={`rounded-2xl ${bgColor} p-6 transition-transform shadow-xs hover:shadow-md`}
    >
      <div className="flex gap-6 items-start">
        <div className={`shrink-0 ${iconBgColor} w-14 h-14 flex items-center justify-center rounded-lg`}>{icon}</div>
        <div className="grid gap-1">
          {status ? (
            <>
              <p className={`${textColor} text-base font-medium`}>{value} {title}</p>
              <p className={`text-sm font-medium ${titleColor}`}>{status}</p>
            </>
          ) : (
            <>
              <p className={`${textColor} text-base font-medium`}>{value}</p>
              <p className={`text-sm font-medium ${titleColor}`}>{title}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

