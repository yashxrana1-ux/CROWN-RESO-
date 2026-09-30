import React, { useState, useEffect } from 'react';
import { RESORT_INFO, SUITES_DATA } from '../data/resortData';

interface BookingInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSuiteName?: string;
}

export const BookingInquiryModal: React.FC<BookingInquiryModalProps> = ({
  isOpen,
  onClose,
  selectedSuiteName = ''
}) => {
  const [suiteName, setSuiteName] = useState(selectedSuiteName || SUITES_DATA[0].name);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  const [specialRequests, setSpecialRequests] = useState('');

  useEffect(() => {
    if (selectedSuiteName) {
      setSuiteName(selectedSuiteName);
    }
  }, [selectedSuiteName]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = [
      `Hello ${RESORT_INFO.fullName}, I would like to reserve accommodations:`,
      `• Suite: ${suiteName}`,
      checkIn ? `• Check-in: ${checkIn}` : '',
      checkOut ? `• Check-out: ${checkOut}` : '',
      `• Guests: ${guests}`,
      specialRequests ? `• Special Requests: ${specialRequests}` : ''
    ].filter(Boolean).join('\n');

    const encoded = encodeURIComponent(query);
    window.open(`https://wa.me/${RESORT_INFO.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#121110]/75 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#ffffff] text-[#1b1c1a] shadow-2xl border border-[#e8dfd1] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#e8dfd1]">
          <div>
            <span className="text-[10px] font-semibold tracking-widest text-[#9e7b35] uppercase">
              Bespoke Stay Concierge
            </span>
            <h3 className="font-serif text-2xl text-[#3d342a] font-medium leading-tight">
              Reserve Your Sanctuary
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-[#615e5b] hover:text-[#1b1c1a] transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="py-4 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#4e4639] uppercase tracking-wider mb-1">
              Select Suite or Room
            </label>
            <select
              value={suiteName}
              onChange={(e) => setSuiteName(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-[#f5f0e8] border border-[#e8dfd1] text-[#1b1c1a] focus:outline-none focus:border-[#775a19]"
            >
              {SUITES_DATA.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name} ({s.tierLabel}) — {s.space}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#4e4639] uppercase tracking-wider mb-1">
                Check-in Date
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#f5f0e8] border border-[#e8dfd1] text-[#1b1c1a] focus:outline-none focus:border-[#775a19]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#4e4639] uppercase tracking-wider mb-1">
                Check-out Date
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-[#f5f0e8] border border-[#e8dfd1] text-[#1b1c1a] focus:outline-none focus:border-[#775a19]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#4e4639] uppercase tracking-wider mb-1">
              Number of Guests
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-[#f5f0e8] border border-[#e8dfd1] text-[#1b1c1a] focus:outline-none focus:border-[#775a19]"
            >
              <option value="1 Adult">1 Adult</option>
              <option value="2 Adults">2 Adults</option>
              <option value="2 Adults, 1 Child">2 Adults, 1 Child</option>
              <option value="2 Adults, 2 Children">2 Adults, 2 Children</option>
              <option value="3+ Guests (Multi-room)">3+ Guests (Multi-room curation)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#4e4639] uppercase tracking-wider mb-1">
              Special Requests or Preferences
            </label>
            <textarea
              rows={2}
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              placeholder="e.g. Airport pickup, anniversary decoration, vegetarian breakfast..."
              className="w-full px-3 py-2 text-xs bg-[#f5f0e8] border border-[#e8dfd1] text-[#1b1c1a] focus:outline-none focus:border-[#775a19]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 bg-[#121110] text-[#f5f0e8] hover:bg-[#c5a059] hover:text-[#4e3700] text-xs font-semibold tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <span className="material-symbols-outlined text-base">chat</span>
              <span>CONFIRM VIA WHATSAPP CONCIERGE</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
