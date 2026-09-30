import React from 'react';
import { RESORT_INFO, TRANSIT_DISTANCES } from '../data/resortData';

interface LocationViewProps {
  onOpenWhatsApp: (type: string, detail?: string) => void;
}

export const LocationView: React.FC<LocationViewProps> = ({ onOpenWhatsApp }) => {
  return (
    <div className="flex flex-col w-full bg-[#fbf9f6] text-[#1b1c1a]">
      {/* Header Banner */}
      <section className="relative w-full bg-[#121110] text-[#f5f0e8] py-16 md:py-24 overflow-hidden border-b border-[#3d342a]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('${RESORT_INFO.mapImage}')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/75 to-[#121110]/50" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#9e7b35]" />
            <span className="text-[11px] font-semibold text-[#e2c48d] uppercase tracking-[0.25em]">
              Sanctuary &amp; Proximity
            </span>
            <span className="w-8 h-[1px] bg-[#9e7b35]" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f5f0e8] uppercase tracking-tight">
            Your Escape, Close to Agra
          </h1>
          <p className="font-serif italic text-xl text-[#e2c48d] mt-2 font-normal">
            Tranquil countryside seclusion along the primary Taj Mahal corridor
          </p>
          <p className="text-sm text-[#d1c5b4] mt-4 leading-relaxed">
            Located on Fatehabad Road in Dauki, Crown Pavilion Resort offers prompt, seamless highway connectivity from Delhi, Noida, Lucknow, and Jaipur.
          </p>
        </div>
      </section>

      {/* Main Location Content */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left info & transit matrix */}
            <div className="lg:col-span-6 space-y-6">
              <div className="bg-[#f5f0e8] p-6 sm:p-8 border border-[#e8dfd1] space-y-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#775a19] text-3xl shrink-0 mt-1">
                    location_on
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-[#3d342a]">
                      Crown Pavilion Resort Agra
                    </h3>
                    <p className="text-xs sm:text-sm text-[#615e5b] mt-1 leading-relaxed">
                      {RESORT_INFO.locationBrief}
                    </p>
                    <div className="mt-3 flex items-center gap-4 text-xs text-[#775a19] font-medium">
                      <span>Coordinates: 27.1420° N, 78.1180° E</span>
                      <span>•</span>
                      <span>PIN: 283111</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href="https://maps.google.com/?q=Crown+Pavilion+Resort+Agra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-[#121110] text-[#f5f0e8] hover:bg-[#c5a059] hover:text-[#4e3700] text-xs font-semibold tracking-wider uppercase transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px]">map</span>
                    <span>Open in Google Maps</span>
                  </a>

                  <button
                    onClick={() => onOpenWhatsApp('concierge', 'Chauffeur Booking')}
                    className="px-5 py-2.5 bg-[#ffffff] text-[#3d342a] border border-[#e8dfd1] hover:bg-[#efeeeb] text-xs font-semibold tracking-wider uppercase transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined text-[16px]">directions_car</span>
                    <span>Book Chauffeur</span>
                  </button>
                </div>
              </div>

              {/* Transit Distances Grid */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold text-[#775a19] uppercase tracking-[0.2em]">
                  Estimated Transit Distances
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {TRANSIT_DISTANCES.map((item) => (
                    <div
                      key={item.landmark}
                      className="bg-[#ffffff] p-4 border border-[#e8dfd1] flex items-center justify-between shadow-sm"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[#9e7b35] text-[20px]">
                          {item.icon}
                        </span>
                        <div>
                          <span className="text-xs font-semibold text-[#3d342a] block">
                            {item.landmark}
                          </span>
                          <span className="text-[11px] text-[#615e5b]">{item.distance}</span>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-[#775a19] bg-[#f5f0e8] px-2 py-1 border border-[#e8dfd1]">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highway Connectivity */}
              <div className="bg-[#f5f0e8] p-5 border border-[#e8dfd1] text-xs text-[#4e4639] space-y-2">
                <span className="font-semibold uppercase tracking-wider text-[#3d342a] block">
                  Expressway Access Routes:
                </span>
                <p>
                  <strong>From Delhi / NCR:</strong> Take the Yamuna Expressway towards Agra. Take the Outer Ring Road exit toward Fatehabad Road to reach Dauki without encountering city traffic (~3 hours total).
                </p>
                <p>
                  <strong>From Lucknow:</strong> Direct access via the Agra-Lucknow Expressway; exit at the Dauki interchange located just 10 minutes from our gates.
                </p>
              </div>
            </div>

            {/* Right Map Visual with Pinpoint */}
            <div className="lg:col-span-6 min-h-[460px] shadow-2xl relative overflow-hidden bg-[#efeeeb] border border-[#e8dfd1]">
              <img
                src={RESORT_INFO.mapImage}
                alt="Crown Pavilion Resort geographical map"
                className="w-full h-full min-h-[460px] object-cover"
              />
              <div className="absolute top-6 left-6 bg-[#121110]/95 text-[#f5f0e8] p-5 shadow-2xl max-w-sm border border-[#3d342a]">
                <div className="flex items-center gap-2 text-[#e2c48d] mb-1">
                  <span className="material-symbols-outlined text-[20px]">hotel_class</span>
                  <span className="text-[10px] font-semibold tracking-widest uppercase">
                    Destination Pinpoint
                  </span>
                </div>
                <h4 className="font-serif text-xl text-[#f5f0e8] font-normal">
                  Crown Pavilion Resort
                </h4>
                <p className="text-xs text-[#d1c5b4] mt-1 leading-relaxed">
                  Fatehabad Road, Dauki, Agra Heritage Corridor
                </p>
                <div className="mt-4 pt-3 flex items-center justify-between text-[#e2c48d] text-[10px] font-semibold border-t border-[#3d342a]">
                  <span>24/7 GATED &amp; MONITORED</span>
                  <span className="text-white/70">VALET PARKING</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
