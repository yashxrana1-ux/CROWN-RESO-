import React, { useState } from 'react';
import { GalleryPhoto } from '../types';
import { GALLERY_ITEMS, RESORT_INFO } from '../data/resortData';

interface GalleryViewProps {
  onSelectPhoto: (photo: GalleryPhoto) => void;
  onOpenWhatsApp: (type: string, detail?: string) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onSelectPhoto, onOpenWhatsApp }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'resort' | 'suites' | 'dining' | 'experiences'>('all');

  const filteredPhotos = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="flex flex-col w-full bg-[#fbf9f6] text-[#1b1c1a]">
      {/* Header Banner */}
      <section className="relative w-full bg-[#121110] text-[#f5f0e8] py-16 md:py-24 overflow-hidden border-b border-[#3d342a]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('${GALLERY_ITEMS[0].imageUrl}')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/75 to-[#121110]/50" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#9e7b35]" />
            <span className="text-[11px] font-semibold text-[#e2c48d] uppercase tracking-[0.25em]">
              Visual Chronicle
            </span>
            <span className="w-8 h-[1px] bg-[#9e7b35]" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f5f0e8] uppercase tracking-tight">
            Curated Gallery
          </h1>
          <p className="font-serif italic text-xl text-[#e2c48d] mt-2 font-normal">
            A window into palatial architecture, royal suites, and starlit soirées
          </p>
          <p className="text-sm text-[#d1c5b4] mt-4 leading-relaxed">
            Discover the handcrafted red sandstone arches, reflecting lotus courtyards, luxurious accommodations, and candlelit gastronomic feasts of Crown Pavilion Resort Agra.
          </p>
        </div>
      </section>

      {/* Filter Tabs Bar */}
      <section className="w-full bg-[#ffffff] sticky top-20 z-30 shadow-sm border-b border-[#e8dfd1] py-3">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {(['all', 'resort', 'suites', 'dining', 'experiences'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`px-4 py-2 text-[11px] font-semibold tracking-widest uppercase transition-all ${
                  activeCategory === tab
                    ? 'bg-[#121110] text-[#f5f0e8]'
                    : 'bg-[#efeeeb] text-[#4e4639] hover:bg-[#e4e2df] hover:text-[#1b1c1a]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="text-xs text-[#615e5b]">
            Showing {filteredPhotos.length} curated frames • Click image to enlarge
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => onSelectPhoto(photo)}
                className={`gallery-item ${photo.span || ''} aspect-[16/10] overflow-hidden relative group bg-[#efeeeb] cursor-pointer shadow-sm border border-[#e8dfd1]`}
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121110]/85 via-[#121110]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] font-semibold text-[#e2c48d] tracking-widest uppercase">
                    {photo.category}
                  </span>
                  <span className="font-serif text-xl sm:text-2xl text-[#f5f0e8] mt-1">
                    {photo.title}
                  </span>
                  <span className="text-[11px] text-[#f5f0e8]/80 mt-2 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px]">zoom_in</span> Click to view high-resolution
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Social Proof & Inquiry Callout */}
          <div className="mt-16 p-8 bg-[#f5f0e8] border border-[#e8dfd1] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl text-[#3d342a]">
                Experience These Royal Frames in Person
              </h3>
              <p className="text-xs text-[#615e5b] mt-1">
                Share your dates with our front desk master for personalized room views facing the central reflecting fountains.
              </p>
            </div>
            <button
              onClick={() => onOpenWhatsApp('general', 'Gallery Inquiry & Courtyard View Rooms')}
              className="px-6 py-3 bg-[#121110] text-[#f5f0e8] hover:bg-[#c5a059] hover:text-[#4e3700] text-xs font-semibold tracking-widest uppercase transition-colors shrink-0"
            >
              Enquire on WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
