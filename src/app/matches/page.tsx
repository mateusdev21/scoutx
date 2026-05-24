import { matches } from "@/mocks/matches";

import { DashboardLayout } from "@/shared/layout/dashboard-layout";

import { Container } from "@/shared/ui/container";
import { DashboardCard } from "@/shared/ui/dashboard-card";

import { Heading, MutedText, Subheading } from "@/shared/ui/typography";

export default function MatchesPage() {
  return (
    <DashboardLayout>
      <Container>
        <div className="space-y-8">
          <div>
            <Heading>Match Center</Heading>

            <MutedText className="mt-2">
              Match analytics and performance overview.
            </MutedText>
          </div>

          <div className="space-y-6">
            {matches.map((match) => (
              <DashboardCard key={match.id}>
                <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
                  <div>
                    <Subheading>
                      {match.homeTeam}
                      {" vs "}
                      {match.awayTeam}
                    </Subheading>

                    <MutedText className="mt-2">{match.date}</MutedText>
                  </div>

                  <div className="flex flex-wrap items-center gap-6">
                    <div className="rounded-xl bg-zinc-950 px-5 py-4">
                      <MutedText>Score</MutedText>

                      <p className="mt-2 text-xl font-bold text-white">
                        {match.score}
                      </p>
                    </div>

                    <div className="rounded-xl bg-zinc-950 px-5 py-4">
                      <MutedText>Possession</MutedText>

                      <p className="mt-2 text-xl font-bold text-green-500">
                        {match.possession}
                      </p>
                    </div>

                    <div className="rounded-xl bg-zinc-950 px-5 py-4">
                      <MutedText>xG</MutedText>

                      <p className="mt-2 text-xl font-bold text-white">
                        {match.xg}
                      </p>
                    </div>

                    <div
                      className={`rounded-xl px-5 py-4 text-sm font-semibold ${
                        match.status === "Finished"
                          ? "bg-green-500 text-black"
                          : "bg-yellow-500 text-black"
                      }`}
                    >
                      {match.status}
                    </div>
                  </div>
                </div>
              </DashboardCard>
            ))}
          </div>
        </div>
      </Container>
    </DashboardLayout>
  );
}
