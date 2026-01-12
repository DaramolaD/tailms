"use client";

import { useState } from "react";

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  onTabChange?: (tabId: string) => void;
}

export default function Tabs({ tabs, defaultTab, onTabChange }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  return (
    <div className="">
      <div className="w-fit flex gap-3 bg-white rounded-[40px] p-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`relative px-4 py-2 text-sm font-medium rounded-[30px] transition-all duration-300 ease-in-out ${
              activeTab === tab.id
                ? "font-bold bg-orange-500 text-white"
                : "text-gray-03 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

