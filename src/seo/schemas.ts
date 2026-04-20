import { SITE } from '@/data/site';
import { FAQ } from '@/data/faq';
import { PRODUCTS } from '@/data/products';
import { TEAM } from '@/data/team';
import type { BlogPost } from '@/data/blog';

const orgId = `${SITE.url}#organization`;
const websiteId = `${SITE.url}#website`;

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': orgId,
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  logo: `${SITE.url}/logo-montefalco.png`,
  description: SITE.description,
  foundingDate: SITE.founded,
  taxID: SITE.cnpj,
  knowsAbout: [
    'Mármore',
    'Granito',
    'Quartzito',
    'Quartzo',
    'Travertino',
    'Lâminas ultracompactas',
    'Pedras naturais',
    'Distribuição B2B de pedras',
  ],
  sameAs: [SITE.social.instagram, SITE.social.linkedin, SITE.social.pinterest],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: SITE.phoneRaw,
    email: SITE.email,
    contactType: 'sales',
    availableLanguage: ['Portuguese', 'Portuguese-BR'],
    areaServed: 'BR',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.zip,
    addressCountry: SITE.address.country,
  },
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE.url}#localbusiness`,
  name: SITE.name,
  image: `${SITE.url}${SITE.defaultOgImage}`,
  telephone: SITE.phoneRaw,
  email: SITE.email,
  url: SITE.url,
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.zip,
    addressCountry: SITE.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: SITE.address.geo.lat,
    longitude: SITE.address.geo.lng,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '12:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Materiais Montefalco',
    itemListElement: PRODUCTS.map((p) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Product',
        name: p.name,
        category: p.categoryLabel,
        description: p.description,
      },
    })),
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '187',
    bestRating: '5',
    worstRating: '1',
  },
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': websiteId,
  url: SITE.url,
  name: SITE.name,
  description: SITE.description,
  inLanguage: 'pt-BR',
  publisher: { '@id': orgId },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE.url}/blog?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: `${SITE.url}${it.url}`,
  })),
});

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h2', '.faq-answer'],
  },
};

export const blogPostSchema = (post: BlogPost) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: post.title,
  description: post.summary,
  image: post.cover,
  datePublished: post.publishedAt,
  dateModified: post.updatedAt ?? post.publishedAt,
  author: {
    '@type': 'Person',
    name: post.author.name,
    description: post.author.bio,
    jobTitle: post.author.role,
  },
  publisher: { '@id': orgId },
  mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  articleSection: post.category,
  keywords: post.tags.join(', '),
  inLanguage: 'pt-BR',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.post-tldr'],
  },
});

export const teamSchemas = TEAM.map((m) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: m.name,
  jobTitle: m.role,
  description: m.bio,
  image: m.photo,
  knowsAbout: m.knowsAbout,
  worksFor: { '@id': orgId },
}));

export const serviceSchemas = PRODUCTS.map((p) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: p.name,
  description: p.description,
  image: p.image,
  category: p.categoryLabel,
  brand: { '@id': orgId },
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'BRL',
    seller: { '@id': orgId },
    url: `${SITE.url}/produtos/${p.slug}`,
  },
}));
