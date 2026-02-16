export interface User {
  id: string
  name: string
  avatar: string
}

export interface Place {
  id: string
  name: string
  address: string
  coordinates: [number, number]
  rating: number
  hours: string
  visitDate: string
  description: string
  category: "restaurante" | "cafe" | "bar" | "sorveteria" | "padaria" | "mercado" | "parque" | "museu" | "praia" | "mirante"
  image: string
  gallery: string[]
  favorite: boolean
  visited: boolean
  city: string
  postedBy: User
  visitors: User[]
}

export interface Trip {
  id: string
  title: string
  description: string
  coverImage: string
  dateRange: string
  places: string[]
  mood: string
}

export interface Tour {
  id: string
  title: string
  description: string
  coverImage: string
  duration: string
  places: string[]
  difficulty: "facil" | "moderado" | "desafiador"
}

export interface Suggestion {
  id: string
  name: string
  coverImage: string
  preview: string
  suggestedBy: User
  category: string
  saved: boolean
}

export const users: User[] = [
  { id: "u1", name: "Ana Silva", avatar: "/images/avatar-ana.jpg" },
  { id: "u2", name: "Carlos Mendes", avatar: "/images/avatar-carlos.jpg" },
  { id: "u3", name: "Maria Santos", avatar: "/images/avatar-maria.jpg" },
  { id: "u4", name: "Pedro Lima", avatar: "/images/avatar-pedro.jpg" },
]

