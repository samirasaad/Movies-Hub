type MovieBadgeProps = {
  badge?: string;
  badges?: string[];
};

export function MovieBadge({ badge, badges }: MovieBadgeProps) {
  if (badge) {
    return (
      <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-[#f0883e] flex items-center justify-center text-xs font-bold text-foreground">
        {badge}
      </div>
    );
  }

  if (badges && badges.length > 0) {
    return (
      <div className="absolute bottom-2 right-2 flex items-center gap-1">
        {badges.map((badgeItem, i) => (
          <div
            key={i}
            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-foreground ${
              badgeItem === "S"
                ? "bg-[#f0883e]"
                : "bg-muted"
            }`}
          >
            {badgeItem}
          </div>
        ))}
      </div>
    );
  }

  return null;
}
