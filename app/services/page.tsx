import React from 'react';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesLookingFor from '@/components/services/ServicesLookingFor';
import ServicesProvider from '@/components/services/ServicesProvider';
import ServicesVerticalAds from '@/components/services/ServicesVerticalAds';
import ServicesMostBooked from '@/components/services/ServicesMostBooked';
import ServicesHorizontalAds from '@/components/services/ServicesHorizontalAds';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Andaman',
  description: 'Find the best professional services in Andaman.',
};

const ServicesPage = () => {
  return (
    <main>
      <ServicesHero />
      <ServicesLookingFor />
      <ServicesProvider />
      <ServicesVerticalAds />
      <ServicesMostBooked />
      <ServicesHorizontalAds />
      {/* Add more service sections here */}
    </main>
  );
};

export default ServicesPage;
