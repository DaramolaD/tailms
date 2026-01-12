"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useMobileMenu } from "./MobileMenuContext";

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

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

  const bottomItems = [
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


export default function StudentSidebar() {
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

