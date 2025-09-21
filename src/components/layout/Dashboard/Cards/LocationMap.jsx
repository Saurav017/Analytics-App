// components/dashboard/LocationMap.jsx
import React from "react";
import WorldMapSVG from "../../../utils/WordMapSVG";

const data = [
  { city: "New York", value: 72 },
  { city: "San Francisco", value: 39 },
  { city: "Sydney", value: 25 },
  { city: "Singapore", value: 61 },
];

const maxValue = Math.max(...data.map((d) => d.value));

const LocationMap = () => {
  return (
    <div className="p-5 rounded-xl shadow-sm bg-white dark:bg-[#1f1f23]">
      {/* Title */}
      <h3 className="text-base font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Revenue by Location
      </h3>

      {/* Map preview */}
      <div className="flex items-center justify-center mb-4 rounded-lg h-24 overflow-hidden">
        <WorldMapSVG />
      </div>

      {/* Location list with progress bars under text */}
      <div className="space-y-4">
        {data.map((loc, i) => {
          const percent = (loc.value / maxValue) * 100;
          return (
            <div key={i}>
              {/* City + Value */}
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-700 dark:text-gray-300">
                  {loc.city}
                </span>
                <span className="font-medium text-gray-900 dark:text-gray-100">
                  {loc.value}K
                </span>
              </div>

              {/* Progress bar (below row) */}
              <div className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 dark:bg-blue-400 rounded-full"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LocationMap;
