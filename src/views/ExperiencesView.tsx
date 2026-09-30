import React from 'react';
import { EXPERIENCES_DATA, RESORT_INFO } from '../data/resortData';

interface ExperiencesViewProps {
  onOpenWhatsApp: (type: string, detail: string) => void;
}

export const ExperiencesView: React.FC<ExperiencesViewProps> = ({ onOpenWhatsApp }) => {
  const dailyItinerary = [
    {
      time: '06:30 AM',
      title: 'Sunrise Taj Mahal Escort & Courtyard Yoga',
      description: 'Begin your morning with guided pranayama under the sandstone colonnade or embark on our VIP morning transfer to the Taj Mahal eastern gate for golden dawn photography.'
    },
    {
      time: '09:00 AM',
      title: 'Imperial Breakfast at the Lotus Pavilion',
      description: 'Artisanal organic parathas, house-churned butter, fresh tropical pressings, and Awadhi saffron sweet treats prepared live by master chefs.'
    },
    {
      time: '03:30 PM',
      title: 'Master Craftsman Marble Inlay Workshop',
      description: 'Observe generational artisans carving Pietra Dura semi-precious inlays and try your hand at shaping miniature floral sandstone carvings.'
    },
    {
      time: '05:45 PM',
      title: 'Sundowner High Tea & Sitar Twilight Ragas',
      description: 'As twilight falls over Agra, gather by the tranquil reflecting pools for classical live sitar melodies, masala kahwa, and savory royal snacks.'
    },
    {
      time: '08:00 PM',
      title: 'Dine Under the Stars Alfresco Banquet',
      description: 'Candlelit tables illuminated by handcrafted brass lanterns, charcoal sigri tandoor delicacies, and slow-dum biryanis served under the constellations.'
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#fbf9f6] text-[#1b1c1a]">
      {/* Header Banner */}
      <section className="relative w-full bg-[#121110] text-[#f5f0e8] py-16 md:py-24 overflow-hidden border-b border-[#3d342a]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAI3MSqevjD8Etyd3NUJ74p47oMEUaGLWEjOSv6vcmuIVAI_8_zyqSSWbmqlhnkw24RHJuWnu3KlVa9SsGoSF708Bd2B1Pw6uE_bO8uxrKMwCNSoIFimmXSrXy0PfGS9-DRlSLW66-NR0vvf6MksXL2dNFTvTHHwX3eIWEZOSfdl3ydLEiyoDMCXaEBVh9EvcpJvAPE2z3sXpKnFIUb2hwTSPSNqhTGm2k3j70mgg1T5JYEFAO5UOO4JQ')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/70 to-[#121110]/50" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#9e7b35]" />
            <span className="text-[11px] font-semibold text-[#e2c48d] uppercase tracking-[0.25em]">
              Bespoke Curations
            </span>
            <span className="w-8 h-[1px] bg-[#9e7b35]" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f5f0e8] uppercase tracking-tight">
            Moments of Majesty
          </h1>
          <p className="font-serif italic text-xl text-[#e2c48d] mt-2 font-normal">
            Immersive cultural rituals and leisure offerings in Agra
          </p>
          <p className="text-sm text-[#d1c5b4] mt-4 leading-relaxed">
            Every moment at Crown Pavilion Resort is choreographed to connect you with the imperial history of Agra, serene landscapes, and sensory luxuries crafted for royalty.
          </p>
        </div>
      </section>

      {/* 4 Signature Experiences Deep-Dive */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-16">
          {EXPERIENCES_DATA.map((exp, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={exp.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden shadow-xl border border-[#e8dfd1] bg-[#efeeeb]">
                    <img
                      src={exp.imageUrl}
                      alt={exp.imageAlt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-[#121110]/90 text-[#e2c48d] px-3 py-1 text-[11px] font-semibold tracking-widest uppercase">
                      EXPERIENCE {exp.number}
                    </div>
                  </div>
                </div>

                <div
                  className={`lg:col-span-6 space-y-4 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-3xl text-[#9e7b35]">{exp.number}</span>
                    <span className="h-[1px] w-8 bg-[#c5a059]" />
                    <span className="text-xs font-semibold text-[#775a19] tracking-widest uppercase">
                      {exp.subtitle}
                    </span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl text-[#3d342a]">
                    {exp.title}
                  </h2>

                  <p className="text-sm text-[#4e4639] leading-relaxed">
                    {exp.description} Designed for guests who cherish both peaceful solitude and cultural grandeur, this curation brings together bespoke comforts, tailored service, and the timeless magic of Agra.
                  </p>

                  <div className="bg-[#f5f0e8] p-4 border border-[#e8dfd1] space-y-2">
                    <span className="text-[10px] font-semibold text-[#9e7b35] uppercase tracking-widest block">
                      Curated Inclusions:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3d342a]">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[#775a19] text-[16px]">check_circle</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => onOpenWhatsApp('experience', exp.title)}
                      className="px-6 py-3 bg-[#121110] text-[#f5f0e8] hover:bg-[#c5a059] hover:text-[#4e3700] text-xs font-semibold tracking-[0.2em] uppercase transition-all flex items-center gap-2 shadow-sm"
                    >
                      <span className="material-symbols-outlined text-[16px]">chat</span>
                      <span>RESERVE THIS EXPERIENCE</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Daily Royal Rituals Timeline */}
      <section className="w-full bg-[#f5f0e8] py-16 lg:py-24 border-t border-[#e8dfd1]">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-[11px] font-semibold uppercase text-[#775a19] tracking-[0.2em]">
              The Resort Rhythm
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#3d342a] mt-1">
              A Day of Regal Living
            </h2>
            <p className="text-xs text-[#615e5b] mt-2">
              Complimentary cultural appointments curated daily for all resident guests.
            </p>
          </div>

          <div className="space-y-6">
            {dailyItinerary.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#ffffff] p-5 sm:p-6 border border-[#e8dfd1] flex flex-col sm:flex-row sm:items-start gap-4 shadow-sm"
              >
                <div className="sm:w-32 shrink-0">
                  <span className="text-xs font-bold text-[#9e7b35] tracking-wider uppercase bg-[#f5f0e8] px-2.5 py-1 inline-block border border-[#e8dfd1]">
                    {item.time}
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl text-[#3d342a]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#615e5b] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenWhatsApp('general', 'Daily Experiences & Itinerary')}
              className="px-8 py-3.5 bg-[#c5a059] text-[#4e3700] hover:bg-[#e2c48d] text-xs font-semibold tracking-widest uppercase transition-colors shadow-md"
            >
              Request Customised Itinerary on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
