import Link from "next/link";
import Logo from "@/components/ui/Logo";
import Shape from "@/components/ui/Shape";

export default function AuthLayout({
  title,
  subtitle,
  children,
  footerText,
  footerLinkText,
  footerLinkHref,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footerText: string;
  footerLinkText: string;
  footerLinkHref: string;
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="bg-grid relative hidden flex-col justify-between overflow-hidden bg-brand-blue p-10 text-white lg:flex">
        <Logo />
        <div className="relative z-10 max-w-sm">
          <h2 className="font-heading text-3xl font-semibold leading-tight">
            Get Access to Hundreds Courses Available
          </h2>
          <p className="mt-4 text-sm text-white/80">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
        </div>
        <p className="relative z-10 text-xs text-white/60">© 2023 ByteSpace. All rights reserved.</p>
        <Shape name="squiggle-lime" size={200} className="-left-8 -top-10" />
        <Shape name="ring-white" size={200} className="-bottom-16 -right-10" />
      </div>

      <div className="flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-sm">
          <div className="mb-8 lg:hidden">
            <Logo dark />
          </div>
          <h1 className="font-heading text-2xl font-semibold">{title}</h1>
          <p className="mt-2 text-sm text-zinc-500">{subtitle}</p>

          <div className="mt-8">{children}</div>

          <p className="mt-8 text-center text-xs text-zinc-500">
            {footerText}{" "}
            <Link href={footerLinkHref} className="font-medium text-brand-blue">
              {footerLinkText}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
