"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationItems } from "@/shared/constants/navigation";
import { cn } from "@/shared/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 border-r border-zinc-800 bg-zinc-950 lg:flex lg:flex-col">
      <div className="flex h-16 items-center border-b border-zinc-800 px-auto justify-center">
        <Link
          href="/dashboard"
          className="text-2xl font-bold tracking-tight text-white"
        >
          ScoutX
        </Link>
      </div>

      <nav className="flex flex-1 flex-col gap-2 p-4">
        {navigationItems.map((item) => {
          const Icon = item.icon;

          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-green-500 text-black"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
              )}
            >
              <Icon className="h-5 w-5" />

              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
