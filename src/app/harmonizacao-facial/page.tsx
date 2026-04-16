import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ProcedureFaqSection } from "@/components/procedure-faq-section";
import { ProcedureHeroHeader } from "@/components/procedure-hero-header";
import { whatsappUrl } from "@/lib/config";
import { facialGalleryData } from "@/lib/facial-data";
import { BeforeAfterSlider } from "@/components/before-after-slider";

export const metadata: Metadata = {
  title: "Harmonização Facial",
  description:
    "Harmonização Orofacial com Dr. Aquiles Rodrigues. Rinomodelação, preenchimento mandibular, mento, lábios, botox e alectomia. CROMG 42004.",
};

const procedures = [
  {
    name: "Rinomodelação",
    desc: "Correção do perfil nasal sem cirurgia. Resultado imediato com ácido hialurônico.",
  },
  {
    name: "Preenchimento de Mandíbula",
    desc: "Definição do contorno mandibular para um rosto mais harmônico e masculino.",
  },
  {
    name: "Preenchimento de Mento",
    desc: "Projeção do queixo para equilibrar o perfil facial.",
  },
  {
    name: "Preenchimento Labial",
    desc: "Volume e definição natural dos lábios.",
  },
  {
    name: "Botox",
    desc: "Redução de linhas de expressão e rugas dinâmicas com toxina botulínica.",
  },
  {
    name: "Alectomia",
    desc: "Redução das asas do nariz para um resultado mais refinado.",
  },
  {
    name: "Bichectomia",
    desc: "Afinamento do rosto através da remoção da bola de Bichat, destacando o contorno mandibular.",
  },
];

const heroSummary = [
  "Planejamento individual e leitura anatômica",
  "Rinomodelação, mandíbula, mento, lábios, botox e alectomia",
  "Resultado natural antes de exagero visual",
  "Atendimento direto em Montes Claros e Belo Horizonte",
];

const sectionLinks = [
  { href: "#resultados", label: "Resultados" },
  { href: "#procedimentos", label: "Procedimentos" },
  { href: "#faq", label: "Dúvidas" },
];

const facialFaqCategories = [
  {
    label: "Geral",
    items: [
      {
        question: "A harmonização facial aqui é pensada para resultado natural?",
        answer:
          "Sim. O planejamento busca reforçar estrutura e proporção sem cair em exagero ou leitura artificial.",
      },
      {
        question: "Dr. Aquiles atende perfis masculinos e femininos?",
        answer:
          "Sim. O planejamento parte sempre da anatomia e da intenção estética de cada paciente.",
      },
    ],
  },
  {
    label: "Procedimentos",
    items: [
      {
        question: "Quais são os procedimentos mais procurados?",
        answer:
          "Rinomodelação, mandíbula, mento, lábios, botox e alectomia estão entre os principais. O mix final depende da estrutura do rosto e do objetivo da pessoa.",
      },
      {
        question: "Posso combinar mais de um procedimento?",
        answer:
          "Em muitos casos, sim. O importante é que exista coerência entre indicação, tempo de recuperação e desenho global do resultado.",
      },
    ],
  },
  {
    label: "Consulta",
    items: [
      {
        question: "Como funciona a primeira avaliação?",
        answer:
          "A consulta serve para entender queixa, estrutura facial, limite técnico e o que realmente faz sentido para o seu caso antes de qualquer decisão.",
      },
      {
        question: "O primeiro contato também é pelo WhatsApp?",
        answer:
          "Sim. O primeiro contato acontece pelo WhatsApp, com uma conversa mais organizada para avançar com clareza desde o início.",
      },
    ],
  },
];

