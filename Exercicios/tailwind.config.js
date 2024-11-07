/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Garante que Tailwind veja todos os arquivos na pasta src
  ],
  theme: {
    extend: {
      colors: {
        'darkest-red': '#1D1616', // Nome da cor personalizada
        'off-white': '#f2f2eb',
        'clean-red': '#72383d',
        'clean-orange': '#ab644b',
      },
    },
  },
  plugins: [],
}

