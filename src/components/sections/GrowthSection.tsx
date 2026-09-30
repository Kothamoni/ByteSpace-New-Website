import Container from "@/components/ui/Container";
import SafeImage from "@/components/ui/SafeImage";
import StatItem from "@/components/cards/StatItem";
import FloatingCard from "@/components/ui/FloatingCard";
import Shape from "@/components/ui/Shape";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export default function GrowthSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8fb] py-20">
      <div className="pointer-events-none absolute -left-10 top-0 h-72 w-72 rounded-full bg-brand-lime/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-indigo-200/60 blur-3xl" />

      <Container className="relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-3xl font-semibold leading-tight md:text-[34px]">
            Your Path to Professional Growth Starts Here!
          </h2>
          <p className="mt-6 max-w-md text-[13px] leading-relaxed text-zinc-600">
            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your
            career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark
            on a new career path entirely, we have the resources you need.
          </p>
          <div className="mt-8 flex gap-10">
            {stats.map((s) => (
              <StatItem key={s.label} {...s} />
            ))}
          </div>
        </div>

        <div className="relative mx-auto h-[380px] w-full max-w-[460px]">
          <FloatingCard className="absolute left-0 top-0 w-[62%] p-2.5">
            <div className="h-24 rounded-lg bg-zinc-200" />
            <p className="mt-2 font-heading text-sm font-semibold">Learn Figma from Basic</p>
            <p className="text-[9px] text-zinc-500">by purepearl studio</p>
            <p className="mt-6 font-heading text-sm font-semibold text-brand-blue">$25</p>
          </FloatingCard>

          <SafeImage
            src="/images/hero-student.png"
            alt="Student with headphones and laptop"
            width={330}
            height={360}
            className="absolute bottom-0 right-0 h-[330px] w-auto drop-shadow-2xl"
          />

          <FloatingCard className="absolute right-0 top-[38%] z-10 w-36">
            <p className="text-[10px] text-zinc-600">Learning Progress</p>
            <p className="font-heading text-2xl font-semibold">55%</p>
            <div className="mt-2 h-1.5 rounded-full bg-zinc-200">
              <div className="h-full w-[55%] rounded-full bg-brand-lime" />
            </div>
          </FloatingCard>

          <Shape name="squiggle-lime" size={110} className="right-2 top-0" />
        </div>
      </Container>
    </section>
  );
}
