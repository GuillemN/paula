import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Tag, Maximize2 } from 'lucide-react';

export default function LightboxModal({ isOpen, photo, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-300 p-4 sm:p-8">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 text-zinc-300 hover:text-white transition-all cursor-pointer"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      <button
        onClick={onPrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 text-zinc-300 hover:text-white transition-all cursor-pointer hidden sm:flex items-center justify-center"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 text-zinc-300 hover:text-white transition-all cursor-pointer hidden sm:flex items-center justify-center"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center">
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-950 max-h-[75vh] flex items-center justify-center">
          <img
            src={photo.imageUrl}
            alt={photo.title}
            className="max-h-[75vh] max-w-full w-auto object-contain select-none"
          />
        </div>

        {/* Image Metadata Bar */}
        <div className="mt-4 w-full flex flex-col sm:flex-row items-center justify-between text-zinc-300 text-xs px-2 gap-3">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-semibold block">
              {photo.category}
            </span>
            <h4 className="font-serif text-lg text-white font-medium">
              {photo.title}
            </h4>
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            {photo.photographer && (
              <span className="flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5 text-zinc-500" />
                <span>Photo: {photo.photographer}</span>
              </span>
            )}
            {photo.production && (
              <span className="hidden md:inline text-zinc-500">
                • {photo.production}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
