import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import WhyUsSection from './components/WhyUsSection';
import IndustriesSection from './components/IndustriesSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import ContactSection from './components/ContactSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ContactUsPage from './pages/ContactUsPage';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Meta Ads');

  // Client-side route detection for /contact-us
  const [currentRoute, setCurrentRoute] = useState(() => {
    const pathname = window.location.pathname.replace(/\/$/, '') || '/';
    const hash = window.location.hash;
    if (pathname === '/contact-us' || hash === '#/contact-us') {
      return '/contact-us';
    }
    return '/';
  });

  useEffect(() => {
    const handleRouteChange = () => {
      const pathname = window.location.pathname.replace(/\/$/, '') || '/';
      const hash = window.location.hash;
      if (pathname === '/contact-us' || hash === '#/contact-us') {
        setCurrentRoute('/contact-us');
      } else {
        setCurrentRoute('/');
      }
    };

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  const handleOpenConsultation = (serviceName = '') => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setModalOpen(true);
  };

  const handleSelectIndustry = (industryName) => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Dedicated Route: /contact-us without header and footer
  if (currentRoute === '/contact-us') {
    return <ContactUsPage />;
  }

  // Default Home Page with Full Navigation & Experience
  return (
    <div className="min-h-screen bg-wolf-950 text-wolf-100 relative selection:bg-gold-500/25 selection:text-gold-200 w-full max-w-full overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Sections */}
      <main className="w-full max-w-full overflow-x-hidden">
        {/* Hero Section */}
        <Hero onOpenConsultation={() => handleOpenConsultation()} />

        {/* Core Services Section */}
        <ServicesSection onSelectService={(service) => handleOpenConsultation(service)} />

        {/* 5-Step Process Section ("How We Help Grow") */}
        <ProcessSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* Why Us / Manifesto & Deliverables */}
        <WhyUsSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* Who We Work With (Industries) */}
        <IndustriesSection onSelectIndustry={handleSelectIndustry} />

        {/* Verified Case Studies / Results */}
        <CaseStudiesSection onOpenConsultation={() => handleOpenConsultation()} />

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact & Consultation Form */}
        <ContactSection prefilledService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Booking Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={selectedService}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
