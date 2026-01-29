import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
};
export function ParticleEffect() {
  const [particles, setParticles] = useState<Particle[]>([]);
  useEffect(() => {
    // Generate random particles only on client side to avoid hydration mismatch
    const newParticles = Array.from({
      length: 20
    }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) =>
      <motion.div
        key={particle.id}
        className="absolute rounded-full bg-white/60 shadow-[0_0_10px_rgba(255,255,255,0.8)]"
        style={{
          left: `${particle.x}%`,
          top: `${particle.y}%`,
          width: particle.size,
          height: particle.size
        }}
        animate={{
          y: [0, -100],
          opacity: [0, 0.8, 0]
        }}
        transition={{
          duration: particle.duration,
          repeat: Infinity,
          delay: particle.delay,
          ease: 'linear'
        }} />

      )}
    </div>);

}