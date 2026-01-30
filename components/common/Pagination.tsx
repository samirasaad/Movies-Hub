type PaginationProps = {
  currentPage?: number;
  totalPages?: number;
  onPrevious?: () => void;
  onNext?: () => void;
};

const Pagination = ({
  currentPage = 2,
  totalPages = 50,
  onPrevious,
  onNext,
}: PaginationProps) => {
  return (
    <nav
      className="flex items-center justify-center gap-4 py-8"
      aria-label="Pagination"
    >
      <button
        onClick={onPrevious}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
        aria-label="Previous page"
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
      </button>

      <span className="text-sm font-medium text-white">
        {currentPage} / {totalPages}
      </span>

      <button
        onClick={onNext}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
        aria-label="Next page"
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
      </button>
    </nav>
  );
};

export default Pagination;
