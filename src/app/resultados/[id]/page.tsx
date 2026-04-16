import { facialGalleryData } from "@/lib/facial-data";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/config";
import { ProcedureImageGallery } from "@/components/procedure-image-gallery";

export default function ResultadoDetalhe({ params }: { params: { id: string } }) {
  const caseData = facialGalleryData.find(c => c.id === params.id);
  if (!caseData) notFound();

  return (
    <div className="min-h-screen bg-[#f7ead8] pt-32 pb-24 section-padding">
      <div className="max-w-5xl mx-auto">

        <Link href="/resultados" className="mb-12 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#5b4c42] transition-colors hover:text-[#17110e]">
          <ArrowLeft size={14} /> Voltar para galeria
        </Link>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="striped-card-shell">
            <div className="striped-card-panel overflow-hidden bg-[#f1e2cf] p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md sm:aspect-square">
                <BeforeAfterSlider beforeImage={caseData.beforeImage} afterImage={caseData.afterImage} />
              </div>
            </div>
          </div>

          <div>
            <span className="inline-block rounded-md border border-black/10 bg-[#f1e2cf] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#17110e]">
              {caseData.procedure}
            </span>
            <h1 className="mt-6 font-display text-4xl leading-[0.98] text-[#17110e] sm:text-5xl">
              {caseData.caption}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#4f4036]">
              {caseData.description}
            </p>

            <h4 className="mt-10 text-[10px] uppercase tracking-[0.18em] text-[#b96f2b]">
              O que foi realizado
            </h4>
            <ul className="mb-12 mt-6 space-y-4">
              {caseData.details.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-4 text-[#17110e]">
                  <div className="mt-1 rounded-full bg-[#ead0b5] p-1">
                    <CheckCircle size={14} className="text-[#17110e]" />
                  </div>
                  <span className="text-base leading-relaxed text-[#5b4c42]">{detail}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-black/10 pt-8">
              <a
                href={whatsappUrl(`Olá Dr. Aquiles! Estava olhando o caso de ${caseData.procedure} no site e gostaria de uma avaliação.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-md bg-[#17110e] px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-[#fff8f0] transition-colors hover:bg-[#2a211d] sm:w-auto"
              >
                Gostei deste resultado
              </a>
            </div>
          </div>
        </div>

        <ProcedureImageGallery
          eyebrow="Mais imagens"
          title="Galeria complementar do caso"
          description="A página do procedimento ganha espaço para mais de uma imagem, ajudando a comparar ângulos e leitura geral do resultado sem depender de uma única foto."
          images={caseData.galleryImages}
          captionPrefix="Imagem do caso"
        />

      </div>
    </div>
  );
}
