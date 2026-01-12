"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StudentSidebar from "@/components/dashboard/StudentSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Image from "next/image";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Navigation items for sidebar
  const navItems = [
    {
      name: "Dashboard",
      href: "/student",
      icon: (
        <Image
          src="/icons/dashboardIcon.svg"
          alt="Dashboard"
          width={20}
          height={20}
          className="h-5 w-5"
        />
      ),
    },
    {
      name: "Courses",
      href: "/student/courses",
      icon: (
        <Image
          src="/icons/courseIcon.svg"
          alt="Courses"
          width={20}
          height={20}
          className="h-5 w-5"
        />
      ),
    },
    {
      name: "Resources",
      href: "/student/resources",
      icon: (
        <Image
          src="/icons/resourceIcon.svg"
          alt="Resources"
          width={20}
          height={20}
          className="h-5 w-5"
        />
      ),
    },
    {
      name: "Code Practice",
      href: "/student/code-practice",
      icon: (
        <Image
          src="/icons/codeIcon.svg"
          alt="Code Practice"
          width={20}
          height={20}
          className="h-5 w-5"
        />
      ),
    },
    {
      name: "Quiz",
      href: "/student/quiz",
      icon: (
        <Image
          src="/icons/quizIcon.svg"
          alt="Quiz"
          width={20}
          height={20}
          className="h-5 w-5"
        />
      ),
    },
    {
      name: "Grades",
      href: "/student/grades",
      icon: (
        <Image
          src="/icons/gradeIcon.svg"
          alt="Grades"
          width={20}
          height={20}
          className="h-5 w-5"
        />
      ),
    },
    {
      name: "Messages",
      href: "/student/messages",
      icon: (
        <Image
          src="/icons/messageIcon.svg"
          alt="Messages"
          width={20}
          height={20}
          className="h-5 w-5"
        />
      ),
    },
  ];

  const bottomNavItems = [
    {
      name: "Settings",
      href: "/student/settings",
      icon: (
        <Image
          src="/icons/settingsIcon.svg"
          alt="Settings"
          width={20}
          height={20}
          className="h-5 w-5"
        />
      ),
    },
    {
      name: "Logout",
      href: "/sign-in",
      icon: (
        <Image
          src="/icons/logoutIcon.svg"
          alt="Logout"
          width={20}
          height={20}
          className="h-5 w-5"
        />
      ),
    },
  ];

  const user = {
    name: "John Johnson",
    role: "Student",
  };

  return (
    <DashboardLayout
      sidebar={<StudentSidebar navItems={navItems} bottomItems={bottomNavItems} />}
      header={<DashboardHeader user={user} />}
    >
      {children}
    </DashboardLayout>
  );
}

