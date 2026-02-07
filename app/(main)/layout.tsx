import type { ReactNode } from "react";
import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
    {/* <nav> with aria-hidden.  so screen readers don't announce an empty nav,
    as nav is a structural element and should be announced by screen readers,
    nav is a client component and we want to avoid hydration errors*/}
      <Suspense fallback={<nav className="backdrop-blur-sm h-16 border-b border-white/10 bg-transparent" aria-hidden />}>
        <Navbar />
      </Suspense>
      {children}
      <Footer />
    </>
  );
}
