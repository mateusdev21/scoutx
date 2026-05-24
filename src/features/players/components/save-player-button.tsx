"use client";

import { BookmarkCheck, BookmarkPlus } from "lucide-react";

import { useWatchlistStore } from "@/shared/store/watchlist-store";

interface SavePlayerButtonProps {
  player: {
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
  };
}

export function SavePlayerButton({ player }: SavePlayerButtonProps) {
  const { addPlayer, removePlayer, isSaved } = useWatchlistStore();

  const saved = isSaved(player.id);

  function handleToggleSave() {
    if (saved) {
      removePlayer(player.id);
      return;
    }

    addPlayer(player);
  }

  return (
    <button
      onClick={handleToggleSave}
      className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
        saved
          ? "bg-green-500 text-black"
          : "bg-zinc-950 text-white hover:bg-zinc-800"
      }`}
    >
      {saved ? <BookmarkCheck size={18} /> : <BookmarkPlus size={18} />}

      {saved ? "Saved" : "Save Player"}
    </button>
  );
}
