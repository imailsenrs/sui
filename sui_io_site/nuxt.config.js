export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "sui.io",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/styles/vendor.css", "~/assets/styles/app.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: "@/plugins/sal",
      ssr: false,
      mode: "client",
    },
    {
      src: "@/plugins/analytics",
      ssr: false,
      mode: "client",
    },
  ],
  server: {
    default: 3000,
    // host: "0.0.0.0", // default: localhost
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],

  // parent ID name
  globalName: "suiio",

  buildDir: "suiio",
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],
  generate: {
    dir: "./public",
    subFolders: true,
    exclude: [],
    fallback: "404.html",
  },

  router: {
    linkActiveClass: "sui_selected",
    // trailingSlash: true,
    scrollBehavior: (to, from, savedPosition) => {
      return {
        x: 0,
        y: 0,
      };
    },
  },
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
  },
};
