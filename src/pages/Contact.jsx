import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>Kontak | Ikhsan Mus CV</title>
        <meta name="description" content="Hubungi Ihsan Musyaffa Dwi Yulangga untuk kolaborasi proyek atau pertanyaan. Tersedia melalui email, telepon, atau media sosial." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Kontak</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Informasi Kontak
            </h2>
            
            <div className="space-y-4">
              <a
                href="mailto:ihsanmusyaffa123@gmail.com"
                className="flex items-center space-x-3 text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <FaEnvelope className="w-6 h-6" />
                <span>ihsanmusyaffa123@gmail.com</span>
              </a>
              
              <a
                href="tel:+6282113666991"
                className="flex items-center space-x-3 text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <FaPhone className="w-6 h-6" />
                <span>+62 821 1366 6991</span>
              </a>
              
              <a
                href="https://instagram.com/ikhsan_mus143"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <FaInstagram className="w-6 h-6" />
                <span>@ikhsan_mus143</span>
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Kirim Pesan
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Contact;