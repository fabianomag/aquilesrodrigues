"use client";

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { ShieldAlert, ArrowLeft } from "lucide-react";

function PrivadoContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      setIsAuthorized(false);
      return;
    }

    try {
      // Decode simple base64 client token
      // Pad string with '=' to make length a multiple of 4
      const paddedToken = token.padEnd(token.length + (4 - (token.length % 4)) % 4, '=');
      const payload = JSON.parse(atob(paddedToken));
      
      const now = new Date().getTime();
      // Token valid for 30 mins
      if (payload.valid && (now - payload.t) < 30 * 60 * 1000) {
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    } catch (e) {
      setIsAuthorized(false);
    }

    if (isAuthorized === false) {
       router.push("/preenchimento-peniano");
    }
  }, [searchParams, router, isAuthorized]);

  if (isAuthorized === null) return <div className="min-h-screen bg-brand-950 flex items-center justify-center text-gold-400 font-sans tracking-widest text-sm uppercase animate-pulse">Verificando chave de acesso...</div>;
  if (isAuthorized === false) return null; // Wait for redirect

  return (
    <div className="min-h-screen bg-[#050403] pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        
        <button onClick={() => router.back()} className="text-gold-500/70 hover:text-gold-400 font-sans text-xs tracking-widest uppercase flex items-center gap-2 mb-8 transition-colors">
          <ArrowLeft size={14} /> Voltar para galeria
        </button>

        <div className="bg-brand-900 border border-brand-800 rounded-xl p-4 flex gap-4 items-start mb-12 shadow-md">
           <ShieldAlert className="text-gold-500 shrink-0 mt-1" size={20} />
           <p className="text-brand-300 text-sm font-sans leading-relaxed">
             <strong className="text-brand-100 block mb-1">Ambiente Seguro (Token Ativo)</strong>
             Você acessou através do formulário de consulta privada. Estas imagens representam resultados artísticos compatíveis com aumento peniano e estão protegidas por sigilo. Imagens de pacientes reais são restritas ao consultório.
           </p>
        </div>

        <div className="space-y-12">
          {/* Mock erect result placeholder */}
          <div className="aspect-[3/4] sm:aspect-square bg-brand-950 rounded-2xl overflow-hidden border border-brand-800/50 relative shadow-2xl">
             <Image 
               src="https://placehold.co/800x1200/050403/d4b978?text=Imagens+Ere%C3%A7%C3%A3o%0A(Substitua+aqui+pelas+fotos+reais)" 
               alt="Resultado Pós-Procedimento Simulado" 
               fill 
               className="object-cover opacity-60" 
               sizes="(max-width: 640px) 100vw, 800px"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent to-transparent opacity-90" />
             <div className="absolute bottom-6 left-6 right-6 text-center">
                <p className="text-gold-400 font-display text-2xl sm:text-3xl mb-2 drop-shadow-md">Ereção Pós-Procedimento</p>
                <p className="text-brand-300 text-sm font-sans">Aumento significativo de volume e vascularização mantida.</p>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function PrivadoPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-brand-950 flex items-center justify-center text-gold-400 font-sans tracking-widest text-sm uppercase animate-pulse">Carregando ambiente seguro...</div>}>
      <PrivadoContent />
    </Suspense>
  )
}
