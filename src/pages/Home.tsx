import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/home/Hero';
import { BranchCards } from '../components/home/BranchCards';
import { SeoSection } from '../components/home/SeoSection';
import { FaqSection } from '../components/home/FaqSection';
import { ServiceMap } from '../components/home/ServiceMap';
import { HomeContactBooking } from '../components/home/HomeContactBooking';
import { HowWeWork } from '../components/home/HowWeWork';
import { localBusinessSchema, faqSchema } from '../lib/schemas';
import { homeFaqs } from '../lib/content';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Commercial & Industrial Electrician Hereford & Amarillo TX</title>
        <meta name="description" content="Commercial & industrial electrician in Hereford & Amarillo, TX: plant electrical, underground utilities & compressed air. Free estimates. Call (806) 576-7703." />
        <link rel="canonical" href="https://zambranoelectric.com/" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Zambrano Electric LLC',
            url: 'https://zambranoelectric.com/',
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema(homeFaqs))}
        </script>
      </Helmet>
      <Hero />
      <ServiceMap />
      <SeoSection />
      <BranchCards />
      <HowWeWork />
      <FaqSection />
      <HomeContactBooking />
    </>
  );
};

