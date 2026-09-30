import { Aperture, Globe, Loader, Puzzle, Zap } from "lucide-react";
import Container from "@/components/ui/Container";

const logos = [Globe, Loader, Zap, Puzzle, Aperture];

export default function LogoStrip() {
  return (
    <section className="bg-surface py-12" aria-label="Trusted by">
      <Container className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-zinc-500">
        {logos.map((Icon, i) => (
          <div key={i} className="flex items-center gap-2 font-heading text-base font-semibold">
            <Icon size={22} /> Logoipsum
          </div>
        ))}
      </Container>
    </section>
  );
}
