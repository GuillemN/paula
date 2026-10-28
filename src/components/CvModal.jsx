import React, { useEffect } from 'react';
import { X, Printer, Download, CheckCircle2 } from 'lucide-react';
import { translations } from '../data/translations';
import { cvTimelineData } from '../data/dancerData';

export default function CvModal({ isOpen, onClose, lang = 'ca' }) {
  const t = translations[lang] || translations.ca;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-zinc-950 border border-white/15 rounded-3xl overflow-hidden shadow-2xl my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Actions bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between p-4 sm:p-6 bg-zinc-950/90 backdrop-blur-md border-b border-white/10">
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-zinc-300">
            Curriculum Vitae — Paula Navarro
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold bg-amber-400 hover:bg-amber-300 text-black flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PDF / Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Content */}
        <div className="p-8 sm:p-12 space-y-8 bg-[#090a0f] text-zinc-200 print:p-0 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-white/15 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 print:border-black">
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl uppercase tracking-[0.16em] text-white print:text-black">
                Paula Navarro
              </h1>
              <p className="text-xs uppercase tracking-[0.22em] text-amber-400 print:text-zinc-800 mt-1">
                {t.hero.subtitle}
              </p>
            </div>
            <div className="text-xs text-zinc-400 print:text-zinc-700 space-y-0.5 sm:text-right">
              <div>booking@paulanavarro.dance</div>
              <div>Tel: +34 622 849 210</div>
              <div>Barcelona • Costa Brava • Illes Balears</div>
            </div>
          </div>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-zinc-900/60 border border-white/5 print:bg-zinc-100 print:border-black text-xs">
            <div>
              <span className="block text-[10px] uppercase text-zinc-500 print:text-zinc-600">{t.about.stats.height}</span>
              <span className="font-medium text-zinc-200 print:text-black">1.73m (5'8")</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-zinc-500 print:text-zinc-600">{t.about.stats.hair}</span>
              <span className="font-medium text-zinc-200 print:text-black">{t.about.statsValues.hair}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-zinc-500 print:text-zinc-600">{t.about.stats.eyes}</span>
              <span className="font-medium text-zinc-200 print:text-black">{t.about.statsValues.eyes}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase text-zinc-500 print:text-zinc-600">{t.about.stats.shoe}</span>
              <span className="font-medium text-zinc-200 print:text-black">39 EU (8.5 US)</span>
            </div>
          </div>

          {/* Timeline Experience */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold border-b border-white/10 pb-2 print:border-black print:text-black">
              Experiència Professional
            </h3>
            <div className="space-y-4 text-xs">
              {cvTimelineData.map((item) => (
                <div key={item.id} className="border-b border-white/5 pb-3 last:border-0 print:border-zinc-300">
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-semibold text-zinc-100 print:text-black text-sm">
                      {item.title} — <span className="text-amber-300 print:text-zinc-800 font-normal">{item.organization}</span>
                    </span>
                    <span className="font-mono text-zinc-400 print:text-zinc-600 text-[11px]">{item.year}</span>
                  </div>
                  <p className="text-zinc-400 print:text-zinc-700 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Training */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold border-b border-white/10 pb-2 print:border-black print:text-black">
              Formació Superior & Titulacions
            </h3>
            <p className="text-xs text-zinc-400 print:text-zinc-700 leading-relaxed">
              <strong>Grau Superior en Dansa Contemporània & Pedagogia</strong> — Conservatori Superior de Dansa (Institut del Teatre de Barcelona).<br />
              <strong>Intensius de Dansa & Direcció Escènica</strong> — Paris Marais Repertoire, Batsheva Intensive (Gaga Movement).<br />
              <strong>Idiomes:</strong> Català (Natiu), Castellà (Natiu), Anglès (Fluid). Carnet de conduir B vigent.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
