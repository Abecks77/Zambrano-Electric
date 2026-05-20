import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/home/Hero';
import { BranchCards } from '../components/home/BranchCards';
import { SeoSection } from '../components/home/SeoSection';
import { FaqSection } from '../components/home/FaqSection';
import { ServiceMap } from '../components/home/ServiceMap';
import { HomeContactBooking } from '../components/home/HomeContactBooking';
import { HowWeWork } from '../components/home/HowWeWork';

export const Home = () => {

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": "Zambrano Electric LLC",
    "image": "https://lh3.googleusercontent.com/d/178nfchOeNudYMOx5eA1x-jJRFlTa0h6d",
    "@id": "https://zambranoelectric.com/",
    "url": "https://zambranoelectric.com/",
    "telephone": "(806) 576-7703",
    "email": "jz@zambranoelectric.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3815 N Progressive Rd",
      "addressLocality": "Hereford",
      "addressRegion": "TX",
      "postalCode": "79045",
      "addressCountry": "US"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "07:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59",
        "description": "24/7 Emergency Dispatch Available"
      }
    ],
    "areaServed": ["Hereford, TX", "Amarillo, TX", "Texas Panhandle"],
    "priceRange": "$$"
  };

  return (
    <>
      <Helmet>
        <title>Zambrano Electric LLC | Industrial & Commercial Electricians | Hereford, TX</title>
        <meta name="description" content="Top-rated industrial & commercial electrical contractors serving Hereford, Amarillo, and the Texas Panhandle. We specialize in electrical, underground, and compressed air systems." />
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

