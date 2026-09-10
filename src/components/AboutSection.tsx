import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/companyData';

interface AboutSectionProps {
  onNavigate: (page: PageId) => void;
  onEstimateClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onNavigate,
  onEstimateClick,
}) => {
  return (
    <section
      id="homepage-about-section"
      className="py-20 lg:py-28 bg-white border-b border-[#444d52]/10"
      aria-labelledby="about-section-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative group">
              {/* Subtle background decorative offset box */}
              <div
                className="absolute -inset-2 sm:-inset-3 bg-[#faf9f7] border border-[#c79b75]/25 -z-10"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden bg-neutral-100 border border-[#444d52]/15 shadow-sm">
                <img
                  src={BUSINESS_INFO.aboutImageUrl}
                  alt={BUSINESS_INFO.aboutImageAlt}
                  className="w-full h-auto max-h-[520px] object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                  width="1080"
                  height="1440"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <h2
              id="about-section-heading"
              className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#444d52] tracking-tight leading-[1.18]"
            >
              Coordinated Remodeling Without the Confusion.
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
              Custom Remodeling Services coordinates residential remodeling work from the initial planning conversation through the finishing touches. Renovation involves multiple stages, materials, and specialized tasks—our focus is keeping the work connected, organized, and straightforward for homeowners.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#faf9f7] border border-[#444d52]/10 rounded-xs space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#444d52]">
                  <CheckCircle2 className="w-4 h-4 text-[#c79b75] shrink-0" />
                  <span>Comprehensive Support</span>
                </div>
                <p className="text-xs text-neutral-600 leading-normal">
                  End-to-end guidance helping keep every renovation phase moving in sync.
                </p>
              </div>

              <div className="p-4 bg-[#faf9f7] border border-[#444d52]/10 rounded-xs space-y-1.5">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#444d52]">
                  <CheckCircle2 className="w-4 h-4 text-[#c79b75] shrink-0" />
                  <span>One Direct Point of Contact</span>
                </div>
                <p className="text-xs text-neutral-600 leading-normal">
                  Clear, consistent communication without navigating confusing handoffs.
                </p>
              </div>
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed">
              Whether you are planning kitchen updates, bathroom improvements, interior finish details, or general property repairs, we provide attentive project coordination designed to respect your home and vision.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="about-section-learn-more-btn"
                onClick={() => {
                  onNavigate('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#444d52] hover:text-white bg-white hover:bg-[#444d52] border border-[#444d52]/30 transition-all duration-200 cursor-pointer shadow-xs"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                id="about-section-estimate-btn"
                onClick={onEstimateClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#444d52] hover:bg-[#c79b75] transition-all duration-200 cursor-pointer shadow-xs"
              >
                <span>Get a Free Estimate</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
