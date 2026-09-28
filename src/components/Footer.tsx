import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Mail, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
                <Compass className="w-5 h-5 transition-transform group-hover:rotate-45" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-serif">
                Aura Voyages
              </span>
            </Link>
            <p className="text-sm text-stone-400 max-w-sm leading-relaxed">
              Curating authentic, transformative luxury journeys and private expeditions to the world’s most mesmerizing landscapes, boutique sanctuaries, and cultural treasures.
            </p>
            <div className="pt-2 text-xs text-stone-400 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>742 Evergreen Terrace, Suite 500, New York, NY 10022</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>+1 (800) 555-TRAV · 24/7 Global Expeditions Desk</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>concierge@auravoyages.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-stone-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-stone-400 hover:text-white transition-colors">
                  All Destinations
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-stone-400 hover:text-white transition-colors">
                  Curated Packages
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-400 hover:text-white transition-colors">
                  About Our Mission
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-stone-400 hover:text-white transition-colors">
                  Contact Concierge
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Featured Destinations
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/destinations?region=Europe" className="text-stone-400 hover:text-white transition-colors">
                  Swiss Alps & Valleys
                </Link>
              </li>
              <li>
                <Link to="/destinations?region=Asia" className="text-stone-400 hover:text-white transition-colors">
                  Bali Spiritual Retreat
                </Link>
              </li>
              <li>
                <Link to="/destinations?region=Asia" className="text-stone-400 hover:text-white transition-colors">
                  Kyoto & Tokyo Odyssey
                </Link>
              </li>
              <li>
                <Link to="/destinations?region=Oceania" className="text-stone-400 hover:text-white transition-colors">
                  Maldives Overwater Lagoon
                </Link>
              </li>
              <li>
                <Link to="/destinations?region=Middle East" className="text-stone-400 hover:text-white transition-colors">
                  Dubai Desert Safari
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscribe */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Travel Dispatch
            </h4>
            <p className="text-xs text-stone-400 mb-3 leading-relaxed">
              Receive private seasonal destination dispatches, secret boutique openings, and early booking privileges.
            </p>
            {subscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-800/80 rounded-lg text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>You have been added to our private dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-stone-800/90 border border-stone-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold uppercase tracking-wider text-stone-900 bg-amber-400 hover:bg-amber-300 transition-colors rounded-lg"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© {new Date().getFullYear()} Aura Voyages Inc. All rights reserved. Registered Travel Seller #2094182.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-stone-300 cursor-pointer transition-colors">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-stone-300 cursor-pointer transition-colors">Terms of Service</span>
            <span>·</span>
            <span className="hover:text-stone-300 cursor-pointer transition-colors">Guest Protection Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
