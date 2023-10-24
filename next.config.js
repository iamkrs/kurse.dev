/** @type {import('next').NextConfig} */

const withNextIntl = require('next-intl/plugin')('./i18n.ts');

const urlRewrites = require('./next.url-rewrites.config');

module.exports = withNextIntl({
  reactStrictMode: true,
  async rewrites() {
    return urlRewrites;
  },
});
