// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  plugins: [
    { 
      src: '@/plugins/aos.client.ts',
      mode: 'client'
    }
  ],
  alias: {
    "@": "./"
  },
  css: [
    "@/assets/styles/global.css",
    "@/assets/styles/tailwind.css",
    '@fortawesome/fontawesome-free/css/all.min.css',
  ],
  app: {
    head: {
      title: '我的博客 - 记录生活点滴',
      meta: [
        { name: 'description', content: '欢迎来到我的个人博客，这里记录了我的生活和感悟。' },
        { name: 'keywords', content: '博客, 生活, 技术, 分享' },
      ],
    }
  }
})
