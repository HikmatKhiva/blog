// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "nuxt-icon"],
  app: {
    head: {
      charset: "utf-8",
      viewport: 'width=device-width, initial-scale=1',
      title: 'NuxtJsBlog',
      meta: [
        { id: "description", name: "description", content: "nuxtjs Blog web site" }
      ]
    },
 
  }
})