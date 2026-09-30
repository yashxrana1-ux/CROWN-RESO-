import React, { useState } from 'react';
import { SuiteTier, Suite } from '../types';
import { RESORT_INFO, SUITES_DATA } from '../data/resortData';

interface StayViewProps {
  onSelectSuite: (suite: Suite) => void;
  onOpenWhatsApp: (type: string, detail: string) => void;
  onOpenBookingForm: (suiteName: string) => void;
}

export const StayView: React.FC<StayViewProps> = ({
  onSelectSuite,
  onOpenWhatsApp,
  onOpenBookingForm
}) => {
  const [selectedTier, setSelectedTier] = useState<'all' | SuiteTier>('all');

  const filteredSuites = SUITES_DATA.filter((suite) => {
    if (selectedTier === 'all') return true;
    return suite.tier === selectedTier;
  });

  return (
    <div className="flex flex-col w-full bg-[#fbf9f6] text-[#1b1c1a]">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#f5f0e8] py-14 md:py-20 border-b border-[#e8dfd1]">
        {/* Subtle decorative concentric circle watermark */}
        <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-end">
          <svg className="w-full h-full max-w-[800px] text-[#775a19]/15" fill="currentColor" viewBox="0 0 100 100">
            <circle cx="90" cy="50" fill="none" r="45" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="90" cy="50" fill="none" r="35" stroke="currentColor" strokeWidth="0.3" />
            <circle cx="90" cy="50" fill="none" r="25" stroke="currentColor" strokeWidth="0.2" />
          </svg>
        </div>

        <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#775a19]" />
              <span className="font-sans text-[11px] font-semibold text-[#775a19] tracking-[0.25em] uppercase">
                Sanctuary of Agra
              </span>
              <span className="w-8 h-[1px] bg-[#775a19]" />
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1b1c1a] tracking-tight uppercase leading-tight font-normal">
              Rooms &amp; Suites
            </h1>

            <p className="font-serif italic text-xl sm:text-2xl text-[#8f4c34] font-normal">
              An intimate retreat where heritage meets modern indulgence
            </p>

            <p className="text-sm sm:text-base text-[#4e4639] max-w-2xl leading-relaxed pt-1">
              At Crown Pavilion Resort, comfort and elegance come together to create an unforgettable stay. Our thoughtfully designed rooms and suites offer spacious layouts, luxurious furnishings, and modern amenities tailored to meet the needs of every guest. Whether you seek a cozy retreat or a lavish sanctuary, each accommodation reflects our commitment to quality, tranquility, and exceptional hospitality.
            </p>

            {/* Direct Concierge Banner Notice */}
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-[#ffffff] border border-[#e8dfd1] shadow-sm">
              <span className="material-symbols-outlined text-[#775a19] text-lg">verified</span>
              <span className="text-[11px] font-semibold text-[#3d342a] uppercase tracking-wider">
                Direct Reservations Managed Exclusively via WhatsApp Concierge Desk
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Navigation Bar */}
      <section className="w-full bg-[#ffffff] sticky top-20 z-30 shadow-sm border-b border-[#e8dfd1] py-3">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
            <button
              type="button"
              onClick={() => setSelectedTier('all')}
              className={`px-4 py-2 text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 ${
                selectedTier === 'all'
                  ? 'bg-[#121110] text-[#f5f0e8] shadow-sm'
                  : 'bg-[#efeeeb] text-[#4e4639] hover:bg-[#e4e2df] hover:text-[#1b1c1a]'
              }`}
            >
              All Accommodations ({SUITES_DATA.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedTier('executive')}
              className={`px-4 py-2 text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 ${
                selectedTier === 'executive'
                  ? 'bg-[#121110] text-[#f5f0e8] shadow-sm'
                  : 'bg-[#efeeeb] text-[#4e4639] hover:bg-[#e4e2df] hover:text-[#1b1c1a]'
              }`}
            >
              Executive Tier (4)
            </button>
            <button
              type="button"
              onClick={() => setSelectedTier('royal')}
              className={`px-4 py-2 text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 ${
                selectedTier === 'royal'
                  ? 'bg-[#121110] text-[#f5f0e8] shadow-sm'
                  : 'bg-[#efeeeb] text-[#4e4639] hover:bg-[#e4e2df] hover:text-[#1b1c1a]'
              }`}
            >
              Royal &amp; Heritage Tier (2)
            </button>
          </div>

          <div className="hidden md:flex items-center gap-2 text-[#7f7667]">
            <span className="material-symbols-outlined text-base text-[#9e7b35]">deck</span>
            <span className="text-[11px] font-medium text-[#4e4639] uppercase tracking-wider">
              Mughal Garden &amp; Courtyard Vistas
            </span>
          </div>
        </div>
      </section>

      {/* Suites Catalog Grid */}
      <section className="w-full bg-[#fbf9f6] py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSuites.map((suite) => {
              const isRoyal = suite.tier === 'royal';
              return (
                <article
                  key={suite.id}
                  className="suite-card flex flex-col bg-[#f5f0e8] border border-[#e8dfd1] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Photo Container */}
                  <div className="relative h-72 w-full overflow-hidden bg-[#efeeeb]">
                    <img
                      src={suite.imageUrl}
                      alt={suite.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />

                    {/* Tier badge */}
                    <span
                      className={`absolute top-4 left-4 text-[10px] font-semibold uppercase tracking-widest px-3 py-1 shadow-sm ${
                        isRoyal
                          ? 'bg-[#775a19] text-[#ffffff]'
                          : 'bg-[#ffffff] text-[#3d342a]'
                      }`}
                    >
                      {suite.tierLabel}
                    </span>

                    {/* Space badge */}
                    <span className="absolute bottom-4 right-4 text-[11px] font-medium bg-[#121110]/85 text-[#f5f0e8] backdrop-blur-sm px-2.5 py-0.5">
                      {suite.space}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col flex-1 justify-between space-y-4 bg-[#f5f0e8]">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif text-2xl text-[#1b1c1a] font-medium">
                          {suite.name}
                        </h3>
                        <span className="text-[11px] font-bold text-[#775a19] uppercase tracking-widest">
                          {suite.bedType}
                        </span>
                      </div>
                      <p className="text-xs text-[#4e4639] leading-relaxed line-clamp-3">
                        {suite.shortDesc}
                      </p>
                    </div>

                    {/* Amenities Specification Bar */}
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-2 text-xs text-[#4e4639] bg-[#fbf9f6] p-3 border border-[#e8dfd1]/60">
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[#775a19] text-base">square_foot</span>
                          <span>{suite.keySpecs.space}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[#775a19] text-base">bed</span>
                          <span>{suite.keySpecs.bed}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[#775a19] text-base">wifi</span>
                          <span>{suite.keySpecs.wifi}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="material-symbols-outlined text-[#775a19] text-base">ac_unit</span>
                          <span>{suite.keySpecs.ac}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-[#8f4c34] pt-1">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-base">restaurant</span>
                          <span>{suite.keySpecs.breakfast}</span>
                        </span>
                        <span className="text-[10px] font-semibold text-[#9e7b35] tracking-wider uppercase">
                          {suite.keySpecs.specialHighlight}
                        </span>
                      </div>

                      {/* Action CTAs */}
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <button
                          type="button"
                          onClick={() => onSelectSuite(suite)}
                          className="w-full py-2.5 bg-[#ffffff] text-[#1b1c1a] border border-[#e8dfd1] text-[11px] font-semibold tracking-wider uppercase hover:bg-[#efeeeb] transition-colors flex items-center justify-center gap-1"
                        >
                          View Details
                        </button>
                        <button
                          type="button"
                          onClick={() => onOpenWhatsApp('stay', suite.name)}
                          className={`w-full py-2.5 text-[11px] font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1 ${
                            isRoyal
                              ? 'bg-[#775a19] text-[#ffffff] hover:bg-[#121110]'
                              : 'bg-[#121110] text-[#f5f0e8] hover:bg-[#c5a059] hover:text-[#4e3700]'
                          }`}
                        >
                          <span className="material-symbols-outlined text-sm">chat</span>
                          <span>WhatsApp</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive WhatsApp Concierge Booking Banner */}
      <section className="w-full bg-[#f5f0e8] py-16 border-t border-[#e8dfd1]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-[#121110] text-[#f5f0e8] p-8 sm:p-12 shadow-xl border border-[#3d342a] flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex items-center gap-2 text-[#e2c48d]">
                <span className="material-symbols-outlined text-xl">hotel_class</span>
                <span className="text-[11px] font-semibold tracking-widest uppercase">
                  Bespoke Hospitality
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#f5f0e8] leading-tight">
                Direct Reservations via Royal WhatsApp Concierge
              </h2>
              <p className="text-xs sm:text-sm text-[#d1c5b4] leading-relaxed">
                Our concierge desk personally attends to all suite allocations, early check-in courtesies, culinary preferences, and curated private Taj Mahal transfers. Speak directly with our reservation masters for privileged rates and personalized itineraries.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
              <button
                type="button"
                onClick={() => onOpenWhatsApp('stay', 'Luxury Suite Reservation')}
                className="px-6 py-3.5 bg-[#c5a059] text-[#4e3700] text-xs font-semibold tracking-wider uppercase hover:bg-[#e2c48d] transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Connect On WhatsApp</span>
              </button>
              <a
                href={`tel:${RESORT_INFO.phoneRaw}`}
                className="px-6 py-3.5 bg-[#ffffff]/10 text-[#f5f0e8] text-xs font-semibold tracking-wider uppercase hover:bg-[#ffffff]/20 transition-colors flex items-center justify-center gap-2 border border-[#f5f0e8]/20"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>{RESORT_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Acclaim Strip */}
      <section className="w-full bg-[#fbf9f6] py-16 border-t border-[#e8dfd1]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[11px] font-semibold uppercase text-[#775a19] tracking-[0.2em]">
              Guest Acclaim
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1b1c1a] mt-1 font-medium">
              Acclaimed by Discerning Voyagers
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-[#ffffff] p-6 text-center flex flex-col items-center justify-center border border-[#e8dfd1] shadow-sm">
              <span className="font-serif text-3xl sm:text-4xl text-[#1b1c1a] leading-none">
                {RESORT_INFO.ratings.google}
              </span>
              <span className="text-[11px] font-semibold text-[#775a19] uppercase tracking-widest mt-2">
                Google Rating
              </span>
              <span className="text-[11px] text-[#615e5b] mt-1">
                {RESORT_INFO.ratings.googleReviews}
              </span>
            </div>

            <div className="bg-[#ffffff] p-6 text-center flex flex-col items-center justify-center border border-[#e8dfd1] shadow-sm">
              <span className="font-serif text-3xl sm:text-4xl text-[#1b1c1a] leading-none">
                {RESORT_INFO.ratings.tripAdvisor}
              </span>
              <span className="text-[11px] font-semibold text-[#775a19] uppercase tracking-widest mt-2">
                Tripadvisor Rating
              </span>
              <span className="text-[11px] text-[#615e5b] mt-1">
                {RESORT_INFO.ratings.tripAdvisorReviews}
              </span>
            </div>

            <div className="bg-[#ffffff] p-6 text-center flex flex-col items-center justify-center border border-[#e8dfd1] shadow-sm">
              <span className="font-serif text-3xl sm:text-4xl text-[#1b1c1a] leading-none">
                {RESORT_INFO.ratings.facebookFollowers}
              </span>
              <span className="text-[11px] font-semibold text-[#775a19] uppercase tracking-widest mt-2">
                Facebook Likes
              </span>
              <span className="text-[11px] text-[#615e5b] mt-1">Global Traveler Circle</span>
            </div>

            <div className="bg-[#ffffff] p-6 text-center flex flex-col items-center justify-center border border-[#e8dfd1] shadow-sm">
              <span className="font-serif text-3xl sm:text-4xl text-[#1b1c1a] leading-none">
                {RESORT_INFO.ratings.instagramFollowers}
              </span>
              <span className="text-[11px] font-semibold text-[#775a19] uppercase tracking-widest mt-2">
                Instagram Followers
              </span>
              <span className="text-[11px] text-[#615e5b] mt-1">{RESORT_INFO.handles.x} Storytellers</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
