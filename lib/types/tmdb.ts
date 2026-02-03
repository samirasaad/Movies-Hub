/** Raw TMDB API types */

export interface TmdbPaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface TmdbMovie {
  id: number;
  title: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date: string;
  overview: string;
  vote_average: number;
  genre_ids: number[];
}

export interface TmdbGenre {
  id: number;
  name: string;
}

/** Movie details response (GET /movie/{id}) */
export interface TmdbMovieDetails extends Omit<TmdbMovie, "genre_ids"> {
  runtime: number | null;
  tagline: string | null;
  budget: number;
  revenue: number;
  status: string;
  homepage: string | null;
  imdb_id: string | null;
  vote_count: number;
  genres: Array<{ id: number; name: string }>;
  production_countries: Array<{ iso_3166_1: string; name: string }>;
  spoken_languages: Array<{ english_name: string; iso_639_1: string; name: string }>;
  production_companies: Array<{ id: number; name: string }>;
}
