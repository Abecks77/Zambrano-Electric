import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { serviceAreas } from '../lib/content';
import { localBusinessSchema, breadcrumbSchema } from '../lib/schemas';
import { BUSINESS } from '../lib/business';
import { CallButton, CallReassurance } from '../components/ui/CallButton';

export const ServiceAreas = () => (
  <div className="flex-1 w-full relative">
    <Helmet>
      <title>Service Areas | Texas Panhandle Electrician | Zambrano Electric</title>
      <meta name="description" content="Zambrano Electric serves Hereford, Amarillo, Canyon, Plainview & the Texas Panhandle with industrial electrical, underground & compressed air work." />
      <link rel="canonical" href={`${BUSINESS.url}/service-areas`} />
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema([{ name: 'Service Areas', path: '/service-areas' }]))}</script>
    </Helmet>
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
      <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] mb-6">
        Texas Panhandle <span className="text-race-red">Service Areas</span>
      </h1>
      <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-3xl">
        Zambrano Electric is based in Hereford, TX and serves commercial and industrial customers across the Texas Panhandle with industrial electrical, underground utility and compressed air work. Crews are dispatched from Hereford, and our line is answered 24/7 for emergencies. For work outside our 150-mile radius, call {BUSINESS.phoneDisplay}.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        {serviceAreas.map((a) => (
          <Link key={a.slug} to={`/service-areas/${a.slug}`} className="glassmorphism p-6 border border-metal hover:border-race-red transition-colors flex items-center justify-between group">
            <span>
              <span className="flex items-center gap-2 font-black uppercase tracking-wide text-lg"><MapPin className="h-5 w-5 text-race-red" /> {a.city}, TX</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">{a.county}</span>
              <span className="block text-sm text-gray-400 leading-relaxed mt-3 pr-6">{a.intro[0]}</span>
            </span>
            <ArrowRight className="h-5 w-5 text-race-red group-hover:translate-x-1 transition-transform" />
          </Link>
        ))}
      </div>
      <CallButton />
      <CallReassurance className="mt-5" />
    </div>
  </div>
);
