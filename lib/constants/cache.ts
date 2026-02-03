/**
 * Central cache config for data layer.
 * Next.js fetch cache: revalidate = ISR (Incremental Static Regeneration) in seconds.
 */

export const CACHE = {
  /** Public TMDB data - 5 min (frequently updated: trending, popular) */
  SHORT: 300,
  /** Public TMDB data - 1 hr (discover, search) */
  MEDIUM: 3600,
  /** Static-ish data - 24 hr (genres, config) */
  LONG: 86400,
  /** User-specific data - no cache */
  NONE: 0,
} as const;
