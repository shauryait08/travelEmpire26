import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { SAMPLE_REVIEWS } from '../data/travelData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-amber-700 mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Verified Guest Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-900 tracking-tight mb-4">
            Stories From Our Travelers
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Read unedited feedback from guests who entrusted their most treasured milestones, honeymoons, and family sabbaticals to Aura Voyages.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SAMPLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl border border-stone-200/80 p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating and Trip Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-stone-600 font-medium">
                    {review.date}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="text-xs font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md inline-block mb-3">
                    Trip: {review.tripTaken}
                  </span>
                  <p className="text-stone-700 text-sm leading-relaxed italic relative pl-6">
                    <Quote className="w-4 h-4 text-amber-500 absolute left-0 top-0 opacity-60" />
                    “{review.comment}”
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-stone-200"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div>
                    <h4 className="text-sm font-bold text-stone-900 leading-tight">
                      {review.name}
                    </h4>
                    <span className="text-xs text-stone-500">{review.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Guest</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
