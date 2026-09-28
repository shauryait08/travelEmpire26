import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Compass, Sparkles, MapPin } from 'lucide-react';
import { Hero } from '../components/Hero';
import { SearchSection } from '../components/SearchSection';
import { DestinationCard } from '../components/DestinationCard';
import { PackageCard } from '../components/PackageCard';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { DestinationModal } from '../components/DestinationModal';
import { BookingModal } from '../components/BookingModal';
import { SAMPLE_DESTINATIONS, SAMPLE_PACKAGES } from '../data/travelData';
import { Destination, TravelPackage } from '../types/travel';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [bookingItem, setBookingItem] = useState<Destination | TravelPackage | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleSearch = (filters: {
    keyword: string;
    region: string;
    duration: string;
    maxPrice: number;
  }) => {
    // Navigate to destinations or packages with query params
    const query = new URLSearchParams();
    if (filters.keyword) query.set('search', filters.keyword);
    if (filters.region && filters.region !== 'all') query.set('region', filters.region);
    navigate(`/destinations?${query.toString()}`);
  };

  const handleOpenBooking = (item: Destination | TravelPackage) => {
    setBookingItem(item);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Search Destination Section */}
      <SearchSection onSearch={handleSearch} />

      {/* 3. Popular Destinations Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-700 mb-2">
              <Compass className="w-3.5 h-3.5" />
              <span>World-Renowned Locations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-900 tracking-tight">
              Popular Destinations
            </h2>
            <p className="text-stone-600 text-sm mt-2 max-w-xl">
              From snow-capped Swiss spires to turquoise Maldivian atolls, discover our travelers’ most cherished journeys.
            </p>
          </div>

          <Link
            to="/destinations"
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-800 transition-colors"
          >
            <span>View All 8 Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 8 Sample Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAMPLE_DESTINATIONS.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
              onSelect={(dest) => setSelectedDestination(dest)}
              onBook={(dest) => handleOpenBooking(dest)}
            />
          ))}
        </div>
      </section>

      {/* 4. Featured Travel Packages */}
      <section className="py-20 bg-stone-100/60 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-700 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>All-Inclusive Itineraries</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-900 tracking-tight">
                Featured Travel Packages
              </h2>
              <p className="text-stone-600 text-sm mt-2 max-w-xl">
                Carefully orchestrated expeditions combining 5-star palace hotels, private guides, and VIP excursions.
              </p>
            </div>

            <Link
              to="/packages"
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 hover:text-amber-800 transition-colors"
            >
              <span>Explore All Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SAMPLE_PACKAGES.slice(0, 6).map((pkg) => (
              <PackageCard
                key={pkg.id}
                packageData={pkg}
                onSelect={() => navigate(`/packages`)}
                onBook={(p) => handleOpenBooking(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <WhyChooseUs />

      {/* 6. Customer Reviews */}
      <TestimonialsSection />

      {/* 7. Call To Action Banner */}
      <section className="py-20 relative bg-stone-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
            alt="Tropical Beach"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
            Begin Your Next Chapter
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif leading-tight text-balance">
            Ready to Experience the Extraordinary?
          </h2>
          <p className="text-stone-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Whether it’s a private family charter through the Swiss Alps or an intimate sunset over Bali’s ancient shrines, our dedicated architects will create your perfect journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                setBookingItem(null);
                setIsBookingOpen(true);
              }}
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-stone-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all rounded-xl shadow-lg cursor-pointer"
            >
              Plan Your Custom Journey
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 active:scale-95 border border-white/20 transition-all rounded-xl cursor-pointer"
            >
              Speak With a Specialist
            </Link>
          </div>
        </div>
      </section>

      {/* Destination Modal */}
      <DestinationModal
        destination={selectedDestination}
        isOpen={Boolean(selectedDestination)}
        onClose={() => setSelectedDestination(null)}
        onBook={(dest) => {
          setSelectedDestination(null);
          handleOpenBooking(dest);
        }}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedItem={bookingItem}
      />
    </div>
  );
};
