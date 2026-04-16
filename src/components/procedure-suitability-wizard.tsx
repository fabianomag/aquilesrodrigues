"use client";

import { useState } from "react";
import { ArrowRight, ChevronLeft, Lock, MessageCircle } from "lucide-react";
import { clsx } from "clsx";
import { whatsappUrl } from "@/lib/config";

type WizardContext = "consultation" | "portfolio";

interface ProcedureSuitabilityWizardProps {
  context?: WizardContext;
  caseId?: string;
  caseLabel?: string;
  compact?: boolean;
  theme?: "light" | "dark";
}

const goalOptions = [
  { id: "circunferencia", label: "Mais circunferência" },
  { id: "natural", label: "Contorno natural" },
  { id: "glande", label: "Glande / acabamento" },
  { id: "discreto", label: "Avaliação discreta" },
];

const locationOptions = [
  { id: "montes-claros", label: "Montes Claros" },
  { id: "belo-horizonte", label: "Belo Horizonte" },
  { id: "a-definir", label: "Ainda decidindo" },
];

const timelineOptions = [
  { id: "agora", label: "Quero avaliar agora" },
  { id: "30-dias", label: "Próximas semanas" },
  { id: "pesquisando", label: "Só pesquisando" },
];

const wizardSteps = [
  {
    eyebrow: "Sua avaliação",
    title: "Entenda sua indicação",
    description:
      "Alinhe objetivo e faixa de volume antes de avançar. A ideia aqui é reduzir dúvida, não criar atrito.",
  },
  {
    eyebrow: "Sua avaliação",
    title: "Contexto e investimento",
    description:
      "Defina cidade, momento e faixa de investimento para orientar a conversa com mais clareza.",
  },
  {
    eyebrow: "Sua avaliação",
    title: "Continue em privado",
    description:
      "Escolha se quer falar direto no WhatsApp ou liberar o portfólio reservado com fotos em ereção e contexto clínico adicional.",
  },
];

function formatBudget(value: number) {
  return `R$ ${value.toLocaleString("pt-BR")}${value === 18000 ? "+" : ""}`;
}

