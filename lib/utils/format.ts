/**
 * Format movie display values
 */

export function formatVoteCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return String(n);
}

export function formatCurrency(value: number | undefined): string {
  if (value == null || value === 0) return "—";
  if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(1)} Billion`;
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)} Million`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(1)}K`;
  return `$${value.toLocaleString()}`;
}

export function formatReleaseDateDisplay(
  releaseDate: string,
  status?: string,
): string {
  if (!releaseDate) return "—";
  try {
    const date = new Date(releaseDate);
    if (Number.isNaN(date.getTime())) return releaseDate;
    const formatted = date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return status ? `${formatted} (${status})` : formatted;
  } catch {
    return releaseDate;
  }
}

/** Poster overlay text when movie is released (e.g. "Only in theaters · December 26, 2024"). */
export function formatPosterOverlay(
  releaseDate: string | undefined,
  status: string | undefined,
): string | undefined {
  if (!releaseDate || status !== "Released") return undefined;
  try {
    const date = new Date(releaseDate);
    if (Number.isNaN(date.getTime())) return undefined;
    const formatted = date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    return `Only in theaters · ${formatted}`;
  } catch {
    return undefined;
  }
}
