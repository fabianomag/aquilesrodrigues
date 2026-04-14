import { facialGalleryData } from "@/lib/facial-data";
import { BeforeAfterSlider } from "@/components/before-after-slider";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/config";

export default function ResultadoDetalhe({ params }: { params: { id: string } }) {
  const caseData = facialGalleryData.find(c => c.id === params.id);
  if (!caseData) notFound();

  return (
    <div className="pt-32 pb-24 section-padding min-h-screen">
      <div className="max-w-5xl mx-auto">
        
        <Link href="/resultados" className="text-brand-400 hover:text-gold-400 font-sans text-xs tracking-widest uppercase flex items-center gap-2 mb-12 transition-colors inline-flex">
          <ArrowLeft size={14} /> Voltar para galeria
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
           <div className="w-full shadow-[0_0_40px_rgba(0,0,0,0.5)] rounded-xl overflow-hidden border border-brand-800/50 bg-brand-950 p-2">
             <div className="rounded-lg overflow-hidden relative aspect-[4/5] sm:aspect-square">
               <BeforeAfterSlider beforeImage={caseData.beforeImage} afterImage={caseData.afterImage} />
             </div>
           </div>

           <div>
             <span className="inline-block px-3 py-1 bg-brand-900 border border-brand-800 text-gold-400 text-[10px] font-sans tracking-[0.2em] uppercase mb-6 rounded-sm">
                {caseData.procedure}
             </span>
             <h1 className="font-display text-4xl sm:text-5xl text-brand-50 mb-6 leading-tight">
               {caseData.caption}
             </h1>
             <p className="text-brand-300 font-sans font-light leading-relaxed text-lg mb-10">
               {caseData.description}
             </p>

             <h4 className="text-brand-300 font-sans uppercase tracking-[0.15em] text-[10px] mb-6">O que foi realizado</h4>
             <ul className="space-y-4 mb-12">
               {caseData.details.map((detail, idx) => (
                 <li key={idx} className="flex gap-4 text-brand-100 font-sans font-light items-start">
                   <div className="mt-1 bg-brand-800 p-1 rounded-full"><CheckCircle size={14} className="text-gold-500" /></div>
                   {detail}
                 </li>
               ))}
             </ul>

             <div className="pt-8 border-t border-brand-800/50">
               <a href={whatsappUrl(`Olá Dr. Aquiles! Estava olhando o caso de ${caseData.procedure} no site e gostaria de uma avaliação.`)} target="_blank" rel="noopener noreferrer" className="cta-button w-full sm:w-auto">
                 Gostei deste resultado
               </a>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}
