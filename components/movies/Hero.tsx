"use client";

import Image from "next/image";
import SearchInput from "../common/SearchInput";

const floatingPosters = [
  {
    src: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    alt: "Spider-Man",
    position: "top-12 left-[15%]",
    size: "w-16 h-16 md:w-20 md:h-20",
    zIndex: "z-10",
  },
  {
    src: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    alt: "Loki",
    position: "top-20 left-[25%]",
    size: "w-14 h-14 md:w-16 md:h-16",
    zIndex: "z-20",
  },
  {
    src: "https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    alt: "Wednesday",
    position: "top-8 right-[30%]",
    size: "w-16 h-16 md:w-20 md:h-20",
    zIndex: "z-10",
  },
  {
    src: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    alt: "John Wick",
    position: "top-24 right-[20%]",
    size: "w-12 h-12 md:w-14 md:h-14",
    zIndex: "z-20",
  },
  {
    src: "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
    alt: "Oppenheimer",
    position: "top-4 left-[40%]",
    size: "w-20 h-20 md:w-24 md:h-24",
    zIndex: "z-30",
  },
  {
    src: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    alt: "The Witcher",
    position: "top-32 left-[8%]",
    size: "w-12 h-12 md:w-14 md:h-14",
    zIndex: "z-10",
  },
];

export function HeroSection() {
  return (
    <section className="relative pt-6 pb-10 px-4 md:px-8 overflow-hidden">
      {/* Logo */}
      <div className="flex justify-center mb-4">
        <div className="w-10 h-10 md:w-12 md:h-12">
          <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
            <path d="M24 4L44 24L24 44L4 24L24 4Z" fill="#be5eff" />
            <path d="M24 12L36 24L24 36L12 24L24 12Z" fill="#ff6b9d" />
            <path d="M24 18L30 24L24 30L18 24L24 18Z" fill="#ffd93d" />
          </svg>
        </div>
      </div>

      {/* Hero Poster */}
      <div className="relative h-100  max-w-xl mx-auto">
        <Image
          src="/hero-img.png"
          alt="Hero Poster"
          fill
          className="object-contain"
        />
      </div>

      {/* Headline */}
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
        Find <span className="text-primary">Movies</span> You&apos;ll Love
        <br />
        Without the Hassle
      </h1>

      {/* Search Bar */}
      <div className=" mx-auto max-w-lg items-center gap-3">
        <SearchInput placeholder="Search through 300+ movies online" />
      </div>
    </section>
  );
}
