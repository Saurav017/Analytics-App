// components/dashboard/ProjectionChart.jsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", actual: 20000000, projection: 25000000 },
  { month: "Feb", actual: 22000000, projection: 24000000 },
  { month: "Mar", actual: 24000000, projection: 26000000 },
  { month: "Apr", actual: 26000000, projection: 27000000 },
  { month: "May", actual: 28000000, projection: 29000000 },
  { month: "Jun", actual: 30000000, projection: 31000000 },
];

// Preprocess data → add "projectionDiff"
const processedData = data.map((d) => ({
  ...d,
  projectionDiff: d.projection - d.actual,
}));

// Format large numbers (20,000,000 → 20M)
const formatYAxis = (tick) => `${tick / 1000000}M`;

const ProjectionChart = () => {
  return (
    <div className="p-4 rounded-xl shadow bg-white dark:bg-[#1f1f23] ">
      <h3 className="text-lg font-semibold mb-4">Projections vs Actuals</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={processedData} barSize={24}>
          {/* Light horizontal grid only */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6b7280", fontSize: 12 }}
          />

          <YAxis
            tickFormatter={formatYAxis}
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6b7280", fontSize: 12 }}
          />

          <Tooltip
            formatter={(value, name) => {
              if (name === "projectionDiff") return [`+${(value / 1000000).toFixed(1)}M`, "Projection"];
              if (name === "actual") return [`${(value / 1000000).toFixed(1)}M`, "Actual"];
              return value;
            }}
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "0.5rem",
              fontSize: "0.85rem",
            }}
          />

          {/* Stacked bars → Actual + ProjectionDiff */}
          <Bar dataKey="actual" stackId="a" fill="#60a5fa"  />
          <Bar dataKey="projectionDiff" stackId="a" fill="#bfdbfe"  />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectionChart;
