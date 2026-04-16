interface HorizontalTickerProps {
  items: string[];
  durationSeconds?: number;
  theme?: "light" | "dark";
  compact?: boolean;
}

export function HorizontalTicker({
  items,
  durationSeconds = 22,
  theme = "light",
  compact = false,
}: HorizontalTickerProps) {
  const repeatedItems = [...items, ...items];
  const isDark = theme === "dark";

  return (
    <div className={`relative overflow-hidden ${compact ? "py-3" : "py-4"}`}>
      <div
        className="horizontal-marquee-track flex min-w-max items-center gap-10"
        style={{ ["--marquee-duration" as string]: `${durationSeconds}s` }}
      >
        {repeatedItems.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className={`flex items-center gap-10 whitespace-nowrap ${isDark ? "text-[#f5ddbe]" : "text-[#17110e]"}`}
          >
            <span className={`font-brand uppercase leading-none tracking-[0.08em] ${compact ? "text-[1.4rem] sm:text-[1.8rem]" : "text-[2rem] sm:text-[2.4rem]"}`}>
              {item}
            </span>
            <span className={`h-2 w-2 rounded-full ${isDark ? "bg-[#f5ddbe]" : "bg-[#17110e]"}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
