@echo off
echo ✅ Fixing JosiahPortfolio...

:: 1. Restore Navbar.js
echo Creating components/Navbar.js...
mkdir components 2>nul
(
echo 'use client'
echo.
echo export default function Navbar() {
echo   return (
echo     ^<nav className="w-full px-6 py-4 fixed top-0 left-0 z-[1000] bg-[#0B0E11] border-b border-gray-800 flex justify-center gap-6 text-white"^>
echo       ^<a href="#home" className="hover:text-teal-400 transition"^>Home^</a^>
echo       ^<a href="#services" className="hover:text-teal-400 transition"^>Services^</a^>
echo       ^<a href="#proof" className="hover:text-teal-400 transition"^>Proof^</a^>
echo       ^<a href="#contact" className="hover:text-teal-400 transition"^>Contact^</a^>
echo     ^</nav^>
echo   )
echo }
) > components/Navbar.js

:: 2. Restore ParticlesBackground.js
echo Creating components/ParticlesBackground.js...
(
echo 'use client'
echo import { useCallback } from 'react'
echo import Particles from 'react-tsparticles'
echo import { loadFull } from 'tsparticles'
echo.
echo export default function ParticlesBackground() {
echo   const particlesInit = useCallback(async engine => {
echo     await loadFull(engine)
echo   }, [])
echo.
echo   return (
echo     ^<Particles
echo       id="tsparticles"
echo       init={particlesInit}
echo       options={{
echo         fullScreen: { enable: true, zIndex: 0 },
echo         background: { color: "#0B0E11" },
echo         particles: {
echo           number: { value: 50 },
echo           color: { value: "#00ffff" },
echo           links: { enable: true, distance: 120, color: "#00ffff" },
echo           move: { enable: true, speed: 1 },
echo           size: { value: 2 },
echo           opacity: { value: 0.5 }
echo         },
echo         interactivity: {
echo           events: { onHover: { enable: true, mode: "repulse" } },
echo           modes: { repulse: { distance: 100 } }
echo         }
echo       }}
echo     /^>
echo   )
echo }
) > components/ParticlesBackground.js

:: 3. Restore app/page.js
echo Creating app/page.js...
mkdir app 2>nul
(
echo 'use client'
echo.
echo import Navbar from '@/components/Navbar'
echo import ParticlesBackground from '@/components/ParticlesBackground'
echo.
echo export default function Home() {
echo   return (
echo     ^<>
echo       ^<Navbar /^>
echo       ^<ParticlesBackground /^>
echo.
echo       ^<main className="relative z-10 flex flex-col items-center justify-center text-white px-6"^>
echo.
echo         ^<section id="home" className="min-h-screen flex flex-col justify-center items-center text-center"^>
echo           ^<h1 className="text-5xl font-bold mb-4"^>Welcome to My Portfolio^</h1^>
echo           ^<p className="text-lg text-gray-300 mb-6"^>Helping businesses automate, convert, and scale.^</p^>
echo           ^<a href="#contact" className="bg-teal-600 px-6 py-3 rounded text-white hover:bg-teal-700 transition"^>🚀 Start with Free Work^</a^>
echo         ^</section^>
echo.
echo         ^<section id="services" className="py-32 text-center"^>
echo           ^<h2 className="text-3xl font-bold mb-4"^>Services^</h2^>
echo           ^<p className="text-gray-300"^>AI automation, SEO writing, GPT workflows, and more.^</p^>
echo         ^</section^>
echo.
echo         ^<section id="proof" className="py-32 text-center"^>
echo           ^<h2 className="text-3xl font-bold mb-4"^>Proof of Work^</h2^>
echo           ^<p className="text-gray-300"^>Over ₱40M in ad revenue generated. 300+ docs automated.^</p^>
echo         ^</section^>
echo.
echo         ^<section id="contact" className="py-32 text-center"^>
echo           ^<h2 className="text-3xl font-bold mb-4"^>Get Free Work^</h2^>
echo           ^<form className="max-w-md mx-auto flex flex-col gap-4"^>
echo             ^<input type="email" placeholder="Your email" className="p-3 rounded bg-gray-800 text-white border border-gray-700" /^>
echo             ^<button className="bg-teal-600 text-white px-4 py-3 rounded hover:bg-teal-700"^>Submit^</button^>
echo           ^</form^>
echo         ^</section^>
echo.
echo       ^</main^>
echo     ^</^>
echo   )
echo }
) > app/page.js

:: 4. Install particle libraries (skip if already done)
echo Installing required dependencies...
call npm install react-tsparticles tsparticles

echo ✅ Portfolio reset complete. Run: npm run dev
pause
