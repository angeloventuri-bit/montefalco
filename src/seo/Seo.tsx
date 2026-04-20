import { Helmet } from 'react-helmet-async';
import { SITE } from '@/data/site';

interface SeoProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  keywords?: string[];
  noindex?: boolean;
  schemas?: Record<string, unknown>[];
  publishedAt?: string;
  updatedAt?: string;
  author?: string;
}

export function Seo({
  title,
  description = SITE.description,
  path = '/',
  image,
  type = 'website',
  keywords,
  noindex,
  schemas = [],
  publishedAt,
  updatedAt,
  author,
}: SeoProps) {
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} | Distribuidora de Pedras Premium`;
  const url = `${SITE.url}${path}`;
  const ogImage = image ?? `${SITE.url}${SITE.defaultOgImage}`;

  return (
    <Helmet>
      <html lang="pt-BR" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="author" content={author ?? SITE.name} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content="pt_BR" />
      {publishedAt && <meta property="article:published_time" content={publishedAt} />}
      {updatedAt && <meta property="article:modified_time" content={updatedAt} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
