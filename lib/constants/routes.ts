/**
 * App route paths. Use for Link href, revalidatePath, redirect.
 */
export const ROUTES = {
  HOME: "/",
  MOVIES: "/movies",
  MOVIE_DETAIL: (id: string | number) => `/movies/${id}`,
} as const;
