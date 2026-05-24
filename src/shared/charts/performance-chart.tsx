"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ChartTooltip } from "@/shared/charts/chart-tooltip";

interface PerformanceChartProps {
  data: {
    month: string;
    xg: number;
  }[];
}

export function PerformanceChart({ data }: PerformanceChartProps) {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />

          <XAxis dataKey="month" stroke="#71717a" />

          <YAxis stroke="#71717a" />

          <Tooltip content={<ChartTooltip />} />

          <Line
            type="monotone"
            dataKey="xg"
            stroke="#22c55e"
            strokeWidth={3}
            dot={{
              r: 5,
            }}
            activeDot={{
              r: 8,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
