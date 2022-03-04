module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles.scss";`,
      },
    },
  },

  pwa: {
    name: "Xhockware Typescript",
    themeColor: "#475ad7",
    manifestOptions: {
      short_name: "Xhockware",
    },
  },

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true,
    },
  },
};
