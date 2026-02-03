import type { MovieDetails } from "@/lib/types/movie";
import type { TmdbMovieDetails } from "@/lib/types/tmdb";
import { CACHE } from "@/lib/constants/cache";
import { MOVIE_API_ENDPOINTS } from "@/lib/constants/api-endpoints";
import { get } from "../_get";
import { transformTmdbMovieDetails } from "../_transform";

/**
 * Result shape for movie details, aligned with other data-layer results
 * (PopularMoviesResult, DiscoverMoviesResult, etc.).
 */
export interface MovieDetailsResult {
  movie: MovieDetails;
}

/**
 * Fetches movie details from TMDB by id. Uses get() + transform to app
 * MovieDetails model. Use in Server Components. Returns null when the
 * movie is not found or the request fails.
 */
export async function fetchMovieDetails(
  id: string,
): Promise<MovieDetailsResult | null> {
  try {
    const raw = await get<TmdbMovieDetails>(
      MOVIE_API_ENDPOINTS.MOVIE_DETAIL(id),
      {},
      CACHE.MEDIUM,
    );
    const movie = transformTmdbMovieDetails(raw);
    return { movie };
  } catch {
    return null;
  }
}
