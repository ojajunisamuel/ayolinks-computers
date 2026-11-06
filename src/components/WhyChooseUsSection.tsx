import React from 'react';
import {
  Award,
  DollarSign,
  ShieldCheck,
  Headphones,
  Zap,
  Truck,
  CheckCircle,
  Clock,
  ThumbsUp
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/content';

export const WhyChooseUsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-blue-400" />;
      case 'DollarSign':
        return <DollarSign className="w-6 h-6 text-emerald-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-sky-400" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-indigo-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-amber-400" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-cyan-400" />;
      default:
        return <Award className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-2">
            The AYOLINKS Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Why Choose AYOLINKS COMPUTER?
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            In an industry often marred by counterfeit chargers and rushed diagnostics, we build lasting trust through certified technical standards, transparent pricing, and verifiable warranties.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-800 rounded-xl p-7 flex flex-col justify-between hover:border-blue-500/40 hover:bg-slate-900 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center mb-5 group-hover:border-blue-500/40 transition-colors">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-blue-400">
                <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                <span>Verified AYOLINKS Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Endorsement Strip */}
        <div className="mt-16 bg-slate-900/70 border border-slate-800 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-around gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400 shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-white">Rapid Diagnostic Guarantee</div>
              <div className="text-xs text-slate-400">Clear root-cause analysis before any repair begins</div>
            </div>
          </div>

          <div className="hidden md:block w-px h-10 bg-slate-800" />

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-white">Genuine Parts Warranty</div>
              <div className="text-xs text-slate-400">Direct replacement guarantee on batteries & screens</div>
            </div>
          </div>

          <div className="hidden md:block w-px h-10 bg-slate-800" />

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 shrink-0">
              <ThumbsUp className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-white">Ethical & Confidential Service</div>
              <div className="text-xs text-slate-400">100% data confidentiality and safe unlocking protocols</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
