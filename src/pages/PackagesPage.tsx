import React, { useState, useMemo, useEffect } from 'react';
import { Sparkles, Calendar, DollarSign, Clock, Check, Building2, Shield, ArrowRight, X } from 'lucide-react';
import { PackageCard } from '../components/PackageCard';
import { BookingModal } from '../components/BookingModal';
import { SAMPLE_PACKAGES } from '../data/travelData';
import { TravelPackage } from '../types/travel';

export const PackagesPage: React.FC = () => {
  const [packages, setPackages] = useState<TravelPackage[]>(SAMPLE_PACKAGES);
  const [selectedStyle, setSelectedStyle] = useState('all');
  const [maxPrice, setMaxPrice] = useState(3500);
  const [selectedPackage, setSelectedPackage] = useState<TravelPackage | null>(null);
  const [bookingPackage, setBookingPackage] = useState<TravelPackage | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Fetch from backend API if available
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await fetch('/api/packages');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setPackages(data);
          }
        }
      } catch (e) {
        // fallback to SAMPLE_PACKAGES
      }
    };
    fetchPackages();
  }, []);

  const styles = ['all', 'Luxury', 'Adventure', 'Cultural', 'Honeymoon', 'Wellness'];

  const filteredPackages = useMemo(() => {
    return packages.filter((pkg) => {
      const matchStyle =
        selectedStyle === 'all' || pkg.travelStyle.toLowerCase() === selectedStyle.toLowerCase();
      const matchPrice = pkg.price <= maxPrice;
      return matchStyle && matchPrice;
    });
  }, [packages, selectedStyle, maxPrice]);

  return (
    <div className="pt-28 pb-20 min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-700 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Curated Vacations</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-stone-900 tracking-tight mb-4">
            Signature Travel Packages
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Every itinerary includes five-star boutique palaces, chauffeured first-class transfers, accredited historians, and privately curated excursions.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Style Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-xl w-full md:w-auto">
              {styles.map((style) => (
                <button
                  key={style}
                  onClick={() => setSelectedStyle(style)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors capitalize ${
                    selectedStyle.toLowerCase() === style.toLowerCase()
                      ? 'bg-white text-stone-900 shadow-xs font-bold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {style === 'all' ? 'All Travel Styles' : style}
                </button>
              ))}
            </div>

            {/* Max Budget Slider */}
            <div className="flex items-center gap-4 w-full md:w-72">
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider shrink-0">
                Max Price:
              </span>
              <div className="flex-1 flex items-center gap-2">
                <input
                  type="range"
                  min="1200"
                  max="3500"
                  step="100"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-amber-600 cursor-pointer"
                />
                <span className="text-xs font-bold text-stone-900 tabular-nums shrink-0">
                  ${maxPrice}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              packageData={pkg}
              onSelect={(p) => setSelectedPackage(p)}
              onBook={(p) => {
                setBookingPackage(p);
                setIsBookingOpen(true);
              }}
            />
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="py-20 text-center bg-white rounded-3xl border border-stone-200">
            <h3 className="text-lg font-bold font-serif text-stone-800 mb-2">
              No packages found within your current budget
            </h3>
            <p className="text-xs text-stone-500 mb-4">
              Try adjusting the maximum price slider to discover available itineraries.
            </p>
            <button
              onClick={() => {
                setSelectedStyle('all');
                setMaxPrice(3500);
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Package Detail Modal / Drawer */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden border border-stone-200 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
            <button
              onClick={() => setSelectedPackage(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-all shadow-md"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto flex-1">
              {/* Header Image */}
              <div className="relative aspect-[16/9] w-full bg-stone-900">
                <img
                  src={selectedPackage.image}
                  alt={selectedPackage.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-1">
                    {selectedPackage.travelStyle} · {selectedPackage.durationDays} Days / {selectedPackage.durationNights} Nights
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold font-serif">
                    {selectedPackage.title}
                  </h2>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Hotel Card */}
                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider mb-1">
                    <Building2 className="w-4 h-4" />
                    <span>Included Luxury Accommodations</span>
                  </div>
                  <h4 className="text-base font-bold font-serif text-stone-900">
                    {selectedPackage.hotelInfo.name} ({selectedPackage.hotelInfo.ratingStars}-Star)
                  </h4>
                  <p className="text-xs text-stone-600 mt-1">
                    {selectedPackage.hotelInfo.description}
                  </p>
                </div>

                {/* Day-by-Day Itinerary */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-stone-600 mb-3 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span>Curated Day-by-Day Itinerary</span>
                  </h3>
                  <div className="space-y-3">
                    {selectedPackage.itinerary.map((day) => (
                      <div key={day.day} className="p-3.5 bg-white rounded-xl border border-stone-200 flex gap-3">
                        <span className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center shrink-0">
                          {day.day}
                        </span>
                        <div>
                          <h5 className="text-xs font-bold text-stone-900">{day.title}</h5>
                          <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">{day.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inclusions & Exclusions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-emerald-50/60 border border-emerald-200/80 rounded-2xl">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                      What is Included:
                    </h5>
                    <ul className="space-y-1.5 text-xs text-emerald-950">
                      {selectedPackage.included.map((inc, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-stone-100/70 border border-stone-200 rounded-2xl">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                      Not Included:
                    </h5>
                    <ul className="space-y-1.5 text-xs text-stone-600">
                      {selectedPackage.notIncluded.map((not, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span>·</span>
                          <span>{not}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Modal Bar */}
            <div className="bg-stone-50 border-t border-stone-200 p-4 sm:p-5 flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-stone-600 block">All-Inclusive Total</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold font-serif text-stone-900 tabular-nums">
                    ${selectedPackage.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-stone-600">/ traveler</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedPackage(null)}
                  className="px-4 py-2.5 text-xs font-semibold text-stone-600 hover:text-stone-900"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const pkg = selectedPackage;
                    setSelectedPackage(null);
                    setBookingPackage(pkg);
                    setIsBookingOpen(true);
                  }}
                  className="flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-amber-600 hover:bg-amber-700 active:scale-95 transition-all rounded-xl shadow cursor-pointer"
                >
                  <span>Book This Package</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedItem={bookingPackage}
      />
    </div>
  );
};
