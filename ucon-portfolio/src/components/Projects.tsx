import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Healthcare Management System",
    industry: "Healthcare",
    description: "Comprehensive digital transformation solution for healthcare operations, improving patient care and operational efficiency.",
    year: "2023",
    logoPlaceholder: "Unimed Logo",
    isRecent: false,
    isLogistics: false
  },
  {
    title: "Energy Monitoring Platform",
    industry: "Energy & Utilities",
    description: "Advanced monitoring and analytics platform for energy distribution and consumption optimization.",
    year: "2023",
    logoPlaceholder: "Energisa Logo",
    isRecent: false,
    isLogistics: false
  },
  {
    title: "Industrial Automation System",
    industry: "Manufacturing",
    description: "Smart automation solution for industrial processes, enhancing productivity and reducing operational costs.",
    year: "2022",
    logoPlaceholder: "Conlog Logo",
    isRecent: false,
    isLogistics: false
  },
  {
    title: "Digital Ordering Platform",
    industry: "Food & Retail",
    description: "Modern digital ordering and management system for enhanced customer experience and operational efficiency.",
    year: "2022",
    logoPlaceholder: "McDonald's Logo",
    isRecent: false,
    isLogistics: false
  },
  {
    title: "Supply Chain Optimization",
    industry: "Logistics & Transportation",
    description: "End-to-end logistics management system with real-time tracking, route optimization, and inventory management.",
    year: "2024",
    logoPlaceholder: "LogiX Logo",
    isRecent: true,
    isLogistics: true
  },
  {
    title: "Fleet Management Solution",
    industry: "Logistics & Transportation",
    description: "Comprehensive fleet management platform with GPS tracking, maintenance scheduling, and performance analytics.",
    year: "2024",
    logoPlaceholder: "Horizon Logo",
    isRecent: true,
    isLogistics: true
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've partnered with industry leaders to deliver innovative solutions across various sectors. 
            Our recent focus on logistics solutions positions us as your ideal technology partner.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Looking for Logistics Solutions?
            </h3>
            <p className="text-gray-600 mb-6">
              With our recent success in logistics projects, we're actively seeking new partnerships 
              in the transportation and supply chain industry. Let's discuss how we can optimize your operations.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}