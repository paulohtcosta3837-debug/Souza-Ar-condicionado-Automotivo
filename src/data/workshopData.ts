import { BusinessInfo, FaqItem, GalleryPhoto, ServiceItem, TestimonialItem } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Souza Ar-condicionado Automotivo",
  tradeName: "Souza Climatização Automotiva",
  address: "Av. Dr. Walter Mendes Nogueira, 384",
  neighborhood: "Vila Tavares",
  cityStateZip: "Itaúna - MG",
  fullAddress: "Av. Dr. Walter Mendes Nogueira, 384, Vila Tavares, Itaúna - MG",
  phoneRaw: "5537998570029",
  phoneFormatted: "+55 (37) 99857-0029",
  whatsappUrl: "https://wa.me/5537998570029?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20o%20ar-condicionado%20do%20meu%20ve%C3%ADculo.",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.+Dr.+Walter+Mendes+Nogueira,+384,+Vila+Tavares,+Ita%C3%BAna+-+MG",
  mapEmbedUrl: "https://maps.google.com/maps?q=Av.+Dr.+Walter+Mendes+Nogueira%2C+384%2C+Vila+Tavares%2C+Ita%C3%BAna+-+MG&t=&z=16&ie=UTF8&iwloc=&output=embed",
  hours: {
    weekdays: "Segunda a Sexta: 08:00 às 18:00",
    saturdays: "Sábado: 08:00 às 12:00",
    sundays: "Domingo: Fechado (SOS sob consulta prévia)"
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "climatizacao-completa",
    title: "Climatização Automotiva",
    shortDesc: "Manutenção completa em compressores, condensadores, evaporadores, mangueiras, eletroventiladores e recarga de gás refrigerante com pesagem exata.",
    fullDesc: "Serviço técnico especializado para restabelecer a capacidade frigorífica original do seu veículo. Realizamos vácuo profundo, teste de estanqueidade eletrônico, análise do óleo lubrificante PAG/POE do compressor, substituição de válvulas de expansão e recarga computadorizada na gramatura estipulada pelo fabricante do veículo.",
    tags: ["Recarga de Gás", "Compressor", "Evaporador", "Diagnóstico Técnico"],
    iconName: "ThermometerSnowflake",
    imageUrl: "/climatizacao-automotiva.png",
    features: [
      "Recarga ecológica de gás (R134a e R1234yf) com balança de alta precisão",
      "Teste de vácuo e detecção de microvazamentos por contraste UV e nitrogênio",
      "Revisão e reparo de compressores mecânicos e eletrônicos (válvula torre)",
      "Limpeza e desobstrução de condensadores e radiadores frontais",
      "Substituição de mangueiras com prensagem padrão montadora"
    ],
    durationEstimate: "45 a 90 minutos",
    whatsappMessage: "https://wa.me/5537998570029?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20o%20servi%C3%A7o%20de%20Climatiza%C3%A7%C3%A3o%20Automotiva%20para%20o%20meu%20ve%C3%ADculo."
  },
  {
    id: "higienizacao-filtro",
    title: "Manutenção e Higienização",
    shortDesc: "Oxissaniatização/ozônio do habitáculo, limpeza dos dutos de ventilação e substituição preventiva do filtro de cabine (filtro de pólen).",
    fullDesc: "Procedimento essencial para a saúde respiratória de motoristas e passageiros. O gerador de ozônio penetra em todos os canais de ar, carpetes e estofados, eliminando 99,9% de ácaros, fungos, bactérias e odores desagradáveis de mofo, tabaco e umidade, finalizado com a instalação de novo filtro de cabine com carvão ativado.",
    tags: ["Oxissaniatização", "Ozônio", "Filtro de Cabine", "Ar Puro"],
    iconName: "Wind",
    imageUrl: "/manutencao-e-higienizacao.png",
    features: [
      "Esterilização por ozônio (O3) com laudo de desinfecção biológica",
      "Aplicação de bactericida biodegradável específico para caixas evaporadoras",
      "Substituição preventiva do filtro de ar de cabine / pólen",
      "Eliminação imediata do cheiro desagradável de umidade ao ligar a ventilação",
      "Preservação do sistema respiratório de crianças e pessoas alérgicas"
    ],
    durationEstimate: "35 a 50 minutos",
    whatsappMessage: "https://wa.me/5537998570029?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20a%20Manuten%C3%A7%C3%A3o%20e%20Higieniza%C3%A7%C3%A3o%20do%20ar-condicionado%20do%20meu%20ve%C3%ADculo."
  },
  {
    id: "servico-sos",
    title: "Serviço SOS Emergencial",
    shortDesc: "Atendimento rápido para socorro emergencial do ar-condicionado, resolvendo paradas súbitas, ruídos anormais e perda repentina de rendimento em viagens.",
    fullDesc: "Socorro direcionado para motoristas que necessitam de atendimento prioritário em Itaúna ou que estão em deslocamento pela região do Trevo Padre Eustáquio e enfrentaram panes inesperadas no calor intenso: travamento de polia, queima de fusível/relé, perda de gás ou superaquecimento.",
    tags: ["SOS Imediato", "Diagnóstico Ágil", "Trevo Padre Eustáquio", "Emergência"],
    iconName: "AlertTriangle",
    imageUrl: "/servico-sos-emergencial.png",
    features: [
      "Diagnóstico express imediato com termometria a laser e manometria digital",
      "Substituição emergencial de correias, fusíveis e relés de acionamento",
      "Alívio de sobrepressão e proteção contra queima do compressor",
      "Localização estratégica de fácil acesso no Trevo Padre Eustáquio",
      "Canal prioritário de contato direto no WhatsApp para motoristas em viagem"
    ],
    durationEstimate: "Atendimento ágil sob demanda",
    whatsappMessage: "https://wa.me/5537998570029?text=URGENTE%20SOS%3A%20Meu%20ar-condicionado%20parou%20de%20funcionar%20e%20preciso%20de%20socorro%20em%20Ita%C3%BAna!"
  }
];

