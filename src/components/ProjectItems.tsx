import { ExternalLink, Github } from "lucide-react";

// --- TYPE DEFINITIONS ---
interface Project {
  name: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectItemProps {
  project: Project;
  isReversed?: boolean;
}

// --- ProjectItem Component ---
export default function ProjectItem({ project, isReversed = false }: ProjectItemProps) {
  // Provide default values if project is undefined
  if (!project) {
    project = {
      name: "Sample Project",
      description: "This is a sample project description. Replace this with actual project data.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    };
  }
  
  const { name, description, technologies, imageUrl, githubUrl, liveUrl } = project;
  const flexDirection = isReversed ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <div className={`flex flex-col ${flexDirection} gap-4 md:gap-8 items-center border-b border-gray-800 pb-8 md:pb-12 mb-8 md:mb-12`}>
      
      {/* Text content */}
      <div className="flex-1 text-gray-300 w-full">
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">{name}</h3>
        <p className="mb-4 md:mb-6 leading-relaxed text-sm md:text-base">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-blue-600/20 text-blue-300 text-xs md:text-sm font-medium px-3 md:px-4 py-1.5 md:py-2 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 md:gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white rounded-lg transition-all duration-200 group text-sm"
            >
              <Github className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">Code</span>
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live site"
              className="flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all duration-200 group shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 text-sm"
            >
              <ExternalLink className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">Live Demo</span>
            </a>
          )}
        </div>
      </div>

      {/* Image content */}
      <div className="flex-1 flex justify-center items-center w-full">
        <div className="w-full h-48 md:h-56 bg-gray-700/50 rounded-lg shadow-lg">
          {imageUrl ? (
            <img src={imageUrl} alt={name} className="w-full h-full object-cover rounded-lg" />
          ) : (
            <div className="w-full h-full bg-gray-800 rounded-lg"></div>
          )}
        </div>
      </div>
    </div>
  );
}