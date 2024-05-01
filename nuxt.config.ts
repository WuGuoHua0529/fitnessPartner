// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt'
  ],
  //全局css
  css: [
    "@/assets/scss/app.scss",
    "@/assets/scss/_element-variables.scss",
  ],
  elementPlus: { /** Options */ }
})
