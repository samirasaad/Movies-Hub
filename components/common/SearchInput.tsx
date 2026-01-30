/* eslint-disable jsx-a11y/label-has-associated-control */
"use client";

import { useState } from "react";
import Image from "next/image";

type SearchInputProps = {
  placeholder?: string;
  onSearchChange?: (value: string) => void;
};

const SearchInput = ({ placeholder, onSearchChange }: SearchInputProps) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;
    setValue(nextValue);
    onSearchChange?.(nextValue);
  };

  return (
    <div className="relative">
      <label className="sr-only" htmlFor="movie-search">
        Search movies
      </label>
      <input
        id="movie-search"
        type="search"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full rounded-full border border-white/10 bg-white/5 px-4 pr-12 py-4 text-xs text-white placeholder:text-zinc-500 outline-none focus:border-primary focus:ring-1 focus:ring-primary"
      />
      <button
        type="button"
        className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/10 transition-colors"
        aria-label="Movie placeholder"
      >
        <Image
          src="/movie-icon.png"
          alt="Movie placeholder"
          width={24}
          height={24}
          className="object-contain"
        />
      </button>
    </div>
  );
};

export default SearchInput;

