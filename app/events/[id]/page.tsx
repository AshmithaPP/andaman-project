import React from 'react';
import EventDetails from '@/components/events/EventDetails';

export default function Page({ params }: { params: { id: string } }) {
  return <EventDetails id={params.id} />;
}
