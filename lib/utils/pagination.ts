/**
 * Builds a paginated URL, preserving existing search params.
 * Only adds page when > 1.
 */
export function buildPaginationUrl(
  basePath: string,
  page: number,
  searchParams?: Record<string, string | undefined>,
): string {
  const q = new URLSearchParams();
  if (searchParams) {
    for (const [k, v] of Object.entries(searchParams)) {
      if (v != null && v !== "" && k !== "page") q.set(k, v);
    }
  }
  if (page > 1) q.set("page", String(page));
  const query = q.toString();
  return query ? `${basePath}?${query}` : basePath;
}
