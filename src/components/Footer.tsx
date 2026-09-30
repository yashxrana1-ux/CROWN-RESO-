import React from 'react';
import { NavPage } from '../types';
import { RESORT_INFO } from '../data/resortData';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
  onOpenWhatsAppModal: (type?: string, detail?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenWhatsAppModal }) => {
  const handleNav = (page: NavPage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#121110] text-[#f5f0e8] border-t border-[#3d342a]/40">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-14 border-b border-[#3d342a]">
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <img
                src={RESORT_INFO.crestLogo}
                alt="Crown Pavilion Resort Royal Emblem"
                className="w-10 h-10 rounded-full object-cover ring-1 ring-[#c5a059]/40"
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl uppercase tracking-wider text-[#f5f0e8] leading-none">
                  Crown Pavilion Resort
                </span>
                <span className="font-sans text-[11px] font-semibold text-[#e2c48d] tracking-[0.25em] uppercase mt-1">
                  Agra, India
                </span>
              </div>
            </div>

            <p className="font-serif italic text-lg text-[#e2c48d] font-normal leading-snug">
              Where Heritage Meets Modern Indulgence
            </p>

            <p className="text-xs text-[#d1c5b4] leading-relaxed max-w-sm">
              An architectural tribute to Mughal grandeur and timeless sanctuary. Nestled amidst heritage gardens near the immortal Taj Mahal, orchestrating bespoke regal hospitality, royal gastronomy, and lifelong celebrations.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="text-[11px] font-semibold text-[#e2c48d] tracking-widest uppercase">
                {RESORT_INFO.handles.x}
              </span>
              <span className="text-[#7f7667]">•</span>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#d1c5b4] hover:text-[#e2c48d] transition-colors"
              >
                Instagram
              </a>
              <span className="text-[#7f7667]">•</span>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#d1c5b4] hover:text-[#e2c48d] transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Column 2: Curated Exploration */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-sans text-[11px] font-semibold text-[#e2c48d] tracking-[0.2em] uppercase mb-1">
              Curated Exploration
            </h4>
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => handleNav('stay')}
                className="text-left text-xs text-[#f5f0e8]/80 hover:text-[#e2c48d] transition-colors"
              >
                Rooms &amp; Royal Suites
              </button>
              <button
                onClick={() => handleNav('experiences')}
                className="text-left text-xs text-[#f5f0e8]/80 hover:text-[#e2c48d] transition-colors"
              >
                Bespoke Experiences
              </button>
              <button
                onClick={() => handleNav('dining')}
                className="text-left text-xs text-[#f5f0e8]/80 hover:text-[#e2c48d] transition-colors"
              >
                Royal Gastronomy &amp; Star Dining
              </button>
              <button
                onClick={() => handleNav('celebrations')}
                className="text-left text-xs text-[#f5f0e8]/80 hover:text-[#e2c48d] transition-colors"
              >
                Weddings &amp; Celebrations
              </button>
              <button
                onClick={() => handleNav('gallery')}
                className="text-left text-xs text-[#f5f0e8]/80 hover:text-[#e2c48d] transition-colors"
              >
                Architectural Gallery
              </button>
              <button
                onClick={() => handleNav('about')}
                className="text-left text-xs text-[#f5f0e8]/80 hover:text-[#e2c48d] transition-colors"
              >
                Architectural Philosophy
              </button>
              <button
                onClick={() => handleNav('location')}
                className="text-left text-xs text-[#f5f0e8]/80 hover:text-[#e2c48d] transition-colors"
              >
                Resort Environs &amp; Location
              </button>
            </div>
          </div>

          {/* Column 3: Resort Concierge & Touchpoints */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h4 className="font-sans text-[11px] font-semibold text-[#e2c48d] tracking-[0.2em] uppercase">
              Resort Concierge &amp; Touchpoints
            </h4>

            <div className="flex flex-col space-y-2.5 text-xs text-[#f5f0e8]/85">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#e2c48d] text-[18px] shrink-0 mt-0.5">
                  location_on
                </span>
                <span>{RESORT_INFO.locationBrief}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#e2c48d] text-[18px] shrink-0">
                  call
                </span>
                <a
                  href={`tel:${RESORT_INFO.phoneRaw}`}
                  className="hover:text-[#e2c48d] transition-colors"
                >
                  {RESORT_INFO.phone} (24/7 Front Desk)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#e2c48d] text-[18px] shrink-0">
                  chat
                </span>
                <button
                  onClick={() => onOpenWhatsAppModal('general')}
                  className="text-left hover:text-[#e2c48d] transition-colors underline underline-offset-4 decoration-[#c5a059]"
                >
                  WhatsApp: {RESORT_INFO.whatsappDisplay} (Direct Concierge Desk)
                </button>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#e2c48d] text-[18px] shrink-0">
                  mail
                </span>
                <a
                  href={`mailto:${RESORT_INFO.email}`}
                  className="hover:text-[#e2c48d] transition-colors"
                >
                  {RESORT_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://maps.google.com/?q=Crown+Pavilion+Resort+Agra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-[#e2c48d] hover:text-[#f5f0e8] transition-colors underline underline-offset-4 decoration-[#c5a059]"
              >
                <span className="material-symbols-outlined text-[15px]">map</span>
                <span>Open Google Maps</span>
              </a>
              <span className="text-[#3d342a]">•</span>
              <button
                onClick={() => onOpenWhatsAppModal('concierge')}
                className="text-[11px] font-semibold tracking-wider uppercase text-[#d1c5b4] hover:text-[#e2c48d] transition-colors"
              >
                Request Chauffeur
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#d1c5b4]/80">
          <div>
            © 2025 Crown Pavilion Resort, Agra. Crafted for Connoisseurs. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('about')}
              className="hover:text-[#f5f0e8] transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleNav('about')}
              className="hover:text-[#f5f0e8] transition-colors"
            >
              Terms of Residency
            </button>
            <button
              onClick={() => onOpenWhatsAppModal('general')}
              className="hover:text-[#f5f0e8] transition-colors text-[#e2c48d]"
            >
              Bespoke Concierge
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
