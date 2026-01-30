import Link from "next/link";
import { MoviePoster } from "@/components/common/MoviePoster";
import { MovieBadge } from "@/components/movies/MovieBadge";
import { StarIcon } from "@/components/common/StarIcon";

type PopularMovieCardProps = {
  id?: string;
  title: string;
  poster: string;
  rating: number;
  category: string;
  type: string;
  badge?: string;
  badges?: string[];
};

export function PopularMovieCard({
  id,
  title,
  poster,
  rating,
  category,
  type,
  badge,
  badges,
}: PopularMovieCardProps) {

  return (
    <Link href={id ? `/movies/${id}` : "#"}>
      <article className="group cursor-pointer">
        <div className="relative aspect-2/3 rounded-lg overflow-hidden mb-2">
          <MoviePoster
            src={poster }
            alt={title}
            className="object-contain transition-transform duration-300 group-hover:scale-105 "
          />
          <MovieBadge badge={badge} badges={badges} />
        </div>
        <h3 className="text-foreground text-sm font-medium truncate">
          {title}
        </h3>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mt-0.5">
          <StarIcon />
          <span className="text-[#ffd93d] font-medium">{rating}</span>
          <span className="mx-1">-</span>
          <span>{category}</span>
          <span className="mx-0.5">•</span>
          <span>{type}</span>
        </div>
      </article>
    </Link>
  );
}
