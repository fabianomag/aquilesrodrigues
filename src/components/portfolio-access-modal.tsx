"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { PenileCase } from "@/lib/gallery-data";
import { ProcedureSuitabilityWizard } from "@/components/procedure-suitability-wizard";

interface PortfolioAccessModalProps {
  item: PenileCase | null;
  onClose: () => void;
}

export function PortfolioAccessModal({ item, onClose }: PortfolioAccessModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!item || !mounted) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, mounted, onClose]);

  if (!item || !mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-y-auto bg-[#17110e]/75 px-4 py-6 backdrop-blur-[6px] sm:px-6 sm:py-10"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Fluxo reservado para fotos em ereção"
    >
      <div className="relative w-full max-w-3xl">
        <div className="relative max-h-[calc(100dvh-3rem)] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#fbf4ec] shadow-2xl shadow-black/30">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[#17110e] transition-colors hover:bg-white"
            aria-label="Fechar modal"
          >
            <X size={18} />
          </button>

          <div className="border-b border-black/10 px-5 py-6 sm:px-8">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#b96f2b]">
              Fluxo reservado
            </p>
            <h3 className="mt-3 max-w-2xl font-display text-3xl leading-tight text-[#17110e] sm:text-[2.6rem]">
              {item.caption}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#5b4c42] sm:text-base">
              Este acesso abre a etapa privada para quem quer comparar resultado em ereção, com
              contexto adicional e conversa direta antes de avançar.
            </p>
          </div>

          <div className="max-h-[calc(100dvh-11rem)] overflow-y-auto px-4 py-5 sm:px-6 sm:py-6">
            <ProcedureSuitabilityWizard
              context="portfolio"
              caseId={item.id}
              caseLabel={`${item.caption} — fotos em ereção`}
              compact
              theme="light"
            />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
