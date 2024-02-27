/** @type {import('next').NextConfig} */

const withNextIntl = require("next-intl/plugin")("./i18n.ts");

const urlRewrites = require("./next.url-rewrites.config");

module.exports = withNextIntl({
  reactStrictMode: true,
  async rewrites() {
    const fs = require('fs');
    const path = require('path');
    const publicPagesPath = path.join(process.cwd(), 'public/p');
    const publicPagesFolders = fs
      .readdirSync(publicPagesPath)
      .filter((file) =>
        fs.statSync(path.join(publicPagesPath, file)).isDirectory()
      );
    const publicPagesIndexes = publicPagesFolders.map((folder) => ({
      source: `/p/${folder}`,
      destination: `/p/${folder}/index.html`,
    }));
    return [...urlRewrites, ...publicPagesIndexes];
  },
});
