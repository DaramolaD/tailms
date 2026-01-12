import React from "react";

interface SummaryCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  bgColor?: string;
  iconBgColor?: string;
}

export default function SummaryCard({
  title,
  value,
  icon,
  bgColor = "bg-orange-100",
  iconBgColor = "bg-orange-600",
}: SummaryCardProps) {
  return (
    <div
      className={`rounded-2xl ${bgColor} p-6 transition-transform shadow-xs hover:shadow-md`}
    >
      <div className="flex gap-6 items-start">
        <div className={`shrink-0 ${iconBgColor} w-14 h-14 flex items-center justify-center rounded-lg`}>{icon}</div>
        <div className="grid gap-1">
          <p className="text-gray-01 text-base font-medium">{value}</p>
          <p className="text-sm font-medium text-gray-600">{title}</p>
        </div>
      </div>
    </div>
  );
}

