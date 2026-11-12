import { BUSINESS } from './business';
import type { Faq } from './branchSeo';

export const BUSINESS_ID = `${BUSINESS.url}/#business`;

// Primary entity for Google + AI search engines. Referenced by @id from other
// schema blocks so every page points at the same business.
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Electrician',
  '@id': BUSINESS_ID,
  name: BUSINESS.name,
  url: BUSINESS.url,
  logo: BUSINESS.logo,
  image: BUSINESS.ogImage,
  telephone: BUSINESS.phoneE164,
  email: BUSINESS.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.street,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.region,
    postalCode: BUSINESS.postalCode,
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Hereford, TX' },
    { '@type': 'City', name: 'Amarillo, TX' },
    { '@type': 'City', name: 'Canyon, TX' },
    { '@type': 'City', name: 'Plainview, TX' },
    { '@type': 'AdministrativeArea', name: 'Texas Panhandle' },
  ],
  description:
    'Commercial and industrial electrical contractor based in Hereford, TX, serving Amarillo and the Texas Panhandle. Industrial electrical systems, underground utilities and hydro excavation, and compressed air system installation. 24/7 emergency line.',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  priceRange: '$$',
  knowsAbout: [
    'Industrial electrical contracting',
    'Commercial electrical contracting',
    'Switchgear and transformers',
    'Motor control centers',
    'PLC and industrial automation wiring',
    'Hazardous location wiring',
    'Hydro excavation',
    'Underground electrical fault repair',
    'Compressed air piping and systems',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Electrical, Underground and Compressed Air Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial & Industrial Electrical', url: `${BUSINESS.url}/branch/electrical` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Underground Systems & Hydro Excavation', url: `${BUSINESS.url}/branch/underground` } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Industrial Compressed Air Systems', url: `${BUSINESS.url}/branch/compressed-air` } },
    ],
  },
};

export const faqSchema = (faqs: Faq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...items].map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: `${BUSINESS.url}${item.path === '/' ? '/' : item.path}`,
  })),
});
