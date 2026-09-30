import Link from "next/link";
import Logo from "@/components/ui/Logo";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { footerColumns } from "@/data/footerLinks";

export default function Footer() {
  return (
    <footer className="bg-white pt-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Logo dark />
            <p className="mt-4 text-xs">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <form className="mt-8 flex max-w-md items-center gap-3">
              <label htmlFor="newsletter" className="sr-only">Email</label>
              <input
                id="newsletter"
                type="email"
                placeholder="Enter your email"
                className="h-11 w-full rounded-full border border-zinc-300 px-5 text-sm outline-none focus:border-brand-blue"
              />
              <Button type="submit" className="h-11 shrink-0">Search</Button>
            </form>
            <p className="mt-4 max-w-sm text-[11px] leading-relaxed">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
            {footerColumns.map((col, i) => (
              <ul key={i} className="space-y-4 text-[13px]">
                {col.map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:underline">{item}</Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-zinc-300 py-6 text-[11px] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookies Settings</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
