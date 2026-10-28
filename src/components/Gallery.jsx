import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { galleryItems } from '../data/dancerData';
import { translations } from '../data/translations';
import LightboxModal from './LightboxModal';

export default function Gallery({ lang, onSelectImage }) {
  const [activeTab, setActiveTab] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const t = translations[lang] || translations.ca;

  const tabs = [
    { id: 'all', label: t.gallery.tabs.all },
    { id: 'headshots', label: t.gallery.tabs.headshots },
    { id: 'action', label: t.gallery.tabs.action }
  ];

  const filtered = activeTab === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeTab);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filtered.length - 1));
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev < filtered.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-[#060608] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Header & Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-12 border-b border-white/10 gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-400 block mb-2 font-medium">
              {t.gallery.tag}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white uppercase">
              {t.gallery.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {tabs.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-1.5 rounded-full text-[11px] uppercase tracking-[0.2em] transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-amber-400 text-black font-semibold shadow-sm'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Masonry / Variable Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden bg-zinc-950 border border-white/10 hover:border-amber-400/40 cursor-pointer break-inside-avoid shadow-xl transition-all duration-500"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                loading="lazy"
                className="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Minimal Scrim on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif text-lg text-white font-medium">
                      {item.title}
                    </h4>
                    {item.photographer && (
                      <span className="text-[10px] text-zinc-400 uppercase tracking-widest block mt-0.5">
                        {item.photographer}
                      </span>
                    )}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-black/60 border border-white/20 text-amber-300 flex items-center justify-center">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxIndex !== null}
        photo={lightboxIndex !== null ? filtered[lightboxIndex] : null}
        onClose={() => setLightboxIndex(null)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}
