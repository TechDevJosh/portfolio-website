'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import WorkSection from '@/components/WorkSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const yourProjects = [
  {
    title: 'Subic Waterfront Resort Website',
    description:
      'A visually striking resort website featuring a full-screen, scroll-snapping interface, custom "wave" section dividers, and a booking modal to provide an immersive user experience.',
    imageUrl: '/SubicWaterfrontHero.png',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Scroll Snap'],
    liveUrl: '#',
  },
  {
    title: 'Upwork-Style Sales Landing Page',
    description:
      'A comprehensive, long-form sales page designed to convert visitors, featuring multiple interactive sections like a skills explorer and an FAQ accordion.',
    imageUrl: '/Upwork.png',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'SEO'],
    liveUrl: '/upwork-sample',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'The site you are on right now. A clean, responsive portfolio built to showcase my projects and skills using modern web technologies.',
    imageUrl: '/PortfolioWebsite.png',
    techStack: ['Next.js', 'React', 'Vercel'],
    liveUrl: '#',
  },
];

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />

      <main
        id="home"
        className="min-h-screen flex items-center justify-center text-center px-6 pt-20"
      >
        <div className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
            I turn your business{' '}
            <span className="bg-gradient-to-r from-teal-400 to-lime-400 text-transparent bg-clip-text">
              ideas
            </span>{' '}
            into working{' '}
            <span className="bg-gradient-to-r from-teal-400 to-lime-400 text-transparent bg-clip-text">
              websites
            </span>
            ,{' '}
            <span className="bg-yellow-300 text-black px-2 py-1 rounded rotate-1 inline-block">
              fast
            </span>
            .
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
            Using Next.js, Tailwind, and Supabase, I build everything from
            landing pages to full applications that actually solve your problems
            and grow with your business.
          </p>
          {/* ----- BUTTON TEXT UPDATED HERE ----- */}
          <Link
            href="/hire-me"
            className="inline-block bg-teal-600 text-white text-lg font-bold px-8 py-4 rounded-full hover:bg-teal-700 transition"
          >
            Let's Build Your Website
          </Link>
        </div>
      </main>

      {/* "Trusted By" Logos Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-sm font-bold uppercase tracking-widest text-gray-400 mb-8">
            Trusted By
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <Image
              src="/waterfrontlogo.jpg"
              alt="Subic Waterfront View Resort Logo"
              width={140}
              height={140}
              className="rounded-full grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition duration-300"
            />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-10">ABOUT</h2>
          <div className="text-gray-300 space-y-6 text-lg">
            <p>
              I'm Josiah Manzano — a full-stack developer, strategist, and solo
              founder behind a lean, AI-powered web agency. Based in Subic,
              Philippines, I design and build performant websites and web apps
              that solve real business problems.
            </p>
            <p>
              My journey into tech didn’t begin in a classroom. I taught myself
              how to code, debug, deploy, and scale projects by combining
              relentless curiosity with the guidance of cutting-edge AI. From
              managing hospitality operations to automating payroll systems,
              I’ve applied technology where it matters most—on the ground, with
              real users, under real pressure.
            </p>
            <p>
              I build fast, iterate smart, and deliver solutions that are as
              elegant as they are effective.
            </p>
          </div>
          <div className="mt-12 w-full aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">[ Video Coming Soon ]</p>
          </div>
        </div>
      </section>

      {/* All Page Sections */}
      <WorkSection projects={yourProjects} />
      <ServicesSection />
      <TestimonialsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
