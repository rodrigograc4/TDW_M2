/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Garante que Tailwind veja todos os arquivos na pasta src
  ],
  theme: {
    extend: {
      colors: {
        'react-green': '#0c746c', // Nome da cor personalizada
        'react-yellow': '#e9ba75',
        'darkest-red': '#1D1616',
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

