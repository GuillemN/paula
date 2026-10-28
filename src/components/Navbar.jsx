import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';
import { translations } from '../data/translations';

export default function Navbar({ lang, setLang, onOpenCv }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang] || translations.ca;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.works, href: '#works' },
    { name: t.nav.timeline, href: '#timeline' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.contact, href: '#contact' }
  ];

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const languages = [
    { code: 'ca', label: 'CA' },
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-[#070709]/90 backdrop-blur-xl border-b border-white/[0.06]'
            : 'py-6 sm:py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Minimalist Monogram / Name */}
          <a
            href="#hero"
            onClick={(e) => scrollTo(e, '#hero')}
            className="group flex items-center gap-3"
          >
            <span className="font-serif tracking-[0.3em] text-sm uppercase text-zinc-100 group-hover:text-amber-300 transition-colors">
              PAULA NAVARRO
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-xs uppercase tracking-[0.22em] text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Language Switcher & Actions */}
          <div className="flex items-center gap-4">
            {/* Language Switcher: CA / ES / EN */}
            <div className="flex items-center rounded-full bg-zinc-900/80 border border-white/10 p-1">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider transition-all cursor-pointer ${
                    lang === l.code
                      ? 'bg-amber-400 text-black font-bold shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-100'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            {/* CV Download / View */}
            <button
              onClick={onOpenCv}
              className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-300 hover:text-amber-300 transition-colors cursor-pointer px-3 py-1.5 border-b border-zinc-700 hover:border-amber-400"
            >
              <span>CV</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-8 pt-24 animate-in fade-in duration-200">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full text-zinc-400 hover:text-white"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-2xl font-serif uppercase tracking-[0.2em] text-zinc-300 hover:text-amber-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCv();
              }}
              className="py-3 text-xs uppercase tracking-widest text-amber-300 border border-amber-400/40 rounded-full"
            >
              {t.nav.cv}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
