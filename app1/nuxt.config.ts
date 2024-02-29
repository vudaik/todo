// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  plugins: [
    { src: '~/plugins/jquery.js', mode: 'client' },
    { src: '~/plugins/bootstrap.js', mode: 'client' }
  ],

  css: [
    'bootstrap/dist/css/bootstrap.css'
  ],
})
