import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-8">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="Foto Profil"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-3xl font-bold text-gray-800 mb-2"
              >
                Nama Lengkap
              </motion.h1>
              <p className="text-gray-600 mb-6">Pengembang Web Full-Stack</p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Tentang Saya</h2>
              <p className="text-gray-600">
                Saya adalah seorang pengembang web yang bersemangat dengan pengalaman dalam membangun
                aplikasi web modern. Saya senang belajar teknologi baru dan berbagi pengetahuan dengan
                komunitas pengembang.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Keahlian</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Express'].map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-100 rounded-lg p-3 text-center"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex justify-center space-x-6">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaEnvelope size={24} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;