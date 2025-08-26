'use client';

import { motion } from 'framer-motion';
import { Building2, Calendar, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  industry: string;
  description: string;
  year: string;
  logoPlaceholder: string;
  isRecent?: boolean;
  isLogistics?: boolean;
}

export default function ProjectCard({ 
  title, 
  industry, 
  description, 
  year, 
  logoPlaceholder,
  isRecent = false,
  isLogistics = false 
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg card-hover overflow-hidden relative"
    >
      {isRecent && (
        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          Recent
        </div>
      )}
      
      {isLogistics && (
        <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          Logistics
        </div>
      )}
      
      <div className="p-8">
        <div className="flex items-center justify-center h-24 mb-6 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
          <div className="text-center">
            <Building2 className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <span className="text-sm text-gray-500 font-medium">{logoPlaceholder}</span>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-blue-600 font-semibold mb-4">{industry}</p>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm">{year}</span>
          </div>
          <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors">
            View Details
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}