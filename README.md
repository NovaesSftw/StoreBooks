# StoreBooks

Página inicial de uma livraria fictícia, com CSS Grid, TailwindCSS, Bootstrap e animações.

- **Autor(a):** NovaesSftw
- **Site publicado:** https://novaessftw.github.io/StoreBooks/

## Como abrir

Abra o arquivo `index.html` no navegador. O CSS do Tailwind já está compilado em `assets/css/tailwind.css`.
O Bootstrap 5.3.3 e as fontes vêm de CDN, então é preciso estar conectado à internet.

## Como recompilar o CSS

Necessário somente após alterar classes ou o `tailwind.config.js` (requer Node.js 20 ou superior):

```bash
npm install
npm run build   # ou: npm run dev (recompila a cada alteração)
```

## Estrutura

```
index.html              Página
tailwind.config.js      Tema, keyframes, animações e utilitários próprios
src/input.css           Entrada do Tailwind (carrega a configuração com @config)
assets/css/tailwind.css CSS gerado
assets/js/main.js       Intersection Observer, busca, filtro e carrinho
assets/img/             Logo e capas ilustrativas em SVG
```

## Onde está cada requisito

| Requisito | Implementação |
|---|---|
| CSS Grid nos destaques | Seção `#destaques`, áreas `titulo`, `imagem` e `descricao` (`areas-empilhado`, `areas-lado-a-lado`) |
| Bootstrap | `navbar` com `collapse`, `container`, `row`/`col` no rodapé, `toast` do carrinho |
| Breakpoints | `sm`, `md`, `lg`, `xl` e `2xl` em `index.html` |
| Tema personalizado | `theme.extend`: `colors`, `fontFamily`, `spacing`, `boxShadow`, `keyframes`, `animation` |
| Utilitários próprios | Plugin no `tailwind.config.js`: `sublinha` e as áreas do grid |
| Fade-in no cabeçalho | `animate-fadeIn` com atrasos em cascata |
| Cards de livros | `hover:scale-105`, `hover:shadow-2xl`, `hover:animate-sombra` |
| Slide-in nas categorias | Intersection Observer + `animate-slideIn` |
| Botões | `transition` + `active:scale-95` |
| Links | `hover:text-ambar` + `hover:animate-sublinhar` |
| Busca expansiva | `transition-all` + `focus:w-64` (menor entre `lg` e `xl`, para caber no menu) |
| Redes sociais | `group-hover:animate-pulse-social` e `group-hover:animate-spin` |

## Convivência entre Bootstrap e Tailwind

- O Bootstrap é importado na camada CSS `bootstrap`, abaixo dos utilitários do Tailwind. O reset usado é o do Bootstrap.
- Os utilitários do Bootstrap usam `!important`. Quando um nome existe nas duas bibliotecas com efeito diferente
  (ou atrapalharia uma variante como `lg:gap-4`), usamos a forma entre colchetes do Tailwind: `mb-[0.75rem]`, `bg-[white]`.
- As classes `collapse` e `container` pertencem ao Bootstrap e não são geradas pelo Tailwind.

## Acessibilidade

Se o sistema estiver configurado para **reduzir movimento**, as animações são praticamente desativadas.

## Publicação

### GitHub Pages
1. Crie um repositório público chamado `storebooks`.
2. Envie o **conteúdo** desta pasta (o `index.html` deve ficar na raiz do repositório).
3. Em **Settings → Pages**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`, e salve.
4. Aguarde alguns minutos e acesse `https://SEU-USUARIO.github.io/storebooks/`.

## Observações

Loja, preços e capas são fictícios ou ilustrativos. O carrinho é apenas demonstrativo e os ícones
de redes sociais são genéricos, sem links para perfis reais.
