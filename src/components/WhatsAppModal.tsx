import React, { useState, useEffect } from 'react';
import { RESORT_INFO } from '../data/resortData';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
  initialDetail?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  initialType = 'general',
  initialDetail = ''
}) => {
  const [selectedType, setSelectedType] = useState<string>(initialType);
  const [customNote, setCustomNote] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    if (initialType) {
      setSelectedType(initialType);
    }
  }, [initialType]);

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

  const buildMessage = () => {
    let base = `Hello ${RESORT_INFO.fullName}, `;
    if (selectedType === 'stay') {
      base += `I would like to inquire about booking the ${initialDetail || 'luxury suite'} for an upcoming stay. Please share tariffs, inclusions, and availability.`;
    } else if (selectedType === 'dining') {
      base += `I would like to reserve a table for the "Dine Under The Stars" dinner experience at Crown Pavilion Resort. Please share menu curations and table options.`;
    } else if (selectedType === 'event') {
      base += `I am planning a wedding / grand celebration at Crown Pavilion Resort and would like to receive details on your royal banquet lawns, guest capacity, and catering.`;
    } else if (selectedType === 'concierge') {
      base += `I need assistance with resort transportation / chauffeur concierge from Agra for my upcoming visit to Crown Pavilion Resort.`;
    } else {
      base += `I would like to enquire about your resort services, suites, and personalized guest experiences.`;
    }

    if (customNote.trim()) {
      base += ` Additional details: ${customNote.trim()}`;
    }
    return base;
  };

  const handleLaunch = () => {
    const message = buildMessage();
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${RESORT_INFO.whatsappNumber}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleCopy = () => {
    const message = buildMessage();
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#121110]/75 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#fbf9f6] text-[#1b1c1a] shadow-2xl border border-[#e8dfd1] p-6 sm:p-8 transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#e8dfd1]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#c5a059] flex items-center justify-center text-[#4e3700] shadow-sm">
              <span className="material-symbols-outlined text-[22px]">chat</span>
            </div>
            <div>
              <h4 className="font-serif text-xl text-[#3d342a] font-semibold leading-tight">
                Royal WhatsApp Desk
              </h4>
              <span className="font-sans text-[11px] font-medium text-[#9e7b35]">
                Typically replies within 3 minutes • 24x7 Dedicated
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#615e5b] hover:text-[#1b1c1a] p-1 transition-colors"
            aria-label="Close dialog"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Inquiry Type Selector */}
        <div className="py-5 space-y-4">
          <p className="text-xs text-[#615e5b]">
            Select your inquiry category to format your direct concierge message:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => setSelectedType('stay')}
              className={`text-left p-3 border transition-all flex items-center justify-between ${
                selectedType === 'stay'
                  ? 'bg-[#c5a059]/15 border-[#775a19] text-[#775a19] font-medium'
                  : 'bg-[#f5f0e8] border-[#e8dfd1] text-[#3d342a] hover:bg-[#e8dfd1]/50'
              }`}
            >
              <div className="flex items-center gap-2 text-xs">
                <span className="material-symbols-outlined text-[18px] text-[#9e7b35]">bed</span>
                <span>Stay &amp; Suites</span>
              </div>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedType('dining')}
              className={`text-left p-3 border transition-all flex items-center justify-between ${
                selectedType === 'dining'
                  ? 'bg-[#c5a059]/15 border-[#775a19] text-[#775a19] font-medium'
                  : 'bg-[#f5f0e8] border-[#e8dfd1] text-[#3d342a] hover:bg-[#e8dfd1]/50'
              }`}
            >
              <div className="flex items-center gap-2 text-xs">
                <span className="material-symbols-outlined text-[18px] text-[#9e7b35]">restaurant</span>
                <span>Dine Under Stars</span>
              </div>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedType('event')}
              className={`text-left p-3 border transition-all flex items-center justify-between ${
                selectedType === 'event'
                  ? 'bg-[#c5a059]/15 border-[#775a19] text-[#775a19] font-medium'
                  : 'bg-[#f5f0e8] border-[#e8dfd1] text-[#3d342a] hover:bg-[#e8dfd1]/50'
              }`}
            >
              <div className="flex items-center gap-2 text-xs">
                <span className="material-symbols-outlined text-[18px] text-[#9e7b35]">celebration</span>
                <span>Weddings &amp; Galas</span>
              </div>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedType('concierge')}
              className={`text-left p-3 border transition-all flex items-center justify-between ${
                selectedType === 'concierge'
                  ? 'bg-[#c5a059]/15 border-[#775a19] text-[#775a19] font-medium'
                  : 'bg-[#f5f0e8] border-[#e8dfd1] text-[#3d342a] hover:bg-[#e8dfd1]/50'
              }`}
            >
              <div className="flex items-center gap-2 text-xs">
                <span className="material-symbols-outlined text-[18px] text-[#9e7b35]">directions_car</span>
                <span>Airport &amp; Transit</span>
              </div>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
            </button>
          </div>

          {/* Optional custom note */}
          <div>
            <label className="block text-[11px] font-semibold tracking-wider uppercase text-[#4e4639] mb-1">
              Add Specific Dates or Requests (Optional):
            </label>
            <input
              type="text"
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              placeholder="e.g., Dates: Oct 15-18, 2 adults, Taj Mahal transfer"
              className="w-full px-3 py-2 text-xs bg-[#f5f0e8] border border-[#e8dfd1] text-[#1b1c1a] focus:outline-none focus:border-[#775a19]"
            />
          </div>

          {/* Live Preview Box */}
          <div className="bg-[#f5f0e8] p-3 border border-[#e8dfd1]">
            <span className="block text-[10px] font-semibold uppercase tracking-widest text-[#9e7b35] mb-1">
              Message Preview:
            </span>
            <p className="text-xs text-[#3d342a] italic leading-relaxed">
              "{buildMessage()}"
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="button"
            onClick={handleLaunch}
            className="w-full sm:flex-1 py-3 bg-[#121110] text-[#f5f0e8] hover:bg-[#c5a059] hover:text-[#4e3700] text-xs font-semibold tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2 shadow-md"
          >
            <span className="material-symbols-outlined text-[18px]">send</span>
            <span>SEND ON WHATSAPP</span>
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="w-full sm:w-auto px-4 py-3 bg-[#e8dfd1] text-[#3d342a] hover:bg-[#dbdad7] text-xs font-semibold tracking-[0.15em] uppercase transition-colors flex items-center justify-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">
              {copied ? 'check' : 'content_copy'}
            </span>
            <span>{copied ? 'COPIED!' : 'COPY'}</span>
          </button>
        </div>

        <div className="pt-4 text-center text-[11px] text-[#615e5b] border-t border-[#e8dfd1] mt-4 flex items-center justify-center gap-3">
          <span>Crown Pavilion Resort • Official Verified Channel</span>
          <span>•</span>
          <a
            href={`tel:${RESORT_INFO.phoneRaw}`}
            className="text-[#775a19] hover:underline"
          >
            Call Directly
          </a>
        </div>
      </div>
    </div>
  );
};
