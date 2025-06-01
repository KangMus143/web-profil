import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Platform e-commerce modern dengan fitur keranjang belanja, pembayaran, dan manajemen produk.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg',
      link: '#'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard analitik real-time untuk monitoring metrics bisnis dan KPI.',
      tech: ['Vue.js', 'Express', 'Socket.io', 'Chart.js'],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
      link: '#'
    },
    {
      title: 'Social Media App',
      description: 'Aplikasi media sosial dengan fitur posting, komentar, dan chat real-time.',
      tech: ['React Native', 'Firebase', 'Redux', 'WebSocket'],
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
      link: '#'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio | Ikhsan Mus CV</title>
        <meta name="description" content="Lihat koleksi proyek-proyek terbaik yang telah saya kerjakan, mencakup berbagai aplikasi web dan solusi digital." />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Portfolio</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Lihat Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default Portfolio;