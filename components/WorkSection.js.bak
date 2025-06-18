import Image from  'napos;next/image';
import Link from  'napos;next/link';

// This is a reusable card for each individual project.
const ProjectCard = ({ title, description, imageUrl, techStack, liveUrl }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 group">
    {/* Project Image */}
    <div className="relative w-full h-48">
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="transform transition-transform duration-300 group-hover:scale-105"
      />
    </div>

    {/* Project Content */}
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 h-24 overflow-hidden">{description}</p>

      <div className="mb-4">
        <span className="text-sm font-semibold text-gray-300">
          Development Tools:
        </span>
        <div className="flex flex-wrap gap-2 mt-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="bg-gray-700 text-teal-400 text-xs font-semibold px-2.5 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-400 font-bold transition hover:text-teal-300"
        >
          View Project →
        </a>
      )}
    </div>
  </div>
);

// This is the main component for the entire "Work" section.
// It accepts  'papos;projects' as a prop from your page.
export default function WorkSection({ projects }) {
  // This check prevents the "map of undefined" error if data isn't passed correctly.
  if (!projects || projects.length === 0) {
    return (
      <section id="work" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">WORK</h2>
          <p className="text-gray-400">
            Projects are loading or not available...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="work" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          WORK
        </h2>

        {/* This maps over the projects passed in from page.js */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/portfolio"
            className="inline-block bg-teal-500 text-white text-lg font-bold px-8 py-3 rounded-md hover:bg-teal-600 transition"
          >
            See All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
