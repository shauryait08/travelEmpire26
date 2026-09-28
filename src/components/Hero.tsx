import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Award, HeartHandshake } from 'lucide-react';

interface HeroProps {
  onExploreDestinations?: () => void;
  onViewPackages?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-stone-950">
      {/* Background Image with Dark Vignette & Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85"
          alt="Majestic Mountain Landscape"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in duration-1000"
          onError={(e) => {
            // Elegant CSS gradient fallback
            const target = e.currentTarget;
            target.style.display = 'none';
          }}
        />
        {/* Scrim Gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-black/40" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center">
        {/* Subtle eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs font-medium tracking-wide uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Curated Journeys Across 120+ Global Destinations</span>
        </div>

        {/* Required Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white font-serif leading-[1.1] mb-6 text-balance max-w-4xl mx-auto">
          Explore the World, Create Memories
        </h1>

        {/* Required Subheading */}
        <p className="text-lg sm:text-xl text-stone-200 max-w-2xl mx-auto font-light leading-relaxed mb-10 text-balance">
          Discover amazing destinations, exciting experiences and unforgettable journeys.
        </p>

        {/* Required Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Link
            to="/destinations"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide uppercase text-stone-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all duration-150 rounded-xl shadow-lg shadow-amber-500/20 whitespace-nowrap cursor-pointer"
          >
            <span>Explore Destinations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/packages"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide uppercase text-white bg-white/15 hover:bg-white/25 active:scale-95 backdrop-blur-md border border-white/25 transition-all duration-150 rounded-xl whitespace-nowrap cursor-pointer"
          >
            <span>View Packages</span>
          </Link>
        </div>

        {/* Value Trust Markers */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-stone-300 text-left sm:text-center">
          <div className="flex items-center sm:justify-center gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
            <div className="text-xs">
              <span className="font-semibold block text-white">100% Verified Stays</span>
              <span className="text-stone-400">Hand-inspected luxury boutique hotels</span>
            </div>
          </div>

          <div className="flex items-center sm:justify-center gap-3">
            <Award className="w-5 h-5 text-amber-400 shrink-0" />
            <div className="text-xs">
              <span className="font-semibold block text-white">4.95 / 5 Traveler Rating</span>
              <span className="text-stone-400">Over 50,000+ satisfied guests</span>
            </div>
          </div>

          <div className="flex items-center sm:justify-center gap-3">
            <HeartHandshake className="w-5 h-5 text-amber-400 shrink-0" />
            <div className="text-xs">
              <span className="font-semibold block text-white">24/7 Dedicated Concierge</span>
              <span className="text-stone-400">Personal trip architect on call</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
