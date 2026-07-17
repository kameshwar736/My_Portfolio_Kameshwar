import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About me', href: '#about', id: 'about' },
  { name: 'Project', href: '#project', id: 'project' },
  { name: 'Connect', href: '#connect', id: 'connect' },
];

const sectionIds = navLinks.map((link) => link.id);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPos) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  const linkClass = (id) =>
    activeSection === id
      ? 'text-[#F96D00] font-semibold'
      : 'text-gray-400 hover:text-white';

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`
          fixed w-full z-50 px-4 sm:px-6 lg:px-15
          transition-all duration-500 ease-in-out
          ${isScrolled
            ? 'py-3 bg-[rgb(18_18_18)]/90 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)]'
            : 'py-5 bg-[rgb(18_18_18)]/80 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
          }
          border-b border-white/5
        `}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.a
            href="#home"
            className='border-l-2 border-[rgb(237_36_25)] pl-4 cursor-pointer'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleLinkClick('home')}
          >
            <motion.p
              className='text-[rgb(227,143,17)] text-lg font-bold tracking-wider font-sans'
              whileHover={{ color: '#F96D00' }}
              transition={{ duration: 0.3 }}
            >
              Kamesh
            </motion.p>
            <p className='text-[rgb(233,118,42)] text-2xl font-bold tracking-wide font-sans'>
              Portfolio
            </p>
          </motion.a>

          {/* Desktop Navigation */}
          <div className='hidden md:flex text-lg font-medium items-center gap-2 lg:gap-3'>
            {navLinks.map((link) => (
              <motion.a
                key={link.id}
                href={link.href}
                className={`relative px-3 lg:px-4 py-2 rounded-lg transition-colors duration-300 ${linkClass(link.id)}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleLinkClick(link.id)}
              >
                {activeSection === link.id && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-lg bg-[#F96D00]/10 border border-[#F96D00]/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
                {activeSection === link.id && (
                  <motion.span
                    layoutId="nav-active-underline"
                    className="absolute -bottom-0.5 left-3 right-3 lg:left-4 lg:right-4 h-0.5 bg-gradient-to-r from-[#F96D00] to-[rgb(237_36_25)] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          <motion.a
            href='#connect'
            className={`hidden md:inline-block px-6 py-2.5 rounded-lg font-medium tracking-wide transition-all duration-300 ease-in-out hover:scale-105 ${
              activeSection === 'connect'
                ? 'bg-gradient-to-r from-[rgb(249_109_0)] to-[rgb(237_36_25)] text-white shadow-[0_0_25px_rgba(249,109,0,0.5)] ring-2 ring-[#F96D00]/40'
                : 'bg-gradient-to-r from-[rgb(249_109_0)] to-[rgb(237_36_25)] text-white shadow-[0_0_15px_rgba(249,109,0,0.2)] hover:shadow-[0_0_25px_rgba(249,109,0,0.5)]'
            }`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleLinkClick('connect')}
          >
            Contact
          </motion.a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='md:hidden text-gray-400 hover:text-white transition-colors duration-300 p-2'
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className='fixed top-[72px] left-0 w-full z-40 bg-[rgb(18_18_18)]/95 backdrop-blur-xl
              border-b border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.5)] md:hidden overflow-hidden'
          >
            <div className='flex flex-col items-stretch py-6 px-4 space-y-2'>
              {navLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  className={`relative text-lg font-medium px-4 py-3 rounded-xl transition-colors duration-300 ${linkClass(link.id)} ${
                    activeSection === link.id
                      ? 'bg-[#F96D00]/10 border border-[#F96D00]/20'
                      : 'border border-transparent'
                  }`}
                  whileHover={{ scale: 1.02, x: 4 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleLinkClick(link.id)}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-[#F96D00] to-[rgb(237_36_25)] rounded-full" />
                  )}
                </motion.a>
              ))}
              <motion.a
                href='#connect'
                className='bg-gradient-to-r from-[rgb(249_109_0)] to-[rgb(237_36_25)]
                  px-8 py-3 rounded-lg text-white font-medium tracking-wide w-full text-center mt-2
                  transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(249,109,0,0.5)]
                '
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleLinkClick('connect')}
              >
                Contact
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
