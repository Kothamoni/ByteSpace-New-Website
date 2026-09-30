import { BarChart3, Star } from "lucide-react";
import SafeImage from "@/components/ui/SafeImage";
import AvatarStack from "@/components/ui/AvatarStack";
import type { Course } from "@/data/courses";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-2.5">
      <div className="relative h-[140px] overflow-hidden rounded-xl bg-zinc-200">
        <SafeImage src={course.image} alt={course.title} fill className="object-cover" />
        <div className="absolute inset-x-2 bottom-2 flex gap-1.5 text-[9px]">
          {[`${course.lessons} Lessons`, course.duration, `${course.comments} Comments`].map((t) => (
            <span key={t} className="rounded-full bg-white/70 px-2 py-1 text-zinc-700 backdrop-blur">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="px-1 pb-1 pt-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="truncate font-heading text-sm font-semibold">{course.title}</h3>
          <span className="flex shrink-0 items-center gap-1 text-xs text-zinc-500">
            {course.rating} <Star size={11} className="fill-zinc-300 text-zinc-300" />
          </span>
        </div>
        <p className="mt-0.5 text-[10px] text-zinc-500">
          by <span className="text-brand-blue">{course.author}</span>
        </p>

        <div className="mt-3 flex items-center justify-between">
          <span className="flex items-center gap-1.5 rounded-full bg-zinc-100 px-2.5 py-1 text-[10px] text-zinc-600">
            <BarChart3 size={11} /> {course.level}
          </span>
          <AvatarStack size={22} />
        </div>

        <p className="mt-3 font-heading text-sm font-semibold text-brand-blue">
          {course.price}
          <span className="text-[9px] font-normal text-zinc-500">/lifetime</span>
        </p>
      </div>
    </article>
  );
}
