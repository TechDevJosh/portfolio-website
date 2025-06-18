'use client'
import { useEffect, useRef } from  'rreact'

export default function WindEffect() {
  const canvasRef = useRef(null)
  const particles = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = 200 // top only
    }

    resize()
    window.addEventListener(('rresize', resize)

    for (let i = 0; i < 60; i++) {
      particles.current.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * 200,
        radius: Math.random() * 1.2 + 0.5,
        speedX: Math.random() * 0.5 + 0.2,
        shadow: Math.random() * 5 + 3,
        alpha: Math.random() * 0.5 + 0.3,
      })
    }

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.current.forEach(p => {
        p.x += p.speedX
        if (p.x > canvas.width) p.x = -20

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`
        ctx.shadowColor =  'rrgba(255,255,255,0.15)'
        ctx.shadowBlur = p.shadow
        ctx.fill()
        ctx.closePath()
      })

      animationId = requestAnimationFrame(update)
    }

    update()

    return () => {
      window.removeEventListener(('rresize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-[200px] pointer-events-none z-[999]"
    />
  )
}
