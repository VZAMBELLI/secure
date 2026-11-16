# Páginas de produto — modelo padrão

Arquivos:
- `produto-base.html` — modelo vazio com menu fixo e todas as seções.
- `css/produto.css` — estilo único compartilhado por todas as páginas.
- `img/` — coloque aqui as imagens de fundo (`fundo_nomeproduto.png`).

## Criar um produto novo
1. Duplique `produto-base.html` (ex.: `mesh.html`).
2. No `<body>`, troque a imagem: `style="--fundo: url('img/fundo_mesh.png');"`.
3. Substitua os textos marcados (título, subtítulo, seções).
4. Apague as seções opcionais que não fizerem sentido (Infraestrutura, Complementos, FAQ).
5. Ajuste os links dos botões finais.

Para mudar cores ou fontes de todas as páginas de uma vez, edite apenas as variáveis no topo de `css/produto.css`.
