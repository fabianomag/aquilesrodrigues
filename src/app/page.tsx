import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Award, MapPin, Users } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { portraitImage, siteConfig, whatsappUrl } from "@/lib/config";

const stats = [
  { icon: Users, value: "302mil+", label: "seguidores" },
  { icon: Shield, value: "CROMG 42004", label: "registro profissional" },
  { icon: MapPin, value: "2 cidades", label: "Montes Claros e BH" },
  { icon: Award, value: "Master", label: "em Harmoniza\u00e7\u00e3o Orofacial" },
];

const services = [
  {
    title: "Harmoniza\u00e7\u00e3o Facial",
    description:
      "Rinomodela\u00e7\u00e3o, preenchimento de mand\u00edbula, mento, l\u00e1bios, botox e alectomia. Resultados naturais que respeitam a anatomia do seu rosto.",
    href: "/harmonizacao-facial",
    image: portraitImage,
  },
  {
    title: "Preenchimento Peniano",
    description:
      "Aumento de volume e circunfer\u00eancia com \u00e1cido hialur\u00f4nico. Procedimento seguro, ambulatorial, com resultados imediatos e revers\u00edveis.",
    href: "/preenchimento-peniano",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
  },
];

const faqs = [
  {
    q: "O preenchimento peniano d\u00f3i?",
    a: "O procedimento \u00e9 realizado com anestesia local, garantindo conforto durante toda a aplica\u00e7\u00e3o. A maioria dos pacientes relata desconforto m\u00ednimo.",
  },
  {
    q: "Quanto tempo dura o resultado?",
    a: "Os resultados do preenchimento com \u00e1cido hialur\u00f4nico duram entre 12 a 24 meses, dependendo do organismo e do volume aplicado.",
  },
  {
    q: "O procedimento \u00e9 revers\u00edvel?",
    a: "Sim. O \u00e1cido hialur\u00f4nico pode ser dissolvido com hialuronidase a qualquer momento, tornando o procedimento totalmente revers\u00edvel.",
  },
  {
    q: "Posso voltar \u00e0s atividades normais no mesmo dia?",
    a: "A maioria dos pacientes retorna \u00e0s atividades leves no mesmo dia. Recomenda-se evitar atividade f\u00edsica intensa e rela\u00e7\u00f5es sexuais por 7 a 14 dias.",
  },
  {
    q: "Quais s\u00e3o os riscos?",
    a: "Como todo procedimento, existem riscos m\u00ednimos como edema, equimose e assimetria tempor\u00e1ria. Todos s\u00e3o discutidos em detalhes na consulta.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-brand-950">
          <div className="absolute inset-0 opacity-20">
            <Image
              src={portraitImage}
              alt=""
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-950 via-brand-950/80 to-brand-950" />
        </div>

        <div className="relative z-10 section-padding py-32 md:py-40 w-full animate-fade-in-up">
          <div className="max-w-4xl">
            <Reveal>
              <p className="text-gold-400 text-xs tracking-[0.3em] font-sans uppercase mb-6 drop-shadow-md">
                {siteConfig.cromg} &middot; Montes Claros &middot; BH
              </p>
            </Reveal>
            <Reveal delay={200}>
              <h1 className="font-display text-hero md:text-hero-lg text-brand-50 leading-tight">
                Resultados que falam
                <br />
                <span className="text-gold-400 bg-clip-text">por si mesmos</span>
              </h1>
            </Reveal>
            <Reveal delay={400}>
              <p className="mt-8 text-brand-300 text-lg md:text-xl max-w-2xl leading-relaxed font-sans font-light">
                Harmonização facial e procedimentos estéticos masculinos com técnica,
                discrição e resultados naturais. Mais de 302 mil pessoas acompanham
                meu trabalho.
              </p>
            </Reveal>
            <Reveal delay={600}>
              <div className="mt-12 flex flex-col sm:flex-row gap-6">
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="cta-button">
                  Agendar consulta
                </a>
                <Link href="/resultados" className="cta-button-outline">
                  Ver resultados completos <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-900 border-y border-brand-800/50 py-12 section-padding">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="text-center">
                <stat.icon size={24} className="mx-auto mb-3 text-gold-500" />
                <p className="font-display text-xl text-brand-100">{stat.value}</p>
                <p className="text-xs text-brand-400 tracking-wider uppercase mt-1">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32 section-padding">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-3">
              Procedimentos
            </p>
            <h2 className="font-display text-section text-brand-100 mb-16">
              Duas verticais, uma filosofia
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <Reveal key={service.href} delay={i * 150}>
                <Link href={service.href} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-brand-800 mb-6">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="font-display text-2xl text-brand-50 mb-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-brand-400 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-4 text-gold-400 text-sm tracking-wider uppercase group-hover:gap-4 transition-all">
                    Saiba mais <ArrowRight size={14} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After teaser */}
      <section className="py-24 md:py-32 bg-brand-900/50 section-padding">
        <div className="max-w-6xl mx-auto text-center">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-3">
              Resultados
            </p>
            <h2 className="font-display text-section text-brand-100 mb-6">
              A transforma&ccedil;&atilde;o &eacute; real
            </h2>
            <p className="text-brand-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Cada resultado &eacute; documentado com autoriza&ccedil;&atilde;o do paciente,
              respeitando as normas do CFO. As imagens reais ser&atilde;o adicionadas em breve.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Preenchimento Peniano", img: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=800" },
                { name: "Rinomodelação", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800" },
                { name: "Mandíbula", img: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=800" },
                { name: "Mento", img: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?q=80&w=800" },
                { name: "Lábios", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800" },
                { name: "Botox", img: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=800" },
                { name: "Alectomia", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800" },
                { name: "Bichectomia", img: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=800" },
              ].map((proc, i) => (
                <Link
                  href={proc.name === "Preenchimento Peniano" ? "/preenchimento-peniano" : "/resultados"}
                  key={i}
                  className="group relative aspect-[3/4] bg-brand-800 border border-brand-700/50 flex flex-col items-center justify-end overflow-hidden shadow-2xl"
                >
                  <Image src={proc.img} alt={proc.name} fill className="object-cover opacity-60 group-hover:scale-[1.03] group-hover:opacity-80 transition-all duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/20 to-transparent pointer-events-none" />
                  <div className="relative z-10 text-center pb-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-gold-500 font-sans tracking-[0.2em] uppercase text-[10px] mb-2 opacity-80">Resultado</p>
                    <p className="text-brand-100 font-display text-2xl drop-shadow-lg px-2">{proc.name}</p>
                    <p className="text-gold-400/80 font-sans text-xs uppercase tracking-[0.1em] mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">Explorar <ArrowRight size={14} /></p>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <Link href="/resultados" className="cta-button mt-16 inline-flex">
              Ver todos os resultados facial <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 section-padding">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-3">
              D&uacute;vidas frequentes
            </p>
            <h2 className="font-display text-section text-brand-100 mb-12">
              Perguntas que voc&ecirc; quer fazer
            </h2>
          </Reveal>

          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="border-b border-brand-800/50 pb-8">
                  <h3 className="font-display text-lg text-brand-100 mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-brand-400 leading-relaxed">{faq.a}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={500}>
            <div className="mt-12 text-center">
              <p className="text-brand-500 mb-4">
                Tem mais perguntas? Fale diretamente comigo.
              </p>
              <a href={whatsappUrl("Ol\u00e1 Dr. Aquiles! Tenho uma d\u00favida sobre procedimentos.")} target="_blank" rel="noopener noreferrer" className="cta-button">
                Tirar d&uacute;vidas pelo WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-brand-900 section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="font-display text-section text-brand-100">
              Pronto para o pr&oacute;ximo passo?
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-brand-400 text-lg leading-relaxed">
              O primeiro passo &eacute; uma conversa. Discreta, sem compromisso,
              com todas as informa&ccedil;&otilde;es que voc&ecirc; precisa para tomar a melhor decis&atilde;o.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="cta-button mt-10 inline-flex">
              Agendar consulta particular
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
