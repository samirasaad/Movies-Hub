const TMDB_BASE = process.env.TMDB_BASE_URL ?? "https://api.themoviedb.org/3";

export async function get<T>(
  path: string,
  params: Record<string, string | number | boolean | undefined> = {},
  revalidate?: number,
): Promise<T> {
  let key = process.env.TMDB_API_KEY?.trim().replace(/^Bearer\s+/i, "") ?? "";
 
  if (!key) throw new Error("TMDB_API_KEY required. Add it to .env.local");
  if (key.length > 50) {
    throw new Error(
      "TMDB_API_KEY looks wrong. Use the API Key (v3) from https://www.themoviedb.org/settings/api — NOT the Access Token. The API key is ~32 characters.",
    );
  }
  const q = new URLSearchParams({ api_key: key });
  for (const [k, v] of Object.entries(params))
    if (v != null && v !== "") q.set(k, String(v));
  const url = `${TMDB_BASE}${path}?${q}`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  let res: Response;
  try {
    res = await fetch(url, {
      signal: controller.signal,
      next: revalidate != null ? { revalidate } : undefined,
    });
  } finally {
    clearTimeout(timeout);
  }

  const bodyText = await res.text();
  if (!res.ok) {
    let msg = `TMDB ${res.status}`;
    try {
      const parsed = JSON.parse(bodyText) as { status_message?: string };
      if (parsed.status_message) msg += `: ${parsed.status_message}`;
    } catch {
      /* ignore */
    }
    throw new Error(msg);
  }
  return JSON.parse(bodyText) as T;
}
