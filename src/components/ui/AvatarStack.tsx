import SafeImage from "./SafeImage";

const avatars = [1, 2, 3, 4, 5].map((n) => `/images/avatars/avatar-${n}.png`);

export default function AvatarStack({ label = "2K+", size = 26 }: { label?: string; size?: number }) {
  return (
    <div className="flex items-center">
      {avatars.map((src, i) => (
        <SafeImage
          key={src}
          src={src}
          alt=""
          width={size}
          height={size}
          className={`rounded-full border-2 border-white object-cover ${i > 0 ? "-ml-2" : ""}`}
        />
      ))}
      <span
        className="-ml-2 flex items-center justify-center rounded-full bg-brand-lime text-[10px] font-semibold"
        style={{ width: size, height: size }}
      >
        {label}
      </span>
    </div>
  );
}
