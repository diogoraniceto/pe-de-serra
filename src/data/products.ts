import packAmarelo from "@/assets/pack-amarelo.jpg";
import packVerde from "@/assets/pack-verde.jpg";
import packRosa from "@/assets/pack-rosa.jpg";
import packRoxo from "@/assets/pack-roxo.jpg";

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
    name: "Cítrico das Alturas",
    variety: "Cítrico das Alturas",
    region: "Iúna (ES)",
    producer: "Emílio Horst",
    process: "Natural",
    altitude: "1000m",
    notes: ["Limão", "Rapadura", "Baunilha"],
    description: "Café com notas cítricas e doçura intensa de rapadura, finalizado com toques de baunilha. Cultivado nas montanhas de Iúna, Espírito Santo.",
    weights: [
      { weight: "250g", price: "R$ 55,00" },
      { weight: "500g", price: "Esgotado" },
    ],
    score: 87,
    color: "amarelo",
    image: packAmarelo,
  },
  {
    id: "2",
    name: "Mel Amarelo",
    variety: "Mel Amarelo",
    region: "Iúna (ES)",
    producer: "Emílio Horst",
    process: "Natural",
    altitude: "1000m",
    notes: ["Rapadura", "Caramelo", "Chocolate", "Mel"],
    description: "Café encorpado com doçura intensa de rapadura e caramelo, complementado por notas de chocolate e mel. Produzido em Iúna.",
    weights: [
      { weight: "250g", price: "R$ 50,00" },
      { weight: "500g", price: "R$ 97,00" },
    ],
    score: 85,
    color: "verde",
    image: packVerde,
  },
  {
    id: "3",
    name: "Aveludado de Minas",
    variety: "Aveludado de Minas",
    region: "Manhuaçu (MG)",
    producer: "Eduardo Cerqueira",
    process: "Cereja Descascado",
    altitude: "1060m",
    notes: ["Caramelo", "Chocolate", "Mel"],
    description: "Aveludado de Minas com corpo aveludado e doçura equilibrada. Processamento cereja descascado que realça as notas de caramelo.",
    weights: [
      { weight: "250g", price: "R$ 50,00" },
      { weight: "500g", price: "R$ 97,00" },
    ],
    score: 85.25,
    color: "rosa",
    image: packRosa,
  },
  {
    id: "4",
    name: "Complexo das Nuvens",
    variety: "Complexo das Nuvens",
    region: "Forquilha do Rio (ES)",
    producer: "Gabriel Protázio",
    process: "Cereja Descascado",
    altitude: "1200m",
    notes: ["Caramelo", "Doce de Leite", "Melaço", "Castanhas", "Limão"],
    description: "Café complexo com doçura intensa de doce de leite e melaço, complementado por castanhas e toque cítrico. Altitude de 1200m.",
    weights: [
      { weight: "250g", price: "R$ 55,00" },
      { weight: "500g", price: "Esgotado" },
    ],
    score: 86,
    color: "roxo",
    image: packRoxo,
  },
];

export const faqs = [
  {
    question: "Como faço para pedir?",
    answer: "Clique em 'Pedir Este Café' no produto desejado e você será direcionado ao nosso WhatsApp. Resposta em até 30 minutos.",
  },
  {
    question: "Quais as formas de pagamento?",
    answer: "Pix (desc. instantâneo), transferência bancária ou cartão de crédito via link de pagamento.",
  },
  {
    question: "Qual o prazo de entrega?",
    answer: "Envio em até 48h após pagamento confirmado. Entrega de 3 a 7 dias úteis dependendo da região.",
  },
  {
    question: "O café é torrado na hora?",
    answer: "Sim! Torramos sob demanda para garantir máximo frescor. A data de torra vai impressa na embalagem.",
  },
  {
    question: "Vocês fazem entrega para todo o Brasil?",
    answer: "Sim, para todo o Brasil via Correios ou transportadora. Frete calculado no momento do pedido.",
  },
  {
    question: "Posso comprar em quantidade para revenda?",
    answer: "Temos condições especiais para revendedores e cafeterias. Fale conosco pelo WhatsApp.",
  },
];
