// Mock data for EuroWineExperience - Wine Tourism Portugal

export const packages = [
  {
    id: 1,
    name: "Quinta das Murgas - Vertical Tasting Experience",
    location: "Bucelas, Lisboa",
    region: "Lisboa",
    icon: "wine",
    tagline: "Degustação Vertical com Passeio a Cavalo",
    category: "winery",
    shortDescription: "Experiência única na Quinta das Murgas com degustação vertical de 3 colheitas, passeio pelos vinhedos e tábuas regionais.",
    fullDescription: "Descubra os premiados vinhos DOC Bucelas na Quinta das Murgas, uma vinícola familiar a 25km de Lisboa. Desfrute de degustações verticais, passeios a cavalo pelos vinhedos centenários e vista privilegiada das propriedades.",
    image: "https://images.unsplash.com/photo-1619525163217-996bd4c1eb92?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHx2aW5leWFyZCUyMHN1bnNldHxlbnwwfHx8fDE3NzA1NTEyNDB8MA&ixlib=rb-4.1.0&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1765192681431-c91428e3cb27?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHx2aW5leWFyZCUyMGxhbmRzY2FwZXxlbnwwfHx8fDE3NzA1NTEyNTR8MA&ixlib=rb-4.1.0&q=85",
      "https://images.pexels.com/photos/16547182/pexels-photo-16547182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.unsplash.com/photo-1701596744958-b494dcffe375"
    ],
    priceFrom: 55,
    priceTo: 75,
    currency: "€",
    duration: "1h30-2h",
    groupSize: "2-12 pessoas",
    includes: [
      "Visita guiada aos vinhedos e animais da quinta",
      "Degustação de vinhos DOC Bucelas (Arinto)",
      "Tábuas de queijos, azeitonas e enchidos regionais",
      "Opção de passeio a cavalo ou veículo todo-terreno",
      "Parking gratuito"
    ],
    tastingOptions: [
      { name: "Prova de 3 Vinhos + Tábua", wines: 3, price: 55 },
      { name: "Prova Vertical (3 Colheitas)", wines: "3 vintages", price: 65 },
      { name: "Tour Todo-Terreno + Vertical", wines: "4 vinhos", price: 75 }
    ]
  },
  {
    id: 2,
    name: "Quinta da Bacalhôa - Palácio & Adega Museu",
    location: "Azeitão, Setúbal",
    region: "Lisboa",
    icon: "castle",
    tagline: "História e Tradição Vinícola Secular",
    category: "winery",
    shortDescription: "Visite o histórico Palácio da Bacalhôa, a Adega Museu e deguste vinhos premium com queijo Azeitão artesanal.",
    fullDescription: "Explore uma das propriedades vinícolas mais históricas de Portugal. O Palácio da Bacalhôa (século XV) oferece arquitetura renascentista única, enquanto a Adega Museu guarda séculos de tradição vinícola.",
    image: "https://images.unsplash.com/photo-1710910652242-922ad13fa23d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxoaXN0b3JpYyUyMHdpbmVyeXxlbnwwfHx8fDE3NzA1NTEyNDh8MA&ixlib=rb-4.1.0&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1710910654917-1d8153c14517?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHw0fHxoaXN0b3JpYyUyMHdpbmVyeXxlbnwwfHx8fDE3NzA1NTEyNDh8MA&ixlib=rb-4.1.0&q=85",
      "https://images.unsplash.com/photo-1694781558887-d84d9ba7603f",
      "https://images.pexels.com/photos/8775206/pexels-photo-8775206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    priceFrom: 7,
    priceTo: 75,
    currency: "€",
    duration: "1h-2h30",
    groupSize: "2-20 pessoas",
    includes: [
      "Entrada na Adega Museu histórica",
      "Visita ao Palácio renascentista (opcional)",
      "Degustação de vinhos premium",
      "Prova de Queijo Azeitão DOP (opcional)",
      "Acesso à loja de vinhos"
    ],
    visitOptions: [
      { name: "Adega Museu", price: 7 },
      { name: "Palácio da Bacalhôa", price: 13 },
      { name: "Combo Adega + Palácio", price: 16 },
      { name: "Prova Premium 3 Vinhos", price: 22 },
      { name: "Experiência Catarina de Bragança", price: 75 }
    ]
  },
  {
    id: 3,
    name: "AdegaMãe - Sal na Adega Gastronomic Experience",
    location: "Torres Vedras",
    region: "Lisboa",
    icon: "utensils",
    tagline: "Harmonização Gastronômica com Vista",
    category: "winery",
    shortDescription: "Experiência gastronômica premium no restaurante Sal na Adega com harmonização de vinhos atlânticos e vista para os vinhedos.",
    fullDescription: "O premiado restaurante Sal na Adega oferece gastronomia portuguesa moderna com foco em bacalhau e harmonizações perfeitas com vinhos AdegaMãe. Rooftop com vista panorâmica para as vinhas.",
    image: "https://images.unsplash.com/photo-1558241665-89718b74c89c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHx2aW5leWFyZCUyMHN1bnNldHxlbnwwfHx8fDE3NzA1NTEyNDB8MA&ixlib=rb-4.1.0&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1763867641182-9ff4cfbcc389",
      "https://images.unsplash.com/photo-1627922206324-e9ab1667bd23",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTZ8MHwxfHNlYXJjaHwzfHx3aW5lJTIwdGFzdGluZ3xlbnwwfHx8fDE3NzA1NTEyNDR8MA&ixlib=rb-4.1.0&q=85"
    ],
    priceFrom: 18,
    priceTo: 85,
    currency: "€",
    duration: "2h-3h",
    groupSize: "2-20 pessoas",
    includes: [
      "Visita guiada à AdegaMãe",
      "Degustação de vinhos atlânticos",
      "Menu de harmonização gastronômica",
      "Vista panorâmica rooftop",
      "Reserva garantida"
    ],
    mealOptions: [
      { name: "Prova 3 Vinhos + Visita", price: 18 },
      { name: "Harmonização Petiscos (4 pratos)", price: 50 },
      { name: "Harmonização Sal na Adega (6 momentos)", price: 70 },
      { name: "Sal Gastronomic Tasting Completo", price: 85 }
    ]
  },
  {
    id: 4,
    name: "Quinta do Seixo - Sogrape Douro Experience",
    location: "Douro Valley",
    region: "Porto",
    icon: "grape",
    tagline: "Vinhos do Porto e Douro DOC",
    category: "winery",
    shortDescription: "Explore a icônica Quinta do Seixo da Sogrape no coração do Douro com degustações de Vinho do Porto e piquenique nas vinhas.",
    fullDescription: "Propriedade de 100 hectares no Cima Corgo com adega moderna e lagares robóticos. Desfrute de degustações na Vinha Velha centenária com vista privilegiada para o Rio Douro.",
    image: "https://images.unsplash.com/photo-1558670460-cad0c19b1840",
    gallery: [
      "https://images.unsplash.com/photo-1694781558887-d84d9ba7603f",
      "https://images.unsplash.com/photo-1701596744958-b494dcffe375",
      "https://images.unsplash.com/photo-1627922206324-e9ab1667bd23"
    ],
    priceFrom: 26,
    priceTo: 95,
    currency: "€",
    duration: "50min-3h",
    groupSize: "2-15 pessoas",
    includes: [
      "Visita à Quinta do Seixo e lagares",
      "Degustação de vinhos Douro DOC ou Porto",
      "Explicação do terroir e biodiversidade",
      "Vista panorâmica do Rio Douro",
      "Estacionamento gratuito"
    ],
    tastingOptions: [
      { name: "Visita Douro DOC (3 vinhos)", wines: 3, price: 26 },
      { name: "Visita Histórica (5 vinhos Casa Ferreirinha)", wines: 5, price: 45 },
      { name: "Visita à Vinha com Degustação", wines: "2 Porto", price: 65 },
      { name: "Piquenique Premium na Vinha", wines: "experiência completa", price: 95 }
    ]
  },
  {
    id: 5,
    name: "Alentejo Wine Tour - 7 Dias com VinoTours",
    location: "Évora, Estremoz, Monsaraz",
    region: "Alentejo",
    icon: "map",
    tagline: "Tour Imersivo de Enoturismo no Alentejo",
    category: "tour",
    shortDescription: "Experiência de 7 dias no Alentejo visitando 6 vinícolas premium (Bacalhôa, Esporão, Cortes de Cima) com hospedagem em palácios e adegas.",
    fullDescription: "Tour guiado completo pelo Alentejo com sommelier especializado. Visite vinícolas históricas, cidades medievais como Monsaraz, e experimente a gastronomia alentejana em hotéis 4-5 estrelas.",
    image: "https://images.unsplash.com/photo-1765192681431-c91428e3cb27?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHx2aW5leWFyZCUyMGxhbmRzY2FwZXxlbnwwfHx8fDE3NzA1NTEyNTR8MA&ixlib=rb-4.1.0&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1710910652242-922ad13fa23d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxoaXN0b3JpYyUyMHdpbmVyeXxlbnwwfHx8fDE3NzA1NTEyNDh8MA&ixlib=rb-4.1.0&q=85",
      "https://images.unsplash.com/photo-1619525163217-996bd4c1eb92?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHx2aW5leWFyZCUyMHN1bnNldHxlbnwwfHx8fDE3NzA1NTEyNDB8MA&ixlib=rb-4.1.0&q=85",
      "https://images.unsplash.com/photo-1763867641182-9ff4cfbcc389"
    ],
    priceFrom: 3400,
    priceTo: 3895,
    currency: "€",
    duration: "6 noites / 7 dias",
    groupSize: "Máx 14 pessoas",
    includes: [
      "6 noites em hotéis 4-5 estrelas (palácios e adegas)",
      "Todas as refeições com harmonização de vinhos",
      "Visitas a 6 vinícolas: Bacalhôa, Cartuxa, Cortes de Cima, Rocim, Esporão, Dona Maria",
      "Transporte privado durante todo o tour",
      "Guia sommelier em português/inglês",
      "Visitas culturais: Évora (Templo Romano), Monsaraz medieval, Arraiolos",
      "Todas as taxas de degustação incluídas"
    ]
  },
  {
    id: 6,
    name: "Lisboa City Tour - Hop On Hop Off 48h",
    location: "Lisboa Centro",
    region: "Lisboa",
    icon: "bus",
    tagline: "Explore Lisboa ao Seu Ritmo",
    category: "city-tour",
    shortDescription: "Passe de 48h para ônibus turístico hop-on hop-off com 3 rotas (Belém, Castelo, Oriente), bonde elétrico e passeio de barco no Tejo.",
    fullDescription: "A maneira mais flexível de conhecer Lisboa! Embarque e desembarque ilimitado em 30+ paradas incluindo Torre de Belém, Castelo de São Jorge, Mosteiro dos Jerónimos, Parque das Nações e Oceanário.",
    image: "https://images.unsplash.com/photo-1558241665-89718b74c89c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHx2aW5leWFyZCUyMHN1bnNldHxlbnwwfHx8fDE3NzA1NTEyNDB8MA&ixlib=rb-4.1.0&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1710910654917-1d8153c14517?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHw0fHxoaXN0b3JpYyUyMHdpbmVyeXxlbnwwfHx8fDE3NzA1NTEyNDh8MA&ixlib=rb-4.1.0&q=85",
      "https://images.pexels.com/photos/16547182/pexels-photo-16547182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTZ8MHwxfHNlYXJjaHwzfHx3aW5lJTIwdGFzdGluZ3xlbnwwfHx8fDE3NzA1NTEyNDR8MA&ixlib=rb-4.1.0&q=85"
    ],
    priceFrom: 35,
    priceTo: 45,
    currency: "€",
    duration: "48 horas",
    groupSize: "Ilimitado",
    includes: [
      "Acesso ilimitado a 3 rotas de ônibus (Belém verde, Castelo vermelha, Oriente azul)",
      "Bonde elétrico pelas colinas históricas",
      "Passeio de barco no Rio Tejo (1h)",
      "Áudio-guia em 12 idiomas (PT, EN, ES, etc)",
      "Descontos em atrações parceiras"
    ],
    routeOptions: [
      { name: "Rota Belém (Torre, Jerónimos, MAAT)", stops: 10, duration: "1h30" },
      { name: "Rota Castelo (Alfama, Sé, Miradouros)", stops: 12, duration: "1h45" },
      { name: "Rota Oriente (Parque das Nações, Oceanário)", stops: 8, duration: "1h15" }
    ]
  },
  {
    id: 7,
    name: "Sintra, Cascais & Cabo da Roca - Day Trip",
    location: "Sintra, Cascais",
    region: "Lisboa",
    icon: "mountain",
    tagline: "Palácios, Praias e o Fim da Europa",
    category: "day-trip",
    shortDescription: "Tour de dia inteiro visitando os palácios de Sintra (Pena, Quinta da Regaleira), vila de Cascais e o Cabo da Roca - ponto mais ocidental da Europa.",
    fullDescription: "Descubra os tesouros patrimônio UNESCO de Sintra, com seus palácios coloridos nas montanhas. Continue pela costa até Cascais e visite o dramático Cabo da Roca com vistas espetaculares do Atlântico.",
    image: "https://images.pexels.com/photos/16547182/pexels-photo-16547182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    gallery: [
      "https://images.unsplash.com/photo-1619525163217-996bd4c1eb92?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHx2aW5leWFyZCUyMHN1bnNldHxlbnwwfHx8fDE3NzA1NTEyNDB8MA&ixlib=rb-4.1.0&q=85",
      "https://images.unsplash.com/photo-1765192681431-c91428e3cb27?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHx2aW5leWFyZCUyMGxhbmRzY2FwZXxlbnwwfHx8fDE3NzA1NTEyNTR8MA&ixlib=rb-4.1.0&q=85",
      "https://images.unsplash.com/photo-1694781558887-d84d9ba7603f"
    ],
    priceFrom: 69,
    priceTo: 99,
    currency: "€",
    duration: "8-10 horas",
    groupSize: "8-15 pessoas",
    includes: [
      "Transfer ida/volta de Lisboa",
      "Visita ao Palácio da Pena (exterior e jardins)",
      "Quinta da Regaleira com tempo livre",
      "Centro histórico de Sintra",
      "Parada no Cabo da Roca com certificado",
      "Vila de Cascais e marina",
      "Guia em português/inglês/espanhol"
    ]
  },
  {
    id: 8,
    name: "Fátima, Nazaré & Óbidos - Fé e Tradição",
    location: "Fátima, Nazaré, Óbidos",
    region: "Lisboa",
    icon: "church",
    tagline: "Santuários e Vilas Medievais",
    category: "day-trip",
    shortDescription: "Visite o Santuário de Fátima, a vila piscatória de Nazaré com suas ondas gigantes, e a medieval Óbidos com sua ginjinha famosa.",
    fullDescription: "Tour espiritual e cultural pelos principais pontos do centro de Portugal. Explore o maior santuário mariano do mundo, conheça a tradição dos pescadores de Nazaré e passeie pelas muralhas de Óbidos.",
    image: "https://images.unsplash.com/photo-1694781558887-d84d9ba7603f",
    gallery: [
      "https://images.unsplash.com/photo-1710910652242-922ad13fa23d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxoaXN0b3JpYyUyMHdpbmVyeXxlbnwwfHx8fDE3NzA1NTEyNDh8MA&ixlib=rb-4.1.0&q=85",
      "https://images.unsplash.com/photo-1701596744958-b494dcffe375",
      "https://images.unsplash.com/photo-1763867641182-9ff4cfbcc389"
    ],
    priceFrom: 75,
    priceTo: 79,
    currency: "€",
    duration: "9-11 horas",
    groupSize: "8-15 pessoas",
    includes: [
      "Transfer em veículo confortável",
      "Visita ao Santuário de Fátima (2h livre)",
      "Nazaré: praia, miradouro do Sítio",
      "Óbidos: tempo livre na vila medieval",
      "Degustação de ginjinha em copo de chocolate",
      "Guia multilíngue (PT/EN/ES)"
    ]
  },
  // 15 New Wine Experiences
  {
    id: 9,
    name: "Quinta do Crasto – Visita + Prova 5 vinhos",
    location: "Douro Superior",
    region: "Porto",
    icon: "wine",
    tagline: "Experiência Premium no Douro",
    category: "winery",
    shortDescription: "Visita guiada vinhas, adega e barricas + prova comentada 5 vinhos DOC Douro e Porto",
    fullDescription: "Descubra a Quinta do Crasto, uma propriedade histórica no Douro Superior com vistas espetaculares. Visite as vinhas centenárias, a adega tradicional e desfrute de uma prova comentada de 5 variedades premium.",
    image: "https://www.quintadocrasto.wine/wp-content/uploads/2025/01/terroir-quinta-do-crasto-banner.webp",
    gallery: [
      "https://www.quintadocrasto.wine/wp-content/uploads/2025/01/terroir-quinta-do-crasto-banner.webp",
      "https://www.quintadocrasto.wine/wp-content/uploads/2025/01/terroir-quinta-do-crasto-banner.webp",
      "https://www.quintadocrasto.wine/wp-content/uploads/2025/01/terroir-quinta-do-crasto-banner.webp"
    ],
    priceFrom: 50,
    priceTo: 80,
    currency: "€",
    duration: "90 min",
    groupSize: "2-20 pax",
    includes: [
      "Visita guiada aos vinhedos e adega histórica",
      "Prova comentada de 5 vinhos DOC Douro e Porto",
      "Degustação de petiscos regionais",
      "Explicação sobre uvas e técnicas tradicionais",
      "Parking gratuito"
    ],
    tastingOptions: [
      { name: "Prova 5 Vinhos", wines: 5, price: 50 },
      { name: "Prova Premium 8 Vinhos", wines: 8, price: 80 }
    ]
  },
  {
    id: 10,
    name: "Quinta da Roêda (Croft) – Wine Lover",
    location: "Pinhão, Douro",
    region: "Porto",
    icon: "wine",
    tagline: "Tradição de 300 Anos",
    category: "winery",
    shortDescription: "Tour guiado + prova selecionada de vinhos do Porto com vista panorâmica",
    fullDescription: "Visite a lendária Quinta da Roêda da Croft, uma das quintas mais prestigiosas do Douro. Desfrute de um tour guiado personalizado seguido de uma prova selecionada de vinhos do Porto com vistas magníficas.",
    image: "https://croftport.com/wp-content/uploads/2021/09/Croft-Quinta-da-Roeda-Douro-Enoturismo-4.jpg",
    gallery: [
      "https://croftport.com/wp-content/uploads/2021/09/Croft-Quinta-da-Roeda-Douro-Enoturismo-4.jpg",
      "https://croftport.com/wp-content/uploads/2021/09/Croft-Quinta-da-Roeda-Douro-Enoturismo-4.jpg",
      "https://croftport.com/wp-content/uploads/2021/09/Croft-Quinta-da-Roeda-Douro-Enoturismo-4.jpg"
    ],
    priceFrom: 48,
    priceTo: 75,
    currency: "€",
    duration: "90 min",
    groupSize: "2-30 pax",
    includes: [
      "Tour guiado completo da quinta",
      "Prova selecionada de vinhos do Porto",
      "Vista panorâmica do Vale do Douro",
      "Acesso à loja de vinhos",
      "Café e água mineral"
    ],
    tastingOptions: [
      { name: "Prova Seleção", wines: 4, price: 48 },
      { name: "Prova Premium Vintage", wines: 6, price: 75 }
    ]
  },
  {
    id: 11,
    name: "Quinta da Pacheca – Visita + Prova 4 vinhos",
    location: "Lamego, Douro",
    region: "Porto",
    icon: "wine",
    tagline: "Lagares Antigos & Vinhos Modernos",
    category: "winery",
    shortDescription: "Visita lagares antigos + prova 2 DOC + 2 Porto no coração do Douro",
    fullDescription: "Explore a histórica Quinta da Pacheca em Lamego com seus lagares tradicionais preservados. Desfrute de uma experiência autêntica visitando as estruturas antigas e provando uma seleção equilibrada de vinhos DOC Douro e Porto.",
    image: "https://popoversandpassports.com/wp-content/uploads/2023/05/dji_fly_20230405_111322_913_1680856011819_photo_optimized_original.jpg",
    gallery: [
      "https://popoversandpassports.com/wp-content/uploads/2023/05/dji_fly_20230405_111322_913_1680856011819_photo_optimized_original.jpg",
      "https://popoversandpassports.com/wp-content/uploads/2023/05/dji_fly_20230405_111322_913_1680856011819_photo_optimized_original.jpg",
      "https://popoversandpassports.com/wp-content/uploads/2023/05/dji_fly_20230405_111322_913_1680856011819_photo_optimized_original.jpg"
    ],
    priceFrom: 38,
    priceTo: 65,
    currency: "€",
    duration: "1h30",
    groupSize: "2-40 pax",
    includes: [
      "Visita aos lagares antigos",
      "Prova de 2 vinhos DOC Douro",
      "Prova de 2 vinhos do Porto",
      "Tábua de queijos e enchidos",
      "Brinde final com vinho local"
    ],
    tastingOptions: [
      { name: "Prova 4 Vinhos", wines: 4, price: 38 },
      { name: "Prova 6 Vinhos + Almoço Leve", wines: 6, price: 65 }
    ]
  },
  {
    id: 12,
    name: "Quinta do Vallado – Visita guiada + Prova",
    location: "Peso da Régua",
    region: "Porto",
    icon: "vineyard",
    tagline: "Vistas do Douro Comentadas",
    category: "winery",
    shortDescription: "Tour vinhas e adega + prova comentada com especialista local",
    fullDescription: "Visite a Quinta do Vallado em Peso da Régua com suas vinhas de tirar o fôlego ao longo do Rio Douro. Experimente um tour guiado por especialistas seguido de uma prova comentada de seus melhores vinhos.",
    image: "https://cdn.prod.website-files.com/6005cd6988e875868452d33d/680912cd7de1c1dc4ffe9e20_quinta-do-vallado-wine-hotel-douro-joandso.webp",
    gallery: [
      "https://cdn.prod.website-files.com/6005cd6988e875868452d33d/680912cd7de1c1dc4ffe9e20_quinta-do-vallado-wine-hotel-douro-joandso.webp",
      "https://cdn.prod.website-files.com/6005cd6988e875868452d33d/680912cd7de1c1dc4ffe9e20_quinta-do-vallado-wine-hotel-douro-joandso.webp",
      "https://cdn.prod.website-files.com/6005cd6988e875868452d33d/680912cd7de1c1dc4ffe9e20_quinta-do-vallado-wine-hotel-douro-joandso.webp"
    ],
    priceFrom: 50,
    priceTo: 80,
    currency: "€",
    duration: "60-90 min",
    groupSize: "2-25 pax",
    includes: [
      "Tour guiado pelas vinhas e adega",
      "Prova comentada de 5 vinhos",
      "Explicação sobre topografia e clima",
      "Acesso à loja de vinhos",
      "Petiscos e bebidas"
    ],
    tastingOptions: [
      { name: "Prova Padrão", wines: 5, price: 50 },
      { name: "Prova Exclusiva + Reserva", wines: 8, price: 80 }
    ]
  },
  {
    id: 13,
    name: "Adega Luís Pato – Tour + Prova 6 vinhos",
    location: "Amoreira da Gândara, Bairrada",
    region: "Aveiro",
    icon: "wine",
    tagline: "Espumantes e Tintos da Bairrada",
    category: "winery",
    shortDescription: "Visita + prova Bairrada espumantes e tintos com produtor renomado",
    fullDescription: "Descubra a tradicional Adega Luís Pato, famosa pelos seus espumantes de qualidade e tintos envelhecidos. Tour completo seguido de prova de 6 variedades selecionadas com orientação do produtor.",
    image: "https://winesofportugal.com/media-files/images/VLP-2_czixcSG.width-1920.jpg",
    gallery: [
      "https://winesofportugal.com/media-files/images/VLP-2_czixcSG.width-1920.jpg",
      "https://winesofportugal.com/media-files/images/VLP-2_czixcSG.width-1920.jpg",
      "https://winesofportugal.com/media-files/images/VLP-2_czixcSG.width-1920.jpg"
    ],
    priceFrom: 40,
    priceTo: 70,
    currency: "€",
    duration: "1h30",
    groupSize: "2-40 pax",
    includes: [
      "Visita guiada à adega",
      "Prova de 3 espumantes da Bairrada",
      "Prova de 3 tintos envelhecidos",
      "Tábua de queijos Bairrada",
      "Explicação sobre técnicas tradicionais"
    ],
    tastingOptions: [
      { name: "Prova 6 Vinhos", wines: 6, price: 40 },
      { name: "Experiência VIP + Almoço", wines: "8 variedades", price: 70 }
    ]
  },
  {
    id: 14,
    name: "Aliança Underground Museum + Prova",
    location: "Sangalhos, Bairrada",
    region: "Aveiro",
    icon: "castle",
    tagline: "Adega Subterrânea Única",
    category: "winery",
    shortDescription: "Museu subterrâneo + experiência enólogo com provas comentadas",
    fullDescription: "Explore o famoso museu subterrâneo da Aliança com suas galerias históricas repletas de garrafas raras. Desfrute de uma experiência de enólogo com prova de vinhos selecionados em ambiente único.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/0c/11/82/alianca-underground-museum.jpg?w=900&h=500&s=1",
    gallery: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/0c/11/82/alianca-underground-museum.jpg?w=900&h=500&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/0c/11/82/alianca-underground-museum.jpg?w=900&h=500&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/0c/11/82/alianca-underground-museum.jpg?w=900&h=500&s=1"
    ],
    priceFrom: 45,
    priceTo: 75,
    currency: "€",
    duration: "3h",
    groupSize: "2-30 pax",
    includes: [
      "Visita completa ao museu subterrâneo",
      "Experiência enólogo guiada",
      "Prova de 6 vinhos selecionados",
      "Almoço leve com harmonização",
      "Catálogo exclusivo com histórias das garrafas"
    ],
    visitOptions: [
      { name: "Museu + Prova 4 Vinhos", price: 45 },
      { name: "Experiência Enólogo Completa", price: 75 }
    ]
  },
  {
    id: 15,
    name: "Messias Bairrada – Visita + Prova",
    location: "Mealhada",
    region: "Aveiro",
    icon: "wine",
    tagline: "Clássico da Bairrada desde 1926",
    category: "winery",
    shortDescription: "Tour adega + prova clássica Bairrada com história e tradição",
    fullDescription: "Visite a icônica Adega Messias em Mealhada, operando desde 1926. Tour pela adega histórica seguido de prova de seus vinhos clássicos da Bairrada, tendo como pano de fundo décadas de tradição vinícola.",
    image: "https://www.winetourism.com/files/2023/03/caves_2_peq_2_.jpg",
    gallery: [
      "https://www.winetourism.com/files/2023/03/caves_2_peq_2_.jpg",
      "https://www.winetourism.com/files/2023/03/caves_2_peq_2_.jpg",
      "https://www.winetourism.com/files/2023/03/caves_2_peq_2_.jpg"
    ],
    priceFrom: 17.50,
    priceTo: 55,
    currency: "€",
    duration: "1h30",
    groupSize: "2-50 pax",
    includes: [
      "Tour pela adega histórica de 1926",
      "Prova clássica de 4 vinhos Bairrada",
      "Explicação sobre história da casa",
      "Acesso à loja com descontos especiais",
      "Café e água mineral"
    ],
    tastingOptions: [
      { name: "Prova Clássica", wines: 4, price: 17.50 },
      { name: "Prova Premium + Tábua", wines: 6, price: 55 }
    ]
  },
  {
    id: 16,
    name: "Quinta do Gradil – Visita + Prova",
    location: "Cadaval",
    region: "Lisboa",
    icon: "wine",
    tagline: "Vinhos a 55km de Lisboa",
    category: "winery",
    shortDescription: "Tour vinhas + provas variadas com vista sobre o Atlântico",
    fullDescription: "Descubra a Quinta do Gradil em Cadaval, uma propriedade ampla com vinhedos diversificados. Desfrute de um tour completo pelos vinhedos e uma prova variada de seus vinhos regionais com vista ao oceano distante.",
    image: "https://cdn.winedering.com/uploads/wineries/2094/big/27780387554916869875501084171383016085302585n.jpeg.webp?hash=8e30a659c31b53017073692309ab0da1",
    gallery: [
      "https://cdn.winedering.com/uploads/wineries/2094/big/27780387554916869875501084171383016085302585n.jpeg.webp?hash=8e30a659c31b53017073692309ab0da1",
      "https://cdn.winedering.com/uploads/wineries/2094/big/27780387554916869875501084171383016085302585n.jpeg.webp?hash=8e30a659c31b53017073692309ab0da1",
      "https://cdn.winedering.com/uploads/wineries/2094/big/27780387554916869875501084171383016085302585n.jpeg.webp?hash=8e30a659c31b53017073692309ab0da1"
    ],
    priceFrom: 20,
    priceTo: 100,
    currency: "€",
    duration: "90 min",
    groupSize: "2-30 pax",
    includes: [
      "Tour guiado pelos vinhedos",
      "Prova de 4-6 vinhos variados",
      "Tábua de queijos portugueses",
      "Aromatização com vista ao Atlântico",
      "Acesso à loja de vinhos"
    ],
    visitOptions: [
      { name: "Prova Seleção", price: 20 },
      { name: "Experiência Premium + Almoço", price: 100 }
    ]
  },
  {
    id: 17,
    name: "AdegaMãe Cadaval – Experiências Personalizadas",
    location: "Cadaval",
    region: "Lisboa",
    icon: "utensils",
    tagline: "Harmonização Personalizada",
    category: "winery",
    shortDescription: "Experiências personalizadas + prova com sommelier especializado",
    fullDescription: "Visite o espaço gastronômico de AdegaMãe em Cadaval. Crie sua própria experiência com sommelier especializado, escolhendo entre provas clássicas ou harmonizações gastronômicas personalizadas.",
    image: "https://static.portugalbywine.com/media//MULTIMEDIA/FOTOS/3337/2625618433396c.jpg",
    priceFrom: 18,
    priceTo: 96,
    currency: "€",
    duration: "60-120 min",
    groupSize: "2-40 pax",
    includes: [
      "Consulta com sommelier especializado",
      "Prova personalizada (4-8 vinhos)",
      "Harmonização com petiscos ou almoço",
      "Acesso à loja de vinhos",
      "Material informativo exclusivo"
    ],
    mealOptions: [
      { name: "Prova Personalizada + Petiscos", price: 18 },
      { name: "Harmonização Almoço Premium", price: 96 }
    ]
  },
  {
    id: 18,
    name: "Quinta da Chocapalha – Visita + Prova 5 vinhos",
    location: "Chocapalha",
    region: "Lisboa",
    icon: "wine",
    tagline: "Vinícola Histórica em Chocapalha",
    category: "winery",
    shortDescription: "Tour vinícola completo + prova 5 vinhos da região com história",
    fullDescription: "Explore a tradicional Quinta da Chocapalha com seus vinhedos históricos. Desfrute de um tour completo seguido de uma prova de 5 variedades que contam a história dos vinhos da região de Chocapalha.",
    image: "https://slowportugal.pt/wp-content/uploads/2021/07/chocapalha-55.jpg",
    priceFrom: 35,
    priceTo: 75,
    currency: "€",
    duration: "90 min",
    groupSize: "2-25 pax",
    includes: [
      "Tour completo pelos vinhedos históricos",
      "Prova de 5 vinhos da região",
      "Explicação sobre tradição local",
      "Tábua de queijos e pão",
      "Acesso à loja com descontos"
    ],
    tastingOptions: [
      { name: "Prova 5 Vinhos", wines: 5, price: 35 },
      { name: "Prova Premium + Almoço Leve", wines: 8, price: 75 }
    ]
  },
  {
    id: 19,
    name: "Quinta da Boa Esperança – Alentejo Autêntico",
    location: "Borba",
    region: "Alentejo",
    icon: "grape",
    tagline: "Alma do Alentejo",
    category: "winery",
    shortDescription: "Propriedade familiar + prova 5 vinhos Alentejo com vista para planícies",
    fullDescription: "Descubra a paixão pela vinicultura na Quinta da Boa Esperança em Borba. Uma propriedade familiar autêntica que oferece prova de seus melhores vinhos Alentejo com vista para as planícies onduladas do sul.",
    image: "https://static.portugalbywine.com/media//MULTIMEDIA/FOTOS/2802/12469369074258h.JPG",
    priceFrom: 25,
    priceTo: 60,
    currency: "€",
    duration: "2h",
    groupSize: "2-20 pax",
    includes: [
      "Recepção familiar e apresentação da quinta",
      "Tour pelas vinhas e adega",
      "Prova de 5 vinhos Alentejo",
      "Almoço leve com especialidades locais",
      "Histórias e tradições familiares"
    ],
    tastingOptions: [
      { name: "Prova 5 Vinhos + Petiscos", wines: 5, price: 25 },
      { name: "Experiência Completa com Almoço", wines: 8, price: 60 }
    ]
  },
  {
    id: 20,
    name: "Adega de Borba – Vinhos Tradicionais",
    location: "Borba",
    region: "Alentejo",
    icon: "wine",
    tagline: "Cooperativa com 50 Anos",
    category: "winery",
    shortDescription: "Cooperative + prova de vinhos Borba com raízes profundas",
    fullDescription: "Visite a Adega de Borba, uma cooperativa com mais de 50 anos de história produzindo vinhos tradicionais Alentejo. Prova de seus melhores rótulos acompanhada por explicações sobre a tradição cooperativa.",
    image: "https://media.winalist.com/prod/uploads/nG9qUhHTDwJv.jpg?twic=v1&twic=v1/cover=730x597",
    priceFrom: 15,
    priceTo: 50,
    currency: "€",
    duration: "1h30",
    groupSize: "2-40 pax",
    includes: [
      "Visita à cooperativa histórica",
      "Prova de 4-5 vinhos tradicionais Borba",
      "Explicação sobre modelo cooperativo",
      "Tábua de enchidos e queijo",
      "Desconto na compra de vinhos"
    ],
    visitOptions: [
      { name: "Prova Clássica Borba", price: 15 },
      { name: "Prova Premium + Almoço", price: 50 }
    ]
  },
  {
    id: 21,
    name: "Malhadinha Nova – Ecolodge Vitivinícola",
    location: "Évora (Reguengos de Monsaraz)",
    region: "Alentejo",
    icon: "mountain",
    tagline: "Sustentabilidade & Vinhos",
    category: "winery",
    shortDescription: "Lodge ecológico + tour sustentável + prova 6 vinhos premiados",
    fullDescription: "Experimente a inovadora Malhadinha Nova, um ecolodge único que combina sustentabilidade com viticultura de qualidade. Tour pela propriedade ecológica seguido de prova de seus vinhos premiados com vista para o Alentejo.",
    image: "https://q-xx.bstatic.com/xdata/images/hotel/max750/486612703.jpg?k=7dfe363327fbe1d81829b92c42a98908828bddce0894d587f7308ed796618df9&o=&a=839822",
    priceFrom: 55,
    priceTo: 120,
    currency: "€",
    duration: "3h",
    groupSize: "2-15 pax",
    includes: [
      "Tour pela propriedade ecológica",
      "Prova de 6 vinhos premiados",
      "Explicação sobre sustentabilidade",
      "Almoço com produtos locais",
      "Acesso às instalações do ecolodge"
    ],
    visitOptions: [
      { name: "Prova + Petiscos", price: 55 },
      { name: "Experiência Completa + Almoço Gourmet", price: 120 }
    ]
  },
  {
    id: 22,
    name: "Quinta de Sanguinhal – Vinhos Artesanais",
    location: "Sanguinhal",
    region: "Lisboa",
    icon: "wine",
    tagline: "Produção Artesanal Autêntica",
    category: "winery",
    shortDescription: "Quinta artesanal + prova 5 vinhos com produção familiar",
    fullDescription: "Descubra a Quinta de Sanguinhal, uma propriedade familiar pequena focada em produção artesanal de alta qualidade. Conheça o produtor pessoalmente e desfrute de uma prova íntima de seus vinhos produzidos com paixão.",
    image: "https://cdn.winalist.com/uploads/OFeQ_g2tnvMG.jpg",
    priceFrom: 30,
    priceTo: 65,
    currency: "€",
    duration: "2h",
    groupSize: "2-12 pax",
    includes: [
      "Encontro com o produtor artesanal",
      "Tour personalizado pela quinta",
      "Prova de 5 vinhos artesanais",
      "Histórias sobre cada vinho",
      "Tábua de delicatessen local"
    ],
    tastingOptions: [
      { name: "Prova Artesanal 5 Vinhos", wines: 5, price: 30 },
      { name: "Experiência VIP com Almoço", wines: 8, price: 65 }
    ]
  },
  {
    id: 23,
    name: "Quinta da Viúva Gomes – Herança Tradicional",
    location: "Torres Vedras",
    region: "Lisboa",
    icon: "wine",
    tagline: "Tradição Passada de Geração em Geração",
    category: "winery",
    shortDescription: "Propriedade histórica + prova 4 vinhos com história familiar",
    fullDescription: "Visite a Quinta da Viúva Gomes em Torres Vedras, uma propriedade com herança familiar profunda refletida em cada vinho. Prova de seus vinhos clássicos acompanhada pelas histórias que moldaram a casa ao longo das décadas.",
    image: "https://static.portugalbywine.com/media//MULTIMEDIA/FOTOS/5120/14649102278035H_710.jpg",
    priceFrom: 28,
    priceTo: 70,
    currency: "€",
    duration: "1h45",
    groupSize: "2-20 pax",
    includes: [
      "Apresentação histórica da família",
      "Tour pelas vinhas e adega",
      "Prova de 4 vinhos tradicionais",
      "Tábua de queijos e pão caseiro",
      "Histórias familiares exclusivas"
    ],
    tastingOptions: [
      { name: "Prova Herança 4 Vinhos", wines: 4, price: 28 },
      { name: "Experiência Histórica + Almoço", wines: 6, price: 70 }
    ]
  }
];

