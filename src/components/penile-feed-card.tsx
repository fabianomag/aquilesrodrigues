"use client";

import { useState } from "react";
import { PenileCase } from "@/lib/gallery-data";
import { SeductiveFormModal } from "./seductive-form-modal";
import { Lock } from "lucide-react";
import { BeforeAfterSlider } from "./before-after-slider";

export function PenileFeedCard({ item }: { item: PenileCase }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="bg-brand-900/40 border border-brand-800/50 rounded-xl sm:rounded-2xl overflow-hidden mb-12 sm:mb-20">
        <div className="relative aspect-[4/5] sm:aspect-square w-full bg-brand-950 group">
          <BeforeAfterSlider beforeImage={item.beforeImage} afterImage={item.afterImage} />
          
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-950 to-transparent pointer-events-none z-10" />
          
          <div className="absolute bottom-6 left-6 right-6 space-y-4 pointer-events-none z-20">
             <div className="flex gap-2 text-[10px] font-sans tracking-widest uppercase">
                <span className="bg-gold-500/20 text-gold-400 px-3 py-1 backdrop-blur-md rounded border border-gold-500/30">{item.mlTotal} ml</span>
                <span className="bg-brand-800/50 text-brand-300 px-3 py-1 backdrop-blur-md rounded border border-brand-700/50">{item.areas.join(' + ')}</span>
             </div>
             <p className="font-display text-xl sm:text-2xl text-brand-50 leading-snug drop-shadow-lg max-w-sm">
               {item.caption}
             </p>
          </div>
        </div>

        <div className="p-6 bg-accent border-t border-brand-800/30 flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap">
           <p className="text-brand-400 text-sm leading-relaxed max-w-md font-sans">O volume preenchido proporciona aumento imediato da circunferência, com vascularização aparente e contorno natural.</p>
           <button 
             onClick={() => setModalOpen(true)}
             className="w-full sm:w-auto flex-shrink-0 flex items-center justify-center gap-2 bg-brand-800 hover:bg-gold-400 hover:text-brand-950 text-gold-400 border border-gold-600/30 px-6 py-4 font-medium uppercase text-xs tracking-[0.1em] transition-all duration-300 shadow-[0_0_0_rgba(212,185,120,0)] hover:shadow-[0_0_20px_rgba(212,185,120,0.2)]"
           >
             <Lock size={14} /> Ver em ereção
           </button>
        </div>
      </div>
      
      <SeductiveFormModal 
         isOpen={modalOpen} 
         onClose={() => setModalOpen(false)} 
         caseId={item.id} 
      />
    </>
  );
}
