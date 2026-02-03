import Link from "next/link";
import { ROUTES } from "@/lib/constants/routes";

const Navbar = () => {
  return (
    <nav className="absolute inset-x-0 top-0 z-50 border-b border-white/10 bg-transparent backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <Link href={ROUTES.HOME} className="flex items-center gap-2">
          <div className="relative h-10 w-10">
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-purple-500 via-pink-500 to-yellow-500" />
            <div className="absolute inset-[2px] flex items-center justify-center rounded-full bg-indigo-950">
              <span className="text-lg font-bold text-white">M</span>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

