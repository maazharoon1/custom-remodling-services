import React from 'react';
import { PageId } from '../types';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { WhyUsSection } from '../components/WhyUsSection';
import { ReviewsSection } from '../components/ReviewsSection';
import { ContactSection } from '../components/ContactSection';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectServiceForEstimate: (serviceName: string) => void;
  preselectedService?: string;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectServiceForEstimate,
  preselectedService,
}) => {
  const scrollToContact = () => {
    const el = document.getElementById('contact-estimate-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('contact');
    }
  };

  return (
    <main id="home-page-content" className="w-full">
      {/* 1. Hero */}
      <Hero onNavigate={onNavigate} onEstimateClick={scrollToContact} />

      {/* 2. About */}
      <AboutSection onNavigate={onNavigate} onEstimateClick={scrollToContact} />

      {/* 3. Services */}
      <ServicesSection
        onNavigate={onNavigate}
        onSelectServiceForEstimate={(serviceName) => {
          onSelectServiceForEstimate(serviceName);
          scrollToContact();
        }}
      />

      {/* 4. Why Us (Stacking Cards) */}
      <WhyUsSection />

      {/* 5. Reviews (Carousel) */}
      <ReviewsSection />

      {/* 6. Contact / Free Estimate */}
      <ContactSection preselectedService={preselectedService} />
    </main>
  );
};
