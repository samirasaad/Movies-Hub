import type { Movie, MovieSearchParams } from "@/lib/types/movie";
import type { TmdbMovie, TmdbPaginatedResponse } from "@/lib/types/tmdb";
import { CACHE } from "@/lib/constants/cache";
import { MOVIE_API_ENDPOINTS } from "@/lib/constants/api-endpoints";
import { get } from "../_get";
import { transformTmdbMovie } from "../_transform";

export interface DiscoverMoviesResult {
  movies: Movie[];
  page: number;
  totalPages: number;
  totalResults: number;
}

/** Fetches discover/movie from TMDB with filters and sort. Use in Server Components. */
export async function fetchDiscoverMovies(params: {
  page?: number;
  sortBy?: MovieSearchParams["sortBy"];
  sortOrder?: MovieSearchParams["sortOrder"];
  genre?: string;
  year?: string;
}): Promise<DiscoverMoviesResult> {
  const page = Math.max(1, params.page ?? 1);
  const sortBy = params.sortBy ?? "popularity";
  const sortOrder = params.sortOrder ?? "desc";
  const suffix = sortOrder === "asc" ? "asc" : "desc";
  const tmdbField = sortBy === "title" ? "original_title" : sortBy;
  const tmdbSort = `${tmdbField}.${suffix}`;

  const raw = await get<TmdbPaginatedResponse<TmdbMovie>>(
    MOVIE_API_ENDPOINTS.DISCOVER_MOVIE,
    {
      page,
      sort_by: tmdbSort,
      include_adult: false,
      ...(params.genre ? { with_genres: params.genre } : {}),
      ...(params.year ? { primary_release_year: params.year } : {}),
    },
    CACHE.MEDIUM,
  );

  return {
    movies: raw.results.map(transformTmdbMovie),
    page: raw.page,
    totalPages: Math.min(raw.total_pages, 500),
    totalResults: raw.total_results,
  };
}
