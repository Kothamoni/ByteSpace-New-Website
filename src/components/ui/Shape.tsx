import SafeImage from "./SafeImage";

/** Decorative 3D shape from /public/images/shapes. Position and size it with className. */
export default function Shape({
  name,
  size = 160,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  return (
    <SafeImage
      src={`/images/shapes/${name}.png`}
      alt=""
      width={size}
      height={size}
      className={`pointer-events-none absolute select-none ${className}`}
    />
  );
}
