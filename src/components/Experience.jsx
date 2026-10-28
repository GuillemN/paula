import React, { useState } from 'react';
import { Briefcase, Download, Filter, Calendar, MapPin, Sparkles, CheckCircle, ExternalLink, ChevronRight } from 'lucide-react';
import { experienceTimeline } from '../data/dancerData';

export default function Experience({ onOpenCvModal }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { id: 'All', label: 'All Credits' },
    { id: 'Theater', label: 'Theater & Stage' },
    { id: 'TV & Film', label: 'TV & Film' },
    { id: 'Music Videos', label: 'Music Videos & Tours' }
  ];

  const filteredCredits = selectedCategory === 'All'
    ? experienceTimeline
    : experienceTimeline.filter(item => item.category === selectedCategory);

  const handleDownloadCvDirect = () => {
    // Generate and trigger download of a formatted professional casting resume text/html/print
    if (onOpenCvModal) {
      onOpenCvModal();
    } else {
      window.print();
    }
  };

  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-[#070709] border-t border-white/[0.06]">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[600px] bg-amber-500/[0.03] blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header with highly visible 'Download CV (PDF)' Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Milestones & Repertoire</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-white uppercase">
              Professional <span className="italic font-light text-zinc-400">Experience</span>
            </h2>
          </div>

          {/* Highly Visible 'Download CV (PDF)' Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadCvDirect}
              className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.18em] text-black bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 transition-all shadow-xl shadow-amber-500/20 hover:shadow-amber-500/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Download className="w-4 h-4 text-black group-hover:translate-y-0.5 transition-transform" />
              <span>Download CV (PDF)</span>
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="text-xs uppercase tracking-wider text-zinc-500 flex items-center gap-1.5 mr-2">
            <Filter className="w-3.5 h-3.5" /> Filter by:
          </span>
          {categories.map((cat) => {
            const count = cat.id === 'All'
              ? experienceTimeline.length
              : experienceTimeline.filter(item => item.category === cat.id).length;
            const isSelected = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-amber-400 text-black shadow-lg shadow-amber-500/20'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/5 hover:border-white/15'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                  isSelected ? 'bg-black/20 text-black' : 'bg-zinc-800 text-zinc-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Vertical Timeline */}
        <div className="relative mt-16">
          {/* Vertical Track Line */}
          <div className="absolute top-2 bottom-6 left-4 sm:left-1/2 sm:-translate-x-1/2 w-[2px] bg-gradient-to-b from-amber-400/80 via-zinc-800 to-transparent" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {filteredCredits.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } group`}
                >
                  {/* Timeline Node Center Marker */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#070709] border-2 border-amber-400 flex items-center justify-center z-10 shadow-lg shadow-amber-400/20 group-hover:scale-125 group-hover:border-amber-300 transition-transform">
                    <span className="w-2 h-2 rounded-full bg-amber-400 group-hover:animate-ping" />
                  </div>

                  {/* Content Card (Left or Right on desktop) */}
                  <div className="pl-12 sm:pl-0 sm:w-1/2 sm:px-8 w-full">
                    <div
                      className={`p-6 sm:p-7 rounded-2xl bg-zinc-950/80 border border-white/10 group-hover:border-amber-400/40 transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:shadow-black ${
                        isEven ? 'sm:text-left' : 'sm:text-left'
                      }`}
                    >
                      {/* Top Metadata */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider bg-amber-400/10 border border-amber-400/30 text-amber-300">
                          {item.year}
                        </span>
                        <span className="text-[11px] uppercase tracking-widest text-zinc-400 font-medium">
                          {item.categoryLabel}
                        </span>
                      </div>

                      {/* Production Title */}
                      <h3 className="font-serif text-xl sm:text-2xl text-white font-medium mb-1 group-hover:text-amber-200 transition-colors">
                        {item.title}
                      </h3>

                      {/* Role & Company */}
                      <div className="text-xs sm:text-sm font-medium text-amber-400/90 mb-1">
                        {item.role}
                      </div>
                      <div className="text-xs text-zinc-400 mb-4">
                        {item.company} <span className="text-zinc-600">•</span> {item.director}
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-1.5 border-t border-white/5 pt-3">
                        {item.highlights.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-zinc-400 font-light">
                            <span className="text-amber-400 mt-0.5">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CV Quick CTA Strip */}
        <div className="mt-16 p-6 rounded-2xl bg-zinc-900/40 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-serif text-lg text-white font-medium">
              Need a full chronological credit list with choreography references?
            </h4>
            <p className="text-xs text-zinc-400 mt-0.5">
              Complete casting résumé available in standardized theatrical and commercial format.
            </p>
          </div>
          <button
            onClick={handleDownloadCvDirect}
            className="px-5 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-xs uppercase tracking-wider font-semibold text-zinc-200 hover:text-white border border-white/10 flex items-center gap-2 cursor-pointer transition-colors flex-shrink-0"
          >
            <Download className="w-3.5 h-3.5 text-amber-400" />
            <span>Open & Print CV</span>
          </button>
        </div>

      </div>
    </section>
  );
}
