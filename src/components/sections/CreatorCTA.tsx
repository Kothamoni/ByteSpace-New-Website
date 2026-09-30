import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Shape from "@/components/ui/Shape";

export default function CreatorCTA() {
  return (
    <section className="bg-grid relative overflow-hidden bg-brand-blue py-24 text-center text-white">
      <Container className="relative z-10">
        <h2 className="mx-auto max-w-xl font-heading text-3xl font-semibold leading-tight md:text-4xl">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-xs leading-relaxed text-white/85 md:text-[13px]">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
          become a part of a community comprising over 10,000 local and international creators. Utilize our Course
          Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <Button href="/signup" className="mt-8">Join as Creator</Button>
      </Container>

      <Shape name="squiggle-lime" size={190} className="-left-6 -top-6 hidden md:block" />
      <Shape name="squiggle-white" size={100} className="left-[12%] top-[28%] hidden md:block" />
      <Shape name="cone-white" size={130} className="-left-4 bottom-[30%] hidden md:block" />
      <Shape name="ring-lime" size={190} className="-bottom-10 left-[6%] hidden md:block" />
      <Shape name="cone-lime" size={110} className="right-[12%] top-4 hidden md:block" />
      <Shape name="cylinder-white" size={170} className="-right-8 top-0 hidden md:block" />
      <Shape name="squiggle-lime" size={180} className="-bottom-6 right-[4%] hidden md:block" />
    </section>
  );
}
