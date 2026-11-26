/** Configuração do TailwindCSS da StoreBooks.
 *  Carregada por src/input.css através da diretiva @config.
 */
module.exports = {
  content: ['./index.html', './assets/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        tinta: { DEFAULT: '#1f2440', 700: '#2e3560', 900: '#131730' },
        papel: { DEFAULT: '#faf6ee', escuro: '#efe6d5' },
        ambar: { DEFAULT: '#e8a33d', claro: '#f6c978', escuro: '#9a5f0c' },
        vinho: { DEFAULT: '#8c2f39', escuro: '#6d222b' },
      },
      fontFamily: {
        titulo: ['Lora', 'Georgia', 'serif'],
        corpo: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        capa: '13rem',
      },
      boxShadow: {
        cartao: '0 6px 18px -8px rgba(31, 36, 64, 0.25)',
        capa: '0 18px 30px -12px rgba(19, 23, 48, 0.55)',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(-60px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        sombraDinamica: {
          from: { boxShadow: '0 20px 35px -12px rgba(31, 36, 64, 0.35)' },
          to: { boxShadow: '0 30px 55px -10px rgba(232, 163, 61, 0.65)' },
        },
        sublinhar: {
          from: { backgroundSize: '0% 2px' },
          to: { backgroundSize: '100% 2px' },
        },
        pulseSocial: {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.2) rotate(8deg)' },
        },
        flutuar: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.9s ease-out backwards',
        slideIn: 'slideIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        sombra: 'sombraDinamica 1.2s ease-in-out infinite alternate',
        sublinhar: 'sublinhar 0.35s ease-out forwards',
        'pulse-social': 'pulseSocial 0.8s ease-in-out infinite',
        flutuar: 'flutuar 5s ease-in-out infinite',
      },
    },
  },
  plugins: [
    // Utilitários próprios do projeto
    function ({ addUtilities }) {
      addUtilities({
        // Base da sublinha animada: começa com largura zero
        '.sublinha': {
          backgroundImage: 'linear-gradient(currentColor, currentColor)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left bottom',
          backgroundSize: '0% 2px',
        },
        // Áreas do CSS Grid da seção de destaques
        '.areas-empilhado': {
          gridTemplateAreas: '"titulo" "imagem" "descricao"',
          gridTemplateColumns: 'minmax(0, 1fr)',
        },
        '.areas-lado-a-lado': {
          gridTemplateAreas: '"imagem titulo" "imagem descricao"',
          gridTemplateColumns: 'auto minmax(0, 1fr)',
          gridTemplateRows: 'auto auto',
        },
        '.area-titulo': { gridArea: 'titulo' },
        '.area-imagem': { gridArea: 'imagem' },
        '.area-descricao': { gridArea: 'descricao' },
      });
    },
  ],
};
