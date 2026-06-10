export default defineNuxtConfig({
  compatibilityDate: '2026-05-13',
  devtools: { enabled: false },
  app: {
    head: {
      title: 'PT Cipta Ananta Dharma',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'PT Cipta Ananta Dharma — Structural engineering consultants delivering precision, safety, and innovation across Indonesia.'
        }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap'
        }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})
