// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  googleFonts: {
    families: {
      Montserrat: [100, 300, 400, 500, 700, 900],
    },
    display: "swap",
    preconnect: true,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    '@nuxtjs/tailwindcss',
    "shadcn-nuxt",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
});