export const places: Place[] = [
  {
    id: "1",
    name: "Banzeiro",
    address: "Rua Libert\u00e1dor, 102 - Nossa Senhora das Gra\u00e7as, Manaus",
    coordinates: [-60.0217, -3.1019],
    rating: 4.8,
    hours: "11:30 - 23:00",
    visitDate: "2025-12-15",
    description: "Uma experi\u00eancia inesquec\u00edvel com a culin\u00e1ria amaz\u00f4nica. O tambaqui grelhado foi absolutamente divino, com temperos regionais que real\u00e7am o sabor \u00fanico dos peixes de \u00e1gua doce. O ambiente \u00e9 acolhedor e a carta de vinhos surpreende.",
    category: "restaurante",
    image: "/images/banzeiro.jpg",
    gallery: ["/images/banzeiro.jpg", "/images/banzeiro-2.jpg", "/images/banzeiro-3.jpg"],
    favorite: true,
    visited: true,
    city: "Manaus",
    postedBy: { id: "u1", name: "Ana Silva", avatar: "/images/avatar-ana.jpg" },
    visitors: [
      { id: "u1", name: "Ana Silva", avatar: "/images/avatar-ana.jpg" },
      { id: "u2", name: "Carlos Mendes", avatar: "/images/avatar-carlos.jpg" },
    ],
  },
  {
    id: "2",
    name: "Caxiri",
    address: "Rua Emilio Moreira, 1677 - Pra\u00e7a 14 de Janeiro, Manaus",
    coordinates: [-60.025, -3.117],
    rating: 4.5,
    hours: "18:00 - 00:00",
    visitDate: "2025-11-20",
    description: "Gastrobar com releituras criativas da culin\u00e1ria regional. Os coqueteis com ingredientes amaz\u00f4nicos s\u00e3o imperd\u00edveis, especialmente o drink com cumaru. O menu degusta\u00e7\u00e3o \u00e9 uma viagem pelos sabores do Norte.",
    category: "bar",
    image: "/images/caxiri.jpg",
    gallery: ["/images/caxiri.jpg", "/images/caxiri-2.jpg", "/images/caxiri-3.jpg"],
    favorite: true,
    visited: true,
    city: "Manaus",
    postedBy: { id: "u2", name: "Carlos Mendes", avatar: "/images/avatar-carlos.jpg" },
    visitors: [
      { id: "u1", name: "Ana Silva", avatar: "/images/avatar-ana.jpg" },
      { id: "u2", name: "Carlos Mendes", avatar: "/images/avatar-carlos.jpg" },
      { id: "u3", name: "Maria Santos", avatar: "/images/avatar-maria.jpg" },
    ],
  },
  {
    id: "3",
    name: "Tacacaria da Gisela",
    address: "Av. Joaquim Nabuco, Largo de S\u00e3o Sebasti\u00e3o, Manaus",
    coordinates: [-60.0234, -3.1305],
    rating: 4.7,
    hours: "16:00 - 22:00",
    visitDate: "2025-10-05",
    description: "O melhor taca\u00e7\u00e1 de Manaus! Servido na hora, bem quente, com jambu fresco que deu aquela dorm\u00eancia caracter\u00edstica. A tapioca com tucum\u00e3 tamb\u00e9m \u00e9 obrigat\u00f3ria. Atmosfera aut\u00eantica e acolhedora.",
    category: "restaurante",
    image: "/images/tacacaria.jpg",
    gallery: ["/images/tacacaria.jpg", "/images/tacacaria-2.jpg", "/images/tacacaria-3.jpg"],
    favorite: false,
    visited: true,
    city: "Manaus",
    postedBy: { id: "u3", name: "Maria Santos", avatar: "/images/avatar-maria.jpg" },
    visitors: [
      { id: "u1", name: "Ana Silva", avatar: "/images/avatar-ana.jpg" },
      { id: "u3", name: "Maria Santos", avatar: "/images/avatar-maria.jpg" },
    ],
  },
  {
    id: "4",
    name: "Gelato Caff\u00e8",
    address: "Rua 10 de Julho, 495 - Centro, Manaus",
    coordinates: [-60.0191, -3.1290],
    rating: 4.3,
    hours: "10:00 - 22:00",
    visitDate: "2025-09-18",
    description: "Sorveteria artesanal com sabores regionais incr\u00edveis. O sorvete de cupua\u00e7u com castanha do Par\u00e1 \u00e9 simplesmente sensacional. O ambiente \u00e9 moderno e o atendimento \u00e9 excelente.",
    category: "sorveteria",
    image: "/images/gelato.jpg",
    gallery: ["/images/gelato.jpg", "/images/gelato-2.jpg", "/images/gelato-3.jpg"],
    favorite: false,
    visited: true,
    city: "Manaus",
    postedBy: { id: "u1", name: "Ana Silva", avatar: "/images/avatar-ana.jpg" },
    visitors: [
      { id: "u1", name: "Ana Silva", avatar: "/images/avatar-ana.jpg" },
      { id: "u4", name: "Pedro Lima", avatar: "/images/avatar-pedro.jpg" },
    ],
  },
  {
    id: "5",
    name: "Casa do Pensador",
    address: "Rua Barroso, 217 - Centro, Manaus",
    coordinates: [-60.0183, -3.1312],
    rating: 4.6,
    hours: "08:00 - 18:00",
    visitDate: "2025-08-22",
    description: "Caf\u00e9 cultural no cora\u00e7\u00e3o de Manaus. Al\u00e9m do caf\u00e9 excepcional, o espa\u00e7o respira arte e cultura. Os p\u00e3es artesanais com queijo coalho s\u00e3o o destaque do caf\u00e9 da manh\u00e3.",
    category: "cafe",
    image: "/images/pensador.jpg",
    gallery: ["/images/pensador.jpg", "/images/pensador-2.jpg", "/images/pensador-3.jpg"],
    favorite: true,
    visited: true,
    city: "Manaus",
    postedBy: { id: "u4", name: "Pedro Lima", avatar: "/images/avatar-pedro.jpg" },
    visitors: [
      { id: "u2", name: "Carlos Mendes", avatar: "/images/avatar-carlos.jpg" },
      { id: "u4", name: "Pedro Lima", avatar: "/images/avatar-pedro.jpg" },
    ],
  },
  {
    id: "6",
    name: "Tambaqui de Banda",
    address: "Av. Boulevard \u00c1lvaro Maia, 683 - Adrianopolis, Manaus",
    coordinates: [-60.0155, -3.1125],
    rating: 4.4,
    hours: "11:00 - 15:00, 18:00 - 23:00",
    visitDate: "2025-07-10",
    description: "Cl\u00e1ssico da gastronomia manauara. O tambaqui assado na brasa com farofa de banana \u00e9 uma experi\u00eancia \u00fanica. O espa\u00e7o \u00e9 amplo e tem um clima de restaurante familiar.",
    category: "restaurante",
    image: "/images/tambaqui.jpg",
    gallery: ["/images/tambaqui.jpg", "/images/tambaqui-2.jpg", "/images/tambaqui-3.jpg"],
    favorite: false,
    visited: true,
    city: "Manaus",
    postedBy: { id: "u2", name: "Carlos Mendes", avatar: "/images/avatar-carlos.jpg" },
    visitors: [
      { id: "u1", name: "Ana Silva", avatar: "/images/avatar-ana.jpg" },
      { id: "u2", name: "Carlos Mendes", avatar: "/images/avatar-carlos.jpg" },
      { id: "u3", name: "Maria Santos", avatar: "/images/avatar-maria.jpg" },
      { id: "u4", name: "Pedro Lima", avatar: "/images/avatar-pedro.jpg" },
    ],
  },
  {
    id: "7",
    name: "Flutuante Abare",
    address: "Rio Negro - Porto da Ceasa, Manaus",
    coordinates: [-60.035, -3.095],
    rating: 4.9,
    hours: "10:00 - 17:00 (Sab/Dom)",
    visitDate: "2026-01-08",
    description: "Restaurante flutuante no Rio Negro \u2014 uma experi\u00eancia \u00fanica. Comer peixe fresco enquanto se contempla a paisagem amaz\u00f4nica \u00e9 simplesmente m\u00e1gico. O pirarucu na brasa \u00e9 o melhor que j\u00e1 provamos.",
    category: "restaurante",
    image: "/images/flutuante.jpg",
    gallery: ["/images/flutuante.jpg", "/images/flutuante-2.jpg", "/images/flutuante-3.jpg"],
    favorite: true,
    visited: true,
    city: "Manaus",
    postedBy: { id: "u1", name: "Ana Silva", avatar: "/images/avatar-ana.jpg" },
    visitors: [
      { id: "u1", name: "Ana Silva", avatar: "/images/avatar-ana.jpg" },
      { id: "u2", name: "Carlos Mendes", avatar: "/images/avatar-carlos.jpg" },
    ],
  },
  {
    id: "8",
    name: "Mercado Adolpho Lisboa",
    address: "Rua dos Bar\u00e9s, 46 - Centro, Manaus",
    coordinates: [-60.0227, -3.136],
    rating: 4.2,
    hours: "05:00 - 18:00",
    visitDate: "",
    description: "Hist\u00f3rico mercado municipal com op\u00e7\u00f5es de comida regional. Ideal para provar frutas ex\u00f3ticas e pratos t\u00edpicos. Ainda n\u00e3o visitamos, mas est\u00e1 na nossa lista!",
    category: "mercado",
    image: "/images/mercado.jpg",
    gallery: ["/images/mercado.jpg", "/images/mercado-2.jpg"],
    favorite: false,
    visited: false,
    city: "Manaus",
    postedBy: { id: "u3", name: "Maria Santos", avatar: "/images/avatar-maria.jpg" },
    visitors: [],
  },
  {
    id: "9",
    name: "Padaria Italiana",
    address: "Rua Monsenhor Coutinho, 560 - Centro, Manaus",
    coordinates: [-60.0265, -3.1285],
    rating: 4.0,
    hours: "06:00 - 20:00",
    visitDate: "",
    description: "Padaria tradicional com p\u00e3es artesanais e doces regionais. Ainda n\u00e3o provamos, mas recebemos \u00f3timas recomenda\u00e7\u00f5es.",
    category: "padaria",
    image: "/images/padaria.jpg",
    gallery: ["/images/padaria.jpg", "/images/padaria-2.jpg"],
    favorite: false,
    visited: false,
    city: "Manaus",
    postedBy: { id: "u4", name: "Pedro Lima", avatar: "/images/avatar-pedro.jpg" },
    visitors: [],
  },
]

