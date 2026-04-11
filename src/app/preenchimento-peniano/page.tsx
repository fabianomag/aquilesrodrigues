import type { Metadata } from "next";
import { ArrowRight, Shield, Clock, RotateCcw, Stethoscope } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { whatsappUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Preenchimento Peniano com \u00c1cido Hialur\u00f4nico",
  description:
    "Preenchimento peniano com \u00e1cido hialur\u00f4nico: aumento de volume e circunfer\u00eancia. Procedimento seguro, ambulatorial e revers\u00edvel. Dr. Aquiles Rodrigues \u2014 CROMG 42004.",
};

const benefits = [
  {
    icon: Shield,
    title: "Seguro",
    desc: "\u00c1cido hialur\u00f4nico \u00e9 biocompat\u00edvel e amplamente utilizado em est\u00e9tica h\u00e1 d\u00e9cadas.",
  },
  {
    icon: Clock,
    title: "R\u00e1pido",
    desc: "Procedimento ambulatorial com dura\u00e7\u00e3o de 40 a 60 minutos, com anestesia local.",
  },
  {
    icon: RotateCcw,
    title: "Revers\u00edvel",
    desc: "O \u00e1cido hialur\u00f4nico pode ser dissolvido a qualquer momento com hialuronidase.",
  },
  {
    icon: Stethoscope,
    title: "Acompanhamento",
    desc: "Retorno incluso para avalia\u00e7\u00e3o do resultado e ajustes, se necess\u00e1rios.",
  },
];

const steps = [
  {
    num: "01",
    title: "Consulta",
    desc: "Avalia\u00e7\u00e3o individual, hist\u00f3rico, expectativas. Tudo com total discri\u00e7\u00e3o.",
  },
  {
    num: "02",
    title: "Planejamento",
    desc: "Defini\u00e7\u00e3o do volume, t\u00e9cnica e produto ideal para o seu caso.",
  },
  {
    num: "03",
    title: "Procedimento",
    desc: "Aplica\u00e7\u00e3o com anestesia local, em ambiente cl\u00ednico. 40\u201360 minutos.",
  },
  {
    num: "04",
    title: "Recupera\u00e7\u00e3o",
    desc: "Retorno \u00e0s atividades leves no mesmo dia. Repouso sexual de 7\u201314 dias.",
  },
];

export default function PreenchimentoPenianoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 section-padding">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">
              Procedimento
            </p>
            <h1 className="font-display text-hero text-brand-50">
              Preenchimento Peniano
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-brand-300 text-lg md:text-xl leading-relaxed">
              Aumento de volume e circunfer&ecirc;ncia com &aacute;cido hialur&ocirc;nico.
              Um procedimento que muda a autoconfian&ccedil;a de quem busca &mdash;
              com t&eacute;cnica, discri&ccedil;&atilde;o e resultados reais.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <a
              href={whatsappUrl("Ol\u00e1 Dr. Aquiles! Gostaria de informa\u00e7\u00f5es sobre preenchimento peniano.")}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button mt-8 inline-flex"
            >
              Consulta particular <ArrowRight size={16} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-brand-900/50 section-padding">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="font-display text-section text-brand-100 mb-12">
              Por que escolher este procedimento
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 100}>
                <div className="flex gap-5">
                  <b.icon size={28} className="text-gold-500 shrink-0" />
                  <div>
                    <h3 className="font-display text-lg text-brand-100 mb-2">{b.title}</h3>
                    <p className="text-brand-400 text-sm leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-28 section-padding">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className="font-display text-section text-brand-100 mb-12">
              Como funciona
            </h2>
          </Reveal>
          <div className="space-y-10">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 100}>
                <div className="flex gap-6 items-start">
                  <span className="font-display text-3xl text-gold-500/30 shrink-0 w-12">
                    {step.num}
                  </span>
                  <div className="border-b border-brand-800/50 pb-8 flex-1">
                    <h3 className="font-display text-xl text-brand-100 mb-2">{step.title}</h3>
                    <p className="text-brand-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Discretion note */}
      <section className="py-16 bg-brand-900/30 section-padding">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="border-l-2 border-gold-500 pl-6">
              <p className="text-brand-300 leading-relaxed">
                <strong className="text-brand-100">Discri&ccedil;&atilde;o total.</strong> Entendo que
                este &eacute; um assunto &iacute;ntimo. Desde o primeiro contato at&eacute; o p&oacute;s-procedimento,
                tudo &eacute; tratado com o m&aacute;ximo sigilo. O agendamento &eacute; direto pelo meu
                WhatsApp pessoal &mdash; sem intermedi&aacute;rios, sem exposi&ccedil;&atilde;o.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ specific */}
      <section className="py-20 md:py-28 section-padding">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="font-display text-section text-brand-100 mb-12">
              Perguntas que voc&ecirc; faria no particular
            </h2>
          </Reveal>

          {[
            {
              q: "Qual o resultado esperado em termos de medidas?",
              a: "O aumento m\u00e9dio em circunfer\u00eancia \u00e9 de 1 a 3 cm, dependendo do volume aplicado e da anatomia individual. O resultado \u00e9 discutido e planejado na consulta.",
            },
            {
              q: "Quem pode fazer?",
              a: "Homens maiores de 18 anos, sem contraindica\u00e7\u00f5es cl\u00ednicas (doen\u00e7as autoimunes ativas, infec\u00e7\u00f5es locais, alergias ao \u00e1cido hialur\u00f4nico). A avalia\u00e7\u00e3o individual \u00e9 feita na consulta.",
            },
            {
              q: "Afeta a fun\u00e7\u00e3o sexual?",
              a: "N\u00e3o. O procedimento \u00e9 est\u00e9tico e n\u00e3o interfere na fun\u00e7\u00e3o er\u00e9til, sensibilidade ou fertilidade.",
            },
            {
              q: "Quanto custa?",
              a: "O valor depende do volume e da t\u00e9cnica. Discutimos tudo com transpar\u00eancia na consulta. Me chame no WhatsApp para uma conversa inicial.",
            },
          ].map((faq, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="border-b border-brand-800/50 pb-8 mb-8">
                <h3 className="font-display text-lg text-brand-100 mb-3">{faq.q}</h3>
                <p className="text-brand-400 leading-relaxed">{faq.a}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={400}>
            <div className="text-center mt-8">
              <a
                href={whatsappUrl("Ol\u00e1 Dr. Aquiles! Gostaria de mais informa\u00e7\u00f5es sobre preenchimento peniano.")}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                Conversar no WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
