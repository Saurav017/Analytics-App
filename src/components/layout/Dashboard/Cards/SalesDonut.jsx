// components/dashboard/SalesDonut.jsx
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Direct", value: 300.56, color: "#6366f1" },     // indigo
  { name: "Affiliate", value: 135.18, color: "#22c55e" },  // green
  { name: "Sponsored", value: 154.02, color: "#8b5cf6" },  // violet
  { name: "E-mail", value: 48.96, color: "#38bdf8" },      // sky
];

const SalesDonut = () => {
  return (
    <div className="p-4 rounded-xl shadow bg-white dark:bg-[#1f1f23] h-full flex flex-col">
      <h3 className="text-lg font-semibold mb-4">Total Sales</h3>

      {/* Donut + Legend Side by Side */}
      <div className="flex items-center justify-center gap-6 flex-1">
        {/* Donut */}
        <ResponsiveContainer width={140} height={140}>
          <PieChart>
            <defs>
              {/* Add gradient for 3D illusion */}
              {data.map((d, i) => (
                <linearGradient
                  key={i}
                  id={`grad-${i}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="5%" stopColor={d.color} stopOpacity={0.9} />
                  <stop offset="95%" stopColor={d.color} stopOpacity={0.6} />
                </linearGradient>
              ))}
            </defs>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={65}
              innerRadius={40}
              dataKey="value"
              
            >
              {data.map((entry, i) => (
                <Cell
                  key={`cell-${i}`}
                  fill={`url(#grad-${i})`}
                  stroke="#111827"
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        </div>
        {/* Legend */}
        <div>
        <ul className="px-6 text-sm">
          {data.map((d, i) => (
            <li key={i} className="flex items-center justify-between gap-8">
              <span className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: d.color }}
                />
                {d.name}
              </span>
              <span className="font-medium">${d.value.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SalesDonut;
