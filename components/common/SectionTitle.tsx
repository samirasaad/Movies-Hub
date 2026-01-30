type SectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionTitle({ children, className = "text-foreground font-semibold text-lg mb-4" }: SectionTitleProps) {
  return <h2 className={className}>{children}</h2>;
}
