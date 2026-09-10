import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Eye } from 'lucide-react';
import { GALLERY_COLLECTION } from '../data/companyData';
import { GalleryImage } from '../types';

export const GalleryPage: React.FC = () => {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeImage) return;

      if (e.key === 'Escape') {
        setActiveImage(null);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = GALLERY_COLLECTION.findIndex((img) => img.id === activeImage.id);
        const nextIndex = (currentIndex + 1) % GALLERY_COLLECTION.length;
        setActiveImage(GALLERY_COLLECTION[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = GALLERY_COLLECTION.findIndex((img) => img.id === activeImage.id);
        const prevIndex = (currentIndex - 1 + GALLERY_COLLECTION.length) % GALLERY_COLLECTION.length;
        setActiveImage(GALLERY_COLLECTION[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImage]);

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeImage]);

  return (
    <main id="gallery-page-content" className="w-full bg-white">
      {/* Header Section */}
      <section className="py-16 sm:py-20 bg-[#faf9f7] border-b border-[#444d52]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#444d52] tracking-tight">
            Projects in Focus.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
            A closer look at remodeling work, details, and spaces taking shape.
          </p>
          <p className="mt-2 text-xs text-neutral-400">
            Documenting on-site craftsmanship, active preparation, and finished surfaces.
          </p>
        </div>
      </section>

      {/* Image-First Editorial Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {GALLERY_COLLECTION.map((image, index) => (
              <div
                key={image.id}
                id={`gallery-item-${image.id}`}
                className="group flex flex-col bg-[#faf9f7] border border-[#444d52]/15 hover:border-[#c79b75] transition-all duration-300 rounded-xs overflow-hidden"
              >
                {/* Image Container with preserved 3:4 aspect ratio */}
                <div
                  className="relative overflow-hidden bg-neutral-200 aspect-[3/4] cursor-pointer"
                  onClick={() => setActiveImage(image)}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    loading={index < 4 ? 'eager' : 'lazy'}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    width={image.width}
                    height={image.height}
                  />

                  {/* Subtle Hover Action Overlay */}
                  <div className="absolute inset-0 bg-[#1a1e21]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <span className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/90 text-[#444d52] text-xs font-semibold uppercase tracking-wider rounded-xs backdrop-blur-xs shadow-md">
                      <ZoomIn className="w-3.5 h-3.5 text-[#c79b75]" />
                      <span>View Full Image</span>
                    </span>
                  </div>

                  {/* Visual item indicator badge */}
                  <div className="absolute top-3 left-3 px-2 py-1 bg-[#1e2326]/75 text-white text-[10px] font-mono tracking-wider rounded-2xs backdrop-blur-xs">
                    0{index + 1}
                  </div>
                </div>

                {/* Minimal Factual Caption */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-[#444d52] leading-snug">
                      {image.caption}
                    </p>
                  </div>
                  <div className="mt-3 pt-3 border-t border-neutral-200/80 flex items-center justify-between text-[11px] text-neutral-500">
                    <span>On-Site Record</span>
                    <button
                      onClick={() => setActiveImage(image)}
                      className="inline-flex items-center gap-1 text-[#c79b75] hover:text-[#444d52] font-semibold cursor-pointer"
                    >
                      <Eye className="w-3 h-3" />
                      <span>Inspect</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          id="gallery-lightbox-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Image Detail View"
          className="fixed inset-0 z-50 bg-[#1a1e21]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
        >
          {/* Top Bar with close & counter */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10 text-white">
            <div className="flex items-center gap-3">
              <span className="font-serif-heading text-base sm:text-lg font-bold">
                Custom Remodeling Services
              </span>
              <span className="text-xs text-[#c79b75] font-mono">
                {GALLERY_COLLECTION.findIndex((img) => img.id === activeImage.id) + 1} / {GALLERY_COLLECTION.length}
              </span>
            </div>
            <button
              id="lightbox-close-btn"
              onClick={() => setActiveImage(null)}
              className="p-2 text-neutral-300 hover:text-white transition-colors cursor-pointer rounded-xs"
              aria-label="Close image lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Lightbox Body with previous/next controls */}
          <div className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden">
            {/* Prev Button */}
            <button
              id="lightbox-prev-btn"
              onClick={() => {
                const currentIndex = GALLERY_COLLECTION.findIndex((img) => img.id === activeImage.id);
                const prevIndex = (currentIndex - 1 + GALLERY_COLLECTION.length) % GALLERY_COLLECTION.length;
                setActiveImage(GALLERY_COLLECTION[prevIndex]);
              }}
              className="absolute left-2 sm:left-4 z-10 p-3 bg-white/10 hover:bg-[#c79b75] text-white rounded-xs transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Centered Image */}
            <div className="max-w-4xl max-h-[75vh] flex items-center justify-center">
              <img
                src={activeImage.url}
                alt={activeImage.alt}
                className="max-h-[75vh] w-auto max-w-full object-contain shadow-2xl border border-white/10 rounded-xs"
              />
            </div>

            {/* Next Button */}
            <button
              id="lightbox-next-btn"
              onClick={() => {
                const currentIndex = GALLERY_COLLECTION.findIndex((img) => img.id === activeImage.id);
                const nextIndex = (currentIndex + 1) % GALLERY_COLLECTION.length;
                setActiveImage(GALLERY_COLLECTION[nextIndex]);
              }}
              className="absolute right-2 sm:right-4 z-10 p-3 bg-white/10 hover:bg-[#c79b75] text-white rounded-xs transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Caption & Visible Detail Checklist */}
          <div className="pt-4 border-t border-white/10 max-w-3xl mx-auto w-full text-center space-y-2 text-white">
            <p className="text-sm font-medium text-neutral-200">
              {activeImage.caption}
            </p>
            <div className="flex flex-wrap justify-center gap-2 pt-1">
              {activeImage.visibleDetails.map((detail, dIdx) => (
                <span
                  key={dIdx}
                  className="px-2.5 py-1 rounded-2xs bg-white/10 text-[11px] text-[#c79b75] font-light"
                >
                  {detail}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
