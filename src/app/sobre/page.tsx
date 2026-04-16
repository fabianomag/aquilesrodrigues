import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { portraitImage, siteConfig, whatsappUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Dr. Aquiles Rodrigues \u2014 Cirurgi\u00e3o-Dentista, Master em Harmoniza\u00e7\u00e3o Orofacial. +302mil seguidores. CROMG 42004. Atendimento em Montes Claros e BH.",
};

export default function SobrePage() {
  return (
    <section className="bg-[#f7ead8] pt-32 pb-24 md:pt-40 md:pb-32 section-padding">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        <Reveal>
          <div className="striped-card-shell">
            <div className="striped-card-panel relative aspect-[3/4] overflow-hidden bg-[#ead0b5]">
              <Image
                src={portraitImage}
                alt="Dr. Aquiles Rodrigues"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </Reveal>

        <div className="md:pt-8">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-[#b96f2b] mb-4">
              Sobre
            </p>
            <h1 className="font-display text-hero text-[#17110e] mb-8">
              Dr. Aquiles Rodrigues
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <div className="space-y-6 text-[#4f4036] leading-relaxed text-lg">
              <p>
                Cirurgi&atilde;o-Dentista com registro {siteConfig.cromg}, Master em
                Harmoniza&ccedil;&atilde;o Orofacial. Mais de 302 mil pessoas acompanham meu
                trabalho nas redes sociais &mdash; mas o que realmente importa s&atilde;o os
                resultados no consult&oacute;rio.
              </p>
              <p>
                Minha especialidade &eacute; transformar com precis&atilde;o. Seja no rosto, com
                rinomodela&ccedil;&atilde;o e harmoniza&ccedil;&atilde;o facial, ou em procedimentos est&eacute;ticos
                masculinos como o preenchimento peniano &mdash; cada caso &eacute; planejado
                individualmente para entregar o melhor resultado poss&iacute;vel.
              </p>
              <p>
                Atendo em Montes Claros e Belo Horizonte. O agendamento &eacute; direto pelo
                meu WhatsApp &mdash; sem intermedi&aacute;rios, com total discri&ccedil;&atilde;o.
              </p>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-black/10 pt-8">
              {[
                { label: "Registro", value: siteConfig.cromg },
                { label: "Seguidores", value: `${siteConfig.followers}+` },
                { label: "Atendimento", value: "Montes Claros & BH" },
                { label: "Instagram", value: "@draquilesrodrigues", href: siteConfig.instagram },
              ].map((item) => (
                <div key={item.label} className="rounded-md border border-black/10 bg-[#f1e2cf] p-4">
                  <dt className="text-xs tracking-widest uppercase text-[#b96f2b] mb-1">
                    {item.label}
                  </dt>
                  <dd className="text-[#17110e]">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-[#5b4c42]"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={500}>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex rounded-md bg-[#17110e] px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-[#fff8f0] transition-colors hover:bg-[#2a211d]"
            >
              Agendar consulta
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
