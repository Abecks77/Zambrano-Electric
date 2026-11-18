// Shared site copy used by pages, structured data and llms.txt.
// Only state facts the business already publishes (services, area, hours).
import type { Faq } from './branchSeo';
import { branchSeo } from './branchSeo';

// Homepage FAQ (original site copy, kept as-is).
export const homeFaqs: Faq[] = [
  {
    question: 'Do you offer 24/7 emergency electrical services?',
    answer:
      "Yes. Critical infrastructure doesn't sleep, and neither do we. We provide round-the-clock emergency response for industrial equipment failures, power outages, and critical system faults across the Texas Panhandle.",
  },
  {
    question: 'What is your primary service area?',
    answer:
      'Headquartered in Hereford, TX, we serve commercial and industrial customers across the Texas Panhandle — including Amarillo, Canyon and Plainview — and the surrounding industrial and agricultural hubs.',
  },
  {
    question: 'What types of industrial facilities do you specialize in?',
    answer:
      'Our expertise is focused on heavy-duty environments. This includes manufacturing plants, processing facilities, oil & gas operations, agricultural processing plants, and large-scale commercial warehousing.',
  },
  {
    question: 'Can you handle high-voltage underground installations?',
    answer:
      'Absolutely. Our dedicated Underground Systems division utilizes non-destructive hydro excavation and precision directional drilling to securely install subterranean conduit and high-voltage distribution lines without disrupting existing utilities.',
  },
  {
    question: 'How do you handle project bidding and estimates?',
    answer:
      'Transparency is key. We provide comprehensive, itemized bids for all commercial and industrial projects, ensuring complete clarity on materials, labor, and timelines before work begins.',
  },
  {
    question: 'What safety certifications do your crews hold?',
    answer:
      'Safety comes first on every job. Our crews follow OSHA standards, we maintain ISNetworld compliance for facilities that require it, and Zambrano Electric is a licensed Texas electrical contractor (TDLR License #36699).',
  },
];

// Booking / general questions people (and AI assistants) ask most.
export const bookingFaqs: Faq[] = [
  {
    question: 'How do I book an appointment with Zambrano Electric?',
    answer:
      'Call (806) 576-7703. The office is open Monday–Friday, 8 AM to 5 PM, and the line is answered 24/7 for emergencies. You can also request a call back through the form on zambranoelectric.com.',
  },
  {
    question: 'Are estimates free?',
    answer:
      'Yes. Zambrano Electric provides free, itemized estimates for commercial and industrial projects. Call (806) 576-7703 to set up a site visit.',
  },
  {
    question: 'Which cities does Zambrano Electric serve?',
    answer:
      'Zambrano Electric is based in Hereford, TX and serves Amarillo, Canyon, Plainview and the wider Texas Panhandle. For emergency work outside a 150-mile radius, call (806) 576-7703.',
  },
  {
    question: 'Is Zambrano Electric licensed and insured?',
    answer:
      'Yes. Zambrano Electric LLC holds Texas Electrical Contractor License #36699, issued by the Texas Department of Licensing and Regulation (TDLR), and is insured. You can verify the license at tdlr.texas.gov.',
  },
];

export const allServiceFaqs = (): { group: string; path: string; faqs: Faq[] }[] => [
  { group: 'Booking & General', path: '/contact', faqs: bookingFaqs },
  { group: 'Commercial & Industrial Electrical', path: '/branch/electrical', faqs: branchSeo.electrical.faqs },
  { group: 'Underground & Hydro Excavation', path: '/branch/underground', faqs: branchSeo.underground.faqs },
  { group: 'Compressed Air Systems', path: '/branch/compressed-air', faqs: branchSeo['compressed-air'].faqs },
  { group: 'About Our Work', path: '/about', faqs: homeFaqs },
];

export interface ServiceArea {
  slug: string;
  city: string;
  county: string;
  metaDescription: string;
  intro: string[];
  industries: string[];
  faqs: Faq[];
}

