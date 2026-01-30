const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-black/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>&copy; {new Date().getFullYear()} MovieBox. All rights reserved.</p>
        <p className="text-[11px]">
          Design inspired by the Movie App concept in Figma.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

