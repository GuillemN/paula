import React from 'react';
import { ArrowDown, Calendar, FileText } from 'lucide-react';
import { translations } from '../data/translations';

export default function Hero({ lang }) {
  const t = translations[lang] || translations.ca;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#070709]"
    >
      {/* Background Visual Layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_stage.jpg"
          alt="Paula Navarro Dance"
          className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-[1.08] transition-transform duration-[10000ms] scale-100 hover:scale-105"
        />
        {/* Subtle Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-[#070709]/70" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
        
        {/* Minimal Availability Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-300">
            {t.hero.status}
          </span>
        </div>

        {/* Striking Minimalist Name */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-[0.16em] uppercase text-white leading-none mb-6">
          Paula Navarro
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-xs sm:text-sm md:text-base font-light tracking-[0.3em] uppercase text-zinc-300 mb-12 max-w-xl">
          {t.hero.subtitle}
        </p>

        {/* Minimalist Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => scrollTo('works')}
            className="px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.25em] text-black font-semibold bg-amber-400 hover:bg-amber-300 transition-all cursor-pointer shadow-lg shadow-amber-400/20"
          >
            {t.hero.viewWorks}
          </button>
          <button
            onClick={() => scrollTo('timeline')}
            className="px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.25em] text-zinc-200 hover:text-white bg-black/60 hover:bg-black/90 border border-white/20 hover:border-amber-400/50 backdrop-blur-md transition-all cursor-pointer flex items-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.hero.viewCv}</span>
          </button>
        </div>

      </div>

      {/* Minimal Scroll Arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() => scrollTo('works')}
          className="text-zinc-400 hover:text-amber-400 transition-colors p-2 cursor-pointer"
          aria-label="Scroll"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
