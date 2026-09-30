import SafeImage from "@/components/ui/SafeImage";

type Props = { name: string; role: string; image: string; quote: string };

export default function TestimonialCard({ name, role, image, quote }: Props) {
  return (
    <figure className="rounded-2xl bg-white p-6 shadow-sm">
      <SafeImage src={image} alt={name} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
      <figcaption className="mt-3">
        <p className="font-heading text-sm font-semibold">{name}</p>
        <p className="text-xs text-brand-blue">{role}</p>
      </figcaption>
      <blockquote className="mt-4 text-[13px] leading-relaxed text-zinc-600">&ldquo;{quote}&rdquo;</blockquote>
    </figure>
  );
}
