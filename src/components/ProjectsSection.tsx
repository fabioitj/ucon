import ProjectCard from './ProjectCard'

const projects = [
  {
    id: 1,
    clientName: 'Unimed',
    industry: 'Healthcare',
    description: 'Comprehensive healthcare management system with patient portal and administrative tools.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    isLogistics: false
  },
  {
    id: 2,
    clientName: 'Conlog',
    industry: 'Energy & Utilities',
    description: 'Smart metering and energy management platform for residential and commercial use.',
    technologies: ['Vue.js', 'Python', 'MongoDB', 'IoT'],
    isLogistics: false
  },
  {
    id: 3,
    clientName: 'Energisa',
    industry: 'Energy Distribution',
    description: 'Grid management and customer service platform for energy distribution network.',
    technologies: ['Angular', 'Java', 'Oracle', 'Microservices'],
    isLogistics: false
  },
  {
    id: 4,
    clientName: 'McDonald\'s',
    industry: 'Food & Beverage',
    description: 'Digital ordering system and kitchen management solution for restaurant operations.',
    technologies: ['React Native', 'Node.js', 'Redis', 'Docker'],
    isLogistics: false
  },
  {
    id: 5,
    clientName: 'LogiX',
    industry: 'Logistics',
    description: 'Advanced supply chain optimization platform with real-time tracking and analytics.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'AI/ML'],
    isLogistics: true,
    isRecent: true
  },
  {
    id: 6,
    clientName: 'Horizon',
    industry: 'Logistics',
    description: 'Fleet management and route optimization system for last-mile delivery operations.',
    technologies: ['React', 'Python', 'MongoDB', 'Google Maps API'],
    isLogistics: true,
    isRecent: true
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Success Stories
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've delivered cutting-edge solutions across various industries, 
            with specialized expertise in logistics and supply chain management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h4 className="text-2xl md:text-3xl font-bold mb-4">
            Looking for Logistics Solutions?
          </h4>
          <p className="text-lg mb-6 opacity-90">
            We're actively seeking new partnerships in the logistics industry. 
            Let's discuss how we can optimize your supply chain operations.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}