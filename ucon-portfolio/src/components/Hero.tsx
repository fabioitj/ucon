'use client';

import { ArrowRight, Truck, Zap, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="gradient-bg text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Transforming Business
            <span className="block text-yellow-300">Through Technology</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            We deliver innovative solutions for logistics, energy, healthcare, and retail industries. 
            Partner with us to drive your business forward.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <div className="flex items-center space-x-2">
              <Truck className="w-6 h-6 text-yellow-300" />
              <span className="text-lg">Logistics Excellence</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-6 h-6 text-yellow-300" />
              <span className="text-lg">Energy Solutions</span>
            </div>
            <div className="flex items-center space-x-2">
              <Building2 className="w-6 h-6 text-yellow-300" />
              <span className="text-lg">Enterprise Systems</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href="#projects" 
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              View Our Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}