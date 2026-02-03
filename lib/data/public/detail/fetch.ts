import type { Movie } from "@/lib/types/movie";
import type { TmdbMovie } from "@/lib/types/tmdb";
import { CACHE } from "@/lib/constants/cache";
import { MOVIE_API_ENDPOINTS } from "@/lib/constants/api-endpoints";
import { get } from "../_get";
import { transformTmdbMovie } from "../_transform";

type TmdbMovieDetail = TmdbMovie & { runtime?: number | null };

export async function fetchMovieDetails(id: string): Promise<Movie | null> {
  try {
    const raw = await get<TmdbMovieDetail>(
      MOVIE_API_ENDPOINTS.MOVIE_DETAIL(id),
      {},
      CACHE.MEDIUM,
    );
    const movie = transformTmdbMovie(raw);
    const h = raw.runtime ? Math.floor(raw.runtime / 60) : 0;
    const m = raw.runtime ? raw.runtime % 60 : 0;
    const duration = raw.runtime
      ? [h && `${h}h`, m && `${m}m`].filter(Boolean).join(" ")
      : "";
    return { ...movie, duration };
  } catch(error) {
    console.log('error',error);
    return null;
  } finally {
  }
}
