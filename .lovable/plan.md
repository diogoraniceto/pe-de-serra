

# Plano de Alteracoes (7 itens)

## 1. Tipografia: Sofia Pro e Avenir

Substituir as 3 fontes atuais (UnifrakturCook, Dancing Script, Inter) por apenas 2:
- **Sofia Pro** (.otf) -- substitui UnifrakturCook (titulos) e Dancing Script (assinaturas)
- **Avenir** (.otf) -- substitui Inter (corpo de texto)

**Preciso que voce envie os arquivos .otf** das fontes Sofia Pro e Avenir na proxima mensagem para que eu possa hospeda-los no projeto.

### Arquivos alterados:
- `src/index.css` -- remover importacao do Google Fonts, adicionar `@font-face` para Sofia Pro e Avenir
- `tailwind.config.ts` -- atualizar `fontFamily` (blackletter/script -> Sofia Pro, body -> Avenir)
- Todos os componentes que usam `font-blackletter`, `font-script`, `font-body` continuarao funcionando pois as classes Tailwind apontarao para as novas fontes

---

## 2. Secao "Nossa Essencia" (BrandSection) -- Layout lado a lado

Transformar de imagem full-bleed com texto centralizado para layout em 2 colunas (como ProducerSpotlight):
- Fundo preto (serra-black) para uniformidade com a secao seguinte (Nossas Selecoes)
- Texto alinhado a esquerda (coluna esquerda)
- Imagem menor no lado direito (coluna direita)

### Arquivo alterado:
- `src/components/home/BrandSection.tsx` -- reescrever layout de full-bleed para grid 2 colunas

---

## 3. FAQ: Nova pagina + link no rodape

- Remover `FAQSection` da pagina inicial (Index)
- Criar nova pagina `/perguntas-frequentes` com a FAQ
- Adicionar rota no `App.tsx`
- Acrescentar link "Perguntas Frequentes" na navegacao do rodape (Footer)

### Arquivos alterados:
- `src/pages/Index.tsx` -- remover importacao e uso de FAQSection
- `src/pages/FAQPage.tsx` -- nova pagina dedicada para FAQ
- `src/App.tsx` -- adicionar rota `/perguntas-frequentes`
- `src/components/Footer.tsx` -- adicionar link "Perguntas Frequentes" na secao Navegacao

---

## 4. Reordenar secoes: Produtores antes de Regioes

Trocar a ordem no Index para que "Nossos Produtores" apareca antes de "Nossas Regioes".

### Arquivo alterado:
- `src/pages/Index.tsx` -- inverter `ProducerSpotlight` e `RegionsSection`

---

## 5. Redesign da secao Nossas Regioes

Inspirado nas imagens de referencia enviadas (estilo arch-top cards com fundo escuro):
- Fundo verde (serra-green) -- manter
- Imagens menores com formato arch-top (topo arredondado)
- Remover o overlay escuro quadrado ao redor das imagens -- as imagens ficam diretamente sobre o fundo verde
- A parte inferior das imagens deve coincidir com o final da secao (sem padding inferior)
- Texto e descricao sobre as imagens

### Arquivo alterado:
- `src/components/home/RegionsSection.tsx` -- redesign do layout dos cards

---

## 6. Secao Arte da Torra -- por ultimo e menor

Mover a secao `RoastingSection` para ser a ultima secao antes do Footer, e reduzir a altura vertical (menos padding).

### Arquivo alterado:
- `src/pages/Index.tsx` -- mover RoastingSection para depois de PricingSection
- `src/components/home/RoastingSection.tsx` -- reduzir padding vertical (py-24 -> py-12 ou py-16)

---

## Ordem final das secoes na pagina inicial:

1. HeroSection (video)
2. BrandSection (Nossa Essencia -- novo layout lado a lado, fundo preto)
3. FeaturedCoffees (Nossas Selecoes -- fundo preto)
4. ProducerSpotlight (Nossos Produtores)
5. RegionsSection (Nossas Regioes -- redesign)
6. PricingSection (Nossos Cafes)
7. RoastingSection (Arte da Torra -- menor, por ultimo)

---

## Detalhes tecnicos

- Fontes: `@font-face` com arquivos .otf hospedados em `src/assets/fonts/`
- Todas as classes `font-blackletter` e `font-script` passam a usar Sofia Pro
- Classe `font-body` passa a usar Avenir
- Nenhuma dependencia nova necessaria
- A secao de regioes usa CSS `border-radius` com `arch-top` ja existente no CSS

