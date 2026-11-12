import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { allServiceFaqs } from '../lib/content';
import { localBusinessSchema, faqSchema, breadcrumbSchema } from '../lib/schemas';
import { BUSINESS } from '../lib/business';
import { CallButton, CallReassurance } from '../components/ui/CallButton';
import { FaqList } from '../components/ui/FaqList';

export const Faq = () => {
  const groups = allServiceFaqs();
  return (
    <div className="flex-1 w-full relative">
      <Helmet>
        <title>Electrician FAQ: Booking, Estimates & Services | Zambrano</title>
        <meta name="description" content="Answers on booking, free estimates, service areas, emergency service, hydro excavation and compressed air from Zambrano Electric, Hereford TX." />
        <link rel="canonical" href={`${BUSINESS.url}/faq`} />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema(groups.flatMap((g) => g.faqs)))}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema([{ name: 'FAQ', path: '/faq' }]))}</script>
      </Helmet>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] mb-6">
          Frequently Asked <span className="text-race-red">Questions</span>
        </h1>
        <p className="text-gray-300 text-lg mb-8">Don’t see your question? Call us — we’re happy to talk through your project.</p>
        <div className="mb-16"><CallButton /><CallReassurance className="mt-5" /></div>
        {groups.map((g) => (
          <section key={g.group} className="mb-14">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tighter italic mb-6">
              <Link to={g.path} className="hover:text-race-red">{g.group}</Link>
            </h2>
            <FaqList faqs={g.faqs} />
          </section>
        ))}
      </div>
    </div>
  );
};
