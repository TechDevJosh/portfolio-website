// fix-portfolio.mjs
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'

const base = process.cwd()

const write = async (relPath, content) => {
  const file = join(base, relPath)
  const folder = file.split('/').slice(0, -1).join('/')
  await mkdir(folder, { recursive: true })
  await writeFile(file, content, 'utf8')
  console.log(`✅ Wrote: ${relPath}`)
}

await write('components/Navbar.js', `
'use client'

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 fixed top-0 left-0 z-[1000] bg-[#0B0E11] border-b border-gray-800 flex justify-center gap-6 text-white">
      <a href="#home" className="hover:text-teal-400 transition">Home</a>
      <a href="#services" className="hover:text-teal-400 transition">Services</a>
      <a href="#proof" className="hover:text-teal-400 transition">Proof</a>
      <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
    </nav>
  )
}
`)

await write('components/ParticlesBackground.js', `
'use client'

import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function ParticlesBackground() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: "#0B0E11" },
        particles: {
          number: { value: 50 },
          color: { value: "#00ffff" },
          links: { enable: true, distance: 120, color: "#00ffff" },
          move: { enable: true, speed: 1 },
          size: { value: 2 },
          opacity: { value: 0.5 }
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
          modes: { repulse: { distance: 100 } }
        }
      }}
    />
  )
}
`)

await write('app/page.js', `
'use client'

import Navbar from '@/components/Navbar'
import ParticlesBackground from '@/components/ParticlesBackground'

export default function Home() {
  return (
    <>
      <Navbar />
      <ParticlesBackground />

      <main className="relative z-10 flex flex-col items-center justify-center text-white px-6">

        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-lg text-gray-300 mb-6">Helping businesses automate, convert, and scale.</p>
          <a href="#contact" className="bg-teal-600 px-6 py-3 rounded text-white hover:bg-teal-700 transition">🚀 Start with Free Work</a>
        </section>

        <section id="services" className="py-32 text-center">
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <p className="text-gray-300">AI automation, SEO writing, GPT workflows, and more.</p>
        </section>

        <section id="proof" className="py-32 text-center">
          <h2 className="text-3xl font-bold mb-4">Proof of Work</h2>
          <p className="text-gray-300">Over ₱40M in ad revenue generated. 300+ docs automated.</p>
        </section>

        <section id="contact" className="py-32 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Free Work</h2>
          <form className="max-w-md mx-auto flex flex-col gap-4">
            <input type="email" placeholder="Your email" className="p-3 rounded bg-gray-800 text-white border border-gray-700" />
            <button className="bg-teal-600 text-white px-4 py-3 rounded hover:bg-teal-700">Submit</button>
          </form>
        </section>

      </main>
    </>
  )
}
`)
