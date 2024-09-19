import { useEffect } from "react";

const Sitemap = () => {
  useEffect(() => {
    const generateSitemap = () => {
      const pages = ["/", "/checkout"];
      const baseUrl = "http://localhost:3001";

      // Generera XML-sitemap som en sträng
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

      // Skapa en Blob och ladda ner den
      const blob = new Blob([xmlSitemap], { type: "application/xml" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "sitemap.xml";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    generateSitemap();
  }, []);

  return <div>Generating Sitemap...</div>;
};

export default Sitemap;

