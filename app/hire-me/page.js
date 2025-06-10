'use client'

import { useEffect, useRef } from 'react'
import Navbar from '@/components/Navbar'

function WindCursorEffect() {
  const canvasRef = useRef(null)
  const particles = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let mouse = { x: -9999, y: -9999 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    const spawnParticle = (x, y) => {
      for (let i = 0; i < 2; i++) {
        particles.current.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          radius: Math.random() * 1.2 + 0.5,
          alpha: 0.5 + Math.random() * 0.3,
          life: 80,
        })
      }
    }

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      spawnParticle(mouse.x, mouse.y)

      particles.current.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        p.life -= 1
        p.alpha -= 0.008

        if (p.life <= 0 || p.alpha <= 0) {
          particles.current.splice(i, 1)
          return
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`
        ctx.shadowColor = `rgba(255,255,255,0.08)`
        ctx.shadowBlur = 10
        ctx.fill()
        ctx.closePath()
      })

      animationId = requestAnimationFrame(update)
    }

    const onMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener('mousemove', onMouseMove)
    update()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-[999] pointer-events-none"
    />
  )
}

export default function HireMe() {
  return (
    <>
      <Navbar />
      <WindCursorEffect />

      <main className="bg-[#0B0E11] text-white min-h-screen px-6 py-24">
        <section className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            🚀 Hire Me For Free: Let Me Prove I Can Deliver
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            I’m <span className="text-white font-semibold">Josiah Manzano</span>, a digital transformation specialist focused on merging AI, frontend design, and SEO. I’ll complete your first real task 100% free—just give me the challenge.
          </p>
        </section>

        <section className="mt-20 grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-400">What I Can Do for You</h2>
            <ul className="list-disc text-gray-300 pl-5 space-y-2">
              <li>✍️ SEO & Sales Copy: Content that ranks and converts</li>
              <li>🔎 Deep-Dive Research: Sharper business strategies</li>
              <li>🧑‍🏫 AI-at-Work Training: ChatGPT, custom GPTs, workflow automation</li>
              <li>🖥️ Front-End Development: Clean code, polished UX</li>
              <li>🤖 AI/OCR Tools: Slash busywork for teams and solopreneurs</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-teal-400">Proof I Deliver</h2>
            <ul className="list-disc text-gray-300 pl-5 space-y-2">
              <li>📈 ₱40M+ in ad sales for real estate brand</li>
              <li>💸 Cut resort costs 50% through automation & vendor negotiation</li>
              <li>📚 Turned 300+ SOPs into a searchable GPT portal in one day</li>
              <li>🌐 Built 2 interactive landing pages blending SEO + UX</li>
            </ul>
          </div>
        </section>

        <section className="mt-20 max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-bold text-teal-400">The Free Trial Challenge</h2>
          <p className="text-gray-300 text-lg">
            Give me one real task. I’ll complete it 100% free. If it nails your KPIs—awesome, let’s scale. If not, no worries—you walk away.
          </p>
        </section>

        <section className="mt-12 max-w-2xl mx-auto">
          <form className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-5 py-3 rounded-md bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <button
              type="submit"
              className="bg-teal-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-teal-700 transition"
            >
              Sign Me Up For Free
            </button>
          </form>
        </section>
      </main>
    </>
  )
}
