import React from 'react';

interface FloatingWhatsAppProps {
  onClick: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center justify-center">
      <button
        onClick={onClick}
        aria-label="Enquire on WhatsApp Concierge"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#121110] border border-[#c5a059] text-[#e2c48d] hover:text-[#121110] hover:bg-[#c5a059] shadow-[0_20px_40px_-10px_rgba(26,24,22,0.35)] transition-all duration-300 focus:outline-none"
      >
        <span className="absolute -inset-1 rounded-full bg-[#c5a059]/25 animate-ping pointer-events-none" />
        <span className="material-symbols-outlined text-[26px]">chat</span>

        {/* Hover Tooltip */}
        <span className="absolute right-full mr-3 hidden group-hover:flex items-center whitespace-nowrap bg-[#121110] text-[#f5f0e8] text-[11px] font-semibold tracking-wider uppercase px-3 py-1.5 border border-[#c5a059] shadow-lg pointer-events-none transition-all">
          Concierge WhatsApp Desk
        </span>
      </button>
    </div>
  );
};
