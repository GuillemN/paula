import React, { useState } from 'react';
import { Briefcase, Download, Filter, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { cvTimelineData } from '../data/dancerData';
import { translations } from '../data/translations';

export default function CvTimeline({ lang, onOpenCv }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const t = translations[lang] || translations.ca;

  const filters = [
    { id: 'all', label: t.timeline.all },
    { id: 'dance', label: t.timeline.dance },
    { id: 'teaching', label: t.timeline.teaching },
    { id: 'coordination', label: t.timeline.coordination }
  ];

  const filtered = activeFilter === 'all'
    ? cvTimelineData
    : cvTimelineData.filter((item) => item.category === activeFilter);

  return (
    <section id="timeline" className="py-24 sm:py-32 bg-[#060608] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-white/10 gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-400 block mb-2 font-medium">
              {t.timeline.tag}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-white uppercase">
              {t.timeline.title}
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-2 font-light max-w-xl">
              {t.timeline.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenCv}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-black bg-amber-400 hover:bg-amber-300 transition-all cursor-pointer shadow-lg shadow-amber-400/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.timeline.downloadCv}</span>
            </button>
          </div>
        </div>

        {/* Timeline Filters */}
        <div className="mt-8 mb-16 flex flex-wrap gap-2">
          {filters.map((f) => {
            const isSelected = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.2em] transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-amber-400 text-black font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Vertical Timeline Component */}
        <div className="relative">
          {/* Vertical Track Line */}
          <div className="absolute top-4 bottom-8 left-4 sm:left-1/2 sm:-translate-x-1/2 w-[2px] bg-gradient-to-b from-amber-400 via-zinc-800 to-transparent" />

          <div className="space-y-12 sm:space-y-16">
            {filtered.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } group`}
                >
                  {/* Timeline Center Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#060608] border-2 border-amber-400 flex items-center justify-center z-10 shadow-lg shadow-amber-400/20 group-hover:scale-110 transition-transform">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  </div>

                  {/* Timeline Content Card */}
                  <div className="pl-12 sm:pl-0 sm:w-1/2 sm:px-10 w-full">
                    <div className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-white/10 group-hover:border-amber-400/40 transition-all duration-300 shadow-xl">
                      
                      {/* Top Badges: Year & Category */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider bg-amber-400/10 border border-amber-400/30 text-amber-300">
                          {item.year}
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-zinc-400">
                          {item.categoryBadge}
                        </span>
                      </div>

                      {/* Role Title */}
                      <h3 className="font-serif text-xl sm:text-2xl text-white font-medium mb-1 group-hover:text-amber-200 transition-colors">
                        {item.title}
                      </h3>

                      {/* Organization / Location */}
                      <div className="text-xs text-amber-400/90 font-medium mb-4 flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-amber-400 flex-shrink-0" />
                        <span>{item.organization}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Skills & Competencies Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-0.5 rounded-md text-[10px] bg-zinc-900 border border-white/5 text-zinc-400"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-zinc-950/70 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-serif text-lg text-white font-medium">
              Vols el currículum complet en format document per a presentació?
            </h4>
            <p className="text-xs text-zinc-400 mt-1 font-light">
              Inclou dades de contacte, referències de teatres, casinos i hotels.
            </p>
          </div>
          <button
            onClick={onOpenCv}
            className="px-6 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-white/10 transition-colors cursor-pointer flex-shrink-0 flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5 text-amber-400" />
            <span>Obrir & Imprimir CV</span>
          </button>
        </div>

      </div>
    </section>
  );
}
