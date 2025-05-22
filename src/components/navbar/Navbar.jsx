'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaGithub, FaInstagram, FaFacebook, FaPinterest, FaLinkedin,
} from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = ['Home', 'About', 'Portfolio', 'Contact'];

const socialLinks = {
  github: 'https://github.com/BaddiRaghuBabu',
  instagram: 'https://instagram.com/baddiraghubabu',
  facebook: 'https://facebook.com/baddiraghubabu',
  pinterest: 'https://pinterest.com',
  linkedin: 'https://www.linkedin.com/in/baddi-raghubabu',
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const handleLinkClick = () => setIsOpen(false);

  // 👇 useCallback to satisfy useEffect dependency
  const controlNavbar = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
      return () => {
        window.removeEventListener('scroll', controlNavbar);
        document.body.style.overflow = 'auto';
      };
    }
  }, [isOpen, controlNavbar]);

  const hoverEffect = {
    whileHover: { scale: 1.1, color: '#111', transition: { duration: 0.3 } },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { when: 'beforeChildren', staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -110 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="w-full bg-white shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="font-bold border-2 border-black px-3 py-1 rounded bg-black text-white cursor-pointer select-none"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Raghu<span className="bg-white ml-1 text-black px-1 rounded">Babu</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map(link => (
            <motion.div
              key={link}
              className="relative cursor-pointer"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <Link
                href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                className="relative inline-block"
                onClick={handleLinkClick}
              >
                {link}
                <motion.span
                  className="absolute left-0 -bottom-1 h-[2px] bg-black origin-left"
                  variants={{
                    rest: { scaleX: 0 },
                    hover: { scaleX: 1 },
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  style={{ width: '100%' }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex gap-6 text-lg text-gray-600">
          {Object.entries(socialLinks).map(([name, url]) => (
            <motion.a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              {...hoverEffect}
              className="cursor-pointer"
            >
              {name === 'github' && <FaGithub />}
              {name === 'instagram' && <FaInstagram />}
              {name === 'facebook' && <FaFacebook />}
              {name === 'linkedin' && <FaLinkedin />}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-gray-600 z-50 relative focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="fixed inset-0 bg-black bg-opacity-95 text-white z-40 flex flex-col items-center justify-center"
          >
            {/* Animated Links */}
            <motion.ul className="space-y-8 text-3xl font-semibold text-center">
              {navLinks.map(text => (
                <motion.li
                  key={text}
                  variants={mobileItemVariants}
                  className="cursor-pointer"
                  onClick={handleLinkClick}
                >
                  <Link href={text === 'Home' ? '/' : `/${text.toLowerCase()}`}>
                    {text}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            {/* Animated Social Icons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="flex gap-8 pt-20 text-4xl text-gray-300"
            >
              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: 'white' }}
                className="cursor-pointer"
                aria-label="GitHub"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: 'white' }}
                className="cursor-pointer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: 'white' }}
                className="cursor-pointer"
                aria-label="Facebook"
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                href={socialLinks.pinterest}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: 'white' }}
                className="cursor-pointer"
                aria-label="Pinterest"
              >
                <FaPinterest />
              </motion.a>
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: 'white' }}
                className="cursor-pointer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
