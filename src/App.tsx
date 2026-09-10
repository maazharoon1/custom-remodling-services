/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [preselectedService, setPreselectedService] = useState<string>('');

  const handleNavigate = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectServiceForEstimate = (serviceName: string) => {
    setPreselectedService(serviceName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1f2427]">
      {/* Compact Sticky Header */}
      <Header activePage={activePage} onNavigate={handleNavigate} />

      {/* Main View Area */}
      <div className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectServiceForEstimate={handleSelectServiceForEstimate}
            preselectedService={preselectedService}
          />
        )}

        {activePage === 'about' && <AboutPage onNavigate={handleNavigate} />}

        {activePage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onSelectServiceForEstimate={handleSelectServiceForEstimate}
          />
        )}

        {activePage === 'gallery' && <GalleryPage />}

        {activePage === 'contact' && (
          <ContactPage preselectedService={preselectedService} />
        )}
      </div>

      {/* Compact Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

