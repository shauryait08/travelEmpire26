import React, { useState } from 'react';
import { Search, MapPin, Calendar, DollarSign, Filter } from 'lucide-react';

interface SearchSectionProps {
  onSearch: (filters: {
    keyword: string;
    region: string;
    duration: string;
    maxPrice: number;
  }) => void;
}

export const SearchSection: React.FC<SearchSectionProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');
  const [region, setRegion] = useState('all');
  const [duration, setDuration] = useState('all');
  const [maxPrice, setMaxPrice] = useState(3500);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ keyword, region, duration, maxPrice });
  };

  return (
    <div className="relative -mt-10 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl border border-stone-200/80 p-5 md:p-6 backdrop-blur-md">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          {/* Keyword Search */}
          <div className="relative">
            <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
              Where to?
            </label>
            <div className="flex items-center gap-2 border border-stone-200 rounded-xl px-3 py-2.5 bg-stone-50/50 focus-within:border-amber-500 focus-within:bg-white transition-colors">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Paris, Bali, Tokyo..."
                className="w-full text-sm text-stone-800 placeholder-stone-400 bg-transparent focus:outline-none"
              />
            </div>
          </div>

          {/* Region Selector */}
          <div>
            <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
              Continent / Region
            </label>
            <div className="flex items-center gap-2 border border-stone-200 rounded-xl px-3 py-2.5 bg-stone-50/50 focus-within:border-amber-500 focus-within:bg-white transition-colors">
              <Filter className="w-4 h-4 text-amber-600 shrink-0" />
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full text-sm text-stone-800 bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="all">All Regions</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Middle East">Middle East</option>
                <option value="Americas">Americas</option>
                <option value="Oceania">Oceania</option>
              </select>
            </div>
          </div>

          {/* Duration Selector */}
          <div>
            <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
              Trip Duration
            </label>
            <div className="flex items-center gap-2 border border-stone-200 rounded-xl px-3 py-2.5 bg-stone-50/50 focus-within:border-amber-500 focus-within:bg-white transition-colors">
              <Calendar className="w-4 h-4 text-amber-600 shrink-0" />
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full text-sm text-stone-800 bg-transparent focus:outline-none cursor-pointer"
              >
                <option value="all">Any Duration</option>
                <option value="short">3 - 5 Days</option>
                <option value="medium">6 - 8 Days</option>
                <option value="long">9+ Days</option>
              </select>
            </div>
          </div>

          {/* Budget Range & Submit Button */}
          <div className="flex flex-col justify-end">
            <div className="flex justify-between items-center text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">
              <span>Max Budget / Person</span>
              <span className="text-amber-700 font-bold tabular-nums">${maxPrice}</span>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex-1 flex items-center gap-1 border border-stone-200 rounded-xl px-3 py-2 bg-stone-50/50">
                <DollarSign className="w-4 h-4 text-amber-600 shrink-0" />
                <input
                  type="range"
                  min="500"
                  max="4000"
                  step="100"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-amber-600 cursor-pointer"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 active:scale-95 transition-all rounded-xl shadow cursor-pointer shrink-0"
              >
                <Search className="w-4 h-4 text-amber-400" />
                <span>Search</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
