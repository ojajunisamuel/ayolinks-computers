import React, { useState, useMemo } from 'react';
import { Search, ShoppingBag, MessageSquare, Check, Sparkles, Filter } from 'lucide-react';
import { ProductItem } from '../types';
import { PRODUCTS_DATA, BUSINESS_INFO } from '../data/content';

interface ProductsSectionProps {
  onOpenQuote: (productName?: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'laptops', label: 'Laptops' },
    { id: 'desktops', label: 'Desktops' },
    { id: 'monitors', label: 'Monitors' },
    { id: 'networking', label: 'Networking & Routers' },
    { id: 'accessories', label: 'Accessories & Batteries' },
    { id: 'components', label: 'Components & SSDs' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.specs.some((spec) => spec.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const createWhatsAppProductUrl = (product: ProductItem) => {
    const text = `Hello AYOLINKS COMPUTER! I am inquiring to purchase/order: "${product.name}" (Price: D${product.priceGMD.toLocaleString()} GMD). Please confirm availability and pickup/delivery options at Kairaba Avenue.`;
    return `https://wa.me/${BUSINESS_INFO.phone1Raw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="products" className="py-20 sm:py-28 bg-slate-900 border-t border-slate-800 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-2">
              Hardware Catalogue & Parts
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Featured Products & Accessories
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Browse our inventory of brand-new and certified computers, high-speed 4G/5G routers, OEM screens, batteries, and upgrades ready for collection at Kairaba Avenue.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search laptops, SSD, routers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            >
            </input>
          </div>
        </div>

        {/* Interactive Filter Tabs (Buttons allowed for functional filter controls) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg whitespace-nowrap shrink-0 transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                  : 'bg-slate-950 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-slate-950/60 rounded-2xl border border-slate-800 p-8">
            <Filter className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No products found</h3>
            <p className="text-sm text-slate-400 mt-1">
              Try adjusting your search terms or filter selection.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-blue-400 bg-blue-950/80 border border-blue-800 rounded-lg hover:bg-blue-900 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-slate-950/90 border border-slate-800/90 hover:border-slate-700 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl group"
              >
                <div>
                  {/* Product Image Container with fallback */}
                  <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    {/* Condition & Stock Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="text-[11px] font-semibold text-white bg-slate-950/80 border border-slate-700/80 rounded px-2 py-0.5 backdrop-blur-sm">
                        {product.condition}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/90 border border-emerald-800/80 rounded px-2 py-0.5 backdrop-blur-sm">
                        In Stock
                      </span>
                    </div>
                  </div>

                  {/* Product Body */}
                  <div className="p-5">
                    <div className="text-xs text-blue-400 font-medium mb-1">
                      {product.categoryLabel}
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors line-clamp-1 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                      {product.shortDesc}
                    </p>

                    {/* Specs Checklist */}
                    <div className="space-y-1.5 pt-1 border-t border-slate-900">
                      {product.specs.slice(0, 3).map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          <span className="truncate">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Product Card Footer: Price & WhatsApp Action */}
                <div className="p-5 pt-0">
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between mb-3">
                    <div>
                      <div className="text-[11px] text-slate-500 uppercase">Cash Price</div>
                      <div className="text-base font-extrabold text-white tracking-tight tabular-nums">
                        D{product.priceGMD.toLocaleString()}{' '}
                        <span className="text-xs font-normal text-slate-400">GMD</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={createWhatsAppProductUrl(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm shadow-emerald-700/20 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Order on WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => onOpenQuote(product.name)}
                      className="p-2.5 text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors"
                      title="Request custom inquiry"
                    >
                      <ShoppingBag className="w-4 h-4 text-blue-400" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bulk Order & Custom Spec Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-950/80 via-slate-950 to-slate-950 border border-blue-900/60 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Custom Configurations & Bulk Office Supplies</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              Need a specific laptop model, gaming GPU, or corporate fleet of computers?
            </h4>
            <p className="text-sm text-slate-300">
              We import directly from OEM distributors in the USA, UK, and UAE. Tell us your requested specifications and budget for special procurement.
            </p>
          </div>

          <button
            onClick={() => onOpenQuote('Custom Hardware / Bulk Fleet Order')}
            className="whitespace-nowrap shrink-0 px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md shadow-blue-600/30 transition-colors"
          >
            Request Custom Hardware
          </button>
        </div>
      </div>
    </section>
  );
};
