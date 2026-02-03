/** UI / view types for movie components */

export interface TrendingMovieData {
  number: number;
  title: string;
  poster: string;
}

export interface PopularMovieData {
  id: string;
  title: string;
  poster: string;
  rating: number;
  category: string;
  type: string;
  badge?: string;
  badges?: string[];
}
