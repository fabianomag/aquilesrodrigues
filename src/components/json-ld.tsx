/**
 * JSON-LD Structured Data — Dr. Aquiles Rodrigues
 *
 * Schema.org markup for SEO and GEO (Generative Engine Optimization).
 * Helps Google, ChatGPT, Perplexity and other AI engines understand
 * the content and surface it in search results and AI-generated answers.
 */

import { portraitImage, siteConfig } from "@/lib/config";

export function DentistJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: `+${siteConfig.whatsapp}`,
    image: `${siteConfig.url}${portraitImage}`,
    priceRange: "$$$$",
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Montes Claros",
        addressRegion: "MG",
        addressCountry: "BR",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Belo Horizonte",
        addressRegion: "MG",
        addressCountry: "BR",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Montes Claros" },
      { "@type": "City", name: "Belo Horizonte" },
    ],
    sameAs: [siteConfig.instagram],
    medicalSpecialty: "Harmonização Orofacial",
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Harmonização Facial",
        description:
          "Conjunto de procedimentos estéticos para equilíbrio e harmonia do rosto, incluindo preenchimento com ácido hialurônico e botox.",
        procedureType: "NonInvasive",
      },
      {
        "@type": "MedicalProcedure",
        name: "Rinomodelação",
        description:
          "Correção do perfil nasal sem cirurgia, utilizando ácido hialurônico. Resultado imediato e reversível.",
        procedureType: "NonInvasive",
      },
      {
        "@type": "MedicalProcedure",
        name: "Preenchimento Peniano",
        description:
          "Aumento de circunferência peniana com ácido hialurônico. Procedimento ambulatorial, seguro e reversível.",
        procedureType: "NonInvasive",
      },
      {
        "@type": "MedicalProcedure",
        name: "Alectomia",
        description:
          "Redução cirúrgica das asas do nariz para refinamento nasal.",
        procedureType: "SurgicalProcedure",
      },
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional License",
      recognizedBy: {
        "@type": "Organization",
        name: "Conselho Regional de Odontologia de Minas Gerais",
      },
      identifier: siteConfig.cromg,
    },
    founder: {
      "@type": "Person",
      name: "Dr. Aquiles Rodrigues",
      jobTitle: "Cirurgião-Dentista — Especialista em Harmonização Orofacial",
      description:
        "Cirurgião-Dentista com mais de 302 mil seguidores no Instagram. Referência em rinomodelação, preenchimento peniano e harmonização facial. CROMG 42004.",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "pt-BR",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
