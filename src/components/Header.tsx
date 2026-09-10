import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO } from '../data/companyData';

interface HeaderProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll locking when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Escape key handler for accessible closing
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="main-site-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#444d52]/10 py-2.5'
            : 'bg-white border-b border-[#444d52]/10 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with original aspect ratio */}
          <button
            id="header-brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c79b75]"
            aria-label="Custom Remodeling Services Homepage"
          >
            <img
              src={BUSINESS_INFO.logoUrl}
              alt="Custom Remodeling Services Logo"
              className="h-10 w-10 sm:h-11 sm:w-11 object-contain transition-transform duration-200 group-hover:scale-105"
              width="44"
              height="44"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg tracking-wider text-[#444d52] leading-tight group-hover:text-[#c79b75] transition-colors">
                CUSTOM REMODELING
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-[#c79b75] uppercase leading-none">
                SERVICES
              </span>
            </div>
          </button>

          {/* Desktop Navigation - 5 exact links in order */}
          <nav
            id="desktop-navigation-menu"
            aria-label="Main Navigation"
            className="hidden md:flex items-center space-x-1 lg:space-x-2"
          >
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  id={`desktop-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 text-sm font-medium transition-all duration-150 relative cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c79b75] rounded-xs ${
                    isActive
                      ? 'text-[#444d52] font-semibold'
                      : 'text-[#444d52]/80 hover:text-[#444d52] hover:bg-neutral-50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#c79b75]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Header CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="header-call-btn"
              href={BUSINESS_INFO.callLink}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#444d52] hover:text-[#c79b75] transition-colors"
              title="Call Custom Remodeling Services"
            >
              <Phone className="w-3.5 h-3.5 text-[#c79b75]" />
              <span className="tracking-wide">716-225-4145</span>
            </a>
            <button
              id="header-free-estimate-cta"
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center justify-center px-4 py-2 text-xs uppercase tracking-wider font-semibold bg-[#444d52] text-white hover:bg-[#c79b75] transition-all duration-200 shadow-xs cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c79b75]"
            >
              Get a Free Estimate
            </button>
          </div>

          {/* Mobile menu trigger button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              id="mobile-header-quick-call"
              href={BUSINESS_INFO.callLink}
              className="p-2 text-[#444d52] hover:text-[#c79b75] transition-colors"
              aria-label="Call Custom Remodeling Services"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-[#444d52] hover:text-[#c79b75] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c79b75]"
              aria-label="Open mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen 100dvh Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="fixed inset-0 z-50 bg-white flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-200"
          style={{ height: '100dvh' }}
        >
          {/* Header row in mobile overlay */}
          <div className="flex items-center justify-between pb-6 border-b border-[#444d52]/10">
            <div className="flex items-center gap-3">
              <img
                src={BUSINESS_INFO.logoUrl}
                alt="Custom Remodeling Services"
                className="h-10 w-10 object-contain"
                width="40"
                height="40"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-base tracking-wider text-[#444d52]">
                  CUSTOM REMODELING
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-[#c79b75] uppercase">
                  SERVICES
                </span>
              </div>
            </div>
            <button
              id="mobile-menu-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 text-[#444d52] hover:text-[#c79b75] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c79b75]"
              aria-label="Close mobile navigation menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Nav links with large tap targets (minimum 48px) */}
          <nav
            id="mobile-nav-links"
            className="flex flex-col py-6 space-y-2 overflow-y-auto"
          >
            {navItems.map((item, idx) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 text-left text-xl sm:text-2xl font-serif-heading transition-all duration-150 rounded-sm min-h-[48px] cursor-pointer ${
                    isActive
                      ? 'text-[#444d52] font-bold bg-[#faf9f7] border-l-4 border-[#c79b75]'
                      : 'text-[#444d52]/80 hover:text-[#444d52] hover:bg-neutral-50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-sans tracking-widest text-[#c79b75]">
                      0{idx + 1}
                    </span>
                    <span>{item.label}</span>
                  </span>
                  <ArrowRight
                    className={`w-5 h-5 transition-transform ${
                      isActive ? 'text-[#c79b75] translate-x-1' : 'text-neutral-300'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Mobile Bottom Actions */}
          <div className="pt-6 border-t border-[#444d52]/10 space-y-3 safe-area-bottom">
            <button
              id="mobile-menu-free-estimate-cta"
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#444d52] hover:bg-[#c79b75] text-white text-sm font-semibold tracking-wider uppercase transition-colors min-h-[48px] cursor-pointer shadow-xs"
            >
              <span>Get a Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              id="mobile-menu-call-cta"
              href={BUSINESS_INFO.callLink}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-[#444d52]/30 text-[#444d52] hover:border-[#c79b75] hover:text-[#c79b75] text-sm font-semibold tracking-wide transition-colors min-h-[48px]"
            >
              <Phone className="w-4 h-4 text-[#c79b75]" />
              <span>Call Now ({BUSINESS_INFO.phone})</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
