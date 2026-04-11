"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";

const links = [
  { href: "/harmonizacao-facial", label: "Harmoniza\u00e7\u00e3o Facial" },
  { href: "/preenchimento-peniano", label: "Preenchimento Peniano" },
  { href: "/resultados", label: "Resultados" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-brand-950/95 backdrop-blur-md border-b border-brand-800/50"
          : "bg-transparent"
      )}
    >
      <nav className="section-padding flex items-center justify-between h-20">
        <Link href="/" className="font-display text-xl text-brand-100 tracking-wide">
          Dr. Aquiles
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-widest uppercase text-brand-300 hover:text-gold-400 transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-brand-200"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile */}
      <div
        className={clsx(
          "lg:hidden fixed inset-0 bg-brand-950 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-brand-200 p-2"
          aria-label="Fechar"
        >
          <X size={24} />
        </button>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-brand-100 text-2xl font-display tracking-wide hover:text-gold-400 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
