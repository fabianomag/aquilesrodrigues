import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { portraitImage, whatsappUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Harmoniza\u00e7\u00e3o Facial",
  description:
    "Harmoniza\u00e7\u00e3o Orofacial com Dr. Aquiles Rodrigues. Rinomodela\u00e7\u00e3o, preenchimento mandibular, mento, l\u00e1bios, botox e alectomia. CROMG 42004.",
};

const procedures = [
  {
    name: "Rinomodela\u00e7\u00e3o",
    desc: "Corre\u00e7\u00e3o do perfil nasal sem cirurgia. Resultado imediato com \u00e1cido hialur\u00f4nico.",
  },
  {
    name: "Preenchimento de Mand\u00edbula",
    desc: "Defini\u00e7\u00e3o do contorno mandibular para um rosto mais harm\u00f4nico e masculino.",
  },
  {
    name: "Preenchimento de Mento",
    desc: "Proje\u00e7\u00e3o do queixo para equilibrar o perfil facial.",
  },
  {
    name: "Preenchimento Labial",
    desc: "Volume e defini\u00e7\u00e3o natural dos l\u00e1bios.",
  },
  {
    name: "Botox",
    desc: "Redu\u00e7\u00e3o de linhas de express\u00e3o e rugas din\u00e2micas com toxina botul\u00ednica.",
  },
  {
    name: "Alectomia",
    desc: "Redu\u00e7\u00e3o das asas do nariz para um resultado mais refinado.",
  },
];

export default function HarmonizacaoFacialPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <p className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">
                Especialidade
              </p>
              <h1 className="font-display text-hero text-brand-50">
                Harmoniza&ccedil;&atilde;o Facial
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-brand-300 text-lg leading-relaxed">
                A harmoniza&ccedil;&atilde;o orofacial &eacute; o equil&iacute;brio entre est&eacute;tica e funcionalidade.
                Cada procedimento &eacute; planejado individualmente para respeitar a anatomia
                do seu rosto e entregar resultados naturais.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <a href={whatsappUrl("Ol\u00e1 Dr. Aquiles! Gostaria de saber mais sobre harmoniza\u00e7\u00e3o facial.")} target="_blank" rel="noopener noreferrer" className="cta-button mt-8 inline-flex">
                Agendar avalia&ccedil;&atilde;o <ArrowRight size={16} />
              </a>
            </Reveal>
          </div>
          <Reveal delay={300}>
            <div className="relative aspect-[4/5] bg-brand-800">
              <Image
                src={portraitImage}
                alt="Harmoniza\u00e7\u00e3o Facial"
                fill
                className="object-cover opacity-70"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Procedures */}
      <section className="py-20 md:py-28 bg-brand-900/50 section-padding">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="font-display text-section text-brand-100 mb-12">
              Procedimentos
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {procedures.map((proc, i) => (
              <Reveal key={proc.name} delay={i * 100}>
                <div className="flex gap-4">
                  <CheckCircle size={20} className="text-gold-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-lg text-brand-100 mb-1">
                      {proc.name}
                    </h3>
                    <p className="text-brand-400 text-sm leading-relaxed">{proc.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CFO compliance note */}
      <section className="py-16 section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-brand-500 text-sm leading-relaxed">
              Todos os procedimentos seguem as normas do Conselho Federal de Odontologia
              (Resolu&ccedil;&otilde;es CFO-196/2019 e CFO-198/2019). Fotos de resultados publicadas
              com autoriza&ccedil;&atilde;o expressa do paciente via TCLE.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-900 section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="font-display text-section text-brand-100">
              Quer saber o que &eacute; poss&iacute;vel para o seu rosto?
            </h2>
            <p className="mt-4 text-brand-400 leading-relaxed">
              Na consulta de avalia&ccedil;&atilde;o, analisamos seu rosto em detalhes e
              montamos um plano personalizado. Sem compromisso.
            </p>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="cta-button mt-8 inline-flex">
              Agendar avalia&ccedil;&atilde;o
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
