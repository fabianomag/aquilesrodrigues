import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Blog — Conteúdo Educativo sobre Estética e Harmonização",
  description:
    "Artigos educativos sobre harmonização facial, preenchimento peniano e procedimentos estéticos masculinos. Informação técnica e confiável por Dr. Aquiles Rodrigues.",
};

const articles = [
  {
    slug: "guia-completo-preenchimento-peniano-acido-hialuronico",
    title:
      "Guia Completo: Preenchimento Peniano com Ácido Hialurônico em 2026",
    excerpt:
      "Tudo o que você precisa saber sobre o procedimento — como funciona, resultados reais, riscos, valores e como escolher o profissional certo.",
    date: "2026-04-11",
    readTime: "12 min de leitura",
    category: "Preenchimento Peniano",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-brand-950 pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <h1 className="font-display text-4xl md:text-5xl text-white mb-4">
            Blog
          </h1>
          <p className="text-brand-400 text-lg mb-12">
            Conteúdo educativo e informação técnica confiável sobre procedimentos
            estéticos.
          </p>
        </Reveal>

        <div className="space-y-8">
          {articles.map((article) => (
            <Reveal key={article.slug}>
              <Link href={`/blog/${article.slug}`} className="block group">
                <article className="border border-brand-800 rounded-lg p-8 transition-all duration-300 hover:border-gold/40 hover:bg-brand-900/50">
                  <span className="text-gold text-sm font-medium tracking-wide uppercase">
                    {article.category}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl text-white mt-2 mb-3 group-hover:text-gold transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-brand-400 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-brand-500">
                    <span>{article.readTime}</span>
                    <span>•</span>
                    <span>
                      {new Date(article.date).toLocaleDateString("pt-BR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
