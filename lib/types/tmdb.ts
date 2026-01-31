/**
 * TMDB API Response Types
 * Type definitions for The Movie Database API responses
 */

// Base response types
// export interface TmdbPaginatedResponse<T> {
//   page: number;
//   results: T[];
//   total_pages: number;
//   total_results: number;
// }

// // Movie types from TMDB
// export interface TmdbMovie {
//   adult: boolean;
//   backdrop_path: string | null;
//   genre_ids: number[];
//   id: number;
//   original_language: string;
//   original_title: string;
//   overview: string;
//   popularity: number;
//   poster_path: string | null;
//   release_date: string;
//   title: string;
//   video: boolean;
//   vote_average: number;
//   vote_count: number;
// }

// export interface TmdbMovieDetails extends TmdbMovie {
//   belongs_to_collection: {
//     id: number;
//     name: string;
//     poster_path: string | null;
//     backdrop_path: string | null;
//   } | null;
//   budget: number;
//   genres: Array<{
//     id: number;
//     name: string;
//   }>;
//   homepage: string | null;
//   imdb_id: string | null;
//   production_companies: Array<{
//     id: number;
//     logo_path: string | null;
//     name: string;
//     origin_country: string;
//   }>;
//   production_countries: Array<{
//     iso_3166_1: string;
//     name: string;
//   }>;
//   revenue: number;
//   runtime: number | null;
//   spoken_languages: Array<{
//     english_name: string;
//     iso_639_1: string;
//     name: string;
//   }>;
//   status: string;
//   tagline: string | null;
// }

export interface TmdbGenre {
  id: number;
  name: string;
}

// App-specific types (transformed from TMDB)
export interface Movie {
  id: string;
  title: string;
  year: string;
  rating: number;
  genres: string[];
  duration: string;
  posterUrl: string;
  backdropUrl?: string;
  overview: string;
  releaseDate: string;
  tag?: string;
  type?: "Movie" | "Series";
  overlay?: {
    type: "avatars" | "icon";
    content?: string;
  };
  tmdbId: number; // Keep original TMDB ID for API calls
}

export interface MovieDetails extends Movie {
  tagline?: string;
  budget?: number;
  revenue?: number;
  runtime?: number;
  homepage?: string;
  imdbId?: string;
  productionCompanies?: string[];
  spokenLanguages?: string[];
  status?: string;
}

// Search and filter types
export interface MovieSearchParams {
  page?: number;
  query?: string;
  genre?: string;
  year?: string;
  sortBy?: "popularity" | "release_date" | "vote_average" | "title";
  sortOrder?: "asc" | "desc";
}

// Favorites types
export interface FavoriteMovie {
  movieId: string;
  tmdbId: number;
  addedAt: string;
  userId?: string; // For future user-specific favorites
}
