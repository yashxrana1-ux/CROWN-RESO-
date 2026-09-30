import React, { useEffect } from 'react';
import { Suite } from '../types';
import { RESORT_INFO } from '../data/resortData';

interface SuiteDetailModalProps {
  suite: Suite | null;
  onClose: () => void;
  onOpenBookingForm?: (suiteName: string) => void;
}

export const SuiteDetailModal: React.FC<SuiteDetailModalProps> = ({
  suite,
  onClose,
  onOpenBookingForm
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (suite) {
      document.body.classList.add('overflow-hidden');
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [suite, onClose]);

  if (!suite) return null;

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(
      `Hello ${RESORT_INFO.fullName}, I would like to inquire about booking the ${suite.name} (${suite.space}). Please share tariffs, inclusions, and current availability.`
    );
    window.open(`https://wa.me/${RESORT_INFO.whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#121110]/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-[#ffffff] text-[#1b1c1a] max-w-2xl w-full shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-[#e8dfd1]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 bg-[#f5f0e8] border-b border-[#e8dfd1]">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#775a19] text-2xl">
              hotel
            </span>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1b1c1a] font-medium leading-none">
                {suite.name}
              </h3>
              <span className="text-[11px] font-semibold text-[#9e7b35] tracking-widest uppercase mt-0.5 inline-block">
                {suite.tierLabel}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#615e5b] hover:text-[#1b1c1a] transition-colors"
            aria-label="Close suite details"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          {/* Photo */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#efeeeb] shadow-inner">
            <img
              src={suite.imageUrl}
              alt={suite.imageAlt}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-3 left-3 bg-[#fbf9f6] text-[#3d342a] text-[10px] font-semibold tracking-widest uppercase px-3 py-1 shadow-sm">
              {suite.space}
            </span>
            {suite.tariffs && (
              <span className="absolute bottom-3 right-3 bg-[#121110]/90 text-[#e2c48d] text-xs font-semibold tracking-wider px-3 py-1 shadow-md">
                From {suite.tariffs.startingFrom} / night
              </span>
            )}
          </div>

          {/* Description */}
          <div className="space-y-1">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#775a19] uppercase">
              Sanctuary Overview
            </span>
            <p className="text-sm text-[#4e4639] leading-relaxed">
              {suite.fullDesc}
            </p>
          </div>

          {/* Amenities & Privileges */}
          <div className="bg-[#f5f0e8] p-4 sm:p-5 border border-[#e8dfd1] space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#3d342a]">
                Included Amenities &amp; Royal Privileges
              </h4>
              <span className="text-[10px] text-[#9e7b35] font-medium uppercase tracking-widest">
                Complimentary Inclusions
              </span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3d342a]">
              {suite.amenities.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#775a19] text-[16px] shrink-0">
                    check_circle
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Concierge Booking Notice */}
          <div className="p-4 bg-[#e5dedb]/60 border-l-4 border-[#775a19] space-y-1">
            <div className="flex items-center gap-1.5 text-[#3d342a] font-semibold text-xs uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px] text-[#775a19]">verified</span>
              <span>Direct Concierge Booking Notice</span>
            </div>
            <p className="text-xs text-[#4e4639] leading-relaxed">
              Direct Reservations Managed Exclusively via WhatsApp Concierge Desk. Our reservation master will assist with personalized tariffs, specific room orientation, and complimentary monument transfers.
            </p>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="p-4 sm:p-5 bg-[#fbf9f6] border-t border-[#e8dfd1] flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#efeeeb] text-[#3d342a] hover:bg-[#e4e2df] text-xs font-semibold tracking-widest uppercase transition-colors"
          >
            Close
          </button>
          {onOpenBookingForm && (
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenBookingForm(suite.name);
              }}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#f5f0e8] text-[#775a19] border border-[#c5a059] hover:bg-[#c5a059] hover:text-[#4e3700] text-xs font-semibold tracking-widest uppercase transition-colors flex items-center justify-center gap-1.5"
            >
              <span className="material-symbols-outlined text-sm">calendar_month</span>
              <span>Check Dates</span>
            </button>
          )}
          <button
            type="button"
            onClick={handleWhatsAppInquiry}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#121110] text-[#f5f0e8] hover:bg-[#775a19] text-xs font-semibold tracking-[0.18em] uppercase transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <span className="material-symbols-outlined text-sm">chat</span>
            <span>Inquire On WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
