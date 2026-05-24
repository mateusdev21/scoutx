import { StandingsTable } from "@/features/dashboard/components/standings-table";

import { DashboardLayout } from "@/shared/layout/dashboard-layout";

import { Container } from "@/shared/ui/container";

import { Heading, MutedText } from "@/shared/ui/typography";

export default function StandingsPage() {
  return (
    <DashboardLayout>
      <Container>
        <div className="space-y-8">
          <div>
            <Heading>League Standings</Heading>

            <MutedText className="mt-2">
              Current competition rankings and form analysis.
            </MutedText>
          </div>

          <StandingsTable />
        </div>
      </Container>
    </DashboardLayout>
  );
}
