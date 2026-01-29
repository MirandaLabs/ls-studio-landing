import React from 'react';
import { Instagram, Facebook, Mail } from 'lucide-react';
export function Footer() {
  return (
    <footer className="relative z-10 pt-20 pb-10 px-6 border-t border-white/50 bg-white/20 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="font-serif text-2xl text-rose-950 mb-2">
            LS Studio de Beleza
          </h3>
          <p className="text-rose-900/60 text-sm">
            © 2024 Todos os direitos reservados.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="p-2 rounded-full bg-white/50 text-rose-400 hover:bg-rose-400 hover:text-white transition-colors duration-300">

            <Instagram size={20} />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-white/50 text-rose-400 hover:bg-rose-400 hover:text-white transition-colors duration-300">

            <Facebook size={20} />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-white/50 text-rose-400 hover:bg-rose-400 hover:text-white transition-colors duration-300">

            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>);

}