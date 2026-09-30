import { useState } from 'react';
import { NavPage, Suite, GalleryPhoto } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppModal } from './components/WhatsAppModal';
import { SuiteDetailModal } from './components/SuiteDetailModal';
import { BookingInquiryModal } from './components/BookingInquiryModal';
import { GalleryLightbox } from './components/GalleryLightbox';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { HomeView } from './views/HomeView';
import { StayView } from './views/StayView';
import { ExperiencesView } from './views/ExperiencesView';
import { DiningView } from './views/DiningView';
import { CelebrationsView } from './views/CelebrationsView';
import { GalleryView } from './views/GalleryView';
import { AboutView } from './views/AboutView';
import { LocationView } from './views/LocationView';
import { ContactView } from './views/ContactView';

import { GALLERY_ITEMS } from './data/resortData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');

  // Modals state
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(false);
  const [whatsAppType, setWhatsAppType] = useState('general');
  const [whatsAppDetail, setWhatsAppDetail] = useState('');

  const [detailSuite, setDetailSuite] = useState<Suite | null>(null);

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingSuiteName, setBookingSuiteName] = useState('');

  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);

  const handleOpenWhatsApp = (type = 'general', detail = '') => {
    setWhatsAppType(type);
    setWhatsAppDetail(detail);
    setWhatsAppModalOpen(true);
  };

  const handleOpenBooking = (suiteName: string) => {
    setBookingSuiteName(suiteName);
    setBookingModalOpen(true);
  };

  // Lightbox Next/Prev
  const handleNextPhoto = () => {
    if (!lightboxPhoto) return;
    const currentIndex = GALLERY_ITEMS.findIndex((p) => p.id === lightboxPhoto.id);
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    setLightboxPhoto(GALLERY_ITEMS[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!lightboxPhoto) return;
    const currentIndex = GALLERY_ITEMS.findIndex((p) => p.id === lightboxPhoto.id);
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setLightboxPhoto(GALLERY_ITEMS[prevIndex]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f6] text-[#1b1c1a]">
      {/* Top Header */}
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onOpenWhatsAppModal={handleOpenWhatsApp}
      />

      {/* Main Dynamic View */}
      <main className="flex-1 w-full pt-20">
        {currentPage === 'home' && (
          <HomeView
            onSelectSuite={setDetailSuite}
            onOpenWhatsApp={handleOpenWhatsApp}
            onSelectPhoto={setLightboxPhoto}
            onNavigate={setCurrentPage}
          />
        )}

        {currentPage === 'stay' && (
          <StayView
            onSelectSuite={setDetailSuite}
            onOpenWhatsApp={handleOpenWhatsApp}
            onOpenBookingForm={handleOpenBooking}
          />
        )}

        {currentPage === 'experiences' && (
          <ExperiencesView onOpenWhatsApp={handleOpenWhatsApp} />
        )}

        {currentPage === 'dining' && (
          <DiningView onOpenWhatsApp={handleOpenWhatsApp} />
        )}

        {currentPage === 'celebrations' && (
          <CelebrationsView onOpenWhatsApp={handleOpenWhatsApp} />
        )}

        {currentPage === 'gallery' && (
          <GalleryView
            onSelectPhoto={setLightboxPhoto}
            onOpenWhatsApp={handleOpenWhatsApp}
          />
        )}

        {currentPage === 'about' && (
          <AboutView
            onOpenWhatsApp={handleOpenWhatsApp}
            onNavigate={setCurrentPage}
          />
        )}

        {currentPage === 'location' && (
          <LocationView onOpenWhatsApp={handleOpenWhatsApp} />
        )}

        {currentPage === 'contact' && (
          <ContactView onOpenWhatsApp={handleOpenWhatsApp} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={setCurrentPage}
        onOpenWhatsAppModal={handleOpenWhatsApp}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp onClick={() => handleOpenWhatsApp('general')} />

      {/* WhatsApp Modal */}
      <WhatsAppModal
        isOpen={whatsAppModalOpen}
        onClose={() => setWhatsAppModalOpen(false)}
        initialType={whatsAppType}
        initialDetail={whatsAppDetail}
      />

      {/* Suite Detail Modal */}
      <SuiteDetailModal
        suite={detailSuite}
        onClose={() => setDetailSuite(null)}
        onOpenBookingForm={handleOpenBooking}
      />

      {/* Booking Date Checker Modal */}
      <BookingInquiryModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        selectedSuiteName={bookingSuiteName}
      />

      {/* Gallery Lightbox */}
      <GalleryLightbox
        photo={lightboxPhoto}
        onClose={() => setLightboxPhoto(null)}
        onNext={handleNextPhoto}
        onPrev={handlePrevPhoto}
      />
    </div>
  );
}
