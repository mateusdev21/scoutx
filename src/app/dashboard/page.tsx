import { performanceData, recentMatches, topPlayers } from "@/mocks/analytics";

import { StatsCard } from "@/features/dashboard/components/stats-card";

import { StandingsTable } from "@/features/dashboard/components/standings-table";

import { PerformanceChart } from "@/shared/charts/performance-chart";

import { possessionData } from "@/mocks/analytics";

import { PerformanceBarChart } from "@/shared/charts/performance-bar-chart";
import { PossessionChart } from "@/shared/charts/possession-chart";

import { DashboardLayout } from "@/shared/layout/dashboard-layout";

import { Container } from "@/shared/ui/container";
import { DashboardCard } from "@/shared/ui/dashboard-card";

import { Heading, MutedText, Subheading } from "@/shared/ui/typography";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <Container>
        <div className="space-y-8">
          <div>
            <Heading>Dashboard</Heading>

            <MutedText className="mt-2">
              Modern football analytics overview.
            </MutedText>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <StatsCard title="Total Matches" value="124" />

            <StatsCard title="Win Rate" value="68%" />

            <StatsCard title="Average xG" value="2.4" />

            <StatsCard title="Pass Accuracy" value="91%" />
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            <DashboardCard className="xl:col-span-2">
              <div className="mb-6">
                <Subheading>Team Performance</Subheading>

                <MutedText className="mt-2">
                  xG progression over the season.
                </MutedText>
              </div>

              <PerformanceChart data={performanceData} />
            </DashboardCard>

            <DashboardCard>
              <div className="mb-6">
                <Subheading>Top Players</Subheading>

                <MutedText className="mt-2">
                  Highest rated players this season.
                </MutedText>
              </div>

              <div className="space-y-4">
                {topPlayers.map((player) => (
                  <div
                    key={player.id}
                    className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 p-4"
                  >
                    <div>
                      <h3 className="font-medium text-white">{player.name}</h3>

                      <p className="text-sm text-zinc-500">{player.position}</p>
                    </div>

                    <div className="rounded-lg bg-green-500 px-3 py-1 text-sm font-bold text-black">
                      {player.rating}
                    </div>
                  </div>
                ))}
              </div>
            </DashboardCard>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            <DashboardCard>
              <div className="mb-6">
                <Subheading>Ball Possession</Subheading>

                <MutedText className="mt-2">
                  Team possession dominance overview.
                </MutedText>
              </div>

              <PossessionChart data={possessionData} />
            </DashboardCard>

            <DashboardCard>
              <div className="mb-6">
                <Subheading>Monthly Possession</Subheading>

                <MutedText className="mt-2">
                  Ball control progression per month.
                </MutedText>
              </div>

              <PerformanceBarChart data={performanceData} />
            </DashboardCard>
          </div>

          <StandingsTable />

          <DashboardCard>
            <div className="mb-6">
              <Subheading>Recent Matches</Subheading>

              <MutedText className="mt-2">
                Latest club performance results.
              </MutedText>
            </div>

            <div className="space-y-4">
              {recentMatches.map((match) => (
                <div
                  key={match.id}
                  className="flex flex-col gap-4 rounded-xl border border-zinc-800 bg-zinc-950 p-4 lg:flex-row lg:items-center lg:justify-between"
                >
                  <div>
                    <h3 className="font-medium text-white">
                      {match.homeTeam}
                      {" vs "}
                      {match.awayTeam}
                    </h3>

                    <p className="mt-1 text-sm text-zinc-500">Full Time</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-lg font-bold text-white">
                      {match.score}
                    </div>

                    <div
                      className={`rounded-lg px-3 py-1 text-sm font-medium ${
                        match.status === "Win"
                          ? "bg-green-500 text-black"
                          : "bg-yellow-500 text-black"
                      }`}
                    >
                      {match.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>
      </Container>
    </DashboardLayout>
  );
}
