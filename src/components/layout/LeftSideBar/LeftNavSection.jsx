// components/layout/LeftNavSection.jsx
import React from "react";

const LeftNavSection = ({ label, children }) => (
  <div className="px-4 pt-4">
    <p className="text-xs font-medium text-gray-500 dark:text-[#71717a] tracking-wide uppercase">
      {label}
    </p>
    <div className="mt-2">{children}</div>
  </div>
);


export default LeftNavSection;
