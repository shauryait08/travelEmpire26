import React, { useState } from 'react';
import { Star, Clock, Check, Building2, ArrowRight } from 'lucide-react';
import { TravelPackage } from '../types/travel';

interface PackageCardProps {
  packageData: TravelPackage;
  onSelect: (pkg: TravelPackage) => void;
  onBook: (pkg: TravelPackage) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  packageData,
  onSelect,
  onBook,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Top Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-100">
        {!imageError ? (
          <img
            src={packageData.image}
            alt={packageData.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover img-zoom-hover transition-transform duration-700 ease-out"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-stone-800 text-stone-200 p-6 text-center">
            <span className="font-serif text-lg font-bold text-white">{packageData.title}</span>
            <span className="text-xs text-stone-400">{packageData.country}</span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        {/* Style Tag and Duration */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="text-xs font-semibold text-white bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md">
            {packageData.travelStyle}
          </span>
        </div>

        <div className="absolute top-3 right-3 flex items-center gap-1 text-xs font-bold text-white bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span className="tabular-nums">{packageData.rating.toFixed(2)}</span>
        </div>

        {/* Bottom Banner Title */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <div className="flex items-center gap-2 text-xs text-amber-300 font-medium mb-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{packageData.durationDays} Days / {packageData.durationNights} Nights</span>
            <span aria-hidden="true">·</span>
            <span>{packageData.country}</span>
          </div>
          <h3 className="text-lg font-bold font-serif text-white tracking-tight leading-snug">
            {packageData.title}
          </h3>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Hotel Information */}
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-100 flex items-start gap-2.5">
            <Building2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-semibold text-stone-900 block">{packageData.hotelInfo.name}</span>
              <span className="text-stone-500">{packageData.hotelInfo.type} ({packageData.hotelInfo.ratingStars}-Star)</span>
            </div>
          </div>

          {/* Included Activities */}
          <div>
            <span className="text-[11px] uppercase tracking-wider text-stone-600 font-bold block mb-2">
              Featured Activities Included:
            </span>
            <ul className="space-y-1.5 text-xs text-stone-700">
              {packageData.includedActivities.slice(0, 3).map((act, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{act}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer with Price and CTAs */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-stone-600 block font-medium">All-Inclusive From</span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-stone-900 tabular-nums">
                ${packageData.price.toLocaleString()}
              </span>
              <span className="text-xs text-stone-600">/ person</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelect(packageData)}
              className="px-3 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 active:scale-95 transition-colors rounded-lg cursor-pointer whitespace-nowrap"
            >
              View Details
            </button>
            <button
              onClick={() => onBook(packageData)}
              className="flex items-center gap-1 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-amber-600 hover:bg-amber-700 active:scale-95 transition-colors rounded-lg shadow-sm cursor-pointer whitespace-nowrap"
            >
              <span>Book</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
