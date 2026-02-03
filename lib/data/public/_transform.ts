import { buildImageUrl } from "@/lib/constants/img";
import { GENRES_BY_ID } from "@/lib/constants/genres";
import type { Movie } from "@/lib/types/movie";
import type { TmdbMovie } from "@/lib/types/tmdb";

export const mapGenreIds = (ids: number[]) =>
  ids.map((i) => GENRES_BY_ID[i] ?? "Unknown").filter(Boolean);

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
