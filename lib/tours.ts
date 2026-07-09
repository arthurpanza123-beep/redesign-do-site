export type Category =
  | 'Passeios'
  | 'Hospedagens'
  | 'Lanchas'
  | 'Aluguel de Veículos'
  | 'Transfer'
  | 'Aventuras'

export interface Tour {
  id: string
  title: string
  category: Category
  tags: string[]
  priceLabel: string
  price: string
  photoLabel: string
}

export function getTour(id: string): Tour | undefined {
  return tours.find((t) => t.id === id)
}

/**
 * Fotos dos passeios — substitua os arquivos em /public/images/ pelas suas
 * fotos reais mantendo o mesmo nome de arquivo.
 */
export const tourImages: Record<string, string> = {
  'city-tour-arraial': '/images/passeio-barco.png',
  'passeio-buggy': '/images/buggy.png',
  'aluguel-lancha': '/images/lancha.png',
  'catamara-buzios': '/images/catamara.png',
  'escuna-buzios': '/images/escuna.png',
  'transfer-rio-buzios': '/images/transfer.png',
  'hospedagem-buzios': '/images/hospedagem.png',
  'aluguel-buggy': '/images/aluguel-buggy.png',
  'quadriciclo-arraial': '/images/quadriciclo.png',
  'quadriciclo-cabo-frio': '/images/quadriciclo-dunas.png',
  'jet-ski': '/images/jetski.png',
  'mergulho-buzios': '/images/mergulho.png',
  'city-tour-buzios': '/images/praia-buzios.png',
  'city-tour-cabo-frio': '/images/cabo-frio.png',
  'city-tour-rio': '/images/city-rio.png',
  'barco-arraial': '/images/barco-arraial.png',
  'trolley-buzios': '/images/trolley.png',
  'full-day-buzios': '/images/full-day-buzios.png',
  'full-day-arraial-cabo': '/images/full-day-arraial.png',
  'full-day-ilha-grande': '/images/ilha-grande.png',
  'aluguel-carro': '/images/aluguel-carro.png',
  'aluguel-scooter': '/images/aluguel-scooter.png',
  'aluguel-van': '/images/aluguel-van.png',
  'jet-ski-passeio': '/images/jetski-tour.png',
  'eco-trilhas': '/images/trilha.png',
  'canoa-havaiana': '/images/canoa-havaiana.png',
  'mergulho-arraial': '/images/mergulho-arraial.png',
  'buggy-arraial': '/images/buggy-arraial.png',
  'buggy-cabo-frio': '/images/buggy-cabo-frio.png',
  'catamara-cabo-frio': '/images/catamara-cabo-frio.png',
  'asa-delta': '/images/aventura-aerea.png',
  helicoptero: '/images/helicoptero.png',
  quadriciclo: '/images/quadriciclo-trilha.png',
}

export function getTourImage(id: string): string {
  return tourImages[id] ?? '/images/hero-buzios.png'
}

export const categoryImages: Record<string, string> = {
  passeios: '/images/passeio-barco.png',
  hospedagens: '/images/hospedagem.png',
  lanchas: '/images/lancha.png',
  'aluguel-de-veiculos': '/images/buggy.png',
  transfer: '/images/transfer.png',
  aventuras: '/images/quadriciclo.png',
}

export const categories: Category[] = [
  'Passeios',
  'Hospedagens',
  'Lanchas',
  'Aluguel de Veículos',
  'Transfer',
  'Aventuras',
]

export interface CategoryInfo {
  slug: string
  name: Category
  headline: string
  description: string
  photoLabel: string
}

