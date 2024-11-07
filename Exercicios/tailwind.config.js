/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Garante que Tailwind veja todos os arquivos na pasta src
  ],
  theme: {
    extend: {
      colors: {
        'darkest-red': '#1D1616', // Nome da cor personalizada
        'clean-orange': '#ab644b',
        'off-white': '#f2f2eb',
        'dark-blue': '#00002a',
        'clean-blue': '#50949c',
        'off-blue-white': '#f0f5f5',
      },
    },
  },
  plugins: [],
}

