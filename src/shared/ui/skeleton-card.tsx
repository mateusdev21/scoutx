export function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-3xl border border-zinc-800 bg-zinc-900 p-6">
      <div className="h-6 w-40 rounded-lg bg-zinc-800" />

      <div className="mt-3 h-4 w-24 rounded-lg bg-zinc-800" />

      <div className="mt-8 grid grid-cols-2 gap-4">
        {Array.from({
          length: 6,
        }).map((_, index) => (
          <div key={index} className="h-20 rounded-xl bg-zinc-800" />
        ))}
      </div>

      <div className="mt-6 h-24 rounded-xl bg-zinc-800" />
    </div>
  );
}
