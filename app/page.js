'use client'

import Navbar from '@/components/Navbar'
import ParticlesBackground from '@/components/ParticlesBackground'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navbar />
      <ParticlesBackground />

      {/* Hero Section */}
      <main className="relative z-10 bg-transparent text-white min-h-screen flex flex-col items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
            I help you{' '}
            <span className="bg-gradient-to-r from-teal-400 to-lime-400 text-transparent bg-clip-text">
              automate
            </span>{' '}
            work,
            <br />
            convert with{' '}
            <span className="underline decoration-teal-500">clarity</span>,
            <br />
            and ship{' '}
            <span className="bg-yellow-300 text-black px-2 py-1 rounded rotate-1 inline-block">
              fast
            </span>.
          </h1>

          <p className="text-lg text-gray-300 mb-8">
            From AI workflows and SEO content to full-stack builds—I'll solve one of your real problems, for free.
            Risk-free. No strings.
          </p>

          <Link
            href="/hire-me"
            className="inline-block bg-teal-600 text-white text-lg font-bold px-8 py-4 rounded-full hover:bg-teal-700 transition"
          >
            🚀 Start with Free Work
          </Link>
        </div>
      </main>

      {/* Recent Projects Section */}
      <section className="bg-white text-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Recent Projects</h2>
          <p className="text-gray-600 mb-8">Some of the ways I’ve delivered real results.</p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: 'SEO Landing Page',
                subtitle: 'HTML5, JS, Tailwind',
              },
              {
                title: 'AI Policy Integration',
                subtitle: 'GPT-4, SOP indexing',
              },
              {
                title: 'OCR VAT Tool (WIP)',
                subtitle: 'Python, GPT, OCR',
              },
            ].map((project, index) => (
              <div
                key={index}
                className="border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold text-teal-700 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.subtitle}</p>
              </div>
            ))}
          </div>

          <Link
            href="/portfolio"
            className="mt-10 inline-block text-teal-700 font-bold underline hover:text-teal-900 transition"
          >
            View Full Portfolio →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm">
        “Having food and raiment let us be therewith content.” — <span className="text-white">1 Tim. 6:8</span>
      </footer>
    </>
  )
}