export const BENTO_ITEMS = [
  {
    type: "large",
    title: "Diagnóstico Computadorizado e Carga de Gás Ecológica",
    desc: "Equipamento de estação recicladora moderna com vácuo controlado, teste milimétrico de estanqueidade contra vazamentos e pesagem exata de fluido refrigerante.",
    metric: "0.1g",
    metricLabel: "precisão na dosagem",
    tag: "Tecnologia de Montadora",
    features: [
      "Vácuo mecânico de alta sucção para remoção total de umidade",
      "Gases certificados e amigos da camada de ozônio",
      "Reposição do óleo PAG específico com contraste fluorescente"
    ]
  },
  {
    type: "medium-1",
    title: "Atendimento Emergencial SOS",
    desc: "Suporte dedicado para panes repentinas, ruídos anormais na polia e perda total de refrigeração em Itaúna e nas imediações do Trevo Padre Eustáquio.",
    tag: "Resposta Rápida",
    locationHighlight: "Trevo Padre Eustáquio - Vila Tavares"
  },
  {
    type: "medium-2",
    title: "Saúde e Ar Limpo",
    desc: "Higienização profunda com máquina geradora de ozônio medicinal para neutralizar vírus, bactérias, fungos e odores persistentes nos dutos.",
    tag: "Oxissaniatização",
    healthHighlight: "99.9% de eliminação de ácaros e bactérias"
  },
  {
    type: "indicators",
    stats: [
      { value: "100%", label: "Gás com Certificação Ecológica" },
      { value: "4.9★", label: "Classificação no Google Reviews" },
      { value: "+12", label: "Anos de Experiência Técnica" },
      { value: "40 min", label: "Média de Revisão Preventiva" }
    ]
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "g1",
    title: "Estação de Carga e Diagnóstico",
    category: "Ferramental de Precisão",
    imageUrl: "/estacao-de-carga-e-diagnostico.png",
    caption: "Máquina automatizada de vácuo, reciclagem e injeção de gás com dosagem exata."
  },
  {
    id: "g2",
    title: "Bancada de Compressores Automotivos",
    category: "Mecânica de Climatização",
    imageUrl: "/bancada-de-compressores-automotivos.png",
    caption: "Revisão meticulosa de rolamentos, embreagem magnética e válvulas de controle."
  },
  {
    id: "g3",
    title: "Higienização por Oxissaniatização",
    category: "Saúde e Purificação",
    imageUrl: "/higienizacao-por-oxissaniatizacao.png",
    caption: "Desinfecção profunda por ozônio no interior do habitáculo e difusores de ar."
  },
  {
    id: "g4",
    title: "Aferição Térmica dos Difusores",
    category: "Controle de Qualidade",
    imageUrl: "/afericao-termica-dos-difusores.png",
    caption: "Medição de temperatura de saída garantindo ar gelando entre 4°C e 7°C."
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    name: "Rodrigo Mendonça",
    vehicle: "Toyota Corolla 2.0",
    date: "há 2 semanas",
    rating: 5,
    text: "Excelente atendimento do pessoal da Souza! Meu ar parou de gelar no caminho para Belo Horizonte, passei no trevo e em menos de 1 hora descobriram um pequeno vazamento na válvula e recarregaram. Ficou gelando igual novo. Honestidade 100%!",
    avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "t2",
    name: "Mariana Alvarenga",
    vehicle: "Jeep Compass Longitude",
    date: "há 1 mês",
    rating: 5,
    text: "Fiz a higienização completa com ozônio e troca do filtro de cabine. Minha filha tem rinite e sempre espirrava no carro. O cheiro de guardado sumiu completamente e o ar ficou super fresco e potente. Recomendo demais em Itaúna!",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "t3",
    name: "Carlos Eduardo Silveira",
    vehicle: "Chevrolet S10 Diesel",
    date: "há 3 semanas",
    rating: 5,
    text: "Oficina organizada com ferramentas modernas de verdade. Fizeram teste de estanqueidade a vácuo na minha caminhonete antes de colocar o gás, sem empurrar serviço desnecessário. Preço justo e pontualidade exemplar.",
    avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: "t4",
    name: "Fernanda Costa Pinto",
    vehicle: "Hyundai HB20 1.0",
    date: "há 1 mês",
    rating: 5,
    text: "Atendimento nota 10 pelo WhatsApp, agendei a revisão preventiva e me atenderam no horário exato. Explicaram tudo com clareza sobre o funcionamento do compressor. O ar está gelando perfeitamente!",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "Qual o intervalo ideal para higienizar o ar e trocar o filtro de cabine?",
    answer: "O recomendado pelos fabricantes e especialistas é realizar a higienização e a troca do filtro de cabine (filtro de pólen) a cada 6 meses ou 10.000 km rodados. Em caso de uso frequente em estradas de terra, muita poeira ou trânsito pesado com fumaça, esse intervalo deve ser antecipado para garantir a saúde respiratória e evitar sobrecarga no motor da ventilação."
  },
  {
    id: "faq-2",
    question: "Por que o ar parou de gelar de repente? Pode ser apenas falta de gás?",
    answer: "O circuito de ar-condicionado é um sistema selado e pressurizado; portanto, o gás não se 'gasta' nem 'consome' sozinho. Se o ar parou de gelar de repente, geralmente indica a presença de um microvazamento em anéis de vedação (o-rings), mangueiras ou condensador, ou ainda uma falha elétrica (bobina magnética, relé, sensor de pressão) ou mecânica no compressor. Na Souza Ar-condicionado, sempre realizamos o teste de estanqueidade antes de injetar qualquer carga de fluido."
  },
  {
    id: "faq-3",
    question: "Como funciona o atendimento do Serviço SOS?",
    answer: "Nosso Serviço SOS é direcionado para motoristas com panes súbitas de climatização, barulhos na correia/polia do compressor ou que estão em trânsito pela rodovia e região do Trevo Padre Eustáquio em Itaúna. Fazemos triagem prioritária pelo WhatsApp e diagnóstico ágil para liberar seu veículo com rapidez e total segurança."
  },
  {
    id: "faq-4",
    question: "Quanto tempo leva para realizar a manutenção preventiva e recarga?",
    answer: "Os procedimentos padrão de manutenção preventiva — que incluem recuperação do gás antigo, vácuo no sistema para desidratação dos dutos, teste de estanqueidade por pressão negativa, injeção de óleo PAG lubrificante e carga exata de gás refrigerante novo — levam em média de 40 a 60 minutos, permitindo que você aguarde com comodidade na oficina."
  },
  {
    id: "faq-5",
    question: "Onde a oficina fica localizada e quais são as formas de pagamento?",
    answer: "Estamos estrategicamente localizados na Av. Dr. Walter Mendes Nogueira, 384, Vila Tavares, Itaúna - MG, com fácil acesso para veículos de passeio e utilitários. Aceitamos pagamentos via PIX, cartões de crédito (com possibilidade de parcelamento), débito e dinheiro à vista."
  }
];
