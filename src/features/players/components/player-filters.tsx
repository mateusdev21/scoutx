interface PlayerFiltersProps {
  search: string;
  position: string;
  sort: string;
  onSearchChange: (value: string) => void;
  onPositionChange: (value: string) => void;
  onSortChange: (value: string) => void;
}

export function PlayerFilters({
  search,
  position,
  sort,
  onSearchChange,
  onPositionChange,
  onSortChange,
}: PlayerFiltersProps) {
  return (
    <div className="grid gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 lg:grid-cols-3">
      <input
        type="text"
        placeholder="Search player..."
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
        className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition-all focus:border-green-500"
      />

      <select
        value={position}
        onChange={(event) => onPositionChange(event.target.value)}
        className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition-all focus:border-green-500"
      >
        <option value="ALL">All Positions</option>

        <option value="ST">Striker</option>

        <option value="RW">Right Wing</option>

        <option value="CM">Central Midfielder</option>

        <option value="CAM">Attacking Midfielder</option>

        <option value="CDM">Defensive Midfielder</option>

        <option value="CB">Center Back</option>
      </select>

      <select
        value={sort}
        onChange={(event) => onSortChange(event.target.value)}
        className="rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 text-white outline-none transition-all focus:border-green-500"
      >
        <option value="rating">Sort by Rating</option>

        <option value="potential">Sort by Potential</option>

        <option value="age">Sort by Age</option>
      </select>
    </div>
  );
}
