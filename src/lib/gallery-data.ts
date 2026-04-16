export interface PenileCase {
  id: string;
  category: "mini" | "average" | "hung";
  mlTotal: number;
  areas: string[];
  caption: string;
  beforeImage: string;
  afterImage: string;
  erectImage: string;
}

export const penileGalleryData: PenileCase[] = [
  {
    id: "p1",
    category: "mini",
    mlTotal: 10,
    areas: ["Pênis"],
    caption: "10 ml – Mini – Volume sutil para confiança",
    beforeImage: "https://placehold.co/800x1200/080706/d4b978/png?text=Imagem+Peniana%0A(Antes)", 
    afterImage: "https://placehold.co/800x1200/080706/c9a54a/png?text=Imagem+Peniana%0A(Depois)",
    erectImage: "/private-placeholder",
  },
  {
    id: "p2",
    category: "mini",
    mlTotal: 15,
    areas: ["Pênis", "Glande"],
    caption: "15 ml – Mini – Foco em contorno e glande",
    beforeImage: "https://placehold.co/800x1200/080706/d4b978/png?text=Imagem+Peniana%0A(Antes)", 
    afterImage: "https://placehold.co/800x1200/080706/c9a54a/png?text=Imagem+Peniana%0A(Depois)",
    erectImage: "/private-placeholder",
  },
  {
    id: "p3",
    category: "average",
    mlTotal: 20,
    areas: ["Pênis", "Glande"],
    caption: "20 ml – Médio – Equilíbrio e espessura preservada",
    beforeImage: "https://placehold.co/800x1200/080706/d4b978/png?text=Imagem+Peniana%0A(Antes)", 
    afterImage: "https://placehold.co/800x1200/080706/c9a54a/png?text=Imagem+Peniana%0A(Depois)",
    erectImage: "/private-placeholder",
  },
  {
    id: "p4",
    category: "average",
    mlTotal: 22,
    areas: ["Pênis", "Escroto"],
    caption: "22 ml – Médio – Harmonização completa",
    beforeImage: "https://placehold.co/800x1200/080706/d4b978/png?text=Imagem+Peniana%0A(Antes)", 
    afterImage: "https://placehold.co/800x1200/080706/c9a54a/png?text=Imagem+Peniana%0A(Depois)",
    erectImage: "/private-placeholder",
  },
  {
    id: "p5",
    category: "hung",
    mlTotal: 25,
    areas: ["Pênis", "Glande", "Escroto"],
    caption: "25 ml – Alta presença – Volume total",
    beforeImage: "https://placehold.co/800x1200/080706/d4b978/png?text=Imagem+Peniana%0A(Antes)", 
    afterImage: "https://placehold.co/800x1200/080706/c9a54a/png?text=Imagem+Peniana%0A(Depois)",
    erectImage: "/private-placeholder",
  },
  {
    id: "p6",
    category: "hung",
    mlTotal: 30,
    areas: ["Pênis", "Glande", "Escroto"],
    caption: "30 ml – Alta presença – Máximo impacto",
    beforeImage: "https://placehold.co/800x1200/080706/d4b978/png?text=Imagem+Peniana%0A(Antes)", 
    afterImage: "https://placehold.co/800x1200/080706/c9a54a/png?text=Imagem+Peniana%0A(Depois)",
    erectImage: "/private-placeholder",
  }
];
