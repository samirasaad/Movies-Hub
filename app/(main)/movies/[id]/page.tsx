import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  MovieDetailsHeader,
  MovieDetailsPanel,
  MoviePosterBlock,
} from "@/components/movie-details";
import { fetchMovieDetails } from "@/lib/data";
import { formatPosterOverlay } from "@/lib/utils/format";
import { CACHE } from "@/lib/constants/cache";

type Props = { params: { id: string } };
export const revalidate = CACHE.MEDIUM;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const result = await fetchMovieDetails(id);
  if (!result) return { title: "Movie not found • MovieBox" };
  const { movie } = result;
  return {
    title: `${movie.title} (${movie.year}) • MovieBox`,
    description:
      movie.tagline ||
      `Watch ${movie.title}, rated ${movie.rating.toFixed(1)}/10. Genres: ${movie.genres.join(", ")}.`,
    openGraph: {
      title: movie.title,
      description:
        movie.tagline ||
        `Watch ${movie.title}, rated ${movie.rating.toFixed(1)}/10.`,
      images: [
        {
          url: movie.posterUrl,
          width: 800,
          height: 450,
          alt: `${movie.title} poster`,
        },
      ],
    },
  };
}

export default async function MovieDetailsPage({ params }: Props) {
  const { id } = await params;
  const result = await fetchMovieDetails(id);
  if (!result) notFound();
  const { movie } = result;

  const posterOverlay =
    formatPosterOverlay(movie.releaseDate, movie.status) ?? movie.tagline;
  const backdropSrc = movie.backdropUrl ?? movie.posterUrl;

  return (
    <div className="relative min-h-screen bg-zinc-950">
      {/* Full-width background with dark overlay */}
      <div className="fixed inset-0 z-0 w-full bg-zinc-950">
        {backdropSrc && (
          <>
            <Image
              src={backdropSrc}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-black/70" aria-hidden />
          </>
        )}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-6 pt-20 sm:px-6 sm:pb-8 sm:pt-24 lg:px-8 lg:pb-10 lg:pt-24">
        <MovieDetailsHeader movie={movie} />

        <section className="mt-6 flex flex-col gap-6 sm:max-w-md lg:max-w-sm">
          <MoviePosterBlock
            movie={movie}
            overlayText={posterOverlay || undefined}
          />
        </section>

        <section className="mt-8 sm:mt-10">
          <MovieDetailsPanel movie={movie} />
        </section>
      </div>
    </div>
  );
}
