import type { Movie } from "@/lib/types/movie";
import type { TmdbMovie, TmdbPaginatedResponse } from "@/lib/types/tmdb";
import { CACHE } from "@/lib/constants/cache";
import { MOVIE_API_ENDPOINTS } from "@/lib/constants/api-endpoints";
import { get } from "../_get";
import { transformTmdbMovie } from "../_transform";

export interface SearchMoviesResult {
  movies: Movie[];
  page: number;
  totalPages: number;
  totalResults: number;
}

/** Fetches search/movie from TMDB. Use in Server Components. */
export async function fetchSearchMovies(params: {
  query: string;
  page?: number;
}): Promise<SearchMoviesResult> {
  const page = Math.max(1, params.page ?? 1);
  const raw = await get<TmdbPaginatedResponse<TmdbMovie>>(
    MOVIE_API_ENDPOINTS.SEARCH_MOVIE,
    {
      query: params.query.trim(),
      page,
      include_adult: false,
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
