'use client'
import { useEffect, useRef } from 'react'

export default function WindCursorEffect() {
  const canvasRef = useRef(null)
  const particles = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let mouse = { x: -1000, y: -1000 }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resize()
    window.addEventListener('resize', resize)

    const spawnParticle = (x, y) => {
      for (let i = 0; i < 3; i++) {
        particles.current.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          radius: Math.random() * 1.5 + 0.5,
          life: 100,
          alpha: 0.4 + Math.random() * 0.3,
        })
      }
    }

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Add new particles near cursor
      spawnParticle(mouse.x, mouse.y)

      particles.current.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        p.life -= 1
        p.alpha -= 0.005
        if (p.life <= 0 || p.alpha <= 0) {
          particles.current.splice(i, 1)
          return
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${p.alpha})`
        ctx.shadowColor = 'rgba(255,255,255,0.1)'
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
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', resize)
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
