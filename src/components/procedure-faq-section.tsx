"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";

interface ProcedureFaqItem {
  question: string;
  answer: string;
}

interface ProcedureFaqCategory {
  label: string;
  items: ProcedureFaqItem[];
}

interface ProcedureFaqSectionProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  categories: ProcedureFaqCategory[];
  theme?: "light" | "dark";
  className?: string;
}

export function ProcedureFaqSection({
  eyebrow,
  title,
  subtitle,
  categories,
  theme = "light",
  className,
}: ProcedureFaqSectionProps) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);

  const currentCategory = categories[activeCategory];
  const isLight = theme === "light";

  return (
    <section className={clsx("py-24 section-padding md:py-28", className)} id="faq">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className={clsx("text-sm sm:text-base", isLight ? "text-[#5b4c42]" : "text-brand-300")}>
            {eyebrow}
          </p>
          <h2 className={clsx("mt-4 font-display text-section", isLight ? "text-[#17110e]" : "text-brand-50")}>
            {title}
          </h2>
          <p
            className={clsx(
              "mx-auto mt-4 max-w-2xl text-base leading-relaxed sm:text-lg",
              isLight ? "text-[#5b4c42]" : "text-brand-400",
            )}
          >
            {subtitle}
          </p>
        </div>

        <div
          className={clsx(
            "mt-14 overflow-hidden border lg:grid lg:grid-cols-[280px_1fr]",
            isLight
              ? "rounded-md border-black/15 bg-[#f7ead8]"
              : "rounded-[2rem] border-brand-800/60 bg-brand-900/60 backdrop-blur-sm",
          )}
        >
          <div
            className={clsx(
              "px-4 py-4 lg:px-5 lg:py-6",
              isLight ? "border-b border-black/10 lg:border-b-0 lg:border-r lg:border-black/10" : "border-b border-brand-800/60 lg:border-b-0 lg:border-r",
            )}
          >
            <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
              {categories.map((category, index) => (
                <button
                  key={category.label}
                  type="button"
                  onClick={() => {
                    setActiveCategory(index);
                    setOpenIndex(0);
                  }}
                  className={clsx(
                    "whitespace-nowrap border px-4 py-3 text-left text-xs uppercase tracking-[0.16em] transition-colors",
                    activeCategory === index
                      ? isLight
                        ? "border-[#b96f2b]/25 bg-[#ead0b5] text-[#17110e]"
                        : "border-gold-500/40 bg-gold-500/10 text-gold-300"
                      : isLight
                        ? "border-black/10 text-[#6a5b4e] hover:border-black/20 hover:text-[#17110e]"
                        : "border-brand-800/60 text-brand-400 hover:border-brand-700 hover:text-brand-200",
                  )}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="px-6 py-6 sm:px-8 sm:py-8">
            {currentCategory.items.map((item, index) => {
              const isOpen = openIndex === index;

            return (
                <div
                  key={item.question}
                  className={clsx(
                    "last:border-b-0",
                    isLight ? "border-b border-black/10" : "border-b border-brand-800/60",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-start justify-between gap-6 py-5 text-left"
                  >
                    <span
                      className={clsx(
                        "max-w-3xl text-sm uppercase tracking-[0.08em] sm:text-[0.95rem]",
                        isLight ? "text-[#17110e]" : "text-brand-100",
                      )}
                    >
                      {item.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className={clsx(
                        "mt-1 shrink-0 transition-transform duration-300",
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
                          "max-w-3xl text-sm leading-relaxed sm:text-base",
                          isLight ? "text-[#5b4c42]" : "text-brand-400",
                        )}
                      >
                        {item.answer}
                      </p>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
