
import { MovieCardGridItem } from "@/components/movies/MovieCard";
import { SectionTitle } from "@/components/common/SectionTitle";
import type { MovieCardData } from "@/components/movies/types";

type SearchSectionProps = {
  results: MovieCardData[];
  title: string;
  subtitle?: string;
};

export function SearchSection({
  results,
  title,
  subtitle,
}: SearchSectionProps) {
  return (
    <section className="py-6 px-4 md:px-8 container mx-auto">
      <SectionTitle className="text-2xl md:text-3xl text-center mb-4">
        {title}
      </SectionTitle>
      {subtitle && (
        <p className="text-sm text-zinc-300 text-center mb-4">{subtitle}</p>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7">
        {results.map((movie, index) => (
          <MovieCardGridItem
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
