export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">UCON</h1>
              <p className="text-xs text-gray-600">Technology Solutions</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Projects
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}