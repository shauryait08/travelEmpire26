import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, Compass, SlidersHorizontal } from 'lucide-react';
import { DestinationCard } from '../components/DestinationCard';
import { DestinationModal } from '../components/DestinationModal';
import { BookingModal } from '../components/BookingModal';
import { SAMPLE_DESTINATIONS } from '../data/travelData';
import { Destination } from '../types/travel';

export const DestinationsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [destinations, setDestinations] = useState<Destination[]>(SAMPLE_DESTINATIONS);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [selectedRegion, setSelectedRegion] = useState(searchParams.get('region') || 'all');
  const [sortBy, setSortBy] = useState<'recommended' | 'price-low' | 'price-high' | 'rating'>('recommended');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [bookingDestination, setBookingDestination] = useState<Destination | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Sync with searchParams
  useEffect(() => {
    const q = searchParams.get('search');
    const r = searchParams.get('region');
    if (q) setSearchQuery(q);
    if (r) setSelectedRegion(r);
  }, [searchParams]);

  // Fetch from backend API if available, else fallback to SAMPLE_DESTINATIONS
  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await fetch('/api/destinations');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setDestinations(data);
          }
        }
      } catch (e) {
        // use local SAMPLE_DESTINATIONS
      }
    };
    fetchDestinations();
  }, []);

  const regions = ['all', 'Europe', 'Asia', 'Middle East', 'Americas', 'Oceania'];

  const filteredDestinations = useMemo(() => {
    return destinations
      .filter((dest) => {
        const matchesQuery =
          !searchQuery ||
          dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          dest.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
          dest.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
          dest.tag.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesRegion =
          selectedRegion === 'all' || dest.region.toLowerCase() === selectedRegion.toLowerCase();

        return matchesQuery && matchesRegion;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // recommended order
      });
  }, [destinations, searchQuery, selectedRegion, sortBy]);

  const handleRegionClick = (reg: string) => {
    setSelectedRegion(reg);
    if (reg === 'all') {
      searchParams.delete('region');
    } else {
      searchParams.set('region', reg);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-700 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Global Portfolios</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-stone-900 tracking-tight mb-4">
            Curated World Destinations
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Discover iconic cities, pristine alpine valleys, tropical archipelagos, and ancient heritage centers hand-selected for extraordinary travel memories.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-5 rounded-2xl border border-stone-200 shadow-sm mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search city, country or vibe..."
                className="w-full pl-9 pr-4 py-2.5 text-xs bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-600"
              />
            </div>

            {/* Region Tabs (Functional segmented controls) */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-xl w-full md:w-auto">
              {regions.map((reg) => (
                <button
                  key={reg}
                  onClick={() => handleRegionClick(reg)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors capitalize ${
                    selectedRegion.toLowerCase() === reg.toLowerCase()
                      ? 'bg-white text-stone-900 shadow-xs font-bold'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {reg === 'all' ? 'All Regions' : reg}
                </button>
              ))}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 shrink-0 self-end md:self-auto text-xs">
              <SlidersHorizontal className="w-4 h-4 text-stone-400" />
              <span className="text-stone-500 font-medium">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-stone-50 border border-stone-200 rounded-xl px-2.5 py-2 text-stone-800 focus:outline-none cursor-pointer"
              >
                <option value="recommended">Featured / Curated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center text-xs text-stone-500 mb-6">
          <span>Showing {filteredDestinations.length} destination{filteredDestinations.length === 1 ? '' : 's'}</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-amber-700 hover:underline"
            >
              Clear search filter
            </button>
          )}
        </div>

        {/* Destinations Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredDestinations.map((dest) => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                onSelect={(d) => setSelectedDestination(d)}
                onBook={(d) => {
                  setBookingDestination(d);
                  setIsBookingOpen(true);
                }}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-white rounded-3xl border border-stone-200">
            <Compass className="w-12 h-12 text-stone-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold font-serif text-stone-800 mb-1">
              No destinations match your criteria
            </h3>
            <p className="text-xs text-stone-500 max-w-sm mx-auto mb-4">
              Try adjusting your search terms or selecting a different geographical region.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedRegion('all');
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-stone-900 rounded-xl hover:bg-stone-800"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Destination Details Modal */}
      <DestinationModal
        destination={selectedDestination}
        isOpen={Boolean(selectedDestination)}
        onClose={() => setSelectedDestination(null)}
        onBook={(dest) => {
          setSelectedDestination(null);
          setBookingDestination(dest);
          setIsBookingOpen(true);
        }}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedItem={bookingDestination}
      />
    </div>
  );
};
