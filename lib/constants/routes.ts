/**
 * App route paths. Use for Link href, revalidatePath, redirect.
 */
export const ROUTES = {
  HOME: "/",
  MOVIES: "/movies",
  MOVIE_DETAIL: (id: string | number) => `/movies/${id}`,
  SEARCH_RESULTS: "/search",
} as const;
