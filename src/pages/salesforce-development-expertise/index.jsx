import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import CapabilitiesSection from './components/CapabilitiesSection';
import InteractiveDemo from './components/InteractiveDemo';
import CaseStudiesSection from './components/CaseStudiesSection';
import CertificationSection from './components/CertificationSection';
import ServicesSection from './components/ServicesSection';
import ComplexityCalculator from './components/ComplexityCalculator';

const SalesforceDevelopmentExpertise = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <main className="pt-16">
        <HeroSection />
        <PhilosophySection />
        <CapabilitiesSection />
        <InteractiveDemo />
        <CaseStudiesSection />
        <CertificationSection />
        <ServicesSection />
        <ComplexityCalculator />
      </main>
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-cta rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg font-accent">F</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Fuhad Portfolio Pro</h3>
                  <p className="text-sm text-primary-foreground/80">Salesforce Development Expert</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Transforming businesses through innovative Salesforce solutions and enterprise-grade development expertise.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="/homepage" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </a>
                <a href="/about-professional-story" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About
                </a>
                <a href="/portfolio-client-success-stories" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Portfolio
                </a>
                <a href="/contact-consultation-booking" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Expertise</h4>
              <div className="space-y-2">
                <div className="text-primary-foreground/80">Lightning Web Components</div>
                <div className="text-primary-foreground/80">API Integration</div>
                <div className="text-primary-foreground/80">Process Automation</div>
                <div className="text-primary-foreground/80">Performance Optimization</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60">
              © {new Date()?.getFullYear()} Fuhad Portfolio Pro. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SalesforceDevelopmentExpertise;