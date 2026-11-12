import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Zap, HardHat, Wind, ClipboardCheck } from 'lucide-react';
import { localBusinessSchema, breadcrumbSchema, BUSINESS_ID } from '../lib/schemas';
import { BUSINESS } from '../lib/business';
import { CallButton, CallReassurance } from '../components/ui/CallButton';

const process = [
  ['Site Assessment', 'A project manager visits your facility, reviews conditions and gathers exact specifications.'],
  ['Itemized Bid', 'You get a transparent, itemized bid covering labor, materials and timeline — free.'],
  ['Installation or Repair', 'Our crews complete the work following OSHA safety requirements.'],
  ['Testing & Turnover', 'Systems are tested before sign-off and handed over to your team.'],
];

export const About = () => (
  <div className="flex-1 w-full relative">
    <Helmet>
      <title>About Zambrano Electric | Hereford, TX Electrical Contractor</title>
      <meta name="description" content="Licensed & insured commercial and industrial electrical contractor in Hereford, TX, serving Amarillo and the Texas Panhandle. Call (806) 576-7703." />
      <link rel="canonical" href={`${BUSINESS.url}/about`} />
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <script type="application/ld+json">
        {JSON.stringify({ '@context': 'https://schema.org', '@type': 'AboutPage', url: `${BUSINESS.url}/about`, about: { '@id': BUSINESS_ID } })}
      </script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema([{ name: 'About', path: '/about' }]))}</script>
    </Helmet>
    <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
      <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] mb-8">
        About <span className="text-race-red">Zambrano Electric</span>
      </h1>
      <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-3xl">
        Zambrano Electric LLC is a commercial and industrial electrical contractor headquartered at {BUSINESS.street} in {BUSINESS.city}, Texas. We serve manufacturing plants, processing facilities, agricultural operations and commercial buildings across Amarillo, Canyon, Plainview and the wider Texas Panhandle.
      </p>
      <p className="text-gray-400 leading-relaxed mb-10 max-w-3xl">
        The company works in three divisions, so one contractor can cover the power, the ground work and the air system on the same project. We are licensed and insured, follow OSHA safety requirements and maintain ISNetworld compliance for work at facilities that require it.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          ['/branch/electrical', 'Electrical', 'Switchgear, transformers, MCCs, PLC controls, hazardous-location wiring and 24/7 emergency repair.', Zap],
          ['/branch/underground', 'Underground', 'Hydro excavation, trenching, manholes and vaults, underground fault repair.', HardHat],
          ['/branch/compressed-air', 'Compressed Air', 'Compressor rooms, distribution piping, receiver tanks, machinery integration.', Wind],
        ].map(([to, title, text, Icon]: any) => (
          <Link key={to} to={to} className="glassmorphism p-6 border border-metal hover:border-race-red transition-colors block">
            <Icon className="h-6 w-6 text-race-red mb-4" />
            <h2 className="font-black uppercase tracking-wide mb-2">{title}</h2>
            <p className="text-sm text-gray-400 leading-relaxed">{text}</p>
          </Link>
        ))}
      </div>

      <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic mb-8 flex items-center gap-3">
        <ClipboardCheck className="h-7 w-7 text-race-red" /> How a Project Works
      </h2>
      <ol className="space-y-4 mb-16">
        {process.map(([title, text], i) => (
          <li key={title} className="glassmorphism p-6 flex gap-5">
            <span className="text-race-red font-black text-2xl">0{i + 1}</span>
            <span><strong className="block uppercase tracking-wide text-white mb-1">{title}</strong><span className="text-sm text-gray-400">{text}</span></span>
          </li>
        ))}
      </ol>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16 text-sm text-gray-300">
        <p className="flex items-start gap-3"><ShieldCheck className="h-5 w-5 text-race-red flex-shrink-0" /> Licensed &amp; insured · OSHA safety requirements · ISNetworld compliant</p>
        <p className="flex items-start gap-3"><MapPin className="h-5 w-5 text-race-red flex-shrink-0" /> {BUSINESS.street}, {BUSINESS.city}, {BUSINESS.region} {BUSINESS.postalCode} · <Link to="/service-areas" className="underline hover:text-race-red">Service areas</Link></p>
      </div>

      <CallButton />
      <CallReassurance className="mt-5" />
    </div>
  </div>
);
