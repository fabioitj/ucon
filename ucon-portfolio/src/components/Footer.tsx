export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Ucon Solutions</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming businesses through innovative technology solutions. 
              Specializing in logistics, healthcare, energy, and retail industries.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">Li</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">Tw</span>
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                <span className="text-sm font-bold">Fb</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Logistics Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Healthcare Systems</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Energy Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Retail Platforms</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+55 (47) 99261-1819</li>
              <li>+55 (47) 99668-3800</li>
              <li>+55 (47) 99723-9513</li>
              <li>contact@ucon.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Ucon Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}