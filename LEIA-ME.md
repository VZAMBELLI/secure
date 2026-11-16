# Site — páginas no padrão

## Páginas prontas
- `index.html` — Início
- `comunicacao-segura.html` — Comunicação Segura (inclui a tabela "Comparar Dispositivos", em `#comparar`)
- `rota-segura.html` — Rota Segura
- `ambientes-blindados.html` — Ambientes Blindados
- `estrategia.html` — Estratégia
- `produto-base.html` — modelo vazio para criar produtos novos

## Arquivos compartilhados
- `css/produto.css` — visual de todas as páginas (cores e fontes nas variáveis do topo).
- `js/site.js` — menu no celular, destaque da página atual e entrada suave das seções.
- `img/` — imagens de fundo. Nomes esperados:
  `fundo_inicio.png`, `fundo_comunicacao.png`, `fundo_rota.png`, `fundo_ambientes.png`, `fundo_estrategia.png`.
  Enquanto a imagem não existir, aparece o fundo tático padrão (grade turquesa).

## Antes de publicar (buscar por "TROCAR" e "NOME DA EMPRESA")
1. Trocar `NOME DA EMPRESA` pelo nome real (logo, título e rodapé).
2. Trocar `5500000000000` pelo WhatsApp real (55 + DDD + número). A mensagem de cada página já vem pronta.

## Criar um produto novo
1. Duplique `produto-base.html` (ex.: `mesh.html`).
2. No `<body>`, troque a imagem: `style="--fundo: url('img/fundo_mesh.png');"`.
3. Substitua os textos e apague as seções opcionais que não fizerem sentido.
4. Se quiser o produto no menu, adicione o link no `<nav>` de todas as páginas.
