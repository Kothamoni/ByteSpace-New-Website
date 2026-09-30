import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: "lime" | "outline";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const styles = {
  lime: "bg-brand-lime text-ink hover:brightness-95",
  outline: "border border-zinc-300 text-ink hover:bg-zinc-50",
};

export default function Button({
  children,
  href,
  variant = "lime",
  className = "",
  ...rest
}: Props) {
  const classes = `inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition ${styles[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
