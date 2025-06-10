@echo off
echo === Installing dependencies...
call npm install framer-motion react-tsparticles tsparticles-slim

echo === Writing layout.js
mkdir app >nul 2>&1
(
echo ^'use client^'
echo import { AnimatePresence, motion } from 'framer-motion'
echo.
echo export default function RootLayout({ children }) {
echo ^  return (
echo ^    <html lang="en">
echo ^      <body className="bg-[#0B0E11] text-white">
echo ^        <AnimatePresence mode="wait">
echo ^          <motion.div
echo ^            key={Math.random()}
echo ^            initial={{ opacity: 0, y: 10 }}
echo ^            animate={{ opacity: 1, y: 0 }}
echo ^            exit={{ opacity: 0, y: -10 }}
echo ^            transition={{ duration: 0.4 }}
echo ^          >
echo ^            {children}
echo ^          </motion.div>
echo ^        </AnimatePresence>
echo ^      </body>
echo ^    </html>
echo ^  )
echo }
) > app/layout.js

echo === Writing app/page.js (Hero Section with Particles)
(
echo ^'use client^'
echo import Navbar from '@/components/Navbar'
echo import ParticlesBackground from '@/components/ParticlesBackground'
echo.
echo export default function Home() {
echo ^  return (
echo ^    <>
echo ^      <Navbar />
echo ^      <ParticlesBackground />
echo ^      <main className="relative z-10 bg-transparent text-white min-h-screen flex flex-col items-center justify-center px-6">
echo ^        <div className="max-w-4xl text-center">
echo ^          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
echo ^            I help you ^<span className="bg-gradient-to-r from-teal-400 to-lime-400 text-transparent bg-clip-text">automate^</span> work,^<br /^>
echo ^            convert with ^<span className="underline decoration-teal-500">clarity^</span>,^<br /^>
echo ^            and ship ^<span className="bg-yellow-300 text-black px-2 py-1 rounded rotate-1 inline-block">fast^</span>.
echo ^          </h1>
echo ^          <p className="text-lg text-gray-300 mb-8">
echo ^            From AI workflows and SEO content to full-stack builds—I'll solve one of your real problems, for free. Risk-free. No strings.
echo ^          </p>
echo ^          <a href="/hire-me" className="inline-block bg-teal-600 text-white text-lg font-bold px-8 py-4 rounded-full hover:bg-teal-700 transition">
echo ^            🚀 Start with Free Work
echo ^          </a>
echo ^        </div>
echo ^      </main>
echo ^    </>
echo ^  )
echo }
) > app/page.js

echo === Writing components/Navbar.js
mkdir components >nul 2>&1
(
echo import Link from 'next/link'
echo.
echo export default function Navbar() {
echo ^  return (
echo ^    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md flex gap-6">
echo ^      <Link href="/" className="hover:underline font-semibold">Home</Link>
echo ^      <Link href="/about" className="hover:underline font-semibold">About</Link>
echo ^      <Link href="/projects" className="hover:underline font-semibold">Projects</Link>
echo ^      <Link href="/portfolio" className="hover:underline font-semibold">Portfolio</Link>
echo ^      <Link href="/hire-me" className="hover:underline font-semibold">Hire Me</Link>
echo ^    </nav>
echo ^  )
echo }
) > components/Navbar.js

echo === Writing components/ParticlesBackground.js
(
echo ^'use client^'
echo import { useCallback } from 'react'
echo import Particles from 'react-tsparticles'
echo import { loadSlim } from 'tsparticles-slim'
echo.
echo export default function ParticlesBackground() {
echo ^  const particlesInit = useCallback(async engine => {
echo ^    await loadSlim(engine)
echo ^  }, [])
echo.
echo ^  return (
echo ^    <Particles
echo ^      id="tsparticles"
echo ^      init={particlesInit}
echo ^      options={{
echo ^        fullScreen: { enable: true, zIndex: -1 },
echo ^        background: { color: '#0B0E11' },
echo ^        particles: {
echo ^          number: { value: 60, density: { enable: true, area: 800 } },
echo ^          color: { value: '#00f5d4' },
echo ^          links: { enable: true, color: '#00f5d4', distance: 150, opacity: 0.4, width: 1 },
echo ^          move: { enable: true, speed: 1.5, direction: 'none', outModes: { default: 'bounce' } },
echo ^          size: { value: 3, random: true },
echo ^          opacity: { value: 0.6, random: true },
echo ^          shape: { type: 'circle' },
echo ^        },
echo ^        interactivity: {
echo ^          events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
echo ^          modes: { repulse: { distance: 100, duration: 0.4 } },
echo ^        },
echo ^        detectRetina: true,
echo ^      }}
echo ^    />
echo ^  )
echo }
) > components/ParticlesBackground.js

echo === Setup complete!
echo ✅ You can now run: npm run dev
pause
