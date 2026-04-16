"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { siteConfig, whatsappUrl } from "@/lib/config";

export function Footer() {
  const pathname = usePathname();
  const useDarkFooter = pathname.startsWith("/privado") || pathname.startsWith("/blog");

  return (
    <footer
      className={clsx(
        "border-t py-16 section-padding",
        useDarkFooter
          ? "border-brand-800/50 bg-brand-950"
          : "border-black/10 bg-[#f1e2cf]",
      )}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.85fr_0.85fr_0.9fr]">
          <div>
            <p
              className={clsx(
                "text-xs uppercase tracking-[0.28em]",
                useDarkFooter ? "text-gold-500" : "text-[#b96f2b]",
              )}
            >
              {siteConfig.cromg}
            </p>
            <h3
              className={clsx(
                "mt-4 font-display text-3xl leading-[0.95]",
                useDarkFooter ? "text-brand-100" : "text-[#17110e]",
              )}
            >
              {siteConfig.name}
            </h3>
            <p
              className={clsx(
                "mt-4 max-w-md text-sm leading-relaxed",
                useDarkFooter ? "text-brand-400" : "text-[#5b4c42]",
              )}
            >
              Harmonização facial e procedimentos estéticos com leitura anatômica,
              discrição e contato direto pelo WhatsApp.
            </p>
          </div>

          <div>
            <h4
              className={clsx(
                "text-xs uppercase tracking-[0.22em]",
                useDarkFooter ? "text-brand-500" : "text-[#8b6c57]",
              )}
            >
              Procedimentos
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/harmonizacao-facial"
                className={clsx(
                  "text-sm transition-colors",
                  useDarkFooter
                    ? "text-brand-300 hover:text-gold-400"
                    : "text-[#17110e] hover:text-[#8b5e3c]",
                )}
              >
                Harmonização facial
              </Link>
              <Link
                href="/preenchimento-peniano"
                className={clsx(
                  "text-sm transition-colors",
                  useDarkFooter
                    ? "text-brand-300 hover:text-gold-400"
                    : "text-[#17110e] hover:text-[#8b5e3c]",
                )}
              >
                Preenchimento peniano
              </Link>
              <Link
                href="/resultados"
                className={clsx(
                  "text-sm transition-colors",
                  useDarkFooter
                    ? "text-brand-300 hover:text-gold-400"
                    : "text-[#17110e] hover:text-[#8b5e3c]",
                )}
              >
                Resultados
              </Link>
            </div>
          </div>

          <div>
            <h4
              className={clsx(
                "text-xs uppercase tracking-[0.22em]",
                useDarkFooter ? "text-brand-500" : "text-[#8b6c57]",
              )}
            >
              Presença
            </h4>
            <div
              className={clsx(
                "mt-4 flex flex-col gap-3 text-sm",
                useDarkFooter ? "text-brand-300" : "text-[#17110e]",
              )}
            >
              {siteConfig.locations.map((loc) => (
                <span key={loc}>{loc}</span>
              ))}
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(
                  "transition-colors",
                  useDarkFooter
                    ? "hover:text-gold-400"
                    : "hover:text-[#8b5e3c]",
                )}
              >
                Instagram oficial
              </a>
            </div>
          </div>

          <div>
            <div
              className={clsx(
                "rounded-md border p-5",
                useDarkFooter
                  ? "border-brand-800/70 bg-brand-900/60"
                  : "border-black/10 bg-[#fff3e5]",
              )}
            >
              <p
                className={clsx(
                  "text-[10px] uppercase tracking-[0.24em]",
                  useDarkFooter ? "text-brand-500" : "text-[#8b6c57]",
                )}
              >
                Canal principal
              </p>
              <p
                className={clsx(
                  "mt-3 text-sm leading-relaxed",
                  useDarkFooter ? "text-brand-300" : "text-[#5b4c42]",
                )}
              >
                Sem formulário longo, sem central e sem atrito desnecessário.
              </p>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={clsx(
                  "mt-5 inline-flex rounded-md px-5 py-3 text-xs uppercase tracking-[0.18em] transition-colors",
                  useDarkFooter
                    ? "bg-gold-400 text-brand-950 hover:bg-gold-500"
                    : "bg-[#17110e] text-[#fff8f0] hover:bg-[#2a211d]",
                )}
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div
          className={clsx(
            "mt-10 flex flex-col gap-3 border-t pt-8 text-xs md:flex-row md:items-center md:justify-between",
            useDarkFooter
              ? "border-brand-800/50 text-brand-600"
              : "border-black/10 text-[#7c6d62]",
          )}
        >
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p>{siteConfig.cromg}</p>
        </div>
      </div>
    </footer>
  );
}
