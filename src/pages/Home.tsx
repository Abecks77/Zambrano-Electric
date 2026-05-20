import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/home/Hero';
import { BranchCards } from '../components/home/BranchCards';
import { SeoSection } from '../components/home/SeoSection';
import { FaqSection } from '../components/home/FaqSection';
import { ServiceMap } from '../components/home/ServiceMap';
import { HomeContactBooking } from '../components/home/HomeContactBooking';
import { HowWeWork } from '../components/home/HowWeWork';
import { localBusinessSchema } from '../lib/schemas';

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Zambrano Electric LLC | Commercial & Industrial Electrician | Hereford & Amarillo TX</title>
        <meta name="description" content="Top-rated commercial and industrial electrician serving Hereford, Amarillo, and the Texas Panhandle. Zambrano Electric LLC specializes in electrical contracting, underground systems, and compressed air installations. Call for a free estimate." />
        <link rel="canonical" href="https://zambranoelectric.com/" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
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

