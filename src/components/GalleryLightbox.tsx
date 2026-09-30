import React, { useEffect } from 'react';
import { GalleryPhoto } from '../types';

interface GalleryLightboxProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  photo,
  onClose,
  onNext,
  onPrev
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
    };
    if (photo) {
      document.body.classList.add('overflow-hidden');
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [photo, onClose, onNext, onPrev]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#121110]/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-[#f5f0e8] hover:text-[#e2c48d] transition-colors p-2 z-20"
        aria-label="Close photo"
      >
        <span className="material-symbols-outlined text-3xl">close</span>
      </button>

      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-[#f5f0e8]/70 hover:text-[#e2c48d] transition-colors p-2 bg-[#121110]/60 rounded-full"
          aria-label="Previous photo"
        >
          <span className="material-symbols-outlined text-3xl">chevron_left</span>
        </button>
      )}

      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-[#f5f0e8]/70 hover:text-[#e2c48d] transition-colors p-2 bg-[#121110]/60 rounded-full"
          aria-label="Next photo"
        >
          <span className="material-symbols-outlined text-3xl">chevron_right</span>
        </button>
      )}

      <div
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.imageUrl}
          alt={photo.imageAlt}
          className="max-w-full max-h-[75vh] object-contain shadow-2xl border border-[#3d342a]/60"
        />
        <div className="mt-4 text-center">
          <h4 className="font-serif text-xl sm:text-2xl text-[#f5f0e8] tracking-wide">
            {photo.title}
          </h4>
          <span className="text-[11px] font-semibold text-[#e2c48d] tracking-[0.25em] uppercase mt-1 inline-block">
            Category: {photo.category} • Crown Pavilion Resort Agra
          </span>
        </div>
      </div>
    </div>
  );
};
