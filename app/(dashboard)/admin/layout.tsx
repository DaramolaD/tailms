"use client";

import { usePathname } from "next/navigation";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import AdminSidebar from "@/components/dashboard/AdminSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

const adminUser = {
  name: "James Sotonwa",
  role: "Administrator",
  avatar: "/images/avatar.png",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Exclude specific pages from the dashboard layout if needed
  // Similar to student layout, you can add exclusions here

  return (
    <DashboardLayout
      sidebar={<AdminSidebar />}
      header={<DashboardHeader user={adminUser} />}
    >
      {children}
    </DashboardLayout>
  );
}
