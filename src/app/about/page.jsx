'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaDatabase,
  FaNodeJs,
} from 'react-icons/fa';

const experiences = [
  {
    title: 'Full Stack Developer',
    period: '2023 - Present',
    description:
      'Built scalable React.js frontend and integrated REST APIs using Node.js & MongoDB.',
    type: 'left',
  },
  {
    title: 'Backend Developer (MERN Stack)',
    company: 'Freelance',
    period: '2022 - 2023',
    description: 'Created RESTful services with Express, designed schemas using Mongoose.',
    type: 'right',
  },
  {
    title: 'React Frontend Developer',
    company: 'Internship',
    period: '2021 - 2022',
    description:
      'Developed responsive UI components, used React hooks, and built reusable components.',
    type: 'left',
  },
];

const AboutPage = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      // Rotate the whole container by scroll amount mod 360 degrees
      const rotate = window.scrollY % 360;
      controls.start({ rotate });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const skills = [
    { icon: <FaHtml5 />, title: 'HTML5', color: 'text-[#E34F26]' },
    { icon: <FaCss3Alt />, title: 'CSS3', color: 'text-[#1572B6]' },
    { icon: <FaJs />, title: 'JavaScript', color: 'text-[#F7DF1E]' },
    { icon: <FaReact />, title: 'React.js', color: 'text-[#61DAFB]' },
    { icon: <FaGithub />, title: 'GitHub', color: 'text-[#181717]' },
    { icon: <FaNodeJs />, title: 'Node.js', color: 'text-[#339933]' },
    { icon: <FaDatabase />, title: 'Database', color: 'text-[#4479A1]' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      animate={controls}
      className="min-h-screen bg-gradient-to-r from-pink-100 via-white to-white px-4 py-12 sm:px-6 md:px-10 lg:px-20"
    >
      {/* Header Section */}
      <motion.section
        className="text-center mb-12 sm:mb-16"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">
          Hi, I'm Raghubabu
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">Frontend Developer (Fresher)</p>
      </motion.section>

      {/* Skills Section */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-10">Skills</h2>

        {/* Mobile View: Icon + Name in Grid */}
        <div className="grid grid-cols-3 gap-4 px-4 sm:hidden">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center bg-white shadow rounded-xl py-4"
              role="img"
              aria-label={skill.title}
            >
              <div className={`text-3xl mb-1 ${skill.color}`}>{skill.icon}</div>
              <p className="text-sm text-gray-700 font-medium">{skill.title}</p>
            </div>
          ))}
        </div>

        {/* Desktop View: Horizontal Scrolling Animation */}
        <motion.div
          className="hidden sm:flex gap-16 text-6xl justify-center overflow-hidden"
          style={{ whiteSpace: 'nowrap' }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
          aria-label="Scrolling skills icons"
        >
          {[...skills, ...skills].map((skill, idx) => (
            <div
              key={`${skill.title}-${idx}`}
              className={`inline-block p-6 rounded-full cursor-default select-none ${skill.color}`}
              style={{ minWidth: '120px' }}
              title={skill.title}
              role="img"
              aria-label={skill.title}
            >
              {skill.icon}
            </div>
          ))}
        </motion.div>
      </section>

      {/* Experience Timeline Section */}
      <section className="mb-16 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-10 sm:mb-12">
          Experience Timeline
        </h2>

        <div className="relative max-w-full md:max-w-3xl mx-auto px-2 sm:px-6">
          {/* Center Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 to-blue-500 z-0 rounded-full hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-10 md:mb-16 flex flex-col md:flex-row items-center"
            >
              {/* Circle Dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-pink-500 rounded-full z-10" />

              {/* Timeline Card */}
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:ml-auto md:text-left md:pl-8' : 'md:mr-auto md:text-right md:pr-8'
                }`}
                role="region"
                aria-labelledby={`exp-title-${index}`}
              >
                <div className="bg-white/70 backdrop-blur-md shadow-xl border border-gray-200 p-4 sm:p-6 rounded-xl sm:rounded-2xl">
                  <h3
                    id={`exp-title-${index}`}
                    className="text-lg sm:text-xl font-bold text-gray-800"
                  >
                    {exp.title}
                  </h3>
                  {exp.company && (
                    <p className="text-sm text-gray-600 italic">{exp.company}</p>
                  )}
                  <p className="text-sm text-blue-600 mt-1">{exp.period}</p>
                  <p className="text-sm text-gray-700 mt-2">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
