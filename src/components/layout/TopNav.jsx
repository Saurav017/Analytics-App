import React from "react";
import {
  Squares2X2Icon,
  StarIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  BellIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";
import ThemeToggleButton from "../common/ThemeToggleButton";

const KeyHint = ({ children }) => (
  <span
    className="ml-1 px-1 py-0.5 rounded text-xs leading-none
               border border-gray-300 dark:border-[#3f3f46]
               text-gray-500 dark:text-[#a1a1aa]
               bg-gray-100 dark:bg-[#27272a]"
  >
    {children}
  </span>
);

const TopNav = () => {
  return (
    <header
      className="w-full border-b border-gray-200 dark:border-[#3f3f46] 
                 bg-white dark:bg-[#0f0f11]"
    >
      <div
        className="flex items-center gap-2 h-14 px-4
                   text-gray-700 dark:text-[#f4f4f5]"
      >
        {/* Left Section */}
        <div className="flex items-center gap-2 min-w-0">
          <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-[#27272a]">
            <Squares2X2Icon className="w-5 h-5" />
          </button>

          <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-[#27272a]">
            <StarIcon className="w-5 h-5" />
          </button>

          {/* Breadcrumbs */}
          <nav
            aria-label="breadcrumb"
            className="hidden sm:flex items-center space-x-2 ml-2 text-sm"
          >
            <span className="text-gray-500 dark:text-[#a1a1aa] font-medium">
              Dashboards
            </span>
            <span className="text-gray-400 dark:text-[#71717a]">/</span>
            <span className="text-black dark:text-[#f4f4f5] font-semibold">
              Default
            </span>
          </nav>
        </div>

        {/* Spacer */}
        <div className="flex-grow" />

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Search Bar */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500 dark:text-[#a1a1aa]">
              <MagnifyingGlassIcon className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="pl-7 pr-12 py-1.5 text-sm rounded-lg
                         bg-gray-100 dark:bg-[#1f1f23]
                         text-gray-700 dark:text-[#f4f4f5]
                         border border-gray-200 dark:border-[#3f3f46]
                         focus:outline-none focus:ring-2 focus:ring-[#3b82f6]
                         w-40 sm:w-56 md:w-72"
            />
            <span className="absolute inset-y-0 right-2 flex items-center">
              <KeyHint>⌘ /</KeyHint>
            </span>
          </div>

          {/* Theme Toggle */}
          <ThemeToggleButton />

          {/* Action Icons */}
          <button
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-[#27272a]"
            title="History"
          >
            <ClockIcon className="w-5 h-5" />
          </button>

          <button
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-[#27272a]"
            title="Notifications"
          >
            <BellIcon className="w-5 h-5" />
          </button>

          <button
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-[#27272a]"
            title="Panels"
          >
            <RectangleGroupIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
