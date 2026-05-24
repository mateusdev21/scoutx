export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-6 lg:px-8">
        <div>
          <h1 className="text-lg font-semibold text-zinc-100">
            Dashboard
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-zinc-800" />
        </div>
      </div>
    </header>
  );
}
