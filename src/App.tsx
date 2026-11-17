import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TechnologiesSection } from './components/TechnologiesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { FounderSection } from './components/FounderSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [selectedService, setSelectedService] = useState<string>('Website Development');

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-white flex flex-col selection:bg-[#2563EB]/30 selection:text-[#06B6D4]">
      {/* Sticky Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Introduction Section */}
        <IntroSection />

        {/* Services Section */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Featured Projects / Portfolio Section */}
        <PortfolioSection
          onInquireProject={() => setSelectedService('Website Development')}
        />

        {/* Technologies & Technical Skills Section */}
        <TechnologiesSection />

        {/* Why Choose MANSHAL Section */}
        <WhyChooseSection />

        {/* Development Process Section */}
        <ProcessSection />

        {/* About MANSHAL Section */}
        <AboutSection />

        {/* Dedicated Founder Profile Section */}
        <FounderSection />

        {/* Contact & Enquiry Section */}
        <ContactSection selectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
