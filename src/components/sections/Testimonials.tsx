import Container from "@/components/ui/Container";
import TestimonialCard from "@/components/cards/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8fb] py-20">
      <div className="pointer-events-none absolute left-1/3 top-0 h-72 w-72 rounded-full bg-brand-lime/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-indigo-200/60 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <h2 className="font-heading text-3xl font-semibold leading-tight md:text-[34px]">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-[13px] leading-relaxed text-zinc-600">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform.
            Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished
            creators.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </Container>
    </section>
  );
}
