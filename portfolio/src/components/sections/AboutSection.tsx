export default function AboutSection() {
  const techStack = [
    "JavaScript",
    "TypeScript",
    "Java",
    "React.js",
    "React Native",
    "Node.js",
    "Express",
    "Supabase",
    "SQL",
    "MongoDB",
  ];

  return (
    <section className="px-6 sm:px-10 md:px-15 lg:ml-25 mt-16 md:mt-21" id="about">
      {/* Title with line */}
      <div className="flex items-center gap-4">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-[40px] whitespace-nowrap">About Me</h1>
        <div className="flex-1 max-w-[460px]">
          <hr className="border-t border-accent-600/5 border-2 rounded-2xl" />
        </div>
      </div>

      <p className="max-w-[600px] text-sm sm:text-base leading-7 mt-6 text-neutral-300">
        Hey, I'm Kevin. I build web apps that solve problems I actually face.
        <br />
        My journey into web development started when I got frustrated with academic referencing and decided to build my own solution, <a href="https://studentoss.netlify.app/" target="_blank" className="text-accent-500 font-bold hover:underline">StudentOS</a>. 
        <br />What began as a personal tool quickly took off, gaining over 250 users in just two weeks from a single post in a group chat.
        <br />
        That's what I love the full cycle of spotting a real-world problem, engineering the solution, and seeing it make an impact. I'm now diving deeper into building professional-grade applications and looking for an internship where I can bring that same energy to a team.
      </p>

      <div className="mt-10 md:mt-12">
        <h3 className="font-semibold text-base md:text-lg mb-4 md:mb-6">Technical Stack</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-y-2 gap-x-4 max-w-sm text-sm md:text-base">
          {techStack.map((tech, index) => (
            <li
              key={index}
              className="flex items-center text-gray-200 hover:text-accent-400 transition-colors duration-200"
            >
              <span className="w-1.5 h-1.5 bg-accent-500 rounded-full mr-3 shadow-sm shadow-accent-500/40"></span>
              <span className="font-sans">{tech}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}