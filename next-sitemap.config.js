/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://dsp-dev-o23-g1.vercel.app',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  async additionalPaths(config) {
    const res = await fetch('https://sailingloc-back.vercel.app/api/bateaux');
    const json = await res.json();

    if (!json || !Array.isArray(json.bateaux)) return [];

    return json.bateaux.map((bateau) => ({
      loc: `/bateaux/${bateau.slug}`,
      changefreq: 'daily',
      priority: 0.9,
      lastmod: new Date().toISOString(),
    }));
  },
};

module.exports = config;
