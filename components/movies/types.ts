/** UI / view types for movie components */

/** One type for movie (popular, search, trending). */
export interface MovieCardData {
  id: string;
  title: string;
  poster: string;
  rating: number;
  category: string;
  type: string;
  badge?: string;
  badges?: string[];
  /** Rank/position (e.g. trending). */
  number?: number;
}
