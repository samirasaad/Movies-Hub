import type { MovieDetails } from "@/lib/types/movie";
import { formatCurrency, formatReleaseDateDisplay } from "@/lib/utils/format";
import { GenreTag } from "./GenreTag";

type MovieDetailsPanelProps = {
  movie: MovieDetails;
};

const detailRow = (label: string, value: string | undefined) => ({
  label,
  value: value && value.trim() ? value : "—",
});

export function MovieDetailsPanel({ movie }: MovieDetailsPanelProps) {
  const releaseDisplay = formatReleaseDateDisplay(
    movie.releaseDate,
    movie.status,
  );
  const countries = movie.productionCountries?.join(" · ") ?? "—";
  const languages = movie.spokenLanguages?.join(" · ") ?? "—";
  const companies = movie.productionCompanies?.join(" · ") ?? "—";

  const overview =
    movie.overview ||
    `Watch ${movie.title} — rated ${movie.rating.toFixed(1)}/10.`;

  const rows = [
    detailRow("Overview", overview),
    detailRow("Release date", releaseDisplay),
    detailRow("Countries", countries),
    detailRow("Status", movie.status),
    detailRow("Language", languages),
    detailRow("Budget", formatCurrency(movie.budget)),
    detailRow("Revenue", formatCurrency(movie.revenue)),
    detailRow("Tagline", movie.tagline),
    detailRow("Production Companies", companies),
  ];

  return (
    <section className="space-y-4 rounded-2xl bg-zinc-950/70 p-5 ring-1 ring-white/10 sm:p-6 lg:p-7">
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {movie.genres.map((genre) => (
          <GenreTag key={genre} name={genre} />
        ))}
      </div>

      <div className="space-y-3 text-xs sm:text-sm">
        {rows.map(({ label, value }) => (
          <div
            key={label}
            className="flex flex-col gap-0.5 sm:flex-row sm:flex-nowrap sm:gap-2"
          >
            <span className="w-full shrink-0 text-xs font-medium uppercase tracking-wide text-zinc-500 sm:w-44">
              {label}
            </span>
            <span className="min-w-0 text-zinc-300">{value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
