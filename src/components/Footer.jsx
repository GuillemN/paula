import React from 'react';
import { ArrowUp } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './SocialIcons';
import { contactInfo } from '../data/dancerData';
import { translations } from '../data/translations';

export default function Footer({ lang }) {
  const t = translations[lang] || translations.ca;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030304] border-t border-white/[0.04] py-10 px-6 sm:px-10 text-zinc-500 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-serif tracking-[0.2em] text-zinc-300 uppercase block text-sm">
            Paula Navarro
          </span>
          <span className="text-[10px] uppercase tracking-widest text-zinc-600">
            © {new Date().getFullYear()} • {t.footer.rights}
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={contactInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-200 transition-colors p-1"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>
          <a
            href={contactInfo.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-200 transition-colors p-1"
            aria-label="YouTube"
          >
            <YoutubeIcon className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-zinc-900 border border-white/10 hover:border-amber-400/40 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
