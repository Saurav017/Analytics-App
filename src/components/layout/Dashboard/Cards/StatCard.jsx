// components/dashboard/StatCard.jsx
import React from "react";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";

const StatCard = ({ title, value, change, highlight = false }) => {
  return (
    <div
      className={`px-5 py-8  rounded-xl shadow-sm 
        flex flex-col justify-between
        ${highlight ? "bg-blue-50 text-black dark:bg-gray-100" : "bg-white dark:bg-[#1f1f23]"}
      `}
      
    >
      {/* Title */}
      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
        {title}
      </p>
      {/* Value + Change */}
      <div className="flex items-center justify-between mt-3">
        <h2 className={`text-3xl font-bold text-gray-900 pr-2  ${highlight ? "dark:text-black  ": "dark:text-gray-100"} `}>
          {value}
        </h2>
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          {change}
          <ArrowTrendingUpIcon className="w-4 h-4 ml-1" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
