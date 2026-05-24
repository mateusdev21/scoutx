interface ChartTooltipProps {
  active?: boolean;
  payload?: {
    value: number;
    name: string;
  }[];
  label?: string;
}

export function ChartTooltip({ active, payload, label }: ChartTooltipProps) {
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 shadow-xl">
      {label && <p className="mb-2 text-sm font-medium text-white">{label}</p>}

      {payload.map((item, index) => (
        <div key={index} className="flex items-center justify-between gap-6">
          <span className="text-sm text-zinc-400">{item.name}</span>

          <span className="text-sm font-bold text-green-500">{item.value}</span>
        </div>
      ))}
    </div>
  );
}
