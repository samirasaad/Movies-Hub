
import Image from "next/image";

export function HeroSection() {

  return (
    <section className="relative pt-6 pb-10 px-4 md:px-8 overflow-hidden">
      {/* Hero Poster */}
      <div className="relative h-100  max-w-xl mx-auto">
        <Image
          src="/hero-img.png"
          alt="Hero Poster"
          fill
          className="object-contain"
        />
      </div>

      {/* Headline */}
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
        Find <span className="text-primary">Movies</span> You&apos;ll Love
        <br />
        Without the Hassle
      </h1>
    </section>
  );
}
