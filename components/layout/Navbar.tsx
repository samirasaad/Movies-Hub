import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";

const Navbar = () => {
  return (
    <header className="absolute left-0 right-0 top-0 z-50 border-b border-white/10 bg-transparent backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Back Arrow */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          aria-label="Go back"
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

        {/* Logo */}
        <Link href={ROUTES.HOME} className="flex items-center gap-2">
          <div className="relative h-10 w-10">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500" />
            <div className="absolute inset-[2px] flex items-center justify-center rounded-full bg-indigo-950">
              <span className="text-lg font-bold text-white">M</span>
            </div>
          </div>
        </Link>

        {/* User Avatars */}
        <div className="flex items-center gap-2">
          <div className="relative flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-8 w-8 rounded-full border-2 border-indigo-950 bg-gradient-to-br from-purple-400 to-pink-400"
              />
            ))}
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-xs font-semibold text-white">
            3
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

