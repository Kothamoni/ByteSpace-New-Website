import type { LucideIcon } from "lucide-react";

export default function CategoryCard({ name, icon: Icon }: { name: string; icon: LucideIcon }) {
  return (
    <div className="flex h-[82px] flex-col items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white text-xs">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-lime">
        <Icon size={14} />
      </span>
      {name}
    </div>
  );
}
