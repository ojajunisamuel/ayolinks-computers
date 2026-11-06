import React, { useState } from 'react';
import {
  Laptop,
  Wrench,
  Cpu,
  ShieldAlert,
  LockOpen,
  Smartphone,
  HardDrive,
  Wifi,
  ArrowRight,
  Clock
} from 'lucide-react';
import { ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/content';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuote }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-blue-400" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-sky-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-indigo-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-amber-400" />;
      case 'LockOpen':
        return <LockOpen className="w-6 h-6 text-emerald-400" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-cyan-400" />;
      case 'HardDrive':
        return <HardDrive className="w-6 h-6 text-purple-400" />;
      case 'Wifi':
        return <Wifi className="w-6 h-6 text-blue-400" />;
      default:
        return <Laptop className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-2">
              Comprehensive Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Our Professional Services
            </h2>
            <p className="mt-3 text-base text-slate-400">
              From advanced chip-level hardware repair to international device unlocking and high-speed networking, AYOLINKS COMPUTER delivers end-to-end technology support.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onOpenQuote()}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Get Free Diagnosis Advice</span>
              <ArrowRight className="w-4 h-4 text-blue-400" />
            </button>
          </div>
        </div>

        {/* 8 Services Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="bg-slate-900/90 border border-slate-800/90 hover:border-blue-500/50 rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-blue-950/40 hover:-translate-y-1 group"
            >
              <div>
                {/* Card Top: Icon & Editorial Index */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-blue-500/40 transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-semibold text-slate-500 font-mono">
                    0{index + 1}
                  </span>
                </div>

                {/* Service Category & Title */}
                <div className="text-xs text-blue-400 font-medium mb-1.5">
                  {service.category}
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-blue-300 transition-colors leading-snug">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3 mb-4">
                  {service.shortDesc}
                </p>
              </div>

              {/* Card Footer: Metadata & Learn More Action */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>{service.turnaroundTime.split(' ')[0]}</span>
                  </span>
                  <span className="text-slate-300 font-medium">{service.estimatedPrice.split('·')[0]}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  className="w-full inline-flex items-center justify-between px-3.5 py-2 text-xs font-semibold text-blue-300 bg-slate-950/80 hover:bg-blue-600 hover:text-white border border-slate-800 hover:border-blue-500 rounded-lg transition-all"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenQuote={onOpenQuote}
      />
    </section>
  );
};
