interface FormationSelectorProps {
  formations: string[];
  selectedFormation: string;
  onSelect: (formation: string) => void;
}

export function FormationSelector({
  formations,
  selectedFormation,
  onSelect,
}: FormationSelectorProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {formations.map((formation) => (
        <button
          key={formation}
          onClick={() => onSelect(formation)}
          className={`rounded-xl px-5 py-3 text-sm font-medium transition-all duration-200 ${
            selectedFormation === formation
              ? "bg-green-500 text-black"
              : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
          }`}
        >
          {formation}
        </button>
      ))}
    </div>
  );
}
