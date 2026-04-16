import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { facialGalleryData } from "@/lib/facial-data";
import { penileGalleryData } from "@/lib/gallery-data";
import { ResultsCatalog } from "@/components/results-catalog";

export const metadata: Metadata = {
  title: "Resultados",
  description:
    "Resultados organizados por procedimento: rinomodelação, mandíbula, mento, lábios, botox, alectomia, bichectomia e preenchimento peniano — Dr. Aquiles Rodrigues.",
};

export default function ResultadosPage() {
  const penileReference = penileGalleryData[0];

  return (
    <section className="bg-[#f7ead8] pt-32 pb-20 md:pt-40 md:pb-28 section-padding">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#b96f2b]">
            Resultados
          </p>
          <h1 className="font-display text-hero text-[#17110e] leading-tight mb-6">
            Cada procedimento
            <br />
            pede uma leitura própria.
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-[#4f4036]">
            A página de resultados agora sai da grade genérica e passa a organizar cada
            procedimento como uma peça editorial própria. O conteúdo íntimo continua
            protegido. O restante segue aberto, claro e comparável.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ResultsCatalog penileCase={penileReference} facialCases={facialGalleryData} />
        </Reveal>
      </div>
    </section>
  );
}
