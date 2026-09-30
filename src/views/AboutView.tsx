import React from 'react';
import { ARCHITECTURAL_PILLARS, RESORT_INFO } from '../data/resortData';

interface AboutViewProps {
  onOpenWhatsApp: (type: string, detail?: string) => void;
  onNavigate: (page: any) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenWhatsApp, onNavigate }) => {
  return (
    <div className="flex flex-col w-full bg-[#fbf9f6] text-[#1b1c1a]">
      {/* Header Banner */}
      <section className="relative w-full bg-[#121110] text-[#f5f0e8] py-16 md:py-24 overflow-hidden border-b border-[#3d342a]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage: `url('${RESORT_INFO.courtyardImage}')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/75 to-[#121110]/50" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#9e7b35]" />
            <span className="text-[11px] font-semibold text-[#e2c48d] uppercase tracking-[0.25em]">
              The Story of Crown Pavilion
            </span>
            <span className="w-8 h-[1px] bg-[#9e7b35]" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f5f0e8] uppercase tracking-tight">
            The Resort &amp; Heritage
          </h1>
          <p className="font-serif italic text-xl text-[#e2c48d] mt-2 font-normal">
            Where Mughal architectural poetry meets contemporary indulgence
          </p>
          <p className="text-sm text-[#d1c5b4] mt-4 leading-relaxed">
            Constructed with indigenous red sandstone, handcrafted jaali screens, and serene water courts that mirror the celestial balance of historical Agra.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-[11px] font-semibold text-[#9e7b35] uppercase tracking-[0.25em]">
                Foundational Vision
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#3d342a] leading-tight">
                Crafted by Generational Artisans
              </h2>
              <p className="text-sm text-[#4e4639] leading-relaxed">
                Crown Pavilion Resort was conceived as an unhurried, regal sanctuary for travelers seeking the cultural majesty of Agra without the dense commotion of city centers.
              </p>
              <p className="text-sm text-[#4e4639] leading-relaxed">
                Every stone column was hand-dressed by generational masons using techniques directly descended from the builders of Fatehpur Sikri and the Taj Mahal. The geometric jaalis (latticework stone screens) naturally cool the ambient breeze and project intricate, shifting shadows as the golden Indian sun travels across the sky.
              </p>
              <div className="p-4 bg-[#f5f0e8] border-l-4 border-[#775a19] text-xs text-[#3d342a] italic">
                "Our philosophy is rooted in ‘Atithi Devo Bhava’ — where every arrival is received with the sacred deference accorded to imperial guests."
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="relative aspect-[4/3] overflow-hidden shadow-xl border border-[#e8dfd1] bg-[#efeeeb]">
                <img
                  src={RESORT_INFO.sandstoneDetailImage}
                  alt="Artisanal red sandstone carving at Crown Pavilion Resort"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* 4 Pillars In Detail */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <span className="text-[11px] font-semibold uppercase text-[#775a19] tracking-[0.2em]">
                Core Tenets
              </span>
              <h3 className="font-serif text-3xl text-[#3d342a] mt-1">
                The Four Pillars of Crown Pavilion
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ARCHITECTURAL_PILLARS.map((pillar) => (
                <div
                  key={pillar.number}
                  className="bg-[#f5f0e8] p-6 border border-[#e8dfd1] shadow-sm space-y-2"
                >
                  <span className="font-serif text-3xl text-[#9e7b35]">
                    {pillar.number}
                  </span>
                  <h4 className="font-serif text-xl text-[#3d342a]">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#615e5b] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Explore actions */}
          <div className="mt-16 text-center space-x-4">
            <button
              onClick={() => onNavigate('stay')}
              className="px-6 py-3 bg-[#121110] text-[#f5f0e8] hover:bg-[#c5a059] hover:text-[#4e3700] text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              Explore Rooms &amp; Suites
            </button>
            <button
              onClick={() => onOpenWhatsApp('general', 'Resort Architecture & Heritage Tour')}
              className="px-6 py-3 bg-[#f5f0e8] text-[#3d342a] border border-[#e8dfd1] hover:bg-[#efeeeb] text-xs font-semibold tracking-widest uppercase transition-colors"
            >
              Book Heritage Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
