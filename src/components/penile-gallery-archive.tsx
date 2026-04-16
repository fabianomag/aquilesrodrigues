"use client";

import { useMemo, useState } from "react";
import { PenileCase } from "@/lib/gallery-data";
import { PenileFeedCard } from "@/components/penile-feed-card";
import { PortfolioAccessModal } from "@/components/portfolio-access-modal";
import { clsx } from "clsx";

interface PenileGalleryArchiveProps {
  data: PenileCase[];
}

const groups = [
  {
    id: "mini",
    label: "Mini",
    description: "Ganhos mais contidos, focados em confiança visual, acabamento e mudança gradual de leitura.",
  },
  {
    id: "average",
    label: "Médio",
    description: "Casos em que a espessura fica mais evidente e o resultado ganha mais presença em proporção.",
  },
  {
    id: "hung",
    label: "Alta presença",
    description: "Casos com maior volume total, impacto visual alto e mais presença flácida.",
  },
] as const;

export function PenileGalleryArchive({ data }: PenileGalleryArchiveProps) {
  const [activeGroup, setActiveGroup] = useState<(typeof groups)[number]["id"]>("mini");
  const [reservedItem, setReservedItem] = useState<PenileCase | null>(null);

  const activeConfig = groups.find((group) => group.id === activeGroup)!;
  const activeCases = useMemo(
    () =>
      data
        .filter((item) => item.category === activeGroup)
        .sort((a, b) => a.mlTotal - b.mlTotal),
    [activeGroup, data],
  );

  return (
    <div className="rounded-md border border-black/15 bg-[#f7ead8]">
      <div className="border-b border-black/10 px-6 py-8 sm:px-8">
        <p className="text-xs uppercase tracking-[0.28em] text-[#b96f2b]">
          Arquivo público por volume
        </p>
        <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h3 className="font-display text-section text-[#17110e]">
              Resultados públicos organizados por volume, contorno e faixa de ml.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[#5b4c42] sm:text-lg">
              Compare ganho visual, presença flácida e progressão por categoria sem perder
              a leitura do caso. Se quiser avaliar fotos em ereção e material mais detalhado,
              o próximo passo fica dentro de cada card, em fluxo reservado.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {groups.map((group) => (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveGroup(group.id)}
                className={clsx(
                  "border px-4 py-3 text-xs uppercase tracking-[0.16em] transition-colors",
                  activeGroup === group.id
                    ? "rounded-md border-[#b96f2b]/25 bg-[#ead0b5] text-[#17110e]"
                    : "rounded-md border-black/10 bg-white/35 text-[#6a5b4e] hover:border-black/20 hover:text-[#17110e]",
                )}
              >
                {group.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 py-6 sm:px-8 sm:py-8">
        <p className="max-w-3xl text-sm leading-relaxed text-[#5b4c42] sm:text-base">
          <span className="font-medium text-[#17110e]">{activeConfig.label}.</span> {activeConfig.description}
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {activeCases.map((item) => (
            <PenileFeedCard key={item.id} item={item} onOpenReserved={setReservedItem} />
          ))}
        </div>
      </div>

      <PortfolioAccessModal item={reservedItem} onClose={() => setReservedItem(null)} />
    </div>
  );
}
