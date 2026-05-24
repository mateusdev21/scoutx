import { TacticalPlayer } from "../data/formation";

import { PlayerNode } from "@/features/tactics/components/player-node";

interface FootballPitchProps {
  players: TacticalPlayer[];
}

export function FootballPitch({ players }: FootballPitchProps) {
  return (
    <div className="relative h-225 overflow-hidden rounded-4xl border border-zinc-800 bg-linear-to-b from-green-700 to-green-900">
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 14 }).map((_, index) => (
          <div key={index} className="h-17.5 border-b border-white" />
        ))}
      </div>

      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/50" />

      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/50" />

      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />

      <div className="absolute left-1/2 top-0 h-32 w-[320px] -translate-x-1/2 border-2 border-t-0 border-white/50" />

      <div className="absolute bottom-0 left-1/2 h-32 w-[320px] -translate-x-1/2 border-2 border-b-0 border-white/50" />

      <div className="absolute left-1/2 top-0 h-14 w-28 -translate-x-1/2 border-2 border-t-0 border-white/50" />

      <div className="absolute bottom-0 left-1/2 h-14 w-28 -translate-x-1/2 border-2 border-b-0 border-white/50" />

      {players.map((player) => (
        <PlayerNode
          key={player.id}
          name={player.name}
          position={player.position}
          x={player.x}
          y={player.y}
        />
      ))}
    </div>
  );
}
