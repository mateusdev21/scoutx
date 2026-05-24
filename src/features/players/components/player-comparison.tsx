import { playerRadarData } from "@/mocks/player-radar";

import { PlayerRadarChart } from "@/shared/charts/player-radar-chart";

import { DashboardCard } from "@/shared/ui/dashboard-card";

import { MutedText, Subheading } from "@/shared/ui/typography";

export function PlayerComparison() {
  return (
    <DashboardCard className="space-y-8">
      <div>
        <Subheading>Player Comparison</Subheading>

        <MutedText className="mt-2">
          Advanced football scouting comparison radar.
        </MutedText>
      </div>

      <div className="grid gap-8 xl:grid-cols-[240px_1fr_240px]">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-white">Ethan Walker</h3>

            <div className="h-4 w-4 rounded-full bg-green-500" />
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <MutedText>Position</MutedText>

              <p className="mt-1 font-medium text-white">ST</p>
            </div>

            <div>
              <MutedText>Age</MutedText>

              <p className="mt-1 font-medium text-white">24</p>
            </div>

            <div>
              <MutedText>Goals</MutedText>

              <p className="mt-1 font-medium text-white">24</p>
            </div>
          </div>
        </div>

        <PlayerRadarChart data={playerRadarData} />

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-white">Lucas Bennett</h3>

            <div className="h-4 w-4 rounded-full bg-blue-500" />
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <MutedText>Position</MutedText>

              <p className="mt-1 font-medium text-white">CM</p>
            </div>

            <div>
              <MutedText>Age</MutedText>

              <p className="mt-1 font-medium text-white">27</p>
            </div>

            <div>
              <MutedText>Assists</MutedText>

              <p className="mt-1 font-medium text-white">18</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}
