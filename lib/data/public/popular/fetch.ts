import type { Movie } from "@/lib/types/movie";
import type { TmdbMovie, TmdbPaginatedResponse } from "@/lib/types/tmdb";
import { CACHE } from "@/lib/constants/cache";
import { MOVIE_API_ENDPOINTS } from "@/lib/constants/api-endpoints";
import { get } from "../_get";
import { transformTmdbMovie } from "../_transform";

export interface PopularMoviesResult {
  movies: Movie[];
  page: number;
  totalPages: number;
  totalResults: number;
}

export async function fetchPopularMovies(
  page: number = 1,
): Promise<PopularMoviesResult> {
  const raw = await get<TmdbPaginatedResponse<TmdbMovie>>(
    MOVIE_API_ENDPOINTS.MOVIE_POPULAR,
    { page },
    CACHE.SHORT,
  );
  return {
    movies: raw.results.map(transformTmdbMovie),
    page: raw.page,
    totalPages: raw.total_pages,
    totalResults: raw.total_results,
  };
}
