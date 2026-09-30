import Link from "next/link";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="ByteSpace home">
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
        <path d="M3 2h7v9.5a7 7 0 1 1-7 7V2Z" fill="#C8F902" />
        <path d="M11 13l6 3.5-6 3.5V13Z" fill={dark ? "#141414" : "#0A3FE8"} />
      </svg>
      <span className={`font-heading text-lg font-bold ${dark ? "text-ink" : "text-white"}`}>
        ByteSpace
      </span>
    </Link>
  );
}