export const trips: Trip[] = [
  {
    id: "t1",
    title: "Fim de Semana em Manaus",
    description: "Dois dias explorando o melhor da gastronomia e cultura manauara. Desde o mercado municipal pela manh\u00e3 at\u00e9 os restaurantes flutuantes ao p\u00f4r do sol. Uma viagem que tocou todos os sentidos.",
    coverImage: "/images/trip-weekend-manaus.jpg",
    dateRange: "13 - 15 Dez 2025",
    places: ["1", "2", "5", "7"],
    mood: "Explorar e Saborear",
  },
  {
    id: "t2",
    title: "Tour pela Amaz\u00f4nia",
    description: "Uma jornada imersiva pelos rios e florestas que cercam Manaus. Comemos os peixes mais frescos direto dos flutuantes, visitamos comunidades ribeirinhas e nos perdemos na imensid\u00e3o verde.",
    coverImage: "/images/trip-amazon-tour.jpg",
    dateRange: "05 - 10 Jan 2026",
    places: ["7", "6", "3"],
    mood: "Aventura e Natureza",
  },
]

export const tours: Tour[] = [
  {
    id: "r1",
    title: "Centro Hist\u00f3rico a P\u00e9",
    description: "Roteiro de um dia pelo centro hist\u00f3rico de Manaus, passando pelos principais pontos culturais e gastron\u00f4micos. Do caf\u00e9 da manh\u00e3 na Casa do Pensador at\u00e9 o taca\u00e7\u00e1 no fim da tarde.",
    coverImage: "/images/tour-centro-historico.jpg",
    duration: "6 horas",
    places: ["5", "4", "3"],
    difficulty: "facil",
  },
  {
    id: "r2",
    title: "Rota Gastron\u00f4mica",
    description: "Os melhores sabores de Manaus em um roteiro pensado para os amantes da boa comida. Do caf\u00e9 artesanal ao tambaqui na brasa, passando por coqueteis criativos.",
    coverImage: "/images/tour-gastronomia.jpg",
    duration: "8 horas",
    places: ["5", "1", "6", "2"],
    difficulty: "facil",
  },
]

