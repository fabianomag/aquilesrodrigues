import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ProcedureAccordionImageSection } from "@/components/procedure-accordion-image-section";
import { ProcedureFaqSection } from "@/components/procedure-faq-section";
import { ProcedureHeroHeader } from "@/components/procedure-hero-header";
import { ClinicianShowcase } from "@/components/clinician-showcase";
import { HorizontalTicker } from "@/components/horizontal-ticker";
import { portraitImage, siteConfig, whatsappUrl } from "@/lib/config";

const heroSummary = [
  "302 mil+ seguidores no Instagram",
  "Montes Claros + Belo Horizonte",
  "Discrição como padrão",
];

const entryCards = [
  {
    title: "Harmonização facial",
    description:
      "Rinomodelação, mandíbula, mento, lábios, botox e alectomia com planejamento anatômico, refinamento e resultado natural.",
    href: "/harmonizacao-facial",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
    kicker: "Face pública",
  },
  {
    title: "Preenchimento peniano",
    description:
      "Página própria, galeria pública organizada por volume e fluxo reservado para material mais sensível quando fizer sentido.",
    href: "/preenchimento-peniano",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80",
    kicker: "Fluxo reservado",
  },
];

const tickerItems = [
  "@perfil_bh",
  "@paciente_mc",
  "@criador_01",
  "@resultado_real",
  "@perfil_sp",
  "@cliente_face",
];

const trustReasons = [
  {
    title: "Anatomia antes do excesso",
    body: "O desenho do resultado parte da estrutura de base, não de exagero visual. Isso vale para a face e também para a vertical íntima.",
  },
  {
    title: "Discrição sem perder força comercial",
    body: "O site entende que resultado visual importa, mas organiza isso com mais controle, sem parecer apelativo ou improvisado.",
  },
  {
    title: "Contato com menos atrito",
    body: "Quando a página enquadra melhor a decisão, a conversa no WhatsApp começa mais madura, mais qualificada e mais objetiva.",
  },
  {
    title: "Antes e depois com mais direção",
    body: "Resultados continuam no centro da decisão, só que agora entram em um sistema mais claro, mais premium e mais coerente.",
  },
];

const resultCards = [
  {
    kicker: "Ver casos",
    title: "Resultados",
    description: "Abra a vitrine por procedimento e veja os casos com mais clareza.",
    href: "/resultados",
    label: "Abrir resultados",
  },
  {
    kicker: "Fluxo íntimo",
    title: "Preenchimento peniano",
    description: "Galeria pública por volume e acesso reservado quando fizer sentido.",
    href: "/preenchimento-peniano#resultados",
    label: "Ver galeria pública",
  },
  {
    kicker: "Dúvidas",
    title: "Perguntas frequentes",
    description: "Entenda indicação, rotina, contexto clínico e próximos passos.",
    href: "/perguntas-frequentes",
    label: "Ler perguntas",
  },
];

