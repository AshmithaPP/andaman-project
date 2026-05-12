'use client';

import React from 'react';
import ServiceDetailHero from '@/components/services/details/ServiceDetailHero';
import ServiceDetailInfo from '@/components/services/details/ServiceDetailInfo';
import ServiceReviews from '@/components/services/details/ServiceReviews';
import FeedbackForm from '@/components/services/details/FeedbackForm';
import RelatedAds from '@/components/services/details/RelatedAds';

const ServiceDetailPage = () => {
  return (
    <main style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <ServiceDetailHero />
      <ServiceDetailInfo />
      <ServiceReviews />
      <FeedbackForm />
      <RelatedAds />
    </main>
  );
};

export default ServiceDetailPage;
