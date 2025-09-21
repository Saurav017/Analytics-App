// src/components/sidebar/NotificationItem.jsx
import React from "react";

const NotificationItem = ({ icon, text, time }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-[#1f1f23]">
        {icon}
      </div>
      <div className="flex flex-col">
        <p className="text-sm text-gray-800 dark:text-[#f4f4f5]">{text}</p>
        <span className="text-xs text-gray-500 dark:text-[#a1a1aa]">{time}</span>
      </div>
    </div>
  );
};


export default NotificationItem;
