"use client";

import { useState } from "react";
import { X, Lock } from "lucide-react";
import { whatsappUrl } from "@/lib/config";

interface SeductiveFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  caseId: string;
}

export function SeductiveFormModal({ isOpen, onClose, caseId }: SeductiveFormModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [budget, setBudget] = useState(5000);
  const [mlSelection, setMlSelection] = useState<number | null>(null);
  const [whatsapp, setWhatsapp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const mlOptions = [10, 15, 20, 25];

  if (!isOpen) return null;

  const handleGoToConfirmation = () => {
    if (!whatsapp.trim()) {
      setErrorMessage("Informe seu WhatsApp para continuar.");
      return;
    }

    setErrorMessage("");
    setStep(2);
  };

  const handleConfirmAccess = async () => {
    if (!whatsapp.trim()) {
      setErrorMessage("Informe seu WhatsApp para continuar.");
      setStep(1);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/privado-access", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          caseId,
          budget,
          mlSelection,
          whatsapp: whatsapp.trim(),
          consentAccepted: true,
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error ?? "Não foi possível liberar o acesso.");
      }

      const payload = await response.json();
      window.location.assign(payload.redirectTo ?? "/privado/acesso");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Falha ao confirmar o acesso.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentWhatsappMsg = whatsappUrl(
    `Olá Dr. Aquiles! Estou no site e gostei do caso. Meu WhatsApp é ${whatsapp || "não informado"}. Estou pensando em ${mlSelection ? `${mlSelection}ml` : "algum volume"} com um orçamento próximo de R$${budget.toLocaleString("pt-BR")}. Faça algo especial pra mim!`,
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-brand-950/80 backdrop-blur-md p-0 sm:p-6 transition-all duration-500">
      <div className="w-full max-w-lg bg-accent border border-brand-800 sm:rounded-tl-2xl sm:rounded-tr-2xl rounded-tl-3xl rounded-tr-3xl shadow-2xl relative overflow-hidden flex flex-col max-h-[95vh] sm:max-h-[90vh]">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-brand-800/50 relative z-10">
          <h2 className="font-display text-2xl text-gold-400">Conte pra mim o que você imagina</h2>
          <button onClick={onClose} className="text-brand-400 hover:text-brand-100 transition-colors p-2 rounded-full hover:bg-brand-800">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto relative z-10">
          {step === 1 ? (
            <div className="space-y-8 animate-fade-in-up">
              
              <div>
                <label className="block text-brand-200 text-xs tracking-[0.1em] font-sans uppercase mb-4">Quantos ml você está pensando? <span className="text-brand-500 lowercase">(Opcional)</span></label>
                <div className="flex flex-wrap gap-3">
                  {mlOptions.map(ml => (
                    <button 
                      key={ml}
                      onClick={() => setMlSelection(ml)}
                      className={`px-5 py-3 rounded-full text-sm font-sans transition-all duration-300 font-medium ${mlSelection === ml ? 'bg-gold-500 text-brand-950 shadow-[0_0_15px_rgba(201,165,74,0.4)] scale-105' : 'bg-brand-800 border border-brand-700 text-brand-300 hover:bg-brand-700 hover:text-brand-100 hover:border-gold-600/30'}`}
                    >
                      {ml} ml{ml === 25 ? '+' : ''}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <label className="block text-brand-200 text-xs tracking-[0.1em] font-sans uppercase mb-6">Qual seu orçamento aproximado para o investimento? <span className="text-gold-500">*</span></label>
                <input 
                  type="range" 
                  min="3000" max="15000" step="500" 
                  value={budget} 
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-1 bg-brand-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
                />
                <div className="flex justify-between mt-4">
                  <span className="text-brand-500 text-xs text-left">R$ 3.000</span>
                  <span className="text-gold-400 font-display text-2xl drop-shadow-md">R$ {budget.toLocaleString('pt-BR')}{budget === 15000 ? '+' : ''}</span>
                  <span className="text-brand-500 text-xs text-right">R$ 15.000+</span>
                </div>
              </div>

              <div className="pt-2">
                <label className="block text-brand-200 text-xs tracking-[0.1em] font-sans uppercase mb-3">
                  Seu WhatsApp <span className="text-gold-500">*</span>
                </label>
                <input
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="(31) 99999-9999"
                  className="w-full rounded-xl border border-brand-700 bg-brand-950/70 px-4 py-4 text-brand-100 placeholder:text-brand-500 focus:border-gold-500 focus:outline-none"
                />
              </div>

              {errorMessage ? (
                <p className="text-sm text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded-xl px-4 py-3">
                  {errorMessage}
                </p>
              ) : null}

              <div className="pt-6">
                <button 
                  onClick={handleGoToConfirmation}
                  className="w-full bg-gold-400 text-brand-950 font-sans font-medium py-4 uppercase tracking-[0.15em] hover:bg-gold-500 transition-all shadow-[0_0_20px_rgba(212,185,120,0.15)]"
                >
                  Ver o que é possível
                </button>
              </div>

            </div>
          ) : (
            <div className="space-y-6 animate-fade-in-up">
              
              <div className="bg-brand-950/50 rounded-xl p-5 border border-brand-800">
                 <div className="flex gap-3 mb-2">
                   <Lock size={18} className="text-gold-500 mt-0.5" />
                   <p className="text-brand-300 text-sm leading-relaxed font-sans">
                     <strong className="text-brand-100 block mb-1">Acesso Privado</strong>
                     Confirmo que desejo ver imagens mais detalhadas para fins de consulta privada e entendo que elas são protegidas.
                   </p>
                 </div>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={handleConfirmAccess}
                  disabled={isSubmitting}
                  className="w-full bg-brand-800 text-gold-400 border border-gold-600/30 font-sans font-medium py-4 uppercase tracking-[0.1em] hover:bg-brand-700 hover:text-gold-300 hover:border-gold-500 transition-all flex justify-center items-center gap-2"
                >
                  <Lock size={16} /> {isSubmitting ? "Liberando..." : "Ver fotos em ereção agora"}
                </button>
                <a 
                  href={currentWhatsappMsg}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full block text-center bg-gold-400 text-brand-950 font-sans font-medium py-4 uppercase tracking-[0.1em] hover:bg-gold-500 transition-all shadow-[0_0_20px_rgba(212,185,120,0.2)]"
                >
                  Falar com o Dr. Aquiles
                </a>
              </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
}
