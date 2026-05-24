import { TacticalBoard } from "@/features/tactics/components/tactical-board";

import { DashboardLayout } from "@/shared/layout/dashboard-layout";

import { Container } from "@/shared/ui/container";

import { Heading, MutedText } from "@/shared/ui/typography";

export default function TacticsPage() {
  return (
    <DashboardLayout>
      <Container>
        <div className="space-y-8">
          <div>
            <Heading>Tactical Analysis</Heading>

            <MutedText className="mt-2">
              Football formation and tactical intelligence visualization.
            </MutedText>
          </div>

          <TacticalBoard />
        </div>
      </Container>
    </DashboardLayout>
  );
}
