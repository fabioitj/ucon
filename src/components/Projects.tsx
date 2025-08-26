const projects = [
  {
    id: 1,
    name: "Unimed",
    category: "Healthcare",
    description: "Comprehensive healthcare management system with patient portal and administrative tools.",
    logoPlaceholder: "Healthcare Solutions",
    featured: false
  },
  {
    id: 2,
    name: "Conlog",
    category: "Technology",
    description: "Advanced logging and monitoring solutions for enterprise-level applications.",
    logoPlaceholder: "Tech Solutions",
    featured: false
  },
  {
    id: 3,
    name: "Energisa",
    category: "Energy",
    description: "Smart grid management and energy distribution optimization platform.",
    logoPlaceholder: "Energy Management",
    featured: false
  },
  {
    id: 4,
    name: "McDonald's",
    category: "Retail",
    description: "Digital transformation solutions for restaurant operations and customer experience.",
    logoPlaceholder: "Retail Innovation",
    featured: false
  },
  {
    id: 5,
    name: "LogiX",
    category: "Logistics",
    description: "End-to-end logistics management platform with real-time tracking and optimization.",
    logoPlaceholder: "Logistics Platform",
    featured: true
  },
  {
    id: 6,
    name: "Horizon",
    category: "Logistics",
    description: "Supply chain visibility and warehouse management system for improved efficiency.",
    logoPlaceholder: "Supply Chain",
    featured: true
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by industry leaders across healthcare, energy, retail, and logistics sectors
          </p>
        </div>

        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              🚀 Specialized in Logistics Solutions
            </h3>
            <p className="text-gray-700 text-center max-w-2xl mx-auto">
              Our recent focus on logistics and supply chain optimization has delivered exceptional results. 
              We're actively seeking new partnerships in the logistics sector to drive innovation and efficiency.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border ${
                project.featured ? 'border-blue-200 ring-2 ring-blue-100' : 'border-gray-200'
              }`}
            >
              {project.featured && (
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-t-xl text-center">
                  Recent Logistics Project
                </div>
              )}
              
              <div className="p-8">
                <div className="mb-6">
                  <div className="w-full h-24 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                    <div className="text-center">
                      <div className="text-gray-400 text-sm font-medium">Logo Placeholder</div>
                      <div className="text-gray-500 text-xs mt-1">{project.logoPlaceholder}</div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    project.category === 'Logistics' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.name}</h3>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Logistics Operations?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join LogiX and Horizon in revolutionizing their supply chain management. 
              Let's discuss how we can optimize your logistics processes.
            </p>
            <a 
              href="#contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 inline-block"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}