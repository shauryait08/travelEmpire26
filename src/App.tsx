import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { DestinationsPage } from './pages/DestinationsPage';
import { PackagesPage } from './pages/PackagesPage';
import { DestinationDetailPage } from './pages/DestinationDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isGeneralBookingOpen, setIsGeneralBookingOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-amber-500 selection:text-white">
        {/* Navigation Bar */}
        <Navbar onOpenBooking={() => setIsGeneralBookingOpen(true)} />

        {/* Dynamic Route Pages */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/destination/:id" element={<DestinationDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Booking Modal triggered via Navbar */}
        <BookingModal
          isOpen={isGeneralBookingOpen}
          onClose={() => setIsGeneralBookingOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
