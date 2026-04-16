import type { Metadata } from "next";
import { Clock3, MapPin, ShieldCheck, Stethoscope } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ProcedureAccordionImageSection } from "@/components/procedure-accordion-image-section";
import { ProcedureFaqSection } from "@/components/procedure-faq-section";
import { ProcedureSuitabilityWizard } from "@/components/procedure-suitability-wizard";
import { ProcedureHeroHeader } from "@/components/procedure-hero-header";
import { PenileGalleryArchive } from "@/components/penile-gallery-archive";
import { whatsappUrl } from "@/lib/config";
import { penileGalleryData } from "@/lib/gallery-data";

export const metadata: Metadata = {
  title: "Preenchimento Peniano com Ácido Hialurônico",
  description:
    "Preenchimento peniano com ácido hialurônico para ganho de circunferência com discrição, avaliação privada e resultado pensado para parecer natural.",
};

const heroSummary = [
  "Atendimento confidencial e direto",
  "Ácido hialurônico com plano individual",
  "Critério clínico antes de qualquer promessa",
  "Acompanhamento e refinamento quando indicado",
];

const treatmentPillars = [
  {
    title: "Segurança antes de espetáculo",
    body: "Este procedimento exige mais critério do que barulho. Volume, pele, retração, veias, glande e comportamento do tecido precisam conversar entre si para o resultado parecer convincente.",
  },
  {
    title: "Resultado natural é um desenho, não um número",
    body: "10 ml, 15 ml ou 20 ml não significam a mesma coisa em anatomias diferentes. O plano correto nasce da base do paciente e do tipo de presença que ele quer alcançar.",
  },
  {
    title: "O portfólio reservado tem função clínica",
    body: "Casos mais detalhados não entram para chocar nem para chamar clique. Eles entram para apoiar decisão, mostrar nuance e organizar expectativa de forma privada.",
  },
  {
    title: "Pós-procedimento é parte do resultado",
    body: "Acomodação, refinamento e orientação moldam a leitura final tanto quanto a aplicação. É por isso que acompanhamento faz parte da experiência e não aparece como detalhe depois.",
  },
];

const editorialPoints = [
  {
    title: "O peso da comparação silenciosa",
    body: "Nem toda procura nasce de vaidade vazia. Em muitos casos, a questão aparece na intimidade, na autopercepção e na sensação de que a anatomia não acompanha a própria expectativa.",
  },
  {
    title: "Desejo não é desculpa para exagero",
    body: "Querer mais presença não significa aceitar qualquer resultado. A diferença entre algo premium e algo tacky está justamente no limite, no desenho e no controle.",
  },
  {
    title: "Mais estrutura, menos improviso",
    body: "Alongadores, bombas e soluções mal conduzidas prometem muito e refinam pouco. O ganho real depende de plano, material adequado e técnica consistente.",
  },
  {
    title: "Resultado ajustável e reversível",
    body: "O ácido hialurônico permite refinamento, acompanhamento e correção de rota. Isso muda a segurança da decisão e ajuda o paciente a avançar sem sensação de irreversibilidade cega.",
  },
];

