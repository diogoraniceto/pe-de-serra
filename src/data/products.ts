export interface Coffee {
  id: string;
  name: string;
  variety: string;
  region: string;
  producer: string;
  process: "Natural" | "Cereja Descascado";
  altitude: string;
  notes: string[];
  description: string;
  weights: { weight: string; price: string }[];
  score?: number;
  color: "amarelo" | "verde" | "rosa" | "roxo";
  image: string;
}

export const coffees: Coffee[] = [
  {
    id: "1",
    name: "Catucai 44 IAC",
    variety: "Catucai 44 IAC",
    region: "Iúna (ES)",
    producer: "Emílio Horst",
    process: "Natural",
    altitude: "1000m",
    notes: ["Limão", "Rapadura", "Baunilha"],
    description: "Café com notas cítricas e doçura intensa de rapadura, finalizado com toques de baunilha. Cultivado nas montanhas de Iúna, Espírito Santo.",
    weights: [
      { weight: "250g", price: "R$ 45,00" },
      { weight: "500g", price: "R$ 82,00" },
    ],
    score: 87,
    color: "amarelo",
    image: "/pack-amarelo.pdf",
  },
  {
    id: "2",
    name: "Catucai Amarelo 785-15",
    variety: "Catucai Amarelo 785-15",
    region: "Iúna (ES)",
    producer: "Emílio Horst",
    process: "Natural",
    altitude: "1000m",
    notes: ["Rapadura", "Caramelo", "Chocolate", "Mel"],
    description: "Café encorpado com doçura intensa de rapadura e caramelo, complementado por notas de chocolate e mel. Produzido em Iúna.",
    weights: [
      { weight: "250g", price: "R$ 42,00" },
      { weight: "500g", price: "R$ 78,00" },
    ],
    color: "verde",
    image: "/pack-verde.pdf",
  },
  {
    id: "3",
    name: "Arara",
    variety: "Arara",
    region: "Manhuaçu (MG)",
    producer: "Eduardo Cerqueira",
    process: "Cereja Descascado",
    altitude: "1060m",
    notes: ["Caramelo", "Chocolate", "Mel"],
    description: "Variedade Arara com corpo aveludado e doçura equilibrada. Processamento cereja descascado que realça as notas de caramelo.",
    weights: [
      { weight: "250g", price: "R$ 48,00" },
      { weight: "500g", price: "R$ 88,00" },
    ],
    score: 85.25,
    color: "rosa",
    image: "/pack-rosa.pdf",
  },
  {
    id: "4",
    name: "Catuaí 44",
    variety: "Catuaí 44",
    region: "Forquilha do Rio (ES)",
    producer: "Gabriel Protázio",
    process: "Cereja Descascado",
    altitude: "1200m",
    notes: ["Caramelo", "Doce de Leite", "Melaço", "Castanhas", "Limão"],
    description: "Café complexo com doçura intensa de doce de leite e melaço, complementado por castanhas e toque cítrico. Altitude de 1200m.",
    weights: [
      { weight: "250g", price: "R$ 52,00" },
      { weight: "500g", price: "R$ 95,00" },
    ],
    score: 86,
    color: "roxo",
    image: "/pack-roxo.pdf",
  },
];

export const faqs = [
  {
    question: "Como faço para pedir?",
    answer: "Todos os pedidos são feitos pelo WhatsApp. Clique no botão 'Peça no WhatsApp' em qualquer produto e envie sua mensagem. Responderemos em até 2 horas.",
  },
  {
    question: "Quais as formas de pagamento?",
    answer: "Aceitamos PIX, transferência bancária e cartão de crédito (via link de pagamento). O pagamento é confirmado antes do envio.",
  },
  {
    question: "Qual o prazo de entrega?",
    answer: "Enviamos em até 2 dias úteis após a confirmação do pagamento. O prazo de entrega varia de 3 a 7 dias úteis dependendo da sua região.",
  },
  {
    question: "O café é torrado na hora?",
    answer: "Sim! Torramos sob demanda para garantir frescor máximo. Cada lote é torrado e embalado com data de torra na embalagem.",
  },
  {
    question: "Vocês fazem entrega para todo o Brasil?",
    answer: "Sim, entregamos para todo o Brasil via Correios ou transportadora. O frete é calculado no momento do pedido.",
  },
  {
    question: "Posso comprar em quantidade para revenda?",
    answer: "Sim! Temos condições especiais para revendedores e cafeterias. Entre em contato pelo WhatsApp para saber mais.",
  },
];
