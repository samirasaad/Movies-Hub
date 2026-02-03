const IMG_BASE = "https://image.tmdb.org/t/p";

export const buildImageUrl = (path: string | null, size = "w500") =>
  path ? `${IMG_BASE}/${size}${path}` : "";