import React from 'react';
import { Hero } from '../components/home/Hero';
import { BranchCards } from '../components/home/BranchCards';
import { SeoSection } from '../components/home/SeoSection';
import { FaqSection } from '../components/home/FaqSection';
import { ServiceMap } from '../components/home/ServiceMap';
import { HomeContactBooking } from '../components/home/HomeContactBooking';
import { HowWeWork } from '../components/home/HowWeWork';

export const Home = () => {

  return (
    <>
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

