import { NuxtConfig } from "@nuxt/types";
import i18n from "./src/i18n";
import { isProduct, GA } from "./src/constants";

const config: NuxtConfig = {
  ssr: false,
  router: {
    mode: "hash",
  },
  srcDir: "./src",
  head: {
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no, viewport-fit=cover",
      },
      {
        hid: "title",
        name: "title",
        content: "Mixin.fan",
      },
      {
        hid: "description",
        name: "description",
        content: "The listings portal for Mixin Ecosystem.",
      },
      {
        hid: "color-scheme",
        name: "color-scheme",
        content: "light only",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
      { rel: "apple-touch-icon", type: "image/png", href: "/favicon.png" },
    ],
  },
  loading: { color: "#fff" },
  css: ["~/styles/index.scss"],
  plugins: ["~/plugins/property.ts", "~/plugins/libs.ts"],
  buildModules: [
    "@nuxtjs/eslint-module",
    [
      "@nuxt/typescript-build",
      {
        typeCheck: true,
        ignoreNotFoundWarnings: true,
      },
    ],
    "@nuxtjs/vuetify",
  ],
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/google-analytics",
    "@nuxtjs/dotenv",
    [
      "nuxt-i18n",
      {
        vueI18n: i18n,
        locales: ["en", "zh"],
        defaultLocale: "en",
        strategy: "no_prefix",
        detectBrowserLanguage: false,
        parsePages: false,
        seo: false,
      },
    ],
  ],
  googleAnalytics: {
    id: GA,
    dev: false,
    debug: {
      enabled: !isProduct,
      sendHitTask: isProduct,
    },
  },
  vuetify: {
    customVariables: ["~/styles/variables.scss"],
    defaultAssets: false,
    treeShake: true,
    optionsPath: "./vuetify.options.ts",
  },
  build: {
    transpile: ["vuetify", "@foxone/uikit"],
  },
  env: {
    TOKEN: process.env.TOKEN || "",
    APP_ENV: process.env.APP_ENV || "",
  },
};

export default config;
