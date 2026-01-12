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
  return (
    <DashboardLayout
      sidebar={<StudentSidebar />}
      header={<DashboardHeader />}
    >
      {children}
    </DashboardLayout>
  );
}

