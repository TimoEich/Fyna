export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'fyna',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        script: [
            { src: 'jquery-3.6.0.js' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        [
            '@nuxtjs/firebase',
            {
                config: {
                    apiKey: "AIzaSyCADxf4u33Raz4SWB9JX5y3hKN21eq7sM4",
                    authDomain: "fyna1804.firebaseapp.com",
                    projectId: "fyna1804",
                    storageBucket: "fyna1804.appspot.com",
                    messagingSenderId: "614798366622",
                    appId: "1:614798366622:web:9ff47b38108ac5ef75688f"
                    /* measurementId: '<measurementId>' */
                },
                services: {
                    firestore: true,
                }
            }
        ],
        ['@nuxtjs/axios',],
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
    }
}
