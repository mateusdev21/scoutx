export interface TacticalPlayer {
    id: number;
    name: string;
    position: string;
    x: number;
    y: number;
}

export interface Formation {
    name: string;
    players: TacticalPlayer[];
}

export const formations: Formation[] = [
    {
        name: "4-3-3",

        players: [
            {
                id: 1,
                name: "Goalkeeper",
                position: "GK",
                x: 50,
                y: 92,
            },

            {
                id: 2,
                name: "Left Back",
                position: "LB",
                x: 15,
                y: 75,
            },

            {
                id: 3,
                name: "Center Back",
                position: "CB",
                x: 38,
                y: 76,
            },

            {
                id: 4,
                name: "Center Back",
                position: "CB",
                x: 62,
                y: 76,
            },

            {
                id: 5,
                name: "Right Back",
                position: "RB",
                x: 85,
                y: 75,
            },

            {
                id: 6,
                name: "Midfielder",
                position: "CM",
                x: 25,
                y: 52,
            },

            {
                id: 7,
                name: "Midfielder",
                position: "CM",
                x: 50,
                y: 48,
            },

            {
                id: 8,
                name: "Midfielder",
                position: "CM",
                x: 75,
                y: 52,
            },

            {
                id: 9,
                name: "Left Wing",
                position: "LW",
                x: 20,
                y: 25,
            },

            {
                id: 10,
                name: "Striker",
                position: "ST",
                x: 50,
                y: 18,
            },

            {
                id: 11,
                name: "Right Wing",
                position: "RW",
                x: 80,
                y: 25,
            },
        ],
    },

    {
        name: "4-2-3-1",

        players: [
            {
                id: 1,
                name: "Goalkeeper",
                position: "GK",
                x: 50,
                y: 92,
            },

            {
                id: 2,
                name: "Left Back",
                position: "LB",
                x: 15,
                y: 75,
            },

            {
                id: 3,
                name: "Center Back",
                position: "CB",
                x: 38,
                y: 76,
            },

            {
                id: 4,
                name: "Center Back",
                position: "CB",
                x: 62,
                y: 76,
            },

            {
                id: 5,
                name: "Right Back",
                position: "RB",
                x: 85,
                y: 75,
            },

            {
                id: 6,
                name: "Defensive Midfielder",
                position: "CDM",
                x: 38,
                y: 58,
            },

            {
                id: 7,
                name: "Defensive Midfielder",
                position: "CDM",
                x: 62,
                y: 58,
            },

            {
                id: 8,
                name: "Left Wing",
                position: "LW",
                x: 20,
                y: 36,
            },

            {
                id: 9,
                name: "Attacking Midfielder",
                position: "CAM",
                x: 50,
                y: 40,
            },

            {
                id: 10,
                name: "Right Wing",
                position: "RW",
                x: 80,
                y: 36,
            },

            {
                id: 11,
                name: "Striker",
                position: "ST",
                x: 50,
                y: 18,
            },
        ],
    },
];