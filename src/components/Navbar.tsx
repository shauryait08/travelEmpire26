import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenBooking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Travel Packages', path: '/packages' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200 py-3.5'
          : 'bg-stone-900/60 backdrop-blur-sm border-b border-white/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
          >
            <div className={`p-1.5 rounded-lg transition-colors ${isScrolled ? 'bg-stone-900 text-amber-400' : 'bg-white/10 text-amber-300'}`}>
              <Compass className="w-5 h-5 transition-transform group-hover:rotate-45 duration-300" />
            </div>
            <span
              className={`text-xl font-bold tracking-tight transition-colors font-serif ${
                isScrolled ? 'text-stone-900' : 'text-white'
              }`}
            >
              Aura Voyages
            </span>
          </Link>

          {/* Zone 2: Clean Text Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-amber-500 relative py-1 ${
                    isScrolled
                      ? active
                        ? 'text-stone-900 font-semibold'
                        : 'text-stone-600'
                      : active
                      ? 'text-white font-semibold'
                      : 'text-stone-200'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+18005558728"
              className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
                isScrolled ? 'text-stone-600 hover:text-stone-900' : 'text-stone-300 hover:text-white'
              }`}
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-500" />
              <span>+1 (800) 555-TRAV</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-amber-600 hover:bg-amber-700 active:scale-95 transition-all duration-150 rounded-lg shadow-sm whitespace-nowrap cursor-pointer"
            >
              Plan Your Trip
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-stone-900 hover:bg-stone-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                  isActive(link.path)
                    ? 'bg-amber-50 text-amber-800 font-semibold'
                    : 'text-stone-700 hover:bg-stone-50 hover:text-stone-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-stone-100 flex flex-col gap-3">
              <a
                href="tel:+18005558728"
                className="flex items-center gap-2 text-sm text-stone-600 px-3 py-1.5"
              >
                <PhoneCall className="w-4 h-4 text-amber-600" />
                <span>24/7 Concierge: +1 (800) 555-TRAV</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenBooking) onOpenBooking();
                }}
                className="w-full py-2.5 text-center text-sm font-semibold uppercase tracking-wider text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow-sm"
              >
                Plan Your Trip
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
