// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig ({

  css: ["bootstrap/dist/css/bootstrap.css"],
  plugins: [
  ],


  // buildModules: [
  //   '@nuxt/typescript-build',
  //   '@nuxtjs/pinia',
  // ],

  modules: [
    '@pinia/nuxt'
  ]

});
