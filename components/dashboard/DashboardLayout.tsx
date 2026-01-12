"use client";

import React from "react";
import { MobileMenuProvider, useMobileMenu } from "./MobileMenuContext";

interface DashboardLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  header: React.ReactNode;
  rightSidebar?: React.ReactNode;
}

function DashboardLayoutContent({
  children,
  sidebar,
  header,
  rightSidebar,
}: DashboardLayoutProps) {
  const { isOpen, close } = useMobileMenu();

  return (
    <div className="flex h-screen overflow-hidden bg-gray-06">
      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={close}
        />
      )}

      {/* Left Sidebar - Desktop */}
      <aside className="hidden w-64 shrink-0 border-r border-gray-200 bg-white lg:block">
        {sidebar}
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 transform border-r border-gray-200 bg-white transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebar}
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="border-b border-gray-200 bg-white">{header}</header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="container bg-gray-06 mx-auto px-4 py-6 lg:px-6">
            <div className="grid grid-cols-1 gap-6">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function DashboardLayout(props: DashboardLayoutProps) {
  return (
    <MobileMenuProvider>
      <DashboardLayoutContent {...props} />
    </MobileMenuProvider>
  );
}

