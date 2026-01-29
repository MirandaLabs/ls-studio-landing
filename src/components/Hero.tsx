import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-32 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}
          className="flex justify-center mb-6">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow-sm">
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
            <span className="text-sm font-medium text-rose-900/80 tracking-wide uppercase">
              Bem-vinda ao seu refúgio
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: 'easeOut'
          }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-rose-950 mb-8 leading-[1.1] tracking-tight">

          Onde Sonhos <br />
          <span className="italic text-rose-400">Florescem</span>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: 'easeOut'
          }}
          className="text-lg md:text-xl text-rose-900/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light">

          Descubra um espaço dedicado à beleza, ao autocuidado e à transformação
          interior. Cada detalhe foi pensado para nutrir sua alma e realçar sua
          luz natural.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: 'easeOut'
          }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <motion.button
            whileHover={{
              scale: 1.02
            }}
            whileTap={{
              scale: 0.98
            }}
            className="group relative px-8 py-4 bg-gradient-to-r from-rose-400 via-pink-400 to-rose-400 bg-[length:200%_100%] hover:bg-[100%_0] transition-all duration-500 rounded-full text-white font-medium text-lg shadow-[0_10px_30px_-10px_rgba(251,113,133,0.6)] flex items-center gap-2">

            Comece Sua Jornada
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.02,
              backgroundColor: 'rgba(255, 255, 255, 0.6)'
            }}
            whileTap={{
              scale: 0.98
            }}
            className="px-8 py-4 bg-white/40 backdrop-blur-sm border border-white/60 rounded-full text-rose-900 font-medium text-lg hover:shadow-lg transition-all duration-300">

            Nossa História
          </motion.button>
        </motion.div>
      </div>
    </section>);

}