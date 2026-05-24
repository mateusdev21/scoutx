interface PlayerNodeProps {
  name: string;
  position: string;
  x: number;
  y: number;
}

export function PlayerNode({ name, position, x, y }: PlayerNodeProps) {
  return (
    <div
      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-zinc-950 bg-green-500 text-sm font-bold text-black shadow-lg">
        {position}
      </div>

      <p className="mt-2 text-center text-xs font-medium text-white">{name}</p>
    </div>
  );
}
