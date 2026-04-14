import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ShieldAlert, ArrowLeft } from "lucide-react";
import { PRIVATE_ACCESS_COOKIE, verifyPrivateAccessToken } from "@/lib/private-access";

export const metadata: Metadata = {
  title: "Acesso Privado",
  description: "Conteúdo privado liberado após confirmação do formulário.",
};

export const dynamic = "force-dynamic";

export default function PrivadoAcessoPage() {
  const token = cookies().get(PRIVATE_ACCESS_COOKIE)?.value;
  const payload = token ? verifyPrivateAccessToken(token) : null;

  if (!payload) {
    redirect("/preenchimento-peniano");
  }

  return (
    <div className="min-h-screen bg-[#050403] pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-6">
        <Link
          href="/resultados"
          className="text-gold-500/70 hover:text-gold-400 font-sans text-xs tracking-widest uppercase flex items-center gap-2 mb-8 transition-colors"
        >
          <ArrowLeft size={14} /> Voltar para galeria
        </Link>

        <div className="bg-brand-900 border border-brand-800 rounded-xl p-4 flex gap-4 items-start mb-12 shadow-md">
          <ShieldAlert className="text-gold-500 shrink-0 mt-1" size={20} />
          <p className="text-brand-300 text-sm font-sans leading-relaxed">
            <strong className="text-brand-100 block mb-1">Ambiente Seguro</strong>
            Você acessou após preencher o formulário e confirmar o interesse em ver o conteúdo privado.
          </p>
        </div>

        <div className="space-y-12">
          <div className="aspect-[3/4] sm:aspect-square bg-brand-950 rounded-2xl overflow-hidden border border-brand-800/50 relative shadow-2xl">
            <Image
              src="https://placehold.co/800x1200/050403/d4b978?text=Imagens+Privadas%0A(Substitua+aqui+pelas+fotos+reais)"
              alt="Resultado pós-procedimento simulado"
              fill
              className="object-cover opacity-60"
              sizes="(max-width: 640px) 100vw, 800px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <p className="text-gold-400 font-display text-2xl sm:text-3xl mb-2 drop-shadow-md">
                Ereção Pós-Procedimento
              </p>
              <p className="text-brand-300 text-sm font-sans">
                Aumento significativo de volume e vascularização mantida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