export default function HarmonizacaoFacialPage() {
  const featuredCases = facialGalleryData.slice(0, 2);

  return (
    <>
      <ProcedureHeroHeader
        fullBleed
        imageMinHeightClass="min-h-[256px] md:min-h-[512px] lg:min-h-[1024px]"
        eyebrow="Harmonização facial"
        title={
          <>
            Harmonização
            <br />
            facial
          </>
        }
        intro="Refinamento, estrutura e presença com leitura anatômica, proporção e naturalidade como eixo do planejamento."
        details="A harmonização aqui não entra para endurecer o rosto nem padronizar feições. Ela entra para corrigir desequilíbrios, reforçar contorno e deixar o resultado mais convincente ao vivo."
        imageSrc="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1500&q=80"
        imageAlt="Close editorial de rosto feminino"
        summaryItems={heroSummary}
        ctaEyebrow="Comece do jeito certo"
        ctaTitle="Agende sua avaliação"
        ctaDescription="O primeiro passo organiza queixa, estrutura facial e objetivo estético antes de qualquer indicação de procedimento."
        ctaHref={whatsappUrl("Olá Dr. Aquiles! Gostaria de saber mais sobre harmonização facial.")}
        ctaLabel="Agendar avaliação"
        ctaCaption="Contato direto, claro e sem intermediação."
        sectionLinks={sectionLinks}
      />

      {/* Featured Slider Area */}
      <section className="py-20 bg-[#f7ead8] border-y border-black/10 section-padding relative overflow-hidden" id="resultados">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 items-center relative z-10">
           <div>
              <Reveal>
                <h2 className="font-display text-section text-[#17110e] mb-6">Mudanças reais.</h2>
                <p className="text-[#4f4036] font-sans leading-relaxed mb-8 max-w-sm">
                   Veja diretamente a diferença que contorno e proporção trazem. Arraste a linha para comparar os resultados.
                </p>
                <Link
                  href="/resultados"
                  className="inline-flex rounded-md border border-black/10 px-8 py-4 text-sm uppercase tracking-[0.16em] text-[#17110e] transition-colors hover:border-black/20 hover:bg-[#f1e2cf]"
                >
                  Ver galeria completa <ArrowRight size={16} />
                </Link>
              </Reveal>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featuredCases.map((fc, i) => (
                <Reveal key={fc.id} delay={i*150}>
                  <div className="striped-card-shell">
                     <div className="striped-card-panel overflow-hidden bg-[#f1e2cf] p-1">
                     <div className="relative aspect-[4/5] overflow-hidden rounded-md sm:aspect-square">
                        <BeforeAfterSlider beforeImage={fc.beforeImage} afterImage={fc.afterImage} />
                     </div>
                     <div className="mt-1 border-t border-black/10 p-4 text-center">
                       <span className="font-sans tracking-[0.2em] font-medium text-[10px] uppercase block mb-1 text-[#17110e]">
                          {fc.procedure}
                       </span>
                     </div>
                     </div>
                  </div>
                </Reveal>
              ))}
           </div>
        </div>
      </section>

      {/* Procedures */}
      <section className="bg-[#f3e3d2] py-20 md:py-28 section-padding" id="procedimentos">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="font-display text-section text-[#17110e] mb-12">
              Procedimentos
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {procedures.map((proc, i) => (
              <Reveal key={proc.name} delay={i * 100}>
                <div className="flex gap-4">
                  <CheckCircle size={20} className="text-[#17110e] shrink-0 mt-1.5 opacity-80" />
                  <div>
                    <h3 className="font-display text-2xl text-[#17110e] mb-2">
                      {proc.name}
                    </h3>
                    <p className="text-[#5b4c42] font-sans text-sm leading-relaxed">{proc.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcedureFaqSection
        theme="light"
        eyebrow="Tem dúvidas? Estamos aqui para orientar."
        title="Entenda o que faz sentido para o seu rosto."
        subtitle="Resultado natural, combinação de procedimentos, consulta inicial e próximos passos organizados em um formato mais claro."
        categories={facialFaqCategories}
        className="bg-[#f7ead8]"
      />

      {/* CFO compliance note */}
      <section className="py-16 section-padding bg-[#f1e2cf]">
        <div className="max-w-3xl mx-auto text-center border-t border-black/10 pt-16">
          <Reveal>
            <p className="font-sans text-xs leading-relaxed uppercase tracking-widest max-w-xl mx-auto text-[#7c6d62]">
              Todos os procedimentos seguem as normas do Conselho Federal de Odontologia
              (Resoluções CFO-196/2019 e CFO-198/2019). Imagens representativas de resultados acompanham 
              autorização expressa em conformidade ética.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
