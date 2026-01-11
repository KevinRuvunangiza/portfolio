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
      "A full-stack academic toolkit I founded and built to solve the stress of university referencing.\nThe app gained over 250 users in two weeks from a single post and now ranks among the top 10 search results on Google for its brand name. The core feature is a 'Magic Bar' that auto-fills citations from URLs, PDFs, and more, using a modular engine to support specific university style guides.",
    technologies: ["React.js", "Supabase", "SQL", "JavaScript"],
    liveUrl: "https://studentoss.netlify.app/",
    imageUrl: "./student_os_screenshot.png",
  },
  {
    name: "Pink and Purple",
    description:
      "Pink & Purple Developed a comprehensive digital platform for an SME growth consultancy.\nI handled the entire technical lifecycle, building a React + TypeScript frontend and a Supabase backend.\nKey features include a secure admin dashboard, Paystack payment integration, and automated email workflows to streamline client onboarding.",
    technologies: ["React.js", "Supabase", "Typescript", "Tailwind"],
    liveUrl: "https://pinkandp.com/",
    imageUrl: "./pink_and_purple_screenshot.png",
  },
  {
    name: "EXP.me",
    description:
      "EXP.me A platform designed to break the 'need experience to get experience' loop.\nI’m building EXP.me to connect junior developers with NGOs that need tech help.\nThe concept is simple: developers volunteer their skills to build real software for non-profits, trading their time for the one thing tutorials can't give them a proven track record.",
    technologies: ["React.js", "Supabase", "Technology"],
    liveUrl: "https://exp-me.netlify.app/",
    imageUrl: "./exp-me_screenshot.png",
  },
];

function ProjectsSection() {
  return (
    <section
      className="bg-black text-white mt-16 md:mt-21 px-6 sm:px-10 md:px-15 lg:ml-20"
      id="project"
    >
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
