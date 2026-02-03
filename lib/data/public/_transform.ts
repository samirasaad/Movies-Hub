import { buildImageUrl } from "@/lib/constants/img";
import { GENRES_BY_ID } from "@/lib/constants/genres";
import type { Movie, MovieDetails } from "@/lib/types/movie";
import type { TmdbMovie, TmdbMovieDetails } from "@/lib/types/tmdb";

export const mapGenreIds = (ids: number[]) =>
  ids.map((i) => GENRES_BY_ID[i] ?? "Unknown").filter(Boolean);

/** Convert TMDB runtime (minutes) to display duration (e.g. "2h 46m"). */
export function runtimeToDuration(runtime: number | null | undefined): string {
  if (runtime == null || runtime === 0) return "";
  const h = Math.floor(runtime / 60);
  const m = runtime % 60;
  return [h && `${h}h`, m && `${m}m`].filter(Boolean).join(" ");
}

export const transformTmdbMovie = (r: TmdbMovie): Movie => ({
  id: String(r.id),
  tmdbId: r.id,
  title: r.title,
  year: r.release_date?.slice(0, 4) ?? "",
  releaseDate: r.release_date ?? "",
  rating: r.vote_average,
  genres: mapGenreIds(r.genre_ids ?? []),
  duration: "",
  posterUrl: buildImageUrl(r.poster_path) || "/movie-placeholder.jpg",
  backdropUrl: buildImageUrl(r.backdrop_path, "w780") || undefined,
  overview: r.overview ?? "",
});

export function transformTmdbMovieDetails(r: TmdbMovieDetails): MovieDetails {
  const base = transformTmdbMovie({
    ...r,
    genre_ids: r.genres?.map((g) => g.id) ?? [],
  });
  return {
    ...base,
    duration: runtimeToDuration(r.runtime),
    tagline: r.tagline ?? undefined,
    budget: r.budget || undefined,
    revenue: r.revenue || undefined,
    runtime: r.runtime ?? undefined,
    homepage: r.homepage ?? undefined,
    imdbId: r.imdb_id ?? undefined,
    status: r.status ?? undefined,
    voteCount: r.vote_count,
    genres: r.genres?.map((g) => g.name) ?? base.genres,
    productionCompanies: r.production_companies?.map((c) => c.name),
    productionCountries: r.production_countries?.map((c) => c.name),
    spokenLanguages: r.spoken_languages?.map((l) => l.english_name || l.name),
  };
}
