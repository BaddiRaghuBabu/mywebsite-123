'use client'
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { motion } from 'framer-motion';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">
                  <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                      className="font-bold border-2 border-black px-3 py-1 rounded bg-black text-white cursor-pointer select-none"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      Raghu<span className="bg-white ml-1 text-black px-1 rounded">Babu</span>
                    </motion.div>
                    </div>
          </h3>
          <p>
            Raghuababu is your one-stop platform to showcase your skills, services,
            and creativity in a stunning digital format.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-pink-400">Home</a></li>
            <li><a href="#features" className="hover:text-pink-400">Features</a></li>
            <li><a href="#portfolio" className="hover:text-pink-400">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-pink-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
          <ul className="space-y-2">
            <li>Email: baddiraghuram6@gmail.com</li>
            <li>Phone: +91 63050 84524</li>
            <li>Address: Visakhapatnam, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-300"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
        © {new Date().getFullYear()} RaghuBabu. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
