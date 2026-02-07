"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ROUTES } from "@/lib/constants/routes";
import SearchInput from "../common/SearchInput";

/**
 * Global navigation bar.
 *
 * - Shows the app logo linking back to the public home page.
 * - Provides a global search input that updates the URL query string
 *   and navigates to the dedicated search results page.
 */
const Navbar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  // unmount:clear the timeout
  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  /**
   * Ref used to debounce search input changes so we don't
   * push a new URL on every single keystroke.
   */
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /**
   * Current "q" value from the URL, used to keep the input
   * in sync when navigating back/forward or sharing links.
   */
  const currentQuery = searchParams.get("q") ?? "";

  /**
   * Handle changes from the search input.
   *
   * - Debounced by ~600ms.
   * - Writes the "q" param into the query string.
   * - Resets "page" when the query changes.
   * - Navigates to the search results route.
   */
  const handleSearchChange = (value: string) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      const trimmed = value.trim();

      if (trimmed) {
        params.set("q", trimmed);
        params.delete("page");
      } else {
        params.delete("q");
        params.delete("page");
      }

      const queryString = params.toString();
      const basePath = ROUTES.SEARCH_RESULTS;
      const href = queryString ? `${basePath}?${queryString}` : basePath;

      router.push(href, { scroll: false });
    }, 600);
  };

  return (
    <nav aria-label="Global navigation" className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-transparent backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8 gap-4">
        {/* App logo / brand – always links to the root public home page */}
        <Link href={ROUTES.HOME} className="flex items-center gap-2">
          <div className="relative h-10 w-10">
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-purple-500 via-pink-500 to-yellow-500" />
            <div className="absolute inset-[2px] flex items-center justify-center rounded-full bg-indigo-950">
              <span className="text-lg font-bold text-white">MH</span>
            </div>
          </div>
        </Link>

        {/* Global search – controlled by URL query string */}
        <div className="mx-auto max-w-lg flex-1 items-center gap-3">
          <SearchInput
            placeholder="Search through 300+ movies online"
            defaultValue={currentQuery}
            onSearchChange={handleSearchChange}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
