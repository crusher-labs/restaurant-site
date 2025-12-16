import React, { useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '@/pages/Home';
import MenuPage from '@/pages/MenuPage';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const aboutRef = useRef(null);
  const menuRef = useRef(null);
  const reservationsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    about: aboutRef,
    menu: menuRef,
    reservations: reservationsRef,
    contact: contactRef,
  };

  return (
    <>
      <Header sectionRefs={sectionRefs} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home refs={sectionRefs} />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </AnimatePresence>
      {isHomePage && <Footer ref={contactRef} />}
      <Toaster />
    </>
  );
}

export default App;