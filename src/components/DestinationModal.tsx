import React, { useState } from 'react';
import { X, Star, Calendar, MapPin, DollarSign, Building2, Check, ArrowRight } from 'lucide-react';
import { Destination } from '../types/travel';

interface DestinationModalProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
  onBook: (destination: Destination) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  isOpen,
  onClose,
  onBook,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!isOpen || !destination) return null;

  const allImages = [destination.image, ...(destination.secondaryImages || [])];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden border border-stone-200 animate-in fade-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col">
        {/* Close Button Floating */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md transition-all shadow-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-1">
          {/* Hero Image & Gallery */}
          <div className="relative aspect-[16/9] w-full bg-stone-950">
            <img
              src={allImages[activeImageIndex]}
              alt={destination.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-opacity duration-300"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

            {/* Bottom Title Bar */}
            <div className="absolute bottom-4 left-6 right-6 text-white">
              <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{destination.city}, {destination.country}</span>
                <span aria-hidden="true">·</span>
                <span>{destination.region}</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <h2 className="text-2xl sm:text-4xl font-bold font-serif leading-tight">
                  {destination.name}
                </h2>
                <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1 rounded-lg text-sm font-semibold">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="tabular-nums">{destination.rating.toFixed(2)}</span>
                  <span className="text-stone-300 font-normal">({destination.reviewsCount} reviews)</span>
                </div>
              </div>
            </div>

            {/* Image Thumbnails strip if multiple images */}
            {allImages.length > 1 && (
              <div className="absolute top-4 left-4 flex gap-2 z-10">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx ? 'border-amber-400 scale-105 shadow' : 'border-white/50 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Modal Details Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Description & Best Time */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-serif text-stone-900">
                Overview & Experience
              </h3>
              <p className="text-stone-700 text-sm leading-relaxed">
                {destination.description}
              </p>

              <div className="flex items-start gap-3 p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl text-xs text-amber-900">
                <Calendar className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block text-sm mb-0.5">Best Time to Visit</span>
                  <p className="text-stone-700 leading-relaxed">{destination.bestTimeToVisit}</p>
                </div>
              </div>
            </div>

            {/* Highlights */}
            {destination.highlights && destination.highlights.length > 0 && (
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-stone-600 mb-3">
                  Signature Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {destination.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-stone-700 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Popular Activities */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-600 mb-3">
                Top Activities & Excursions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {destination.popularActivities.map((act, i) => (
                  <div key={i} className="p-3.5 bg-stone-50/80 border border-stone-200 rounded-xl flex items-center justify-between text-xs text-stone-800">
                    <span className="font-semibold">{act}</span>
                    <span className="text-[11px] text-amber-700 bg-amber-100/60 px-2 py-0.5 rounded font-medium">Included Option</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Estimated Budget Comparison */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-600 mb-3 flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-amber-600" />
                <span>Estimated Daily Budget Guidance</span>
              </h3>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-200">
                  <span className="text-[11px] uppercase tracking-wider text-stone-600 block mb-1">Explorer / Casual</span>
                  <span className="text-lg font-bold text-stone-800 tabular-nums">
                    ${destination.estimatedBudget.backpacker}
                  </span>
                  <span className="text-[10px] text-stone-600 block mt-0.5">/ day</span>
                </div>
                <div className="p-3.5 bg-amber-50/60 border border-amber-200 rounded-xl">
                  <span className="text-[11px] uppercase tracking-wider text-amber-800 font-bold block mb-1">Comfort / Premium</span>
                  <span className="text-lg font-bold text-amber-900 tabular-nums">
                    ${destination.estimatedBudget.midRange}
                  </span>
                  <span className="text-[10px] text-stone-600 block mt-0.5">/ day</span>
                </div>
                <div className="p-3.5 bg-stone-900 text-white rounded-xl">
                  <span className="text-[11px] uppercase tracking-wider text-amber-400 font-bold block mb-1">Ultra Luxury</span>
                  <span className="text-lg font-bold text-white tabular-nums">
                    ${destination.estimatedBudget.luxury}
                  </span>
                  <span className="text-[10px] text-stone-400 block mt-0.5">/ day</span>
                </div>
              </div>
            </div>

            {/* Recommended Hotels */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-stone-600 mb-3 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-amber-600" />
                <span>Recommended Boutique Hotels</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.recommendedHotels.map((hotel, idx) => (
                  <div key={idx} className="p-4 bg-stone-50 rounded-2xl border border-stone-200 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-bold text-stone-900 font-serif">
                          {hotel.name}
                        </h4>
                        <div className="flex items-center text-amber-500">
                          {[...Array(hotel.stars)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2 mb-3">
                        {hotel.amenities.map((am, i) => (
                          <span key={i} className="text-[10px] text-stone-600 bg-stone-200/60 px-1.5 py-0.5 rounded">
                            {am}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-stone-200 flex justify-between items-center text-xs">
                      <span className="text-stone-500">Avg. Nightly Rate:</span>
                      <span className="font-bold text-stone-900 tabular-nums">
                        ${hotel.pricePerNight} / night
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Fixed Bar */}
        <div className="bg-stone-50 border-t border-stone-200 p-4 sm:p-5 flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-stone-600 block">Package Price From</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold font-serif text-stone-900 tabular-nums">
                ${destination.price.toLocaleString()}
              </span>
              <span className="text-xs text-stone-600">/ person</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-semibold text-stone-600 hover:text-stone-900"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBook(destination);
              }}
              className="flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white bg-amber-600 hover:bg-amber-700 active:scale-95 transition-all rounded-xl shadow cursor-pointer"
            >
              <span>Book This Destination</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
