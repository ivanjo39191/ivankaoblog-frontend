import colors from 'vuetify/es5/util/colors'

export default {
  server: {
    port: process.env.VUE_APP_SERVER_PORT || 3000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - blog-frontend',
    title: 'blog-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap'
      }
    ]
  },

  // env
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    VUE_APP_BACKEND_SERVER: process.env.VUE_APP_BACKEND_SERVER || "http://your.api.server",
    VUE_APP_GOOGLEMAPAPIKEY: process.env.VUE_APP_GOOGLEMAPAPIKEY,
    VUE_APP_BACKEND_SERVER_1: process.env.VUE_APP_BACKEND_SERVER_1,
    VUE_APP_BACKEND_SERVER_1_SCHEME: process.env.VUE_APP_BACKEND_SERVER_1_SCHEME,
    VUE_APP_BACKEND_SERVER_1_PORT: process.env.VUE_APP_BACKEND_SERVER_1_PORT,
    VUE_APP_BACKEND_SERVER_1_DOMAIN: process.env.VUE_APP_BACKEND_SERVER_1_DOMAIN,
    GOOGLE_OAUTH_1_CLIENTID: process.env.GOOGLE_OAUTH_1_CLIENTID,
    GOOGLE_OAUTH_1_TOKEN: process.env.GOOGLE_OAUTH_1_TOKEN,
    GOOGLE_OAUTH_1_USERINFO: process.env.GOOGLE_OAUTH_1_USERINFO,
    GOOGLE_OAUTH_1_REDIRECTURI: process.env.GOOGLE_OAUTH_1_REDIRECTURI,

    VUE_APP_BACKEND_SERVER_2: process.env.VUE_APP_BACKEND_SERVER_2,
    VUE_APP_BACKEND_SERVER_2_SCHEME: process.env.VUE_APP_BACKEND_SERVER_2_SCHEME,
    VUE_APP_BACKEND_SERVER_2_PORT: process.env.VUE_APP_BACKEND_SERVER_2_PORT,
    VUE_APP_BACKEND_SERVER_2_DOMAIN: process.env.VUE_APP_BACKEND_SERVER_2_DOMAIN,
    GOOGLE_OAUTH_2_CLIENTID: process.env.GOOGLE_OAUTH_2_CLIENTID,
    GOOGLE_OAUTH_2_TOKEN: process.env.GOOGLE_OAUTH_2_TOKEN,
    GOOGLE_OAUTH_2_USERINFO: process.env.GOOGLE_OAUTH_2_USERINFO,
    GOOGLE_OAUTH_2_REDIRECTURI: process.env.GOOGLE_OAUTH_2_REDIRECTURI,
  },

  // src
  srcDir: 'src/',
  
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    ['@nuxtjs/eslint-module', {
      fix: true
    }],
    // https://go.nuxtjs.dev/stylelint
    ['@nuxtjs/stylelint-module', {
      fix: true
    }],
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  // Loading
  loading: {
    color: 'black',
    failedColor: 'red',
    height: '2px',
    duration: 5000,
    rtl: false
},
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  auth: {
    strategies: {
      google_oauth_1: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://accounts.google.com/o/oauth2/auth',
          token: process.env.GOOGLE_OAUTH_1_TOKEN,
          userInfo: process.env.GOOGLE_OAUTH_1_USERINFO,
          // logout: 'https://example.com/logout'
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          maxAge: 1800
        },
        refreshToken: {
          property: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30
        },
        responseType: 'code',
        grantType: 'authorization_code',
        accessType: undefined,
        redirectUri: process.env.GOOGLE_OAUTH_1_REDIRECTURI,
        logoutRedirectUri: undefined,
        clientId: process.env.GOOGLE_OAUTH_1_CLIENTID,
        scope: ['profile', 'email'],
        state: 'UNIQUE_AND_NON_GUESSABLE',
        codeChallengeMethod: '',
        responseMode: '',
        acrValues: '',
        // autoLogout: false
      },
      google_oauth_2: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://accounts.google.com/o/oauth2/auth',
          token: process.env.GOOGLE_OAUTH_2_TOKEN,
          userInfo: process.env.GOOGLE_OAUTH_2_USERINFO,
          // logout: 'https://example.com/logout'
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          maxAge: 1800
        },
        refreshToken: {
          property: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30
        },
        responseType: 'code',
        grantType: 'authorization_code',
        accessType: undefined,
        redirectUri: process.env.GOOGLE_OAUTH_2_REDIRECTURI,
        logoutRedirectUri: undefined,
        clientId: process.env.GOOGLE_OAUTH_2_CLIENTID,
        scope: ['profile', 'email'],
        state: 'UNIQUE_AND_NON_GUESSABLE',
        codeChallengeMethod: '',
        responseMode: '',
        acrValues: '',
        // autoLogout: false
      }
    },
    cookie: {
      options: {
        secure: process.env.NODE_ENV === "production", // Enable in Prod only!
        sameSite: 'lax',
      }
    },
    localStorage: false
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
