"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMobileMenu } from "./MobileMenuContext";

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  isLogout?: boolean;
}

// Navigation items for admin sidebar
const navItems = [
  {
    name: "Dashboard",
    href: "/admin",
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
    name: "Students",
    href: "/admin/students",
    icon: (
      <Image
        src="/icons/students.svg"
        alt="Students"
        width={20}
        height={20}
        className="h-5 w-5"
      />
    ),
  },
  {
    name: "Courses",
    href: "/admin/courses",
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
    name: "Reports",
    href: "/admin/reports",
    icon: (
      <Image
        src="/icons/gradeIcon.svg"
        alt="Reports"
        width={20}
        height={20}
        className="h-5 w-5"
      />
    ),
  },
  {
    name: "Messages",
    href: "/admin/messages",
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

const bottomItems = [
  {
    name: "Settings",
    href: "/admin/settings",
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
    isLogout: true,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const { close } = useMobileMenu();

  const NavLink = ({ item }: { item: NavItem }) => {
    const isActive = pathname === item.href;
    return (
      <Link
        href={item.href}
        onClick={close}
        className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
          isActive
            ? "bg-orange-500 text-white"
            : item.isLogout
            ? "text-red-600 hover:bg-gray-100"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        <span className={`shrink-0 ${isActive ? "brightness-0 invert" : ""}`}>
          {item.icon}
        </span>
        <span>{item.name}</span>
      </Link>
    );
  };

  return (
    <nav className="flex h-full flex-col overflow-y-auto p-4">
      {/* Logo */}
      <div className="mb-8 flex items-center gap-2 px-4">
        <Image
          src="/icons/logoBig.svg"
          alt="TAILMS Logo"
          width={32}
          height={32}
          className="h-8 w-8"
        />
      </div>

      {/* Main Navigation */}
      <div className="flex-1 space-y-1">
        {navItems.map((item) => (
          <NavLink key={item.href} item={item} />
        ))}
      </div>

      {/* Bottom Navigation */}
      {bottomItems.length > 0 && (
        <div className="mt-auto space-y-1 border-t border-gray-200 pt-4">
          {bottomItems.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </div>
      )}
    </nav>
  );
}
