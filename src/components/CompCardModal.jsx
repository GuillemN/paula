import React, { useEffect } from 'react';
import { X, Printer, Download, Sparkles, Phone, Mail, Globe, MapPin } from 'lucide-react';
import { dancerProfile, castingStats, representationData } from '../data/dancerData';

export default function CompCardModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 overflow-y-auto">
      {/* Modal Wrapper */}
      <div className="relative w-full max-w-4xl bg-zinc-950 border border-white/15 rounded-3xl overflow-hidden shadow-2xl my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Floating Actions Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between p-4 sm:p-6 bg-zinc-950/90 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-zinc-200">
              Official Casting Comp Card (Z-Card)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold bg-amber-400 hover:bg-amber-300 text-black flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close comp card"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Comp Card Document Area */}
        <div className="p-6 sm:p-10 space-y-8 bg-[#090a0f] text-zinc-100 print:p-0 print:bg-white print:text-black">
          
          {/* Header Strip */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-white/15 pb-6 gap-4 print:border-black">
            <div>
              <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-[0.16em] uppercase text-white print:text-black">
                {dancerProfile.fullName}
              </h1>
              <p className="font-sans text-xs sm:text-sm tracking-[0.25em] uppercase text-amber-400 font-medium print:text-zinc-800 mt-1">
                {dancerProfile.headline}
              </p>
            </div>
            <div className="text-right text-xs text-zinc-400 print:text-zinc-700">
              <span className="block font-medium text-zinc-200 print:text-black">Unions: SAG-AFTRA • Equity UK</span>
              <span>Passports: Valid US & EU (Schengen)</span>
            </div>
          </div>

          {/* Grid: Main Headshot + 3 Action/Editorial Insets */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Main Headshot (5 Cols) */}
            <div className="md:col-span-5 rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 aspect-[3/4]">
              <img
                src="/images/headshot_main.jpg"
                alt="Headshot Casting"
                className="w-full h-full object-cover"
              />
            </div>

            {/* 3 Secondary Shots (7 Cols) */}
            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-white/10 bg-zinc-900 aspect-[4/3] sm:col-span-2">
                <img
                  src="/images/hero_stage.jpg"
                  alt="Stage Jeté"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10 bg-zinc-900 aspect-[4/3]">
                <img
                  src="/images/action_stage.jpg"
                  alt="Floorwork Arch"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-white/10 bg-zinc-900 aspect-[4/3]">
                <img
                  src="/images/editorial_portrait.jpg"
                  alt="Editorial Drapery"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-zinc-950 border border-white/10 print:border-black print:bg-zinc-100">
            {castingStats.physical.slice(0, 4).map((stat, i) => (
              <div key={i} className="text-center sm:text-left">
                <span className="block text-[10px] uppercase tracking-widest text-zinc-500 print:text-zinc-600">
                  {stat.label}
                </span>
                <span className="font-serif text-sm sm:text-base text-zinc-100 font-semibold print:text-black">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* Representation Footer on Card */}
          <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 print:text-black">
            <div>
              <span className="font-semibold text-zinc-200 print:text-black block">
                Representation: {representationData.agency}
              </span>
              <span>Agents: Marcus Vance (London) • Eleanor Sterling (Los Angeles)</span>
            </div>
            <div className="text-right sm:text-right">
              <span className="font-medium text-amber-300 print:text-black block">
                {representationData.directContact.bookingInquiries}
              </span>
              <span>{representationData.offices[0].phone}</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
