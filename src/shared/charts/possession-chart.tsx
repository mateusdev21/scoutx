"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import { ChartTooltip } from "@/shared/charts/chart-tooltip";

const COLORS = ["#22c55e", "#3f3f46"];

interface PossessionChartProps {
  data: {
    name: string;
    value: number;
  }[];
}

export function PossessionChart({ data }: PossessionChartProps) {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={80}
            outerRadius={110}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip content={<ChartTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
