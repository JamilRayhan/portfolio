import { ProjectService } from '../services/ProjectService'

const service = new ProjectService()
const projects = service.getProjects()

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-green-100 rounded-lg overflow-hidden shadow">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{project.role}</p>
                <p className="text-gray-700 text-sm mb-2">{project.description}</p>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Tech:</strong> {project.technologies.join(', ')}
                </p>
                {project.challenges && (
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Challenges:</strong> {project.challenges}
                  </p>
                )}
                <div className="flex space-x-4 mt-2">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-700 hover:underline text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-700 hover:underline text-sm"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
