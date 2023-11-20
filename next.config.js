const { config } = require("process");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });

    return config;
  },
};

const withNextIntl = require("next-intl/plugin")("./src/utils/i18n.ts");

module.exports = withNextIntl(nextConfig);
