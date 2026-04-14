import type { Metadata } from "next";
import { ArrowRight, Shield, Clock, RotateCcw, Stethoscope } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { whatsappUrl } from "@/lib/config";
import { penileGalleryData } from "@/lib/gallery-data";
import { PenileFeedCard } from "@/components/penile-feed-card";

export const metadata: Metadata = {
  title: "Preenchimento Peniano com Ácido Hialurônico",
  description:
    "Preenchimento peniano com ácido hialurônico: aumento de volume e circunferência. Procedimento seguro, ambulatorial e reversível. Dr. Aquiles Rodrigues — CROMG 42004.",
};

const benefits = [
  {
    icon: Shield,
    title: "Seguro",
    desc: "Ácido hialurônico é biocompatível e amplamente utilizado em estética há décadas.",
  },
  {
    icon: Clock,
    title: "Rápido",
    desc: "Procedimento ambulatorial com duração de 40 a 60 minutos, com anestesia local.",
  },
  {
    icon: RotateCcw,
    title: "Reversível",
    desc: "O ácido hialurônico pode ser dissolvido a qualquer momento com hialuronidase.",
  },
  {
    icon: Stethoscope,
    title: "Acompanhamento",
    desc: "Retorno incluso para avaliação do resultado e ajustes, se necessários.",
  },
];

export default function PreenchimentoPenianoPage() {
  const miniCases = penileGalleryData.filter(c => c.category === "mini").sort((a,b) => a.mlTotal - b.mlTotal);
  const averageCases = penileGalleryData.filter(c => c.category === "average").sort((a,b) => a.mlTotal - b.mlTotal);
  const hungCases = penileGalleryData.filter(c => c.category === "hung").sort((a,b) => a.mlTotal - b.mlTotal);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-900/10 via-brand-950 to-brand-950 -z-10" />

        <div className="max-w-3xl relative z-10">
          <Reveal>
            <p className="text-xs tracking-[0.3em] font-sans uppercase text-gold-500 mb-4">
              Procedimento Íntimo
            </p>
            <h1 className="font-display text-hero text-brand-50 leading-tight">
              O que você quer ver
              <br />
              <span className="text-gold-400">e sentir.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-brand-300 text-lg md:text-xl font-sans font-light leading-relaxed max-w-2xl">
              Aumento de volume e circunferência com ácido hialurônico.
              Volume real. Espessura natural. Veias preservadas. Sem efeito balão, só mais presença.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <a
              href="#galeria"
              className="cta-button mt-10 inline-flex group"
            >
              Ver resultados <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Floating Gallery Anchor Menu (Sticky) */}
      <div className="sticky top-20 z-40 bg-brand-950/90 backdrop-blur-md border-b border-brand-800/50 py-3 shadow-xl">
        <div className="max-w-2xl mx-auto flex justify-center gap-2 sm:gap-4 px-4 overflow-x-auto hide-scrollbar">
           <a href="#mini" className="px-4 py-2 rounded-full border border-brand-700/50 text-brand-300 text-xs font-sans tracking-[0.1em] uppercase hover:bg-brand-800 hover:text-gold-400 whitespace-nowrap transition-colors">
              Mini
           </a>
           <a href="#average" className="px-4 py-2 rounded-full border border-brand-700/50 text-brand-300 text-xs font-sans tracking-[0.1em] uppercase hover:bg-brand-800 hover:text-gold-400 whitespace-nowrap transition-colors">
              Average
           </a>
           <a href="#hung" className="px-4 py-2 rounded-full border border-brand-700/50 text-brand-300 text-xs font-sans tracking-[0.1em] uppercase hover:bg-brand-800 hover:text-gold-400 whitespace-nowrap transition-colors">
              Performance
           </a>
        </div>
      </div>

      {/* Infinite Scroll Feed */}
      <section id="galeria" className="py-12 section-padding min-h-screen">
         <div className="max-w-xl mx-auto space-y-24">
            
            <div id="mini" className="scroll-mt-40 space-y-12">
               <div className="text-center mb-8">
                 <h2 className="font-display text-3xl text-gold-400">Mini</h2>
                 <p className="text-brand-400 font-sans text-sm mt-2">Volumes sutis focados em confiança e detalhe.</p>
               </div>
               {miniCases.map(item => <PenileFeedCard key={item.id} item={item} />)}
            </div>

            <div id="average" className="scroll-mt-40 space-y-12">
               <div className="text-center mb-8">
                 <h2 className="font-display text-3xl text-gold-400">Average</h2>
                 <p className="text-brand-400 font-sans text-sm mt-2">Harmonização completa e ganho expressivo de circunferência.</p>
               </div>
               {averageCases.map(item => <PenileFeedCard key={item.id} item={item} />)}
            </div>

            <div id="hung" className="scroll-mt-40 space-y-12">
               <div className="text-center mb-8">
                 <h2 className="font-display text-3xl text-gold-400">Performance / Hung</h2>
                 <p className="text-brand-400 font-sans text-sm mt-2">Máximo impacto, preenchimento total e alta performance estética.</p>
               </div>
               {hungCases.map(item => <PenileFeedCard key={item.id} item={item} />)}
            </div>

         </div>
      </section>

      {/* Discretion note */}
      <section className="py-24 bg-brand-900 border-t border-brand-800/30 section-padding">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="border-l-4 border-gold-500 pl-8 py-2">
              <h3 className="font-display text-2xl text-gold-400 mb-4">Discrição Absoluta.</h3>
              <p className="text-brand-300 font-sans font-light leading-relaxed text-lg">
                O sigilo do paciente é a nossa maior premissa. Desde o primeiro contato, 
                suas informações nunca passam por secretárias ou triagens terceirizadas. 
                Tudo é processado diretamente com minha central criptografada.
              </p>
            </div>
            <div className="mt-12 text-center sm:text-left">
              <a
                href={whatsappUrl("Olá Dr. Aquiles! Gostaria de informações privadas sobre preenchimento peniano.")}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button inline-flex"
              >
                Conversar em sigilo no WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
