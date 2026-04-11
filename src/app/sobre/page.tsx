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
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 section-padding">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        <Reveal>
          <div className="relative aspect-[3/4] bg-brand-800">
            <Image
              src={portraitImage}
              alt="Dr. Aquiles Rodrigues"
              fill
              className="object-cover opacity-80"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </Reveal>

        <div className="md:pt-8">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">
              Sobre
            </p>
            <h1 className="font-display text-hero text-brand-50 mb-8">
              Dr. Aquiles Rodrigues
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <div className="space-y-6 text-brand-300 leading-relaxed">
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
            <div className="mt-10 pt-8 border-t border-brand-800/50">
              <dl className="grid grid-cols-2 gap-6">
                <div>
                  <dt className="text-xs tracking-widest uppercase text-brand-500 mb-1">
                    Registro
                  </dt>
                  <dd className="text-brand-200">{siteConfig.cromg}</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-widest uppercase text-brand-500 mb-1">
                    Seguidores
                  </dt>
                  <dd className="text-brand-200">{siteConfig.followers}+</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-widest uppercase text-brand-500 mb-1">
                    Atendimento
                  </dt>
                  <dd className="text-brand-200">Montes Claros &amp; BH</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-widest uppercase text-brand-500 mb-1">
                    Instagram
                  </dt>
                  <dd>
                    <a
                      href={siteConfig.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-200 hover:text-gold-400 transition-colors"
                    >
                      @draquilesrodrigues
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="cta-button mt-10 inline-flex">
              Agendar consulta
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
