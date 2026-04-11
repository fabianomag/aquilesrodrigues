import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { siteConfig, whatsappUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Perguntas Frequentes — Harmonização Facial e Preenchimento Peniano",
  description:
    "Respostas completas para as dúvidas mais comuns sobre harmonização facial, preenchimento peniano, rinomodelação e botox. Dr. Aquiles Rodrigues — CROMG 42004.",
  alternates: {
    canonical: `${siteConfig.url}/perguntas-frequentes`,
  },
};

interface FAQCategory {
  title: string;
  slug: string;
  items: { q: string; a: string }[];
}

const faqCategories: FAQCategory[] = [
  {
    title: "Harmonização Facial",
    slug: "harmonizacao-facial",
    items: [
      {
        q: "O que é harmonização orofacial?",
        a: "Harmonização orofacial é um conjunto de procedimentos estéticos realizados por cirurgiões-dentistas especializados que visa melhorar a harmonia e o equilíbrio do rosto. Inclui técnicas como preenchimento com ácido hialurônico (mandíbula, mento, lábios, olheiras), aplicação de toxina botulínica (botox), rinomodelação sem cirurgia e alectomia. A especialidade é reconhecida pelo Conselho Federal de Odontologia desde 2019 (Resolução CFO-198/2019).",
      },
      {
        q: "Qual a diferença entre harmonização facial feita por dentista e por médico?",
        a: "Cirurgiões-dentistas com especialização em Harmonização Orofacial (HOF) são profissionais legalmente habilitados pelo CFO para realizar procedimentos estéticos na face, cabeça e pescoço. O treinamento inclui anatomia facial avançada, técnicas de injeção, farmacologia e manejo de intercorrências. A diferença prática está na formação — dentistas têm domínio profundo da anatomia facial e experiência diária com procedimentos invasivos na região orofacial. O que importa é a formação específica e a experiência do profissional, independente do conselho de classe.",
      },
      {
        q: "A harmonização facial dói?",
        a: "A maioria dos procedimentos utiliza anestesia tópica e/ou infiltrativa, minimizando significativamente o desconforto. O ácido hialurônico utilizado geralmente contém lidocaína na composição, proporcionando analgesia durante a aplicação. O botox é aplicado com agulhas ultrafinas, causando desconforto mínimo. A sensibilidade varia de pessoa para pessoa, mas a maioria dos pacientes descreve o procedimento como tolerável.",
      },
      {
        q: "Quanto tempo dura o resultado da harmonização facial?",
        a: "A duração varia por procedimento. O ácido hialurônico em mandíbula e mento dura de 12 a 18 meses. Preenchimento labial dura de 8 a 12 meses. O botox tem duração média de 4 a 6 meses. Rinomodelação com ácido hialurônico dura de 12 a 24 meses. A durabilidade depende do metabolismo individual, do produto utilizado e da área tratada. Sessões de manutenção tendem a apresentar resultados mais duradouros.",
      },
      {
        q: "Rinomodelação é segura? Pode substituir a rinoplastia?",
        a: "A rinomodelação com ácido hialurônico é um procedimento seguro quando realizado por profissional experiente com conhecimento detalhado da anatomia nasal. É ideal para correção de assimetrias leves, projeção da ponta, suavização de giba (calombo) e refinamento do perfil. Não substitui a rinoplastia cirúrgica em casos que necessitam redução de estrutura óssea ou correção funcional (desvio de septo). A grande vantagem é ser reversível — se o resultado não agradar, o produto pode ser dissolvido.",
      },
      {
        q: "Posso fazer harmonização facial e preenchimento peniano na mesma sessão?",
        a: "Tecnicamente é possível, mas não recomendado. Cada procedimento merece atenção individual, planejamento específico e recuperação adequada. O ideal é espaçar as sessões em pelo menos 2 a 3 semanas para garantir que cada resultado estabilize antes de prosseguir com o próximo tratamento.",
      },
    ],
  },
  {
    title: "Preenchimento Peniano",
    slug: "preenchimento-peniano",
    items: [
      {
        q: "Como funciona o preenchimento peniano com ácido hialurônico?",
        a: "O preenchimento peniano consiste na aplicação de ácido hialurônico de alta densidade na camada subdérmica do corpo peniano, entre a pele e o corpo cavernoso. O produto é injetado com cânula microfina de forma uniforme e simétrica, aumentando a circunferência (calibre) do pênis. O procedimento é ambulatorial, realizado com anestesia local, e dura entre 30 e 60 minutos. O resultado é imediato, com estabilização final em 7 a 14 dias.",
      },
      {
        q: "Preenchimento peniano é seguro? Quais os riscos?",
        a: "O preenchimento peniano com ácido hialurônico é considerado um procedimento de baixo risco quando realizado por profissional qualificado, com produto de qualidade e em ambiente adequado. Efeitos colaterais comuns incluem edema (inchaço) leve por 3 a 7 dias e equimoses (hematomas) leves nos pontos de entrada. Complicações raras incluem nódulos palpáveis, infecção e alteração temporária de sensibilidade. A principal vantagem de segurança é a reversibilidade — o ácido hialurônico pode ser dissolvido com hialuronidase a qualquer momento.",
      },
      {
        q: "Qual o preço do preenchimento peniano em 2026?",
        a: "O valor do preenchimento peniano varia de R$ 5.000 a R$ 15.000, dependendo do volume de ácido hialurônico utilizado (geralmente de 10 a 30 ml), do tipo e marca do produto, e da complexidade do caso. É fundamental não escolher pelo preço mais baixo — produto de qualidade inferior e profissional sem experiência são as principais causas de resultados ruins. Na consulta com Dr. Aquiles, o valor exato é definido após avaliação individual.",
      },
      {
        q: "Preenchimento peniano afeta a ereção ou a sensibilidade?",
        a: "Quando realizado com técnica adequada por profissional experiente, o preenchimento peniano não afeta a função erétil, a sensibilidade ou a fertilidade. A aplicação é feita na camada subdérmica, distante dos corpos cavernosos (responsáveis pela ereção) e das terminações nervosas. Alterações temporárias de sensibilidade podem ocorrer nas primeiras semanas, normalizando espontaneamente.",
      },
      {
        q: "Preenchimento peniano aumenta o comprimento do pênis?",
        a: "O preenchimento com ácido hialurônico atua principalmente no aumento de circunferência (calibre), com ganho médio de 1 a 3 cm. Não é projetado para aumento significativo de comprimento. Existem técnicas complementares para alongamento que podem ser discutidas na consulta, caso seja o objetivo do paciente.",
      },
      {
        q: "Quanto tempo depois do preenchimento posso ter relação sexual?",
        a: "A recomendação é de abstinência sexual por 15 a 21 dias após o procedimento. Esse período é necessário para estabilização completa do ácido hialurônico nos tecidos e cicatrização dos pontos de entrada da cânula. A orientação específica para cada caso é feita individualmente.",
      },
      {
        q: "A parceira percebe que foi feito preenchimento?",
        a: "Com técnica adequada e produto de qualidade, o resultado é natural tanto ao toque quanto visualmente. O ácido hialurônico se integra aos tecidos, mantendo a textura e maleabilidade naturais do pênis. A parceira geralmente não identifica que houve procedimento — apenas percebe a diferença no resultado.",
      },
      {
        q: "Preenchimento peniano com PMMA é melhor que ácido hialurônico?",
        a: "Não recomendamos preenchimento peniano com PMMA (polimetilmetacrilato). Embora o PMMA seja permanente, essa é justamente sua maior desvantagem: não pode ser dissolvido em caso de complicações, migração ou insatisfação. O ácido hialurônico é a opção mais segura disponível porque é biocompatível, naturalmente absorvido pelo corpo e completamente reversível com hialuronidase. A segurança deve sempre ser prioridade em procedimentos estéticos.",
      },
    ],
  },
  {
    title: "Consulta e Agendamento",
    slug: "consulta",
    items: [
      {
        q: "Como funciona a primeira consulta?",
        a: "A primeira consulta é uma avaliação individual e detalhada. Dr. Aquiles examina a região de interesse, discute suas expectativas, explica o procedimento com transparência (incluindo riscos e limitações) e define o plano de tratamento personalizado. Não há compromisso de realizar o procedimento no mesmo dia. A consulta é discreta e sigilosa.",
      },
      {
        q: "Dr. Aquiles atende em quais cidades?",
        a: "Dr. Aquiles Rodrigues atende em Montes Claros/MG e Belo Horizonte/MG. O agendamento é feito diretamente pelo WhatsApp, sem intermediários, garantindo total discrição.",
      },
      {
        q: "Preciso de preparação antes do procedimento?",
        a: "As orientações específicas são passadas na consulta de avaliação. Em geral, recomenda-se evitar anticoagulantes (como aspirina e anti-inflamatórios) nos 7 dias anteriores ao procedimento, evitar álcool nas 48 horas anteriores e comparecer em jejum de 2 horas. Pacientes em uso de medicação contínua devem informar na consulta.",
      },
      {
        q: "O Dr. Aquiles é dentista. Pode fazer preenchimento peniano?",
        a: "O preenchimento peniano com ácido hialurônico é um procedimento estético que utiliza a mesma técnica e material empregados na harmonização facial. Cirurgiões-dentistas especializados em procedimentos estéticos com injetáveis possuem formação técnica completa em anatomia, farmacologia e manejo de intercorrências. A regulamentação varia conforme o conselho — o importante é a formação, experiência e o cuidado do profissional com a segurança do paciente.",
      },
    ],
  },
];