export const categoryInfos: CategoryInfo[] = [
  {
    slug: 'passeios',
    name: 'Passeios',
    headline: 'Passeios inesquecíveis pela Região dos Lagos',
    description:
      'De barco, catamarã, escuna ou trolley — roteiros pelas praias mais bonitas de Búzios, Arraial do Cabo, Cabo Frio e Rio de Janeiro.',
    photoLabel: 'Foto de capa — Passeios (mar/praia panorâmica)',
  },
  {
    slug: 'hospedagens',
    name: 'Hospedagens',
    headline: 'Hospedagens para todos os gostos e preços',
    description:
      'Pousadas e casas selecionadas em Búzios. Monte seu pacote com passeios e transfer inclusos e aproveite a viagem sem preocupação.',
    photoLabel: 'Foto de capa — Hospedagens (piscina/pousada)',
  },
  {
    slug: 'lanchas',
    name: 'Lanchas',
    headline: 'Lanchas privativas com marinheiro incluso',
    description:
      'Alugue uma lancha exclusiva para o seu grupo e navegue pelas águas cristalinas com roteiro personalizado.',
    photoLabel: 'Foto de capa — Lanchas (lancha em alto mar)',
  },
  {
    slug: 'aluguel-de-veiculos',
    name: 'Aluguel de Veículos',
    headline: 'Liberdade para explorar no seu ritmo',
    description:
      'Buggys, carros, scooters e vans com seguro incluso, retirada e devolução facilitadas.',
    photoLabel: 'Foto de capa — Aluguel de Veículos (buggy na orla)',
  },
  {
    slug: 'transfer',
    name: 'Transfer',
    headline: 'Transfers porta a porta com conforto',
    description:
      'Rio x Búzios, aeroportos e traslados regionais com motoristas experientes e veículos climatizados.',
    photoLabel: 'Foto de capa — Transfer (van/carro executivo)',
  },
  {
    slug: 'aventuras',
    name: 'Aventuras',
    headline: 'Adrenalina à beira-mar',
    description:
      'Quadriciclo, jet ski, mergulho, asa delta, helicóptero e trilhas — experiências para quem quer mais emoção.',
    photoLabel: 'Foto de capa — Aventuras (quadriciclo/mergulho)',
  },
]

export function getCategoryBySlug(slug: string): CategoryInfo | undefined {
  return categoryInfos.find((c) => c.slug === slug)
}

export function getToursByCategory(category: Category): Tour[] {
  return tours.filter((t) => t.category === category)
}

