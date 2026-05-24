import { cn } from "@/shared/lib/utils";

interface DashboardCardProps {
  children: React.ReactNode;
  className?: string;
}

export function DashboardCard({ children, className }: DashboardCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-zinc-800 bg-zinc-900/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700",
        className
      )}
    >
      {children}
    </div>
  );
}
