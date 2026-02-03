type GenreTagProps = {
  name: string;
};

/** Genre tag using Tailwind palette: dark bg, light text, font-medium, no border. */
export function GenreTag({ name }: GenreTagProps) {
  return (
    <span className="rounded-lg bg-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:bg-zinc-700">
      {name}
    </span>
  );
}
