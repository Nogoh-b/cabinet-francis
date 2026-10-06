// Unsplash — images libres de droit (hotlink direct, pas de copie locale).
// Ids stables + params w/q/fm pour poids maîtrisé. Remplace facilement par tes photos HD.

export const images = {
  // Hero : palais de justice / bureau premium (lourd overlay navy)
  hero: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80&auto=format&fit=crop",
  // Presentation : bureau sobre, lumière naturelle
  bureau: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format&fit=crop",
  // Domaines : visuels génériques mais cohérents
  domaines: {
    maritime: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=900&q=80&auto=format&fit=crop",
    transport: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80&auto=format&fit=crop",
    recouvrement: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=900&q=80&auto=format&fit=crop",
    assurances: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80&auto=format&fit=crop",
    affaires: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80&auto=format&fit=crop",
    contentieux: "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?w=900&q=80&auto=format&fit=crop",
    immobilier: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80&auto=format&fit=crop",
    travail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop",
  },
  // Équipe : portraits pros (Unsplash people — en attendant tes portraits réels)
  team: [
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80&auto=format&fit=crop",
  ],
  // Actus
  actus: [
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80&auto=format&fit=crop",
  ],
  // Map / contact illustration
  contact: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80&auto=format&fit=crop",
  // Cabinet page : frise / vision
  cabinetFrise: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format&fit=crop",
} as const;
