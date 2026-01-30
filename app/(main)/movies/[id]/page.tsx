import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllMovies, getMovieById } from "@/lib/movies";

type MovieDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export const revalidate = 60;

export const generateStaticParams = () =>
  getAllMovies().map((movie) => ({ id: movie.id }));

export const generateMetadata = async ({
  params,
}: MovieDetailsPageProps): Promise<Metadata> => {
  const { id } = await params;
  const movie = getMovieById(id);

  if (!movie) {
    return {
      title: "Movie not found • MovieBox",
    };
  }

  return {
    title: `${movie.title} (${movie.year}) • MovieBox`,
    description: `Watch ${movie.title}, rated ${movie.rating.toFixed(
      1,
    )}/10. Genres: ${movie.genres.join(", ")}.`,

    openGraph: {
        title: movie.title,
        description: `Watch ${movie.title}, rated ${movie.rating.toFixed(
          1,
        )}/10.`,
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
};

const MovieDetailsPage = async ({ params }: MovieDetailsPageProps) => {
  const { id } = await params;
  const movie = getMovieById(id);

  if (!movie) {
    return notFound();
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
        <div className="relative overflow-hidden rounded-3xl bg-zinc-900/80 ring-1 ring-white/10">
          <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
            <Image
              src={movie.posterUrl ?? "/window.svg"}
              alt={movie.title}
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 60vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </div>

          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-wrap items-center gap-3 text-[11px] text-zinc-300">
              {movie.tag ? (
                <span className="rounded-full bg-red-600/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                  {movie.tag}
                </span>
              ) : null}
              <span className="rounded-full bg-zinc-900/80 px-2 py-0.5">
                {movie.year}
              </span>
              <span className="h-0.5 w-0.5 rounded-full bg-zinc-500" />
              <span>{movie.duration}</span>
              <span className="h-0.5 w-0.5 rounded-full bg-zinc-500" />
              <span className="flex items-center gap-1 text-amber-400">
                ★{" "}
                <span className="font-semibold">
                  {movie.rating.toFixed(1)}
                </span>
              </span>
            </div>

            <h1 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
              {movie.title}
            </h1>

            <div className="flex flex-wrap gap-2 text-[11px] text-zinc-300">
              {movie.genres.map((genre) => (
                <span
                  key={genre}
                  className="rounded-full bg-zinc-900/80 px-3 py-1"
                >
                  {genre}
                </span>
              ))}
            </div>

            <div className="mt-2 flex flex-wrap gap-3 text-xs text-zinc-300">
              <button className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-[11px] font-semibold text-black shadow-sm hover:bg-zinc-100">
                ▶ Play movie
              </button>
              <button className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold text-white hover:bg-white/10">
                + Add to watchlist
              </button>
            </div>
          </div>
        </div>

        <aside className="space-y-5 rounded-3xl bg-zinc-950/60 p-5 ring-1 ring-white/10 sm:p-6 lg:p-7">
          <div>
            <h2 className="text-sm font-semibold text-white">Overview</h2>
            <p className="mt-2 text-xs leading-relaxed text-zinc-400 sm:text-sm">
              In a city that never sleeps, {movie.title} follows a group of
              strangers whose lives unexpectedly collide over the course of one
              night. As secrets surface and choices are made, the line between
              right and wrong begins to blur.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs text-zinc-300 sm:text-sm">
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-wide text-zinc-500">
                Release year
              </p>
              <p>{movie.year}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-wide text-zinc-500">
                Duration
              </p>
              <p>{movie.duration}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-wide text-zinc-500">
                Rating
              </p>
              <p>{movie.rating.toFixed(1)} / 10</p>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-wide text-zinc-500">
                Genres
              </p>
              <p>{movie.genres.join(", ")}</p>
            </div>
          </div>

          <div className="space-y-2 text-[11px] text-zinc-400 sm:text-xs">
            <p>
              This is demo data. Replace it later with real content from your
              movie API while keeping the layout and types.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default MovieDetailsPage;

