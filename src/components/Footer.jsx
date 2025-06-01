import React from 'react';
import { FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Ikhsan Mus CV</h3>
            <p className="text-gray-400">Pengembang Web Professional</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://instagram.com/ikhsan_mus143"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="mailto:ihsanmusyaffa123@gmail.com"
              className="hover:text-indigo-400 transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="tel:+6282113666991"
              className="hover:text-indigo-400 transition-colors"
            >
              <FaPhone size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Ihsan Musyaffa Dwi Yulangga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;