import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CertificationTimeline from './components/CertificationTimeline';
import CampaignShowcase from './components/CampaignShowcase';
import InteractiveDemo from './components/InteractiveDemo';
import ResourceLibrary from './components/ResourceLibrary';
import IntegrationExamples from './components/IntegrationExamples';
import ConsultationSection from './components/ConsultationSection';

const MarketingCloudSpecialization = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <CertificationTimeline />
        <CampaignShowcase />
        <InteractiveDemo />
        <ResourceLibrary />
        <IntegrationExamples />
        <ConsultationSection />
      </main>
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Marketing Cloud Strategy?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Let's discuss how my Marketing Cloud expertise can drive measurable results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact-consultation-booking"
                className="inline-flex items-center justify-center px-6 py-3 bg-cta hover:bg-cta/90 text-cta-foreground rounded-lg font-medium transition-colors duration-200"
              >
                Schedule Strategy Session
              </a>
              <a 
                href="/portfolio-client-success-stories"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 rounded-lg font-medium transition-colors duration-200"
              >
                View Success Stories
              </a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-sm text-primary-foreground/60">
              <p>&copy; {new Date()?.getFullYear()} Fuhad Portfolio Pro. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MarketingCloudSpecialization;