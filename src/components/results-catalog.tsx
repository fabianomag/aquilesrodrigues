"use client";

import { useMemo, useState } from "react";
import { FacialCase } from "@/lib/facial-data";
import { PenileCase } from "@/lib/gallery-data";
import { ResultsProcedureFeatureCard } from "@/components/results-procedure-feature-card";
import { clsx } from "clsx";

type ResultCatalogItem =
  | {
      id: string;
      filterKey: string;
      label: string;
      type: "penile";
      data: PenileCase;
    }
  | {
      id: string;
      filterKey: string;
      label: string;
      type: "facial";
      data: FacialCase;
    };

interface ResultsCatalogProps {
  penileCase: PenileCase;
  facialCases: FacialCase[];
}

const filterLabels: Record<string, string> = {
  all: "Todos",
  "preenchimento-peniano": "Preenchimento peniano",
  rinomodelacao: "Rinomodelação",
  mandibula: "Mandíbula",
  mento: "Mento",
  labial: "Labial",
  botox: "Botox",
  alectomia: "Alectomia",
  bichectomia: "Bichectomia",
};

export function ResultsCatalog({ penileCase, facialCases }: ResultsCatalogProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const items = useMemo<ResultCatalogItem[]>(
    () => [
      {
        id: penileCase.id,
        filterKey: "preenchimento-peniano",
        label: "Preenchimento peniano",
        type: "penile",
        data: penileCase,
      },
      ...facialCases.map((caseItem) => ({
        id: caseItem.id,
        filterKey: caseItem.id,
        label: caseItem.procedure,
        type: "facial" as const,
        data: caseItem,
      })),
    ],
    [facialCases, penileCase],
  );

  const visibleItems = activeFilter === "all"
    ? items
    : items.filter((item) => item.filterKey === activeFilter);

  const filters = [
    { key: "all", label: "Todos" },
    ...items.map((item) => ({ key: item.filterKey, label: item.label })),
  ].filter((filter, index, arr) => arr.findIndex((item) => item.key === filter.key) === index);

  return (
    <div className="mt-10">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter.key}
            type="button"
            onClick={() => setActiveFilter(filter.key)}
            className={clsx(
              "rounded-md border px-4 py-3 text-xs uppercase tracking-[0.16em] transition-colors",
              activeFilter === filter.key
                ? "border-[#b96f2b]/25 bg-[#ead0b5] text-[#17110e]"
                : "border-black/10 bg-[#f1e2cf] text-[#6a5b4e] hover:border-black/20 hover:text-[#17110e]",
            )}
          >
            {filterLabels[filter.key] ?? filter.label}
          </button>
        ))}
      </div>

      <div className="mt-14 space-y-8">
        {visibleItems.map((item, index) => (
          <ResultsProcedureFeatureCard
            key={item.id}
            id={item.id}
            eyebrow={item.type === "penile" ? "Procedimento íntimo" : item.data.procedure}
            title={item.type === "penile" ? "Preenchimento peniano" : item.data.caption}
            description={
              item.type === "penile"
                ? "A galeria pública fica na página do procedimento, organizada por volume e categoria. Fotos em ereção e material mais explícito seguem em fluxo reservado."
                : item.data.description
            }
            href={
              item.type === "penile"
                ? "/preenchimento-peniano#resultados"
                : `/resultados/${item.id}`
            }
            ctaLabel={item.type === "penile" ? "Abrir página do procedimento" : "Ver caso completo"}
            beforeImage={item.type === "facial" ? item.data.beforeImage : undefined}
            afterImage={item.data.afterImage}
            imageAlt={item.type === "penile" ? "Prévia reservada do preenchimento peniano" : item.data.caption}
            details={
              item.type === "penile"
                ? [
                    "Arquivo público por Mini, Médio e Alta presença.",
                    "Acesso privado para fotos em ereção e casos com mais detalhe visual.",
                  ]
                : item.data.details
            }
            sensitive={item.type === "penile"}
          />
        ))}
      </div>
    </div>
  );
}
