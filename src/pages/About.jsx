import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'PHP', 'MySQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Docker', 'Figma', 'Adobe XD'] }
  ];

  return (
    <>
      <Helmet>
        <title>Tentang Saya | Ikhsan Mus CV</title>
        <meta name="description" content="Pelajari lebih lanjut tentang Ihsan Musyaffa Dwi Yulangga, pengalaman, keahlian, dan perjalanan karir saya dalam pengembangan web." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Tentang Saya</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Profil</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Saya adalah seorang pengembang web yang memiliki hasrat dalam menciptakan pengalaman digital yang menarik dan fungsional. 
            Dengan latar belakang yang kuat dalam pengembangan frontend dan backend, saya selalu berusaha mengikuti tren terbaru 
            dalam teknologi web untuk memberikan solusi terbaik bagi setiap proyek.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Keahlian</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category}>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li
                      key={skill}
                      className="bg-gray-100 rounded-lg px-4 py-2 text-gray-700"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pengalaman Kerja</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-indigo-600 pl-4">
              <h3 className="text-xl font-semibold text-gray-800">Senior Web Developer</h3>
              <p className="text-gray-600">Perusahaan Tech | 2020 - Sekarang</p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Mengembangkan dan memelihara aplikasi web skala besar</li>
                <li>Memimpin tim pengembangan frontend</li>
                <li>Mengoptimasi performa aplikasi</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-indigo-600 pl-4">
              <h3 className="text-xl font-semibold text-gray-800">Web Developer</h3>
              <p className="text-gray-600">Startup Digital | 2018 - 2020</p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                <li>Mengembangkan fitur-fitur baru untuk platform e-commerce</li>
                <li>Berkolaborasi dengan tim desain untuk implementasi UI/UX</li>
                <li>Melakukan optimasi SEO dan performa website</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default About;