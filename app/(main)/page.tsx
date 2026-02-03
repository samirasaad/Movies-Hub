import Pagination from "@/components/common/Pagination";
import { HeroSection } from "@/components/movies/Hero";
import { PopularSection } from "@/components/movies/PopularSection";
import { TrendingSection } from "@/components/movies/TrendingSection";
import type { PopularMovieData, TrendingMovieData } from "@/components/movies/types";
import { ROUTES } from "@/lib/constants/routes";
import { fetchPopularMovies, fetchTrendingMovies } from "@/lib/data";

type Props = { searchParams: Promise<{ page?: string; q?: string; genre?: string; year?: string }> };

export default async function HomePage({ searchParams }: Props) {
  const params = await searchParams;
  const page = params.page ? parseInt(params.page, 10) : 1;
  const trending = await fetchTrendingMovies();
  const popular = await fetchPopularMovies(page);
  const trendingData: TrendingMovieData[] = trending.map((m, i) => ({
    number: i + 1,
    title: m.title,
    poster: m.posterUrl,
  }));

  const popularData: PopularMovieData[] = popular.movies.map((m) => ({
    id: m.id,
    title: m.title,
    poster: m.posterUrl,
    rating: m.rating,
    category: m.genres[0] ?? "Action",
    type: m.type ?? "Movie",
    badge: m.overlay?.type === "icon" ? m.overlay.content : undefined,
    badges: m.overlay?.type === "avatars" ? m.overlay.content?.split(" ") : undefined,
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
      <Pagination
        basePath={ROUTES.HOME}
        currentPage={page}
        totalPages={popular.totalPages}
        searchParams={params}
      />
    </main>
  );
}
