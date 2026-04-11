/** Foto oficial (ex.: feed Instagram) — arquivo em /public/media */
export const portraitImage = "/media/aquiles-portrait.jpg";

export const siteConfig = {
  name: "Dr. Aquiles Rodrigues",
  title: "Dr. Aquiles Rodrigues \u2014 Harmoniza\u00e7\u00e3o Facial e Procedimentos Est\u00e9ticos",
  description:
    "Cirurgi\u00e3o-Dentista especialista em Harmoniza\u00e7\u00e3o Orofacial e procedimentos est\u00e9ticos masculinos. CROMG 42004. Atendimento em Montes Claros e Belo Horizonte.",
  url: "https://draquilesrodrigues.com.br",
  whatsapp: "5538999999999", // placeholder \u2014 substituir pelo real
  whatsappMessage: "Ol\u00e1 Dr. Aquiles! Gostaria de agendar uma consulta.",
  instagram: "https://www.instagram.com/draquilesrodrigues/",
  cromg: "CROMG 42004",
  followers: "302mil",
  locations: ["Montes Claros, MG", "Belo Horizonte, MG"],
  specialties: [
    "Harmoniza\u00e7\u00e3o Facial",
    "Rinomodela\u00e7\u00e3o",
    "Preenchimento Peniano",
    "Alectomia",
    "Botox",
  ],
};

export function whatsappUrl(customMessage?: string) {
  const msg = customMessage || siteConfig.whatsappMessage;
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`;
}
