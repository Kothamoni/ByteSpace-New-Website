"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Container from "@/components/ui/Container";

const links = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30 text-white">
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 text-[13px] md:flex" aria-label="Main">
          {links.map((l, i) => (
            <Link
              key={l.label}
              href={l.href}
              className={i === 0 ? "font-semibold" : "opacity-90 hover:opacity-100"}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 text-[13px] md:flex">
          <Link href="/login" className="opacity-90 hover:opacity-100">Sign In</Link>
          <Link href="/signup" className="opacity-90 hover:opacity-100">Join Us</Link>
          <button aria-label="Cart"><ShoppingBag size={16} /></button>
        </div>

        <button
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </Container>

      {open && (
        <div className="mx-5 rounded-2xl bg-white p-5 text-ink shadow-xl md:hidden">
          <nav className="flex flex-col gap-4 text-sm" aria-label="Mobile">
            {links.map((l) => (
              <Link key={l.label} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
            ))}
            <hr />
            <Link href="/login" onClick={() => setOpen(false)}>Sign In</Link>
            <Link href="/signup" onClick={() => setOpen(false)}>Join Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
