import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageSquare,
  Mail,
  Clock,
  Send,
  CheckCircle,
  ExternalLink,
  AlertCircle
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sendViaWhatsApp, setSendViaWhatsApp] = useState(true);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Please provide a message or describe your device issue';
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (sendViaWhatsApp) {
      const whatsappText = `Hello AYOLINKS COMPUTER! My name is ${formData.name}. Phone: ${formData.phone}${
        formData.email ? ` (Email: ${formData.email})` : ''
      }. Message: ${formData.message}`;
      const url = `https://wa.me/${BUSINESS_INFO.phone1Raw}?text=${encodeURIComponent(whatsappText)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }

    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-2">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Contact AYOLINKS COMPUTER
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Visit our repair lab and showroom on Kairaba Avenue, give us a phone call, or message us directly on WhatsApp for immediate technical support and product inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column: Business Info & Google Maps */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Cards */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-5 shadow-lg">
              {/* Location */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-blue-950 border border-blue-800 text-blue-400 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Physical Location
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white mt-0.5">
                    Opposite Qcell Building
                  </div>
                  <div className="text-xs text-slate-300">
                    Kairaba Avenue, Serrekunda / Greater Banjul Area, The Gambia
                  </div>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-800">
                <div className="p-2.5 rounded-lg bg-sky-950 border border-sky-800 text-sky-400 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Direct Phone Lines
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4 mt-0.5">
                    <a
                      href={`tel:${BUSINESS_INFO.phone1Raw}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-blue-400 transition-colors"
                    >
                      {BUSINESS_INFO.phone1}
                    </a>
                    <a
                      href={`tel:${BUSINESS_INFO.phone2Raw}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-blue-400 transition-colors"
                    >
                      {BUSINESS_INFO.phone2}
                    </a>
                  </div>
                  <div className="text-xs text-slate-400">Lines open Monday to Saturday</div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="pt-3 border-t border-slate-800">
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-md shadow-emerald-700/30 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open Direct WhatsApp (+220 777 6040)</span>
                </a>
              </div>

              {/* Working Hours & Email */}
              <div className="flex items-start gap-3.5 pt-3 border-t border-slate-800 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Opening Hours:</span> {BUSINESS_INFO.hours}
                </div>
              </div>
            </div>

            {/* Google Maps Integration */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
              <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <MapPin className="w-4 h-4 text-red-400" />
                  <span>Kairaba Avenue Map Locator</span>
                </div>
                <a
                  href={BUSINESS_INFO.mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="relative aspect-[16/9] w-full bg-slate-950">
                <iframe
                  title="AYOLINKS COMPUTER Location on Kairaba Avenue, The Gambia"
                  src={BUSINESS_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[25%] contrast-125"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Repair Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-1">
                Send Us a Message or Repair Request
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below. We respond promptly during working hours.
              </p>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-700/80 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Thank You, {formData.name}!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Your inquiry has been received. Our technician at Kairaba Avenue will review your request and get back to you shortly at {formData.phone}.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', message: '' });
                      }}
                      className="px-5 py-2.5 text-xs font-semibold text-blue-400 bg-slate-950 border border-slate-700 rounded-lg hover:bg-slate-800 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Lamin Jallow"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 bg-slate-950 border ${
                          errors.name ? 'border-red-500' : 'border-slate-800'
                        } rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone / WhatsApp Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +220 7XX XXXX"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        className={`w-full px-3.5 py-2.5 bg-slate-950 border ${
                          errors.phone ? 'border-red-500' : 'border-slate-800'
                        } rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. yourname@gmail.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      className={`w-full px-3.5 py-2.5 bg-slate-950 border ${
                        errors.email ? 'border-red-500' : 'border-slate-800'
                      } rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Message / Problem Description <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please specify device model, fault symptoms (e.g. HP laptop not turning on, MacBook EFI lock, broken 15.6 inch screen, or router purchase)..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      className={`w-full px-3.5 py-2.5 bg-slate-950 border ${
                        errors.message ? 'border-red-500' : 'border-slate-800'
                      } rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Send via WhatsApp toggle */}
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="whatsapp-forward"
                      checked={sendViaWhatsApp}
                      onChange={(e) => setSendViaWhatsApp(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-700 bg-slate-950 text-blue-600 focus:ring-0 cursor-pointer"
                    />
                    <label htmlFor="whatsapp-forward" className="text-xs text-slate-300 cursor-pointer">
                      Also open and send directly via WhatsApp to <strong className="text-white">+220 777 6040</strong> for instant response
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-md shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiries to AYOLINKS</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
