# Marcenaria Custom Furniture — landing page

Site de uma página só (Astro estático), pronto para publicar na Vercel.

## Rodar

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # gera dist/
```

## Onde trocar as coisas

| O quê | Arquivo |
|---|---|
| Nome, cidade, WhatsApp, telefone, códigos do Google (GTM / gtag) | `src/data/site.ts` |
| Domínio do site | `src/data/url.mjs` (e `public/robots.txt`) |
| Serviços (nome, texto, mensagem do WhatsApp) | `src/data/servicos.ts` |
| Textos das fotos (`alt`) e legendas da galeria | `src/data/fotos.ts` |
| Textos da página, passos e perguntas frequentes | `src/pages/index.astro` |

- WhatsApp: `https://api.whatsapp.com/send?phone=5562982038597&text=...`
- Botão de ligação: `tel:062 98203-8597` (só nos botões de ligar).

## Fotos

As fotos atuais são **imagens ilustrativas geradas por IA**. Para trocar por fotos reais:

1. Coloque a foto em `fotos/<pasta>/` (a primeira foto da pasta é usada):
   - `fotos/moveis-planejados/` (também é a foto de fundo do topo)
   - `fotos/conserto-de-moveis-planejados/`
   - `fotos/fabricacao-de-moveis/`
   - `fotos/manutencao-imobiliaria/`
   - `fotos/projeto-planejamento-execucao/`
   - `fotos/ambientes/closet.jpg`, `sala.jpg`, `banheiro.jpg`, `escritorio.jpg` (galeria; `cozinha.jpg` e `quarto.jpg` também entram se forem adicionadas)
2. Apague o `.jpg` correspondente em `src/assets/fotos/` (senão a foto antiga continua).
3. `npm run build` otimiza tudo sozinho (`scripts/fotos.mjs`).

O logo original está em `logo/logo-original.webp`. O cabeçalho usa o desenho da casa recortado (`src/assets/logo-icone.png`) e o rodapé usa o logo inteiro (`src/assets/logo-completo.png`).

Quando as fotos forem reais, tire o aviso "Imagens ilustrativas" em `src/pages/index.astro`.