const faqCategories = [
  {
    label: "Geral",
    items: [
      {
        question: "Quem costuma procurar o preenchimento peniano?",
        answer:
          "Homens que querem mais circunferência, melhor presença flácida, mais confiança visual ou refinamento de contorno. O motivo varia, mas a condução correta sempre passa por expectativa alinhada.",
      },
      {
        question: "Essa avaliação é realmente discreta?",
        answer:
          "Sim. O processo já começa em um tom mais reservado e a continuidade acontece com contato direto, sem transformar a decisão em exposição desnecessária.",
      },
      {
        question: "O procedimento é sobre espessura ou comprimento?",
        answer:
          "O ganho principal é de circunferência. Em alguns casos existe melhora visual do comprimento flácido, mas o benefício central continua sendo volume, contorno e leitura de proporção.",
      },
    ],
  },
  {
    label: "Procedimento",
    items: [
      {
        question: "Como o preenchimento peniano com ácido hialurônico é feito?",
        answer:
          "O material é distribuído no plano adequado para ganho de circunferência e refinamento de contorno. É um procedimento ambulatorial, com anestesia local e acompanhamento posterior.",
      },
      {
        question: "Quanto tempo dura a sessão?",
        answer:
          "Em geral, de 40 a 60 minutos. O tempo exato varia conforme anatomia, quantidade de produto e necessidade de refinamento no próprio atendimento.",
      },
      {
        question: "É reversível?",
        answer:
          "Sim. Uma das vantagens do ácido hialurônico é permitir ajuste ou dissolução quando clinicamente indicado.",
      },
    ],
  },
  {
    label: "Resultados",
    items: [
      {
        question: "Como saber se o resultado vai ficar natural?",
        answer:
          "Naturalidade não depende de um número fixo. Ela depende de respeitar retração, pele, glande, distribuição do produto e base anatômica do paciente.",
      },
      {
        question: "Afeta ereção ou sensibilidade?",
        answer:
          "Quando o caso é bem indicado e a técnica respeita o plano correto, a intenção do procedimento é estética e não funcional. A avaliação existe justamente para orientar limite, cuidado e pós.",
      },
      {
        question: "10 ml, 15 ml ou 20 ml: como decidir?",
        answer:
          "O volume deve ser escolhido com base em anatomia, elasticidade e objetivo estético. O ml serve como referência; o desenho final depende do caso.",
      },
    ],
  },
  {
    label: "Pós e cuidados",
    items: [
      {
        question: "Quando posso voltar à rotina?",
        answer:
          "Atividades leves costumam voltar rápido. Já relações e esforços maiores entram no pós orientado, porque a acomodação do material influencia diretamente o acabamento final.",
      },
      {
        question: "O pós-procedimento interfere muito no resultado?",
        answer:
          "Interfere bastante. Resultado premium não termina na aplicação. Orientação de cuidado, revisão e ajuste fazem parte da qualidade final.",
      },
    ],
  },
  {
    label: "Segurança",
    items: [
      {
        question: "Quais riscos existem?",
        answer:
          "Como todo procedimento com injetáveis, podem ocorrer edema, hematoma, irregularidade temporária e necessidade de refinamento. O ponto central é reduzir risco com indicação, técnica e acompanhamento.",
      },
      {
        question: "Quando o procedimento não é indicado?",
        answer:
          "Quando a expectativa não conversa com a anatomia, quando há condição clínica que aumenta risco ou quando o paciente quer um tipo de transformação que o material não entrega de forma convincente.",
      },
    ],
  },
];

const homepageStyleIntro = [
  {
    icon: ShieldCheck,
    title: "Discrição real",
    text: "A conversa começa sem intermediação e sem transformar curiosidade em exposição.",
  },
  {
    icon: Clock3,
    title: "Ambulatorial",
    text: "Sessão direta, com anestesia local e retorno orientado à rotina leve.",
  },
  {
    icon: Stethoscope,
    title: "Critério clínico",
    text: "A indicação é pensada em cima da anatomia, não de uma promessa genérica.",
  },
  {
    icon: MapPin,
    title: "Montes Claros + BH",
    text: "Atendimento reservado nas duas cidades, com continuidade direta no WhatsApp.",
  },
];

const sectionLinks = [
  { href: "#tratamento", label: "Tratamento" },
  { href: "#resultados", label: "Resultados" },
  { href: "#qualificacao", label: "Avaliação inicial" },
  { href: "#faq", label: "Dúvidas" },
];

