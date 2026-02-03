import Link from "next/link";
import { buildPaginationUrl } from "@/lib/utils/pagination";

type PaginationProps = {
  basePath: string;
  currentPage: number;
  totalPages: number;
  searchParams?: Record<string, string | undefined>;
};

export default function Pagination({
  basePath,
  currentPage,
  totalPages,
  searchParams,
}: PaginationProps) {
  const prevPage = Math.max(1, currentPage - 1);
  const nextPage = Math.min(totalPages, currentPage + 1);
  const prevHref = buildPaginationUrl(basePath, prevPage, searchParams);
  const nextHref = buildPaginationUrl(basePath, nextPage, searchParams);

  return (
    <nav
      className="flex items-center justify-center gap-4 py-8"
      aria-label="Pagination"
    >
      <Link
        href={prevHref}
        className={`flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-white/5 text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400/50 ${
          currentPage <= 1 ? "pointer-events-none opacity-50" : ""
        }`}
        aria-label="Previous page"
        prefetch={false}
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </Link>

      <span className="text-sm font-medium text-white">
        {currentPage} / {totalPages}
      </span>

      <Link
        href={nextHref}
        className={`flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-white/5 text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400/50 ${
          currentPage >= totalPages ? "pointer-events-none opacity-50" : ""
        }`}
        aria-label="Next page"
        prefetch={false}
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </nav>
  );
}