export const accommodations = [
  {
    id: 1,
    name: "Hotel Avenida Palace",
    category: "luxury",
    location: "Baixa, Lisboa Centro",
    rating: 4.8,
    stars: 5,
    pricePerNight: 280,
    currency: "€",
    image: "https://images.unsplash.com/photo-1763867641182-9ff4cfbcc389",
    shortDescription: "Hotel de luxo clássico com vistas panorâmicas e academia, próximo da Praça dos Restauradores.",
    amenities: [
      "Wi-Fi gratuito",
      "Academia e Spa",
      "Restaurante gourmet",
      "Bar panorâmico",
      "Concierge 24h",
      "Transfer para aeroporto"
    ],
    distanceCenter: "100m da Praça dos Restauradores",
    distanceAirport: "7km do Aeroporto de Lisboa"
  },
  {
    id: 2,
    name: "Heritage Avenida Liberdade",
    category: "luxury",
    location: "Avenida da Liberdade",
    rating: 4.8,
    stars: 5,
    pricePerNight: 320,
    currency: "€",
    image: "https://images.unsplash.com/photo-1710910654917-1d8153c14517?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHw0fHxoaXN0b3JpYyUyMHdpbmVyeXxlbnwwfHx8fDE3NzA1NTEyNDh8MA&ixlib=rb-4.1.0&q=85",
    shortDescription: "Boutique hotel com piscina rooftop e vistas excelentes, ideal para famílias e casais.",
    amenities: [
      "Piscina rooftop aquecida",
      "Spa e massagens",
      "Quartos familiares",
      "Café da manhã incluído",
      "Estacionamento privado",
      "Vista panorâmica da cidade"
    ],
    distanceCenter: "Avenida da Liberdade - centro fashion",
    distanceAirport: "6,5km do Aeroporto"
  },
  {
    id: 3,
    name: "Hotel Britania Art Deco",
    category: "boutique",
    location: "Avenida da Liberdade",
    rating: 4.8,
    stars: 4,
    pricePerNight: 195,
    currency: "€",
    image: "https://images.pexels.com/photos/8775206/pexels-photo-8775206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    shortDescription: "Hotel histórico Art Deco preservado, com charme dos anos 40 e localização central premium.",
    amenities: [
      "Design Art Deco original",
      "Quartos elegantes",
      "Biblioteca e lounge",
      "Bar de vinhos portugueses",
      "Wi-Fi de alta velocidade",
      "Pequeno-almoço continental"
    ],
    distanceCenter: "200m do Marquês de Pombal",
    distanceAirport: "7km do Aeroporto"
  },
  {
    id: 4,
    name: "Memmo Alfama Hotel",
    category: "boutique",
    location: "Alfama",
    rating: 4.7,
    stars: 5,
    pricePerNight: 265,
    currency: "€",
    image: "https://images.unsplash.com/photo-1619525163217-996bd4c1eb92?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHx2aW5leWFyZCUyMHN1bnNldHxlbnwwfHx8fDE3NzA1NTEyNDB8MA&ixlib=rb-4.1.0&q=85",
    shortDescription: "Design moderno no coração de Alfama com terraço panorâmico e vistas para o Tejo.",
    amenities: [
      "Terraço com bar e piscina",
      "Vista para Rio Tejo e Castelo",
      "Design contemporâneo",
      "Restaurante português moderno",
      "Quartos com varanda",
      "Centro de Alfama histórica"
    ],
    distanceCenter: "Alfama - bairro histórico",
    distanceAirport: "8km do Aeroporto"
  },
  {
    id: 5,
    name: "My Story Hotel Tejo",
    category: "mid-range",
    location: "Cais do Sodré",
    rating: 4.5,
    stars: 4,
    pricePerNight: 145,
    currency: "€",
    image: "https://images.unsplash.com/photo-1765192681431-c91428e3cb27?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHx2aW5leWFyZCUyMGxhbmRzY2FwZXxlbnwwfHx8fDE3NzA1NTEyNTR8MA&ixlib=rb-4.1.0&q=85",
    shortDescription: "Excelente custo-benefício em frente ao Tejo, perto da vida noturna de Cais do Sodré.",
    amenities: [
      "Vista para o Rio Tejo",
      "Localização central vibrante",
      "Rooftop bar",
      "Quartos modernos",
      "Próximo ao Time Out Market",
      "Café da manhã buffet"
    ],
    distanceCenter: "Cais do Sodré - riverside",
    distanceAirport: "9km do Aeroporto"
  },
  {
    id: 6,
    name: "Pousada Lisboa Praça do Comércio",
    category: "historic",
    location: "Praça do Comércio",
    rating: 4.9,
    stars: 5,
    pricePerNight: 295,
    currency: "€",
    image: "https://images.unsplash.com/photo-1558241665-89718b74c89c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHx2aW5leWFyZCUyMHN1bnNldHxlbnwwfHx8fDE3NzA1NTEyNDB8MA&ixlib=rb-4.1.0&q=85",
    shortDescription: "Monumento histórico convertido em pousada de luxo na icônica Praça do Comércio.",
    amenities: [
      "Edifício monumento nacional",
      "Localização absolutamente central",
      "Spa e tratamentos",
      "Restaurante com estrela",
      "Programa fidelidade Pousadas",
      "Descontos até 25% para membros"
    ],
    distanceCenter: "Praça do Comércio - marco zero",
    distanceAirport: "9km do Aeroporto"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sofia Rodrigues",
    location: "Lisboa, Portugal",
    rating: 5,
    text: "A experiência na Quinta das Murgas foi inesquecível! O passeio a cavalo pelos vinhedos ao pôr do sol e a degustação vertical superaram todas as expectativas.",
    date: "2025-01-20",
    package: "Quinta das Murgas - Vertical Tasting"
  },
  {
    id: 2,
    name: "Carlos Mendes",
    location: "Porto, Portugal",
    rating: 5,
    text: "O Palácio da Bacalhôa é simplesmente mágico. A história, a arquitetura e os vinhos premium valem cada euro. Guia muito profissional e atencioso.",
    date: "2025-01-15",
    package: "Quinta da Bacalhôa"
  },
  {
    id: 3,
    name: "Ana Silva",
    location: "Madrid, Espanha",
    rating: 5,
    text: "Harmonização gastronômica no Sal na Adega foi perfeita. Cada prato casava perfeitamente com os vinhos. Vista espetacular do rooftop!",
    date: "2025-01-10",
    package: "AdegaMãe - Sal na Adega"
  },
  {
    id: 4,
    name: "João Santos",
    location: "São Paulo, Brasil",
    rating: 5,
    text: "O tour de 7 dias pelo Alentejo foi a melhor experiência de enoturismo da minha vida. Hotéis incríveis, vinícolas fantásticas e gastronomia de excelência!",
    date: "2025-01-05",
    package: "Alentejo Wine Tour"
  },
  {
    id: 5,
    name: "Maria Oliveira",
    location: "Lisboa, Portugal",
    rating: 5,
    text: "O hop-on hop-off de 48h foi perfeito para conhecer Lisboa no nosso ritmo. Conseguimos visitar tudo que queríamos com total comodidade.",
    date: "2024-12-28",
    package: "Lisboa City Tour"
  },
  {
    id: 6,
    name: "Ricardo Pereira",
    location: "Faro, Portugal",
    rating: 5,
    text: "Sintra é um sonho! O tour estava muito bem organizado, vimos todos os palácios principais e ainda tivemos tempo livre. Recomendo muito!",
    date: "2024-12-20",
    package: "Sintra Day Trip"
  }
];

