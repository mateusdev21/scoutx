"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { ChartTooltip } from "@/shared/charts/chart-tooltip";

interface PerformanceBarChartProps {
  data: {
    month: string;
    possession: number;
  }[];
}

export function PerformanceBarChart({ data }: PerformanceBarChartProps) {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />

          <XAxis dataKey="month" stroke="#71717a" />

          <YAxis stroke="#71717a" />

          <Tooltip content={<ChartTooltip />} />

          <Bar dataKey="possession" fill="#22c55e" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
