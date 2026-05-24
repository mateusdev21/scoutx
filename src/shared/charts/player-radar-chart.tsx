"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { ChartTooltip } from "@/shared/charts/chart-tooltip";

interface PlayerRadarChartProps {
  data: {
    attribute: string;
    playerA: number;
    playerB: number;
  }[];
}

export function PlayerRadarChart({ data }: PlayerRadarChartProps) {
  return (
    <div className="h-125 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid stroke="#3f3f46" />

          <PolarAngleAxis
            dataKey="attribute"
            tick={{
              fill: "#a1a1aa",
              fontSize: 12,
            }}
          />

          <Tooltip content={<ChartTooltip />} />

          <Radar
            name="Ethan Walker"
            dataKey="playerA"
            stroke="#22c55e"
            fill="#22c55e"
            fillOpacity={0.4}
          />

          <Radar
            name="Lucas Bennett"
            dataKey="playerB"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.3}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
