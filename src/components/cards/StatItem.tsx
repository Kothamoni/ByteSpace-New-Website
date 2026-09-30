export default function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-heading text-xl font-medium text-brand-blue">{value}</p>
      <p className="text-[11px] text-zinc-600">{label}</p>
    </div>
  );
}
