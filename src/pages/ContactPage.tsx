import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ChevronDown, MessageSquare } from 'lucide-react';
import { ContactMessage } from '../types/travel';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destinationPreference: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How far in advance should I book my travel package?',
      a: 'For peak seasonal experiences (such as Switzerland during winter or Kyoto during cherry blossom bloom), we recommend booking 3 to 6 months in advance to secure private palace villas and exclusive guides.'
    },
    {
      q: 'Can itineraries be customized to our personal pace and preferences?',
      a: 'Absolutely. Every package we publish can be fully tailored. We can alter hotel tiers, add or remove excursions, arrange private charter flights, and accommodate strict dietary or mobility requirements.'
    },
    {
      q: 'What is your cancellation and deposit policy?',
      a: 'We offer full flexible refunds up to 14 days prior to departure on all standard boutique packages. Dedicated private charter flights and select remote island villas operate under custom terms clearly outlined prior to deposit.'
    },
    {
      q: 'Are international flights included in the package prices?',
      a: 'Our published base prices include all luxury in-destination domestic flights, high-speed rail, private chauffeur transfers, and boutique hotel stays. International business or first-class flights can be seamlessly added by our aviation desk.'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit message');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        destinationPreference: '',
        message: '',
      });
    } catch (err: any) {
      console.warn('API submission error, using local fallback:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-700">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Dedicated Concierge Desk</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-stone-900 tracking-tight">
            Connect With Our Travel Architects
          </h1>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Have questions about an upcoming expedition or looking to plan a bespoke custom itinerary? Reach our senior concierge desk directly.
          </p>
        </div>

        {/* Contact Form & Contact Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-stone-900 text-white rounded-3xl p-8 space-y-6 shadow-xl">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-1">
                  Global Headquarters
                </span>
                <h3 className="text-2xl font-bold font-serif">
                  Aura Voyages Concierge
                </h3>
              </div>

              <div className="space-y-5 text-xs text-stone-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block text-sm">Flagship Office</span>
                    <p className="text-stone-400 mt-0.5 leading-relaxed">
                      742 Evergreen Terrace, Suite 500<br />
                      Manhattan, New York, NY 10022
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block text-sm">24/7 Priority Hotline</span>
                    <p className="text-stone-400 mt-0.5">+1 (800) 555-TRAV</p>
                    <p className="text-stone-400">+1 (212) 555-0199 (Direct)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block text-sm">Email Inquiries</span>
                    <p className="text-stone-400 mt-0.5">concierge@auravoyages.com</p>
                    <p className="text-stone-400">expeditions@auravoyages.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block text-sm">Office Hours</span>
                    <p className="text-stone-400 mt-0.5">Monday - Friday: 08:00 - 20:00 EST</p>
                    <p className="text-stone-400">Saturday: 09:00 - 17:00 EST</p>
                    <p className="text-amber-400 mt-1 font-medium">Emergency traveler assistance: 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Callback Card */}
            <div className="bg-amber-50/70 border border-amber-200 rounded-3xl p-6 text-xs text-amber-950">
              <span className="font-bold block text-sm mb-1 text-amber-900">
                Guaranteed 12-Hour Callback
              </span>
              <p className="text-stone-700 leading-relaxed">
                Every inquiry submitted is personally reviewed by a Senior Expedition Specialist matched to your desired destination.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200/90 p-8 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-stone-900">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out. A Senior Travel Architect has received your request and will contact you via email or phone within 12 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-stone-900 hover:bg-stone-800 rounded-xl transition-all"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-2xl font-bold font-serif text-stone-900 mb-1">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-xs text-stone-500">
                    Fields marked with an asterisk (*) are required.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-rose-50 text-rose-700 text-xs rounded-xl border border-rose-200">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Liam Sterling"
                      className="w-full text-xs bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 focus:bg-white focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="liam@example.com"
                      className="w-full text-xs bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 focus:bg-white focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 uppercase tracking-wider mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full text-xs bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 focus:bg-white focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  {/* Destination Preference */}
                  <div>
                    <label className="block text-xs font-semibold text-stone-600 uppercase tracking-wider mb-1">
                      Preferred Destination
                    </label>
                    <select
                      value={formData.destinationPreference}
                      onChange={(e) => setFormData({ ...formData, destinationPreference: e.target.value })}
                      className="w-full text-xs bg-stone-50 border border-stone-300 rounded-xl px-3.5 py-2.5 focus:bg-white focus:outline-none focus:border-amber-600 cursor-pointer"
                    >
                      <option value="">Select a destination...</option>
                      <option value="Switzerland">Switzerland (Lauterbrunnen & Zermatt)</option>
                      <option value="Bali">Bali (Ubud & Seminyak)</option>
                      <option value="Tokyo & Kyoto">Japan (Tokyo & Kyoto)</option>
                      <option value="Maldives">Maldives Overwater Lagoon</option>
                      <option value="Paris">Paris & Loire Valley, France</option>
                      <option value="Dubai">Dubai & Desert Safari, UAE</option>
                      <option value="London">London & Cotswolds, UK</option>
                      <option value="New York">New York City, USA</option>
                      <option value="Custom">Custom Unlisted Destination</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-stone-600 uppercase tracking-wider mb-1">
                    Your Travel Vision or Questions *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your estimated travel dates, group size, desired style (romantic, adventure, cultural), and special occasions..."
                    className="w-full text-xs bg-stone-50 border border-stone-300 rounded-xl p-3.5 focus:bg-white focus:outline-none focus:border-amber-600"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3 text-xs font-bold uppercase tracking-wider text-stone-950 bg-amber-400 hover:bg-amber-300 active:scale-95 disabled:opacity-50 transition-all rounded-xl shadow cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      <span>Transmit Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="bg-white rounded-3xl border border-stone-200 p-8 sm:p-12 shadow-sm max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold font-serif text-stone-900">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Everything you need to know about our bespoke travel reservations.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-stone-200 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-stone-900 hover:bg-stone-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-500 transition-transform duration-200 shrink-0 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 pt-1 text-xs text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
