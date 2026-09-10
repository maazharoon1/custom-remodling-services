import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Compass, MessageSquare, Layers } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/companyData';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <main id="about-page-content" className="w-full bg-white">
      {/* Page Header */}
      <section className="py-16 sm:py-20 bg-[#faf9f7] border-b border-[#444d52]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#444d52] tracking-tight">
            About Custom Remodeling Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
            Coordinating residential remodeling with one dedicated point of contact throughout the project life cycle.
          </p>
        </div>
      </section>

      {/* Main Editorial Story Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Verified About Image */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div
                  className="absolute -inset-2 sm:-inset-3 bg-[#faf9f7] border border-[#c79b75]/25 -z-10"
                  aria-hidden="true"
                />
                <div className="overflow-hidden border border-[#444d52]/15 shadow-sm bg-neutral-100">
                  <img
                    src={BUSINESS_INFO.aboutImageUrl}
                    alt={BUSINESS_INFO.aboutImageAlt}
                    className="w-full h-auto object-cover max-h-[580px]"
                    width="1080"
                    height="1440"
                  />
                </div>
                <div className="mt-2 text-right">
                  <span className="text-[11px] text-neutral-400">
                    Project vehicle on-site during residential renovation coordination
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Core Company Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold text-[#444d52] tracking-tight leading-[1.2]">
                Start-to-Finish Coordination Across Renovation Phases
              </h2>

              <p className="text-base text-neutral-700 leading-relaxed font-light">
                Home renovations often require navigating multiple trades, sequence dependencies, material timing, and structural preparation. At Custom Remodeling Services, our purpose is to bring steady management to that process—ensuring work across all trades remains coordinated from the initial conversation to the final punch-list items.
              </p>

              <p className="text-base text-neutral-700 leading-relaxed font-light">
                By maintaining a single direct channel of communication, homeowners never have to balance conflicting schedules or unclear trade handoffs. We keep the broader picture in view: how rooms, surfaces, finishes, and daily living routines interact across every phase.
              </p>

              {/* Guiding Principles */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#faf9f7] border border-[#444d52]/10 rounded-xs space-y-2">
                  <div className="flex items-center gap-2 font-serif-heading font-bold text-[#444d52]">
                    <Compass className="w-4 h-4 text-[#c79b75]" />
                    <span>Holistic Planning</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Evaluating spatial continuity, material heights, and finish compatibility so rooms feel unified.
                  </p>
                </div>

                <div className="p-4 bg-[#faf9f7] border border-[#444d52]/10 rounded-xs space-y-2">
                  <div className="flex items-center gap-2 font-serif-heading font-bold text-[#444d52]">
                    <MessageSquare className="w-4 h-4 text-[#c79b75]" />
                    <span>Transparent Communication</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Regular progress discussions, proactive status check-ins, and direct access for any questions.
                  </p>
                </div>

                <div className="p-4 bg-[#faf9f7] border border-[#444d52]/10 rounded-xs space-y-2">
                  <div className="flex items-center gap-2 font-serif-heading font-bold text-[#444d52]">
                    <Layers className="w-4 h-4 text-[#c79b75]" />
                    <span>Disciplined Sequencing</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Organizing subfloor preparation, framing, surfaces, and final trims in strict, logical order.
                  </p>
                </div>

                <div className="p-4 bg-[#faf9f7] border border-[#444d52]/10 rounded-xs space-y-2">
                  <div className="flex items-center gap-2 font-serif-heading font-bold text-[#444d52]">
                    <ShieldCheck className="w-4 h-4 text-[#c79b75]" />
                    <span>Attention to Finishing Details</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Dedicated focus on corner miters, tile grouting, transition profiles, and clean final touch-ups.
                  </p>
                </div>
              </div>

              {/* Action row */}
              <div className="pt-6 flex flex-wrap items-center gap-4">
                <button
                  id="about-page-free-estimate-cta"
                  onClick={() => {
                    onNavigate('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-7 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#444d52] hover:bg-[#c79b75] transition-all duration-200 cursor-pointer shadow-xs"
                >
                  <span>Get a Free Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="about-page-view-services-cta"
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#444d52] hover:text-white bg-white hover:bg-[#444d52] border border-[#444d52]/30 transition-all duration-200 cursor-pointer"
                >
                  <span>Explore Services</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
