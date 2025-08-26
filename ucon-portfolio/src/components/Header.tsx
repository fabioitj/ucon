import { Phone, Mail, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-gray-900">Ucon</h1>
            <span className="ml-2 text-sm text-gray-600 font-medium">Solutions</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Phone className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-gray-600 hidden lg:block">+55 (47) 99261-1819</span>
          </div>
        </div>
      </div>
    </header>
  );
}