export const suggestions: Suggestion[] = [
  {
    id: "s1",
    name: "Praia da Ponta Negra",
    coverImage: "/images/suggestion-praia-ponta-negra.jpg",
    preview: "Praia urbana \u00e0s margens do Rio Negro com infraestrutura completa, cal\u00e7ad\u00e3o e p\u00f4r do sol inesquec\u00edvel.",
    suggestedBy: { id: "u3", name: "Maria Santos", avatar: "/images/avatar-maria.jpg" },
    category: "praia",
    saved: false,
  },
  {
    id: "s2",
    name: "MUSA - Museu da Amaz\u00f4nia",
    coverImage: "/images/suggestion-museu-amazonia.jpg",
    preview: "Reserva florestal com torre de observa\u00e7\u00e3o de 42m, trilhas ecol\u00f3gicas e exposi\u00e7\u00f5es sobre a biodiversidade amaz\u00f4nica.",
    suggestedBy: { id: "u4", name: "Pedro Lima", avatar: "/images/avatar-pedro.jpg" },
    category: "museu",
    saved: true,
  },
  {
    id: "s3",
    name: "Teatro Amazonas",
    coverImage: "/images/suggestion-teatro-amazonas.jpg",
    preview: "Obra-prima da \u00e9poca da borracha, com c\u00fapula em azulejos de Portugal e interior luxuoso. Visita guiada imperd\u00edvel.",
    suggestedBy: { id: "u1", name: "Ana Silva", avatar: "/images/avatar-ana.jpg" },
    category: "mirante",
    saved: false,
  },
  {
    id: "s4",
    name: "Bosque da Ci\u00eancia",
    coverImage: "/images/suggestion-bosque-ciencia.jpg",
    preview: "Espa\u00e7o de pesquisa do INPA com trilhas, vit\u00f3rias-r\u00e9gias, peixes-boi e jardim bot\u00e2nico. Natureza no meio da cidade.",
    suggestedBy: { id: "u2", name: "Carlos Mendes", avatar: "/images/avatar-carlos.jpg" },
    category: "parque",
    saved: false,
  },
]

export const categories = [
  { value: "all", label: "Todos" },
  { value: "restaurante", label: "Restaurantes" },
  { value: "cafe", label: "Cafes" },
  { value: "bar", label: "Bares" },
  { value: "sorveteria", label: "Sorveterias" },
  { value: "padaria", label: "Padarias" },
  { value: "mercado", label: "Mercados" },
  { value: "parque", label: "Parques" },
  { value: "museu", label: "Museus" },
  { value: "praia", label: "Praias" },
  { value: "mirante", label: "Mirantes" },
]
