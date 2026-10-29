import { site } from './site';
import { servicos } from './servicos';

export interface Faq {
  q: string;
  a: string;
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${site.url}/#empresa`,
    name: site.name,
    url: site.url,
    image: `${site.url}/og.jpg`,
    telephone: '+5562982038597',
    description: site.description,
    // Sem loja física informada: só a cidade, sem endereço completo
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.city,
      addressRegion: site.state,
      addressCountry: 'BR',
    },
    areaServed: { '@type': 'City', name: `${site.city} - ${site.state}` },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de marcenaria',
      itemListElement: servicos.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.nome, description: s.resumo },
      })),
    },
  };
}

export function faqSchema(faq: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
