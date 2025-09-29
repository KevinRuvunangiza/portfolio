export default function HeroSection({
  name,
  jobTitle,
}: {
  name: string;
  jobTitle: string;
}) {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center px-6 sm:px-10 md:px-15 lg:ml-15 max-w-5xl">
        <div className="mb-8">
          <p className="font-normal text-sm md:text-base text-accent-500 mb-4 md:mb-6 tracking-wide">
            Hi, my name is
          </p>
          
          <h1 className="font-black text-[clamp(32px,8vw,80px)] leading-[1.1] text-white mb-2">
            {name}.
          </h1>
          
          <h2 className="font-black text-[clamp(28px,6vw,70px)] leading-[1.1] text-neutral-500 mb-4 md:mb-6">
            {jobTitle}
          </h2>
          
          <p className="max-w-[540px] text-sm sm:text-base md:text-lg leading-relaxed font-light text-neutral-400 mb-8 md:mb-12">
            I'm a frontend developer passionate about turning ideas into clean, user-friendly web applications.<br className="hidden sm:block"/>I love building tools that don't just work they feel right.
          </p>
          
          <a
            href="#project"
            className="inline-block px-6 md:px-8 py-3 md:py-4 border-2 border-accent-500 text-accent-500 rounded-md font-medium text-xs md:text-sm tracking-wider hover:bg-accent-500/10 transition-all duration-300 hover:-translate-y-1"
          >
            Check out my work!
          </a>
        </div>
      </section>
    </>
  );
}