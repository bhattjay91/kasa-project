
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", type: "text/css", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"},
      { rel: "stylesheet", type: "text/css", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js' },
      { src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js' },
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js' }
    ]
  },
  transition:{
    name: 'page',
    mode: 'out-in'
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  /*
  ** PWA configuration
  */
  pwa: {
    manifest:{
      short_name: 'KP',
      name: 'Kasa Project',
      start_url: '/',
      theme_color: '#302a8d',
    },
    /*workbox: {
      runtimeCaching: [
        {
          urlPattern: new RegExp('^https://jay-bhatt-kasa-project.herokuapp.com/'),
          handler: 'networkFirst',
          strategyOptions: {
            cacheName: 'api-cache',
            networkTimeoutSeconds: 20,
            cacheableResponse:{
              statuses:[0,200]
            },
            cacheExpiration: {
              maxEntries: 10,
              maxAgeSeconds: 300
            }
          }
        }
      ]
    }*/
    workbox: {
      runtimeCaching: [
           {
             urlPattern: 'https://jay-bhatt-kasa-project.herokuapp.com/.*',
             strategyOptions: {
               cacheName: 'our-cache',
               cacheExpiration: {
                 maxEntries: 10,
                 maxAgeSeconds: 300
               }
             }
           }
         ]
      }
  },

}
