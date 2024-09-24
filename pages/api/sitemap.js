export default function handler(req, res) {
  const pages = ["/", "/checkout"];
  const baseUrl = "http://localhost:3001";

const xmlSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      return `
      <url>
        <loc>${baseUrl}${page}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>`;
    })
    .join('')}
</urlset>`;


res.setHeader("Content-Type", "application/xml");

res.write(xmlSitemap);
res.end();
  
}

