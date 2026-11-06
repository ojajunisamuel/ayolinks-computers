import React, { useState, useEffect } from 'react';
import { X, Calculator, MessageSquare, CheckCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/content';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialItem?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialItem
}) => {
  const [deviceType, setDeviceType] = useState('Laptop');
  const [serviceCategory, setServiceCategory] = useState('Computer Repairs');
  const [modelName, setModelName] = useState('');
  const [issueDescription, setIssueDescription] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [urgency, setUrgency] = useState('Standard (Same Day or 24h)');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialItem) {
      const matched = SERVICES_DATA.find((s) => s.title.toLowerCase().includes(initialItem.toLowerCase()));
      if (matched) {
        setServiceCategory(matched.title);
      } else {
        setModelName(initialItem);
      }
    }
  }, [initialItem]);

  if (!isOpen) return null;

  // Real-time estimated range based on selections
  const getEstimate = () => {
    if (serviceCategory.includes('Screen') || serviceCategory.includes('Accessories')) {
      return 'D2,500 – D4,800 GMD';
    }
    if (serviceCategory.includes('Upgrad')) {
      return 'D1,500 – D3,800 GMD';
    }
    if (serviceCategory.includes('BIOS') || serviceCategory.includes('Firmware')) {
      return 'D2,500 – D5,000 GMD';
    }
    if (serviceCategory.includes('iCloud')) {
      return 'Quote upon IMEI / Model Verification';
    }
    if (serviceCategory.includes('Router')) {
      return 'D2,400 – D4,500 GMD';
    }
    if (serviceCategory.includes('Sales')) {
      return 'D12,500 – D45,000+ GMD';
    }
    return 'D800 – D2,500 GMD (Free Diagnostic on Inspection)';
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const message = `Hello AYOLINKS COMPUTER! I would like to request a quote:%0A%0A• *Customer:* ${name}%0A• *Phone:* ${phone}%0A• *Device Type:* ${deviceType} (${modelName || 'Model to be inspected'})%0A• *Service Needed:* ${serviceCategory}%0A• *Issue / Details:* ${issueDescription || 'Standard diagnosis needed'}%0A• *Urgency:* ${urgency}%0A%0APlease provide your best quotation and availability at Kairaba Avenue!`;

    const url = `https://wa.me/${BUSINESS_INFO.phone1Raw}?text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-slate-900 border border-slate-800 rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
      >
        <button
          onClick={onClose}
          type="button"
          aria-label="Close quote modal"
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-600 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Quote Request Prepared!</h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto">
              We have forwarded your quote request directly to AYOLINKS COMPUTER on WhatsApp (+220 777 6040). You can also visit our workshop opposite Qcell Building on Kairaba Avenue.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-6 pr-8">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
                <Calculator className="w-3.5 h-3.5" />
                <span>Instant Service & Hardware Estimator</span>
              </div>
              <h3 id="quote-modal-title" className="text-2xl font-extrabold text-white">
                Request a Quick Quote
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Get an instant estimate and direct priority booking at our Kairaba Avenue lab.
              </p>
            </div>

            <form onSubmit={handleSendToWhatsApp} className="space-y-4">
              {/* Device Type & Service */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Device Type
                  </label>
                  <select
                    value={deviceType}
                    onChange={(e) => setDeviceType(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Windows Laptop">Windows Laptop (HP, Dell, Lenovo, Asus)</option>
                    <option value="Apple MacBook">Apple MacBook (Air / Pro / M1 / M2 / Intel)</option>
                    <option value="Desktop PC / Tower">Desktop PC / Gaming Rig</option>
                    <option value="iPhone / Smartphone">iPhone / Samsung / Android Phone</option>
                    <option value="4G/5G Router">4G/5G LTE CPE Router / Pocket Wi-Fi</option>
                    <option value="Monitor / Peripheral">Monitor / Screen / Keyboard</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={serviceCategory}
                    onChange={(e) => setServiceCategory(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Custom Computer Purchase">New/Refurbished PC Purchase</option>
                    <option value="General Diagnostics">General Hardware Diagnostic</option>
                  </select>
                </div>
              </div>

              {/* Model & Issue */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Device Model (if known)
                </label>
                <input
                  type="text"
                  placeholder="e.g. HP EliteBook 840 G5, MacBook Pro 13, Dell OptiPlex"
                  value={modelName}
                  onChange={(e) => setModelName(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Fault or Upgrade Details
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Screen cracked, need 1TB SSD upgrade, forgot BIOS password, no power..."
                  value={issueDescription}
                  onChange={(e) => setIssueDescription(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Estimate Box */}
              <div className="bg-slate-950 border border-blue-900/60 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-blue-400 font-semibold uppercase">Estimated Cost Guide</div>
                  <div className="text-base font-bold text-white tabular-nums">{getEstimate()}</div>
                </div>
                <div className="text-right text-[11px] text-slate-400">
                  <div>Free preliminary diagnostic</div>
                  <div className="text-emerald-400 font-medium">Genuine warranty included</div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Modou Ceesay"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    WhatsApp / Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +220 777 XXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Urgency */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Timeline / Urgency
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Standard (1-2 days)', 'Express (Same Day)', 'Urgent (1-3 Hours)'].map((u) => (
                    <button
                      key={u}
                      type="button"
                      onClick={() => setUrgency(u)}
                      className={`py-1.5 px-2 text-[11px] font-medium rounded border transition-colors ${
                        urgency === u
                          ? 'bg-blue-600 border-blue-500 text-white'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {u}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit to WhatsApp */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={!name || !phone}
                  className="w-full py-3 px-4 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-md shadow-emerald-700/30 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Quote Request via WhatsApp (+220 777 6040)</span>
                </button>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  No obligation. We reply within minutes during working hours.
                </p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
