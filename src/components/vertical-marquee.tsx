import { clsx } from "clsx";

interface VerticalMarqueeProps {
  items: string[];
  direction?: "up" | "down";
  durationSeconds?: number;
}

export function VerticalMarquee({
  items,
  direction = "up",
  durationSeconds = 16,
}: VerticalMarqueeProps) {
  const repeatedItems = [...items, ...items];

  return (
    <div className="relative h-[360px] overflow-hidden rounded-md border border-black/15 bg-[#f7ead8] p-4">
      <div
        className={clsx(
          "absolute inset-x-4 top-4 flex flex-col gap-3",
          direction === "up" ? "vertical-marquee-track" : "vertical-marquee-track-reverse",
        )}
        style={{ ["--marquee-duration" as string]: `${durationSeconds}s` }}
      >
        {repeatedItems.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="rounded-md border border-black/10 bg-[#f1e2cf] px-4 py-5 text-sm uppercase tracking-[0.16em] text-[#17110e]"
          >
            {item}
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#f7ead8] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#f7ead8] to-transparent" />
    </div>
  );
}
