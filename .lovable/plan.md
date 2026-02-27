

# Seção "Nossas Seleções" -- Redesign Interativo

## Conceito

Substituir o layout atual (dois cafés em blocos alternados) por uma experiencia imersiva e interativa que exibe os **4 cafes** com as **imagens reais das embalagens**.

A ideia: uma seção full-width com fundo escuro (serra-black) onde os 4 cafes sao apresentados como "cartas" clicaveis. O usuario clica em uma embalagem e ela "abre" revelando todos os detalhes daquele cafe com animacoes suaves.

---

## Layout e Interacao

### Estado Inicial
- Fundo escuro (serra-black) com titulo "nossas selecoes"
- 4 embalagens lado a lado (em desktop) ou 2x2 (tablet) ou carrossel (mobile)
- Cada embalagem tem um leve efeito de hover: escala sutil + brilho dourado na borda
- Abaixo de cada embalagem, apenas o nome do cafe em blackletter

### Ao Clicar em uma Embalagem
- A embalagem selecionada se expande com animacao (framer-motion layoutId)
- Um painel de detalhes aparece ao lado (desktop) ou abaixo (mobile) com:
  - Nome, variedade, regiao, produtor
  - Notas sensoriais como tags animadas que surgem em sequencia
  - Score (se existir) com destaque dourado
  - Precos por peso
  - Botao "Peca no WhatsApp"
- As outras 3 embalagens ficam em escala menor e com opacidade reduzida
- Clicar em outra embalagem faz a transicao suave

### Mobile
- Carrossel horizontal com snap scroll (embla-carousel)
- Ao clicar, detalhes expandem abaixo da embalagem

---

## Assets

Copiar as 4 imagens das embalagens (extraidas dos PDFs) para `src/assets/`:
- `pack-amarelo.jpg` (Catucai 44 IAC)
- `pack-verde.jpg` (Catucai Amarelo 785-15)
- `pack-rosa.jpg` (Arara)
- `pack-roxo.jpg` (Catuai 44)

---

## Arquivos Alterados

### `src/components/home/FeaturedCoffees.tsx` (reescrita completa)
- Importar as 4 imagens das embalagens
- Estado `selectedId` para controlar qual cafe esta ativo
- Layout:
  - Titulo da secao
  - Grid de 4 embalagens com `motion.div` e animacoes de hover/selecao
  - Painel de detalhes com `AnimatePresence` para transicoes suaves
- Efeitos visuais:
  - Hover: `scale(1.05)` + `border-serra-gold`
  - Selecionado: `scale(1.1)` + glow dourado
  - Nao selecionado: `opacity(0.4)` + `scale(0.95)`
  - Notas sensoriais: surgem uma por uma com delay escalonado

### `src/data/products.ts`
- Adicionar campo `packImage` ao tipo `Coffee` mapeando para as novas imagens importadas (ou usar mapeamento no componente)

---

## Detalhes Tecnicos

- Framer Motion: `AnimatePresence`, `motion.div`, `layout` prop para transicoes de layout
- Embla Carousel: apenas no mobile (abaixo de `md:`)
- Todas animacoes com `duration: 0.5` e `ease: "easeInOut"`
- Responsivo: grid 4 colunas (lg), 2 colunas (md), carrossel (sm)

---

## Beneficios

- Mostra as embalagens reais (identidade visual forte)
- Interativo: o usuario explora cada cafe clicando
- Todas as 4 selecoes visíveis, nao apenas 2
- Animacoes suaves criam uma experiencia premium
- Consistente com a estetica dark/dourada do restante do site
