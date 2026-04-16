export interface FacialCase {
  id: string;
  /** Rótulo curto (badge) */
  procedure: string;
  /** Título principal */
  caption: string;
  /** Texto do card / resumo na página de detalhe */
  description: string;
  beforeImage: string;
  afterImage: string;
  galleryImages: string[];
  /** Bullets em “O que foi realizado” */
  details: string[];
}

const u = (path: string) =>
  `https://images.unsplash.com/${path}?q=80&w=1200&auto=format&fit=crop`;

export const facialGalleryData: FacialCase[] = [
  {
    id: "rinomodelacao",
    procedure: "Rinomodelação",
    caption: "Rinomodelação",
    description:
      "Correção do perfil nasal sem cirurgia. Resultado imediato com ácido hialurônico.",
    beforeImage: u("photo-1507003211169-0a1dd7228f2d"),
    afterImage: u("photo-1506794778202-cad84cf45f1d"),
    galleryImages: [
      u("photo-1507003211169-0a1dd7228f2d"),
      u("photo-1506794778202-cad84cf45f1d"),
      u("photo-1494790108377-be9c29b29330"),
    ],
    details: [
      "Correção do perfil nasal sem cirurgia",
      "Resultado imediato com ácido hialurônico",
    ],
  },
  {
    id: "mandibula",
    procedure: "Preenchimento de mandíbula",
    caption: "Preenchimento de mandíbula",
    description:
      "Definição do contorno mandibular para um rosto mais harmônico e masculino.",
    beforeImage: u("photo-1600486913747-55e5470d6f40"),
    afterImage: u("photo-1618077360395-f3068be8e001"),
    galleryImages: [
      u("photo-1600486913747-55e5470d6f40"),
      u("photo-1618077360395-f3068be8e001"),
      u("photo-1517841905240-472988babdf9"),
    ],
    details: ["Definição do contorno mandibular", "Rosto mais harmônico e masculino"],
  },
  {
    id: "mento",
    procedure: "Preenchimento de mento",
    caption: "Preenchimento de mento",
    description: "Projeção do queixo para equilibrar o perfil facial.",
    beforeImage: u("photo-1504257432389-52343af06ae3"),
    afterImage: u("photo-1600486913747-55e5470d6f40"),
    galleryImages: [
      u("photo-1504257432389-52343af06ae3"),
      u("photo-1600486913747-55e5470d6f40"),
      u("photo-1517841905240-472988babdf9"),
    ],
    details: ["Projeção do queixo", "Equilíbrio do perfil facial"],
  },
  {
    id: "labial",
    procedure: "Preenchimento labial",
    caption: "Preenchimento labial",
    description: "Volume e definição natural dos lábios.",
    beforeImage: u("photo-1513956589380-bad6acb9b9d4"),
    afterImage: u("photo-1534349762230-e0cadf78f5da"),
    galleryImages: [
      u("photo-1513956589380-bad6acb9b9d4"),
      u("photo-1534349762230-e0cadf78f5da"),
      u("photo-1494790108377-be9c29b29330"),
    ],
    details: ["Volume natural", "Definição de contorno"],
  },
  {
    id: "botox",
    procedure: "Botox",
    caption: "Botox",
    description:
      "Redução de linhas de expressão e rugas dinâmicas com toxina botulínica.",
    beforeImage: u("photo-1552374196-1ab2a1c593e8"),
    afterImage: u("photo-1506794778202-cad84cf45f1d"),
    galleryImages: [
      u("photo-1552374196-1ab2a1c593e8"),
      u("photo-1506794778202-cad84cf45f1d"),
      u("photo-1494790108377-be9c29b29330"),
    ],
    details: [
      "Redução de linhas de expressão",
      "Rugas dinâmicas com toxina botulínica",
    ],
  },
  {
    id: "alectomia",
    procedure: "Alectomia",
    caption: "Alectomia",
    description: "Redução das asas do nariz para um resultado mais refinado.",
    beforeImage: u("photo-1507003211169-0a1dd7228f2d"),
    afterImage: u("photo-1519085360753-af0119f7cbe7"),
    galleryImages: [
      u("photo-1507003211169-0a1dd7228f2d"),
      u("photo-1519085360753-af0119f7cbe7"),
      u("photo-1517841905240-472988babdf9"),
    ],
    details: ["Redução das asas do nariz", "Resultado mais refinado"],
  },
  {
    id: "bichectomia",
    procedure: "Bichectomia",
    caption: "Bichectomia",
    description:
      "Afinamento do rosto através da remoção da bola de Bichat, destacando o contorno mandibular.",
    beforeImage: u("photo-1506794778202-cad84cf45f1d"),
    afterImage: u("photo-1618077360395-f3068be8e001"),
    galleryImages: [
      u("photo-1506794778202-cad84cf45f1d"),
      u("photo-1618077360395-f3068be8e001"),
      u("photo-1494790108377-be9c29b29330"),
    ],
    details: [
      "Remoção da bola de Bichat",
      "Destaque do contorno mandibular",
    ],
  },
];
