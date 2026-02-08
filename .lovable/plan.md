
# Integração dos Assets Reais - Pé de Serra

## Resumo

Vou integrar os materiais oficiais que você enviou ao site:
- **Logo oficial** - Navbar, Footer e Hero
- **Foto dos produtores** (P&B) - Seção "Nossos Produtores"
- **4 produtos reais** - Substituir os dados placeholder pelos cafés reais com suas embalagens

---

## Assets a Integrar

### 1. Logo Oficial
Arquivo: `WhatsApp_Image_2026-02-05_at_11.28.58.jpeg`
- Montanhas verdes com sol laranja
- Texto "PÉ DE SERRA" e "TORRA DE CAFÉ"
- Será usado na Navbar (versão menor) e Footer

### 2. Foto dos Produtores
Arquivo: `image-10.png`
- Imagem em preto e branco dos trabalhadores sob abrigo rústico
- Montanhas ao fundo - perfeita para a seção "Nossos Produtores"

### 3. Imagens das Embalagens (4 produtos)
Cada embalagem será salva como imagem do produto para exibir nos cards:
- **Amarelo** - Catucai 44 IAC (Emílio Horst - Iúna/ES)
- **Verde** - Catucai Amarelo 785-15 (Emílio Horst - Iúna/ES)
- **Rosa/Coral** - Arara (Eduardo Cerqueira - Manhuaçu/MG)
- **Roxo** - Catuaí 44 (Gabriel Protázio - Forquilha do Rio/ES)

---

## Produtos Reais (Dados Extraídos)

| Cor | Notas Sensoriais | Processo | Altitude | Variedade | Pontuação | Produtor | Região |
|-----|-----------------|----------|----------|-----------|-----------|----------|--------|
| Amarelo | Limão, Rapadura, Baunilha | Natural | 1000m | Catucai 44 IAC | 87 | Emílio Horst | Iúna (ES) |
| Verde | Rapadura, Caramelo, Chocolate, Mel | Natural | 1000m | Catucai Amarelo 785-15 | - | Emílio Horst | Iúna (ES) |
| Rosa | Caramelo, Chocolate, Mel | Cereja Descascado | 1060m | Arara | 85,25 | Eduardo Cerqueira | Manhuaçu (MG) |
| Roxo | Caramelo, Doce de Leite, Melaço, Castanhas, Limão | Cereja Descascado | 1200m | Catuaí 44 | 86 | Gabriel Protázio | Forquilha do Rio (ES) |

---

## Alterações no Código

### 1. Copiar Assets para o Projeto
```text
src/assets/
├── logo-pe-de-serra.jpg      (logo oficial)
├── produtores-bw.jpg         (foto P&B dos produtores)
├── pack-amarelo.jpg          (embalagem amarela)
├── pack-verde.jpg            (embalagem verde)
├── pack-rosa.jpg             (embalagem rosa)
└── pack-roxo.jpg             (embalagem roxa)
```

### 2. Atualizar `src/data/products.ts`
- Substituir os 4 produtos fictícios pelos 4 reais
- Adicionar campos: `producer`, `variety`, `process`, `altitude`, `color`
- Atualizar a interface `Coffee` com os novos campos

### 3. Atualizar Componentes

**Navbar.tsx**
- Substituir texto "Pé de Serra" pela logo oficial

**Footer.tsx**
- Adicionar a logo oficial

**ProducerSpotlight.tsx**
- Trocar o placeholder pela foto real em P&B dos produtores

**PricingSection.tsx / FeaturedCoffees.tsx**
- Exibir imagem da embalagem de cada produto
- Mostrar informações detalhadas (produtor, variedade, processo)

**CafesPage.tsx**
- Atualizar grid de produtos com as embalagens reais
- Exibir todas as informações técnicas de cada café

---

## Benefícios

- Site com identidade visual real da marca
- Produtos com dados autênticos e completos
- Foto real dos produtores transmite autenticidade
- Cores das embalagens criam diferenciação visual entre produtos

---

## Observação sobre Regiões

Note que os produtos são de **Espírito Santo** (Iúna, Forquilha do Rio) e **Minas Gerais** (Manhuaçu), então posso ajustar a seção de regiões para refletir isso, se desejar.
