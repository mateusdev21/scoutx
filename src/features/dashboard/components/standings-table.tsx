import { standings } from "@/mocks/standings";

import { DashboardCard } from "@/shared/ui/dashboard-card";

import { MutedText, Subheading } from "@/shared/ui/typography";

export function StandingsTable() {
  return (
    <DashboardCard>
      <div className="mb-6">
        <Subheading>League Standings</Subheading>

        <MutedText className="mt-2">
          Current league performance overview.
        </MutedText>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-225 border-separate border-spacing-y-2">
          <thead>
            <tr className="text-left text-sm text-zinc-500">
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Team</th>
              <th className="px-4 py-3">P</th>
              <th className="px-4 py-3">W</th>
              <th className="px-4 py-3">D</th>
              <th className="px-4 py-3">L</th>
              <th className="px-4 py-3">GF</th>
              <th className="px-4 py-3">GA</th>
              <th className="px-4 py-3">Pts</th>
              <th className="px-4 py-3">Form</th>
            </tr>
          </thead>

          <tbody>
            {standings.map((team, index) => (
              <tr key={team.id} className="rounded-2xl bg-zinc-950">
                <td className="rounded-l-xl px-4 py-4 font-medium text-white">
                  {index + 1}
                </td>

                <td className="px-4 py-4 font-medium text-white">
                  {team.team}
                </td>

                <td className="px-4 py-4 text-zinc-300">{team.played}</td>

                <td className="px-4 py-4 text-zinc-300">{team.won}</td>

                <td className="px-4 py-4 text-zinc-300">{team.draw}</td>

                <td className="px-4 py-4 text-zinc-300">{team.lost}</td>

                <td className="px-4 py-4 text-zinc-300">{team.goals}</td>

                <td className="px-4 py-4 text-zinc-300">{team.conceded}</td>

                <td className="px-4 py-4 font-bold text-green-500">
                  {team.points}
                </td>

                <td className="rounded-r-xl px-4 py-4">
                  <div className="flex items-center gap-2">
                    {team.form.map((result, idx) => (
                      <div
                        key={idx}
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
                          result === "W"
                            ? "bg-green-500 text-black"
                            : result === "D"
                            ? "bg-yellow-500 text-black"
                            : "bg-red-500 text-white"
                        }`}
                      >
                        {result}
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardCard>
  );
}
