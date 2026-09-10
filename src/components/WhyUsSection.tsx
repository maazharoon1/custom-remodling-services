import React, { useState, useEffect } from 'react';
import { Compass, MessageSquare, Layers, CheckSquare2 } from 'lucide-react';
import { WHY_US_ITEMS } from '../data/companyData';

export const WhyUsSection: React.FC = () => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const getIcon = (id: string, isDarkCard: boolean) => {
    const iconClass = `w-6 h-6 sm:w-7 sm:h-7 ${isDarkCard ? 'text-[#c79b75]' : 'text-[#444d52]'}`;
    switch (id) {
      case 'coordination':
        return <Compass className={iconClass} />;
      case 'contact':
        return <MessageSquare className={iconClass} />;
      case 'broader-view':
        return <Layers className={iconClass} />;
      case 'details':
        return <CheckSquare2 className={iconClass} />;
      default:
        return <Compass className={iconClass} />;
    }
  };

  return (
    <section
      id="why-us-stacking-section"
      className="relative py-20 lg:py-28 bg-white border-b border-[#444d52]/10"
      aria-labelledby="why-us-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-4">
          <h2
            id="why-us-heading"
            className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#444d52] tracking-tight"
          >
            Why Custom Remodeling Services
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed">
            Our company approach centers on coordination, accessibility, and steady oversight from start to finish.
          </p>
        </div>

        {/* Native-scroll stacking cards container */}
        <div className="space-y-6 sm:space-y-8 relative">
          {WHY_US_ITEMS.map((item, index) => {
            const isDark = item.id === 'details';
            // Navbar-aware progressive sticky offset
            // Header is ~64px (4rem). On desktop we offset each card by an extra 1.25rem (20px)
            const stickyStyle = isReducedMotion
              ? {}
              : {
                  top: `calc(5rem + ${index * 1.25}rem)`,
                  zIndex: 10 + index,
                };

            return (
              <div
                key={item.id}
                id={`why-us-card-${item.id}`}
                style={stickyStyle}
                className={`${isReducedMotion ? 'relative mb-6' : 'sticky'} w-full transition-all duration-300`}
              >
                <div
                  className={`w-full p-6 sm:p-10 lg:p-12 border ${item.borderClass} ${item.accentBg} ${item.accentText} shadow-sm rounded-xs flex flex-col justify-between`}
                >
                  {/* Card top row: badge and number */}
                  <div className="flex items-center justify-between pb-6 sm:pb-8 border-b border-current/10">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-xs ${item.badgeBg}`}
                    >
                      <span>{item.highlight}</span>
                    </span>
                    <span
                      className={`font-serif-heading text-lg sm:text-xl font-bold ${
                        isDark ? 'text-[#c79b75]' : 'text-[#c79b75]'
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* Card main content */}
                  <div className="py-6 sm:py-8 flex flex-col md:flex-row md:items-center gap-6 sm:gap-8 justify-between">
                    <div className="space-y-3 max-w-2xl">
                      <h3
                        className={`font-serif-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight ${
                          isDark ? 'text-white' : 'text-[#444d52]'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-base sm:text-lg font-light leading-relaxed ${
                          isDark ? 'text-neutral-200' : 'text-neutral-600'
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>

                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xs shrink-0 flex items-center justify-center border ${
                        isDark
                          ? 'bg-white/5 border-[#c79b75]/40'
                          : 'bg-white border-[#444d52]/15 shadow-2xs'
                      }`}
                    >
                      {getIcon(item.id, isDark)}
                    </div>
                  </div>

                  {/* Approach footnote */}
                  <div className="pt-4 border-t border-current/10 flex items-center justify-between text-xs opacity-75">
                    <span>Intended Company Approach</span>
                    <span className="hidden sm:inline">Consistent Oversight Across Trades</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
