import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Quote, Info } from 'lucide-react';
import { SAMPLE_REVIEWS } from '../data/companyData';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Touch tracking for horizontal mobile swipe gestures
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const isHorizontalSwipeRef = useRef<boolean | null>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  const totalReviews = SAMPLE_REVIEWS.length;

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) {
      setIsAutoPlaying(false);
    }

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches) setIsAutoPlaying(false);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Track document tab visibility
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalReviews);
  }, [totalReviews]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalReviews) % totalReviews);
  }, [totalReviews]);

  // Gentle Autoplay (every 5.5s) - paused on hover, focus, touch, tab hidden, or reduced motion
  useEffect(() => {
    if (
      !isAutoPlaying ||
      isHovered ||
      isFocused ||
      isTouching ||
      !isTabVisible ||
      prefersReducedMotion
    ) {
      return;
    }

    const interval = setInterval(() => {
      nextSlide();
    }, 5500);

    return () => clearInterval(interval);
  }, [
    isAutoPlaying,
    isHovered,
    isFocused,
    isTouching,
    isTabVisible,
    prefersReducedMotion,
    nextSlide,
  ]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsTouching(true);
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
    isHorizontalSwipeRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = currentX - touchStartXRef.current;
    const diffY = currentY - touchStartYRef.current;

    // Detect direction on first significant movement
    if (isHorizontalSwipeRef.current === null) {
      if (Math.abs(diffX) > 8 || Math.abs(diffY) > 8) {
        isHorizontalSwipeRef.current = Math.abs(diffX) > Math.abs(diffY);
      }
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsTouching(false);
    if (touchStartXRef.current !== null && isHorizontalSwipeRef.current === true) {
      const currentX = e.changedTouches[0].clientX;
      const diffX = currentX - touchStartXRef.current;
      // 40px threshold to trigger slide change
      if (diffX < -40) {
        nextSlide();
      } else if (diffX > 40) {
        prevSlide();
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
    isHorizontalSwipeRef.current = null;
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    }
  };

  return (
    <section
      id="homepage-reviews-section"
      className="py-20 lg:py-28 bg-[#faf9f7] border-b border-[#444d52]/10 overflow-hidden"
      aria-labelledby="reviews-section-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row with titles and desktop/tablet carousel controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="space-y-3 max-w-2xl">
            <h2
              id="reviews-section-heading"
              className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#444d52] tracking-tight"
            >
              Testimonials & Perspectives
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed">
              How homeowners experience unified trade coordination, direct communication, and organized project pacing.
            </p>

            {/* Discreet Notice */}
            <div className="inline-flex items-center gap-2 text-xs text-neutral-600 pt-1">
              <Info className="w-3.5 h-3.5 text-[#c79b75]" />
              <span>Sample testimonials for prototype presentation.</span>
            </div>
          </div>

          {/* Desktop and Tablet Carousel Controls */}
          <div className="hidden md:flex items-center gap-2 self-start md:self-end">
            {/* Play / Pause Autoplay Toggle */}
            {!prefersReducedMotion && (
              <button
                id="reviews-autoplay-toggle-btn"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                aria-label={isAutoPlaying ? 'Pause review autoplay' : 'Start review autoplay'}
                className="p-2.5 rounded-xs border border-[#444d52]/20 bg-white hover:bg-neutral-50 text-[#444d52] hover:text-[#c79b75] transition-colors cursor-pointer"
                title={isAutoPlaying ? 'Pause Autoplay' : 'Resume Autoplay'}
              >
                {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
            )}

            {/* Previous slide button */}
            <button
              id="reviews-prev-btn"
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="p-2.5 rounded-xs border border-[#444d52]/20 bg-white hover:bg-neutral-50 text-[#444d52] hover:text-[#c79b75] transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Next slide button */}
            <button
              id="reviews-next-btn"
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="p-2.5 rounded-xs border border-[#444d52]/20 bg-white hover:bg-neutral-50 text-[#444d52] hover:text-[#c79b75] transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={carouselContainerRef}
          id="reviews-carousel-track"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          className="relative outline-none"
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
        >
          {/* =========================================================================
              1. MOBILE CAROUSEL (below 768px: < md)
              - Exactly one card visible at a time
              - flex: 0 0 100% per slide
              - Hidden/clipped viewport (overflow-hidden)
              - No partial neighboring cards
              - Smooth translateX transform based on currentIndex
              - Full touch swiping support
              ========================================================================= */}
          <div className="block md:hidden">
            {/* Mobile Viewport with strict overflow hidden */}
            <div
              id="reviews-mobile-viewport"
              className="w-full overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className={`flex w-full ${
                  prefersReducedMotion
                    ? 'transition-none'
                    : 'transition-transform duration-500 ease-out'
                } will-change-transform`}
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {SAMPLE_REVIEWS.map((review, idx) => {
                  const isCurrent = idx === currentIndex;

                  return (
                    <div
                      key={`mobile-${review.id}`}
                      id={`review-slide-mobile-${review.id}`}
                      className="w-full flex-[0_0_100%] min-w-full box-border px-1"
                      style={{ flex: '0 0 100%' }}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`Testimonial ${idx + 1} of ${totalReviews}`}
                      aria-hidden={!isCurrent}
                    >
                      <div
                        id={`review-card-mobile-${review.id}`}
                        className={`bg-white border p-6 sm:p-7 flex flex-col justify-between rounded-xs shadow-2xs transition-all duration-300 min-h-[240px] h-full ${
                          isCurrent
                            ? 'border-[#c79b75] shadow-xs'
                            : 'border-[#444d52]/15 hover:border-[#444d52]/30'
                        }`}
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold uppercase tracking-wider text-[#c79b75]">
                              {review.label}
                            </span>
                            <Quote className="w-5 h-5 text-[#c79b75]/50 shrink-0" />
                          </div>

                          <p className="text-sm sm:text-base text-neutral-700 font-normal leading-relaxed italic break-words">
                            "{review.quote}"
                          </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 gap-2">
                          <span className="font-medium text-[#444d52] truncate">
                            {review.projectType}
                          </span>
                          <span className="text-neutral-400 text-right truncate">
                            {review.focusArea}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Carousel Controls: Arrows + Dots below the active card */}
            <div className="mt-6 flex items-center justify-between px-1">
              <button
                id="reviews-mobile-prev-btn"
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="p-2.5 rounded-xs border border-[#444d52]/20 bg-white hover:bg-neutral-50 active:bg-neutral-100 text-[#444d52] hover:text-[#c79b75] transition-colors cursor-pointer touch-manipulation shadow-2xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Connected Pagination Dots */}
              <div
                className="flex items-center gap-2"
                role="tablist"
                aria-label="Testimonial pagination"
              >
                {SAMPLE_REVIEWS.map((_, dotIdx) => (
                  <button
                    key={`mobile-dot-${dotIdx}`}
                    id={`reviews-mobile-pagination-dot-${dotIdx}`}
                    onClick={() => setCurrentIndex(dotIdx)}
                    aria-label={`Go to testimonial ${dotIdx + 1}`}
                    aria-current={currentIndex === dotIdx ? 'true' : 'false'}
                    className={`h-2 transition-all duration-300 rounded-full cursor-pointer touch-manipulation ${
                      currentIndex === dotIdx
                        ? 'w-7 bg-[#c79b75]'
                        : 'w-2 bg-[#444d52]/20 hover:bg-[#444d52]/40'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                {!prefersReducedMotion && (
                  <button
                    id="reviews-mobile-autoplay-toggle-btn"
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    aria-label={isAutoPlaying ? 'Pause review autoplay' : 'Start review autoplay'}
                    className="p-2.5 rounded-xs border border-[#444d52]/20 bg-white hover:bg-neutral-50 active:bg-neutral-100 text-[#444d52] hover:text-[#c79b75] transition-colors cursor-pointer touch-manipulation shadow-2xs"
                    title={isAutoPlaying ? 'Pause Autoplay' : 'Resume Autoplay'}
                  >
                    {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                )}
                <button
                  id="reviews-mobile-next-btn"
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                  className="p-2.5 rounded-xs border border-[#444d52]/20 bg-white hover:bg-neutral-50 active:bg-neutral-100 text-[#444d52] hover:text-[#c79b75] transition-colors cursor-pointer touch-manipulation shadow-2xs"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* =========================================================================
              2. TABLET VIEW (768px - 1023px: md:grid lg:hidden)
              - Exactly 2 cards visible side by side
              - Smooth pair rotation as currentIndex updates
              ========================================================================= */}
          <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6">
            {[
              SAMPLE_REVIEWS[currentIndex % totalReviews],
              SAMPLE_REVIEWS[(currentIndex + 1) % totalReviews],
            ].map((review, offsetIdx) => {
              const isPrimary = offsetIdx === 0;

              return (
                <div
                  key={`tablet-${review.id}-${offsetIdx}`}
                  id={`review-card-tablet-${review.id}`}
                  className={`bg-white border p-7 sm:p-8 flex flex-col justify-between rounded-xs transition-all duration-300 min-h-[240px] ${
                    isPrimary
                      ? 'border-[#c79b75] shadow-xs ring-1 ring-[#c79b75]/20'
                      : 'border-[#444d52]/15 shadow-2xs hover:border-[#444d52]/30'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#c79b75]">
                        {review.label}
                      </span>
                      <Quote className="w-5 h-5 text-[#c79b75]/50 shrink-0" />
                    </div>

                    <p className="text-sm sm:text-base text-neutral-700 font-normal leading-relaxed italic break-words">
                      "{review.quote}"
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 gap-2">
                    <span className="font-medium text-[#444d52] truncate">
                      {review.projectType}
                    </span>
                    <span className="text-neutral-400 text-right truncate">
                      {review.focusArea}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =========================================================================
              3. DESKTOP VIEW (1024px+: hidden lg:grid lg:grid-cols-3)
              - Retains all three visible testimonial cards side by side
              - Active card highlighted by currentIndex
              ========================================================================= */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6">
            {SAMPLE_REVIEWS.map((review, idx) => {
              const isCurrent = idx === currentIndex;

              return (
                <div
                  key={`desktop-${review.id}`}
                  id={`review-card-${review.id}`}
                  className={`bg-white border p-7 sm:p-8 flex flex-col justify-between rounded-xs transition-all duration-300 min-h-[240px] ${
                    isCurrent
                      ? 'border-[#c79b75] shadow-xs ring-1 ring-[#c79b75]/20'
                      : 'border-[#444d52]/15 shadow-2xs hover:border-[#444d52]/30'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#c79b75]">
                        {review.label}
                      </span>
                      <Quote className="w-5 h-5 text-[#c79b75]/50 shrink-0" />
                    </div>

                    <p className="text-sm sm:text-base text-neutral-700 font-normal leading-relaxed italic break-words">
                      "{review.quote}"
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 gap-2">
                    <span className="font-medium text-[#444d52] truncate">
                      {review.projectType}
                    </span>
                    <span className="text-neutral-400 text-right truncate">
                      {review.focusArea}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tablet & Desktop Pagination Indicators */}
          <div
            className="hidden md:flex mt-8 items-center justify-center gap-2"
            role="tablist"
            aria-label="Testimonial pagination"
          >
            {SAMPLE_REVIEWS.map((_, dotIdx) => (
              <button
                key={`desktop-dot-${dotIdx}`}
                id={`reviews-pagination-dot-${dotIdx}`}
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Go to testimonial ${dotIdx + 1}`}
                aria-current={currentIndex === dotIdx ? 'true' : 'false'}
                className={`h-1.5 transition-all duration-200 rounded-full cursor-pointer ${
                  currentIndex === dotIdx
                    ? 'w-8 bg-[#c79b75]'
                    : 'w-2 bg-[#444d52]/20 hover:bg-[#444d52]/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
