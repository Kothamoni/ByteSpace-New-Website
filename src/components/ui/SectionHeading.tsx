export default function SectionHeading({ title, text }: { title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="font-heading text-3xl font-semibold leading-tight md:text-[34px]">{title}</h2>
      {text && <p className="mt-4 text-sm leading-relaxed text-muted">{text}</p>}
    </div>
  );
}
