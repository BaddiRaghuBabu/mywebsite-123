'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';
import Loading from '@/components/loading/Loading';

const ContactPage = () => {
  const form = useRef();
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccessMsg('');
    setErrorMsg('');
    setLoading(true); // Start loading

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setSuccessMsg('Message sent successfully!');
          form.current.reset();
          setLoading(false); // Stop loading

          setTimeout(() => {
            setSuccessMsg('');
          }, 5000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setErrorMsg('Failed to send message. Please try again.');
          setLoading(false); // Stop loading

          setTimeout(() => {
            setErrorMsg('');
          }, 5000);
        }
      );
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-100 via-white to-fuchsia-100 px-6 py-20 relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-50">
          <Loading />
        </div>
      )}

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
          Get in Touch With Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-8 shadow-lg rounded-2xl border border-gray-200">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Message</label>
                <textarea
                  name="user_message"
                  rows="5"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              {/* Success and Error Messages */}
              {successMsg && (
                <div className="text-green-600 font-medium bg-green-100 border border-green-300 px-4 py-2 rounded-md shadow-sm transition-all duration-300">
                  {successMsg}
                </div>
              )}
              {errorMsg && (
                <div className="text-red-600 font-medium bg-red-100 border border-red-300 px-4 py-2 rounded-md shadow-sm transition-all duration-300">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-lg space-y-6">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-pink-400 text-xl" />
              <p>123 Street, Visakhapatnam, Andhra Pradesh, India</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-pink-400 text-xl" />
              <p>+91 6305084524</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-pink-400 text-xl" />
              <p>baddiraghuram6@gmail.com</p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Follow us</h3>
              <div className="flex space-x-4 text-pink-400 text-2xl">
                <a
                  href="https://www.facebook.com/baddiraghubabu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook className="hover:text-white" />
                </a>
                <a
                  href="https://www.instagram.com/baddiraghubabu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram className="hover:text-white" />
                </a>
                <a
                  href="https://wa.me/916305084524"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
