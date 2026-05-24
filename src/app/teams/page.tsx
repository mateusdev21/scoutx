import { teams } from "@/mocks/teams";

import { DashboardLayout } from "@/shared/layout/dashboard-layout";

import { Container } from "@/shared/ui/container";
import { DashboardCard } from "@/shared/ui/dashboard-card";

import { Heading, MutedText, Subheading } from "@/shared/ui/typography";

export default function TeamsPage() {
  return (
    <DashboardLayout>
      <Container>
        <div className="space-y-8">
          <div>
            <Heading>Teams Analytics</Heading>

            <MutedText className="mt-2">
              Club performance and tactical overview.
            </MutedText>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {teams.map((team) => (
              <DashboardCard key={team.id} className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <Subheading>{team.name}</Subheading>

                    <MutedText className="mt-2">{team.league}</MutedText>
                  </div>

                  <div className="rounded-xl bg-green-500 px-4 py-2 text-sm font-bold text-black">
                    {team.rating}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl bg-zinc-950 p-4">
                    <MutedText>Stadium</MutedText>

                    <p className="mt-2 font-semibold text-white">
                      {team.stadium}
                    </p>
                  </div>

                  <div className="rounded-xl bg-zinc-950 p-4">
                    <MutedText>Manager</MutedText>

                    <p className="mt-2 font-semibold text-white">
                      {team.manager}
                    </p>
                  </div>

                  <div className="rounded-xl bg-zinc-950 p-4">
                    <MutedText>Possession</MutedText>

                    <p className="mt-2 font-semibold text-green-500">
                      {team.possession}%
                    </p>
                  </div>

                  <div className="rounded-xl bg-zinc-950 p-4">
                    <MutedText>Goals</MutedText>

                    <p className="mt-2 font-semibold text-white">
                      {team.goals}
                    </p>
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
