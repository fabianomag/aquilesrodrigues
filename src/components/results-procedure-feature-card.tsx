"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import { BeforeAfterSlider } from "@/components/before-after-slider";

interface ResultsProcedureFeatureCardProps {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  beforeImage?: string;
  afterImage?: string;
  imageAlt: string;
  details?: string[];
  sensitive?: boolean;
}

export function ResultsProcedureFeatureCard({
  id,
  eyebrow,
  title,
  description,
  href,
  ctaLabel,
  beforeImage,
  afterImage,
  imageAlt,
  details,
  sensitive = false,
}: ResultsProcedureFeatureCardProps) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="overflow-hidden rounded-md border border-black/15 bg-[#f7ead8] lg:grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative min-h-[360px] border-b border-black/10 bg-[#ead0b5] lg:min-h-[440px] lg:border-b-0 lg:border-r">
          {sensitive && afterImage ? (
            <>
              <Image
                src={afterImage}
                alt={imageAlt}
                fill
                className="scale-110 object-cover blur-md"
                sizes="(max-width: 1024px) 100vw, 52vw"
              />
              <div className="absolute inset-0 bg-[#17110e]/78" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d8b58e]">
                  Resultado reservado
                </p>
                <h3 className="mt-5 max-w-md font-display text-4xl leading-[0.95] text-[#fff8f0]">
                  Fotos em ereção e material mais explícito
                </h3>
                <p className="mt-5 max-w-md text-base leading-relaxed text-[#d2c0b1]">
                  Esse conteúdo não aparece aberto na galeria pública. Ele entra em fluxo reservado,
                  com contexto clínico e acesso progressivo.
                </p>
                <Link
                  href={href}
                  className="mt-8 inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-6 py-4 text-xs font-medium uppercase tracking-[0.16em] text-[#fff8f0] transition-colors hover:bg-white/15"
                >
                  <Lock size={14} /> Ver resultado
                </Link>
              </div>
            </>
          ) : beforeImage && afterImage ? (
            <div className="absolute inset-0">
              <BeforeAfterSlider beforeImage={beforeImage} afterImage={afterImage} />
            </div>
          ) : null}
        </div>

        <div className="bg-[#f1e2cf] p-8 sm:p-10">
          <p className="text-xs uppercase tracking-[0.28em] text-[#b96f2b]">{eyebrow}</p>
          <h2 className="mt-5 font-display text-section text-[#17110e]">{title}</h2>
          <p className="mt-5 text-base leading-relaxed text-[#4f4036] sm:text-lg">{description}</p>

          {details?.length ? (
            <div className="mt-8 space-y-3 border-t border-black/10 pt-6">
              {details.map((detail) => (
                <p key={detail} className="text-sm leading-relaxed text-[#5b4c42]">
                  {detail}
                </p>
              ))}
            </div>
          ) : null}

          <div className="mt-8 border-t border-black/10 pt-6">
            <Link
              href={href}
              className="inline-flex items-center gap-2 rounded-md bg-[#17110e] px-7 py-4 text-xs font-medium uppercase tracking-[0.16em] text-[#fff8f0] transition-colors hover:bg-[#2a211d]"
            >
              {ctaLabel} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