// All FAQ items flattened for schema
const allFaqItems = faqCategories.flatMap((cat) => cat.items);

export default function PerguntasFrequentesPage() {
  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: allFaqItems.map((item) => ({
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
                name: "Perguntas Frequentes",
                item: `${siteConfig.url}/perguntas-frequentes`,
              },
            ],
          }),
        }}
      />

      <div className="min-h-screen bg-brand-950 pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-6">
          {/* Header */}
          <Reveal>
            <h1 className="font-display text-4xl md:text-5xl text-white mb-4">
              Perguntas Frequentes
            </h1>
            <p className="text-brand-400 text-lg mb-12 leading-relaxed">
              Respostas completas e honestas para as dúvidas mais comuns sobre
              os procedimentos realizados por Dr. Aquiles Rodrigues. Se sua
              dúvida não estiver aqui, entre em contato — a conversa é discreta
              e sem compromisso.
            </p>
          </Reveal>

          {/* Categories */}
          {faqCategories.map((category) => (
            <section key={category.slug} id={category.slug} className="mb-16 scroll-mt-24">
              <Reveal>
                <h2 className="font-display text-2xl md:text-3xl text-gold mb-8">
                  {category.title}
                </h2>
              </Reveal>

              <div className="space-y-6">
                {category.items.map((item, i) => (
                  <Reveal key={i}>
                    <div className="border border-brand-800 rounded-lg p-6 hover:border-brand-700 transition-colors">
                      <h3 className="text-white font-medium text-lg mb-3">
                        {item.q}
                      </h3>
                      <p className="text-brand-400 leading-relaxed text-base">
                        {item.a}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>
          ))}

          {/* CTA */}
          <Reveal>
            <div className="border border-gold/30 rounded-lg p-8 bg-gold/5 text-center">
              <h2 className="font-display text-2xl text-white mb-3">
                Ainda tem dúvidas?
              </h2>
              <p className="text-brand-400 mb-6">
                Entre em contato pelo WhatsApp. A conversa é direta com
                Dr. Aquiles — sem intermediários, com total sigilo.
              </p>
              <a
                href={whatsappUrl(
                  "Olá Dr. Aquiles! Vi o site e tenho algumas dúvidas."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-brand-950 px-6 py-3 rounded font-medium hover:bg-gold/90 transition-colors"
              >
                Conversar no WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
