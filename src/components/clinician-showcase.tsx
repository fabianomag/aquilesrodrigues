"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ClinicianShowcaseProps {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  portraitSrc: string;
  portraitAlt: string;
  metrics?: Array<{
    label: string;
    value: string;
  }>;
}

export function ClinicianShowcase({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
  portraitSrc,
  portraitAlt,
  metrics = [],
}: ClinicianShowcaseProps) {
  const isInternal = ctaHref.startsWith("/");

  return (
    <section className="overflow-hidden border border-black/15 bg-[#f7ead8]">
      <div className="grid lg:grid-cols-[0.84fr_1.16fr]">
        <div className="flex flex-col justify-between bg-[#060606] px-8 py-16 text-[#f8ecdf] sm:px-12 lg:px-16 lg:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#d9c0a8]">{eyebrow}</p>
            <h2 className="mt-10 max-w-md font-display text-[3rem] leading-[0.92] text-[#f8ecdf] sm:text-[4rem]">
              {title}
            </h2>
            <div className="mt-10 h-px w-16 bg-[#f2dfcc]" />
            <p className="mt-10 max-w-md text-lg leading-relaxed text-[#dcc8b5]">
              {description}
            </p>
          </div>

          <div className="mt-10">
            {metrics.length > 0 ? (
              <div className="grid gap-3 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-md border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                  >
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#c0a894]">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-[#fff8f0]">{metric.value}</p>
                  </div>
                ))}
              </div>
            ) : null}

            {isInternal ? (
              <Link
                href={ctaHref}
                className="mt-10 inline-flex items-center gap-2 rounded-md bg-[#f1e2cf] px-7 py-4 text-sm font-medium uppercase tracking-[0.16em] text-[#17110e] transition-colors hover:bg-[#ead0b5]"
              >
                {ctaLabel}
                <ArrowRight size={16} />
              </Link>
            ) : (
              <a
                href={ctaHref}
                className="mt-10 inline-flex items-center gap-2 rounded-md bg-[#f1e2cf] px-7 py-4 text-sm font-medium uppercase tracking-[0.16em] text-[#17110e] transition-colors hover:bg-[#ead0b5]"
              >
                {ctaLabel}
                <ArrowRight size={16} />
              </a>
            )}
          </div>
        </div>

          <div className="relative min-h-[460px] overflow-hidden border-t border-black/10 bg-[#0c0c0c] lg:border-l lg:border-t-0">
            <Image
            src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=1600&q=80"
            alt=""
            fill
            className="object-cover grayscale contrast-150 brightness-[0.6] blur-[2px]"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(204, 20, 20, 0.61),rgba(170, 32, 32, 0.52),rgba(176, 75, 75, 0.82))]" />

          <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12 lg:p-10">
            <div className="relative aspect-[4/5] w-full max-w-[340px] overflow-hidden bg-[#3c3c3c] shadow-[0_24px_60px_rgba(0,0,0,0.45)] sm:max-w-[390px] lg:max-w-[430px]">
                <Image
                  src={portraitSrc}
                  alt={portraitAlt}
                  fill
                  className="object-cover grayscale contrast-110"
                  style={{ objectPosition: "center 18%" }}
                  sizes="280px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/24 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
