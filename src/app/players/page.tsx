"use client";

import { useMemo, useState } from "react";

import { players } from "@/mocks/players";

import { PlayerComparison } from "@/features/players/components/player-comparison";
import { PlayerFilters } from "@/features/players/components/player-filters";
import { PlayersGrid } from "@/features/players/components/players-grid";

import { DashboardLayout } from "@/shared/layout/dashboard-layout";

import { Container } from "@/shared/ui/container";

import { Heading, MutedText } from "@/shared/ui/typography";

export default function PlayersPage() {
  const [search, setSearch] = useState("");

  const [position, setPosition] = useState("ALL");

  const [sort, setSort] = useState("rating");

  const filteredPlayers = useMemo(() => {
    const filtered = players.filter((player) => {
      const matchesSearch = player.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesPosition =
        position === "ALL" ? true : player.position === position;

      return matchesSearch && matchesPosition;
    });

    return filtered.sort((a, b) => {
      if (sort === "potential") {
        return b.potential - a.potential;
      }

      if (sort === "age") {
        return a.age - b.age;
      }

      return b.rating - a.rating;
    });
  }, [search, position, sort]);

  return (
    <DashboardLayout>
      <Container>
        <div className="space-y-8">
          <div>
            <Heading>Player Analytics</Heading>

            <MutedText className="mt-2">
              Football scouting and player performance overview.
            </MutedText>
          </div>

          <PlayerComparison />

          <PlayerFilters
            search={search}
            position={position}
            sort={sort}
            onSearchChange={setSearch}
            onPositionChange={setPosition}
            onSortChange={setSort}
          />

          <PlayersGrid players={filteredPlayers} />
        </div>
      </Container>
    </DashboardLayout>
  );
}
