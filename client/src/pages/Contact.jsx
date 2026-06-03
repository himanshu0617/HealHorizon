import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiBriefcase, FiMap, FiSmile } from 'react-icons/fi'

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
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
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Our Team</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-medium">
              Have questions? We are here to help and ensure you receive exceptional support.
            </p>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch mb-20">
            {/* Image Section */}
            <motion.div 
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 relative flex items-center justify-center"
            >
              <div className="relative group w-full h-full max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-10 blur-lg transition-opacity duration-300"></div>
                <img 
                  src={assets.contact_image} 
                  alt="Contact Us" 
                  className="rounded-2xl shadow-xl w-full h-full object-cover border-4 border-white transform transition-transform duration-300 group-hover:-translate-y-1" 
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-lg border border-gray-100 hidden md:block">
                  <FiPhone className="text-blue-500 text-3xl" />
                </div>
              </div>
            </motion.div>

            {/* Info Form Box */}
            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:w-1/2 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-bold text-2xl text-gray-800 mb-6 flex items-center gap-3 border-b border-gray-100 pb-4">
                  <FiMapPin className="text-blue-500" />
                  Our Office
                </h3>
                
                <div className="space-y-6 text-gray-600 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-2.5 rounded-xl text-blue-500 mt-0.5">
                      <FiMapPin size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Address</p>
                      <p className="text-sm mt-1">490020, Bhilai, Chhattishgarh, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-50 p-2.5 rounded-xl text-cyan-600 mt-0.5">
                      <FiPhone size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <p className="text-sm mt-1">+91 9876543210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-teal-50 p-2.5 rounded-xl text-teal-600 mt-0.5">
                      <FiMail size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Email Address</p>
                      <p className="text-sm mt-1">himanshukaran729@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <h3 className="font-bold text-2xl text-gray-800 mb-4 flex items-center gap-3">
                  <FiBriefcase className="text-teal-600" />
                  Careers at HealHorizon
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                  Join our fast-growing team and help build the future of concierge healthcare.
                </p>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all"
                >
                  Explore Jobs
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Map and QR Code Section */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Map Section */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3 border-b border-gray-100 pb-3">
                <FiMap className="text-blue-500" />
                Find Us on Map
              </h3>
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden border border-gray-100 shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119037.51159297545!2d81.25567310902916!3d21.195247875871598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293cccec49ed45%3A0x2b3ff3bd73c91877!2sBhilai%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1774778197780!5m2!1sen!2sin" 
                  width="100%" 
                  height="300" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Google Maps Location"
                  className="rounded-lg"
                ></iframe>
              </div>
            </motion.div>

            {/* QR Code Section */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 flex flex-col justify-between items-center"
            >
              <h3 className="w-full text-xl font-bold text-gray-800 mb-6 flex items-center gap-3 border-b border-gray-100 pb-3">
                <FiSmile className="text-teal-600" />
                Hire Developer
              </h3>
              <div className="flex flex-col items-center justify-center flex-1 py-4">
                <div className="bg-white p-4 rounded-xl border border-blue-50 shadow-inner mb-4">
                  <img 
                    src="/qr-code.png" 
                    alt="Developer Contact QR Code" 
                    className="w-44 h-44 object-contain"
                  />
                </div>
                <p className="text-gray-500 text-sm text-center">Scan this QR code to contact Developer</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact