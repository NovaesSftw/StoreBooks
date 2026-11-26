// Interações da página inicial da StoreBooks
(() => {
  'use strict';

  // 1. Categorias: slide-in quando aparecem na rolagem (Intersection Observer)
  const categorias = document.querySelectorAll('.categoria');
  if ('IntersectionObserver' in window) {
    const observador = new IntersectionObserver((entradas) => {
      entradas
        .filter((entrada) => entrada.isIntersecting)
        .forEach((entrada, ordem) => {
          const item = entrada.target;
          item.style.animationDelay = `${ordem * 150}ms`; // efeito em cascata
          item.classList.remove('opacity-0');
          item.classList.add('animate-slideIn');
          observador.unobserve(item); // anima uma única vez
        });
    }, { threshold: 0.25 });

    // O item só é escondido se o JavaScript estiver ativo
    categorias.forEach((item) => {
      item.classList.add('opacity-0');
      observador.observe(item);
    });
  }

  // 2. Busca e filtro por categoria
  const busca = document.getElementById('busca');
  const livros = document.querySelectorAll('.livro');
  const botoesCategoria = document.querySelectorAll('button[data-categoria]');
  const resultado = document.getElementById('resultado');
  const vazio = document.getElementById('vazio');
  let categoriaAtiva = null;

  // Ignora acentos e maiúsculas: "bras" encontra "Brás"
  const normalizar = (texto) =>
    texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();

  function filtrar() {
    const termo = normalizar(busca.value);
    let visiveis = 0;
    livros.forEach((livro) => {
      const mostra =
        normalizar(livro.dataset.busca).includes(termo) &&
        (!categoriaAtiva || livro.dataset.categoria === categoriaAtiva);
      livro.hidden = !mostra;
      if (mostra) visiveis += 1;
    });
    resultado.textContent =
      visiveis === 1 ? '1 livro disponível' : `${visiveis} livros disponíveis`;
    vazio.hidden = visiveis > 0;
  }

  function marcarCategoria(nome) {
    categoriaAtiva = nome;
    botoesCategoria.forEach((botao) =>
      botao.setAttribute('aria-pressed', String(botao.dataset.categoria === nome)));
    filtrar();
  }

  const irParaLivros = () => document.getElementById('livros').scrollIntoView();

  botoesCategoria.forEach((botao) => {
    botao.addEventListener('click', () => {
      const nova = botao.dataset.categoria === categoriaAtiva ? null : botao.dataset.categoria;
      marcarCategoria(nova);
      if (nova) irParaLivros();
    });
  });

  busca.addEventListener('input', filtrar);
  document.getElementById('form-busca').addEventListener('submit', (evento) => {
    evento.preventDefault();
    irParaLivros();
  });
  document.getElementById('limpar').addEventListener('click', () => {
    busca.value = '';
    marcarCategoria(null);
  });

  // 3. Carrinho (demonstração, sem persistência)
  const contador = document.getElementById('contador');
  const aviso = document.getElementById('aviso');
  const avisoTexto = document.getElementById('aviso-texto');
  let itens = 0;

  function avisar(mensagem) {
    avisoTexto.textContent = mensagem;
    bootstrap.Toast.getOrCreateInstance(aviso, { delay: 2500 }).show();
  }

  document.querySelectorAll('[data-comprar]').forEach((botao) => {
    botao.addEventListener('click', () => {
      itens += 1;
      contador.textContent = itens;
      avisar(`"${botao.dataset.comprar}" foi adicionado ao carrinho.`);
    });
  });

  document.getElementById('botao-carrinho').addEventListener('click', () => {
    avisar(itens === 0 ? 'Seu carrinho está vazio.' : `Itens no carrinho: ${itens}.`);
  });

  // 4. No celular, fecha o menu depois de escolher um link
  const menu = document.getElementById('menu');
  menu.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
    });
  });
})();
