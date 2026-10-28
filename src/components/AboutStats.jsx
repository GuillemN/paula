import React, { useState } from 'react';
import { Copy, Check, Download, ArrowUpRight } from 'lucide-react';
import { translations } from '../data/translations';

export default function AboutStats({ lang, onOpenCv }) {
  const [copied, setCopied] = useState(false);
  const t = translations[lang] || translations.ca;

  const copyStats = () => {
    const text = `Paula Navarro — Casting Specs
${t.about.stats.height}: 1.73 m (5'8")
${t.about.stats.hair}: ${t.about.statsValues.hair}
${t.about.stats.eyes}: ${t.about.statsValues.eyes}
${t.about.stats.shoe}: 39 EU (8.5 US)
${t.about.stats.unions}: SAG-AFTRA Eligible • Equity UK
${t.about.stats.passports}: ${t.about.statsValues.passports}
${t.about.stats.location}: ${t.about.statsValues.location}
Booking: booking@paulanavarro.dance`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const statsList = [
    { label: t.about.stats.height, value: "1.73 m / 5'8\"" },
    { label: t.about.stats.hair, value: t.about.statsValues.hair },
    { label: t.about.stats.eyes, value: t.about.statsValues.eyes },
    { label: t.about.stats.shoe, value: "39 EU / 8.5 US" },
    { label: t.about.stats.unions, value: "SAG-AFTRA • Equity" },
    { label: t.about.stats.location, value: t.about.statsValues.location }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#070709] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Minimal Header */}
        <div className="pb-8 border-b border-white/10 mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] text-amber-400 block mb-2 font-medium">
            {t.about.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white uppercase">
            {t.about.title}
          </h2>
        </div>

        {/* Minimal Two-Column / Two-Block Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Striking Casting Headshot (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 aspect-[3/4] max-w-md mx-auto shadow-2xl">
              <img
                src="/images/headshot_main.jpg"
                alt="Paula Navarro Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Poetic Statement & Compact Casting Specs (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            
            {/* One concise poetic statement */}
            <blockquote className="font-serif text-2xl sm:text-3xl text-zinc-200 font-light leading-relaxed italic">
              "{t.about.statement}"
            </blockquote>

            {/* Stylized Minimalist Casting Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {statsList.map((stat, idx) => (
                <div key={idx}>
                  <span className="block text-[10px] uppercase tracking-[0.25em] text-zinc-500 mb-1">
                    {stat.label}
                  </span>
                  <span className="font-serif text-base sm:text-lg text-zinc-200 font-medium">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Actions: Copy Specs & Download CV */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={copyStats}
                className="px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-amber-400/50 text-zinc-200 hover:text-white transition-all cursor-pointer flex items-center gap-2"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5 text-amber-400" />}
                <span>{copied ? t.about.copied : t.about.copyStats}</span>
              </button>

              <button
                onClick={onOpenCv}
                className="px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium text-amber-300 hover:text-amber-200 bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 transition-all cursor-pointer flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.works.downloadCv}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
