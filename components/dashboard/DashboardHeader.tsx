"use client";

import Image from "next/image";
import { useState } from "react";
import { useMobileMenu } from "./MobileMenuContext";

interface DashboardHeaderProps {
  searchPlaceholder?: string;
  user?: {
    name: string;
    role: string;
    avatar?: string;
  };
}

const defaultUser = {
  name: "John Johnson",
  role: "Student",
  avatar: "/images/avatar.png",
};

export default function DashboardHeader({
  user = defaultUser,
  searchPlaceholder = "Search courses, assignments & resources",
}: DashboardHeaderProps) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { toggle } = useMobileMenu();

  return (
    <div className="flex h-16 items-center justify-between px-4 lg:px-6 container mx-auto py-6">
      {/* Left: Menu Button, Logo and Search */}
      <div className="flex flex-1 items-center gap-4">
        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={toggle}
          className="lg:hidden rounded-lg p-2 text-gray-600 hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Logo - hidden on desktop */}
        <div className="lg:hidden">
          <Image
            src="/icons/logoBig.svg"
            alt="TAILMS Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="text-medium block w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
            />
          </div>
        </div>
      </div>

      {/* Right: Notifications and Profile */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button
          type="button"
          className="relative rounded-lg p-2 text-gray-600 hover:bg-gray-100"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-orange-500"></span>
        </button>

        {/* Profile */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-3 rounded-lg px-2 py-1.5 hover:bg-gray-100"
          >
            <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-300">
              {user.avatar ? (
                <Image
                  src={user.avatar}
                  alt={user.name}
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-orange-500 text-sm font-medium text-white">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </div>
              )}
            </div>
            <div className="hidden text-left md:block">
              <div className="text-sm font-medium text-gray-900">
                {user.name}
              </div>
              <div className="text-xs text-gray-500">{user.role}</div>
            </div>
            <svg
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Profile Dropdown */}
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Account Settings
              </a>
              <hr className="my-1" />
              <a
                href="/sign-in"
                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

