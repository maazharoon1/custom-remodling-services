import React from 'react';
import {
  Home,
  UtensilsCrossed,
  Bath,
  Paintbrush,
  Sun,
  Layers,
  Hammer,
  ClipboardCheck,
  ArrowRight,
  Info,
} from 'lucide-react';
import { PageId, ServiceCategory } from '../types';
import { DEMO_SERVICES } from '../data/companyData';

interface ServicesSectionProps {
  onNavigate: (page: PageId) => void;
  onSelectServiceForEstimate: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onNavigate,
  onSelectServiceForEstimate,
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Home':
        return <Home className="w-5 h-5 text-[#c79b75]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5 text-[#c79b75]" />;
      case 'Bath':
        return <Bath className="w-5 h-5 text-[#c79b75]" />;
      case 'Paintbrush':
        return <Paintbrush className="w-5 h-5 text-[#c79b75]" />;
      case 'Sun':
        return <Sun className="w-5 h-5 text-[#c79b75]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#c79b75]" />;
      case 'Hammer':
        return <Hammer className="w-5 h-5 text-[#c79b75]" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-5 h-5 text-[#c79b75]" />;
      default:
        return <ClipboardCheck className="w-5 h-5 text-[#c79b75]" />;
    }
  };

  return (
    <section
      id="homepage-services-section"
      className="py-20 lg:py-28 bg-[#faf9f7] border-b border-[#444d52]/10"
      aria-labelledby="services-section-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2
            id="services-section-heading"
            className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#444d52] tracking-tight"
          >
            Services & Trade Coordination
          </h2>
          <p className="text-base text-neutral-600 leading-relaxed">
            Coordinating residential updates from initial planning through fine details. We help manage the moving pieces so your project proceeds in logical sequence.
          </p>

          {/* Required Notice near service introduction */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#c79b75]/30 rounded-xs text-xs text-neutral-600 shadow-2xs">
            <Info className="w-3.5 h-3.5 text-[#c79b75] shrink-0" />
            <span>Prototype service categories — replace or confirm before launch.</span>
          </div>
        </div>

        {/* Clean rectangular service cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEMO_SERVICES.map((service: ServiceCategory) => {
            const isHiddenOnMobile = [
              'kitchen',
              'interior',
              'exterior',
              'repairs',
              'coordination',
            ].includes(service.id);

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`bg-white border border-[#444d52]/15 p-6 flex-col justify-between hover:border-[#c79b75] hover:shadow-xs transition-all duration-200 group rounded-xs ${
                  isHiddenOnMobile ? 'hidden md:flex' : 'flex'
                }`}
              >
                <div>
                  <div className="w-11 h-11 rounded-xs bg-[#faf9f7] border border-[#c79b75]/25 flex items-center justify-center mb-5 group-hover:border-[#c79b75] transition-colors">
                    {getIcon(service.iconName)}
                  </div>

                  <h3 className="font-serif-heading text-lg font-bold text-[#444d52] group-hover:text-[#c79b75] transition-colors">
                    {service.name}
                  </h3>

                  <p className="mt-2.5 text-xs text-neutral-600 leading-relaxed">
                    {service.summary}
                  </p>
                </div>

                {/* Service CTA preselecting this category in Contact form */}
                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <button
                    id={`service-estimate-btn-${service.id}`}
                    onClick={() => onSelectServiceForEstimate(service.name)}
                    className="w-full inline-flex items-center justify-between text-xs font-semibold text-[#444d52] hover:text-[#c79b75] transition-colors cursor-pointer py-1"
                  >
                    <span>Request Estimate</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#c79b75] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered "View All Services" Button */}
        <div className="mt-12 text-center">
          <button
            id="services-section-view-all-btn"
            onClick={() => {
              onNavigate('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#444d52] hover:bg-[#c79b75] transition-all duration-200 cursor-pointer shadow-xs"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
