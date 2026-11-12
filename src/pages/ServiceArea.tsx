import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { MapPin, Zap, HardHat, Wind, CheckCircle2 } from 'lucide-react';
import { serviceAreas } from '../lib/content';
import { localBusinessSchema, faqSchema, breadcrumbSchema, BUSINESS_ID } from '../lib/schemas';
import { BUSINESS } from '../lib/business';
import { CallButton, CallReassurance } from '../components/ui/CallButton';
import { FaqList } from '../components/ui/FaqList';
import { NotFound } from './NotFound';

const services = [
  { path: '/branch/electrical', title: 'Commercial & Industrial Electrical', text: 'Power distribution, transformers & switchgear, motor control centers, PLC and automation wiring, hazardous-location wiring.', icon: Zap },
  { path: '/branch/underground', title: 'Underground Systems', text: 'Hydro excavation, trenching, manhole and vault installation, underground electrical fault repair.', icon: HardHat },
  { path: '/branch/compressed-air', title: 'Compressed Air', text: 'Compressor room design and build, air piping, receiver tanks, machinery integration.', icon: Wind },
];

export const ServiceArea = () => {
  const { slug } = useParams<{ slug: string }>();
  const area = serviceAreas.find((a) => a.slug === slug);
  if (!area) return <NotFound />;

  const path = `/service-areas/${area.slug}`;
  const title = `Industrial Electrician in ${area.city}, TX | Zambrano Electric`;

  return (
    <div className="flex-1 w-full relative">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={area.metaDescription} />
        <link rel="canonical" href={`${BUSINESS.url}${path}`} />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: `Commercial & industrial electrical services in ${area.city}, TX`,
            serviceType: 'Electrician',
            provider: { '@id': BUSINESS_ID },
            areaServed: { '@type': 'City', name: `${area.city}, TX` },
            url: `${BUSINESS.url}${path}`,
          })}
        </script>
        <script type="application/ld+json">{JSON.stringify(faqSchema(area.faqs))}</script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema([{ name: 'Service Areas', path: '/service-areas' }, { name: `${area.city}, TX`, path }]))}
        </script>
      </Helmet>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-widest text-gray-500 mb-8">
          <Link to="/" className="hover:text-white">Home</Link> / <Link to="/service-areas" className="hover:text-white">Service Areas</Link> / <span className="text-gray-300">{area.city}, TX</span>
        </nav>

        <p className="flex items-center gap-2 text-race-red text-xs font-black uppercase tracking-[0.3em] mb-4">
          <MapPin className="h-4 w-4" /> {area.city}, TX · {area.county}
        </p>
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] mb-8">
          Commercial &amp; Industrial Electrician in <span className="text-race-red">{area.city}, TX</span>
        </h1>
        {area.intro.map((p) => (
          <p key={p} className="text-gray-300 text-lg leading-relaxed mb-6 max-w-3xl">{p}</p>
        ))}
        <div className="mt-8 mb-16">
          <CallButton label={`Call to Book in ${area.city}`} />
          <CallReassurance className="mt-5" />
        </div>

        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic mb-8">
          Services in <span className="text-race-red">{area.city}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map(({ path: sp, title: st, text, icon: Icon }) => (
            <Link key={sp} to={sp} className="glassmorphism p-6 border border-metal hover:border-race-red transition-colors block">
              <Icon className="h-6 w-6 text-race-red mb-4" />
              <h3 className="font-black uppercase tracking-wide mb-2">{st}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{text}</p>
            </Link>
          ))}
        </div>

        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic mb-6">
          Who We Work With in <span className="text-race-red">{area.city}</span>
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {area.industries.map((i) => (
            <li key={i} className="flex items-center gap-3 text-gray-300">
              <CheckCircle2 className="h-5 w-5 text-race-red flex-shrink-0" /> {i}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic mb-8">
          {area.city} <span className="text-race-red">FAQ</span>
        </h2>
        <FaqList faqs={area.faqs} />

        <div className="glassmorphism p-8 mt-16 text-center border-l-4 border-l-race-red">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-3">Need an electrician in {area.city}?</h2>
          <p className="text-gray-400 mb-6">Call and talk to our team. We’ll schedule a site visit and give you a free, itemized estimate.</p>
          <CallButton />
        </div>

        <p className="mt-12 text-sm text-gray-500">
          Also serving:{' '}
          {serviceAreas.filter((a) => a.slug !== area.slug).map((a, i, arr) => (
            <span key={a.slug}>
              <Link to={`/service-areas/${a.slug}`} className="text-gray-300 hover:text-race-red underline">{a.city}, TX</Link>
              {i < arr.length - 1 ? ', ' : ''}
            </span>
          ))}
          {' '}and the Texas Panhandle.
        </p>
      </div>
    </div>
  );
};
