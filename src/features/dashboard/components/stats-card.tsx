import { DashboardCard } from "@/shared/ui/dashboard-card";
import { MutedText } from "@/shared/ui/typography";

interface StatsCardProps {
  title: string;
  value: string;
}

export function StatsCard({ title, value }: StatsCardProps) {
  return (
    <DashboardCard>
      <MutedText>{title}</MutedText>

      <h2 className="mt-3 text-3xl font-bold text-white">{value}</h2>
    </DashboardCard>
  );
}
