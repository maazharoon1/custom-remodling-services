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
  CheckCircle,
} from 'lucide-react';
import { PageId } from '../types';
import { DEMO_SERVICES } from '../data/companyData';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onSelectServiceForEstimate: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onSelectServiceForEstimate,
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Home':
        return <Home className="w-6 h-6 text-[#c79b75]" />;
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-[#c79b75]" />;
      case 'Bath':
        return <Bath className="w-6 h-6 text-[#c79b75]" />;
      case 'Paintbrush':
        return <Paintbrush className="w-6 h-6 text-[#c79b75]" />;
      case 'Sun':
        return <Sun className="w-6 h-6 text-[#c79b75]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#c79b75]" />;
      case 'Hammer':
        return <Hammer className="w-6 h-6 text-[#c79b75]" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-6 h-6 text-[#c79b75]" />;
      default:
        return <ClipboardCheck className="w-6 h-6 text-[#c79b75]" />;
    }
  };

  const handleRequestEstimate = (serviceName: string) => {
    onSelectServiceForEstimate(serviceName);
    onNavigate('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main id="services-page-content" className="w-full bg-white">
      {/* Services Header */}
      <section className="py-16 sm:py-20 bg-[#faf9f7] border-b border-[#444d52]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#444d52] tracking-tight">
            Remodeling Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
            Coordinated solutions across residential trades, keeping projects structured and transparent from start to finish.
          </p>

          {/* Prominent Notice Required */}
          <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#c79b75]/40 rounded-xs text-xs text-[#444d52] shadow-2xs font-medium">
            <Info className="w-4 h-4 text-[#c79b75] shrink-0" />
            <span>Services shown in this prototype require confirmation before launch.</span>
          </div>
        </div>
      </section>

      {/* Services Detailed Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {DEMO_SERVICES.map((service) => (
              <div
                key={service.id}
                id={`services-page-card-${service.id}`}
                className="p-8 sm:p-10 bg-[#faf9f7] border border-[#444d52]/15 hover:border-[#c79b75] transition-all duration-200 rounded-xs flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-[#444d52]/10">
                    <div className="w-12 h-12 rounded-xs bg-white border border-[#c79b75]/30 flex items-center justify-center group-hover:border-[#c79b75] transition-colors">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#c79b75]">
                      Trade Category
                    </span>
                  </div>

                  <h2 className="mt-6 font-serif-heading text-2xl sm:text-3xl font-bold text-[#444d52] group-hover:text-[#c79b75] transition-colors">
                    {service.name}
                  </h2>

                  <p className="mt-3 text-sm text-neutral-700 font-medium leading-relaxed">
                    {service.summary}
                  </p>

                  <p className="mt-2 text-xs text-neutral-600 leading-relaxed">
                    {service.details}
                  </p>

                  {/* Typical Project Considerations */}
                  <div className="mt-6 pt-4 border-t border-neutral-200/60 space-y-2">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#444d52]">
                      Typical Focus Areas
                    </div>
                    <ul className="space-y-1.5">
                      {service.considerations.map((item, cIdx) => (
                        <li key={cIdx} className="flex items-center gap-2 text-xs text-neutral-600">
                          <CheckCircle className="w-3.5 h-3.5 text-[#c79b75] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Estimate CTA preselecting this service */}
                <div className="mt-8 pt-6 border-t border-[#444d52]/10">
                  <button
                    id={`service-card-estimate-cta-${service.id}`}
                    onClick={() => handleRequestEstimate(service.name)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#444d52] hover:bg-[#c79b75] text-white text-xs font-semibold uppercase tracking-wider transition-colors duration-200 rounded-xs cursor-pointer shadow-xs"
                  >
                    <span>Request Estimate for {service.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
