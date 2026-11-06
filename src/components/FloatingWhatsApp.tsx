import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Gentle Floating Tooltip Banner */}
      {showTooltip && (
        <div className="bg-slate-900 border border-slate-700 text-slate-100 text-xs px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2 max-w-xs animate-in slide-in-from-bottom-2 duration-300">
          <div>
            <div className="font-bold text-emerald-400">AYOLINKS Online Support</div>
            <div className="text-[11px] text-slate-300">Need quick advice or computer price? Message us!</div>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Dismiss message"
            className="text-slate-400 hover:text-white p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={BUSINESS_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with AYOLINKS COMPUTER on WhatsApp"
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm rounded-full shadow-lg shadow-emerald-700/40 hover:shadow-emerald-600/60 transition-all hover:scale-105"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageSquare className="w-5 h-5" />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </div>
  );
};
