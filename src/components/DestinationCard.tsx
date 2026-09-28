import React, { useState } from 'react';
import { Star, MapPin, ArrowUpRight, Calendar, Compass } from 'lucide-react';
import { Destination } from '../types/travel';

interface DestinationCardProps {
  destination: Destination;
  onSelect: (destination: Destination) => void;
  onBook: (destination: Destination) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  onSelect,
  onBook,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group bg-white rounded-2xl border border-stone-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Destination Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
        {!imageError ? (
          <img
            src={destination.image}
            alt={`${destination.name}, ${destination.country}`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover img-zoom-hover transition-transform duration-700 ease-out"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-stone-800 to-stone-900 text-stone-200 p-6 text-center">
            <Compass className="w-10 h-10 text-amber-400 mb-2" />
            <span className="font-serif text-lg font-bold text-white">{destination.name}</span>
            <span className="text-xs text-stone-400">{destination.country}</span>
          </div>
        )}

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Subtle Top Kicker */}
        <div className="absolute top-3 left-3 text-xs font-semibold text-white/95 drop-shadow bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md">
          {destination.region}
        </div>

        {/* Rating overlay */}
        <div className="absolute top-3 right-3 flex items-center gap-1 text-xs font-bold text-white bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span className="tabular-nums">{destination.rating.toFixed(2)}</span>
          <span className="text-stone-300 text-[11px] font-normal">({destination.reviewsCount})</span>
        </div>

        {/* Bottom Image Info */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <div className="flex items-center gap-1.5 text-xs text-amber-300 mb-0.5">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>{destination.city}, {destination.country}</span>
          </div>
          <h3 className="text-xl font-bold font-serif text-white tracking-tight leading-tight">
            {destination.name}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Unboxed Metadata (Zero-Pill discipline) */}
          <div className="flex items-center gap-2 text-xs text-stone-500 mb-3">
            <span>{destination.tag}</span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-stone-400" />
              <span>Best: {destination.bestTimeToVisit.split('(')[0].trim()}</span>
            </span>
          </div>

          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4">
            {destination.description}
          </p>
        </div>

        {/* Card Footer: Price & Actions */}
        <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-stone-600 block font-medium">Starting from</span>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold text-stone-900 tabular-nums">
                ${destination.price.toLocaleString()}
              </span>
              <span className="text-xs text-stone-600">/ guest</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelect(destination)}
              className="px-3 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 active:scale-95 transition-colors rounded-lg cursor-pointer whitespace-nowrap"
            >
              Details
            </button>
            <button
              onClick={() => onBook(destination)}
              className="flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-amber-600 hover:bg-amber-700 active:scale-95 transition-colors rounded-lg shadow-sm cursor-pointer whitespace-nowrap"
            >
              <span>Book</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
