"use client";

import { useRef } from "react";
import { TrendingMovieCard } from "@/components/movies/TrendingMovieCard";
import { SectionTitle } from "@/components/common/SectionTitle";
import type { MovieCardData } from "@/components/movies/types";

type TrendingSectionProps = {
  movies: MovieCardData[];
};

export function TrendingSection({ movies }: TrendingSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-6">
      <SectionTitle className="text-primary font-semibold text-2xl md:text-3xl px-4 md:px-8 mb-4 text-center">
        Trending
      </SectionTitle>
      <div
        ref={scrollRef}
        className="flex gap-6 justify-between overflow-x-auto px-4 md:px-8 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {movies.map((movie) => (
          <TrendingMovieCard
            key={movie.id}
            number={movie.number ?? 0}
            title={movie.title}
            poster={movie.poster}
          />
        ))}
      </div>
    </section>
  );
}
