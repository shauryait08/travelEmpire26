import React from 'react';
import { WHY_CHOOSE_US, COMPANY_STATS } from '../data/travelData';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-stone-100/70 border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-700 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Aura Voyages Promise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-900 tracking-tight mb-4">
            Why Discerning Travelers Choose Us
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            We don’t just book flights and hotels. We architect life-affirming journeys with unparalleled attention to local authenticity, personal safety, and effortless luxury.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.number}
              className="bg-white p-7 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-3xl font-serif font-black text-amber-600/80 tracking-tight">
                  {item.number}
                </span>
                <div className="w-8 h-8 rounded-lg bg-amber-50 group-hover:bg-amber-100 transition-colors flex items-center justify-center text-amber-700">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-lg font-bold font-serif text-stone-900 mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stat Counter Strip */}
        <div className="mt-16 bg-stone-900 text-white rounded-2xl p-8 sm:p-10 shadow-lg">
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
      </div>
    </section>
  );
};
