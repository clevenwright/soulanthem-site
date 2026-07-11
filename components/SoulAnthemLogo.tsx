import Sprout from "./Sprout";

export default function SoulAnthemLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Sprout className="h-8 w-auto" />
      <span className="text-lg font-semibold tracking-tight">
        Soul<span className="text-[var(--accent)]">Anthem</span>
      </span>
    </div>
  );
}
