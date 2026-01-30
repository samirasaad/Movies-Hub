import type { Movie } from "@/components/movies/types";

const movies: Movie[] = [
  // Trending movies (numbered 1-6)
  {
    id: "1",
    title: "Squid Game",
    year: "2021",
    rating: 4.6,
    genres: ["Thriller"],
    duration: "1h",
    posterUrl: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    type: "Series",
  },
  {
    id: "2",
    title: "Oppenheimer",
    year: "2023",
    rating: 4.6,
    genres: ["Drama"],
    duration: "3h",
    posterUrl: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    type: "Movie",
  },
  {
    id: "3",
    title: "Spider-Man",
    year: "2021",
    rating: 4.6,
    genres: ["Sci-Fi"],
    duration: "2h 35m",
    posterUrl: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ber.jpg",
    type: "Movie",
  },
  {
    id: "4",
    title: "Avatar",
    year: "2017",
    rating: 4.6,
    genres: ["Action"],
    duration: "2h 21m",
    posterUrl: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    type: "Movie",
  },
  {
    id: "5",
    title: "Dune",
    year: "2023",
    rating: 4.6,
    genres: ["Drama"],
    duration: "1h",
    posterUrl: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    type: "Movie",
  },
  {
    id: "6",
    title: "The Last of Us",
    year: "2014",
    rating: 4.6,
    genres: ["Action"],
    duration: "1h 41m",
    posterUrl: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    type: "Series",
  },
  // Popular movies (grid)
  {
    id: "7",
    title: "Antman & The Wasp Quantumania",
    year: "2023",
    rating: 4.6,
    genres: ["Action"],
    duration: "2h 5m",
    posterUrl: "https://image.tmdb.org/t/p/w500/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg",
    type: "Movie",
  },
  {
    id: "8",
    title: "Air: Courting A Legend",
    year: "2023",
    rating: 4.6,
    genres: ["Action"],
    duration: "1h 52m",
    posterUrl: "https://image.tmdb.org/t/p/w500/76AKQPdH3M8cvsFR9K8JsOzVlbs.jpg",
    type: "Movie",
  },
  {
    id: "9",
    title: "John Wick: Chapter 4",
    year: "2023",
    rating: 4.6,
    genres: ["Action"],
    duration: "2h 49m",
    posterUrl: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    type: "Movie",
  },
  {
    id: "10",
    title: "Mechamato Movie",
    year: "2022",
    rating: 4.6,
    genres: ["Action"],
    duration: "1h 30m",
    posterUrl: "https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
    type: "Movie",
  },
  {
    id: "11",
    title: "Wednesday Season 1",
    year: "2022",
    rating: 4.8,
    genres: ["Action"],
    duration: "45m",
    posterUrl: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    type: "Movie",
    overlay: { type: "icon", content: "E" },
  },
  {
    id: "12",
    title: "Beef",
    year: "2023",
    rating: 4.6,
    genres: ["Action"],
    duration: "30m",
    posterUrl: "https://image.tmdb.org/t/p/w500/smjCtyuVqWfWwfBmGAiXs5fJpye.jpg",
    type: "Movie",
    overlay: { type: "avatars", content: "S S 5" },
  },
  {
    id: "13",
    title: "Valhalla Murders Series",
    year: "2019",
    rating: 4.6,
    genres: ["Action"],
    duration: "45m",
    posterUrl: "https://image.tmdb.org/t/p/w500/e9H8LHUvCKVLVU5PQ9a4yG4vQw.jpg",
    type: "Movie",
  },
  {
    id: "14",
    title: "The Witcher Volume 2",
    year: "2021",
    rating: 4.6,
    genres: ["Action"],
    duration: "1h",
    posterUrl: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
    type: "Movie",
  },
  {
    id: "15",
    title: "Toxic",
    year: "2023",
    rating: 4.6,
    genres: ["Action"],
    duration: "1h 45m",
    posterUrl: "https://image.tmdb.org/t/p/w500/svIDTNUoajS8dLEo7EosxvyAsgJ.jpg",
    type: "Movie",
  },
  {
    id: "16",
    title: "Insider",
    year: "2022",
    rating: 4.6,
    genres: ["Action"],
    duration: "1h 30m",
    posterUrl: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ber.jpg",
    type: "Movie",
  },
  {
    id: "17",
    title: "Race Season 1",
    year: "2023",
    rating: 4.6,
    genres: ["Action"],
    duration: "45m",
    posterUrl: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    type: "Movie",
  },
  {
    id: "18",
    title: "Ghost Doctor",
    year: "2022",
    rating: 4.6,
    genres: ["Action"],
    duration: "1h",
    posterUrl: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    type: "Movie",
  },
];

export const getAllMovies = (): Movie[] => movies;

export const getMovieById = (id: string): Movie | undefined =>
  movies.find((movie) => movie.id === id);

export const getFeaturedMovie = (): Movie | undefined =>
  movies.find((movie) => movie.tag === "Featured") ?? movies[0];

export const getTrendingMovies = (): Movie[] =>
  movies.filter((movie) => ["1", "2", "3", "4", "5", "6"].includes(movie.id));

export const getPopularMovies = (): Movie[] =>
  movies.filter((movie) =>
    ["7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"].includes(
      movie.id,
    ),
  );

// Helper types for section-specific data
export type TrendingMovieData = {
  number: number;
  title: string;
  poster: string;
};

export type PopularMovieData = {
  id?: string;
  title: string;
  poster: string;
  rating: number;
  category: string;
  type: string;
  badge?: string;
  badges?: string[];
};
