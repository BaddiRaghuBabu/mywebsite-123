"use client";

import React, { useEffect } from 'react';
import {
  FaCode, FaPaintBrush, FaFilm, FaChartLine, FaUserTie,
  FaFileAlt, FaCreditCard, FaTools, FaCalendarAlt, FaThLarge
} from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const tags = [
  { icon: <FaCode />, label: "Developer" },
  { icon: <FaPaintBrush />, label: "Illustrator" },
  { icon: <FaFilm />, label: "Animator" },
  { icon: <FaThLarge />, label: "30+ Demos" },
  { icon: <FaChartLine />, label: "Trending" },
  { icon: <FaUserTie />, label: "Consultant" },
  { icon: <FaFileAlt />, label: "CV" },
  { icon: <FaCreditCard />, label: "Card" },
  { icon: <FaTools />, label: "Service" },
  { icon: <FaCalendarAlt />, label: "Appointment" },
];

const Homepage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const fadeSlideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  const fadeSlideLeft = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const fadeSlideRight = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white text-black overflow-x-hidden">

      {/* Hero Section */}
      <motion.div
        ref={ref}
        className="flex flex-col-reverse lg:flex-row items-center gap-10 px-6 md:px-10 max-w-7xl mx-auto py-24"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Text Content */}
        <motion.div
          className="text-center lg:text-left max-w-xl"
          variants={fadeSlideLeft}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Hi, I’m Raghubabu — <br className="hidden md:inline" /> Frontend Developer & Tech Enthusiast
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Passionate about building modern, responsive web applications using React.js, JavaScript, and backend technologies.
            With hands-on internship experience and a strong academic background in Computer Engineering, I’m looking for
            opportunities to contribute to innovative tech teams and grow as a full-stack developer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition">
              View Resume
            </button>
            <button className="px-6 py-3 bg-gray-200 text-black rounded-md hover:bg-gray-300 transition">
              Connect on LinkedIn
            </button>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.img
          src="/landingPageImage.png"
          alt="Raghubabu Developer"
          className="w-[220px] sm:w-[280px] md:w-[320px] lg:w-[400px] rounded-full shadow-2xl"
          variants={fadeSlideRight}
        />
      </motion.div>

      {/* Tags Section */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 px-6 max-w-5xl mx-auto mb-20"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {tags.map((tag, index) => (
          <motion.div
            key={index}
            variants={fadeSlideUp}
            whileHover={{ scale: 1.1, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-pink-400 px-5 py-2 rounded-xl flex items-center gap-2 text-lg shadow-lg transition-all duration-300"
          >
            {tag.icon}
            <span>{tag.label}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Highlight Text */}
      <motion.div
        className="text-center mb-24"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p className="text-3xl font-semibold mt-3">Pre-Built Creative</p>
        <p className="text-xl text-gray-600">Personal Demos</p>
      </motion.div>
    </div>
  );
};

export default Homepage;
