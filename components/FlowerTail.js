'use client';
import { useEffect, useRef } from 'react';

export default function FlowerTrail() {
  const canvasRef = useRef(null);
  const flowers = useRef([]);
  const images = useRef([]);
  const lastSpawn = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const flowerSet = ['🌸', '🌼', '🌷', '🌻'];
    flowerSet.forEach((f) => {
      const img = document.createElement('canvas');
      img.width = 32;
      img.height = 32;
      const ctx2 = img.getContext('2d');
      if (ctx2) {
        ctx2.font = '28px serif';
        ctx2.fillText(f, 0, 24);
        images.current.push(img);
      }
    });

    const createFlower = (x, y) => {
      if (images.current.length === 0) return;
      flowers.current.push({
        x,
        y,
        opacity: 1,
        size: Math.random() * 0.3 + 0.4, // smaller
        speedY: Math.random() * 0.3 + 0.2, // slower float
        image:
          images.current[Math.floor(Math.random() * images.current.length)],
      });
    };

    const update = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      flowers.current.forEach((f, i) => {
        f.y -= f.speedY;
        f.opacity -= 0.008;
        if (f.opacity <= 0) {
          flowers.current.splice(i, 1);
        } else {
          ctx.globalAlpha = f.opacity;
          ctx.drawImage(f.image, f.x, f.y, 24 * f.size, 24 * f.size);
          ctx.globalAlpha = 1;
        }
      });
      animationId = requestAnimationFrame(update);
    };

    const onMove = (e) => {
      const now = Date.now();
      if (now - lastSpawn.current > 40) {
        createFlower(e.clientX - 12, e.clientY - 12);
        lastSpawn.current = now;
      }
    };

    window.addEventListener('mousemove', onMove);
    update();

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none z-[-1]"
    />
  );
}
