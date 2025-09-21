// src/components/sidebar/SidebarSection.jsx
import React from "react";

const SidebarSection = ({ title, children }) => {
  return (
    <div className="mb-6">
      <h2 className="text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
};

export default SidebarSection;
