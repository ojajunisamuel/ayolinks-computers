import React from 'react';
import { X, CheckCircle, Clock, Tag, MessageSquare, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { BUSINESS_INFO } from '../data/content';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenQuote: (serviceName?: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenQuote
}) => {
  if (!service) return null;

  const whatsappInquiryUrl = `https://wa.me/${BUSINESS_INFO.phone1Raw}?text=${encodeURIComponent(
    `Hello AYOLINKS COMPUTER, I would like to inquire about your service: ${service.title}. Please provide more details and availability.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            <span>{service.category}</span>
            {service.badge && (
              <>
                <span>·</span>
                <span className="text-sky-300">{service.badge}</span>
              </>
            )}
          </div>
          <h3 id="service-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white">
            {service.title}
          </h3>
        </div>

        {/* Detailed Description */}
        <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
          <p>{service.detailedDesc}</p>
        </div>

        {/* Features & Deliverables */}
        <div className="mb-6 bg-slate-950/70 border border-slate-800/80 rounded-xl p-5">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
            What is Included & Key Capabilities:
          </div>
          <ul className="space-y-2.5 text-sm text-slate-200">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Turnaround & Pricing Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-slate-950 border border-slate-800 rounded-lg p-3.5 flex items-start gap-3">
            <Clock className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs text-slate-400">Typical Turnaround</div>
              <div className="text-sm font-semibold text-white">{service.turnaroundTime}</div>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-lg p-3.5 flex items-start gap-3">
            <Tag className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs text-slate-400">Estimated Pricing</div>
              <div className="text-sm font-semibold text-emerald-300">{service.estimatedPrice}</div>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-800">
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-md shadow-emerald-700/30 transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp (+220 777 6040)</span>
          </a>

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenQuote(service.title);
            }}
            className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-600/30 transition-colors"
          >
            <span>Request Diagnostic / Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
