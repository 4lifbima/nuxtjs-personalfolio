// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      // Definisikan warna primer kustom Anda
      colors: {
        primary: {
          DEFAULT: '#3e06ba', // Warna utama
          light: '#5a1de0', // Warna lebih terang untuk hover
          dark: '#2d048a', // Warna lebih gelap untuk active/focus
        },
      },
      // Atur Poppins sebagai font default
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}