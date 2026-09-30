import { Search } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SafeImage from "@/components/ui/SafeImage";
import FloatingCard from "@/components/ui/FloatingCard";
import AvatarStack from "@/components/ui/AvatarStack";
import Shape from "@/components/ui/Shape";

export default function Hero() {
  return (
    <section className="bg-grid relative overflow-hidden bg-brand-blue pt-32 text-white">
      <Container className="relative z-10 text-center">
        <h1 className="mx-auto max-w-3xl font-heading text-4xl font-semibold leading-tight md:text-6xl">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-xs text-white/80 md:text-sm">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <form className="mx-auto mt-10 flex max-w-lg items-center gap-3" role="search">
          <label htmlFor="hero-search" className="sr-only">Search courses</label>
          <div className="flex h-10 flex-1 items-center gap-2 rounded-full bg-white px-4 text-zinc-500">
            <Search size={14} />
            <input
              id="hero-search"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-xs text-ink outline-none placeholder:text-zinc-500"
            />
          </div>
          <Button type="submit" className="h-10 !px-6 text-xs">Search</Button>
        </form>
      </Container>

      {/* Student + lime circle + floating cards */}
      <div className="relative mx-auto mt-12 h-[380px] max-w-[1200px] md:h-[440px]">
        <div className="absolute left-1/2 top-16 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-brand-lime md:h-[700px] md:w-[700px]" />

        <SafeImage
          src="/images/hero-student.png"
          alt="Smiling student with headphones holding a laptop"
          width={420}
          height={440}
          priority
          className="absolute bottom-0 left-1/2 h-[380px] w-auto -translate-x-1/2 md:h-[440px]"
        />

        <FloatingCard className="absolute left-[6%] top-[12%] hidden md:block">
          <p className="text-xs font-semibold">UI/UX Design</p>
          <p className="text-[9px] text-zinc-500">200 Courses &nbsp;•&nbsp; 1000+ Students</p>
        </FloatingCard>

        <FloatingCard className="absolute right-[6%] top-[16%] hidden w-40 md:block">
          <p className="text-[10px] text-zinc-600">Learning Progress</p>
          <p className="font-heading text-2xl font-semibold">55%</p>
          <div className="mt-2 h-1.5 rounded-full bg-zinc-200">
            <div className="h-full w-[55%] rounded-full bg-brand-lime" />
          </div>
        </FloatingCard>

        <FloatingCard className="absolute bottom-[8%] left-[2%] hidden md:block">
          <p className="text-xs font-semibold">Happy Students</p>
          <p className="mb-2 text-[9px] text-zinc-500">4.5 (240) ★</p>
          <AvatarStack />
        </FloatingCard>

        <Shape name="squiggle-lime" size={220} className="-left-8 -top-40 hidden md:block" />
        <Shape name="squiggle-white" size={90} className="left-[6%] top-[-6%] hidden md:block" />
        <Shape name="ring-white" size={150} className="bottom-4 left-[2%] hidden md:block" />
        <Shape name="cone-white" size={110} className="right-[10%] top-[-8%] hidden md:block" />
        <Shape name="squiggle-white" size={130} className="bottom-6 right-[2%] hidden md:block" />
        <Shape name="cylinder-white" size={180} className="-right-10 -top-44 hidden md:block" />
      </div>
    </section>
  );
}
