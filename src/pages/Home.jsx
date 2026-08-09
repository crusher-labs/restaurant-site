import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import MenuPreview from '@/components/MenuPreview';
import ReservationSection from '@/components/ReservationSection';
import ContactSection from '@/components/ContactSection';

const Home = ({ refs }) => {
  return (
    <>
      <Helmet>
        <title>San Lorenzo - Fine Dining Experience</title>
        <meta name="description" content="Experience exceptional cuisine at San Lorenzo. Reserve your table today for an unforgettable dining experience." />
      </Helmet>
      <Hero />
      <AboutSection ref={refs.about} />
      <MenuPreview ref={refs.menu} />
      <ReservationSection ref={refs.reservations} />
      <ContactSection ref={refs.contact} />
    </>
  );
};

export default Home;