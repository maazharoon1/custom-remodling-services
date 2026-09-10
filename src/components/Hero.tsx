import React, { useRef, useState, useEffect } from 'react';
import { Phone, ArrowRight, Play, Pause } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/companyData';

interface HeroProps {
  onNavigate: (page: PageId) => void;
  onEstimateClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onEstimateClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches && videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };

    mediaQuery.addEventListener('change', handleMotionChange);

    // If not reduced motion, attempt play
    if (!mediaQuery.matches && videoRef.current) {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }

    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, []);

  const togglePlayback = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  };

  return (
    <section
      id="homepage-hero-section"
      className="relative w-full min-h-[620px] lg:min-h-[720px] flex items-center justify-center overflow-hidden bg-[#1e2326]"
      aria-label="Welcome to Custom Remodeling Services"
    >
      {/* Background Media Container */}
      <div className="absolute inset-0 w-full h-full">
        {/* Poster Image always present as immediate fallback and base */}
        <img
          src={BUSINESS_INFO.heroPosterUrl}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            videoLoaded && !prefersReducedMotion ? 'opacity-30' : 'opacity-60'
          }`}
        />

        {/* Video Element */}
        {!prefersReducedMotion && (
          <video
            ref={videoRef}
            src={BUSINESS_INFO.heroVideoUrl}
            poster={BUSINESS_INFO.heroPosterUrl}
            muted
            loop
            playsInline
            autoPlay
            onLoadedData={() => setVideoLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? 'opacity-40' : 'opacity-0'
            }`}
            aria-hidden="true"
          />
        )}

        {/* Localized Readability Gradient Overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#1a1e21] via-[#1a1e21]/75 to-[#1a1e21]/60"
          aria-hidden="true"
        />
        {/* Subtle geometric grid fine texture */}
        <div
          className="absolute inset-0 bg-[radial-gradient(#c79b75_1px,transparent_1px)] [background-size:28px_28px] opacity-10 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Accessible Pause/Play Video Button in bottom corner */}
      {!prefersReducedMotion && (
        <button
          id="hero-video-toggle-btn"
          onClick={togglePlayback}
          aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
          className="absolute bottom-6 right-6 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-[#1a1e21]/80 hover:bg-[#444d52] text-neutral-300 hover:text-white text-xs border border-white/10 backdrop-blur-xs transition-colors cursor-pointer"
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 text-[#c79b75]" />
              <span className="hidden sm:inline">Pause Video</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-[#c79b75]" />
              <span className="hidden sm:inline">Play Video</span>
            </>
          )}
        </button>
      )}

      {/* Hero Content - Restrained typography and no eyebrow label */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center flex flex-col items-center">
        {/* Main Headline (Notice: NO eyebrow label above, per strict guidelines) */}
        <h1
          id="hero-main-heading"
          className="font-serif-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.12]"
        >
          Your Remodel, Managed from Start to Finish.
        </h1>

        {/* Supporting Copy */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-200 font-light max-w-2xl leading-relaxed">
          Comprehensive remodeling support with one clear point of contact throughout the project.
        </p>

        {/* Tagline Integration */}
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 bg-[#444d52]/60 border border-[#c79b75]/30 rounded-xs backdrop-blur-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c79b75]" />
          <p className="text-xs sm:text-sm text-neutral-200 tracking-wide">
            {BUSINESS_INFO.tagline}
          </p>
        </div>

        {/* Primary and Secondary CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            id="hero-primary-estimate-cta"
            onClick={onEstimateClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-white bg-[#444d52] hover:bg-[#c79b75] border border-white/10 transition-all duration-200 shadow-md cursor-pointer group"
          >
            <span>Get a Free Estimate</span>
            <ArrowRight className="w-4 h-4 text-[#c79b75] group-hover:text-white transition-colors" />
          </button>

          <a
            id="hero-secondary-call-cta"
            href={BUSINESS_INFO.callLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-neutral-100 hover:text-white bg-white/5 hover:bg-white/10 border border-white/20 transition-all duration-200 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#c79b75]" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </section>
  );
};
