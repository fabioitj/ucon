export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              UCON
            </span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Delivering innovative solutions across industries with specialized expertise in logistics and supply chain optimization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#projects" 
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Our Work
            </a>
            <a 
              href="#contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}