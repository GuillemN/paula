import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Film } from 'lucide-react';
import { translations } from '../data/translations';

export default function Showreel({ lang }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  const t = translations[lang] || translations.ca;

  const handlePlayToggle = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 1;
    setProgress((current / duration) * 100);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section id="showreel" className="py-24 sm:py-32 bg-[#060608] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        
        {/* Minimal Section Title */}
        <div className="flex items-center justify-between pb-8 mb-8 border-b border-white/10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-amber-400 block mb-1 font-medium">
              {t.reel.tag}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-white uppercase">
              {t.reel.title}
            </h2>
          </div>
          <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
            4K UHD • 02:15
          </span>
        </div>

        {/* 16:9 Video Frame */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl group">
          <video
            ref={videoRef}
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            poster="/images/hero_stage.jpg"
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            playsInline
            muted={isMuted}
            className="w-full h-full object-cover"
          />

          {/* Minimal Play Overlay when paused */}
          {!isPlaying && (
            <div
              onClick={handlePlayToggle}
              className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center cursor-pointer transition-all"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all">
                <Play className="w-8 h-8 fill-current translate-x-1" />
              </div>
            </div>
          )}

          {/* Minimal Floating Controls */}
          {isPlaying && (
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePlayToggle}
                  className="p-1.5 text-white hover:text-amber-400 cursor-pointer"
                  aria-label="Pause"
                >
                  <Pause className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1.5 text-white hover:text-amber-400 cursor-pointer"
                  aria-label="Mute"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>

              <button
                onClick={toggleFullscreen}
                className="p-1.5 text-white hover:text-amber-400 cursor-pointer"
                aria-label="Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
