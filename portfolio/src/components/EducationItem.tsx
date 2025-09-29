
type EducationItemProps = {
  year: string;
  title: string;
  institution: string;
  description: string;
};

export default function EducationItem({ year, title, institution, description }: EducationItemProps) {
  return (
    <div className="relative pl-10 mb-12">
      {/* Vertical line */}
      <div className="absolute left-0 top-0 h-full w-[4px] roun bg-blue-500" />

      {/* Circle */}
      <div className="absolute left-[-8px] top-0 w-5 h-5 rounded-full bg-blue-500" />

      {/* Content */}
      <p className="text-blue-400 font-medium">{year}</p>
      <h3 className="text-white font-bold text-xl">{title}</h3>
      <p className="text-blue-400 font-semibold">{institution}</p>
      <p className="text-neutral-300">{description}</p>
    </div>
  );
}