const homeFaqCategories = [
  {
    label: "Harmonização facial",
    items: [
      {
        question: "A harmonização facial aqui é pensada para resultado natural?",
        answer:
          "Sim. O planejamento busca estrutura, proporção e refinamento sem cair em excesso ou leitura artificial.",
      },
      {
        question: "Quais procedimentos entram nessa vertical?",
        answer:
          "Rinomodelação, mandíbula, mento, lábios, botox e alectomia estão entre os principais. A indicação final depende da anatomia e do objetivo de cada caso.",
      },
    ],
  },
  {
    label: "Procedimentos íntimos",
    items: [
      {
        question: "O preenchimento peniano é tratado com discrição?",
        answer:
          "Sim. A navegação pública organiza bem os resultados e o material mais sensível entra em fluxo reservado, com mais contexto e mais controle.",
      },
      {
        question: "O que muda com o ácido hialurônico?",
        answer:
          "O ganho principal é de circunferência, contorno e presença visual. O desenho final depende da anatomia de base e do objetivo do paciente.",
      },
    ],
  },
  {
    label: "Contato",
    items: [
      {
        question: "Como funciona o primeiro contato?",
        answer:
          "O primeiro passo é uma conversa reservada pelo WhatsApp para entender objetivo, contexto e o que realmente faz sentido antes de avançar.",
      },
      {
        question: "Dr. Aquiles atende onde?",
        answer:
          "Em Montes Claros e Belo Horizonte, com atendimento direto e sem intermediários desnecessários.",
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <ProcedureHeroHeader
        reverseLayout={true}
        fullBleed
        imageMinHeightClass="min-h-[256px] md:min-h-[512px] lg:min-h-[1024px]"
        imagePositionClass="object-[center_25%]"
        cardMaxWidthClass="lg:max-w-5xl"
        badgeLabel="Doutor Aquiles Rodrigues"
        eyebrow={`${siteConfig.cromg} · Montes Claros · Belo Horizonte`}
        title={
          <>
            <br />
            <span className="animate-gentle-fade-up animate-delay-2 block">
              Estética facial e íntima
            </span>
            <span className="animate-gentle-fade-up animate-delay-3 block">
              com mais critério.
            </span>
          </>
        }
        intro="As informações essenciais vêm primeiro: quem atende, onde atende e como começa a conversa."
        details="Harmonização facial e procedimentos íntimos com páginas próprias, prova visual melhor enquadrada e contato direto."
        imageSrc={portraitImage}
        imageAlt="Doutor Aquiles Rodrigues"
        summaryItems={heroSummary}
        ctaEyebrow="Comece por aqui"
        ctaTitle="Fale com a clínica"
        ctaDescription="O primeiro passo segue simples, reservado e sem intermediação."
        ctaHref={whatsappUrl()}
        ctaLabel="Abrir WhatsApp"
        ctaCaption="Resultados e páginas de procedimento organizam o resto da jornada."
        bottomSlot={
          <div className="bg-[#17110e]">
            <HorizontalTicker items={tickerItems} durationSeconds={26} theme="dark" compact />
          </div>
        }
      />

      <section className="bg-[#f7ead8] px-6 py-24 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#b96f2b]">
              Escolha sua entrada
            </p>
            <h2 className="max-w-3xl font-display text-section text-[#17110e]">
              Duas frentes claras, com a mesma régua de técnica, discrição e presença.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {entryCards.map((item, index) => (
              <Reveal key={item.href} delay={index * 120}>
                <Link
                  href={item.href}
                  className="group soft-hover-lift block overflow-hidden rounded-md border border-black/15 bg-[#f1e2cf]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#dcc0ab]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="border-t border-black/10 p-6">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#b96f2b]">
                      {item.kicker}
                    </p>
                    <h3 className="mt-4 font-display text-[2.2rem] leading-[0.94] text-[#17110e]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-[#5b4c42]">
                      {item.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#17110e] transition-all group-hover:gap-3">
                      Explorar
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={220}>
            <div className="striped-card-shell mt-8">
              <div className="striped-card-panel soft-hover-lift flex flex-col gap-6 bg-[#fff3e5] p-6 md:flex-row md:items-center md:justify-between md:p-8">
                <div className="max-w-2xl">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[#8b6c57]">
                    Contato direto
                  </p>
                  <h3 className="mt-4 font-display text-[2.4rem] leading-[0.94] text-[#17110e]">
                    O primeiro passo continua acontecendo no WhatsApp.
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-[#5b4c42]">
                    Sem formulário longo, sem central de atendimento e sem ruído antes da
                    conversa real.
                  </p>
                </div>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-[#17110e] px-7 py-4 text-sm font-medium uppercase tracking-[0.16em] text-[#fff8f0] transition-colors hover:bg-[#2a211d]"
                >
                  Abrir WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f3e3d2] py-24 md:py-28 section-padding">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <ProcedureAccordionImageSection
              theme="light"
              eyebrow="Critério"
              title="O que sustenta o atendimento é técnica, discrição e resultado bem enquadrado."
              description="A força da marca não vem de excesso visual. Ela vem de mostrar o que importa com clareza, com contexto e com mais compatibilidade entre forma e conteúdo."
              items={trustReasons}
              imageSrc="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80"
              imageAlt="Retrato masculino editorial"
              imageKicker="Leitura de marca"
              imageQuote="Mais direção visual. Menos ruído no que realmente importa."
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f7ead8] py-24 md:py-28">
        <div className="w-full">
          <Reveal>
            <ClinicianShowcase
              eyebrow="Responsável pela clínica"
              title="Conheça o profissional por trás da experiência."
              description="Mais de 302 mil pessoas acompanham o Dr. Aquiles, mas o que sustenta a confiança é o trabalho dentro do consultório: leitura anatômica, discrição e direção clínica compatível com cada caso."
              ctaHref="/sobre"
              ctaLabel="Conhecer o Dr. Aquiles"
              portraitSrc={portraitImage}
              portraitAlt="Dr. Aquiles Rodrigues"
              metrics={[
                { label: "Audiência", value: "302 mil+" },
                { label: "Registro", value: "CROMG 42004" },
                { label: "Praças", value: "Montes Claros + BH" },
              ]}
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f3e3d2] px-6 py-24 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#b96f2b]">
              Atalhos úteis
            </p>
            <h2 className="max-w-3xl font-display text-section text-[#17110e]">
              O resto do site entra para orientar a decisão, não para disputar atenção com a hero.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {resultCards.map((item, index) => (
              <Reveal key={item.href} delay={index * 100}>
                <Link
                  href={item.href}
                  className="group block rounded-md border border-black/15 bg-[#fff3e5] p-6 transition-colors hover:bg-[#f7ead8]"
                >
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[#b96f2b]">
                    {item.kicker}
                  </p>
                  <h3 className="mt-4 font-display text-[2rem] leading-[0.94] text-[#17110e]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-[#5b4c42]">
                    {item.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#17110e] transition-all group-hover:gap-3">
                    {item.label}
                    <ArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcedureFaqSection
        theme="light"
        eyebrow="Tem dúvidas? Estamos aqui para orientar."
        title="Respostas claras ajudam a decidir com mais confiança."
        subtitle="Do primeiro contato ao tipo de resultado esperado, esta seção organiza as perguntas mais comuns sem tirar a experiência do tom premium."
        categories={homeFaqCategories}
        className="bg-[#f7ead8]"
      />

      <section className="bg-[#ead0b5] px-6 py-20 text-center md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#b96f2b]">
              Próximo passo
            </p>
            <h2 className="mt-4 font-display text-section text-[#17110e]">
              Continue direto, com mais clareza e menos ruído.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#4f4036]">
              Se você já sabe o que procura, a melhor rota é simples: ver o procedimento
              certo, enquadrar a expectativa e seguir para a conversa.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-[#17110e] px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-[#fff8f0] transition-colors hover:bg-[#2a211d]"
              >
                Falar com a clínica
              </a>
              <Link
                href="/resultados"
                className="inline-flex items-center justify-center rounded-md border border-black/10 px-8 py-4 text-sm uppercase tracking-[0.16em] text-[#17110e] transition-colors hover:border-black/20 hover:bg-[#f1e2cf]"
              >
                Explorar resultados
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
