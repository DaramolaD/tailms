"use client";

import SummaryCard from "@/components/dashboard/SummaryCard";
import Image from "next/image";

export default function AdminPage() {
  const user = {
    name: "James Sotonwa",
    role: "Administrator",
  };

  return (
    <>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-gray-900">
          Welcome, {user.name}! 👋
        </h1>
        <p className="text-[#808080]">
          You&apos;ve got the best view of everything here on here.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <SummaryCard
          title="Courses"
          value="4"
          status="In Progress"
          bgColor="bg-[#FFFFFF]"
          iconBgColor="bg-[#FFF4DF]"
          icon={
            <Image src="/icons/pathIcon.svg" alt="In Progress" width={32} height={32} />
          }
        />
        <SummaryCard
          title="Courses"
          value="12"
          status="Completed"
          bgColor="bg-[#FFFFFF]"
          iconBgColor="bg-[#D6F2ED]"
          icon={
            <Image src="/icons/checkSquare.svg" alt="Completed" width={32} height={32} />
          }
        />
        <SummaryCard
          title="Quizzes"
          value="8"
          status="Completed"
          bgColor="bg-[#FFFFFF]"
          iconBgColor="bg-[#D4EDFF]"
          icon={
            <Image src="/icons/medalIcon.svg" alt="Completed" width={32} height={32} />
          }
        />
      </div>
    </>
  );
}
