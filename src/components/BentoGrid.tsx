import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Flower, Heart, Star, Sun, Moon } from 'lucide-react';
const features = [
{
  title: 'Beleza Natural',
  description:
  'Realçamos o que você tem de melhor com técnicas suaves e produtos orgânicos.',
  icon: Flower,
  colSpan: 'md:col-span-2',
  bg: 'bg-rose-50/50'
},
{
  title: 'Rituais de Calma',
  description: 'Momentos de paz em meio ao caos.',
  icon: Moon,
  colSpan: 'md:col-span-1',
  bg: 'bg-champagne-100/50'
},
{
  title: 'Energia Renovada',
  description: 'Terapias que revitalizam corpo e mente.',
  icon: Sun,
  colSpan: 'md:col-span-1',
  bg: 'bg-blush-100/50'
},
{
  title: 'Conexão Interior',
  description:
  'Um espaço seguro para você se reencontrar e florescer em sua própria essência.',
  icon: Heart,
  colSpan: 'md:col-span-2',
  bg: 'bg-white/40'
}];

const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const item = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};
export function BentoGrid() {
  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="font-serif text-4xl md:text-5xl text-rose-950 mb-4">

            Nossos Encantos
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.1
            }}
            className="text-rose-900/60 max-w-2xl mx-auto text-lg">

            Cada serviço é um convite para desacelerar e celebrar a sua essência
            única.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: '-100px'
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {features.map((feature, idx) =>
          <motion.div
            key={idx}
            variants={item}
            whileHover={{
              y: -5,
              transition: {
                duration: 0.2
              }
            }}
            className={`${feature.colSpan} group relative overflow-hidden rounded-3xl border border-white/60 backdrop-blur-xl shadow-xl shadow-rose-100/20 p-8 flex flex-col justify-between h-64 transition-colors duration-300 hover:bg-white/60 ${feature.bg}`}>

              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-30 transition-opacity transform group-hover:scale-110 duration-500">
                <feature.icon size={120} strokeWidth={0.5} />
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/80 flex items-center justify-center mb-6 shadow-sm text-rose-400">
                  <feature.icon size={24} />
                </div>
                <h3 className="font-serif text-2xl text-rose-950 mb-2">
                  {feature.title}
                </h3>
                <p className="text-rose-900/70 font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

}