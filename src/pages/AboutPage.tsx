import React from 'react';
import { Compass, ShieldCheck, Heart, Users, Globe2, Award, Sparkles } from 'lucide-react';
import { COMPANY_STATS, WHY_CHOOSE_US } from '../data/travelData';

export const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Julian Montgomery',
      role: 'Founder & Head of Expeditions',
      bio: 'Former National Geographic alpine expedition lead with over two decades exploring remote high-altitude routes and cultural heritage corridors.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Kenji Takahashi',
      role: 'East Asia Specialist & Historian',
      bio: 'Born in Kyoto, Kenji curates private temple access, heritage ryokan stays, and Michelin culinary journeys across Japan and Southeast Asia.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Camilla Laurent',
      role: 'European Palaces & Vineyard Curator',
      bio: 'Sommelier and architecture historian specializing in private French châteaux, Swiss alpine chalets, and Mediterranean luxury villas.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Tariq Al-Hashemi',
      role: 'Middle East & Arabian Desert Specialist',
      bio: 'Pioneer of desert conservation glamping and Arabian Gulf private yacht charters with deep heritage ties across the UAE and Oman.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Hero Introduction */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-700">
            <Compass className="w-4 h-4" />
            <span>Our Heritage & Purpose</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold font-serif text-stone-900 tracking-tight">
            Crafting Extraordinary Journeys Since 2011
          </h1>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed font-light">
            Aura Voyages was founded on a simple conviction: true luxury lies in authentic connection, deep cultural immersion, and seamless peace of mind.
          </p>
        </div>

        {/* Narrative & Mission Banner */}
        <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-amber-700 font-bold block">
              Our Guiding Mission
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 leading-tight">
              To transform the way people discover our planet through thoughtful, sustainable, and personalized travel.
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              We reject formulaic package tours and cookie-cutter tourist traps. Every journey we design begins with an intimate dialogue: understanding your personal passions, rhythm, and dreams.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed">
              Our global network of resident historians, marine naturalists, and boutique palace proprietors ensures that every door opened is private, respectful, and unforgettable.
            </p>
          </div>

          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80"
              alt="Travel Expedition Landscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white text-xs font-medium">
              <span>Mont Blanc Alpine Expedition · Haute Savoie</span>
            </div>
          </div>
        </div>

        {/* Milestone Statistics */}
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-stone-800">
            {COMPANY_STATS.map((stat, idx) => (
              <div key={idx} className="pt-4 sm:pt-0 sm:px-4">
                <span className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 block tracking-tight tabular-nums mb-1">
                  {stat.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-stone-300 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Pillars */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-amber-700 font-bold block mb-2">
              The Aura Standards
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
              Why Travelers Place Their Trust in Us
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.number}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm"
              >
                <span className="text-2xl font-serif font-bold text-amber-600 block mb-2">
                  {item.number}
                </span>
                <h4 className="text-base font-bold text-stone-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Destination Specialists Team */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-amber-700 font-bold block mb-2">
              Our Curators
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
              Meet Your Travel Specialists
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm mt-2">
              Seasoned explorers, accredited historians, and local insiders dedicated to architecting your bespoke itinerary.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <div key={i} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm flex flex-col">
                <div className="aspect-[4/3] w-full overflow-hidden bg-stone-100">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold font-serif text-stone-900">
                      {member.name}
                    </h4>
                    <span className="text-xs text-amber-700 font-medium block mb-2">
                      {member.role}
                    </span>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
