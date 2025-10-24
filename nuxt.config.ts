// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-icons',
  ],
  googleFonts: {
    families: {
      // Kita gunakan Poppins untuk kesan modern dan bersih
      Poppins: [300, 400, 500, 600, 700],
    },
    display: 'swap', // Untuk performa
  },
})
