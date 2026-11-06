import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GalleryPhoto } from '../types';
import { GALLERY_ITEMS } from '../data/content';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'setups', label: 'Computer Setups' },
    { id: 'repairs', label: 'Laptop Repairs' },
    { id: 'desktops', label: 'Desktop Computers' },
    { id: 'networking', label: 'Networking Equipment' },
    { id: 'activities', label: 'Technical Activities' },
    { id: 'accessories', label: 'Computer Accessories' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const handlePrev = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredItems.findIndex((p) => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedPhoto(filteredItems[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedPhoto) return;
    const currentIndex = filteredItems.findIndex((p) => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedPhoto(filteredItems[nextIndex]);
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-slate-900 border-t border-slate-800 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-2">
              Inside AYOLINKS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Workplace & Technical Showcase Gallery
            </h2>
            <p className="mt-3 text-base text-slate-300">
              A visual glimpse into our Kairaba Avenue repair workshop, high-spec gaming and workstation builds, original accessories inventory, and diagnostic benches.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap shrink-0 transition-all ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                  : 'bg-slate-950 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800 cursor-pointer aspect-[4/3] shadow-lg hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-950/50"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-lg bg-slate-950/80 backdrop-blur-sm border border-slate-700 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-105">
                <Maximize2 className="w-4 h-4 text-blue-400" />
              </div>

              {/* Caption Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <div className="text-xs text-blue-400 font-semibold mb-1">
                  {item.categoryLabel}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            type="button"
            className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white transition-colors z-20"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={handlePrev}
            type="button"
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-white hover:bg-blue-600 transition-colors z-20"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={handleNext}
            type="button"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 border border-slate-700 text-white hover:bg-blue-600 transition-colors z-20"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Wrapper */}
          <div className="max-w-4xl w-full flex flex-col items-center max-h-[90vh]">
            <div className="relative rounded-xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-950 w-full max-h-[70vh] flex items-center justify-center">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            <div className="w-full mt-4 bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-5 text-slate-200">
              <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-1">
                {selectedPhoto.categoryLabel}
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                {selectedPhoto.title}
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
