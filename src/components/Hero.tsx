import React from 'react';
import { ArrowRight, ShieldCheck, Wrench, Zap, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-6 pb-16 lg:pb-24">
      {/* Background Photography with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_tech_setup_1793985642581.jpg"
          alt="AYOLINKS COMPUTER Modern Computer Workstation and Laptops"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-fade-in"
        />
        {/* Deep navy & electric blue gradients for optimal text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/70" />
        <div className="absolute inset-0 bg-radial from-blue-900/20 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-8 pb-4">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Location & Trust Anchor */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-blue-300 bg-blue-950/80 border border-blue-800/60 rounded-md px-3.5 py-1.5 backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Opposite Qcell Building, Kairaba Avenue, The Gambia</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase text-balance leading-tight">
              YOUR TRUSTED <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-blue-200">TECHNOLOGY PARTNER</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed text-balance">
              Quality Computers, Professional Repairs and Reliable Technology Solutions. Everything You Need, All in One Place.
            </p>

            {/* Key feature bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Desktop & Laptop Sales (HP, Dell, Apple, Lenovo)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Chip-Level Motherboard Diagnostics & Repairs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>MacBook EFI, BIOS & iCloud Firmware Unlocking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Unlocked 4G/5G Routers & Laptop Replacement Parts</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-lg shadow-blue-600/30 transition-all hover:translate-y-[-1px]"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-medium text-slate-100 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-all hover:border-slate-600"
              >
                <span>Contact Us Today</span>
              </a>

              <button
                type="button"
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-medium text-sky-300 hover:text-white underline underline-offset-4 decoration-sky-500/50 hover:decoration-sky-400 transition-colors"
              >
                <span>Request Custom Quote</span>
              </button>
            </div>
          </div>

          {/* Quick Info / Callout Card */}
          <div className="lg:col-span-4">
            <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-xl p-6 shadow-2xl space-y-5">
              <div className="border-b border-slate-800 pb-4">
                <div className="text-xs uppercase tracking-wider text-blue-400 font-semibold mb-1">
                  At Your Service
                </div>
                <h3 className="text-xl font-bold text-white">AYOLINKS Service Desk</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Walk-in repair lab & computer showroom on Kairaba Avenue.
                </p>
              </div>

              <div className="space-y-3.5 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-950/80 text-blue-400 border border-blue-900 shrink-0">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Express Diagnostics</div>
                    <div className="text-slate-400">Rapid fault assessment for laptops & desktops</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-950/80 text-blue-400 border border-blue-900 shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Instant SSD & RAM Upgrades</div>
                    <div className="text-slate-400">Completed in 1 - 2 hours with data preservation</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-950/80 text-blue-400 border border-blue-900 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Warranty Backed</div>
                    <div className="text-slate-400">Guaranteed genuine parts & workmanship warranty</div>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.phone1Raw}`}
                  className="w-full py-2.5 px-3 text-center text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700"
                >
                  Direct Call: {BUSINESS_INFO.phone1}
                </a>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 text-center text-xs font-semibold text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900/80 rounded-lg transition-colors border border-emerald-800/60"
                >
                  WhatsApp: +220 777 6040
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Full-Width Service KPI Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">100%</div>
            <div className="text-xs sm:text-sm font-medium text-slate-300">Genuine Replacement Parts</div>
            <div className="text-xs text-slate-500">Tested screens, batteries & chargers</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-400 tracking-tight">24h</div>
            <div className="text-xs sm:text-sm font-medium text-slate-300">Express Repair Turnaround</div>
            <div className="text-xs text-slate-500">Fast diagnostics & micro-soldering</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Kairaba Ave</div>
            <div className="text-xs sm:text-sm font-medium text-slate-300">Prime Central Location</div>
            <div className="text-xs text-slate-500">Opposite Qcell Building with easy parking</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 tracking-tight">5,000+</div>
            <div className="text-xs sm:text-sm font-medium text-slate-300">Devices Repaired & Supplied</div>
            <div className="text-xs text-slate-500">Trusted across The Gambia</div>
          </div>
        </div>
      </div>
    </section>
  );
};
