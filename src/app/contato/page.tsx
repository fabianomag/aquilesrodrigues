import type { Metadata } from "next";
import { MessageCircle, MapPin, Clock } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { siteConfig, whatsappUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Agende sua consulta com Dr. Aquiles Rodrigues. WhatsApp direto, sem intermedi\u00e1rios. Montes Claros e Belo Horizonte.",
};

export default function ContatoPage() {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 section-padding">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">
            Contato
          </p>
          <h1 className="font-display text-hero text-brand-50 mb-6">
            Vamos conversar
          </h1>
          <p className="text-brand-400 text-lg max-w-2xl leading-relaxed">
            O agendamento &eacute; direto pelo meu WhatsApp pessoal.
            Sem intermedi&aacute;rios, sem filas, com total discri&ccedil;&atilde;o.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* WhatsApp CTA */}
          <Reveal delay={200}>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-brand-800/50 border border-brand-700/30 p-10 hover:border-gold-500/30 transition-colors group"
            >
              <MessageCircle size={32} className="text-gold-500 mb-4" />
              <h3 className="font-display text-xl text-brand-100 mb-2">
                WhatsApp Direto
              </h3>
              <p className="text-brand-400 text-sm leading-relaxed mb-6">
                Me chame para agendar sua consulta ou tirar d&uacute;vidas.
                Respondo pessoalmente.
              </p>
              <span className="cta-button text-xs">
                Enviar mensagem
              </span>
            </a>
          </Reveal>

          {/* Locations */}
          <Reveal delay={300}>
            <div className="space-y-8">
              {siteConfig.locations.map((loc) => (
                <div key={loc} className="flex gap-4">
                  <MapPin size={20} className="text-gold-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-brand-100 font-medium mb-1">{loc}</h3>
                    <p className="text-brand-500 text-sm">
                      Endere&ccedil;o dispon&iacute;vel ap&oacute;s agendamento
                    </p>
                  </div>
                </div>
              ))}

              <div className="flex gap-4">
                <Clock size={20} className="text-gold-500 shrink-0 mt-1" />
                <div>
                  <h3 className="text-brand-100 font-medium mb-1">Hor&aacute;rios</h3>
                  <p className="text-brand-500 text-sm">
                    Mediante agendamento. Hor&aacute;rios flex&iacute;veis
                    para sua comodidade.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-brand-800/50">
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-brand-400 hover:text-gold-400 transition-colors"
                >
                  Instagram &mdash; @draquilesrodrigues
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
