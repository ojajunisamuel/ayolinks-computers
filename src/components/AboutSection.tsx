import React from 'react';
import { Target, Compass, Award, CheckCircle, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-900 border-t border-slate-800 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-2">
            Who We Are
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Delivering Reliable Technology Solutions to Homes and Businesses in The Gambia
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Located strategically opposite the Qcell Building on vibrant Kairaba Avenue,{' '}
            <strong className="text-white font-semibold">AYOLINKS COMPUTER</strong> has established itself as a premier destination for dependable computer sales, certified hardware repairs, system upgrades, and advanced device unlocking.
          </p>
        </div>

        {/* 2-Column Content Grid: Image + Story */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Workshop & Technician Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <img
                src="/src/assets/images/laptop_repair_bench_1793985642721.jpg"
                alt="AYOLINKS COMPUTER Technical Repair Laboratory on Kairaba Avenue"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-800/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Kairaba Avenue Repair Lab</span>
                </div>
                <div className="text-sm font-bold text-white">Chip-Level Diagnostics & Hardware Engineering</div>
                <div className="text-xs text-slate-400 mt-0.5">Equipped with oscilloscopes, hot air rework stations & EEPROM programmers</div>
              </div>
            </div>
          </div>

          {/* Business Core Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                At AYOLINKS COMPUTER, we understand that whether you are running an enterprise, managing a retail business, or completing university coursework, your computer is your lifeline. A malfunctioning laptop, corrupted firmware, or slow hard drive directly impairs your productivity.
              </p>
              <p>
                That is why we combine rigorous technical training with transparent customer service. We do not just replace parts arbitrarily; we conduct meticulous component-level diagnoses, pinpoint the root issue, and offer cost-effective, long-term solutions that save you money.
              </p>
            </div>

            {/* Quick credentials pills replaced with clean metadata */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Over 10 Years Combined Technical Repair Experience</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Certified Stock of Brand-New & Refurbished Systems</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Fast Diagnostic Turnaround & Complete Data Privacy</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Convenient Location Opposite Qcell Building</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
              <span>Customer Hotline:</span>
              <a href={`tel:${BUSINESS_INFO.phone1Raw}`} className="text-blue-400 font-semibold hover:underline">
                {BUSINESS_INFO.phone1}
              </a>
              <span>·</span>
              <a href={`tel:${BUSINESS_INFO.phone2Raw}`} className="text-blue-400 font-semibold hover:underline">
                {BUSINESS_INFO.phone2}
              </a>
            </div>
          </div>
        </div>

        {/* Mission & Vision & Values Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Mission Card */}
          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-7 space-y-4 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Our Mission</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To empower individuals, students, and businesses across The Gambia with high-performance computing hardware, professional repair engineering, and accessible technology services that inspire confidence and continuity.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-7 space-y-4 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Our Vision</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To be the most reputable and comprehensive technology hub in The Gambia, recognized nationally for uncompromising technical excellence, ethical unlocking practices, and superior customer care.
            </p>
          </div>

          {/* Core Commitment Card */}
          <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-7 space-y-4 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-indigo-950 border border-indigo-800 flex items-center justify-center text-indigo-400">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Why Trust AYOLINKS?</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We eliminate guesswork with honest upfront pricing, zero counterfeit parts, professional chip repair warranties, and friendly technical guidance tailored to your specific budget and workload requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