export default function PreenchimentoPenianoPage() {
  return (
    <>
      <ProcedureHeroHeader
        fullBleed
        imageMinHeightClass="min-h-[256px] md:min-h-[512px] lg:min-h-[1024px]"
        badgeLabel="Em foco"
        eyebrow="Procedimento íntimo"
        title={
          <>
            Preenchimento
            <br />
            peniano
          </>
        }
        intro="Mais circunferência, mais presença e mais controle estético, com uma moldura premium, discreta e clinicamente crível."
        details="Aqui você encontra uma leitura mais séria do procedimento: resultado, naturalidade, limite anatômico e acesso progressivo ao material clínico, sem transformar interesse em exposição."
        imageSrc="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1500&q=80"
        imageAlt="Retrato editorial masculino em fundo quente"
        summaryItems={heroSummary}
        ctaEyebrow="Comece do jeito certo"
        ctaTitle="Entenda sua indicação"
        ctaDescription="Uma avaliação inicial bem conduzida organiza expectativa, orçamento e próximo passo sem vulgarizar a jornada."
        ctaHref="#qualificacao"
        ctaLabel="Ver minha indicação"
        ctaCaption="Confidencial, direto e sem compromisso."
        sectionLinks={sectionLinks}
      />

      <section className="bg-[#f7ead8] px-6 py-20 md:px-12 md:py-24 lg:px-20" id="tratamento">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-section text-[#17110e]">
                Quando a questão deixa de ser impulso e vira critério
              </h2>
              <div className="mx-auto mt-6 h-px w-16 bg-[#17110e]" />
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#4f4036]">
                Desejo, curiosidade e expectativa importam. O que faz a decisão ficar melhor
                é colocar tudo isso ao lado de naturalidade, limite anatômico e segurança.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {editorialPoints.map((point, index) => (
              <Reveal key={point.title} delay={index * 100}>
                <div className="border-t border-black/15 pt-4">
                  <p className="text-sm uppercase tracking-[0.08em] text-[#17110e]">
                    {point.title}
                  </p>
                  <p className="mt-5 text-lg leading-relaxed text-[#5b4c42]">
                    {point.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3e3d2] px-6 py-20 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <ProcedureAccordionImageSection
              theme="light"
              eyebrow="Critério clínico"
              title="Antes de falar de ml, o seu caso precisa fazer sentido na anatomia."
              description="Quantidade de produto só entra depois que pele, retração, contorno, glande e objetivo estético são lidos com calma. É isso que protege naturalidade e acabamento."
              items={treatmentPillars}
              imageSrc="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1200&q=80"
              imageAlt="Retrato masculino em fundo neutro"
              imageKicker="Leitura individual"
              imageQuote="Volume convincente começa em critério, não em pressa."
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f7ead8] px-6 py-20 md:px-12 md:py-24 lg:px-20" id="resultados">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-xs uppercase tracking-[0.28em] text-[#b96f2b]">Resultados</p>
              <h2 className="mt-4 font-display text-section text-[#17110e]">
                O arquivo público continua aqui. O acesso reservado começa dentro dos cards.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#5b4c42]">
                Compare volume, contorno e progressão por faixa de ml na galeria pública.
                Se quiser ver fotos em ereção e material mais explícito, o fluxo reservado
                abre dentro do próprio card, sem quebrar a navegação da página.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <PenileGalleryArchive data={penileGalleryData} />
          </Reveal>
        </div>
      </section>

      <section className="bg-[#ead0b5] px-6 py-20 md:px-12 md:py-24 lg:px-20" id="qualificacao">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.28em] text-[#b96f2b]">
                Avaliação inicial
              </p>
              <h2 className="mt-4 font-display text-section text-[#17110e]">
                Comece pela sua indicação clínica.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#4f4036]">
                Se o seu interesse é mais volume, contorno natural, acabamento de glande
                ou uma avaliação mais reservada, o primeiro passo é organizar objetivo,
                orçamento e momento com clareza.
              </p>

              <div className="mt-10 grid gap-3 md:grid-cols-2">
                {homepageStyleIntro.map((item) => (
                  <div key={item.title} className="border border-black/10 bg-[#f7ead8] p-4">
                    <item.icon size={18} className="text-[#b96f2b]" />
                    <h3 className="mt-4 font-display text-xl text-[#17110e]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#5b4c42]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ProcedureSuitabilityWizard context="consultation" theme="light" />
          </Reveal>
        </div>
      </section>

      <ProcedureFaqSection
        theme="light"
        eyebrow="Tem dúvidas? Estamos aqui para ajudar."
        title="Entenda sua indicação com orientação personalizada."
        subtitle="Resultado, recuperação, segurança, naturalidade e pós-procedimento organizados em um formato mais claro para você avançar com mais confiança."
        categories={faqCategories}
        className="bg-[#f7ead8]"
      />

      <section className="bg-[#2d1d17] px-6 py-20 text-center md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-[#e7d0c0]">
              Discrição absoluta
            </p>
            <h2 className="mt-4 font-display text-section text-[#fff8f0]">
              Continue em sigilo, com a mesma clareza do início ao fim.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#e4d3c7]">
              Quando fizer sentido avançar, a conversa continua de forma privada, direta
              e com contexto suficiente para alinhar expectativa antes de qualquer decisão.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={whatsappUrl(
                  "Olá Dr. Aquiles! Quero conversar em sigilo sobre preenchimento peniano.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                Conversar em sigilo
              </a>
              <a href="#qualificacao" className="rounded-md border border-[#e7d0c0]/30 px-8 py-4 text-sm uppercase tracking-widest text-[#fff8f0] transition-colors duration-300 hover:border-[#e7d0c0] hover:text-[#e7d0c0]">
                Ver minha indicação
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
