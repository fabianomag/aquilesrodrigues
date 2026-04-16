"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";

interface AccordionImageItem {
  title: string;
  body: string;
}

interface ProcedureAccordionImageSectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  items: AccordionImageItem[];
  imageSrc: string;
  imageAlt: string;
  imageKicker?: string;
  imageQuote?: string;
  imagePosition?: "left" | "right";
  theme?: "light" | "dark";
}

export function ProcedureAccordionImageSection({
  eyebrow,
  title,
  description,
  items,
  imageSrc,
  imageAlt,
  imageKicker,
  imageQuote,
  imagePosition = "right",
  theme = "light",
}: ProcedureAccordionImageSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);
  const isLight = theme === "light";

  return (
    <div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <div
        className={clsx(
          "overflow-hidden border",
          isLight
            ? "rounded-md border-black/15 bg-[#f7ead8]"
            : "rounded-[2rem] border-brand-800/60 bg-brand-900/70 backdrop-blur-sm",
          imagePosition === "left" && "lg:order-2",
        )}
      >
        <div
          className={clsx(
            "px-6 py-8 sm:px-8",
            isLight ? "border-b border-black/10" : "border-b border-brand-800/60",
          )}
        >
          {eyebrow ? (
            <p
              className={clsx(
                "mb-4 text-xs uppercase tracking-[0.28em]",
                isLight ? "text-[#b96f2b]" : "text-gold-500",
              )}
            >
              {eyebrow}
            </p>
          ) : null}
          <h2
            className={clsx(
              "font-display text-section",
              isLight ? "text-[#17110e]" : "text-brand-50",
            )}
          >
            {title}
          </h2>
          <p
            className={clsx(
              "mt-4 max-w-2xl text-base leading-relaxed sm:text-lg",
              isLight ? "text-[#4f4036]" : "text-brand-300",
            )}
          >
            {description}
          </p>
        </div>

        <div className="px-6 py-3 sm:px-8 sm:py-4">
          {items.map((item, index) => {
            const isOpen = index === openIndex;

            return (
              <div
                key={item.title}
                className={clsx(
                  "last:border-b-0",
                  isLight ? "border-b border-black/10" : "border-b border-brand-800/60",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span
                    className={clsx(
                      "font-sans text-sm uppercase tracking-[0.14em] sm:text-[0.95rem]",
                      isLight ? "text-[#17110e]" : "text-brand-100",
                    )}
                  >
                    {item.title}
                  </span>
                  <ChevronDown
                    size={18}
                    className={clsx(
                      "shrink-0 transition-transform duration-300",
                      isLight ? "text-[#b96f2b]" : "text-gold-400",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={clsx(
                    "grid transition-all duration-300",
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]",
                  )}
                  >
                  <div className="overflow-hidden">
                    <p
                      className={clsx(
                        "max-w-xl text-sm leading-relaxed sm:text-base",
                        isLight ? "text-[#5b4c42]" : "text-brand-400",
                      )}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={clsx(
          "relative min-h-[420px] overflow-hidden border",
          isLight
            ? "rounded-md border-black/15 bg-[#ead0b5]"
            : "rounded-[2rem] border-brand-800/60 bg-brand-900/60",
          imagePosition === "left" && "lg:order-1",
        )}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 42vw"
        />
        <div
          className={clsx(
            "absolute inset-0",
            isLight
              ? "bg-gradient-to-t from-[#17110e]/72 via-[#17110e]/24 to-transparent"
              : "bg-gradient-to-t from-brand-950 via-brand-950/55 to-brand-950/10",
          )}
        />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          {imageKicker ? (
            <p
              className={clsx(
                "text-xs uppercase tracking-[0.26em]",
                isLight ? "text-[#f0d1ae]" : "text-gold-400",
              )}
            >
              {imageKicker}
            </p>
          ) : null}
          {imageQuote ? (
            <p className="mt-4 max-w-md font-display text-3xl leading-[1.05] text-brand-50 sm:text-4xl">
              {imageQuote}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
