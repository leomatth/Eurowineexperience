// Mock data for We Love Portugal - Wine Tourism

export const packages = [
  {
    id: 1,
    name: "AdegaMãe + Sal na Adega",
    location: "Torres Vedras",
    icon: "wine",
    tagline: "Experiência Gastronômica Premium",
    shortDescription: "Tour guiado pela vinícola AdegaMãe com degustação de vinhos e almoço no premiado restaurante Sal na Adega.",
    fullDescription: "Explore a renomada AdegaMãe em Torres Vedras com tour guiado completo pela vinícola, seguido de uma experiência gastronômica excepcional no Restaurante Sal na Adega, premiado pela sua cozinha de autor com vista privilegiada para os vinhedos.",
    image: "https://images.unsplash.com/photo-1558241665-89718b74c89c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHx2aW5leWFyZCUyMHN1bnNldHxlbnwwfHx8fDE3NzA1NTEyNDB8MA&ixlib=rb-4.1.0&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTZ8MHwxfHNlYXJjaHwzfHx3aW5lJTIwdGFzdGluZ3xlbnwwfHx8fDE3NzA1NTEyNDR8MA&ixlib=rb-4.1.0&q=85",
      "https://images.unsplash.com/photo-1763867641182-9ff4cfbcc389",
      "https://images.unsplash.com/photo-1627922206324-e9ab1667bd23"
    ],
    priceFrom: 150,
    priceTo: 250,
    currency: "€",
    duration: "4-6 horas",
    groupSize: "2-10 pessoas",
    includes: [
      "Transfer executivo ida/volta de Lisboa",
      "Visita guiada à AdegaMãe",
      "Degustação de vinhos selecionados (3-12 vinhos conforme opção)",
      "Almoço gastronômico no Sal na Adega",
      "Guia bilíngue especializado",
      "Água e snacks no transfer"
    ],
    tastingOptions: [
      { name: "Bronze", wines: 3, price: 18 },
      { name: "Silver", wines: 6, price: 25 },
      { name: "Gold", wines: 12, price: 45 },
      { name: "Special", wines: "Top shelf", price: 65 },
      { name: "Pairing Completo", wines: "6 vinhos + 4 pratos", price: 96 }
    ],
    mealOptions: [
      { name: "Harmonização Petiscos", price: 55 },
      { name: "Menu Completo", price: 91 }
    ]
  },
  {
    id: 2,
    name: "Quinta da Bacalhôa + Restaurante Gourmet",
    location: "Azeitão, Setúbal",
    icon: "castle",
    tagline: "História e Tradição Vinícola",
    shortDescription: "Experiência histórica na Quinta da Bacalhôa com visita ao Palácio, Adega Museu e degustação premium.",
    fullDescription: "Descubra a história vinícola portuguesa na emblemática Quinta da Bacalhôa, uma propriedade histórica em Azeitão. Visite o Palácio renascentista, a Adega Museu e desfrute de degustações premium seguidas de almoço gourmet.",
    image: "https://images.unsplash.com/photo-1710910652242-922ad13fa23d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxoaXN0b3JpYyUyMHdpbmVyeXxlbnwwfHx8fDE3NzA1NTEyNDh8MA&ixlib=rb-4.1.0&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1710910654917-1d8153c14517?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHw0fHxoaXN0b3JpYyUyMHdpbmVyeXxlbnwwfHx8fDE3NzA1NTEyNDh8MA&ixlib=rb-4.1.0&q=85",
      "https://images.unsplash.com/photo-1694781558887-d84d9ba7603f",
      "https://images.pexels.com/photos/8775206/pexels-photo-8775206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    priceFrom: 120,
    priceTo: 200,
    currency: "€",
    duration: "5-6 horas",
    groupSize: "2-10 pessoas",
    includes: [
      "Transfer executivo de Lisboa",
      "Visita guiada ao Palácio e Adega Museu",
      "Degustação premium de vinhos",
      "Prova de Queijo Azeitão artesanal",
      "Almoço em restaurante gourmet selecionado",
      "Guia bilíngue"
    ],
    visitOptions: [
      { name: "Adega Museu", price: 7 },
      { name: "Palácio", price: 13 },
      { name: "Combo Completo", price: 16 },
      { name: "Degustação Premium", price: 22 },
      { name: "Queijo Azeitão", price: 16 }
    ]
  },
  {
    id: 3,
    name: "Quinta das Murgas + Restaurante Boutique",
    location: "Bucelas",
    icon: "sparkles",
    tagline: "Experiência Exclusiva com Cavalo",
    shortDescription: "Visite a boutique Quinta das Murgas com degustações verticais e experiência única a cavalo pelos vinhedos.",
    fullDescription: "Uma experiência única na Quinta das Murgas em Bucelas. Explore vinhedos históricos, deguste vinhos de diferentes colheitas em prova vertical e, para os aventureiros, desfrute de um passeio a cavalo pelos vinhedos seguido de almoço boutique.",
    image: "https://images.unsplash.com/photo-1619525163217-996bd4c1eb92?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHx2aW5leWFyZCUyMHN1bnNldHxlbnwwfHx8fDE3NzA1NTEyNDB8MA&ixlib=rb-4.1.0&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1765192681431-c91428e3cb27?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHx2aW5leWFyZCUyMGxhbmRzY2FwZXxlbnwwfHx8fDE3NzA1NTEyNTR8MA&ixlib=rb-4.1.0&q=85",
      "https://images.pexels.com/photos/16547182/pexels-photo-16547182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.unsplash.com/photo-1701596744958-b494dcffe375"
    ],
    priceFrom: 140,
    priceTo: 220,
    currency: "€",
    duration: "4-6 horas",
    groupSize: "2-10 pessoas",
    includes: [
      "Transfer executivo de Lisboa",
      "Tour aos vinhedos",
      "Degustação selecionada de vinhos",
      "Tábuas de queijos e enchidos regionais",
      "Almoço em restaurante boutique",
      "Guia bilíngue especializado"
    ],
    tastingOptions: [
      { name: "Prova 2 Vinhos + Visita", price: 35 },
      { name: "Verão - 3 Vinhos + Tábua", price: 55 },
      { name: "Vertical - 3 Colheitas + Tinto + Tábua", price: 65 },
      { name: "Premium com Cavalo", price: 130 }
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sofia Rodrigues",
    location: "Lisboa, Portugal",
    rating: 5,
    text: "Experiência incrível! A AdegaMãe superou todas as expectativas. O restaurante Sal na Adega é simplesmente espetacular. Recomendo muito!",
    date: "2024-11-15",
    package: "AdegaMãe + Sal na Adega"
  },
  {
    id: 2,
    name: "Carlos Mendes",
    location: "Porto, Portugal",
    rating: 5,
    text: "A visita à Quinta da Bacalhôa foi mágica. O palácio histórico e os vinhos premium valem cada euro. Guia muito profissional.",
    date: "2024-10-22",
    package: "Quinta da Bacalhôa"
  },
  {
    id: 3,
    name: "Ana Silva",
    location: "Madrid, Espanha",
    rating: 5,
    text: "O passeio a cavalo na Quinta das Murgas foi o ponto alto! Vinhos excelentes e paisagens de tirar o fôlego. Voltaremos com certeza!",
    date: "2024-10-08",
    package: "Quinta das Murgas"
  }
];

