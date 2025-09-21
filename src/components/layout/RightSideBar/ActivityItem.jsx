// src/components/sidebar/ActivityItem.jsx
import React from "react";

  const ActivityItem = ({ avatar, text, time }) => {
    return (
      <div className="flex items-start gap-3">
        <img
          src={avatar}
          alt="activity"
          className="w-8 h-8 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <p className="text-sm text-gray-800 dark:text-[#f4f4f5]">{text}</p>
          <span className="text-xs text-gray-500 dark:text-[#a1a1aa]">{time}</span>
        </div>
      </div>
    );
  };
  

export default ActivityItem;
