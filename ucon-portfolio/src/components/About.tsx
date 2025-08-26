'use client';

import { motion } from 'framer-motion';
import { Users, Award, Clock, Target } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Happy Clients', value: '50+' },
  { icon: Award, label: 'Projects Completed', value: '100+' },
  { icon: Clock, label: 'Years Experience', value: '8+' },
  { icon: Target, label: 'Success Rate', value: '98%' }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose Ucon?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We are a technology company specialized in developing innovative solutions 
              for businesses across multiple industries. Our expertise spans from healthcare 
              and energy to retail and logistics, with a particular focus on supply chain 
              optimization and transportation management.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                <p className="text-gray-600">
                  <strong className="text-gray-900">Industry Expertise:</strong> Deep understanding 
                  of logistics, healthcare, energy, and retail sectors
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                <p className="text-gray-600">
                  <strong className="text-gray-900">Proven Track Record:</strong> Successfully 
                  delivered projects for major brands and enterprises
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                <p className="text-gray-600">
                  <strong className="text-gray-900">Innovation Focus:</strong> Cutting-edge 
                  technology solutions tailored to your business needs
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center">
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}