// components/dashboard/RevenueChart.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", current: 12000000, previous: 11000000 },
  { month: "Feb", current: 15000000, previous: 12500000 },
  { month: "Mar", current: 17000000, previous: 16000000 },
  { month: "Apr", current: 21000000, previous: 20000000 },
  { month: "May", current: 24000000, previous: 23000000 },
  { month: "Jun", current: 28000000, previous: 25000000 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-[#1f1f23] px-3 py-2 rounded-lg shadow border border-gray-200 dark:border-gray-700">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</p>
        <p className="text-xs text-blue-600">
          Current: {payload[0].value.toLocaleString()}
        </p>
        <p className="text-xs text-gray-500">
          Previous: {payload[1].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const RevenueChart = () => {
  return (
    <div className="p-5 rounded-xl shadow-sm bg-white dark:bg-[#1f1f23]">
      {/* Header + Legend */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
          Revenue
        </h3>
        <div className="flex gap-4 text-sm">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            <span className="text-gray-600 dark:text-gray-400">
              Current Week <span className="font-semibold text-gray-900 dark:text-gray-100">
                $58,211
              </span>
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-purple-300"></span>
            <span className="text-gray-600 dark:text-gray-400">
              Previous Week <span className="font-semibold text-gray-900 dark:text-gray-100">
                $68,768
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.6} />
          <XAxis dataKey="month" stroke="#6B7280" />
          <YAxis stroke="#6B7280" tickFormatter={(val) => `${val / 1000000}M`} />
          <Tooltip content={<CustomTooltip />} />

          {/* Gradient definitions */}
          <defs>
            <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#60A5FA" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#60A5FA" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPrevious" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#C084FC" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#C084FC" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Current line */}
          <Line
            type="monotone"
            dataKey="current"
            stroke="#60A5FA"
            strokeWidth={2}
            dot={false}
            fillOpacity={1}
            fill="url(#colorCurrent)"
          />

          {/* Previous line (dashed after April for projection feel) */}
          <Line
            type="monotone"
            dataKey="previous"
            stroke="#C084FC"
            strokeWidth={2}
            dot={false}
            strokeDasharray="5 5"
            fillOpacity={1}
            fill="url(#colorPrevious)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
