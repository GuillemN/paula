import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Sparkles } from 'lucide-react';
import { translations } from '../data/translations';

export default function ProjectModal({ project, isOpen, onClose, lang = 'ca' }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const t = translations[lang] || translations.ca;

  // Reset index when opening a new project
  useEffect(() => {
    if (project) {
      setActiveImageIndex(0);
    }
  }, [project]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen || !project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : project.images.length - 1));
      }
      if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev < project.images.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, project, onClose]);

  if (!isOpen || !project) return null;

  const currentImage = project.images[activeImageIndex] || {
    url: project.coverImage,
    caption: project.title,
    photographer: ''
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : project.images.length - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev < project.images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-6 md:p-8 animate-in fade-in duration-300"
    >
      {/* Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-[#090a0f] border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-black/60 backdrop-blur-md">
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-semibold">
                {project.role} • {project.year}
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-[10px] font-mono tracking-wider text-zinc-400">
                {activeImageIndex + 1} / {project.images.length} {t.works.imagesCount}
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
              {project.title}
            </h3>
            <p className="text-xs text-zinc-400 font-light mt-0.5">
              {project.venue} {project.director && `• ${project.director}`}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer ml-4 flex-shrink-0"
            aria-label={t.works.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image Stage */}
        <div className="relative flex-1 min-h-[350px] sm:min-h-[460px] bg-black flex items-center justify-center overflow-hidden group">
          {/* Active Photo */}
          <img
            key={currentImage.url}
            src={currentImage.url}
            alt={currentImage.caption || project.title}
            className="max-h-[55vh] sm:max-h-[60vh] max-w-full w-auto object-contain select-none animate-in fade-in duration-200"
          />

          {/* Nav Arrow: Left */}
          {project.images.length > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white hover:text-amber-300 transition-all cursor-pointer opacity-80 hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Nav Arrow: Right */}
          {project.images.length > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white hover:text-amber-300 transition-all cursor-pointer opacity-80 hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Photo Caption Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between text-xs text-zinc-300">
            <span className="font-light tracking-wide">{currentImage.caption}</span>
            {currentImage.photographer && (
              <span className="flex items-center gap-1.5 text-zinc-400 text-[11px]">
                <Camera className="w-3.5 h-3.5 text-zinc-500" />
                <span>{currentImage.photographer}</span>
              </span>
            )}
          </div>
        </div>

        {/* Multi-Image Thumbnail Gallery Strip */}
        <div className="p-4 sm:p-5 bg-zinc-950/90 border-t border-white/10">
          <div className="flex items-center gap-3 overflow-x-auto pb-1 no-scrollbar">
            {project.images.map((img, idx) => {
              const isSelected = activeImageIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative flex-shrink-0 w-20 h-14 sm:w-28 sm:h-18 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    isSelected
                      ? 'border-amber-400 ring-2 ring-amber-400/30 scale-105'
                      : 'border-white/10 opacity-50 hover:opacity-100 hover:border-white/30'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.caption || `Photo ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {isSelected && (
                    <div className="absolute inset-0 bg-amber-400/10" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
