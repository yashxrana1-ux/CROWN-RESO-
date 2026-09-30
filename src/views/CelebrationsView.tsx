import React, { useState } from 'react';
import { RESORT_INFO } from '../data/resortData';

interface CelebrationsViewProps {
  onOpenWhatsApp: (type: string, detail?: string) => void;
}

export const CelebrationsView: React.FC<CelebrationsViewProps> = ({ onOpenWhatsApp }) => {
  const [eventType, setEventType] = useState('Destination Wedding (Multi-day)');
  const [guestCount, setGuestCount] = useState('250-500 guests');
  const [eventDate, setEventDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = [
      `Hello ${RESORT_INFO.fullName}, I am planning an event at your resort:`,
      `• Event Type: ${eventType}`,
      `• Guest Count: ${guestCount}`,
      eventDate ? `• Preferred Date: ${eventDate}` : '',
      notes ? `• Details/Requirements: ${notes}` : ''
    ].filter(Boolean).join('\n');

    const encoded = encodeURIComponent(query);
    window.open(`https://wa.me/${RESORT_INFO.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col w-full bg-[#fbf9f6] text-[#1b1c1a]">
      {/* Hero Banner */}
      <section className="relative w-full bg-[#121110] text-[#f5f0e8] py-16 md:py-24 overflow-hidden border-b border-[#3d342a]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage: `url('${RESORT_INFO.weddingImage}')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/75 to-[#121110]/50" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#9e7b35]" />
            <span className="text-[11px] font-semibold text-[#e2c48d] uppercase tracking-[0.25em]">
              Royal Celebrations
            </span>
            <span className="w-8 h-[1px] bg-[#9e7b35]" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f5f0e8] uppercase tracking-tight">
            Celebrate The Extraordinary
          </h1>
          <p className="font-serif italic text-xl text-[#e2c48d] mt-2 font-normal">
            A Majestic Backdrop for Unforgettable Vows &amp; Grand Galas
          </p>
          <p className="text-sm text-[#d1c5b4] mt-4 leading-relaxed">
            Sprawling manicured royal lawns, grand Mughal arches, and heritage courtyards for destination weddings of up to 1,500 guests in Agra.
          </p>
        </div>
      </section>

      {/* Spaces & Features */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[#f5f0e8] p-6 sm:p-8 border border-[#e8dfd1] shadow-sm space-y-3">
              <span className="material-symbols-outlined text-[#775a19] text-3xl">grass</span>
              <h3 className="font-serif text-2xl text-[#3d342a]">
                The Royal Pavilion Lawns
              </h3>
              <p className="text-xs text-[#615e5b] leading-relaxed">
                Over 45,000 square feet of manicured emerald lawns flanked by illuminated Mughal colonnades, capable of hosting grand wedding ceremonies, lavish mandaps, and receptions up to 1,500 guests.
              </p>
            </div>

            <div className="bg-[#f5f0e8] p-6 sm:p-8 border border-[#e8dfd1] shadow-sm space-y-3">
              <span className="material-symbols-outlined text-[#775a19] text-3xl">celebration</span>
              <h3 className="font-serif text-2xl text-[#3d342a]">
                The Sangeet Courtyard
              </h3>
              <p className="text-xs text-[#615e5b] leading-relaxed">
                An intimate open-air amphitheater setting surrounded by carved sandstone jaalis, perfect for high-energy Sangeet performances, Mehendi brunches, and sundown cocktail galas.
              </p>
            </div>

            <div className="bg-[#f5f0e8] p-6 sm:p-8 border border-[#e8dfd1] shadow-sm space-y-3">
              <span className="material-symbols-outlined text-[#775a19] text-3xl">dinner_dining</span>
              <h3 className="font-serif text-2xl text-[#3d342a]">
                Customized Royal Catering
              </h3>
              <p className="text-xs text-[#615e5b] leading-relaxed">
                Multi-cuisine live culinary stations ranging from authentic royal Awadhi dum spreads, Chaat gallis of Old Agra, charcoal sigri barbecues, and global gourmet spreads.
              </p>
            </div>
          </div>

          {/* Event Inquiry Form */}
          <div className="bg-[#ffffff] p-8 sm:p-12 border border-[#e8dfd1] shadow-lg max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-[11px] font-semibold uppercase text-[#775a19] tracking-[0.2em]">
                Start Planning
              </span>
              <h3 className="font-serif text-3xl text-[#3d342a] mt-1">
                Plan Your Royal Celebration
              </h3>
              <p className="text-xs text-[#615e5b] mt-2">
                Connect with our Master Event Curators to discuss custom dates, lawn configurations, and bridal suite packages.
              </p>
            </div>

            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#4e4639] uppercase tracking-wider mb-1">
                    Occasion / Event Type
                  </label>
                  <select
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs bg-[#f5f0e8] border border-[#e8dfd1] text-[#1b1c1a] focus:outline-none focus:border-[#775a19]"
                  >
                    <option value="Destination Wedding (Multi-day)">Destination Wedding (Multi-day)</option>
                    <option value="Wedding Reception">Wedding Reception (Single Day)</option>
                    <option value="Sangeet / Mehendi Gala">Sangeet / Mehendi Gala</option>
                    <option value="Corporate Executive Retreat">Corporate Executive Retreat</option>
                    <option value="Anniversary / Milestone Gala">Anniversary / Milestone Gala</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4e4639] uppercase tracking-wider mb-1">
                    Estimated Guest Count
                  </label>
                  <select
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full px-3 py-2.5 text-xs bg-[#f5f0e8] border border-[#e8dfd1] text-[#1b1c1a] focus:outline-none focus:border-[#775a19]"
                  >
                    <option value="50-100 guests (Intimate)">50–100 guests (Intimate)</option>
                    <option value="100-250 guests">100–250 guests</option>
                    <option value="250-500 guests">250–500 guests</option>
                    <option value="500-1000 guests">500–1000 guests</option>
                    <option value="1000-1500 guests (Grand Lawn)">1000–1500 guests (Grand Lawn)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4e4639] uppercase tracking-wider mb-1">
                  Target Date / Month
                </label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-[#f5f0e8] border border-[#e8dfd1] text-[#1b1c1a] focus:outline-none focus:border-[#775a19]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4e4639] uppercase tracking-wider mb-1">
                  Specific Requirements or Questions
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Need accommodation for 80 guests across royal suites, pre-wedding shoot access, pure vegetarian catering..."
                  className="w-full px-3 py-2 text-xs bg-[#f5f0e8] border border-[#e8dfd1] text-[#1b1c1a] focus:outline-none focus:border-[#775a19]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#121110] text-[#f5f0e8] hover:bg-[#c5a059] hover:text-[#4e3700] text-xs font-semibold tracking-[0.2em] uppercase transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  <span>SUBMIT CELEBRATION INQUIRY ON WHATSAPP</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
