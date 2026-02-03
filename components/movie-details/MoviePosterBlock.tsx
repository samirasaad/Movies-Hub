import Image from "next/image";
import type { MovieDetails } from "@/lib/types/movie";

type MoviePosterBlockProps = {
  movie: MovieDetails;
  overlayText?: string;
};

export function MoviePosterBlock({ movie, overlayText }: MoviePosterBlockProps) {
  return (
    <div className="relative aspect-2/3 w-full overflow-hidden rounded-2xl bg-zinc-900 ring-1 ring-white/10">
      <Image
        src={movie.posterUrl || "/movie-placeholder.jpg"}
        alt={`${movie.title} poster`}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
        priority
      />
      {overlayText && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/90 via-black/40 to-transparent p-4 pt-12">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-white sm:text-sm">
            {overlayText}
          </p>
        </div>
      )}
    </div>
  );
}
