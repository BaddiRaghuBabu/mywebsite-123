"use client";

import React from "react";
import {
  FaArrowDown,
  FaMobileAlt,
  FaLaptopCode,
  FaRocket,
  FaUserShield,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaMobileAlt />,
    title: "Fully Responsive",
    desc: "Optimized for mobile, tablet, and desktop",
  },
  {
    icon: <FaLaptopCode />,
    title: "Clean Code",
    desc: "Developer-friendly and easy to customize",
  },
  {
    icon: <FaRocket />,
    title: "High Performance",
    desc: "Loads fast, smooth user experience",
  },
  {
    icon: <FaUserShield />,
    title: "User Security",
    desc: "Secure and privacy-focused design",
  },
];

const PortfolioPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-rose-100 via-white to-fuchsia-100 px-4 py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title + Animation */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-snug text-gray-900">
          Biggest Personal Portfolio <br />
          <TypeAnimation
            sequence={[
              "For Developer",
              1000,
              "For Designer",
              1000,
              "For Freelancer",
              1000,
              "For Client",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="span"
            className="text-pink-600"
          />
        </h2>

        <p className="text-gray-700 text-lg md:text-xl mb-8">
          Our template is fully responsive and perfect for all devices. <br />
          Discover the best portfolio to showcase your work and skills.
        </p>

        {/* Down Arrow */}
        <div className="flex justify-center mb-14">
          <div className="animate-bounce">
            <FaArrowDown className="text-pink-500 text-3xl" />
          </div>
        </div>

       {/* Embedded Videos */}
<div className="mb-16">
  <h3 className="text-2xl font-bold text-gray-800 mb-8">Watch Our Demos</h3>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Video 1 */}
    <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-xl border border-gray-300 group">
      <iframe
        className="w-full h-full group-hover:scale-105 transition-transform duration-500"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Demo 1"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>

    {/* Video 2 */}
    <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-xl border border-gray-300 group">
      <iframe
        className="w-full h-full group-hover:scale-105 transition-transform duration-500"
        src="https://www.youtube.com/embed/oHg5SJYRHA0"
        title="Demo 2"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>

    {/* Video 3 */}
    <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-xl border border-gray-300 group">
      <iframe
        className="w-full h-full group-hover:scale-105 transition-transform duration-500"
        src="https://www.youtube.com/embed/9bZkp7q19f0"
        title="Demo 3"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</div>


        {/* Features Grid with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 text-white border border-gray-800 rounded-xl p-6 cursor-pointer shadow-md hover:bg-gray-500 hover:text-black transition duration-300"
            >
              <div className="text-4xl mb-4">{feat.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feat.title}</h3>
              <p className="text-gray-300">{feat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Scroll Arrow */}
        <div className="animate-bounce">
          <FaArrowDown className="text-pink-500 text-3xl mx-auto" />
        </div>
      </div>

      {/* Optional Background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('/pattern.svg')] bg-cover bg-no-repeat pointer-events-none" />
    </section>
  );
};

export default PortfolioPage;
