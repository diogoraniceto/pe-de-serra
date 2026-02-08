export interface Coffee {
  id: string;
  name: string;
  region: "Caparaó" | "Matas de Minas";
  notes: string[];
  description: string;
  weights: { weight: string; price: string }[];
  score?: number;
}

export const coffees: Coffee[] = [
  {
    id: "1",
    name: "Serra do Caparaó",
    region: "Caparaó",
    notes: ["Chocolate", "Caramelo", "Nozes"],
    description: "Café encorpado com doçura intensa e finalização prolongada. Cultivado a 1.200m de altitude nas encostas do Pico da Bandeira.",
    weights: [
      { weight: "250g", price: "R$ 45,00" },
      { weight: "500g", price: "R$ 82,00" },
    ],
    score: 85,
  },
  {
    id: "2",
    name: "Floral das Matas",
    region: "Matas de Minas",
    notes: ["Frutas Vermelhas", "Floral", "Mel"],
    description: "Café delicado com acidez vibrante e aroma floral. Produzido por famílias da região de Matas de Minas.",
    weights: [
      { weight: "250g", price: "R$ 48,00" },
      { weight: "500g", price: "R$ 88,00" },
    ],
    score: 87,
  },
  {
    id: "3",
    name: "Bourbon Amarelo",
    region: "Caparaó",
    notes: ["Rapadura", "Amêndoas", "Frutas Cítricas"],
    description: "Variedade Bourbon Amarelo com corpo aveludado e doçura natural. Torra média para realçar a complexidade.",
    weights: [
      { weight: "250g", price: "R$ 52,00" },
      { weight: "500g", price: "R$ 95,00" },
    ],
    score: 88,
  },
  {
    id: "4",
    name: "Natural das Montanhas",
    region: "Matas de Minas",
    notes: ["Cacau", "Frutas Secas", "Especiarias"],
    description: "Processamento natural que realça o corpo e a doçura. Secagem em terreiro suspenso.",
    weights: [
      { weight: "250g", price: "R$ 42,00" },
      { weight: "500g", price: "R$ 78,00" },
    ],
    score: 84,
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
