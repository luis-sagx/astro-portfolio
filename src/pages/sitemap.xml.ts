const siteUrl = 'https://luis-sagx.xyz';

const pages = ['/en/', '/es/'];

export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map((path) => {
    const url = `${siteUrl}${path}`;
    return `  <url>
    <loc>${url}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${siteUrl}/en/" />
    <xhtml:link rel="alternate" hreflang="es" href="${siteUrl}/es/" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}/en/" />
  </url>`;
  })
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
