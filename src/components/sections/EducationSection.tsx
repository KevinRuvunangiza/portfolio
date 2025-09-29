import EducationItem from "../EducationItem";

export default function EducationSection() {
  return (
    <div id="education">
      <section className="text-left px-6 sm:px-10 md:px-15 lg:ml-20 mt-16 md:mt-50 mb-20 md:mb-100">
        <div className="flex items-center gap-4">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-[40px] whitespace-nowrap mb-5">Education</h1>
          <div className="flex-1 max-w-[480px]">
            <hr className="border-t border-accent-500 border-2 rounded-2xl" />
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-6">
          <EducationItem
            year="2025-2028"
            title="Bachelor of Computer and Information Sciences in Application Development"
            institution="IIE Varsity College"
            description="Currently in my first year, this degree is deepening my expertise in software engineering principles, data structures, and advanced Java development to build scalable, professional-grade applications."
          />
          
          <EducationItem
            year="2024-2024"
            title="Higher Certificate In Mobile Application And Web Development"
            institution="IIE MSA"
            description="A year-long, intensive program that provided me with a solid, hands-on foundation in modern web and mobile development, including my first exposure to building applications with React Native."
          />
        </div>
      </section>
    </div>
  );
}