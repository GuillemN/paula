import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Works from './components/Works';
import CvTimeline from './components/CvTimeline';
import AboutStats from './components/AboutStats';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CvModal from './components/CvModal';
import LightboxModal from './components/LightboxModal';
import ProjectModal from './components/ProjectModal';

export default function App() {
  // Default language: 'ca' (Catalan)
  const [lang, setLang] = useState('ca');
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-[#070709] text-zinc-100 font-sans selection:bg-amber-400/30 selection:text-amber-200">
      {/* Top Navbar with CA/ES/EN switcher */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenCv={() => setIsCvOpen(true)}
      />

      <main>
        {/* Full-Screen Minimal Hero */}
        <Hero lang={lang} />

        {/* Feines Fetes & Projectes (Ball al Casino, Escola de dansa, Coordinadora hotel...) */}
        <Works
          lang={lang}
          onOpenCv={() => setIsCvOpen(true)}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* CV & Línia Temporal (Casino, Escola de dansa, Coordinadora hotel...) */}
        <CvTimeline
          lang={lang}
          onOpenCv={() => setIsCvOpen(true)}
        />

        {/* Minimal Profile & Stats */}
        <AboutStats
          lang={lang}
          onOpenCv={() => setIsCvOpen(true)}
        />

        {/* Visual Masonry Gallery */}
        <Gallery
          lang={lang}
          onSelectImage={(photo) => setSelectedPhoto(photo)}
        />

        {/* Minimalist Contact & Inquiries */}
        <Contact lang={lang} />
      </main>

      {/* Minimal Footer */}
      <Footer lang={lang} />

      {/* Multi-Image Project Showcase Modal */}
      <ProjectModal
        isOpen={selectedProject !== null}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
      />

      {/* Standardized Printable CV Modal */}
      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
        lang={lang}
      />

      {/* Lightbox Modal for Gallery Images */}
      <LightboxModal
        isOpen={selectedPhoto !== null}
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onPrev={() => {}}
        onNext={() => {}}
      />
    </div>
  );
}
