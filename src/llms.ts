// Builds /llms.txt — a plain-markdown summary of the business for AI assistants
// (ChatGPT, Claude, Perplexity, Grok, etc.). Generated from the same data as
// the pages so it never drifts from the site.
import { BUSINESS } from './lib/business';
import { branchSeo } from './lib/branchSeo';
import { bookingFaqs, serviceAreas } from './lib/content';

export function buildLlmsTxt(): string {
  const u = BUSINESS.url;
  const lines = [
    `# ${BUSINESS.name}`,
    '',
    `> Commercial and industrial electrical contractor based in ${BUSINESS.city}, Texas, serving Amarillo, Canyon, Plainview and the Texas Panhandle. Three divisions: industrial/commercial electrical, underground systems (hydro excavation, trenching, fault repair) and industrial compressed air systems. To book an appointment or get a free estimate, call ${BUSINESS.phoneDisplay}.`,
    '',
    '## Contact & booking',
    '',
    `- Phone (booking, estimates, 24/7 emergency line): ${BUSINESS.phoneDisplay}`,
    `- Email: ${BUSINESS.email}`,
    `- Address: ${BUSINESS.street}, ${BUSINESS.city}, ${BUSINESS.region} ${BUSINESS.postalCode}`,
    `- Office hours: Monday–Friday, 8 AM – 5 PM (Central). Emergency line answered 24/7.`,
    '- Estimates: free, itemized bids for commercial and industrial projects.',
    `- Service area: ${serviceAreas.map((a) => `${a.city}, TX`).join('; ')}; Texas Panhandle (150-mile radius from Hereford; call for emergency work beyond that).`,
    '',
    '## Services',
    '',
    `- [Commercial & Industrial Electrical](${u}/branch/electrical): high-voltage distribution, transformers and switchgear, motor control centers (MCC), industrial automation and PLC wiring, hazardous-location wiring, 24/7 emergency maintenance.`,
    `- [Underground Systems](${u}/branch/underground): hydro excavation, trenching, manhole/vault installation, underground electrical fault repair.`,
    `- [Compressed Air](${u}/branch/compressed-air): compressor room design and build, compressed air piping, receiver tanks, machinery pneumatic integration.`,
    '',
    '## Service areas',
    '',
    ...serviceAreas.map((a) => `- [${a.city}, TX](${u}/service-areas/${a.slug}): ${a.metaDescription}`),
    '',
    '## Frequently asked questions',
    '',
    ...[...bookingFaqs, ...Object.values(branchSeo).flatMap((b) => b.faqs)].flatMap((f) => [`### ${f.question}`, '', f.answer, '']),
    '## Key pages',
    '',
    `- [Home](${u}/)`,
    `- [About](${u}/about)`,
    `- [FAQ](${u}/faq)`,
    `- [Schedule service](${u}/schedule)`,
    `- [Contact](${u}/contact)`,
    `- [Service areas](${u}/service-areas)`,
    '',
  ];
  return lines.join('\n');
}
