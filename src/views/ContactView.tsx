import React, { useState } from 'react';
import { RESORT_INFO } from '../data/resortData';

interface ContactViewProps {
  onOpenWhatsApp: (type: string, detail?: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onOpenWhatsApp }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Stay Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Send formatted WhatsApp message
    const formatted = [
      `Hello ${RESORT_INFO.fullName}, my name is ${name}.`,
      `• Contact: ${phone} | ${email || 'No email provided'}`,
      `• Topic: ${subject}`,
      `• Message: ${message}`
    ].join('\n');

    const encoded = encodeURIComponent(formatted);
    window.open(`https://wa.me/${RESORT_INFO.whatsappNumber}?text=${encoded}`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full bg-[#fbf9f6] text-[#1b1c1a]">
      {/* Header Banner */}
      <section className="relative w-full bg-[#121110] text-[#f5f0e8] py-16 md:py-24 overflow-hidden border-b border-[#3d342a]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('${RESORT_INFO.heroBgImage}')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/75 to-[#121110]/50" />
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-8 h-[1px] bg-[#9e7b35]" />
            <span className="text-[11px] font-semibold text-[#e2c48d] uppercase tracking-[0.25em]">
              24x7 Royal Concierge
            </span>
            <span className="w-8 h-[1px] bg-[#9e7b35]" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#f5f0e8] uppercase tracking-tight">
            Connect With The Resort
          </h1>
          <p className="font-serif italic text-xl text-[#e2c48d] mt-2 font-normal">
            Personalized reservations, wedding consultations &amp; travel curations
          </p>
          <p className="text-sm text-[#d1c5b4] mt-4 leading-relaxed">
            Our guest relation masters and concierge desk are available around the clock to assist with your journey to Agra.
          </p>
        </div>
      </section>

      {/* Main Touchpoints Grid */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left direct contact details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[11px] font-semibold text-[#9e7b35] uppercase tracking-[0.25em]">
                  Direct Channels
                </span>
                <h2 className="font-serif text-3xl text-[#3d342a] mt-1">
                  At Your Service
                </h2>
                <p className="text-xs sm:text-sm text-[#615e5b] mt-2 leading-relaxed">
                  Whether you wish to arrange a private airport chauffeur, inquire about destination wedding lawns, or request specific suite amenities, reach us directly through your preferred channel.
                </p>
              </div>

              <div className="space-y-4">
                {/* WhatsApp Channel */}
                <div className="bg-[#f5f0e8] p-5 border border-[#e8dfd1] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#c5a059] flex items-center justify-center text-[#4e3700] shrink-0">
                    <span className="material-symbols-outlined text-xl">chat</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[#3d342a]">
                      Official WhatsApp Concierge
                    </h3>
                    <p className="text-xs text-[#615e5b] mt-0.5">
                      Fastest response for suite inquiries, tariffs, and real-time photo requests.
                    </p>
                    <button
                      onClick={() => onOpenWhatsApp('general')}
                      className="mt-2 text-xs font-bold text-[#775a19] hover:underline uppercase tracking-wider inline-flex items-center gap-1"
                    >
                      <span>Start Chat ({RESORT_INFO.whatsappDisplay})</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>

                {/* Telephone */}
                <div className="bg-[#f5f0e8] p-5 border border-[#e8dfd1] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#121110] flex items-center justify-center text-[#e2c48d] shrink-0">
                    <span className="material-symbols-outlined text-xl">call</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[#3d342a]">
                      Telephone Reservations
                    </h3>
                    <p className="text-xs text-[#615e5b] mt-0.5">
                      Direct line to the front office manager on duty.
                    </p>
                    <a
                      href={`tel:${RESORT_INFO.phoneRaw}`}
                      className="mt-2 text-xs font-bold text-[#775a19] hover:underline uppercase tracking-wider inline-flex items-center gap-1"
                    >
                      <span>Call {RESORT_INFO.phone}</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-[#f5f0e8] p-5 border border-[#e8dfd1] flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#121110] flex items-center justify-center text-[#e2c48d] shrink-0">
                    <span className="material-symbols-outlined text-xl">mail</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[#3d342a]">
                      Email Inquiries
                    </h3>
                    <p className="text-xs text-[#615e5b] mt-0.5">
                      For corporate proposals, bulk wedding room blocks, and travel agent partnerships.
                    </p>
                    <a
                      href={`mailto:${RESORT_INFO.email}`}
                      className="mt-2 text-xs font-bold text-[#775a19] hover:underline uppercase tracking-wider inline-flex items-center gap-1"
                    >
                      <span>{RESORT_INFO.email}</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="p-4 bg-[#ffffff] border border-[#e8dfd1] text-xs text-[#4e4639] space-y-1">
                <span className="font-semibold text-[#3d342a] uppercase tracking-wider block">
                  Resort Operating Schedule:
                </span>
                <div className="flex justify-between">
                  <span>Front Desk &amp; Concierge:</span>
                  <span className="font-semibold text-[#775a19]">Open 24 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Check-in / Check-out:</span>
                  <span className="font-semibold">2:00 PM / 11:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Valet &amp; Luggage Assistance:</span>
                  <span className="font-semibold text-[#775a19]">24/7 Available</span>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7 bg-[#ffffff] p-8 sm:p-10 border border-[#e8dfd1] shadow-lg">
              <span className="text-[11px] font-semibold text-[#9e7b35] uppercase tracking-[0.25em]">
                Direct Guest Desk
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#3d342a] mt-1 mb-6">
                Send an Inquiry
              </h3>

              {submitted ? (
                <div className="p-6 bg-[#f5f0e8] border border-[#775a19] text-center space-y-3">
                  <span className="material-symbols-outlined text-4xl text-[#775a19]">check_circle</span>
                  <h4 className="font-serif text-2xl text-[#3d342a]">Inquiry Forwarded</h4>
                  <p className="text-xs text-[#615e5b] max-w-md mx-auto">
                    Thank you, {name}. Your inquiry has been forwarded to our WhatsApp Concierge desk. A manager will assist you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-[#121110] text-[#f5f0e8] text-xs font-semibold tracking-wider uppercase"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#4e4639] uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Maharaja Vikram Singh"
                        className="w-full px-3 py-2.5 text-xs bg-[#f5f0e8] border border-[#e8dfd1] text-[#1b1c1a] focus:outline-none focus:border-[#775a19]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#4e4639] uppercase tracking-wider mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2.5 text-xs bg-[#f5f0e8] border border-[#e8dfd1] text-[#1b1c1a] focus:outline-none focus:border-[#775a19]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#4e4639] uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="guest@example.com"
                        className="w-full px-3 py-2.5 text-xs bg-[#f5f0e8] border border-[#e8dfd1] text-[#1b1c1a] focus:outline-none focus:border-[#775a19]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#4e4639] uppercase tracking-wider mb-1">
                        Inquiry Topic
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-3 py-2.5 text-xs bg-[#f5f0e8] border border-[#e8dfd1] text-[#1b1c1a] focus:outline-none focus:border-[#775a19]"
                      >
                        <option value="General Stay Inquiry">General Stay Inquiry</option>
                        <option value="Royal Suite Availability">Royal Suite Availability</option>
                        <option value="Dine Under The Stars Reservation">Dine Under The Stars Reservation</option>
                        <option value="Destination Wedding & Events">Destination Wedding &amp; Events</option>
                        <option value="Taj Mahal Chauffeur & Transfers">Taj Mahal Chauffeur &amp; Transfers</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#4e4639] uppercase tracking-wider mb-1">
                      Your Message or Inquiry Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please mention dates, number of guests, or special dining/arrival preferences..."
                      className="w-full px-3 py-2.5 text-xs bg-[#f5f0e8] border border-[#e8dfd1] text-[#1b1c1a] focus:outline-none focus:border-[#775a19]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#121110] text-[#f5f0e8] hover:bg-[#c5a059] hover:text-[#4e3700] text-xs font-semibold tracking-[0.2em] uppercase transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[18px]">send</span>
                      <span>DISPATCH INQUIRY VIA CONCIERGE DESK</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
