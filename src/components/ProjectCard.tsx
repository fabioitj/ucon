interface Project {
  id: number
  clientName: string
  industry: string
  description: string
  technologies: string[]
  isLogistics: boolean
  isRecent?: boolean
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {project.isRecent && (
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold px-4 py-2">
          Recent Project
        </div>
      )}
      
      <div className="p-6">
        {/* Logo Placeholder */}
        <div className="w-full h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-6 flex items-center justify-center border-2 border-dashed border-gray-300 group-hover:border-blue-300 transition-colors">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-400 mb-1">{project.clientName}</div>
            <div className="text-xs text-gray-500">Logo Placeholder</div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
              project.isLogistics 
                ? 'bg-blue-100 text-blue-800' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              {project.industry}
            </span>
            {project.isLogistics && (
              <span className="text-blue-600 text-sm font-medium">🚚 Logistics</span>
            )}
          </div>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="space-y-3">
          <div className="text-sm font-semibold text-gray-700 mb-2">Technologies Used:</div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}