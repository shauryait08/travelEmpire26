import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, MapPin, Calendar, DollarSign, Building2, Check, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import { SAMPLE_DESTINATIONS } from '../data/travelData';
import { Destination } from '../types/travel';
import { BookingModal } from '../components/BookingModal';

export const DestinationDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [destination, setDestination] = useState<Destination | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    // Check local sample destinations first or fetch from API
    const found = SAMPLE_DESTINATIONS.find((d) => d.id === id);
    if (found) {
      setDestination(found);
    } else {
      fetch(`/api/destinations/${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data && !data.error) setDestination(data);
        })
        .catch(() => {});
    }
  }, [id]);

  if (!destination) {
    return (
      <div className="pt-36 pb-20 max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold font-serif text-stone-900 mb-2">
          Destination Not Found
        </h2>
        <p className="text-sm text-stone-600 mb-6">
          We could not locate this destination in our catalog.
        </p>
        <Link
          to="/destinations"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-stone-900 rounded-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to All Destinations</span>
        </Link>
      </div>
    );
  }

  const allImages = [destination.image, ...(destination.secondaryImages || [])];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-stone-50">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-stone-500">
          <Link to="/" className="hover:text-stone-900">Home</Link>
          <span>/</span>
          <Link to="/destinations" className="hover:text-stone-900">Destinations</Link>
          <span>/</span>
          <span className="text-stone-900 font-semibold">{destination.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Large Destination Hero & Gallery */}
        <div className="bg-stone-950 rounded-3xl overflow-hidden relative shadow-xl">
          <div className="relative aspect-[21/9] sm:aspect-[16/7] w-full">
            <img
              src={allImages[activeImageIndex]}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

            {/* Bottom Title Bar */}
            <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-amber-400 font-bold uppercase tracking-wider mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>{destination.city}, {destination.country}</span>
                  <span aria-hidden="true">·</span>
                  <span>{destination.region}</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-bold font-serif leading-tight">
                  {destination.name}
                </h1>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3.5 py-2 rounded-xl text-sm font-semibold">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="tabular-nums">{destination.rating.toFixed(2)}</span>
                  <span className="text-stone-300 font-normal">({destination.reviewsCount} reviews)</span>
                </div>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-stone-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all rounded-xl shadow-lg cursor-pointer"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Thumbnails strip */}
          {allImages.length > 1 && (
            <div className="p-3 bg-stone-900/90 flex gap-3 border-t border-stone-800">
              {allImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    activeImageIndex === i ? 'border-amber-400 scale-105' : 'border-stone-700 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white p-7 rounded-2xl border border-stone-200/80 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold font-serif text-stone-900">
                About {destination.name}
              </h2>
              <p className="text-stone-700 text-sm leading-relaxed">
                {destination.description}
              </p>

              {/* Best Time to Visit */}
              <div className="mt-4 p-4 bg-amber-50/70 border border-amber-200 rounded-xl flex items-start gap-3">
                <Calendar className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs text-stone-800">
                  <span className="font-bold text-amber-900 block text-sm mb-0.5">Best Time to Visit</span>
                  <p className="leading-relaxed">{destination.bestTimeToVisit}</p>
                </div>
              </div>
            </div>

            {/* Popular Activities */}
            <div className="bg-white p-7 rounded-2xl border border-stone-200/80 shadow-sm space-y-4">
              <h3 className="text-lg font-bold font-serif text-stone-900">
                Popular Activities & Sightseeing
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {destination.popularActivities.map((act, i) => (
                  <div key={i} className="p-3.5 bg-stone-50 border border-stone-200 rounded-xl flex items-center justify-between text-xs text-stone-800">
                    <span className="font-semibold">{act}</span>
                    <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">Included</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Hotels */}
            <div className="bg-white p-7 rounded-2xl border border-stone-200/80 shadow-sm space-y-4">
              <h3 className="text-lg font-bold font-serif text-stone-900 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-amber-600" />
                <span>Recommended Accommodations</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.recommendedHotels.map((hotel, idx) => (
                  <div key={idx} className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-stone-900 font-serif">{hotel.name}</h4>
                      <div className="flex text-amber-500">
                        {[...Array(hotel.stars)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {hotel.amenities.map((am, i) => (
                        <span key={i} className="text-[10px] text-stone-600 bg-stone-200/70 px-1.5 py-0.5 rounded">
                          {am}
                        </span>
                      ))}
                    </div>
                    <div className="pt-2 border-t border-stone-200 flex justify-between text-xs">
                      <span className="text-stone-500">Nightly Rate:</span>
                      <span className="font-bold text-stone-900 tabular-nums">${hotel.pricePerNight}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Booking Card */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-lg sticky top-28 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-stone-500 block">Package Starting Price</span>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-bold font-serif text-stone-900 tabular-nums">
                    ${destination.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-stone-500">/ person</span>
                </div>
              </div>

              {/* Estimated Budget Tiers */}
              <div className="space-y-2 pt-4 border-t border-stone-100">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-600 block">
                  Daily Budget Guide:
                </span>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 bg-stone-50 rounded-lg border border-stone-200">
                    <span className="text-[10px] text-stone-500 block">Backpacker</span>
                    <span className="font-bold text-stone-800">${destination.estimatedBudget.backpacker}</span>
                  </div>
                  <div className="p-2 bg-amber-50 rounded-lg border border-amber-200">
                    <span className="text-[10px] text-amber-800 font-semibold block">Mid-Range</span>
                    <span className="font-bold text-amber-900">${destination.estimatedBudget.midRange}</span>
                  </div>
                  <div className="p-2 bg-stone-900 text-white rounded-lg">
                    <span className="text-[10px] text-amber-400 block">Luxury</span>
                    <span className="font-bold">${destination.estimatedBudget.luxury}</span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="space-y-2 text-xs text-stone-600 pt-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Financial Protection Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Free Itinerary Customization</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>24/7 Personal Travel Concierge</span>
                </div>
              </div>

              {/* Direct Booking CTA */}
              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full py-3.5 text-xs font-bold uppercase tracking-wider text-stone-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all rounded-xl shadow cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book This Destination</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedItem={destination}
      />
    </div>
  );
};
