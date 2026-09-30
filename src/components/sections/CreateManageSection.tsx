import { CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SafeImage from "@/components/ui/SafeImage";
import FloatingCard from "@/components/ui/FloatingCard";
import AvatarStack from "@/components/ui/AvatarStack";
import Shape from "@/components/ui/Shape";

const points = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];

export default function CreateManageSection() {
  return (
    <section id="creators" className="relative overflow-hidden bg-[#f7f8fb] pb-24 pt-8">
      <div className="pointer-events-none absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-brand-lime/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-indigo-200/60 blur-3xl" />

      <Container className="relative grid items-center gap-12 lg:grid-cols-2">
        <div className="relative mx-auto h-[420px] w-full max-w-[460px]">
          <div className="absolute left-0 top-10 w-44 rounded-xl bg-brand-blue p-3 text-white">
            <p className="text-xs">Total Revenue</p>
            <p className="text-[8px] opacity-70">July 1-28</p>
            <p className="font-heading text-lg font-semibold">$120.29</p>
            <div className="mt-1 h-1.5 rounded-full bg-white/30">
              <div className="h-full w-3/5 rounded-full bg-brand-lime" />
            </div>
          </div>
          <div className="absolute left-0 top-[132px] z-10 w-32 rounded-xl bg-brand-blue p-3 text-white">
            <p className="text-xs">Year to Date</p>
            <p className="text-[8px] opacity-70">2023</p>
            <p className="font-heading text-base font-semibold">$1,200.38</p>
            <span className="mt-1 inline-block rounded-full bg-brand-lime px-2 py-0.5 text-[9px] font-semibold text-ink">
              +12%
            </span>
          </div>

          <SafeImage
            src="/images/creator-woman.png"
            alt="Smiling woman with headset holding a tablet"
            width={300}
            height={400}
            className="absolute bottom-0 left-[70px] h-[380px] w-auto"
          />
          <Shape name="squiggle-lime" size={110} className="left-[210px] top-[120px]" />

          <FloatingCard className="absolute bottom-6 right-0 z-10">
            <p className="text-xs font-semibold">Happy Students</p>
            <p className="mb-2 text-[9px] text-zinc-500">4.5 (240) ★</p>
            <AvatarStack />
          </FloatingCard>
        </div>

        <div>
          <h2 className="font-heading text-3xl font-semibold leading-tight md:text-[34px]">
            Create &amp; Manage Courses Easily.
          </h2>
          <p className="mt-6 max-w-md text-[13px] leading-relaxed text-zinc-600">
            <strong className="text-ink">ByteSpace</strong> supports individuals or entities in the creation,
            publication, and administration of educational courses.
          </p>
          <ul className="mt-6 space-y-3 text-[13px]">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="fill-brand-blue text-white" /> {p}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
