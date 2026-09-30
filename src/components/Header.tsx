import React, { useState } from 'react';
import { NavPage } from '../types';
import { RESORT_INFO } from '../data/resortData';

interface HeaderProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onOpenWhatsAppModal: (type?: string, detail?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenWhatsAppModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavPage; label: string }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'stay', label: 'STAY' },
    { id: 'experiences', label: 'EXPERIENCES' },
    { id: 'dining', label: 'DINING' },
    { id: 'celebrations', label: 'CELEBRATIONS' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'about', label: 'THE RESORT' },
    { id: 'location', label: 'LOCATION' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#fbf9f6]/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#e8dfd1]/60">
      <div className="h-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <img
            src={RESORT_INFO.crestLogo}
            alt="Crown Pavilion Resort Royal Emblem"
            className="w-9 h-9 rounded-full object-cover ring-1 ring-[#c5a059]/40 group-hover:ring-[#775a19] transition-all duration-300"
            onError={(e) => {
              // Fallback to secondary crest if network glitch
              (e.target as HTMLImageElement).src = RESORT_INFO.crestLogoAlt;
            }}
          />
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl uppercase tracking-wider text-[#3d342a] leading-none group-hover:text-[#775a19] transition-colors">
              Crown Pavilion
            </span>
            <span className="font-sans text-[10px] sm:text-[11px] font-semibold text-[#9e7b35] tracking-[0.25em] uppercase leading-tight mt-1">
              Resort • Agra
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-[11px] font-semibold tracking-[0.18em] uppercase py-1.5 transition-all duration-300 ${
                  isActive
                    ? 'text-[#775a19] border-b-2 border-[#c5a059]'
                    : 'text-[#4e4639] hover:text-[#3d342a] border-b-2 border-transparent'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenWhatsAppModal('general')}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 bg-[#121110] text-[#f5f0e8] hover:bg-[#c5a059] hover:text-[#4e3700] border border-[#c5a059]/60 text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-sm"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span>
            <span className="hidden sm:inline">ENQUIRE ON WHATSAPP</span>
            <span className="sm:hidden">WHATSAPP</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden inline-flex items-center justify-center p-2 text-[#3d342a] hover:text-[#775a19] focus:outline-none transition-colors"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#fbf9f6]/98 backdrop-blur-2xl border-t border-[#e8dfd1] px-6 py-6 shadow-xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-xs font-semibold tracking-[0.2em] uppercase py-2 transition-colors flex items-center justify-between ${
                    isActive ? 'text-[#775a19] font-bold border-l-2 border-[#c5a059] pl-3' : 'text-[#4e4639] hover:text-[#1b1c1a]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="material-symbols-outlined text-sm text-[#775a19]">arrow_right</span>}
                </button>
              );
            })}
            <div className="pt-3 border-t border-[#e8dfd1]/80">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsAppModal('general');
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#121110] text-[#f5f0e8] text-xs font-semibold tracking-[0.2em] uppercase border border-[#c5a059] hover:bg-[#c5a059] hover:text-[#4e3700] transition-colors"
              >
                <span className="material-symbols-outlined text-sm">chat</span>
                <span>OPEN ROYAL WHATSAPP DESK</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
