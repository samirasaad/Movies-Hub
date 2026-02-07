"use client";

import { useState } from "react";
import Image from "next/image";

type MoviePosterProps = {
  src: string | null;
  alt: string;
  className?: string;
  fill?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
  fallback?: string;
};

export function MoviePoster({
  src,
  alt,
  className = "object-cover",
  fill = true,
  sizes,
  width,
  height,
  fallback = "/movie-placeholder.jpg",
}: MoviePosterProps) {
  const [imgSrc, setImgSrc] = useState(src ?? fallback);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallback);
    }
  };

  if (fill) {
    return (
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className={className}
        sizes={sizes}
        onError={handleError}
      />
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
    />
  );
}
