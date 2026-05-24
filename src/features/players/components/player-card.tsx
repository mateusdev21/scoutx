import Link from "next/link";

import { DashboardCard } from "@/shared/ui/dashboard-card";

import { MutedText, Subheading } from "@/shared/ui/typography";

interface PlayerCardProps {
  id: number;
  name: string;
  age: number;
  position: string;
  nationality: string;
  club: string;
  rating: number;
  potential: number;
  marketValue: string;
  goals: number;
  assists: number;
  xg: number;
}

export function PlayerCard({
  id,
  name,
  age,
  position,
  nationality,
  club,
  rating,
  potential,
  marketValue,
  goals,
  assists,
  xg,
}: PlayerCardProps) {
  return (
    <Link href={`/players/${id}`}>
      <DashboardCard className="space-y-6 transition-all duration-200 hover:-translate-y-1 hover:border-green-500">
        <div className="flex items-start justify-between">
          <div>
            <Subheading className="text-lg">{name}</Subheading>

            <MutedText className="mt-1">
              {club} • {nationality}
            </MutedText>
          </div>

          <div className="rounded-xl bg-green-500 px-3 py-2 text-sm font-bold text-black">
            {rating}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-zinc-950 p-4">
            <MutedText>Position</MutedText>

            <p className="mt-2 font-semibold text-white">{position}</p>
          </div>

          <div className="rounded-xl bg-zinc-950 p-4">
            <MutedText>Age</MutedText>

            <p className="mt-2 font-semibold text-white">{age}</p>
          </div>

          <div className="rounded-xl bg-zinc-950 p-4">
            <MutedText>Potential</MutedText>

            <p className="mt-2 font-semibold text-green-500">{potential}</p>
          </div>

          <div className="rounded-xl bg-zinc-950 p-4">
            <MutedText>Market Value</MutedText>

            <p className="mt-2 font-semibold text-white">{marketValue}</p>
          </div>

          <div className="rounded-xl bg-zinc-950 p-4">
            <MutedText>Goals</MutedText>

            <p className="mt-2 font-semibold text-white">{goals}</p>
          </div>

          <div className="rounded-xl bg-zinc-950 p-4">
            <MutedText>Assists</MutedText>

            <p className="mt-2 font-semibold text-white">{assists}</p>
          </div>
        </div>

        <div className="rounded-xl bg-zinc-950 p-4">
          <MutedText>xG</MutedText>

          <p className="mt-2 text-2xl font-bold text-green-500">{xg}</p>
        </div>
      </DashboardCard>
    </Link>
  );
}
