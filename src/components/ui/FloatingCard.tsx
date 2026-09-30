export default function FloatingCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-xl bg-white p-3 text-ink shadow-[0_10px_30px_rgba(0,0,0,0.12)] ${className}`}>
      {children}
    </div>
  );
}
