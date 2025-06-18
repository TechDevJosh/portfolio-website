// app/portfolio/page.js

'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

// --- UPDATED PROJECT DATA ---
// This now uses the correct project name and image paths.
const allProjects = [
  {
    title: 'Weblitzstack.com', // Updated Project Name
    subtitle: 'Personal Portfolio & Agency Hub', // Added Project Subtitle
    description:
      'The site you are on right now. A clean, responsive portfolio built with modern tools.',
    tech: ['Next.js', 'React', 'Vercel'], // Fixed array syntax
    imageUrl: '/PortfolioWebsite.png', // Added missing comma
    liveUrl: '#',
  },
  {
    title: 'Another Project', // Added new project title
    subtitle: 'Project Subtitle', // Added new project subtitle
    description: 'Another project description...',
    tech: ['React', 'Node.js'], // Fixed array syntax
    imageUrl: '/AnotherProject.png', // Added missing comma
    liveUrl: '#',
  },
  // You can add more projects here for the full portfolio page
];

export default function PortfolioPage() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />

      <main className="pt-24">
        <section className="container mx-auto px-6 py-12 max-w-5xl">
          <h1 className="text-5xl font-bold mb-4 text-center">Projects</h1>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
            A selection of projects where I’rsquo;ve built high-performance web
            applications and robust, scalable solutions for real-world use
            cases.
          </p>

          <div className="space-y-20">
            {allProjects.map((project, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center border-b border-gray-200 pb-12 last:border-b-0"
              >
                {/* Image Column */}
                <div className="relative w-full h-80 rounded-lg bg-gray-100 overflow-hidden shadow-lg">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                {/* Text Content Column */}
                <div>
                  <h2 className="text-2xl font-bold mb-1">{project.title}</h2>
                  <p className="text-md text-gray-500 mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-700 mb-6">{project.description}</p>

                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Development Tools
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((techItem) => (
                      <span
                        key={techItem}
                        className="bg-gray-200 text-gray-800 text-sm font-medium px-3 py-1 rounded"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:text-teal-700 font-bold transition"
                    >
                      View Project →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
