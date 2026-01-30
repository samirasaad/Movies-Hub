export type Movie = {
  id: string;
  title: string;
  year: string;
  rating: number;
  genres: string[];
  duration: string;
  posterUrl: string;
  tag?: string;
  type?: "Movie" | "Series"; // For Popular section: "Action • Movie" or "Action • Series"
  overlay?: {
    type: "avatars" | "icon";
    content?: string; // For avatars: "S S 5" or "E" for icon
  };
};

