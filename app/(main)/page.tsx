import Pagination from "@/components/common/Pagination";
import { HeroSection } from "@/components/movies/Hero";
import { PopularSection } from "@/components/movies/PopularSection";
import { TrendingSection } from "@/components/movies/TrendingSection";
import { getTrendingMovies, getPopularMovies } from "@/lib/movies";

export default function HomePage() {
  const trendingMovies = getTrendingMovies();
  const popularMovies = getPopularMovies();

  // Transform trending movies to TrendingMovieData format
  const trendingData = trendingMovies.map((movie, index) => ({
    number: index + 1,
    title: movie.title,
    poster: movie.posterUrl,
  }));

  // Transform popular movies to PopularMovieData format
  const popularData = popularMovies.map((movie) => ({
    id: movie.id,
    title: movie.title,
    poster: movie.posterUrl,
    rating: movie.rating,
    category: movie.genres[0] ?? "Action",
    type: movie.type ?? "Movie",
    badge: movie.overlay?.type === "icon" ? movie.overlay.content : undefined,
    badges: movie.overlay?.type === "avatars" ? movie.overlay.content?.split(" ") : undefined,
  }));

  return (
    <main 
      className="min-h-screen bg-background relative"
      style={{
        backgroundImage: "url('/BG.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <HeroSection />
      <TrendingSection movies={trendingData} />
      <PopularSection movies={popularData} />
      <Pagination currentPage={2} totalPages={50} />
    </main>
  );
}
