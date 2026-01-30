"use client";

import { PopularMovieCard } from "@/components/movies/PopularMovieCard";
import { SectionTitle } from "@/components/common/SectionTitle";
import type { PopularMovieData } from "@/lib/movies";

type PopularSectionProps = {
  movies: PopularMovieData[];
};

export function PopularSection({ movies }: PopularSectionProps) {
  return (
    <section className="py-6 px-4 md:px-8 container mx-auto">
      <SectionTitle>Popular</SectionTitle>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7">
        {movies.map((movie, index) => (
          <PopularMovieCard
            key={movie.id ?? index}
            id={movie.id}
            title={movie.title}
            poster={movie.poster}
            rating={movie.rating}
            category={movie.category}
            type={movie.type}
            badge={movie.badge}
            badges={movie.badges}
          />
        ))}
      </div>
    </section>
  );
}
