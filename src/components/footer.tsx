import Link from "next/link";
import { siteConfig, whatsappUrl } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-brand-900 border-t border-brand-800/50 py-16 section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-xl text-brand-100 mb-3">{siteConfig.name}</h3>
            <p className="text-brand-400 text-sm leading-relaxed">
              Cirurgi&atilde;o-Dentista &middot; Master em Harmoniza&ccedil;&atilde;o Orofacial
              <br />
              {siteConfig.cromg}
            </p>
          </div>
          <div>
            <h4 className="text-xs tracking-widest uppercase text-brand-500 mb-4">
              Procedimentos
            </h4>
            <div className="flex flex-col gap-2">
              <Link href="/harmonizacao-facial" className="text-sm text-brand-300 hover:text-gold-400 transition-colors">
                Harmoniza&ccedil;&atilde;o Facial
              </Link>
              <Link href="/preenchimento-peniano" className="text-sm text-brand-300 hover:text-gold-400 transition-colors">
                Preenchimento Peniano
              </Link>
              <Link href="/resultados" className="text-sm text-brand-300 hover:text-gold-400 transition-colors">
                Resultados
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs tracking-widest uppercase text-brand-500 mb-4">
              Atendimento
            </h4>
            <div className="flex flex-col gap-2 text-sm text-brand-300">
              {siteConfig.locations.map((loc) => (
                <span key={loc}>{loc}</span>
              ))}
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors mt-2">
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-brand-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-brand-600">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-brand-600">{siteConfig.cromg}</p>
        </div>
      </div>
    </footer>
  );
}
