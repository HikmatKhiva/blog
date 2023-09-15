// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-icon",
    "@nuxtjs/supabase",
  ],
  css: ["@/assets/css/main.css"],
  // Nuxt app configuration
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "NuxtJsBlog",
      meta: [
        {
          id: "description",
          name: "description",
          content: "nuxtjs Blog web site",
        },
      ],
    },
  },
  // Supabse Configuration
  supabase: {
    url: process.env.SUPABASE_URL,
    serviceKey: process.env.SUPABASE_KEY,
    redirect:false
  },
});