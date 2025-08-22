import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ExpertiseVisualization from './components/ExpertiseVisualization';
import ClientTestimonials from './components/ClientTestimonials';
import CredentialsGallery from './components/CredentialsGallery';
import InsightsSection from './components/InsightsSection';
import ConsultationWidget from './components/ConsultationWidget';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Fuhad Hossain - Premium Salesforce Architect & Marketing Cloud Expert</title>
        <meta name="description" content="Transform your business with expert Salesforce solutions. 50+ successful implementations, 98% client retention. Schedule your free consultation today." />
        <meta name="keywords" content="Salesforce consultant, Marketing Cloud expert, Sales Cloud implementation, Salesforce developer, CRM optimization" />
        <meta property="og:title" content="Fuhad Hossain - Salesforce Virtuoso" />
        <meta property="og:description" content="Premium Salesforce architect delivering measurable business transformation through expert implementations." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/homepage" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section with Dynamic Metrics */}
          <HeroSection />
          
          {/* Interactive Salesforce Ecosystem Visualization */}
          <ExpertiseVisualization />
          
          {/* Rotating Client Testimonials with Success Metrics */}
          <ClientTestimonials />
          
          {/* Verified Certifications Gallery */}
          <CredentialsGallery />
          
          {/* Latest Insights & Thought Leadership */}
          <InsightsSection />
          
          {/* Consultation Booking Widget */}
          <ConsultationWidget />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-secondary to-cta rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg font-accent">F</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Fuhad Portfolio Pro</h3>
                    <p className="text-sm opacity-80">Salesforce Virtuoso</p>
                  </div>
                </div>
                <p className="text-sm opacity-80 leading-relaxed max-w-md">
                  Transforming businesses through expert Salesforce implementations and Marketing Cloud strategies. 
                  Your trusted partner for measurable digital transformation.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li><a href="/about-professional-story" className="hover:opacity-100 transition-opacity">About</a></li>
                  <li><a href="/salesforce-development-expertise" className="hover:opacity-100 transition-opacity">Expertise</a></li>
                  <li><a href="/portfolio-client-success-stories" className="hover:opacity-100 transition-opacity">Portfolio</a></li>
                  <li><a href="/contact-consultation-booking" className="hover:opacity-100 transition-opacity">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Specializations</h4>
                <ul className="space-y-2 text-sm opacity-80">
                  <li>Sales Cloud</li>
                  <li>Service Cloud</li>
                  <li>Marketing Cloud</li>
                  <li>Custom Development</li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
              <p className="text-sm opacity-80">
                © {new Date()?.getFullYear()} Fuhad Portfolio Pro. All rights reserved. | 
                <span className="ml-1">Salesforce and all related trademarks are property of Salesforce.com, Inc.</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;