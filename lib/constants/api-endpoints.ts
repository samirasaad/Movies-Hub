/**
 * External movie API endpoint paths.
 * These are relative paths; the base URL and auth are configured elsewhere.
 */
export const MOVIE_API_ENDPOINTS = {
  MOVIE_POPULAR: "/movie/popular",
  MOVIE_DETAIL: (id: number | string) => `/movie/${id}`,
  SEARCH_MOVIE: "/search/movie",
  DISCOVER_MOVIE: "/discover/movie",
  TRENDING_MOVIE: (window: "day" | "week") => `/trending/movie/${window}`,
} as const;

