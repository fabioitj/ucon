export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">UCON</h3>
            <p className="text-gray-400 leading-relaxed">
              Delivering innovative technology solutions across industries with specialized expertise in logistics and supply chain optimization.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Logistics Solutions</li>
              <li>Supply Chain Management</li>
              <li>Healthcare Technology</li>
              <li>Energy Management</li>
              <li>Retail Innovation</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>+55 (47) 99261-1819</p>
              <p>+55 (47) 99668-3800</p>
              <p>+55 (47) 99723-9513</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Ucon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}