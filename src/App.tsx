import React from 'react';
import { Hero } from './components/Hero';
import { BentoGrid } from './components/BentoGrid';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { FloatingShapes } from './components/FloatingShapes';
import { ParticleEffect } from './components/ParticleEffect';
export function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-white via-blush-100 to-champagne-100 font-sans selection:bg-rose-200 selection:text-rose-900">
      {/* Background Elements */}
      <FloatingShapes />
      <ParticleEffect />

      {/* Main Content */}
      <main className="relative z-10">
        <nav className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center max-w-7xl mx-auto z-50">
          <span className="font-serif text-2xl font-medium text-rose-950 tracking-tight">
            LS Studio de Beleza
          </span>
          <button className="px-5 py-2 rounded-full bg-white/30 backdrop-blur-sm border border-white/50 text-rose-900 text-sm font-medium hover:bg-white/50 transition-colors">
            Contato
          </button>
        </nav>

        <Hero />
        <BentoGrid />
        <Testimonials />
      </main>

      <Footer />
    </div>);

}