"use client";

import { useState } from "react";
import { PenileCase } from "@/lib/gallery-data";
import { ChevronDown, Lock } from "lucide-react";
import { BeforeAfterSlider } from "./before-after-slider";
import { ProcedureSuitabilityWizard } from "@/components/procedure-suitability-wizard";

const categoryLabels: Record<PenileCase["category"], string> = {
  mini: "Mini",
  average: "Médio",
  hung: "Alta presença",
};

export function PenileFeedCard({ item }: { item: PenileCase }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mb-10 overflow-hidden rounded-md border border-black/15 bg-[#fbf4ec] sm:mb-12">
      <div className="group relative aspect-[4/5] w-full bg-[#ead0b5] sm:aspect-square">
        <BeforeAfterSlider beforeImage={item.beforeImage} afterImage={item.afterImage} />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/2 bg-gradient-to-t from-[#17110e]/80 to-transparent" />

        <div className="pointer-events-none absolute bottom-6 left-6 right-6 z-20 space-y-4">
        <div className="flex flex-wrap gap-2 text-[10px] font-sans tracking-widest uppercase">
            <span className="border border-white/15 bg-[#17110e]/85 px-3 py-1 text-[#f6e5d4] shadow-sm">
              {categoryLabels[item.category]}
            </span>
            <span className="border border-white/15 bg-[#17110e]/85 px-3 py-1 text-[#f6e5d4] shadow-sm">
              {item.mlTotal} ml
            </span>
            <span className="border border-white/15 bg-[#fff8f0]/94 px-3 py-1 text-[#17110e] shadow-sm">
              {item.areas.join(" + ")}
            </span>
          </div>
          <p className="max-w-sm font-display text-xl leading-snug text-[#fff8f0] drop-shadow-lg sm:text-2xl">
            {item.caption}
          </p>
        </div>
      </div>

      <div className="border-t border-black/10 bg-[#f3e3d2] p-6">
        <p className="max-w-xl font-sans text-sm leading-relaxed text-[#5b4c42]">
          Caso público para leitura de contorno, proporção e ganho visual. Se quiser comparar
          resultado em ereção e material mais explícito, o acesso continua em fluxo reservado.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-2">
            <span className="block text-[11px] uppercase tracking-[0.16em] text-[#8b5e3c]">
              Arquivo público por volume
            </span>
            <span className="block text-[11px] uppercase tracking-[0.16em] text-[#5b4c42]">
              Fotos em ereção liberadas em fluxo reservado
            </span>
          </div>
          <button
            type="button"
            onClick={() => setExpanded((current) => !current)}
            className="flex w-full items-center justify-center gap-2 rounded-md border border-[#17110e]/15 bg-[#17110e] px-6 py-4 text-xs font-medium uppercase tracking-[0.1em] text-[#fff8f0] transition-colors duration-300 hover:bg-[#2a211d] sm:w-auto"
          >
            <Lock size={14} /> Ver fotos em ereção
            <ChevronDown
              size={14}
              className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        <div className={`grid transition-all duration-300 ${expanded ? "mt-6 grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
          <div className="overflow-hidden">
            <div className="rounded-md border border-black/10 bg-[#fbf4ec] p-3 sm:p-4">
              <ProcedureSuitabilityWizard
                context="portfolio"
                caseId={item.id}
                caseLabel={`${item.caption} — fotos em ereção`}
                compact
                theme="light"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
