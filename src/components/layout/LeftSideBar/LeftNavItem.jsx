// components/layout/LeftNavItem.jsx
import React from "react";

const LeftNavItem = ({ icon, label, selected=false, onClick }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm
      ${
        selected
          ? "bg-gray-100 dark:bg-[#1f1f23] font-semibold text-black dark:text-[#f4f4f5]"
          : "text-gray-700 dark:text-[#a1a1aa] hover:bg-gray-100 dark:hover:bg-[#27272a]"
      }`}
  >
    {icon && <span className="w-5 h-5 text-gray-500 dark:text-[#71717a]">{icon}</span>}
    <span>{label}</span>
  </button>
);


export default LeftNavItem;