export function ProcedureSuitabilityWizard({
  context = "consultation",
  caseId = "general-intake",
  caseLabel,
  compact = false,
  theme = "light",
}: ProcedureSuitabilityWizardProps) {
  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState(goalOptions[0].id);
  const [mlSelection, setMlSelection] = useState<number | null>(null);
  const [budget, setBudget] = useState(context === "portfolio" ? 8000 : 9000);
  const [location, setLocation] = useState(locationOptions[0].id);
  const [timeline, setTimeline] = useState(timelineOptions[0].id);
  const [whatsapp, setWhatsapp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isLight = theme === "light";

  const currentStep = wizardSteps[step];

  const goalLabel = goalOptions.find((item) => item.id === goal)?.label ?? "";
  const locationLabel =
    locationOptions.find((item) => item.id === location)?.label ?? "";
  const timelineLabel =
    timelineOptions.find((item) => item.id === timeline)?.label ?? "";

  const whatsappMessage = whatsappUrl(
    [
      "Olá Dr. Aquiles! Vim da página de preenchimento peniano.",
      `Meu objetivo principal é: ${goalLabel}.`,
      `Faixa de investimento: ${formatBudget(budget)}.`,
      `Local preferido: ${locationLabel}.`,
      `Momento: ${timelineLabel}.`,
      mlSelection ? `Estou pensando em algo perto de ${mlSelection} ml.` : "",
      caseLabel ? `Também quero conversar sobre este caso: ${caseLabel}.` : "",
      context === "portfolio"
        ? "Quero seguir em privado e avaliar portfólio reservado."
        : "Quero entender minha indicação e próximos passos.",
    ]
      .filter(Boolean)
      .join(" "),
  );

  const goNext = () => {
    if (step === 2) return;
    setErrorMessage("");
    setStep((current) => current + 1);
  };

  const goBack = () => {
    if (step === 0) return;
    setErrorMessage("");
    setStep((current) => current - 1);
  };

  const ensureWhatsapp = () => {
    if (!whatsapp.trim()) {
      setErrorMessage("Informe seu WhatsApp para continuar em privado.");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const handleWhatsappConversation = () => {
    if (!ensureWhatsapp()) {
      return;
    }

    window.open(whatsappMessage, "_blank", "noopener,noreferrer");
  };

  const handleReservedPortfolio = async () => {
    if (!ensureWhatsapp()) {
      return;
    }

    setIsSubmitting(true);
    const accessWindow = window.open("", "_blank");

    try {
      const response = await fetch("/api/privado-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          caseId,
          caseLabel,
          budget,
          mlSelection,
          whatsapp: whatsapp.trim(),
          goal: goalLabel,
          location: locationLabel,
          timeline: timelineLabel,
          source: context === "portfolio" ? "gallery-card" : "inline-wizard",
          consentAccepted: true,
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error ?? "Não foi possível liberar o acesso reservado.");
      }

      const payload = await response.json();
      const targetUrl = payload.redirectTo ?? "/privado/acesso";

      if (accessWindow) {
        accessWindow.location.href = targetUrl;
        accessWindow.focus();
      } else {
        window.location.assign(targetUrl);
      }
    } catch (error) {
      accessWindow?.close();
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Falha ao liberar o portfólio reservado.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const primaryAction =
    context === "portfolio"
      ? {
          label: isSubmitting ? "Liberando..." : "Ver fotos em ereção",
          onClick: handleReservedPortfolio,
          icon: Lock,
          className:
            isLight
              ? "bg-[#c8873e] text-[#fffaf3] hover:bg-[#b97836]"
              : "bg-gold-400 text-brand-950 hover:bg-gold-500",
        }
      : {
          label: "Falar com o Dr. Aquiles",
          onClick: handleWhatsappConversation,
          icon: MessageCircle,
          className: isLight
            ? "bg-[#17110e] text-[#fffaf3] hover:bg-[#2a211d]"
            : "bg-gold-400 text-brand-950 hover:bg-gold-500",
        };

  const secondaryAction =
    context === "portfolio"
      ? {
          label: "Conversar no WhatsApp",
          onClick: handleWhatsappConversation,
          icon: MessageCircle,
        }
      : {
          label: isSubmitting ? "Liberando..." : "Ver fotos em ereção",
          onClick: handleReservedPortfolio,
          icon: Lock,
        };

  return (
    <div
      className={clsx(
        "border",
        isLight
          ? "rounded-md border-black/15 bg-[#fbf4ec]"
          : "rounded-[2rem] border-brand-800/60 bg-brand-900/80 backdrop-blur-sm",
        compact ? "p-5 sm:p-6" : "p-6 sm:p-8",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p
            className={clsx(
              "text-[11px] uppercase tracking-[0.28em]",
              isLight ? "text-[#b96f2b]" : "text-gold-500",
            )}
          >
            {currentStep.eyebrow}
          </p>
          <h3 className={clsx("mt-3 font-display text-3xl", isLight ? "text-[#17110e]" : "text-brand-50")}>
            {currentStep.title}
          </h3>
        </div>
        <p className={clsx("text-xs uppercase tracking-[0.18em]", isLight ? "text-[#6a5b4e]" : "text-brand-400")}>
          Etapa {step + 1} de {wizardSteps.length}
        </p>
      </div>

      <div className={clsx("mt-5 h-1.5 overflow-hidden rounded-full", isLight ? "bg-black/8" : "bg-brand-800")}>
        <div
          className={clsx(
            "h-full rounded-full transition-all duration-500",
            isLight ? "bg-[#c8873e]" : "bg-gradient-to-r from-gold-500 to-gold-300",
          )}
          style={{ width: `${((step + 1) / wizardSteps.length) * 100}%` }}
        />
      </div>

      <p className={clsx("mt-5 max-w-2xl text-sm leading-relaxed sm:text-base", isLight ? "text-[#5b4c42]" : "text-brand-300")}>
        {currentStep.description}
      </p>

      {caseLabel ? (
        <div
          className={clsx(
            "mt-5 inline-flex border px-4 py-2 text-xs uppercase tracking-[0.14em]",
            isLight
              ? "rounded-md border-[#b96f2b]/20 bg-[#f1dfcb] text-[#17110e]"
              : "rounded-full border-gold-500/30 bg-gold-500/10 text-gold-300",
          )}
        >
          Caso selecionado: {caseLabel}
        </div>
      ) : null}

      <div className="mt-8">
        {step === 0 ? (
          <div className="space-y-7">
            <div>
              <p className={clsx("mb-4 text-xs uppercase tracking-[0.16em]", isLight ? "text-[#6a5b4e]" : "text-brand-300")}>
                Qual resultado você quer priorizar?
              </p>
              <div className="flex flex-wrap gap-3">
                {goalOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setGoal(option.id)}
                    className={clsx(
                      "border px-4 py-3 text-sm transition-colors",
                      goal === option.id
                        ? isLight
                          ? "rounded-md border-[#b96f2b]/25 bg-[#ead0b5] text-[#17110e]"
                          : "rounded-full border-gold-500/40 bg-gold-500/10 text-gold-300"
                        : isLight
                          ? "rounded-md border-black/10 bg-white/35 text-[#5b4c42] hover:border-black/20 hover:text-[#17110e]"
                          : "rounded-full border-brand-700 bg-brand-950/70 text-brand-300 hover:border-brand-600 hover:text-brand-100",
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className={clsx("mb-4 text-xs uppercase tracking-[0.16em]", isLight ? "text-[#6a5b4e]" : "text-brand-300")}>
                Quantos ml você imagina? <span className={clsx("lowercase", isLight ? "text-[#8a786a]" : "text-brand-500")}>(opcional)</span>
              </p>
              <div className="flex flex-wrap gap-3">
                {[10, 15, 20, 25].map((ml) => (
                  <button
                    key={ml}
                    type="button"
                    onClick={() => setMlSelection(ml)}
                    className={clsx(
                      "border px-4 py-3 text-sm transition-colors",
                      mlSelection === ml
                        ? isLight
                          ? "rounded-md border-[#b96f2b]/25 bg-[#ead0b5] text-[#17110e]"
                          : "rounded-full border-gold-500/40 bg-gold-500/10 text-gold-300"
                        : isLight
                          ? "rounded-md border-black/10 bg-white/35 text-[#5b4c42] hover:border-black/20 hover:text-[#17110e]"
                          : "rounded-full border-brand-700 bg-brand-950/70 text-brand-300 hover:border-brand-600 hover:text-brand-100",
                    )}
                  >
                    {ml} ml{ml === 25 ? "+" : ""}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {step === 1 ? (
          <div className="space-y-7">
            <div>
              <div className="mb-4 flex items-center justify-between gap-4">
                <p className={clsx("text-xs uppercase tracking-[0.16em]", isLight ? "text-[#6a5b4e]" : "text-brand-300")}>
                  Qual faixa de investimento faz sentido hoje?
                </p>
                <span className={clsx("font-display text-2xl", isLight ? "text-[#17110e]" : "text-gold-300")}>
                  {formatBudget(budget)}
                </span>
              </div>
              <input
                type="range"
                min="4000"
                max="18000"
                step="500"
                value={budget}
                onChange={(event) => setBudget(Number(event.target.value))}
                className="w-full cursor-pointer accent-gold-500"
              />
              <div className={clsx("mt-3 flex justify-between text-xs", isLight ? "text-[#8a786a]" : "text-brand-500")}>
                <span>R$ 4.000</span>
                <span>R$ 18.000+</span>
              </div>
            </div>

            <div>
              <p className={clsx("mb-4 text-xs uppercase tracking-[0.16em]", isLight ? "text-[#6a5b4e]" : "text-brand-300")}>
                Onde você quer ser atendido?
              </p>
              <div className="flex flex-wrap gap-3">
                {locationOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setLocation(option.id)}
                    className={clsx(
                      "border px-4 py-3 text-sm transition-colors",
                      location === option.id
                        ? isLight
                          ? "rounded-md border-[#b96f2b]/25 bg-[#ead0b5] text-[#17110e]"
                          : "rounded-full border-gold-500/40 bg-gold-500/10 text-gold-300"
                        : isLight
                          ? "rounded-md border-black/10 bg-white/35 text-[#5b4c42] hover:border-black/20 hover:text-[#17110e]"
                          : "rounded-full border-brand-700 bg-brand-950/70 text-brand-300 hover:border-brand-600 hover:text-brand-100",
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className={clsx("mb-4 text-xs uppercase tracking-[0.16em]", isLight ? "text-[#6a5b4e]" : "text-brand-300")}>
                Em que momento você está?
              </p>
              <div className="flex flex-wrap gap-3">
                {timelineOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setTimeline(option.id)}
                    className={clsx(
                      "border px-4 py-3 text-sm transition-colors",
                      timeline === option.id
                        ? isLight
                          ? "rounded-md border-[#b96f2b]/25 bg-[#ead0b5] text-[#17110e]"
                          : "rounded-full border-gold-500/40 bg-gold-500/10 text-gold-300"
                        : isLight
                          ? "rounded-md border-black/10 bg-white/35 text-[#5b4c42] hover:border-black/20 hover:text-[#17110e]"
                          : "rounded-full border-brand-700 bg-brand-950/70 text-brand-300 hover:border-brand-600 hover:text-brand-100",
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="space-y-6">
            <div
              className={clsx(
                "border p-5",
                isLight
                  ? "rounded-md border-black/10 bg-[#f1dfcb]"
                  : "rounded-[1.5rem] border-brand-800/60 bg-brand-950/70",
              )}
            >
              <p className={clsx("text-xs uppercase tracking-[0.16em]", isLight ? "text-[#b96f2b]" : "text-gold-400")}>
                Resumo da qualificação
              </p>
              <div className={clsx("mt-4 grid gap-3 text-sm sm:grid-cols-2", isLight ? "text-[#5b4c42]" : "text-brand-300")}>
                <p>Objetivo: <span className={clsx(isLight ? "text-[#17110e]" : "text-brand-100")}>{goalLabel}</span></p>
                <p>Investimento: <span className={clsx(isLight ? "text-[#17110e]" : "text-brand-100")}>{formatBudget(budget)}</span></p>
                <p>Cidade: <span className={clsx(isLight ? "text-[#17110e]" : "text-brand-100")}>{locationLabel}</span></p>
                <p>Momento: <span className={clsx(isLight ? "text-[#17110e]" : "text-brand-100")}>{timelineLabel}</span></p>
                <p className="sm:col-span-2">
                  Volume pensado: <span className={clsx(isLight ? "text-[#17110e]" : "text-brand-100")}>{mlSelection ? `${mlSelection} ml` : "A definir"}</span>
                </p>
              </div>
            </div>

            <div>
              <label className={clsx("mb-3 block text-xs uppercase tracking-[0.16em]", isLight ? "text-[#6a5b4e]" : "text-brand-300")}>
                Seu WhatsApp <span className={clsx(isLight ? "text-[#b96f2b]" : "text-gold-500")}>*</span>
              </label>
              <input
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={whatsapp}
                onChange={(event) => setWhatsapp(event.target.value)}
                placeholder="(31) 99999-9999"
                className={clsx(
                  "w-full border px-4 py-4 focus:outline-none",
                  isLight
                    ? "rounded-md border-black/10 bg-white/55 text-[#17110e] placeholder:text-[#9a8b80] focus:border-[#b96f2b]"
                    : "rounded-2xl border-brand-700 bg-brand-950/70 text-brand-50 placeholder:text-brand-500 focus:border-gold-500",
                )}
              />
            </div>

            <div
              className={clsx(
                "border p-5",
                isLight
                  ? "rounded-md border-black/10 bg-[#f6eee4]"
                  : "rounded-[1.5rem] border-gold-500/20 bg-gold-500/5",
              )}
            >
              <p className={clsx("text-sm leading-relaxed", isLight ? "text-[#5b4c42]" : "text-brand-300")}>
                A conversa privada é o centro da próxima etapa. O portfólio reservado existe
                para aprofundar expectativa e contexto, sem substituir a avaliação clínica.
              </p>
            </div>
          </div>
        ) : null}
      </div>

      {errorMessage ? (
        <p
          className={clsx(
            "mt-6 border px-4 py-3 text-sm",
            isLight
              ? "rounded-md border-rose-500/20 bg-rose-500/10 text-rose-900"
              : "rounded-2xl border-rose-500/20 bg-rose-500/10 text-rose-200",
          )}
        >
          {errorMessage}
        </p>
      ) : null}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          {step > 0 ? (
            <button
              type="button"
              onClick={goBack}
              className={clsx(
                "inline-flex items-center gap-2 border px-4 py-3 text-xs uppercase tracking-[0.16em] transition-colors",
                isLight
                  ? "rounded-md border-black/10 text-[#5b4c42] hover:border-black/20 hover:text-[#17110e]"
                  : "rounded-full border-brand-700 text-brand-300 hover:border-brand-600 hover:text-brand-100",
              )}
            >
              <ChevronLeft size={16} /> Voltar
            </button>
          ) : null}
        </div>

        {step < 2 ? (
          <button
            type="button"
            onClick={goNext}
            className={clsx(
              "inline-flex items-center justify-center gap-2 px-6 py-4 text-xs uppercase tracking-[0.16em] transition-colors",
              isLight
                ? "rounded-md bg-[#17110e] text-[#fffaf3] hover:bg-[#2a211d]"
                : "rounded-full bg-gold-400 text-brand-950 hover:bg-gold-500",
            )}
          >
            Continuar <ArrowRight size={16} />
          </button>
        ) : (
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <button
              type="button"
              onClick={primaryAction.onClick}
              disabled={isSubmitting}
              className={clsx(
                "inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-xs uppercase tracking-[0.16em] transition-colors disabled:cursor-wait disabled:opacity-70",
                primaryAction.className,
              )}
            >
              <primaryAction.icon size={16} /> {primaryAction.label}
            </button>
            <button
              type="button"
              onClick={secondaryAction.onClick}
              disabled={isSubmitting}
              className={clsx(
                "inline-flex items-center justify-center gap-2 border px-6 py-4 text-xs uppercase tracking-[0.16em] transition-colors disabled:cursor-wait disabled:opacity-70",
                isLight
                  ? "rounded-md border-black/10 bg-white/55 text-[#17110e] hover:border-black/20 hover:text-[#17110e]"
                  : "rounded-full border-brand-700 bg-brand-950/60 text-brand-100 hover:border-gold-500/30 hover:text-gold-300",
              )}
            >
              <secondaryAction.icon size={16} /> {secondaryAction.label}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
