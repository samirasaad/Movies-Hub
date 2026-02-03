/** App movie types */

/*------------------------------------------------------------------------------------------------
 * Public movie types
 *------------------------------------------------------------------*/
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
  tmdbId: number;
}

export interface MovieDetails extends Movie {
  tagline?: string;
  budget?: number;
  revenue?: number;
  runtime?: number;
  homepage?: string;
  imdbId?: string;
  productionCompanies?: string[];
  productionCountries?: string[];
  spokenLanguages?: string[];
  status?: string;
  voteCount?: number;
}

export interface MovieSearchParams {
  page?: number;
  query?: string;
  genre?: string;
  year?: string;
  sortBy?: "popularity" | "release_date" | "vote_average" | "title";
  sortOrder?: "asc" | "desc";
}