export const tours: Tour[] = [
  {
    id: 'city-tour-arraial',
    title: 'City Tour Arraial',
    category: 'Passeios',
    tags: ['4h de passeio de barco', 'Guia bilíngue', 'Almoço', 'Transporte ida e volta'],
    priceLabel: 'Por pessoa',
    price: '240',
    photoLabel: 'Foto — City Tour Arraial',
  },
  {
    id: 'passeio-buggy',
    title: 'Passeio de Buggy',
    category: 'Aventuras',
    tags: ['Duração 3h', 'Passeio panorâmico', 'Guia local'],
    priceLabel: 'Por pessoa',
    price: '100',
    photoLabel: 'Foto — Passeio de Buggy',
  },
  {
    id: 'aluguel-lancha',
    title: 'Aluguel de Lancha',
    category: 'Lanchas',
    tags: ['Meio dia', 'Marinheiro incluso', 'Até 12 pessoas'],
    priceLabel: 'A partir de',
    price: '400',
    photoLabel: 'Foto — Aluguel de Lancha',
  },
  {
    id: 'catamara-buzios',
    title: 'Passeio de Catamarã em Búzios',
    category: 'Passeios',
    tags: ['Duração 2h30', 'Bebidas a bordo', 'Paradas para banho'],
    priceLabel: 'Por pessoa',
    price: '110',
    photoLabel: 'Foto — Catamarã em Búzios',
  },
  {
    id: 'escuna-buzios',
    title: 'Passeio de Escuna em Búzios',
    category: 'Passeios',
    tags: ['Duração 2h30', 'Paradas para banho', 'Guia a bordo'],
    priceLabel: 'Por pessoa',
    price: '70',
    photoLabel: 'Foto — Escuna em Búzios',
  },
  {
    id: 'transfer-rio-buzios',
    title: 'Transfer Rio x Búzios',
    category: 'Transfer',
    tags: ['Ida e volta', 'Ar-condicionado', 'Porta a porta'],
    priceLabel: 'A partir de',
    price: '185',
    photoLabel: 'Foto — Transfer Rio x Búzios',
  },
  {
    id: 'hospedagem-buzios',
    title: 'Hospedagem em Búzios',
    category: 'Hospedagens',
    tags: ['Diária'],
    priceLabel: 'Diária a partir de',
    price: '590',
    photoLabel: 'Foto — Hospedagem em Búzios',
  },
  {
    id: 'aluguel-buggy',
    title: 'Aluguel de Buggy',
    category: 'Aluguel de Veículos',
    tags: ['Diária', 'Seguro incluso', 'Retirada e devolução'],
    priceLabel: 'Diária a partir de',
    price: '350',
    photoLabel: 'Foto — Aluguel de Buggy',
  },
  {
    id: 'quadriciclo-arraial',
    title: 'Quadriciclo em Arraial',
    category: 'Aventuras',
    tags: ['Duração 2h', 'Equipamento incluso', 'Guia local'],
    priceLabel: 'A partir de',
    price: '250',
    photoLabel: 'Foto — Quadriciclo em Arraial',
  },
  {
    id: 'quadriciclo-cabo-frio',
    title: 'Passeio de Quadriciclo em Cabo Frio',
    category: 'Aventuras',
    tags: ['Duração 2h', 'Equipamento incluso'],
    priceLabel: 'A partir de',
    price: '270',
    photoLabel: 'Foto — Quadriciclo em Cabo Frio',
  },
  {
    id: 'jet-ski',
    title: 'Aluguel de Jet Ski',
    category: 'Aventuras',
    tags: ['Por hora', 'Coletes inclusos'],
    priceLabel: 'A partir de',
    price: '400',
    photoLabel: 'Foto — Aluguel de Jet Ski',
  },
  {
    id: 'mergulho-buzios',
    title: 'Mergulho em Búzios',
    category: 'Aventuras',
    tags: ['Batismo', 'Equipamento incluso', 'Instrutor'],
    priceLabel: 'A partir de',
    price: '230',
    photoLabel: 'Foto — Mergulho em Búzios',
  },
  {
    id: 'city-tour-buzios',
    title: 'City Tour Búzios',
    category: 'Passeios',
    tags: ['Duração 3h', 'Transporte incluso', 'Guia'],
    priceLabel: 'A partir de',
    price: '190',
    photoLabel: 'Foto — City Tour Búzios',
  },
  {
    id: 'city-tour-cabo-frio',
    title: 'City Tour Cabo Frio',
    category: 'Passeios',
    tags: ['Duração 4h', 'Transporte incluso', 'Guia'],
    priceLabel: 'A partir de',
    price: '230',
    photoLabel: 'Foto — City Tour Cabo Frio',
  },
  {
    id: 'city-tour-rio',
    title: 'City Tour Rio',
    category: 'Passeios',
    tags: ['Dia inteiro', 'Transporte incluso', 'Guia'],
    priceLabel: 'A partir de',
    price: '380',
    photoLabel: 'Foto — City Tour Rio',
  },
  {
    id: 'barco-arraial',
    title: 'Passeio de Barco em Arraial',
    category: 'Passeios',
    tags: ['4h de passeio de barco', 'Paradas para banho', 'Guia'],
    priceLabel: 'A partir de',
    price: '90',
    photoLabel: 'Foto — Barco em Arraial',
  },
  {
    id: 'trolley-buzios',
    title: 'Passeio de Trolley em Búzios',
    category: 'Passeios',
    tags: ['Duração 2h', 'Guia bilíngue'],
    priceLabel: 'A partir de',
    price: '100',
    photoLabel: 'Foto — Trolley em Búzios',
  },
  {
    id: 'full-day-buzios',
    title: 'Full Day Búzios',
    category: 'Passeios',
    tags: ['Dia inteiro', 'Transporte ida e volta'],
    priceLabel: 'A partir de',
    price: '220',
    photoLabel: 'Foto — Full Day Búzios',
  },
  {
    id: 'full-day-arraial-cabo',
    title: 'Full Day Arraial do Cabo',
    category: 'Passeios',
    tags: ['Dia inteiro', 'Transporte ida e volta'],
    priceLabel: 'Por pessoa',
    price: '265',
    photoLabel: 'Foto — Full Day Arraial do Cabo',
  },
  {
    id: 'full-day-ilha-grande',
    title: 'Full Day Ilha Grande',
    category: 'Passeios',
    tags: ['Dia inteiro', 'Transporte ida e volta'],
    priceLabel: 'Por pessoa',
    price: '265',
    photoLabel: 'Foto — Full Day Ilha Grande',
  },
  {
    id: 'aluguel-carro',
    title: 'Aluguel de Carro',
    category: 'Aluguel de Veículos',
    tags: ['Diária', 'Seguro incluso'],
    priceLabel: 'A partir de',
    price: '350',
    photoLabel: 'Foto — Aluguel de Carro',
  },
  {
    id: 'aluguel-scooter',
    title: 'Aluguel de Scooter',
    category: 'Aluguel de Veículos',
    tags: ['Diária', 'Capacete incluso'],
    priceLabel: 'A partir de',
    price: '100',
    photoLabel: 'Foto — Aluguel de Scooter',
  },
  {
    id: 'aluguel-van',
    title: 'Aluguel de Van',
    category: 'Aluguel de Veículos',
    tags: ['Diária', 'Com motorista'],
    priceLabel: 'A partir de',
    price: '800',
    photoLabel: 'Foto — Aluguel de Van',
  },
  {
    id: 'jet-ski-passeio',
    title: 'Passeio de Jet Ski',
    category: 'Aventuras',
    tags: ['Por hora', 'Coletes inclusos'],
    priceLabel: 'A partir de',
    price: '700',
    photoLabel: 'Foto — Passeio de Jet Ski',
  },
  {
    id: 'eco-trilhas',
    title: 'Eco Trilhas',
    category: 'Aventuras',
    tags: ['Duração 3h', 'Guia local'],
    priceLabel: 'Por pessoa',
    price: '150',
    photoLabel: 'Foto — Eco Trilhas',
  },
  {
    id: 'canoa-havaiana',
    title: 'Canoa Havaiana',
    category: 'Aventuras',
    tags: ['Duração 1h30', 'Equipamento incluso'],
    priceLabel: 'Por pessoa',
    price: '140',
    photoLabel: 'Foto — Canoa Havaiana',
  },
  {
    id: 'mergulho-arraial',
    title: 'Mergulho em Arraial',
    category: 'Aventuras',
    tags: ['Batismo', 'Instrutor', 'Equipamento incluso'],
    priceLabel: 'Por pessoa',
    price: '250',
    photoLabel: 'Foto — Mergulho em Arraial',
  },
  {
    id: 'buggy-arraial',
    title: 'Passeio de Buggy em Arraial',
    category: 'Aventuras',
    tags: ['Duração 3h', 'Guia local'],
    priceLabel: 'Por pessoa',
    price: '150',
    photoLabel: 'Foto — Buggy em Arraial',
  },
  {
    id: 'buggy-cabo-frio',
    title: 'Passeio de Buggy em Cabo Frio',
    category: 'Aventuras',
    tags: ['Duração 3h', 'Guia local'],
    priceLabel: 'Por pessoa',
    price: '150',
    photoLabel: 'Foto — Buggy em Cabo Frio',
  },
  {
    id: 'catamara-cabo-frio',
    title: 'Catamarã em Cabo Frio',
    category: 'Passeios',
    tags: ['Duração 2h30', 'Bebidas a bordo'],
    priceLabel: 'Por pessoa',
    price: '100',
    photoLabel: 'Foto — Catamarã em Cabo Frio',
  },
  {
    id: 'asa-delta',
    title: 'Vôo de Asa Delta',
    category: 'Aventuras',
    tags: ['Vôo duplo', 'Instrutor'],
    priceLabel: 'Por pessoa',
    price: '600',
    photoLabel: 'Foto — Vôo de Asa Delta',
  },
  {
    id: 'helicoptero',
    title: 'Passeio de Helicóptero',
    category: 'Aventuras',
    tags: ['Vôo panorâmico', 'Piloto experiente'],
    priceLabel: 'A partir de',
    price: '450',
    photoLabel: 'Foto — Passeio de Helicóptero',
  },
  {
    id: 'quadriciclo',
    title: 'Passeio de Quadriciclo',
    category: 'Aventuras',
    tags: ['Duração 2h', 'Equipamento incluso'],
    priceLabel: 'A partir de',
    price: '280',
    photoLabel: 'Foto — Passeio de Quadriciclo',
  },
]
