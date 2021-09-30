/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ['courses-top.ru']
  },
  reactStrictMode: true,
  i18n: {
    locales: ['ru'],
    defaultLocale: 'ru'
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/]
      },
      use: ['@svgr/webpack'],
    });
    return config;
  },
}
