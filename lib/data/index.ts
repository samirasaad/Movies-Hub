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
  SearchMoviesResult,
  MovieDetailsResult,
} from "./public";

