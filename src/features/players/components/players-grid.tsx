import { PlayerCard } from "@/features/players/components/player-card";

import { HoverCard } from "@/shared/animations/hover-card";
import { StaggerContainer } from "@/shared/animations/stagger-container";
import { StaggerItem } from "@/shared/animations/stagger-item";

interface PlayersGridProps {
  players: {
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
  }[];
}

export function PlayersGrid({ players }: PlayersGridProps) {
  return (
    <StaggerContainer>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {players.map((player) => (
          <StaggerItem key={player.id}>
            <HoverCard>
              <PlayerCard
                id={player.id}
                name={player.name}
                age={player.age}
                position={player.position}
                nationality={player.nationality}
                club={player.club}
                rating={player.rating}
                potential={player.potential}
                marketValue={player.marketValue}
                goals={player.goals}
                assists={player.assists}
                xg={player.xg}
              />
            </HoverCard>
          </StaggerItem>
        ))}
      </div>
    </StaggerContainer>
  );
}
