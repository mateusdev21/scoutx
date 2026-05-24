import { DashboardLayout } from "@/shared/layout/dashboard-layout";

import { Container } from "@/shared/ui/container";
import { DashboardCard } from "@/shared/ui/dashboard-card";

import { Heading, MutedText, Subheading } from "@/shared/ui/typography";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <Container>
        <div className="space-y-8">
          <div>
            <Heading>Settings</Heading>

            <MutedText className="mt-2">
              Manage platform preferences and analytics configuration.
            </MutedText>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            <DashboardCard className="space-y-6">
              <div>
                <Subheading>Appearance</Subheading>

                <MutedText className="mt-2">
                  Customize interface preferences.
                </MutedText>
              </div>

              <div className="space-y-4">
                <button className="w-full rounded-xl bg-green-500 px-5 py-4 font-semibold text-black transition-all hover:opacity-90">
                  Dark Mode Enabled
                </button>

                <button className="w-full rounded-xl bg-zinc-950 px-5 py-4 font-semibold text-white transition-all hover:bg-zinc-800">
                  System Theme
                </button>
              </div>
            </DashboardCard>

            <DashboardCard className="space-y-6">
              <div>
                <Subheading>Notifications</Subheading>

                <MutedText className="mt-2">
                  Configure scouting alerts and analytics updates.
                </MutedText>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between rounded-xl bg-zinc-950 p-5">
                  <div>
                    <p className="font-medium text-white">Match Updates</p>

                    <MutedText className="mt-1">
                      Receive live match analytics.
                    </MutedText>
                  </div>

                  <div className="h-6 w-12 rounded-full bg-green-500 p-1">
                    <div className="ml-auto h-4 w-4 rounded-full bg-black" />
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-zinc-950 p-5">
                  <div>
                    <p className="font-medium text-white">Scouting Reports</p>

                    <MutedText className="mt-1">
                      Receive player recommendation updates.
                    </MutedText>
                  </div>

                  <div className="h-6 w-12 rounded-full bg-green-500 p-1">
                    <div className="ml-auto h-4 w-4 rounded-full bg-black" />
                  </div>
                </div>
              </div>
            </DashboardCard>
          </div>
        </div>
      </Container>
    </DashboardLayout>
  );
}
