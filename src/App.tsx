/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProductsSection } from './components/ProductsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteInitialItem, setQuoteInitialItem] = useState<string | undefined>(undefined);

  const handleOpenQuote = (itemName?: string) => {
    setQuoteInitialItem(itemName);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* About Us Section */}
        <AboutSection />

        {/* Our Services Section */}
        <ServicesSection onOpenQuote={handleOpenQuote} />

        {/* Products Catalogue Section */}
        <ProductsSection onOpenQuote={handleOpenQuote} />

        {/* Why Choose AYOLINKS Section */}
        <WhyChooseUsSection />

        {/* Showcase Gallery Section */}
        <GallerySection />

        {/* Contact Us & Location Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Quote Estimator Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialItem={quoteInitialItem}
      />

      {/* Floating WhatsApp Quick Contact */}
      <FloatingWhatsApp />
    </div>
  );
}