export const companyInfo = {
  name: "EuroWineExperience",
  tagline: "Enoturismo Premium em Portugal",
  phone: "+351 935327289",
  email: "leomattheus95@gmail.com",
  whatsapp: "+351935327289",
  socialMedia: {
    instagram: "https://instagram.com/eurowineexperience",
    facebook: "https://facebook.com/eurowineexperience",
    youtube: "https://youtube.com/@eurowineexperience"
  },
  partnerships: [
    "Quinta das Murgas",
    "Quinta da Bacalhôa",
    "AdegaMãe - Sal na Adega",
    "Sogrape Wine Tourism",
    "VinoTours Portugal",
    "Living Tours"
  ]
};

export const faqs = [
  {
    id: 1,
    question: "Como funciona a reserva?",
    answer: "Selecione seu pacote, escolha a data desejada e complete o formulário de reserva. Você receberá confirmação por email e WhatsApp com todos os detalhes em até 24 horas."
  },
  {
    id: 2,
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos cartões de crédito e débito internacionais via sistema seguro. Opções de parcelamento disponíveis para residentes na UE. Pagamento via transferência bancária também aceito."
  },
  {
    id: 3,
    question: "Posso personalizar meu pacote?",
    answer: "Sim! Entre em contato via WhatsApp (+351 935327289) e nossos especialistas criarão uma experiência personalizada para suas preferências, incluindo vinícolas específicas e roteiros exclusivos."
  },
  {
    id: 4,
    question: "Qual a política de cancelamento?",
    answer: "Cancelamento gratuito até 72h antes da data agendada com reembolso integral. Entre 72h e 24h: 50% de reembolso. Menos de 24h: sem reembolso (exceto emergências médicas com comprovação)."
  },
  {
    id: 5,
    question: "Os tours são em que idiomas?",
    answer: "Oferecemos guias em Português, Inglês e Espanhol. Informe seu idioma preferido na reserva. Para grupos grandes, outros idiomas podem ser disponibilizados sob consulta."
  },
  {
    id: 6,
    question: "Crianças podem participar?",
    answer: "Sim! Menores de 12 anos têm desconto ou entrada gratuita (conforme pacote). Oferecemos opções sem álcool, sucos de uva premium e atividades adaptadas. Algumas vinícolas têm fazendas com animais."
  },
  {
    id: 7,
    question: "Os pacotes incluem transporte?",
    answer: "Sim, todos os pacotes de vinícolas incluem transfer executivo ida/volta de Lisboa. Para hospedagens, oferecemos transfer do aeroporto mediante solicitação (taxa adicional)."
  },
  {
    id: 8,
    question: "Posso comprar vinhos nas vinícolas?",
    answer: "Absolutamente! Todas as vinícolas têm lojas com descontos exclusivos para visitantes. Podemos ajudar com envio internacional caso necessário."
  }
];

export const heroImages = [
  "https://images.unsplash.com/photo-1558241665-89718b74c89c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHx2aW5leWFyZCUyMHN1bnNldHxlbnwwfHx8fDE3NzA1NTEyNDB8MA&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1619525163217-996bd4c1eb92?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHx2aW5leWFyZCUyMHN1bnNldHxlbnwwfHx8fDE3NzA1NTEyNDB8MA&ixlib=rb-4.1.0&q=85",
  "https://images.unsplash.com/photo-1765192681431-c91428e3cb27?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHx2aW5leWFyZCUyMGxhbmRzY2FwZXxlbnwwfHx8fDE3NzA1NTEyNTR8MA&ixlib=rb-4.1.0&q=85"
];
