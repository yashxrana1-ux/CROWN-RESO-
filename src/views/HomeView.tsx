import React, { useState } from 'react';
import { SuiteTier, Suite, GalleryPhoto } from '../types';
import {
  RESORT_INFO,
  SUITES_DATA,
  EXPERIENCES_DATA,
  ARCHITECTURAL_PILLARS,
  GALLERY_ITEMS,
  TRANSIT_DISTANCES
} from '../data/resortData';

interface HomeViewProps {
  onSelectSuite: (suite: Suite) => void;
  onOpenWhatsApp: (type: string, detail?: string) => void;
  onSelectPhoto: (photo: GalleryPhoto) => void;
  onNavigate: (page: any) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectSuite,
  onOpenWhatsApp,
  onSelectPhoto,
  onNavigate
}) => {
  const [suiteFilter, setSuiteFilter] = useState<'all' | SuiteTier>('all');
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'resort' | 'suites' | 'dining' | 'experiences'>('all');

  const filteredSuites = SUITES_DATA.filter((s) => {
    if (suiteFilter === 'all') return true;
    return s.tier === suiteFilter;
  });

  const filteredGallery = GALLERY_ITEMS.filter((g) => {
    if (galleryFilter === 'all') return true;
    return g.category === galleryFilter;
  });

  return (
    <div className="flex flex-col w-full text-[#1b1c1a] bg-[#fbf9f6]">
      {/* 1. HERO SECTION */}
      <section className="relative w-full -mt-20 min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#121110] text-[#f5f0e8]">
        {/* Atmospheric Visual Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45 scale-105 transition-transform duration-1000 ease-out"
          style={{ backgroundImage: `url('${RESORT_INFO.heroBgImage}')` }}
        />
        {/* Warm Royal Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/50 to-[#121110]/70" />
        {/* Subtle Golden Filigree Ambient Radial */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#775a19]/20 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-12 pt-36 pb-20 flex flex-col items-center text-center">
          {/* Brand Crest & Monogram */}
          <div className="mb-4 flex flex-col items-center">
            <div className="w-20 h-20 md:w-24 md:h-24 p-2 rounded-full bg-[#121110]/60 backdrop-blur-md flex items-center justify-center shadow-xl border border-[#c5a059]/40">
              <img
                src={RESORT_INFO.crestLogo}
                alt="Crown Pavilion Resort Royal Emblem"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="h-[1px] w-10 bg-[#9e7b35]" />
              <span className="text-[11px] font-semibold text-[#e2c48d] tracking-[0.3em] uppercase">
                Agra • India
              </span>
              <span className="h-[1px] w-10 bg-[#9e7b35]" />
            </div>
          </div>

          {/* Main Typography */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#f5f0e8] uppercase max-w-4xl tracking-tight leading-tight font-normal">
            Crown Pavilion Resort
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl text-[#e2c48d] mt-2 font-normal max-w-2xl">
            Where Heritage Meets Modern Indulgence
          </p>

          <p className="text-sm sm:text-base text-[#f5f0e8]/85 max-w-2xl mt-4 font-light leading-relaxed">
            Thoughtfully crafted spaces, immersive experiences, and personalised service come together to create a stay that is both meaningful and memorable.
          </p>

          {/* Primary CTA Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
            <button
              onClick={() => onOpenWhatsApp('general')}
              className="w-full sm:w-auto px-8 py-4 bg-[#c5a059] text-[#4e3700] hover:bg-[#e2c48d] text-xs font-semibold tracking-[0.2em] uppercase shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>ENQUIRE ON WHATSAPP</span>
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('the-resort');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-4 bg-[#ffffff]/10 backdrop-blur-sm text-[#f5f0e8] hover:bg-[#ffffff] hover:text-[#3d342a] text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 border border-[#f5f0e8]/20"
            >
              <span>EXPLORE THE RESORT</span>
              <span className="material-symbols-outlined text-[16px]">south</span>
            </button>
          </div>

          {/* Scroll Discovery Token */}
          <div className="mt-14 flex flex-col items-center gap-2">
            <span className="text-[10px] font-semibold tracking-[0.35em] text-[#e2c48d]/80 uppercase">
              Scroll to Discover
            </span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-[#9e7b35] to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* 2. QUICK STATS STRIP */}
      <section className="w-full bg-[#f5f0e8] text-[#3d342a] border-b border-[#e8dfd1]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center justify-center p-2">
              <div className="flex items-center gap-1 text-[#9e7b35]">
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                <span className="font-serif text-2xl font-semibold text-[#3d342a]">
                  {RESORT_INFO.ratings.google}
                </span>
              </div>
              <span className="text-[11px] font-semibold tracking-widest text-[#775a19] mt-1 uppercase">
                Google Rating
              </span>
              <span className="text-xs text-[#615e5b]">{RESORT_INFO.ratings.googleReviews}</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2">
              <div className="flex items-center gap-1 text-[#9e7b35]">
                <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                <span className="font-serif text-2xl font-semibold text-[#3d342a]">
                  {RESORT_INFO.ratings.tripAdvisor}
                </span>
              </div>
              <span className="text-[11px] font-semibold tracking-widest text-[#775a19] mt-1 uppercase">
                TripAdvisor
              </span>
              <span className="text-xs text-[#615e5b]">{RESORT_INFO.ratings.tripAdvisorReviews}</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2">
              <div className="font-serif text-2xl font-semibold text-[#3d342a]">
                {RESORT_INFO.ratings.instagramFollowers}
              </div>
              <span className="text-[11px] font-semibold tracking-widest text-[#775a19] mt-1 uppercase">
                Instagram Community
              </span>
              <span className="text-xs text-[#615e5b]">@crownpavilionresort • @cpragra</span>
            </div>

            <div className="flex flex-col items-center justify-center p-2">
              <div className="font-serif text-2xl font-semibold text-[#3d342a]">
                {RESORT_INFO.ratings.facebookFollowers}
              </div>
              <span className="text-[11px] font-semibold tracking-widest text-[#775a19] mt-1 uppercase">
                Facebook Patrons
              </span>
              <span className="text-xs text-[#615e5b]">Global Heritage Enthusiasts</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTRODUCTION & CONCEPT SECTION */}
      <section className="w-full bg-[#fbf9f6] py-20 lg:py-28 relative" id="the-resort">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Editorial Column */}
            <div className="lg:col-span-6 flex flex-col items-start space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#c5a059]" />
                <span className="text-[11px] font-semibold text-[#9e7b35] uppercase tracking-[0.25em]">
                  Architectural Philosophy
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3d342a] tracking-tight leading-tight">
                An Ode to Agra’s Timeless Grandeur
              </h2>

              <p className="text-base sm:text-lg text-[#3d342a]/90 leading-relaxed font-light">
                Nestled in the tranquil outskirts of Agra, our resort is a celebration of India’s artistic legacy, mythology-inspired design, and world-class luxury.
              </p>

              <p className="text-sm text-[#615e5b] leading-relaxed">
                From the hand-carved stone jaalis that soften the golden Uttar Pradesh sun to palatial colonnades inspired by regal pavilion chambers, Crown Pavilion Resort offers an unrushed sanctuary. Here, the architectural poetry of the Mughal era is reinterpreted through refined contemporary minimalism, where every alcove and water court reflects serenity.
              </p>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 w-full">
                {ARCHITECTURAL_PILLARS.map((pillar) => (
                  <div key={pillar.number} className="p-4 bg-[#f5f0e8] border border-[#e8dfd1]">
                    <span className="font-serif text-2xl text-[#9e7b35] block">
                      {pillar.number}
                    </span>
                    <h4 className="text-sm font-semibold text-[#3d342a] mt-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[#615e5b] mt-1 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenWhatsApp('concierge')}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#9e7b35] hover:text-[#3d342a] transition-colors tracking-[0.2em] uppercase underline underline-offset-8"
                >
                  <span>DISCUSS YOUR ARRIVAL CONCIERGE</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Right Asymmetric Image Composition */}
            <div className="lg:col-span-6 relative mt-10 lg:mt-0">
              <div className="relative w-full aspect-[4/5] overflow-hidden shadow-2xl bg-[#efeeeb] border border-[#e8dfd1]">
                <img
                  src={RESORT_INFO.courtyardImage}
                  alt="A grand interior courtyard of Crown Pavilion Resort in Agra with sandstone colonnades"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlapping Floating Secondary Image */}
              <div className="hidden sm:block absolute -bottom-10 -left-10 w-3/5 aspect-square overflow-hidden shadow-2xl bg-[#f5f0e8] p-3 border border-[#e8dfd1]">
                <img
                  src={RESORT_INFO.sandstoneDetailImage}
                  alt="Close up architectural detail of artisanal hand-carved floral sandstone frieze"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Tag */}
              <div className="absolute top-6 right-6 bg-[#121110]/90 text-[#e2c48d] px-4 py-2 text-[10px] font-semibold tracking-widest uppercase">
                HERITAGE MEETS MODERN INDULGENCE
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SUITES & ACCOMMODATIONS PREVIEW */}
      <section className="w-full bg-[#f5f0e8] py-20 lg:py-28 border-t border-[#e8dfd1]" id="stay">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#c5a059]" />
                <span className="text-[11px] font-semibold text-[#9e7b35] uppercase tracking-[0.25em]">
                  Sanctuary of Rest
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3d342a] mt-2">
                Rooms &amp; Suites
              </h2>
              <p className="text-sm text-[#615e5b] mt-3 leading-relaxed">
                At Crown Pavilion Resort, comfort and elegance come together to create an unforgettable stay. Our thoughtfully designed rooms and suites offer spacious layouts, luxurious furnishings, and modern amenities tailored to meet the needs of every guest.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setSuiteFilter('all')}
                className={`px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-all ${
                  suiteFilter === 'all'
                    ? 'bg-[#121110] text-[#f5f0e8]'
                    : 'bg-[#ffffff] text-[#3d342a] hover:bg-[#121110] hover:text-[#f5f0e8]'
                }`}
              >
                ALL SUITES
              </button>
              <button
                onClick={() => setSuiteFilter('executive')}
                className={`px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-all ${
                  suiteFilter === 'executive'
                    ? 'bg-[#121110] text-[#f5f0e8]'
                    : 'bg-[#ffffff] text-[#3d342a] hover:bg-[#121110] hover:text-[#f5f0e8]'
                }`}
              >
                EXECUTIVE
              </button>
              <button
                onClick={() => setSuiteFilter('royal')}
                className={`px-4 py-2 text-xs font-semibold tracking-widest uppercase transition-all ${
                  suiteFilter === 'royal'
                    ? 'bg-[#121110] text-[#f5f0e8]'
                    : 'bg-[#ffffff] text-[#3d342a] hover:bg-[#121110] hover:text-[#f5f0e8]'
                }`}
              >
                ROYAL &amp; HERITAGE
              </button>
            </div>
          </div>

          {/* Suites Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredSuites.map((suite) => (
              <div
                key={suite.id}
                className="group bg-[#ffffff] border border-[#e8dfd1] flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#efeeeb]">
                  <img
                    src={suite.imageUrl}
                    alt={suite.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <span
                    className={`absolute top-4 left-4 text-[10px] font-semibold tracking-widest px-3 py-1 uppercase ${
                      suite.tier === 'royal'
                        ? 'bg-[#c5a059] text-[#4e3700]'
                        : 'bg-[#f5f0e8] text-[#3d342a]'
                    }`}
                  >
                    {suite.tag || suite.space}
                  </span>
                  {suite.tier === 'royal' && (
                    <span className="absolute top-4 right-4 bg-[#121110] text-[#e2c48d] px-2.5 py-1 text-[10px] tracking-widest uppercase font-semibold">
                      ROYAL TIER
                    </span>
                  )}
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="font-serif text-2xl text-[#3d342a]">
                        {suite.name}
                      </h3>
                      <span className="text-xs font-semibold text-[#9e7b35]">
                        {suite.bedType}
                      </span>
                    </div>

                    <p className="text-xs text-[#615e5b] leading-relaxed mb-4 line-clamp-3">
                      {suite.shortDesc}
                    </p>

                    <div className="grid grid-cols-2 gap-y-2 gap-x-1 text-[11px] text-[#3d342a]/80 mb-5 py-2.5 bg-[#f5f0e8]/60 px-3 border border-[#e8dfd1]/60">
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[15px] text-[#9e7b35]">wifi</span>
                        <span>Free wifi</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[15px] text-[#9e7b35]">restaurant</span>
                        <span>Free breakfast</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[15px] text-[#9e7b35]">ac_unit</span>
                        <span>Air conditioner</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[15px] text-[#9e7b35]">bed</span>
                        <span>King size bed</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onSelectSuite(suite)}
                      className="py-3 bg-[#fbf9f6] text-[#3d342a] border border-[#e8dfd1] hover:bg-[#efeeeb] text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase transition-colors"
                    >
                      VIEW DETAILS
                    </button>
                    <button
                      onClick={() => onOpenWhatsApp('stay', suite.name)}
                      className="py-3 bg-[#121110] text-[#f5f0e8] hover:bg-[#c5a059] hover:text-[#4e3700] text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-[15px]">chat</span>
                      <span>WHATSAPP</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('stay')}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#ffffff] border border-[#c5a059] text-[#775a19] hover:bg-[#c5a059] hover:text-[#4e3700] text-xs font-semibold tracking-[0.2em] uppercase transition-all shadow-sm"
            >
              <span>EXPLORE ALL SUITES IN DETAIL</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      {/* 5. FOUR SIGNATURE EXPERIENCES */}
      <section className="w-full bg-[#fbf9f6] py-20 lg:py-28 relative" id="experiences">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-8 h-[1px] bg-[#c5a059]" />
              <span className="text-[11px] font-semibold text-[#9e7b35] uppercase tracking-[0.25em]">
                Moments of Majesty
              </span>
              <span className="w-8 h-[1px] bg-[#c5a059]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3d342a]">
              The Four Signature Experiences
            </h2>
            <p className="text-sm text-[#615e5b] mt-3">
              Immersive cultural rituals and leisure offerings designed to connect you deeply to the romance and legacy of Agra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPERIENCES_DATA.map((exp) => (
              <div
                key={exp.id}
                className="bg-[#f5f0e8] border border-[#e8dfd1] flex flex-col justify-between p-6 group hover:bg-[#121110] hover:text-[#f5f0e8] transition-all duration-500 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif text-2xl text-[#9e7b35]">
                      {exp.number}
                    </span>
                    <span className="material-symbols-outlined text-[#9e7b35] text-[28px]">
                      {exp.icon}
                    </span>
                  </div>
                  <h3 className="font-sans text-base font-semibold uppercase tracking-wider mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-[#615e5b] group-hover:text-[#f5f0e8]/80 leading-relaxed mb-4">
                    {exp.description}
                  </p>
                </div>

                <div className="relative w-full aspect-[4/3] overflow-hidden my-3 bg-[#efeeeb]">
                  <img
                    src={exp.imageUrl}
                    alt={exp.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                <button
                  onClick={() => onOpenWhatsApp('experience', exp.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9e7b35] group-hover:text-[#e2c48d] tracking-widest uppercase mt-2 text-left"
                >
                  <span>ENQUIRE ON EXPERIENCES</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DINING SECTION */}
      <section className="w-full bg-[#121110] text-[#f5f0e8] py-24 relative overflow-hidden" id="dining">
        <div className="absolute -right-40 -top-40 w-96 h-96 bg-[#775a19]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#9e7b35]" />
                <span className="text-[11px] font-semibold text-[#e2c48d] uppercase tracking-[0.3em]">
                  Royal Gastronomy
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f5f0e8]">
                Dine Under the Stars
              </h2>
              <p className="font-serif italic text-xl text-[#e2c48d] font-normal">
                A symphony of royal Mughlai flavours and starlit ambiance
              </p>
              <p className="text-xs sm:text-sm text-[#d1c5b4] leading-relaxed">
                Feast on centuries of regal recipes, where slow-simmered dum preparations, clay tandoor delicacies, and hand-ground spice blends meet modern culinary panache. Enjoy an intimate private cabana or a festive courtyard banqueting experience kissed by evening breezes and traditional oil lamps.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2 text-xs text-[#f5f0e8]/90">
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#e2c48d] text-[20px] mt-0.5">outdoor_grill</span>
                  <div>
                    <span className="font-semibold block text-[#f5f0e8]">Alfresco Royal Feast</span>
                    <span className="text-[#cbc5c2]">Courtyard dining under illuminated pavilions</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#e2c48d] text-[20px] mt-0.5">wine_bar</span>
                  <div>
                    <span className="font-semibold block text-[#f5f0e8]">Curated Cellar</span>
                    <span className="text-[#cbc5c2]">Fine vintage pairings &amp; craft botanical sodas</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => onOpenWhatsApp('dining')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#c5a059] text-[#4e3700] hover:bg-[#e2c48d] text-xs font-semibold tracking-[0.2em] uppercase shadow-lg transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-[18px]">restaurant</span>
                  <span>ENQUIRE DINING ON WHATSAPP</span>
                </button>
                <button
                  onClick={() => onNavigate('dining')}
                  className="inline-flex items-center gap-2 px-6 py-4 bg-[#ffffff]/10 hover:bg-[#ffffff]/20 text-[#f5f0e8] text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 border border-[#f5f0e8]/20"
                >
                  <span>VIEW ROYAL MENU</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 mt-8 lg:mt-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] overflow-hidden bg-[#3d342a] shadow-xl border border-[#3d342a]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIsj_qDncbY4KHh-NWCqlFdw8nRRoAsbLAhlaNQyJ1p-W4XsLPlvqQ2-otR2uRdiPA16D05C-LuxsqJa6VgKYQhHzz8L7TFg2xdzD55UCGNVPil2dcDkQFxyaJTnu8KrDJ4mdlrquUwAON-dmdbxx2gLoC5q6gJ-NV3AhVlu_BLNg9CTC5ZiImVLyYkf0h5ZXlvwOKbYMHuif0omD1zNZ6cJftjolsppLRHZooRy7q55enDzYXl15oSA"
                      alt="Plated royal Mughal biryani in authentic silver handi"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden bg-[#3d342a] shadow-xl border border-[#3d342a]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVVbcL0b_YYJkcg2EqGLkD7TEXtLz5ZlrF6yTOLAm163MhY8x3RiBqVngVPx99JZVs2-GYCCnnXZ8WsKlPTbLOvssfH1RlI5eke5KIFnZuCakFrHPgaHMdOfo_CenB8KpxES3Ic0oQfmdsWci9I82_9f-XcFs-NngbnLqyTHsYmJnWzAzIkpRkADGYsEGcmHB9-wP4faa3VsGwxwmTygpRPsZcYB-xhJBu397XlHrZkewscYVOne5-w"
                      alt="Intimate candlelit table under midnight blue starry Agra skies"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <div className="aspect-square overflow-hidden bg-[#3d342a] shadow-xl border border-[#3d342a]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZD4b2LLR5YjgYiXjtb0Mj9B8M0m2uZfe6OnUsn8DIvQBla8oR69G8U7DW0SlG94aDvkVr792KeP0f3Sadia_p_-0IG3I6ym67gQnCNI2tllZ6XKDHTvNHH1KmgBKMaAkxRLC5e26zG3lmDB2yp7cnV5kXhcxkAkYJhMgZ89_Q0ZvUxT76_yUMKIbtm3N3OZS5rvtEnA3jT0PodEdxhxRWtuxaWjNu11pho-NvoY6cLjvzcgKqNLSUwA"
                      alt="Master chef finishing artisanal tandoor kebabs"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="aspect-[3/4] overflow-hidden bg-[#3d342a] shadow-xl border border-[#3d342a]">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXRcBmfs0OWd5xNqPdxnkBXHs5gycgqh7hiwsroFOumhvPmTD0Jpd_JQmPrd0H4SeIcOVV9Deanb10dmwOntzHP0DzAaKWoweCBUdOkzEpXvu4TQDSoFNIGA7uyaK_X1B-Kq9DzgCT29TUqxQgNkAdLZ5w8DA7s81eMlSZC2VlXmFDTY2I4Ifcv-hzGrXEErYMybf0wiCHAseLoI2W0GWER4p7Xhjrps6aElgdV_PLFw-A5mLCHwzm-g"
                      alt="Warm courtyard banquet setting with regal embroidered table runners"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WEDDINGS & CELEBRATIONS */}
      <section className="w-full bg-[#fbf9f6] py-20 lg:py-28 relative" id="celebrations">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="relative w-full aspect-[16/10] overflow-hidden shadow-2xl bg-[#efeeeb] border border-[#e8dfd1]">
                <img
                  src={RESORT_INFO.weddingImage}
                  alt="A lavish Indian destination wedding setup at Crown Pavilion Resort with grand mandap"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-[#121110]/90 text-[#e2c48d] px-4 py-2 text-[10px] font-semibold tracking-widest uppercase">
                  ROYAL WEDDING DESTINATION • AGRA
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col items-start space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#c5a059]" />
                <span className="text-[11px] font-semibold text-[#9e7b35] uppercase tracking-[0.25em]">
                  Royal Celebrations
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3d342a]">
                Celebrate the Extraordinary
              </h2>

              <p className="font-serif italic text-xl text-[#9e7b35] font-normal">
                A Majestic Backdrop for Unforgettable Vows
              </p>

              <p className="text-sm text-[#615e5b] leading-relaxed">
                From imperial destination weddings and sangeet galas to exclusive corporate retreats, Crown Pavilion Resort provides sprawling manicured lawns, grand ballroom spaces, and unmatched regal pageantry.
              </p>

              <ul className="space-y-2 text-xs text-[#3d342a] py-2">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#9e7b35] text-[18px]">check_circle</span>
                  <span>Spacious open-air royal pavilion lawns for up to 1,500 guests</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#9e7b35] text-[18px]">check_circle</span>
                  <span>Customized multi-day wedding gastronomy and heritage welcomes</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#9e7b35] text-[18px]">check_circle</span>
                  <span>Dedicated master event curators and private suite bookings</span>
                </li>
              </ul>

              <div className="pt-2">
                <button
                  onClick={() => onOpenWhatsApp('event')}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#121110] text-[#f5f0e8] hover:bg-[#c5a059] hover:text-[#4e3700] text-xs font-semibold tracking-[0.2em] uppercase shadow-lg transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-[18px]">event</span>
                  <span>PLAN YOUR EVENT VIA WHATSAPP</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CURATED RESORT GALLERY */}
      <section className="w-full bg-[#f5f0e8] py-20 lg:py-28 border-t border-[#e8dfd1]" id="gallery">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#c5a059]" />
                <span className="text-[11px] font-semibold text-[#9e7b35] uppercase tracking-[0.25em]">
                  Visual Chronicle
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3d342a] mt-2">
                Curated Gallery
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {(['all', 'resort', 'suites', 'dining', 'experiences'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setGalleryFilter(tab)}
                  className={`px-4 py-2 text-[11px] font-semibold tracking-widest uppercase transition-all ${
                    galleryFilter === tab
                      ? 'bg-[#121110] text-[#f5f0e8]'
                      : 'bg-[#ffffff] text-[#3d342a] hover:bg-[#121110] hover:text-[#f5f0e8]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Bento-style Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectPhoto(item)}
                className={`gallery-item ${item.span || ''} aspect-[16/10] overflow-hidden relative group bg-[#efeeeb] cursor-pointer shadow-sm border border-[#e8dfd1]`}
              >
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <span className="font-serif text-lg sm:text-xl text-[#f5f0e8]">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] font-semibold text-[#3d342a] hover:text-[#9e7b35] transition-colors tracking-[0.25em] uppercase"
            >
              <span className="material-symbols-outlined text-[18px]">photo_camera</span>
              <span>EXPLORE MORE ON INSTAGRAM {RESORT_INFO.handles.instagram.toUpperCase()}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 9. LOCATION & ACCESSIBILITY */}
      <section className="w-full bg-[#fbf9f6] py-20 lg:py-28 relative" id="location">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Details */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-[#c5a059]" />
                  <span className="text-[11px] font-semibold text-[#9e7b35] uppercase tracking-[0.25em]">
                    Sanctuary &amp; Proximity
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl text-[#3d342a] mt-2">
                  Your Escape, Close to Agra
                </h2>

                <p className="text-sm text-[#615e5b] mt-3 leading-relaxed">
                  Strategically situated on the Fatehabad Road corridor in Dauki, Crown Pavilion Resort provides the quietude of a palatial countryside estate while remaining within comfortable transit distance to the world-renowned Taj Mahal and Agra Fort.
                </p>

                {/* Address Card */}
                <div className="mt-6 p-5 bg-[#f5f0e8] border border-[#e8dfd1] space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#9e7b35] text-[22px] mt-0.5">pin_drop</span>
                    <div>
                      <span className="font-semibold text-sm text-[#3d342a] block">
                        Crown Pavilion Resort
                      </span>
                      <span className="text-xs text-[#615e5b]">{RESORT_INFO.locationBrief}</span>
                    </div>
                  </div>

                  <div className="pt-2 grid grid-cols-2 gap-2 text-xs text-[#3d342a]">
                    {TRANSIT_DISTANCES.slice(0, 4).map((td) => (
                      <div key={td.landmark} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#9e7b35] text-[16px]">{td.icon}</span>
                        <span>{td.landmark.split(' ')[0]}: {td.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="https://maps.google.com/?q=Crown+Pavilion+Resort+Agra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 bg-[#121110] text-[#f5f0e8] hover:bg-[#c5a059] hover:text-[#4e3700] text-xs font-semibold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">map</span>
                  <span>GET DIRECTIONS ON GOOGLE MAPS</span>
                </a>

                <button
                  onClick={() => onOpenWhatsApp('concierge')}
                  className="px-6 py-3.5 bg-[#f5f0e8] text-[#3d342a] border border-[#e8dfd1] hover:bg-[#3d342a] hover:text-[#f5f0e8] text-xs font-semibold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">directions_car</span>
                  <span>REQUEST CHAUFFEUR</span>
                </button>
              </div>
            </div>

            {/* Static Luxury Map Card */}
            <div className="lg:col-span-7 mt-8 lg:mt-0 min-h-[420px] shadow-xl relative overflow-hidden bg-[#efeeeb] border border-[#e8dfd1]">
              <img
                src={RESORT_INFO.mapImage}
                alt="Crown Pavilion Resort location on Fatehabad Road Agra"
                className="w-full h-full min-h-[420px] object-cover"
              />
              <div className="absolute top-6 left-6 bg-[#121110]/95 text-[#f5f0e8] p-4 shadow-2xl max-w-xs border border-[#3d342a]">
                <div className="flex items-center gap-2 text-[#e2c48d] mb-1">
                  <span className="material-symbols-outlined text-[18px]">hotel_class</span>
                  <span className="text-[10px] font-semibold tracking-widest uppercase">Destination Pinpoint</span>
                </div>
                <p className="font-serif text-lg leading-tight text-[#f5f0e8]">Crown Pavilion Resort</p>
                <p className="text-xs text-[#d1c5b4] mt-1">Dauki, Fatehabad Rd, Agra Heritage Belt</p>
                <div className="mt-3 pt-2 flex items-center justify-between text-[#e2c48d] text-[10px] font-semibold border-t border-[#3d342a]">
                  <span>STATUS: OPEN 24/7</span>
                  <span className="text-white/70">VALET AVAILABLE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. NEED HELP PLANNING YOUR STAY STRIP */}
      <section className="w-full bg-[#f5f0e8] py-16 border-t border-[#e8dfd1]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-[#ffffff] p-6 lg:p-10 shadow-sm border border-[#e8dfd1]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-6 space-y-1">
                <span className="text-[11px] font-semibold text-[#9e7b35] uppercase tracking-[0.25em]">
                  24x7 Royal Concierge
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#3d342a]">
                  Need Help Planning Your Stay?
                </h3>
                <p className="text-xs sm:text-sm text-[#615e5b] pt-1">
                  Connect with our reservation managers for customized wedding packages, private villa stays, or curated Agra sightseeing itineraries.
                </p>
              </div>

              <div className="lg:col-span-6 flex flex-wrap gap-3 justify-start lg:justify-end">
                <button
                  onClick={() => onOpenWhatsApp('general')}
                  className="px-5 py-3 bg-[#c5a059] text-[#4e3700] text-xs font-semibold tracking-widest uppercase hover:bg-[#e2c48d] transition-colors flex items-center gap-2 shadow-sm"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>CHAT ON WHATSAPP</span>
                </button>

                <a
                  href={`tel:${RESORT_INFO.phoneRaw}`}
                  className="px-5 py-3 bg-[#121110] text-[#f5f0e8] text-xs font-semibold tracking-widest uppercase hover:bg-[#3d342a] transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">call</span>
                  <span>CALL THE RESORT</span>
                </a>

                <a
                  href={`mailto:${RESORT_INFO.reservationsEmail}`}
                  className="px-5 py-3 bg-[#f5f0e8] text-[#3d342a] border border-[#e8dfd1] text-xs font-semibold tracking-widest uppercase hover:bg-[#efeeeb] transition-colors flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                  <span>EMAIL RESERVATIONS</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
