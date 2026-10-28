import React from 'react';
import { Download, Images, ArrowUpRight } from 'lucide-react';
import { visualWorks } from '../data/dancerData';
import { translations } from '../data/translations';

export default function Works({ lang, onOpenCv, onSelectProject }) {
  const t = translations[lang] || translations.ca;

  return (
    <section id="works" className="py-24 sm:py-32 bg-[#070709] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-white/10 gap-6 mb-12 sm:mb-16">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-400 block mb-2 font-medium">
              {t.works.tag}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-white uppercase">
              {t.works.title}
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2 font-light max-w-xl">
              {t.works.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenCv}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium text-zinc-200 hover:text-white bg-zinc-900 border border-white/10 hover:border-amber-400/50 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.timeline.downloadCv}</span>
            </button>
          </div>
        </div>

        {/* Visual Showcase: Large Photographic Work Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visualWorks.map((work) => (
            <div
              key={work.id}
              onClick={() => onSelectProject(work)}
              className="group relative rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 hover:border-amber-400/60 transition-all duration-500 cursor-pointer shadow-xl aspect-[4/3] transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-black"
            >
              {/* High-Resolution Performance Cover Image */}
              <img
                src={work.coverImage || work.images[0].url}
                alt={work.title}
                loading="lazy"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
              />

              {/* Minimal Dark Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent p-6 flex flex-col justify-between transition-opacity">
                
                {/* Top Badge: Year + Multiple Images Count Pill */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider bg-black/75 border border-white/15 text-zinc-300">
                    {work.year}
                  </span>
                  
                  {/* Badge showing multiple images */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-medium tracking-wider uppercase bg-black/75 backdrop-blur-md border border-amber-400/30 text-amber-300 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-black transition-all">
                    <Images className="w-3 h-3" />
                    <span>{work.images.length} {t.works.imagesCount}</span>
                  </span>
                </div>

                {/* Bottom Project Metadata */}
                <div>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-amber-300 font-medium block mb-1">
                    {work.role}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-medium group-hover:text-amber-200 transition-colors">
                    {work.title}
                  </h3>
                  <div className="flex items-center justify-between mt-1 pt-2 border-t border-white/10">
                    <p className="text-xs text-zinc-400 font-light line-clamp-1">
                      {work.venue}
                    </p>
                    <span className="text-[10px] uppercase tracking-widest text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5 flex-shrink-0">
                      <span>{t.works.viewProject}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
