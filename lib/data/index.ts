export { getRequestContext, getServerContext } from "./context";
export type { DataLayerContext } from "./context";

export {
  fetchTrendingMovies,
  fetchPopularMovies,
  fetchDiscoverMovies,
  fetchSearchMovies,
  fetchMovieDetails,
} from "./public";
export type {
  PopularMoviesResult,
  DiscoverMoviesResult,
  search,
  MovieDetailsResult,
} from "./public";

