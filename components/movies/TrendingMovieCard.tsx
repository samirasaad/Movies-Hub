import { MoviePoster } from "@/components/common/MoviePoster";

type TrendingMovieCardProps = {
  number: number;
  title: string;
  poster: string;
};

export function TrendingMovieCard({ number, title, poster }: TrendingMovieCardProps) {
  return (
    <div className="relative shrink-0 group">
      {/* Large Number Behind  */}
      <span
        className="absolute left-[25%] top-1/2 -translate-x-10/12 -translate-y-1/2 text-[120px] md:text-[140px] lg:text-[160px] font-extrabold leading-none select-none pointer-events-none"
        style={{
          color: "transparent",
          WebkitTextStroke: "2px #30363d",
        }}
      >
        {number}
      </span>
      {/* Poster */}
      <div className="relative ml-14 w-32 h-48 md:w-40 md:h-60 lg:w-48 lg:h-72 rounded-lg overflow-hidden z-10">
        <MoviePoster
          src={poster}
          alt={title}
          className=" transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
}