const areaFaqs = (city: string): Faq[] => [
  {
    question: `Does Zambrano Electric serve ${city}, TX?`,
    answer: `Yes. Zambrano Electric provides commercial and industrial electrical, underground and compressed air services in ${city} and across the Texas Panhandle from our base in Hereford.`,
  },
  {
    question: `Is emergency electrical service available in ${city}?`,
    answer: `Yes. Our line at (806) 576-7703 is answered 24/7 for equipment failures, outages and other critical electrical problems in ${city}.`,
  },
  {
    question: `How do I get an estimate in ${city}?`,
    answer: `Call (806) 576-7703 to describe your project. We’ll schedule a site visit in ${city} and provide a free, itemized estimate.`,
  },
];

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'hereford-tx',
    city: 'Hereford',
    county: 'Deaf Smith County',
    metaDescription:
      'Local commercial & industrial electrician in Hereford, TX for plant electrical, underground utilities & compressed air. 24/7 line: (806) 576-7703.',
    intro: [
      'Hereford is home base for Zambrano Electric. Our shop is at 3815 N Progressive Rd, so local plants, feedyards and commercial buildings get crews that are already in town.',
      'Hereford’s economy runs on agriculture — cattle feeding, dairies, grain handling and ag processing — and those operations depend on reliable power, motors and controls. We install, upgrade and repair the electrical, underground and compressed air systems that keep them running.',
    ],
    industries: ['Cattle feedyards and dairies', 'Grain handling and ag processing', 'Manufacturing and processing plants', 'Commercial buildings and shops'],
    faqs: areaFaqs('Hereford'),
  },
  {
    slug: 'amarillo-tx',
    city: 'Amarillo',
    county: 'Potter and Randall Counties',
    metaDescription:
      'Industrial & commercial electrician serving Amarillo, TX: switchgear, MCCs, PLC controls, hydro excavation, compressed air. Call (806) 576-7703.',
    intro: [
      'Amarillo is the largest city in the Texas Panhandle and the hub for the region’s manufacturing, food processing, distribution and commercial construction. Zambrano Electric serves Amarillo facilities from our base in Hereford.',
      'For Amarillo plants and commercial properties we handle power distribution, transformers and switchgear, motor control centers, PLC and automation wiring, underground conduit and hydro excavation, and compressed air piping — with a 24/7 line for breakdowns.',
    ],
    industries: ['Manufacturing and food processing', 'Warehousing and distribution', 'Commercial construction and buildings', 'Industrial maintenance and shutdowns'],
    faqs: areaFaqs('Amarillo'),
  },
  {
    slug: 'canyon-tx',
    city: 'Canyon',
    county: 'Randall County',
    metaDescription:
      'Commercial electrical contractor serving Canyon, TX: service upgrades, underground utilities & compressed air. Free estimates: (806) 576-7703.',
    intro: [
      'Canyon, the Randall County seat and home of West Texas A&M University, sits between Hereford and Amarillo on Zambrano Electric’s regular service route.',
      'We work with Canyon businesses, agricultural operations and commercial property owners on electrical service upgrades, new equipment power, underground conduit and utility work, and compressed air installations.',
    ],
    industries: ['Commercial and retail buildings', 'Agricultural operations', 'Shops and light industrial facilities', 'Property owners and general contractors'],
    faqs: areaFaqs('Canyon'),
  },
  {
    slug: 'plainview-tx',
    city: 'Plainview',
    county: 'Hale County',
    metaDescription:
      'Industrial electrician serving Plainview, TX: plant electrical, hydro excavation & compressed air systems. 24/7 emergency line: (806) 576-7703.',
    intro: [
      'Plainview, the Hale County seat on I-27 between Amarillo and Lubbock, is an agricultural and processing center for the South Plains. Zambrano Electric brings industrial electrical, underground and compressed air crews to Plainview facilities.',
      'Typical Plainview work includes power for processing and grain equipment, motor controls, underground conduit and fault repair, and compressed air piping — plus 24/7 response when critical equipment fails.',
    ],
    industries: ['Agricultural and food processing', 'Grain handling facilities', 'Industrial and manufacturing plants', 'Commercial buildings'],
    faqs: areaFaqs('Plainview'),
  },
];
