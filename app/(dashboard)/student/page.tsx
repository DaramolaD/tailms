"use client";

import SummaryCard from "@/components/dashboard/SummaryCard";
import AgendaItem from "@/components/dashboard/AgendaItem";
import AssignmentCard from "@/components/dashboard/AssignmentCard";
import CourseCard from "@/components/dashboard/CourseCard";
import Link from "next/link";
import Image from "next/image";
import graduateIcon from "@/public/icons/graduationCapIcon.svg";
import targetIcon from "@/public/icons/targetIcon.svg";

export default function StudentPage() {
  const user = {
    name: "John Johnson",
    role: "Student",
  };

  const ongoingCourses = [
    { title: "Introduction to Design Thinking", instructor: "Sen Janson", progress: 50 },
    { title: "Introduction to Design Thinking", instructor: "Sen Janson", progress: 50 },
    { title: "Introduction to Design Thinking", instructor: "Sen Janson", progress: 50 },
    { title: "Introduction to Design Thinking", instructor: "Sen Janson", progress: 50 },
  ];

  return (
    <>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-medium text-gray-900">
          Welcome, {user.name}! 👋
        </h1>
        <p className="text-[#808080]">
          It&apos;s another day to learn and become world-class!
        </p>
      </div>

      {/* Summary Cards */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <SummaryCard
          title="Courses In Progress"
          value="4"
          bgColor="bg-[#FFFFFF]"
          iconBgColor="bg-[#FFF4DF]"
          icon={
            <Image src="/icons/pathIcon.svg" alt="Completed" width={32} height={32} />
          }
        />
        <SummaryCard
          title="Courses Completed"
          value="12"
          bgColor="bg-[#FFFFFF]"
          iconBgColor="bg-[#D6F2ED]"
          icon={
            <Image src="/icons/checkSquare.svg" alt="Completed" width={32} height={32} />
          }
        />
        <SummaryCard
          title="Quizzes Completed"
          value="8"
          bgColor="bg-[#FFFFFF]"
          iconBgColor="bg-[#D4EDFF]"
          icon={
            <Image src="/icons/medalIcon.svg" alt="Completed" width={32} height={32} />
          }
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="flex flex-col gap-[18px] col-span-1 lg:col-span-3">
          {/* Today's Agenda */}
          <section className="grid gap-4 mb-8 p-4 bg-white rounded-2xl">
            <h2 className="text-base font-medium text-gray-01">Today&apos;s Agenda</h2>
            <div className="space-y-4">
              <AgendaItem
                title="Module 2 - UX Design Foundations"
                instructor="Sen Janson"
                duration="60 min"
                iconBgColor="bg-[#FFF4DF]"
                buttonText="Start"
                buttonVariant="primary"
                icon={
                  <Image src={graduateIcon} alt="Graduate" width={32} height={32} />
                }
              />
              <AgendaItem
                title="Module 2 Quiz"
                instructor="Course Activity"
                duration="10 min"
                iconBgColor="bg-[#D4EDFF]"
                buttonText="Start"
                buttonVariant="secondary"
                icon={
                  <Image src={targetIcon} alt="Book" width={32} height={32} />
                }
              />
              <AgendaItem
                title="Module 2 Assignment"
                instructor="Course Activity"
                duration="-"
                iconBgColor="bg-[#D4EDFF]"
                buttonText="Start"
                buttonVariant="secondary"
                icon={
                  <Image src={targetIcon} alt="Book" width={32} height={32} />
                }
              />
            </div>
          </section>

          {/* Assignments */}
          <section className="p-4 bg-white rounded-2xl">
            <div className="mb-4 flex items-center justify-between">
            <h2 className="text-base font-medium text-gray-01">Assignments</h2>
              <Link href="/student/assignments" className="text-sm text-gray-02 hover:text-gray-01">
                View all &gt;
              </Link>
              </div>
            <div className="space-y-4">
              <AssignmentCard
                title="Module 2 Assignment"
                instructor="Course Activity"
                status="pending"
                iconBgColor="bg-[#D4EDFF]"
                icon={
                  <Image src={targetIcon} alt="Book" width={32} height={32} />
                }
              />
              <AssignmentCard
                title="Module 1 Assignment"
                instructor="Course Activity"
                status="submitted"
                iconBgColor="bg-[#D4EDFF]"
                icon={
                  <Image src={targetIcon} alt="Book" width={32} height={32} />
                }
              />
            </div>
          </section>

        </div>

        <div className="p-4 bg-white rounded-2xl col-span-1 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-medium text-gray-01">Ongoing Courses</h2>
            <Link href="/student/courses" className="text-sm text-gray-02 hover:text-gray-01">
              View all &gt;
            </Link>
          </div>
          <div className="space-y-4">
            {ongoingCourses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
