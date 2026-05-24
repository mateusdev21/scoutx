"use client";

import { create } from "zustand";

interface WatchlistPlayer {
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

interface WatchlistStore {
    players: WatchlistPlayer[];

    addPlayer: (
        player: WatchlistPlayer
    ) => void;

    removePlayer: (
        id: number
    ) => void;

    isSaved: (
        id: number
    ) => boolean;
}

export const useWatchlistStore =
    create<WatchlistStore>(
        (set, get) => ({
            players: [],

            addPlayer: (player) => {
                const exists =
                    get().players.some(
                        (savedPlayer) =>
                            savedPlayer.id === player.id
                    );

                if (exists) {
                    return;
                }

                set((state) => ({
                    players: [
                        ...state.players,
                        player,
                    ],
                }));
            },

            removePlayer: (id) => {
                set((state) => ({
                    players:
                        state.players.filter(
                            (player) =>
                                player.id !== id
                        ),
                }));
            },

            isSaved: (id) => {
                return get().players.some(
                    (player) =>
                        player.id === id
                );
            },
        })
    );