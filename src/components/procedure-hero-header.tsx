import type { ReactNode } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { clsx } from "clsx";

interface ProcedureHeroLink {
  href: string;
  label: string;
}

interface ProcedureHeroHeaderProps {
  badgeLabel?: string;
  eyebrow: string;
  title: ReactNode;
  intro: string;
  details: string;
  imageSrc: string;
  imageAlt: string;
  summaryTitle?: string;
  summaryItems: string[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaHref: string;
  ctaLabel: string;
  ctaCaption?: string;
  sectionLinks?: ProcedureHeroLink[];
  reverseLayout?: boolean;
  fullBleed?: boolean;
  imageMinHeightClass?: string;
  cardMaxWidthClass?: string;
  bottomSlot?: ReactNode;
  imagePositionClass?: string;
}

export function ProcedureHeroHeader({
  badgeLabel,
  eyebrow,
  title,
  intro,
  details,
  imageSrc,
  imageAlt,
  summaryTitle = "Resumo",
  summaryItems,
  ctaEyebrow,
  ctaTitle,
  ctaDescription,
  ctaHref,
  ctaLabel,
  ctaCaption,
  sectionLinks,
  reverseLayout = false,
  fullBleed = false,
  imageMinHeightClass = "min-h-[540px] lg:min-h-[680px]",
  imagePositionClass = "object-center",
  cardMaxWidthClass = "lg:max-w-4xl",
  bottomSlot,
}: ProcedureHeroHeaderProps) {
  return (
  <section className="relative flex flex-col h-[100dvh] overflow-hidden bg-[#f1e2cf]">

      <div
        className={clsx(
          "grid items-stretch flex-1 min-h-0",
          reverseLayout ? "lg:grid-cols-[1.2fr_0.8fr]" : "lg:grid-cols-[0.8fr_1.2fr]",

        )}
      >

        <div
          className={clsx(
            "flex items-center px-6 py-16 md:px-12 lg:px-20 lg:py-24",
            reverseLayout && "lg:order-2",
          )}
        >
          <Reveal>
            <div className="max-w-xl">
              {badgeLabel ? (
                <span className="inline-flex border border-[#c8873e]/20 bg-[#d9964b] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-[#fff8f0]">
                  {badgeLabel}
                </span>
              ) : null}
              <p className="mt-6 text-xs uppercase tracking-[0.28em] text-[#b96f2b]">{eyebrow}</p>
              <h1 className="mt-4 font-display text-[3.6rem] leading-[0.95] text-[#17110e] md:text-[5rem]">
                {title}
              </h1>
              <div className="mt-8 h-px w-20 bg-[#17110e]" />
              <p className="mt-8 text-lg leading-relaxed text-[#3b312b] md:text-[1.35rem]">
                {intro}
              </p>
              <p className="mt-6 text-base leading-relaxed text-[#5b4c42] md:text-lg">
                {details}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div
            className={clsx(
              "relative",
              imageMinHeightClass,
              reverseLayout && "lg:order-1",
            )}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              className={clsx("object-cover pt-24", imagePositionClass)}
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
        </Reveal>
      </div>

      <div
        className={clsx(
          "striped-card-shell relative z-10 mx-6 -mt-14 md:mx-12 lg:mx-20 lg:-mt-24",
          cardMaxWidthClass,
          reverseLayout && "lg:ml-auto lg:mr-20",
          fullBleed && "lg:mr-20",
        )}
      >
        <div className="striped-card-panel grid bg-[#e7c7a6] md:grid-cols-[1.2fr_0.8fr]">
          
          <div className="border-b border-black/10 p-6 md:border-b-0 md:border-r md:border-black/10 md:p-8">
            <p className="text-sm text-[#17110e]">{summaryTitle}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {summaryItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-md border border-black/10 bg-[#f1e2cf] p-4"
                >
                  <Check size={16} className="mt-0.5 shrink-0 text-[#17110e]" />
                  <p className="text-sm leading-relaxed text-[#2e2521]">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-6 md:p-8">
            <p className="text-sm text-[#17110e]">{ctaEyebrow}</p>
            <h2 className="mt-4 font-display text-4xl leading-none text-[#17110e]">
              {ctaTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4f4036]">
              {ctaDescription}
            </p>
            <a
              href={ctaHref}
              className="mt-8 inline-flex items-center justify-center rounded-md bg-[#17110e] px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-[#fff8f0] transition-colors hover:bg-[#2a211d]"
            >
              {ctaLabel}
            </a>
            {ctaCaption ? (
              <p className="mt-3 text-xs text-[#5b4c42]">{ctaCaption}</p>
            ) : null}
          </div>
        </div>
      </div>

      {bottomSlot ? (
        <div className="mt-6">{bottomSlot}</div>
      ) : sectionLinks?.length ? (
        <div className="mt-10 border-t border-black bg-[#17110e]">
          <div className="section-padding flex gap-8 overflow-x-auto py-5">
            {sectionLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-sm text-[#f5ddbe] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
