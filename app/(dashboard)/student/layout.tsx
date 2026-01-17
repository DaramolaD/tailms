"use client";

import { usePathname } from "next/navigation";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StudentSidebar from "@/components/dashboard/StudentSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Image from "next/image";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Exclude lesson pages and quiz activity pages from the dashboard layout
  const isLessonPage = pathname?.includes("/lesson");
  const isQuizActivityPage = pathname?.includes("/quiz/") && pathname?.split("/quiz/").length > 1 && pathname?.split("/quiz/")[1] !== "";

  if (isLessonPage || isQuizActivityPage) {
    // Return children directly without dashboard layout for lesson and quiz activity pages
    return <>{children}</>;
  }

  return (
    <DashboardLayout
      sidebar={<StudentSidebar />}
      header={<DashboardHeader />}
    >
      {children}
    </DashboardLayout>
  );
}

