import React, { useState } from 'react';
import { DINING_HIGHLIGHTS, RESORT_INFO } from '../data/resortData';

interface DiningViewProps {
  onOpenWhatsApp: (type: string, detail?: string) => void;
}

export const DiningView: React.FC<DiningViewProps> = ({ onOpenWhatsApp }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'starters' | 'mains' | 'desserts'>('all');

  const filteredItems = DINING_HIGHLIGHTS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="flex flex-col w-full bg-[#fbf9f6] text-[#1b1c1a]">
      {/* Hero Banner */}
      <section className="relative w-full bg-[#121110] text-[#f5f0e8] py-16 md:py-24 overflow-hidden border-b border-[#3d342a]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAVVbcL0b_YYJkcg2EqGLkD7TEXtLz5ZlrF6yTOLAm163MhY8x3RiBqVngVPx99JZVs2-GYCCnnXZ8WsKlPTbLOvssfH1RlI5eke5KIFnZuCakFrHPgaHMdOfo_CenB8KpxES3Ic0oQfmdsWci9I82_9f-XcFs-NngbnLqyTHsYmJnWzAzIkpRkADGYsEGcmHB9-wP4faa3VsGwxwmTygpRPsZcYB-xhJBu397XlHrZkewscYVOne5-w')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/75 to-[#121110]/50" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#9e7b35]" />
            <span className="text-[11px] font-semibold text-[#e2c48d] uppercase tracking-[0.25em]">
              Royal Gastronomy
            </span>
            <span className="w-8 h-[1px] bg-[#9e7b35]" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f5f0e8] uppercase tracking-tight">
            Dine Under The Stars
          </h1>
          <p className="font-serif italic text-xl text-[#e2c48d] mt-2 font-normal">
            A symphony of royal Mughlai flavours and starlit ambiance
          </p>
          <p className="text-sm text-[#d1c5b4] mt-4 leading-relaxed">
            Feast on centuries of regal recipes, where slow-simmered dum preparations, clay tandoor delicacies, and hand-ground spice blends meet modern culinary panache.
          </p>
        </div>
      </section>

      {/* Culinary Spaces Overview */}
      <section className="w-full py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#f5f0e8] p-8 border border-[#e8dfd1] flex flex-col justify-between shadow-sm">
              <div className="space-y-3">
                <span className="text-[11px] font-semibold text-[#9e7b35] tracking-widest uppercase block">
                  Outdoor Sanctuary
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#3d342a]">
                  The Starlight Courtyard
                </h3>
                <p className="text-xs sm:text-sm text-[#615e5b] leading-relaxed">
                  Open-air dining adjacent to the serene lotus reflection pools. Live charcoal sigris sizzle with kebabs while candlelit lanterns cast dancing patterns across carved sandstone arches.
                </p>
                <div className="pt-2 text-xs text-[#775a19] font-medium">
                  Dinner: 7:00 PM – 11:30 PM • Live Sitar from 7:30 PM
                </div>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onOpenWhatsApp('dining', 'Starlight Courtyard Table')}
                  className="px-6 py-2.5 bg-[#121110] text-[#f5f0e8] hover:bg-[#c5a059] hover:text-[#4e3700] text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  Reserve Starlight Table
                </button>
              </div>
            </div>

            <div className="bg-[#f5f0e8] p-8 border border-[#e8dfd1] flex flex-col justify-between shadow-sm">
              <div className="space-y-3">
                <span className="text-[11px] font-semibold text-[#9e7b35] tracking-widest uppercase block">
                  Imperial Dining Hall
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#3d342a]">
                  The Shahi Darbar Restaurant
                </h3>
                <p className="text-xs sm:text-sm text-[#615e5b] leading-relaxed">
                  An air-conditioned palatial dining hall featuring hand-painted mythological frescoes, plush velvet divans, and an extensive breakfast and lunch banquet service.
                </p>
                <div className="pt-2 text-xs text-[#775a19] font-medium">
                  Breakfast: 7:00 AM – 10:30 AM • Lunch: 12:30 PM – 3:30 PM
                </div>
              </div>
              <div className="pt-6">
                <button
                  onClick={() => onOpenWhatsApp('dining', 'Shahi Darbar Dining')}
                  className="px-6 py-2.5 bg-[#121110] text-[#f5f0e8] hover:bg-[#c5a059] hover:text-[#4e3700] text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  Book Darbar Seating
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes Menu Curations */}
      <section className="w-full bg-[#f5f0e8] py-16 lg:py-24 border-t border-[#e8dfd1]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-semibold uppercase text-[#775a19] tracking-[0.2em]">
              Imperial Culinary Repertoire
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3d342a] mt-1">
              Curated Specialties
            </h2>
            <p className="text-xs text-[#615e5b] mt-2">
              Signature Awadhi, Mughlai, and North-West Frontier specialties slow-cooked with heirloom spices.
            </p>

            {/* Category tabs */}
            <div className="flex justify-center gap-2 mt-6">
              {(['all', 'starters', 'mains', 'desserts'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-[11px] font-semibold tracking-widest uppercase transition-all ${
                    activeCategory === cat
                      ? 'bg-[#121110] text-[#f5f0e8]'
                      : 'bg-[#ffffff] text-[#3d342a] border border-[#e8dfd1] hover:bg-[#efeeeb]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((dish, i) => (
              <div
                key={i}
                className="bg-[#ffffff] p-6 border border-[#e8dfd1] flex flex-col justify-between shadow-sm space-y-3"
              >
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-serif text-xl text-[#3d342a]">
                      {dish.name}
                    </h4>
                    {dish.isChefSpecial && (
                      <span className="text-[10px] font-bold bg-[#c5a059] text-[#4e3700] px-2 py-0.5 uppercase tracking-wider shrink-0">
                        Chef's Crown
                      </span>
                    )}
                  </div>
                  {dish.origin && (
                    <span className="text-[11px] font-semibold text-[#9e7b35] uppercase tracking-wider block mt-0.5">
                      Heritage: {dish.origin}
                    </span>
                  )}
                  <p className="text-xs text-[#615e5b] mt-2 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#e8dfd1]/80 flex items-center justify-between">
                  <span className="text-[11px] text-[#775a19] font-medium">
                    Served with artisanal accompaniments
                  </span>
                  <button
                    onClick={() => onOpenWhatsApp('dining', `Special Request: ${dish.name}`)}
                    className="text-[11px] font-semibold text-[#121110] hover:text-[#9e7b35] underline uppercase tracking-wider"
                  >
                    Inquire Item
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Banner */}
          <div className="mt-14 p-8 bg-[#121110] text-[#f5f0e8] border border-[#3d342a] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-serif text-2xl text-[#e2c48d]">
                Private Candlelit Pavilion Dinner
              </h3>
              <p className="text-xs text-[#d1c5b4] max-w-xl">
                Planning an anniversary, proposal, or private family celebration? Reserve a secluded sandstone pavilion decorated with fresh tuberose, marigolds, and dedicated butler service.
              </p>
            </div>
            <button
              onClick={() => onOpenWhatsApp('dining', 'Private Candlelit Pavilion Reservation')}
              className="px-6 py-3.5 bg-[#c5a059] text-[#4e3700] hover:bg-[#e2c48d] text-xs font-semibold tracking-widest uppercase transition-colors shrink-0 shadow-md"
            >
              Book Private Pavilion
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
