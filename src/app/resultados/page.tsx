import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { whatsappUrl } from "@/lib/config";

export const metadata: Metadata = {
  title: "Resultados",
  description:
    "Resultados reais de harmoniza\u00e7\u00e3o facial e procedimentos est\u00e9ticos com Dr. Aquiles Rodrigues. CROMG 42004.",
};

export default function ResultadosPage() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 section-padding">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">
              Resultados
            </p>
            <h1 className="font-display text-hero text-brand-50">
              A transforma&ccedil;&atilde;o fala por si
            </h1>
            <p className="mt-6 text-brand-400 text-lg max-w-2xl leading-relaxed">
              Todos os resultados s&atilde;o reais, documentados com autoriza&ccedil;&atilde;o do paciente
              (TCLE), conforme exig&ecirc;ncia do CFO. As fotos reais ser&atilde;o adicionadas
              ap&oacute;s a primeira consulta presencial com o Dr. Aquiles.
            </p>
          </Reveal>

          {/* Placeholder grid */}
          <Reveal delay={200}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Harmoniza\u00e7\u00e3o Facial",
                "Rinomodela\u00e7\u00e3o",
                "Preenchimento Mandibular",
                "Alectomia",
                "Preenchimento Peniano",
                "Botox",
              ].map((proc, i) => (
                <div
                  key={proc}
                  className="aspect-[3/4] bg-brand-800/50 border border-brand-700/30 flex flex-col items-center justify-center p-6"
                >
                  <p className="text-gold-500/60 text-sm tracking-wider uppercase mb-2">
                    Antes &amp; Depois
                  </p>
                  <p className="text-brand-200 font-display text-lg text-center">{proc}</p>
                  <p className="text-brand-600 text-xs mt-4 text-center">
                    Fotos com TCLE em breve
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-16 text-center">
              <p className="text-brand-500 mb-6">
                Quer ver resultados espec&iacute;ficos para o seu caso? Na consulta,
                mostro resultados similares ao que podemos alcan&ccedil;ar juntos.
              </p>
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="cta-button">
                Agendar consulta
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
