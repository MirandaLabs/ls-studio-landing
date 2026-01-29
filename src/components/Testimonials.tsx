import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
const testimonials = [
{
  text: 'Nunca me senti tão acolhida. É como se cada detalhe fosse pensado para abraçar a alma. Saí me sentindo uma nova mulher.',
  author: 'Isabella M.',
  role: 'Cliente desde 2023'
},
{
  text: 'Um refúgio de paz no meio da cidade. A delicadeza do atendimento e a qualidade dos serviços são incomparáveis.',
  author: 'Gabriela S.',
  role: 'Noiva'
},
{
  text: 'Mais que estética, é uma experiência de amor próprio. O ambiente, o cheiro, a música... tudo é poesia.',
  author: 'Mariana C.',
  role: 'Empresária'
}];

export function Testimonials() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{
            once: true
          }}
          className="text-center mb-16">

          <h2 className="font-serif text-4xl md:text-5xl text-rose-950 mb-4">
            Cartas de Amor
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: i * 0.2
            }}
            className="relative p-8 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(251,113,133,0.1)] transition-all duration-500 group">

              <Quote className="absolute top-6 left-6 w-8 h-8 text-rose-200 rotate-180" />

              <div className="pt-8 pb-6">
                <p className="font-serif italic text-xl md:text-2xl text-rose-900/80 leading-relaxed">
                  "{t.text}"
                </p>
              </div>

              <div className="flex items-center gap-3 border-t border-rose-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-200 to-champagne-200 flex items-center justify-center text-rose-500 font-serif font-bold text-lg">
                  {t.author[0]}
                </div>
                <div>
                  <p className="font-medium text-rose-950">{t.author}</p>
                  <p className="text-xs text-rose-400 uppercase tracking-wider">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}