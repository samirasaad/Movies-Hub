import { formatVoteCount } from "@/lib/utils/format";
import type { MovieDetails } from "@/lib/types/movie";

type MovieDetailsHeaderProps = {
  movie: MovieDetails;
};

export function MovieDetailsHeader({ movie }: MovieDetailsHeaderProps) {
  const meta = [movie.year, movie.duration || "—"].filter(Boolean).join(" · ");
  const voteDisplay = movie.voteCount
    ? `${movie.rating.toFixed(1)}/10 (${formatVoteCount(movie.voteCount)})`
    : `${movie.rating.toFixed(1)}/10`;

  return (
    <header className="flex flex-wrap items-start justify-between gap-4 sm:gap-6">
      <div className="min-w-0 flex-1">
        <h1 className="truncate text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {movie.title}
        </h1>
        <p className="mt-1 text-xs text-zinc-400 sm:text-sm">{meta}</p>
      </div>
      <div className="flex shrink-0 items-center gap-3">
        <span className="text-sm font-medium text-amber-400">
          ★ {voteDisplay}
        </span>
      </div>
    </header>
  );
}
