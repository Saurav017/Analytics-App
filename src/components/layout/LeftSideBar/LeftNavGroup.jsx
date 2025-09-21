// components/layout/LeftNavGroup.jsx
import React, { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const LeftNavGroup = ({ icon, label, defaultOpen = true, children }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm 
                   text-gray-700 dark:text-[#f4f4f5] 
                   hover:bg-gray-100 dark:hover:bg-[#27272a]"
      >
        <div className="flex items-center gap-3">
          {icon && <span className="w-5 h-5 text-gray-500 dark:text-[#a1a1aa]">{icon}</span>}
          <span>{label}</span>
        </div>
        <ChevronRightIcon
          className={`w-4 h-4 text-gray-400 dark:text-[#71717a] transition-transform duration-200 ${
            open ? "rotate-90" : ""
          }`}
        />
      </button>

      {open && <div className="pl-9 pr-2 py-1 space-y-1">{children}</div>}
    </div>
  );
};


export default LeftNavGroup;
