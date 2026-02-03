import type { Movie } from "@/lib/types/movie";
import type { TmdbMovie } from "@/lib/types/tmdb";
import { CACHE } from "@/lib/constants/cache";
import { MOVIE_API_ENDPOINTS } from "@/lib/constants/api-endpoints";
import { get } from "../_get";
import { transformTmdbMovie } from "../_transform";

type TimeWindow = "day" | "week";

export async function fetchTrendingMovies(
  timeWindow: TimeWindow = "day",
): Promise<Movie[]> {
  const raw = await get<{ results: TmdbMovie[] }>(
    MOVIE_API_ENDPOINTS.TRENDING_MOVIE(timeWindow),
    {},
    CACHE.SHORT,
  );
  return raw.results.map(transformTmdbMovie);
}
