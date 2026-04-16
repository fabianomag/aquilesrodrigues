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
    <section className="bg-[#f7ead8] pt-32 pb-24 md:pt-40 md:pb-32 section-padding">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="text-xs tracking-[0.3em] uppercase text-[#b96f2b] mb-4">
            Contato
          </p>
          <h1 className="font-display text-hero text-[#17110e] mb-6">
            Vamos conversar
          </h1>
          <p className="text-[#4f4036] text-lg max-w-2xl leading-relaxed">
            O agendamento &eacute; direto pelo meu WhatsApp pessoal.
            Sem intermedi&aacute;rios, sem filas, com total discri&ccedil;&atilde;o.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* WhatsApp CTA */}
          <Reveal delay={200}>
            <div className="striped-card-shell">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="striped-card-panel block bg-[#f1e2cf] p-10 transition-colors group"
              >
                <MessageCircle size={32} className="text-[#17110e] mb-4" />
                <h3 className="font-display text-2xl text-[#17110e] mb-2">
                  WhatsApp direto
                </h3>
                <p className="text-[#5b4c42] text-sm leading-relaxed mb-6">
                  Me chame para agendar sua consulta ou tirar d&uacute;vidas.
                  A conversa segue sem intermedi&aacute;rios.
                </p>
                <span className="inline-flex rounded-md bg-[#17110e] px-6 py-4 text-xs font-medium uppercase tracking-[0.16em] text-[#fff8f0] transition-colors group-hover:bg-[#2a211d]">
                  Enviar mensagem
                </span>
              </a>
            </div>
          </Reveal>

          {/* Locations */}
          <Reveal delay={300}>
            <div className="space-y-8">
              {siteConfig.locations.map((loc, index) => (
                <div key={loc} className={`flex gap-4 rounded-md border border-black/10 bg-[#f1e2cf] p-5 ${index === siteConfig.locations.length - 1 ? "" : ""}`}>
                  <MapPin size={20} className="text-[#17110e] shrink-0 mt-1" />
                  <div>
                    <h3 className="text-[#17110e] font-medium mb-1">{loc}</h3>
                    <p className="text-[#5b4c42] text-sm">
                      Endere&ccedil;o dispon&iacute;vel ap&oacute;s agendamento
                    </p>
                  </div>
                </div>
              ))}

              <div className="flex gap-4 rounded-md border border-black/10 bg-[#f1e2cf] p-5">
                <Clock size={20} className="text-[#17110e] shrink-0 mt-1" />
                <div>
                  <h3 className="text-[#17110e] font-medium mb-1">Hor&aacute;rios</h3>
                  <p className="text-[#5b4c42] text-sm">
                    Mediante agendamento. Hor&aacute;rios flex&iacute;veis
                    para sua comodidade.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-black/10">
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#5b4c42] hover:text-[#17110e] transition-colors"
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
