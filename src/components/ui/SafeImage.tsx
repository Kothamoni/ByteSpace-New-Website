"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
};

/** next/image with a grey fallback, so a missing file never shows a broken icon. */
export default function SafeImage({ src, alt, className = "", ...rest }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <div role="img" aria-label={alt} className={`bg-zinc-200 ${className}`} />;
  }
  return <Image src={src} alt={alt} className={className} onError={() => setFailed(true)} {...rest} />;
}
