import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = ({ sectionRefs }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isMenuPage = location.pathname === '/menu';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = async (sectionKey) => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }

    if (location.pathname !== '/') {
      await navigate('/');
    }
    
    // Use a timeout to allow the page to change before scrolling
    setTimeout(() => {
      const ref = sectionRefs[sectionKey];
      if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const navItems = ['About', 'Menu', 'Reservations', 'Contact'];

  const mobileMenuVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0, ease: 'linear' }
    },
    exit: { opacity: 0, transition: { duration: 0.2, ease: 'easeIn', delay: 0.3 } },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.1 + i * 0.1 }
    }),
     exit: (i) => ({ 
      opacity: 0, 
      y: -20,
      transition: { delay: i * 0.05 }
    }),
  };
  
  const headerIsScrolled = isScrolled || isMenuPage;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          headerIsScrolled && !isMobileMenuOpen ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="relative z-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={`text-2xl font-light tracking-[0.3em] transition-colors duration-300 ${
                  isMobileMenuOpen ? 'text-[#fff]' : headerIsScrolled ? 'text-[#000]' : 'text-[#fff]'
                }`}
              >
                SAN-LORENZO
              </motion.div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => handleNavClick(item.toLowerCase())}
                  className={`text-sm transition-colors duration-300 ${
                    headerIsScrolled ? 'text-[#000] hover:text-[#333]' : 'text-[#fff] hover:text-muted-foreground'
                  }`}
                >
                  {item}
                </motion.button>
              ))}
            </nav>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-full transition-colors duration-300 relative z-10"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#fff]" />
                ) : (
                  <Menu className={`w-6 h-6 transition-colors duration-300 ${headerIsScrolled ? 'text-[#000]' : 'text-[#fff]'}`} />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex flex-col items-center justify-center md:hidden"
          >
            <motion.nav className="flex flex-col items-center gap-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  custom={index}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={() => handleNavClick(item.toLowerCase())}
                  className="text-3xl font-light text-foreground/80 hover:text-foreground transition-colors duration-300"
                >
                  {item}
                </motion.button>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;