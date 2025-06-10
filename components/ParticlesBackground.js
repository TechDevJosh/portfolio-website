'use client'

import Particles from 'react-tsparticles'
import { useCallback } from 'react'
import { loadBasic } from 'tsparticles-basic'
import { Engine } from 'tsparticles-engine'

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadBasic(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: '#0B0E11' },
        fpsLimit: 60,
        interactivity: {
          events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
          modes: { repulse: { distance: 100, duration: 0.4 } }
        },
        particles: {
          color: { value: '#00ffff' },
          links: { enable: true, distance: 150, color: '#00ffff', opacity: 0.4, width: 1 },
          move: { enable: true, speed: 1, direction: 'none', outModes: { default: 'bounce' } },
          number: { value: 40 },
          opacity: { value: 0.5 },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 3 } }
        },
        detectRetina: true
      }}
    />
  )
}
