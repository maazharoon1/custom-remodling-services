import React from 'react';
import { ContactSection } from '../components/ContactSection';

interface ContactPageProps {
  preselectedService?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ preselectedService }) => {
  return (
    <main id="contact-page-content" className="w-full bg-white">
      {/* Header Banner */}
      <section className="py-16 sm:py-20 bg-[#faf9f7] border-b border-[#444d52]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#444d52] tracking-tight">
            Contact & Free Estimate
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
            Connect directly with Custom Remodeling Services for project conversations, scheduling, and free estimates.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <ContactSection preselectedService={preselectedService} />
    </main>
  );
};
