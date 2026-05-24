import { notFound } from "next/navigation";

import { players } from "@/mocks/players";
import { playerRadarData } from "@/mocks/player-radar";

import { SavePlayerButton } from "@/features/players/components/save-player-button";

import { PlayerRadarChart } from "@/shared/charts/player-radar-chart";

import { DashboardLayout } from "@/shared/layout/dashboard-layout";

import { Container } from "@/shared/ui/container";
import { DashboardCard } from "@/shared/ui/dashboard-card";

import { Heading, MutedText, Subheading } from "@/shared/ui/typography";

interface PlayerDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PlayerDetailPage({
  params,
}: PlayerDetailPageProps) {
  const { id } = await params;

  const player = players.find((player) => player.id === Number(id));

  if (!player) {
    notFound();
  }

  return (
    <DashboardLayout>
      <Container>
        <div className="space-y-8">
          <div className="grid gap-6 xl:grid-cols-[320px_1fr]">
            <DashboardCard className="space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Heading className="text-3xl">{player.name}</Heading>

                  <MutedText className="mt-2">{player.club}</MutedText>
                </div>

                <div className="rounded-2xl bg-green-500 px-4 py-3 text-xl font-bold text-black">
                  {player.rating}
                </div>
              </div>

              <SavePlayerButton player={player} />

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-zinc-950 p-4">
                  <MutedText>Position</MutedText>

                  <p className="mt-2 font-semibold text-white">
                    {player.position}
                  </p>
                </div>

                <div className="rounded-xl bg-zinc-950 p-4">
                  <MutedText>Age</MutedText>

                  <p className="mt-2 font-semibold text-white">{player.age}</p>
                </div>

                <div className="rounded-xl bg-zinc-950 p-4">
                  <MutedText>Potential</MutedText>

                  <p className="mt-2 font-semibold text-green-500">
                    {player.potential}
                  </p>
                </div>

                <div className="rounded-xl bg-zinc-950 p-4">
                  <MutedText>Market Value</MutedText>

                  <p className="mt-2 font-semibold text-white">
                    {player.marketValue}
                  </p>
                </div>

                <div className="rounded-xl bg-zinc-950 p-4">
                  <MutedText>Goals</MutedText>

                  <p className="mt-2 font-semibold text-white">
                    {player.goals}
                  </p>
                </div>

                <div className="rounded-xl bg-zinc-950 p-4">
                  <MutedText>Assists</MutedText>

                  <p className="mt-2 font-semibold text-white">
                    {player.assists}
                  </p>
                </div>
              </div>

              <DashboardCard className="bg-zinc-950">
                <Subheading>Scout Report</Subheading>

                <MutedText className="mt-4 leading-7">
                  Highly technical player with strong positional awareness,
                  excellent movement in transition, and elite attacking
                  contribution in high-pressure situations. Demonstrates strong
                  tactical intelligence and progressive offensive output.
                </MutedText>
              </DashboardCard>
            </DashboardCard>

            <div className="space-y-6">
              <DashboardCard>
                <div className="mb-6">
                  <Subheading>Performance Radar</Subheading>

                  <MutedText className="mt-2">
                    Technical and tactical attribute analysis.
                  </MutedText>
                </div>

                <PlayerRadarChart data={playerRadarData} />
              </DashboardCard>

              <div className="grid gap-6 md:grid-cols-3">
                <DashboardCard>
                  <MutedText>Expected Goals</MutedText>

                  <h2 className="mt-4 text-4xl font-bold text-green-500">
                    {player.xg}
                  </h2>
                </DashboardCard>

                <DashboardCard>
                  <MutedText>Goal Contribution</MutedText>

                  <h2 className="mt-4 text-4xl font-bold text-white">
                    {player.goals + player.assists}
                  </h2>
                </DashboardCard>

                <DashboardCard>
                  <MutedText>Potential Rating</MutedText>

                  <h2 className="mt-4 text-4xl font-bold text-blue-500">
                    {player.potential}
                  </h2>
                </DashboardCard>
              </div>

              <DashboardCard>
                <div className="mb-6">
                  <Subheading>Tactical Role</Subheading>

                  <MutedText className="mt-2">
                    Preferred tactical deployment and responsibilities.
                  </MutedText>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl bg-zinc-950 p-5">
                    <h3 className="font-semibold text-white">Primary Role</h3>

                    <p className="mt-2 text-zinc-400">Advanced Playmaker</p>
                  </div>

                  <div className="rounded-xl bg-zinc-950 p-5">
                    <h3 className="font-semibold text-white">Play Style</h3>

                    <p className="mt-2 text-zinc-400">Progressive Attacker</p>
                  </div>

                  <div className="rounded-xl bg-zinc-950 p-5">
                    <h3 className="font-semibold text-white">Pressing</h3>

                    <p className="mt-2 text-zinc-400">High Intensity</p>
                  </div>

                  <div className="rounded-xl bg-zinc-950 p-5">
                    <h3 className="font-semibold text-white">Tactical Fit</h3>

                    <p className="mt-2 text-zinc-400">Possession System</p>
                  </div>
                </div>
              </DashboardCard>
            </div>
          </div>
        </div>
      </Container>
    </DashboardLayout>
  );
}
