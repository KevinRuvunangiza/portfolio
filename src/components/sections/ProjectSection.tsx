import ProjectItem from "../ProjectItems";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projectData: Project[] = [
  {
    name: "StudentOS",
    description:
      "A full-stack academic toolkit I founded and built to solve the stress of university referencing. The app gained over 250 users in two weeks from a single post and now ranks among the top 10 search results on Google for its brand name. The core feature is a 'Magic Bar' that auto-fills citations from URLs, PDFs, and more, using a modular engine to support specific university style guides.",
    technologies: ["React.js", "Supabase", "SQL", "JavaScript"],
    liveUrl: "https://studentoss.netlify.app/",
    imageUrl: "./src/assets/StudentOS_Landing_Page.png"
  },
  {
    name: "Pink and Purple",
    description:
      "Lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum.",
    technologies: ["React.js", "Supabase", "Typescript","Tailwind"],
    liveUrl: "https://pinkandp.com/"
  },
  {
    name: "EXP.me",
    description:
      "Plorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum.",
    technologies: ["React.js", "Supabase", "Technology"],
    liveUrl: "https://exp-me.netlify.app/"
  },
];

function ProjectsSection() {
  return (
    <section className="bg-black text-white mt-16 md:mt-21 px-6 sm:px-10 md:px-15 lg:ml-20" id="project">
      <div className="max-w-6xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8 md:mb-10">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-[40px] whitespace-nowrap">
            A Few Things I've Built
          </h1>
          <div className="hidden md:block flex-1 max-w-[720px]">
            <hr className="border-t border-blue-600 border-2 rounded-2xl" />
          </div>
        </div>

        {/* Project items */}
        <div>
          {projectData.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;