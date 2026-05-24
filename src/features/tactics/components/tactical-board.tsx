"use client";

import { useMemo, useState } from "react";

import { formations } from "../data/formation";

import { FootballPitch } from "@/features/tactics/components/football-pitch";
import { FormationSelector } from "@/features/tactics/components/formation-selector";

import { DashboardCard } from "@/shared/ui/dashboard-card";

import { MutedText, Subheading } from "@/shared/ui/typography";

export function TacticalBoard() {
  const [selectedFormation, setSelectedFormation] = useState("4-3-3");

  const currentFormation = useMemo(() => {
    return formations.find((formation) => formation.name === selectedFormation);
  }, [selectedFormation]);

  return (
    <DashboardCard className="space-y-8">
      <div className="space-y-2">
        <Subheading>Tactical Board</Subheading>

        <MutedText>Interactive formation and tactical visualization.</MutedText>
      </div>

      <FormationSelector
        formations={formations.map((formation) => formation.name)}
        selectedFormation={selectedFormation}
        onSelect={setSelectedFormation}
      />

      {currentFormation && <FootballPitch players={currentFormation.players} />}
    </DashboardCard>
  );
}