export const companyInfo = {
  name: "We Love Portugal",
  tagline: "Enoturismo de Luxo em Vinhedos Icônicos",
  phone: "+351 935327289",
  email: "leomattheus95@gmail.com",
  whatsapp: "+351935327289",
  socialMedia: {
    instagram: "https://instagram.com/weloveportugal",
    facebook: "https://facebook.com/weloveportugal",
    youtube: "https://youtube.com/@weloveportugal"
  },
  partnerships: [
    "Bestours PT",
    "Lisbon Airport Transfers",
    "AdegaMãe",
    "Quinta da Bacalhôa",
    "Quinta das Murgas"
  ]
};

export const faqs = [
  {
    id: 1,
    question: "Como funciona a reserva?",
    answer: "Selecione seu pacote, escolha a data desejada e complete o formulário de reserva. Você receberá confirmação por email e WhatsApp com todos os detalhes."
  },
  {
    id: 2,
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos cartões de crédito e débito internacionais via sistema seguro. Opções de parcelamento disponíveis para residentes na UE."
  },
  {
    id: 3,
    question: "Posso personalizar meu pacote?",
    answer: "Sim! Entre em contato via WhatsApp e nossos especialistas criarão uma experiência personalizada para suas preferências."
  },
  {
    id: 4,
    question: "Qual a política de cancelamento?",
    answer: "Cancelamento gratuito até 48h antes da data agendada. Reembolso integral garantido."
  },
  {
    id: 5,
    question: "Os tours são em que idiomas?",
    answer: "Oferecemos guias em Português, Inglês e Espanhol. Informe seu idioma preferido na reserva."
  },
  {
    id: 6,
    question: "Crianças podem participar?",
    answer: "Sim! Temos opções sem álcool e atividades adaptadas para todas as idades. Consulte-nos para detalhes."
  }
];

export const heroImages = [
  "https://images.unsplash.com/photo-1558241665-89718b74c89c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHx2aW5leWFyZCUyMHN1bnNldHxlbnwwfHx8fDE3NzA1NTEyNDB8MA&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1619525163217-996bd4c1eb92?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHx2aW5leWFyZCUyMHN1bnNldHxlbnwwfHx8fDE3NzA1NTEyNDB8MA&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1765192681431-c91428e3cb27?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHx2aW5leWFyZCUyMGxhbmRzY2FwZXxlbnwwfHx8fDE3NzA1NTEyNTR8MA&ixlib=rb-4.1.0&q=85"
];
