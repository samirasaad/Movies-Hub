import { ROUTES } from "@/lib/constants/routes";
import Link from "next/link";

export default function RootPublicHome() {
  return (
    <main
      className="min-h-screen bg-background relative flex items-center justify-center px-4"
      style={{
        backgroundImage: "url('/BG.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="mx-auto max-w-xl rounded-2xl bg-black/60 px-6 py-8 text-center shadow-xl backdrop-blur">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Welcome to <span className="text-primary">MovieHub</span>
        </h1>

        {/* button to explore movies */}
        <Link 
         href={ROUTES.MOVIES}
         className="bg-primary text-white px-4 py-2 rounded-md">Explore Movies</Link>
      </div>
    </main>
  );
}

