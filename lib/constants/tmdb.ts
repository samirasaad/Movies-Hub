/**
 * TMDB configuration and environment helpers.
 *
 * Centralises reading and validating TMDB-related env vars so that
 * individual data-layer modules don't have to touch process.env directly.
 */

/** Base URL for TMDB API (v3). */
export const TMDB_BASE_URL =
  process.env.TMDB_BASE_URL ?? "https://api.themoviedb.org/3";

function requireEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`${name} required. Add it to your .env.local file.`);
  }
  return value;
}

/** Validated TMDB API Key (v3), with any "Bearer " prefix stripped. */
export function getTmdbApiKey(): string {
  const key = requireEnv("TMDB_API_KEY").replace(/^Bearer\s+/i, "");
  if (key.length > 50) {
    throw new Error(
      "TMDB_API_KEY looks wrong. Use the API Key (v3), not the access token.",
    );
  }
  return key;
}



