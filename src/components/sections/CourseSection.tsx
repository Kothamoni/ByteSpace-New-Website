"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CourseCard from "@/components/cards/CourseCard";
import { courses, courseTags } from "@/data/courses";

export default function CourseSection() {
  const [active, setActive] = useState("Featured");

  return (
    <section id="courses" className="py-16 md:py-20">
      <Container>
        <SectionHeading
          title="Discover Your Passion, Build Your Skills"
          text="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2.5">
          {courseTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActive(tag)}
              className={`rounded-full px-4 py-1.5 text-[11px] transition ${
                active === tag ? "bg-brand-lime font-medium" : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
              }`}
            >
              {tag}
            </button>
          ))}
          <button className="px-2 py-1.5 text-[11px] text-brand-blue">+ More</button>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <CourseCard key={c.id} course={c} />
          ))}
        </div>
      </Container>
    </section>
  );
}
