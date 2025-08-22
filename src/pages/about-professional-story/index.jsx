import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ProfessionalPhilosophy from './components/ProfessionalPhilosophy';
import CareerTimeline from './components/CareerTimeline';
import CertificationJourney from './components/CertificationJourney';
import ClientTestimonials from './components/ClientTestimonials';
import ExpertiseEvolution from './components/ExpertiseEvolution';
import ThoughtLeadership from './components/ThoughtLeadership';

const AboutProfessionalStory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Fuhad - Professional Story | Salesforce Architect & Marketing Cloud Expert</title>
        <meta 
          name="description" 
          content="Discover Fuhad Hossain's journey from developer to Salesforce architect. Learn about his certifications, client success stories, and thought leadership in the Salesforce ecosystem." 
        />
        <meta name="keywords" content="Fuhad Hossain, Salesforce Architect, Marketing Cloud Expert, Professional Story, Certifications, Client Success" />
        <meta property="og:title" content="About Fuhad - Professional Story | Salesforce Architect" />
        <meta property="og:description" content="From developer to Salesforce architect - discover Fuhad's professional journey and expertise evolution." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about-professional-story" />
      </Helmet>

      <Header />
      
      <main className="pt-16">
        <HeroSection />
        <ProfessionalPhilosophy />
        <CareerTimeline />
        <CertificationJourney />
        <ClientTestimonials />
        <ExpertiseEvolution />
        <ThoughtLeadership />
      </main>
    </div>
  );
};

export default AboutProfessionalStory;