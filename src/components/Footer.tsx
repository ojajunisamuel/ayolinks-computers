import React from 'react';
import { MapPin, Phone, Mail, MessageSquare, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/content';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="inline-flex items-center gap-2 text-xl font-bold tracking-tight text-white group">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white font-extrabold text-base shadow-sm">
                A
              </span>
              <span>
                AYOLINKS <span className="text-blue-400 font-light">COMPUTER</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Your trusted technology partner in The Gambia. Specializing in computer sales, certified repairs, performance upgrades, BIOS/iCloud unlocking, and genuine computer accessories.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="font-semibold text-slate-300">Registered Office:</div>
              <div>Opposite Qcell Building, Kairaba Avenue, The Gambia</div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#products" className="hover:text-blue-400 transition-colors">Products & Catalogue</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-blue-400 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-blue-400 transition-colors">Showcase Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Key Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-blue-400 transition-colors line-clamp-1">
                    {service.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  4G/5G Routers & Wi-Fi
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Laptop Screens & Batteries
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Get in Touch
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Opposite Qcell Building, Kairaba Avenue, The Gambia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <div className="flex gap-2">
                  <a href={`tel:${BUSINESS_INFO.phone1Raw}`} className="hover:text-white transition-colors">
                    {BUSINESS_INFO.phone1}
                  </a>
                  <span>·</span>
                  <a href={`tel:${BUSINESS_INFO.phone2Raw}`} className="hover:text-white transition-colors">
                    {BUSINESS_INFO.phone2}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
                >
                  WhatsApp: +220 777 6040
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-colors"
              >
                <span>WhatsApp Instant Chat</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location Badge */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} <strong className="text-slate-400 font-medium">AYOLINKS COMPUTER</strong>. All rights reserved. Kairaba Avenue, The Gambia.
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Sales & Repairs</span>
            <span>·</span>
            <span>Hardware Upgrades</span>
            <span>·</span>
            <span>Firmware Unlocking</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
