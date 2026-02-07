import Pagination from "@/components/common/Pagination";
import { SearchSection } from "@/components/movies/SearchSection";
import type { MovieCardData } from "@/components/movies/types";
import { ROUTES } from "@/lib/constants/routes";
import { fetchSearchMovies } from "@/lib/data";

type Props = {
  searchParams: Promise<{
    page?: string;
    q?: string;
  }>;
};

export default async function SearchMoviesResultPage({ searchParams }: Props) {
  const params = await searchParams;
  const page = params.page ? parseInt(params.page, 10) : 1;
  const query = params.q?.trim() ?? "";

  if (!query) {
    return (
      <main className="min-h-screen bg-background relative flex items-center justify-center px-4">
        <div className="mx-auto max-w-xl rounded-2xl bg-black/60 px-6 py-8 text-center shadow-xl backdrop-blur">
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Search movies
          </h1>
          <p className="mt-4 text-sm text-zinc-300 sm:text-base">
            Type a movie title in the search box above to see results.
          </p>
        </div>
      </main>
    );
  }

  const result = await fetchSearchMovies({ query, page });

  const searchResultsData: MovieCardData[] = result.movies.map((m) => ({
    id: m.id,
    title: m.title,
    poster: m.posterUrl,
    rating: m.rating,
    category: m.genres[0] ?? "Action",
    type: m.type ?? "Movie",
    badge: m.overlay?.type === "icon" ? m.overlay.content : undefined,
    badges:
      m.overlay?.type === "avatars"
        ? m.overlay.content?.split(" ")
        : undefined,
  }));

  return (
    <main
      className="min-h-screen bg-background relative pt-24"
      style={{
        backgroundImage: "url('/BG.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <SearchSection
        results={searchResultsData}
        title={`Search results for "${query}"`}
        subtitle={`${result.totalResults.toLocaleString()} results found`}
      />

      {result.totalPages > 1 && (
        <Pagination
          basePath={ROUTES.SEARCH_RESULTS}
          currentPage={page}
          totalPages={result.totalPages}
          searchParams={params}
        />
      )}
    </main>
  );
}

