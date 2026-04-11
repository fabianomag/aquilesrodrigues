import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { siteConfig, whatsappUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Guia Completo: Preenchimento Peniano com Ácido Hialurônico em 2026",
  description:
    "Tudo sobre preenchimento peniano com ácido hialurônico: como funciona, resultados, riscos, valores, recuperação e como escolher o profissional certo. Por Dr. Aquiles Rodrigues — CROMG 42004.",
  keywords: [
    "preenchimento peniano",
    "preenchimento peniano ácido hialurônico",
    "aumento peniano",
    "preenchimento peniano valor",
    "preenchimento peniano antes e depois",
    "preenchimento peniano é seguro",
    "preenchimento peniano Montes Claros",
    "preenchimento peniano BH",
    "ácido hialurônico pênis",
    "aumento de circunferência peniana",
  ],
  openGraph: {
    title: "Guia Completo: Preenchimento Peniano com Ácido Hialurônico",
    description:
      "Entenda o procedimento, resultados reais, riscos e valores. Informação técnica confiável por Dr. Aquiles Rodrigues.",
    type: "article",
    publishedTime: "2026-04-11T00:00:00Z",
    authors: ["Dr. Aquiles Rodrigues"],
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  headline:
    "Guia Completo: Preenchimento Peniano com Ácido Hialurônico em 2026",
  description:
    "Artigo educativo completo sobre preenchimento peniano com ácido hialurônico — procedimento, resultados, riscos e valores.",
  author: {
    "@type": "Person",
    name: "Dr. Aquiles Rodrigues",
    jobTitle: "Cirurgião-Dentista — Especialista em Harmonização Orofacial",
    url: siteConfig.url,
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  datePublished: "2026-04-11",
  dateModified: "2026-04-11",
  mainEntityOfPage: `${siteConfig.url}/blog/guia-completo-preenchimento-peniano-acido-hialuronico`,
  medicalAudience: {
    "@type": "PatientAudience",
    audienceType: "Patient",
  },
};

const faqItems = [
  {
    q: "O preenchimento peniano com ácido hialurônico dói?",
    a: "O procedimento é realizado com anestesia local tópica e/ou infiltrativa, o que minimiza significativamente o desconforto. A maioria dos pacientes descreve a sensação como uma leve pressão. O desconforto pós-procedimento é geralmente leve e controlável com analgésicos comuns por 24 a 48 horas.",
  },
  {
    q: "Quanto tempo dura o resultado do preenchimento peniano?",
    a: "Os resultados do preenchimento peniano com ácido hialurônico costumam durar entre 12 e 24 meses, variando conforme o metabolismo individual, o tipo de ácido hialurônico utilizado e o volume aplicado. Sessões de manutenção podem prolongar os resultados de forma cumulativa.",
  },
  {
    q: "O preenchimento peniano é reversível?",
    a: "Sim. Uma das maiores vantagens do ácido hialurônico é ser reversível. Em caso de insatisfação ou complicação, é possível aplicar hialuronidase, uma enzima que dissolve o produto de forma rápida e segura. Isso torna o ácido hialurônico a opção mais segura entre os preenchimentos disponíveis.",
  },
  {
    q: "Preenchimento peniano aumenta o comprimento?",
    a: "O preenchimento com ácido hialurônico atua principalmente no aumento de circunferência (calibre). O ganho médio é de 1 a 3 cm em circunferência. Para aumento de comprimento, existem outras técnicas complementares que podem ser discutidas na consulta.",
  },
  {
    q: "Quanto custa o preenchimento peniano?",
    a: "O valor varia conforme a quantidade de produto utilizada, a complexidade do caso e a região. Em consultórios especializados, o investimento médio fica entre R$ 5.000 e R$ 15.000. Desconfie de valores muito abaixo da média — a qualidade do produto e a experiência do profissional fazem toda a diferença no resultado e na segurança.",
  },
  {
    q: "Quando posso ter relações sexuais após o procedimento?",
    a: "Recomenda-se abstinência sexual por 15 a 21 dias após o procedimento, período necessário para a estabilização do produto e cicatrização adequada dos tecidos. Essa orientação varia conforme cada caso e será detalhada na consulta.",
  },
  {
    q: "O procedimento afeta a sensibilidade?",
    a: "Quando realizado por profissional experiente e com técnica adequada, o preenchimento peniano não afeta a sensibilidade. A aplicação é feita na camada subdérmica, distante das terminações nervosas responsáveis pela sensibilidade. Alterações temporárias de sensibilidade podem ocorrer nas primeiras semanas, normalizando espontaneamente.",
  },
  {
    q: "Quem pode fazer o preenchimento peniano?",
    a: "O preenchimento peniano é indicado para homens maiores de 18 anos que desejam aumento de circunferência, correção de assimetrias ou melhora estética. Não é indicado para pacientes com infecções ativas na região genital, distúrbios de coagulação não controlados ou expectativas irreais quanto ao resultado.",
  },
  {
    q: "O preenchimento peniano aparece? Fica natural?",
    a: "Com técnica adequada e produto de qualidade, o resultado é completamente natural ao toque e à visão. O ácido hialurônico se integra aos tecidos, mantendo a textura e a maleabilidade naturais. A parceira geralmente não percebe que houve procedimento — apenas nota a diferença no resultado.",
  },
  {
    q: "É seguro fazer preenchimento peniano com dentista?",
    a: "Cirurgiões-dentistas com especialização em Harmonização Orofacial são profissionais legalmente habilitados e tecnicamente treinados para procedimentos com ácido hialurônico. O domínio de anatomia, técnicas de injeção e manejo de intercorrências é parte da formação e prática diária. O importante é verificar o registro profissional (CRO/CROMG) e a experiência específica do profissional.",
  },
];

function Section({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <Reveal>
      <section id={id} className="mb-12 scroll-mt-24">
        {children}
      </section>
    </Reveal>
  );
}

function H2({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="font-display text-2xl md:text-3xl text-white mb-4 mt-8"
    >
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display text-xl text-gold mb-3 mt-6">{children}</h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-brand-300 leading-relaxed mb-4 text-base md:text-lg">
      {children}
    </p>
  );
}

function CTA() {
  return (
    <div className="border border-gold/30 rounded-lg p-6 md:p-8 bg-gold/5 my-8">
      <p className="text-white font-display text-xl mb-3">
        Quer saber se o preenchimento peniano é indicado para o seu caso?
      </p>
      <p className="text-brand-400 mb-4">
        Agende uma consulta discreta e personalizada com Dr. Aquiles Rodrigues.
        Sigilo total.
      </p>
      <a
        href={whatsappUrl(
          "Olá Dr. Aquiles! Li o artigo sobre preenchimento peniano e gostaria de agendar uma avaliação."
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-gold text-brand-950 px-6 py-3 rounded font-medium hover:bg-gold/90 transition-colors"
      >
        Agendar consulta via WhatsApp
      </a>
    </div>
  );
}

export default function ArtigoPreenchimentoPeniano() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen bg-brand-950 pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-6">
          {/* Header */}
          <Reveal>
            <div className="mb-12">
              <Link
                href="/blog"
                className="text-brand-500 hover:text-gold text-sm mb-4 inline-block transition-colors"
              >
                ← Voltar ao blog
              </Link>
              <span className="block text-gold text-sm font-medium tracking-wide uppercase mb-3">
                Preenchimento Peniano
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight">
                Guia Completo: Preenchimento Peniano com Ácido Hialurônico em
                2026
              </h1>
              <p className="text-brand-400 text-lg leading-relaxed mb-6">
                Tudo o que você precisa saber sobre o procedimento — como
                funciona, resultados reais, riscos, valores e como escolher o
                profissional certo. Informação técnica sem tabu.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-brand-500">
                <span>Por Dr. Aquiles Rodrigues — {siteConfig.cromg}</span>
                <span>•</span>
                <span>12 min de leitura</span>
                <span>•</span>
                <span>Atualizado em abril 2026</span>
              </div>
            </div>
          </Reveal>

          {/* Table of Contents */}
          <Reveal>
            <nav className="border border-brand-800 rounded-lg p-6 mb-12 bg-brand-900/30">
              <p className="text-white font-medium mb-3">Neste artigo:</p>
              <ol className="space-y-2 text-brand-400 text-sm">
                <li>
                  <a href="#o-que-e" className="hover:text-gold transition-colors">
                    1. O que é o preenchimento peniano com ácido hialurônico
                  </a>
                </li>
                <li>
                  <a
                    href="#como-funciona"
                    className="hover:text-gold transition-colors"
                  >
                    2. Como o procedimento funciona na prática
                  </a>
                </li>
                <li>
                  <a
                    href="#resultados"
                    className="hover:text-gold transition-colors"
                  >
                    3. Resultados — o que esperar de verdade
                  </a>
                </li>
                <li>
                  <a href="#riscos" className="hover:text-gold transition-colors">
                    4. Riscos e contraindicações
                  </a>
                </li>
                <li>
                  <a
                    href="#recuperacao"
                    className="hover:text-gold transition-colors"
                  >
                    5. Recuperação e cuidados pós-procedimento
                  </a>
                </li>
                <li>
                  <a href="#valores" className="hover:text-gold transition-colors">
                    6. Valores e investimento
                  </a>
                </li>
                <li>
                  <a
                    href="#escolher-profissional"
                    className="hover:text-gold transition-colors"
                  >
                    7. Como escolher o profissional certo
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-gold transition-colors">
                    8. Perguntas frequentes
                  </a>
                </li>
              </ol>
            </nav>
          </Reveal>

          {/* Section 1 */}
          <Section id="o-que-e">
            <H2>O que é o preenchimento peniano com ácido hialurônico</H2>
            <P>
              O preenchimento peniano com ácido hialurônico é um procedimento
              estético minimamente invasivo que visa aumentar a circunferência
              (calibre) do pênis. O ácido hialurônico — a mesma substância
              utilizada em harmonizações faciais, preenchimento labial e
              tratamentos dermatológicos em todo o mundo — é aplicado na camada
              subdérmica do corpo peniano, promovendo aumento de volume de forma
              controlada e reversível.
            </P>
            <P>
              Diferente de cirurgias invasivas como a penoplastia com prótese ou
              a lipoescultura peniana, o preenchimento com ácido hialurônico não
              requer internação, anestesia geral ou cortes. O procedimento é
              realizado em consultório, com anestesia local, e o paciente retorna
              às atividades normais em poucos dias.
            </P>
            <P>
              O ácido hialurônico é uma substância naturalmente presente no corpo
              humano — encontrado na pele, articulações e tecido conjuntivo. Sua
              biocompatibilidade é uma das razões pelas quais reações alérgicas
              são extremamente raras. Além disso, é completamente absorvido pelo
              organismo ao longo do tempo, o que o torna uma das opções mais
              seguras disponíveis.
            </P>

            <H3>Para quem é indicado</H3>
            <P>
              O procedimento é procurado principalmente por homens que desejam
              aumento de circunferência, correção de assimetrias, melhora
              estética do corpo peniano ou que apresentam insatisfação com o
              calibre. Não se trata de corrigir uma disfunção — e sim de
              proporcionar ao homem maior confiança e satisfação com o próprio
              corpo.
            </P>
            <P>
              É importante ter expectativas realistas. O preenchimento peniano
              não transforma a anatomia de forma radical — ele potencializa o que
              já existe, adicionando volume de forma proporcional e natural.
            </P>
          </Section>

          {/* Section 2 */}
          <Section id="como-funciona">
            <H2>Como o procedimento funciona na prática</H2>
            <P>
              O primeiro passo é a consulta de avaliação. Nesse momento, o
              profissional examina a anatomia do paciente, discute expectativas,
              explica detalhadamente o procedimento e define a quantidade de
              produto necessária. Essa etapa é essencial — o resultado depende
              tanto da técnica quanto do planejamento.
            </P>

            <H3>Etapas do procedimento</H3>
            <P>
              O procedimento em si leva entre 30 e 60 minutos. A região é
              higienizada com solução antisséptica e anestesiada com creme
              anestésico tópico de alta concentração, aplicado 30 a 40 minutos
              antes do início. Em alguns casos, utiliza-se também anestesia
              infiltrativa local para maior conforto.
            </P>
            <P>
              O ácido hialurônico é então injetado com cânula microfina na camada
              subdérmica — entre a pele e o corpo cavernoso. A técnica com cânula
              (em vez de agulha) reduz significativamente o risco de hematomas,
              equimoses e lesão vascular. A distribuição é feita de forma
              uniforme, respeitando a anatomia e garantindo simetria.
            </P>
            <P>
              Após a aplicação, o profissional modela o produto manualmente para
              garantir distribuição homogênea. Um curativo leve é aplicado e o
              paciente recebe as orientações pós-procedimento por escrito.
            </P>

            <H3>Tipos de ácido hialurônico utilizados</H3>
            <P>
              Nem todo ácido hialurônico é igual. Para preenchimento peniano,
              utilizam-se produtos de alta densidade e longa duração,
              especificamente desenvolvidos para áreas que exigem volume e
              sustentação. Produtos faciais de baixa densidade não são adequados
              — podem migrar ou ser absorvidos rapidamente.
            </P>
            <P>
              A escolha do produto é uma das decisões mais importantes do
              procedimento e deve ser feita exclusivamente pelo profissional com
              base na avaliação individual de cada caso.
            </P>
          </Section>

          {/* Section 3 */}
          <Section id="resultados">
            <H2>Resultados — o que esperar de verdade</H2>
            <P>
              Os resultados do preenchimento peniano são imediatos e visíveis
              logo após o procedimento. No entanto, o resultado final estabiliza
              entre 7 e 14 dias, após a resolução do edema inicial e a
              acomodação do produto nos tecidos.
            </P>

            <H3>Ganho de circunferência</H3>
            <P>
              O ganho médio em circunferência varia entre 1 e 3 cm, dependendo da
              quantidade de produto aplicada e da anatomia individual. Em geral,
              aplicam-se de 10 a 30 ml de ácido hialurônico por sessão. Casos que
              buscam ganho maior podem ser tratados em sessões espaçadas.
            </P>

            <H3>Duração dos resultados</H3>
            <P>
              O ácido hialurônico é gradualmente absorvido pelo organismo ao
              longo de 12 a 24 meses. A durabilidade depende do tipo de produto,
              do volume aplicado e do metabolismo individual. Sessões de
              manutenção, quando desejadas, tendem a apresentar resultados mais
              duradouros, já que o tecido acumula colágeno ao redor do produto.
            </P>

            <H3>Naturalidade</H3>
            <P>
              Um dos maiores receios dos pacientes é que o resultado "apareça" ou
              pareça artificial. Com técnica adequada e produto de qualidade, o
              pênis mantém textura, maleabilidade e sensibilidade naturais. O
              ganho de volume é proporcional e harmonioso — não altera a forma
              natural do órgão.
            </P>
          </Section>

          <CTA />

          {/* Section 4 */}
          <Section id="riscos">
            <H2>Riscos e contraindicações</H2>
            <P>
              Como qualquer procedimento médico-estético, o preenchimento peniano
              não é isento de riscos. A maioria dos efeitos colaterais é leve e
              transitória, mas é fundamental que o paciente conheça as
              possibilidades antes de decidir.
            </P>

            <H3>Efeitos colaterais comuns (leves e temporários)</H3>
            <P>
              Edema (inchaço) leve nos primeiros 3 a 7 dias é esperado e faz
              parte do processo de cicatrização. Equimoses (hematomas) leves
              podem ocorrer nos pontos de entrada da cânula, resolvendo-se em 5 a
              10 dias. Sensibilidade temporariamente alterada nas primeiras
              semanas é possível, normalizando espontaneamente.
            </P>

            <H3>Complicações raras</H3>
            <P>
              Nódulos palpáveis podem ocorrer por distribuição irregular do
              produto — tratáveis com massagem orientada ou, se necessário,
              hialuronidase. Infecção é rara quando o procedimento é realizado em
              ambiente controlado com técnica asséptica. Reação alérgica ao ácido
              hialurônico é extremamente rara devido à biocompatibilidade do
              produto.
            </P>

            <H3>A segurança da reversibilidade</H3>
            <P>
              A principal vantagem do ácido hialurônico sobre outros
              preenchimentos é a reversibilidade total. Se por qualquer motivo o
              paciente não estiver satisfeito ou ocorrer uma complicação, a
              hialuronidase dissolve o produto em horas. Essa segurança não
              existe em preenchimentos com PMMA, silicone ou outros materiais
              permanentes.
            </P>

            <H3>Contraindicações</H3>
            <P>
              O procedimento não é indicado em caso de infecções ativas na região
              genital, distúrbios de coagulação não controlados, uso de
              anticoagulantes sem orientação médica, doenças autoimunes ativas ou
              expectativas irreais quanto ao resultado. Pacientes menores de 18
              anos também não são candidatos ao procedimento.
            </P>
          </Section>

          {/* Section 5 */}
          <Section id="recuperacao">
            <H2>Recuperação e cuidados pós-procedimento</H2>
            <P>
              A recuperação é uma das grandes vantagens do preenchimento com ácido
              hialurônico — é significativamente mais simples do que procedimentos
              cirúrgicos.
            </P>

            <H3>Primeiras 48 horas</H3>
            <P>
              Espere edema moderado e sensibilidade na região. Compressas frias
              (não gelo direto) podem ser aplicadas para conforto. Evitar
              atividade física intensa e banhos quentes prolongados. Manter a
              região limpa e seca. Usar roupas íntimas de suporte confortável.
            </P>

            <H3>Primeira semana</H3>
            <P>
              O edema reduz progressivamente. É possível retornar ao trabalho em
              24 a 48 horas na maioria dos casos (desde que não envolva esforço
              físico pesado). Evitar saunas, piscinas e exposição prolongada ao
              calor.
            </P>

            <H3>Duas a três semanas</H3>
            <P>
              Atividades sexuais devem ser evitadas por 15 a 21 dias — esse é o
              período necessário para estabilização completa do produto e
              cicatrização dos pontos de entrada. Atividade física moderada pode
              ser retomada após 7 a 10 dias.
            </P>

            <H3>Resultado final</H3>
            <P>
              O resultado final é avaliado entre 14 e 30 dias, quando o edema
              residual é completamente absorvido e o produto se acomoda
              definitivamente nos tecidos.
            </P>
          </Section>

          {/* Section 6 */}
          <Section id="valores">
            <H2>Valores e investimento</H2>
            <P>
              O valor do preenchimento peniano varia conforme a quantidade de
              ácido hialurônico utilizada, o tipo de produto escolhido e a
              complexidade do caso. Em consultórios especializados com
              profissionais experientes, o investimento médio situa-se entre R$
              5.000 e R$ 15.000.
            </P>
            <P>
              Fatores que influenciam o valor incluem o volume de produto
              necessário (cada ml tem custo), a marca e qualidade do ácido
              hialurônico, a experiência e formação do profissional, a estrutura
              do consultório e os materiais utilizados.
            </P>
            <P>
              Um alerta importante: desconfie de valores muito abaixo da média de
              mercado. Produto de baixa qualidade, diluição excessiva ou
              profissionais sem formação adequada são as principais causas de
              resultados insatisfatórios e complicações. O preenchimento peniano é
              um procedimento técnico que exige conhecimento anatômico profundo —
              não é o tipo de investimento onde o mais barato é a melhor escolha.
            </P>
          </Section>

          {/* Section 7 */}
          <Section id="escolher-profissional">
            <H2>Como escolher o profissional certo</H2>
            <P>
              A escolha do profissional é provavelmente a decisão mais importante
              de todo o processo. Um profissional experiente, com formação sólida
              e prática comprovada, faz toda a diferença entre um resultado
              excelente e uma experiência frustrante.
            </P>

            <H3>O que verificar</H3>
            <P>
              Confirme o registro profissional ativo no conselho de classe (CRO,
              CRM ou equivalente). Verifique a especialização em procedimentos
              estéticos — nem todo profissional de saúde tem formação específica
              para injetáveis. Busque resultados de pacientes anteriores (fotos
              antes e depois, sempre com consentimento). Avalie a estrutura do
              consultório — ambiente adequado, materiais de qualidade, protocolos
              de higiene.
            </P>

            <H3>Sinais de alerta</H3>
            <P>
              Fuja de profissionais que prometem resultados exagerados,
              pressionam para decisão imediata, não esclarecem riscos e
              contraindicações, não pedem TCLE (Termo de Consentimento), oferecem
              preços muito abaixo do mercado, ou não possuem registro profissional
              verificável.
            </P>

            <H3>A consulta de avaliação</H3>
            <P>
              Uma boa consulta de avaliação é detalhada, personalizada e sem
              pressa. O profissional deve examinar, ouvir suas expectativas,
              explicar o procedimento com transparência e responder todas as
              dúvidas — mesmo as que parecem óbvias. Se você sair da consulta
              com dúvidas não respondidas, esse não é o profissional certo.
            </P>
          </Section>

          <CTA />

          {/* Section 8 — FAQ */}
          <Section id="faq">
            <H2>Perguntas frequentes</H2>
            <P>
              Reunimos as dúvidas mais comuns sobre preenchimento peniano com
              ácido hialurônico. Se sua pergunta não estiver aqui, entre em
              contato pelo WhatsApp — a consulta é discreta e sigilosa.
            </P>

            <div className="space-y-6 mt-8">
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  className="border border-brand-800 rounded-lg p-6"
                >
                  <h3 className="text-white font-medium text-lg mb-3">
                    {item.q}
                  </h3>
                  <p className="text-brand-400 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>

            {/* FAQ Schema */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: faqItems.map((item) => ({
                    "@type": "Question",
                    name: item.q,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: item.a,
                    },
                  })),
                }),
              }}
            />
          </Section>

          {/* Author Box */}
          <Reveal>
            <div className="border border-brand-800 rounded-lg p-6 md:p-8 bg-brand-900/30 mt-12">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-20 h-20 rounded-full bg-brand-800 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-display text-gold">AR</span>
                </div>
                <div>
                  <h3 className="text-white font-display text-xl mb-1">
                    Dr. Aquiles Rodrigues
                  </h3>
                  <p className="text-gold text-sm mb-3">{siteConfig.cromg}</p>
                  <p className="text-brand-400 leading-relaxed">
                    Cirurgião-Dentista com especialização em Harmonização
                    Orofacial. Mais de 302 mil seguidores no Instagram.
                    Atendimento em Montes Claros/MG e Belo Horizonte/MG.
                    Referência em rinomodelação, preenchimento peniano e
                    harmonização facial completa.
                  </p>
                  <div className="flex gap-4 mt-4">
                    <a
                      href={siteConfig.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-500 hover:text-gold text-sm transition-colors"
                    >
                      Instagram →
                    </a>
                    <a
                      href={whatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-500 hover:text-gold text-sm transition-colors"
                    >
                      WhatsApp →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Breadcrumb Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: siteConfig.url,
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Blog",
                    item: `${siteConfig.url}/blog`,
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Guia Completo: Preenchimento Peniano com Ácido Hialurônico",
                    item: `${siteConfig.url}/blog/guia-completo-preenchimento-peniano-acido-hialuronico`,
                  },
                ],
              }),
            }}
          />
        </div>
      </article>
    </>
  );
}
