import {
    Bookmark,
    ClipboardList,
    LayoutDashboard,
    Radar,
    Settings,
    Shield,
    Trophy,
    Users,
} from "lucide-react";

export interface NavigationItem {
    title: string;
    href: string;
    icon: React.ElementType;
}

export const navigationItems: NavigationItem[] = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
    },

    {
        title: "Players",
        href: "/players",
        icon: Users,
    },

    {
        title: "Teams",
        href: "/teams",
        icon: Shield,
    },

    {
        title: "Matches",
        href: "/matches",
        icon: Trophy,
    },

    {
        title: "Standings",
        href: "/standings",
        icon: ClipboardList,
    },

    {
        title: "Tactics",
        href: "/tactics",
        icon: Radar,
    },

    {
        title: "Watchlist",
        href: "/watchlist",
        icon: Bookmark,
    },

    {
        title: "Settings",
        href: "/settings",
        icon: Settings,
    },
];