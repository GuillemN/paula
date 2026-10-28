import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './SocialIcons';
import { contactInfo } from '../data/dancerData';
import { translations } from '../data/translations';

export default function Contact({ lang }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const t = translations[lang] || translations.ca;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    await new Promise((r) => setTimeout(r, 600));
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#050507] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        
        {/* Header */}
        <div className="pb-8 border-b border-white/10 mb-16 max-w-xl">
          <span className="text-[10px] uppercase tracking-[0.3em] text-amber-400 block mb-2 font-medium">
            {t.contact.tag}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white uppercase">
            {t.contact.title}
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-3 font-light">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Two-Column Grid: Contacts on Left, Minimal Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Direct Email */}
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 block mb-2">
                {t.contact.directEmail}
              </span>
              <a
                href={`mailto:${contactInfo.bookingEmail}`}
                className="font-serif text-xl sm:text-2xl text-amber-300 hover:text-white transition-colors underline underline-offset-4 decoration-amber-400/40"
              >
                {contactInfo.bookingEmail}
              </a>
              <div className="text-xs text-zinc-500 mt-2 font-mono">
                {contactInfo.phone}
              </div>
            </div>

            {/* Representation */}
            <div className="pt-6 border-t border-white/5">
              <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 block mb-2">
                {t.contact.agency}
              </span>
              <div className="font-serif text-lg text-zinc-200">
                {contactInfo.agency}
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                {contactInfo.agents}
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-white/5 flex items-center gap-4">
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-white/10 hover:border-amber-400/40 text-xs text-zinc-300 hover:text-white transition-all cursor-pointer"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                <span>Instagram</span>
              </a>

              <a
                href={contactInfo.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-white/10 hover:border-amber-400/40 text-xs text-zinc-300 hover:text-white transition-all cursor-pointer"
              >
                <YoutubeIcon className="w-3.5 h-3.5 text-red-400" />
                <span>YouTube</span>
              </a>
            </div>
          </div>

          {/* Right Column: Minimal Form (7 Cols) */}
          <div className="lg:col-span-7">
            {status === 'success' ? (
              <div className="p-8 rounded-2xl bg-zinc-900/60 border border-amber-400/30 text-center animate-in fade-in">
                <CheckCircle2 className="w-10 h-10 text-amber-400 mx-auto mb-3" />
                <h4 className="font-serif text-xl text-white font-medium mb-1">
                  {t.contact.form.sent}
                </h4>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 px-6 py-2 rounded-full text-xs uppercase tracking-wider font-semibold bg-zinc-800 text-zinc-300 hover:text-white cursor-pointer"
                >
                  Ok
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5">
                    {t.contact.form.name} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/10 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-400/50 text-xs transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5">
                    {t.contact.form.email} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/10 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-400/50 text-xs transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-zinc-400 mb-1.5">
                    {t.contact.form.message} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/10 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-amber-400/50 text-xs transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold text-black bg-amber-400 hover:bg-amber-300 transition-all cursor-pointer disabled:opacity-50"
                >
                  {status === 'submitting' ? t.contact.form.sending : t.contact.form.send}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
