import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Helmet>
        <title>Beranda | Ikhsan Mus CV</title>
        <meta name="description" content="Selamat datang di website portfolio Ihsan Musyaffa Dwi Yulangga, seorang pengembang web professional yang berfokus pada pembuatan aplikasi web modern." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
            alt="Ihsan Musyaffa"
            className="w-40 h-40 rounded-full mx-auto mb-6 object-cover shadow-lg"
          />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Ihsan Musyaffa Dwi Yulangga
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Pengembang Web Professional
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Selamat Datang
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Saya adalah seorang pengembang web yang berdedikasi dalam menciptakan solusi digital yang inovatif dan efektif. 
            Dengan fokus pada pengalaman pengguna dan kode yang bersih, saya membantu mengubah ide menjadi realitas digital.
          </p>
          <Link
            to="/portfolio"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Lihat Portfolio
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Pengalaman
            </h3>
            <p className="text-gray-600">
              Berpengalaman dalam pengembangan web modern dengan berbagai teknologi terkini.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Keahlian
            </h3>
            <p className="text-gray-600">
              Menguasai berbagai teknologi web frontend dan backend untuk solusi yang komprehensif.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Kolaborasi
            </h3>
            <p className="text-gray-600">
              Siap berkolaborasi dalam proyek pengembangan web yang menantang.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Home;