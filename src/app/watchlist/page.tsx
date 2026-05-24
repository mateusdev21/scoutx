"use client";

import { useWatchlistStore } from "@/shared/store/watchlist-store";

import { PlayersGrid } from "@/features/players/components/players-grid";

import { FadeIn } from "@/shared/animations/fade-in";

import { DashboardLayout } from "@/shared/layout/dashboard-layout";

import { Container } from "@/shared/ui/container";
import { DashboardCard } from "@/shared/ui/dashboard-card";

import { Heading, MutedText, Subheading } from "@/shared/ui/typography";

export default function WatchlistPage() {
  const players = useWatchlistStore((state) => state.players);

  return (
    <DashboardLayout>
      <Container>
        <FadeIn>
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <Heading>Scouting Watchlist</Heading>

                <MutedText className="mt-2">
                  Saved player targets and scouting shortlist.
                </MutedText>
              </div>

              <div className="rounded-2xl bg-green-500 px-5 py-4 text-lg font-bold text-black">
                {players.length} Saved
              </div>
            </div>

            {players.length === 0 ? (
              <DashboardCard className="py-20 text-center">
                <Subheading>No Players Saved</Subheading>

                <MutedText className="mt-3">
                  Save players from scouting pages to build your recruitment
                  shortlist.
                </MutedText>
              </DashboardCard>
            ) : (
              <PlayersGrid players={players} />
            )}
          </div>
        </FadeIn>
      </Container>
    </DashboardLayout>
  );
}
