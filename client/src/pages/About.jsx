import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { FiClock, FiHeart, FiSmile } from 'react-icons/fi'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100 rounded-full filter blur-[100px] opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-100 rounded-full filter blur-[120px] opacity-10"></div>
      </div>

      <div className="relative z-10">
        {/* Premium Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#001529] to-[#0c2135] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#1a3a5a] shadow-lg">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/4 -left-1/4 w-[500px] h-[500px] bg-[#0a2d4a] rounded-full filter blur-[100px] opacity-25"></div>
            <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-[#1a4a7a] rounded-full filter blur-[100px] opacity-25"></div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto text-center relative z-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">HealHorizon</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-medium">
              Your trusted partner in healthcare management, connecting patients with elite medical specialists.
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* About Content */}
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
            <motion.div 
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-300"></div>
                <img 
                  src={assets.about_image} 
                  alt="HealHorizon Facility"
                  className="w-full rounded-2xl shadow-xl border-4 border-white transform transition-transform duration-300 group-hover:-translate-y-1"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:w-1/2"
            >
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">HealHorizon</span>
                </h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>Welcome to HealHorizon, your trusted partner in managing your healthcare needs conveniently and efficiently. At HealHorizon, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
                  
                  <p>HealHorizon is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, HealHorizon is here to support you every step of the way.</p>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <h3 className="text-xl font-bold text-blue-600 mb-3">Our Vision</h3>
                    <p>Our vision at HealHorizon is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Why Choose Us */}
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-800 mb-3"
            >
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">HealHorizon</span>
            </motion.h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">Discover what makes our patient experience stand out</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Efficiency Card */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all p-8 flex flex-col items-center text-center"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-blue-600">
                <FiClock size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Efficiency</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Streamlined, instantaneous appointment scheduling designed to seamlessly fit into your busy schedule.
              </p>
            </motion.div>

            {/* Convenience Card */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all p-8 flex flex-col items-center text-center"
            >
              <div className="bg-cyan-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-cyan-600">
                <FiHeart size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Convenience</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Direct access to a pre-vetted network of elite, board-certified medical professionals in your area.
              </p>
            </motion.div>

            {/* Personalization Card */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all p-8 flex flex-col items-center text-center"
            >
              <div className="bg-teal-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-teal-600">
                <FiSmile size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Personalization</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Tailored healthcare recommendations, automated reminders, and profiles designed specifically for your wellness journey.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
