module.exports = {
  reactStrictMode: true,
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: process.env.DEFAULT_LOCALE || "en",
  },
};
