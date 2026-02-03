import Link from "next/link";
import type { Movie } from "@/lib/types/movie";
import { MoviePoster } from "@/components/common/MoviePoster";
import { ROUTES } from "@/lib/constants/routes";

type MovieCardProps = {
  movie: Movie;
  variant?: "default" | "featured";
};

const MovieCard = ({ movie, variant = "default" }: MovieCardProps) => {
  const isFeatured = variant === "featured";

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl bg-zinc-900/80 ring-1 ring-white/5 transition hover:-translate-y-1 hover:ring-red-500/70 ${
        isFeatured ? "flex flex-col md:flex-row" : ""
      }`}
    >
      <div className={isFeatured ? "relative aspect-[3/4] w-full md:w-1/3" : "relative aspect-[2/3] w-full"}>
        <MoviePoster
          src={movie.posterUrl}
          alt={movie.title}
          className="object-contain"
          sizes={isFeatured ? "(min-width: 768px) 33vw, 60vw" : "(min-width: 768px) 20vw, 50vw"}
        />
        {movie.tag ? (
          <span className="absolute left-2 top-2 rounded-full bg-red-600/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white shadow-sm">
            {movie.tag}
          </span>
        ) : null}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      </div>

      <div
        className={`flex flex-1 flex-col justify-between p-3 sm:p-4 ${
          isFeatured ? "md:p-6" : ""
        }`}
      >
        <div className="space-y-1.5">
          <div className="flex items-center gap-3 text-[11px] text-zinc-400">
            <span>{movie.year}</span>
            <span className="h-0.5 w-0.5 rounded-full bg-zinc-500" />
            <span>{movie.duration}</span>
          </div>
          <h3 className="line-clamp-2 text-sm font-semibold text-white sm:text-base">
            {movie.title}
          </h3>
          <div className="flex flex-wrap gap-1.5 text-[11px] text-zinc-400">
            {movie.genres.map((genre) => (
              <span
                key={genre}
                className="rounded-full bg-zinc-800/80 px-2 py-0.5 text-[10px] text-zinc-200"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-amber-400">
            <span>★</span>
            <span className="font-semibold">{movie.rating.toFixed(1)}</span>
          </div>
          <Link
            href={ROUTES.MOVIE_DETAIL(movie.id)}
            className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-black shadow-sm hover:bg-zinc-100"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;

