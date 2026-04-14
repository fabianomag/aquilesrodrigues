import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { portraitImage, whatsappUrl } from "@/lib/config";
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

export default function HarmonizacaoFacialPage() {
  const featuredCases = facialGalleryData.slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <p className="text-xs tracking-[0.3em] font-sans uppercase text-gold-500 mb-4 shadow-sm">
                Especialidade
              </p>
              <h1 className="font-display text-hero text-brand-50 leading-tight">
                Harmonização Facial
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-brand-300 font-sans font-light text-lg leading-relaxed max-w-lg">
                A harmonização orofacial é o equilíbrio entre estética e funcionalidade.
                Cada procedimento é planejado individualmente para respeitar a anatomia
                do seu rosto e entregar resultados naturais, reforçando sua estrutura 
                masculina com sutileza.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <a href={whatsappUrl("Olá Dr. Aquiles! Gostaria de saber mais sobre harmonização facial.")} target="_blank" rel="noopener noreferrer" className="cta-button mt-10 inline-flex">
                Agendar avaliação <ArrowRight size={16} />
              </a>
            </Reveal>
          </div>
          <Reveal delay={300}>
            <div className="relative aspect-[4/5] bg-brand-950 rounded-lg overflow-hidden border border-brand-800/50 shadow-2xl">
              <Image
                src={portraitImage}
                alt="Harmonização Facial"
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Slider Area */}
      <section className="py-20 bg-brand-900 border-y border-brand-800/50 section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-900/5 via-brand-900 to-brand-900 pointer-events-none" />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 items-center relative z-10">
           <div>
              <Reveal>
                <h2 className="font-display text-section text-brand-100 mb-6">Mudanças reais.</h2>
                <p className="text-brand-300 font-sans font-light leading-relaxed mb-8 max-w-sm">
                   Veja diretamente a diferença que o contorno e a proporção trazem. Arraste a linha dourada para comparar os resultados.
                </p>
                <Link href="/resultados" className="cta-button-outline inline-flex">Ver galeria completa <ArrowRight size={16} /></Link>
              </Reveal>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featuredCases.map((fc, i) => (
                <Reveal key={fc.id} delay={i*150}>
                  <div className="relative rounded-lg overflow-hidden border border-brand-800 shadow-xl bg-brand-950 p-1">
                     <div className="rounded-lg overflow-hidden relative aspect-[4/5] sm:aspect-square">
                        <BeforeAfterSlider beforeImage={fc.beforeImage} afterImage={fc.afterImage} />
                     </div>
                     <div className="p-4 bg-brand-950 text-center border-t border-brand-900 mt-1 rounded-b">
                       <span className="text-gold-500 font-sans tracking-[0.2em] font-medium text-[10px] uppercase block mb-1">
                          {fc.procedure}
                       </span>
                     </div>
                  </div>
                </Reveal>
              ))}
           </div>
        </div>
      </section>

      {/* Procedures */}
      <section className="py-20 md:py-28 section-padding">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="font-display text-section text-brand-100 mb-12">
              Procedimentos
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {procedures.map((proc, i) => (
              <Reveal key={proc.name} delay={i * 100}>
                <div className="flex gap-4">
                  <CheckCircle size={20} className="text-gold-500 shrink-0 mt-1.5 opacity-80" />
                  <div>
                    <h3 className="font-display text-2xl text-brand-100 mb-2">
                      {proc.name}
                    </h3>
                    <p className="text-brand-400 font-sans font-light text-sm leading-relaxed">{proc.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CFO compliance note */}
      <section className="py-16 section-padding bg-brand-950">
        <div className="max-w-3xl mx-auto text-center border-t border-brand-800/50 pt-16">
          <Reveal>
            <p className="text-brand-500 font-sans text-xs leading-relaxed uppercase tracking-widest max-w-xl mx-auto opacity-70">
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
