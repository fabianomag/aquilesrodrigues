import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import { PRIVATE_ACCESS_COOKIE, verifyPrivateAccessToken } from "@/lib/private-access";
import { whatsappUrl } from "@/lib/config";

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
    <div className="min-h-screen bg-[#050505] pt-24 pb-20 text-[#f5f2ef]">
      <div className="max-w-2xl mx-auto px-6">
        <Link
          href="/preenchimento-peniano#resultados"
          className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/55 transition-colors hover:text-white"
        >
          <ArrowLeft size={14} /> Voltar para galeria
        </Link>

        <div className="mb-12 flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <ShieldAlert className="mt-1 shrink-0 text-[#ff4d6d]" size={20} />
          <p className="text-sm leading-relaxed text-white/72">
            <strong className="mb-1 block text-white">Acesso reservado liberado</strong>
            Este ambiente existe para mostrar fotos em ereção e material mais explícito
            apenas depois do fluxo privado. O conteúdo não foi feito para circular fora
            desse contexto.
          </p>
        </div>

        <div className="space-y-12">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-[#ff4d6d]">Resumo do acesso</p>
            <div className="mt-4 grid gap-3 text-sm text-white/68 sm:grid-cols-2">
              <p>
                Objetivo: <span className="text-white">{payload.goal ?? "Não informado"}</span>
              </p>
              <p>
                Faixa de investimento: <span className="text-white">R$ {payload.budget.toLocaleString("pt-BR")}</span>
              </p>
              <p>
                Local: <span className="text-white">{payload.location ?? "Não informado"}</span>
              </p>
              <p>
                Momento: <span className="text-white">{payload.timeline ?? "Não informado"}</span>
              </p>
              <p className="sm:col-span-2">
                Caso: <span className="text-white">{payload.caseLabel ?? payload.caseId}</span>
              </p>
            </div>
          </div>

          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_30px_80px_rgba(0,0,0,0.55)] sm:aspect-square">
            <Image
              src="https://placehold.co/800x1200/050505/ff4d6d?text=Fotos+em+Ere%C3%A7%C3%A3o%0A(Substitua+aqui+pelas+imagens+reais)"
              alt="Resultado pós-procedimento simulado"
              fill
              className="object-cover opacity-55"
              sizes="(max-width: 640px) 100vw, 800px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs uppercase tracking-[0.28em] text-[#ff4d6d]">
                Conteúdo reservado
              </p>
              <p className="mt-3 font-display text-3xl leading-[0.95] text-white sm:text-4xl">
                Fotos em ereção e material mais direto, agora em privado.
              </p>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/68">
                Este é o ponto em que a curiosidade vira critério visual. Use o material para
                comparar presença, contorno e tipo de resultado antes de seguir a conversa.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappUrl(
                `Olá Dr. Aquiles! Acessei as fotos em ereção do preenchimento peniano e quero continuar a conversa. Meu objetivo é ${payload.goal ?? "avaliar o procedimento"}.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-md bg-[#ff4d6d] px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#e63f60]"
            >
              Falar com o Dr. Aquiles
            </a>
            <Link
              href="/preenchimento-peniano#qualificacao"
              className="inline-flex justify-center rounded-md border border-white/12 px-8 py-4 text-sm uppercase tracking-[0.16em] text-white/72 transition-colors hover:border-white/20 hover:text-white"
            >
              Voltar para qualificação
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
