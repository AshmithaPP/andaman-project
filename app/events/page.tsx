import React from 'react';
import EventsHero from '@/components/events/EventsHero';
import LocalEvents from '@/components/events/LocalEvents';
import EventsAd from '@/components/events/EventsAd';
import SpecialEvents from '@/components/events/SpecialEvents';
import ExoticEvents from '@/components/events/ExoticEvents';
import EventGallery from '@/components/events/EventGallery';
import SportsEvents from '@/components/events/SportsEvents';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Events - Andaman Explore',
  description: 'Explore and enjoy events across Andaman.',
};

const EventsPage = () => {
  return (
    <main>
      <EventsHero />
      <SpecialEvents />
      <EventsAd />
      <ExoticEvents />
      <EventGallery />
        <LocalEvents />
      <SportsEvents />

    </main>
  );
};

export default EventsPage;
