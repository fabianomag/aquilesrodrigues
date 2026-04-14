import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { facialGalleryData } from "@/lib/facial-data";

export const metadata: Metadata = {
  title: "Resultados - Harmonização Facial",
  description:
    "Galeria por procedimento: rinomodelação, mandíbula, mento, lábios, botox, alectomia, bichectomia e preenchimento peniano — Dr. Aquiles Rodrigues.",
};

export default function ResultadosPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 section-padding">
      <div className="max-w-6xl mx-auto">
         <Reveal>
            <p className="text-xs tracking-[0.3em] font-sans uppercase text-gold-500 mb-4 drop-shadow-md">
              Galeria de Alta Performance
            </p>
            <h1 className="font-display text-hero text-brand-50 leading-tight mb-6">
              A transformação fala<br />
              <span className="text-gold-400">por si mesma.</span>
            </h1>
            <p className="text-brand-300 font-sans font-light max-w-2xl text-lg leading-relaxed mb-16">
              Cada resultado é planejado e executado respeitando a anatomia natural.
              Explore nossa galeria de harmonização orofacial.
            </p>
         </Reveal>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Special Entry for Penile Gallery */}
            <Reveal delay={0}>
              <Link href="/preenchimento-peniano" className="group block h-full">
                <div className="relative aspect-[3/4] bg-brand-900 border border-gold-600/50 rounded-lg overflow-hidden shadow-xl mb-4 group-hover:border-gold-500 transition-colors">
                   <Image 
                     src="https://placehold.co/800x1200/080706/d4b978/png?text=Imagem+Peniana"
                     alt="Especialidade Íntima"
                     fill
                     className="object-cover opacity-80 group-hover:scale-[1.03] group-hover:opacity-100 transition-all duration-700"
                     sizes="(max-width: 768px) 100vw, 33vw"
                   />
                   <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-brand-950 via-brand-950/80 to-transparent opacity-90 pointer-events-none" />
                   <div className="absolute bottom-6 left-6 right-6">
                      <span className="inline-block px-3 py-1 bg-gold-500/20 backdrop-blur border border-gold-500/30 text-gold-400 text-[10px] uppercase tracking-[0.2em] mb-3 rounded-sm shadow-md">
                        Procedimento Íntimo
                      </span>
                      <h3 className="font-display text-2xl text-brand-50 group-hover:text-gold-400 transition-colors leading-tight">Preenchimento Peniano</h3>
                   </div>
                </div>
                <p className="mt-4 text-brand-400 text-sm leading-relaxed line-clamp-4">
                  Galeria exclusiva com bloqueio etário para resultados de harmonização e aumento peniano.
                </p>
                <div className="mt-3 flex items-center gap-2 text-gold-500 group-hover:text-gold-400 text-xs font-sans tracking-[0.2em] uppercase transition-colors">
                   Ver galeria exclusiva <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </Reveal>
            {facialGalleryData.map((caseItem, i) => (
              <Reveal key={caseItem.id} delay={i * 100}>
                <Link href={`/resultados/${caseItem.id}`} className="group block h-full">
                  <div className="relative aspect-[3/4] bg-brand-900 border border-brand-800/50 rounded-lg overflow-hidden shadow-xl mb-4 group-hover:border-gold-600/30 transition-colors">
                     <Image 
                       src={caseItem.afterImage} 
                       alt={caseItem.caption}
                       fill
                       className="object-cover opacity-80 group-hover:scale-[1.03] group-hover:opacity-100 transition-all duration-700"
                       sizes="(max-width: 768px) 100vw, 33vw"
                     />
                     <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-brand-950 to-transparent opacity-80 pointer-events-none" />
                     <div className="absolute bottom-6 left-6 right-6">
                        <span className="inline-block px-3 py-1 bg-brand-950/80 backdrop-blur border border-brand-800/50 text-gold-400 text-[10px] uppercase tracking-[0.2em] mb-3 rounded-sm shadow-md">
                          {caseItem.procedure}
                        </span>
                        <h3 className="font-display text-2xl text-brand-50 group-hover:text-gold-300 transition-colors leading-tight">
                          {caseItem.caption}
                        </h3>
                     </div>
                  </div>
                  <p className="mt-4 text-brand-400 text-sm leading-relaxed line-clamp-4">
                    {caseItem.description}
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-gold-500/80 group-hover:text-gold-400 text-xs font-sans tracking-[0.2em] uppercase transition-colors">
                     Ver detalhes do caso <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </Reveal>
            ))}
         </div>
      </div>
    </section>
  );
}
