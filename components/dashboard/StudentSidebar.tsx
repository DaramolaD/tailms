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

interface StudentSidebarProps {
  navItems: NavItem[];
  bottomItems?: NavItem[];
  activePath?: string;
}

export default function StudentSidebar({ navItems, bottomItems = [] }: StudentSidebarProps) {
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

