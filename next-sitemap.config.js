/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.weblitzstack.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/admin', '/login'], // optional
};
