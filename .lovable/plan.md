

# Ajustes Visuais - Hero, Navbar e BrandSection

## Resumo das Alterações

Vou implementar os três ajustes solicitados para refinar a experiência visual do site:

---

## 1. Hero Section — Vídeo de Fundo

**Arquivo:** `src/components/home/HeroSection.tsx`

- Comentar a imagem de fundo atual (não excluir)
- Adicionar elemento `<video>` com as propriedades:
  - `autoPlay`, `loop`, `muted`, `playsInline`
  - URL: `https://uaxraccxizldcvuwjitt.supabase.co/storage/v1/object/public/app/0208%20(1).mp4`
- Manter o overlay escuro para legibilidade do texto

```text
Antes: background-image com heroFarm.jpg
Depois: <video> em loop + overlay bg-serra-black/60
```

---

## 2. Navbar — Simplificação

**Arquivo:** `src/components/Navbar.tsx`

- Remover os links de navegação visíveis no desktop (linhas 54-79)
- Manter apenas:
  - **Logo** à esquerda
  - **Ícone de menu hamburger** à direita (para todas as telas)
- O menu hamburger abrirá um painel lateral/dropdown com todas as opções
- Remover a classe `md:hidden` do botão do menu para aparecer em todas as telas

```text
Layout Atual (desktop): [LOGO] -------- [Início] [Cafés] [Sobre] [Contato]
Layout Novo (todas telas): [LOGO] --------------------------------- [☰ Menu]
```

---

## 3. BrandSection — Imagem Full-Bleed Lifestyle

**Arquivo:** `src/components/home/BrandSection.tsx`

- Usar AI para gerar uma imagem no estilo Onyx Coffee Lab:
  - Coador/dripper cerâmico com jarra âmbar
  - Pacotes de café artesanal
  - Bancada clara, iluminação natural, fundo minimalista
  - Estética clean e sofisticada
- Aplicar a imagem como background full-bleed da seção
- Reposicionar o conteúdo de texto com overlay para legibilidade
- Remover o layout de duas colunas

```text
Layout Atual: [Texto] | [Imagem lateral]
Layout Novo: [Imagem full-bleed com overlay] + [Texto centralizado ou à esquerda]
```

---

## Estrutura Técnica

### HeroSection.tsx (alteração)
```tsx
{/* Background image - comentado */}
{/* <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroFarm})` }}> */}

{/* Background video */}
<div className="absolute inset-0">
  <video autoPlay loop muted playsInline className="w-full h-full object-cover">
    <source src="https://..." type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-serra-black/60" />
</div>
```

### Navbar.tsx (alteração)
- Remover bloco `hidden md:flex` com links desktop
- Mudar `md:hidden` para exibir em todas as telas
- Menu mobile agora funciona como menu principal

### BrandSection.tsx (alteração)
- Seção com `relative` e imagem de fundo absoluta
- Overlay escuro semitransparente
- Texto sobre a imagem com contraste adequado

---

## Benefícios

- **Hero com vídeo**: Experiência mais imersiva e dinâmica
- **Navbar minimalista**: Visual mais limpo e moderno, consistente com a estética Onyx
- **BrandSection full-bleed**: Impacto visual maior, estilo lifestyle premium

