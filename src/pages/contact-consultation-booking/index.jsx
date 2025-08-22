import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ConsultationBooking from './components/ConsultationBooking';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import ConsultationPreparation from './components/ConsultationPreparation';

const ContactConsultationBooking = () => {
  const [activeTab, setActiveTab] = useState('consultation');

  const tabs = [
    { id: 'consultation', label: 'Schedule Consultation', icon: 'Calendar' },
    { id: 'contact', label: 'Contact Form', icon: 'MessageCircle' },
    { id: 'info', label: 'Contact Info', icon: 'Phone' },
    { id: 'preparation', label: 'Preparation Guide', icon: 'BookOpen' }
  ];

  const engagementPathways = [
    {
      icon: 'Zap',
      title: 'Immediate Project Needs',
      description: 'Ready to start within 30 days with defined requirements',
      process: 'Consultation → Proposal → Contract → Implementation',
      timeline: '1-2 weeks to project start',
      color: 'bg-cta/10 border-cta/20 text-cta'
    },
    {
      icon: 'Target',
      title: 'Strategic Planning',
      description: 'Long-term Salesforce strategy and roadmap development',
      process: 'Discovery → Strategy Session → Roadmap → Phased Implementation',
      timeline: '2-4 weeks planning phase',
      color: 'bg-primary/10 border-primary/20 text-primary'
    },
    {
      icon: 'HelpCircle',
      title: 'Technical Questions',
      description: 'Specific challenges or implementation guidance needed',
      process: 'Consultation → Technical Review → Recommendations → Support',
      timeline: 'Same week response',
      color: 'bg-secondary/10 border-secondary/20 text-secondary'
    },
    {
      icon: 'Handshake',
      title: 'Partnership Opportunities',
      description: 'Collaboration, referral, or business partnership discussions',
      process: 'Initial Discussion → Partnership Evaluation → Agreement → Collaboration',
      timeline: '1-3 weeks evaluation',
      color: 'bg-accent/10 border-accent/20 text-accent'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'VP of Operations',
      company: 'TechFlow Solutions',
      content: `The consultation process was incredibly thorough and professional. Fuhad took the time to understand our complex requirements and provided a clear roadmap that made perfect sense for our business.`,
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'IT Director',
      company: 'Global Manufacturing Inc',
      content: `From the initial consultation to project completion, the communication was exceptional. The preparation guide helped us come ready with all the right information.`,
      rating: 5
    },
    {
      name: 'Jennifer Walsh',
      role: 'Marketing Director',
      company: 'Digital Dynamics',
      content: `The consultation immediately identified opportunities we hadn't considered. The follow-up was prompt and the next steps were clearly defined.`,
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mb-6 animate-pulse-subtle">
              <Icon name="MessageCircle" size={40} className="text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Salesforce Vision
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Schedule a strategic consultation to explore how we can architect solutions that drive measurable business growth and operational excellence through Salesforce innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="default"
                size="lg"
                className="bg-cta hover:bg-cta/90 text-cta-foreground animate-pulse-subtle"
                iconName="Calendar"
                iconPosition="left"
                onClick={() => setActiveTab('consultation')}
              >
                Schedule Consultation Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={() => setActiveTab('contact')}
              >
                Send Message
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-card rounded-xl shadow-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">4-6 hrs</div>
              <div className="text-sm text-muted-foreground">Average Response Time</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl shadow-card border border-border">
              <div className="text-3xl font-bold text-secondary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl shadow-card border border-border">
              <div className="text-3xl font-bold text-accent mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Successful Projects</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl shadow-card border border-border">
              <div className="text-3xl font-bold text-cta mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Emergency Support</div>
            </div>
          </div>
        </div>
      </section>
      {/* Engagement Pathways */}
      <section className="py-16 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Multiple Engagement Pathways</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the approach that best fits your communication preferences and project requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementPathways?.map((pathway, index) => (
              <div key={index} className={`p-6 rounded-xl border-2 ${pathway?.color} hover:shadow-card transition-all duration-300`}>
                <div className="text-center mb-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 ${pathway?.color?.replace('text-', 'bg-')?.replace('/10', '/20')}`}>
                    <Icon name={pathway?.icon} size={24} className={pathway?.color?.split(' ')?.[2]} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{pathway?.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{pathway?.description}</p>
                </div>
                
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-medium text-foreground">Process:</span>
                    <p className="text-muted-foreground">{pathway?.process}</p>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Timeline:</span>
                    <p className="text-muted-foreground">{pathway?.timeline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Main Content Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 bg-card rounded-xl p-2 shadow-card border border-border">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab?.id
                    ? 'bg-primary text-primary-foreground shadow-subtle'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={tab?.icon} size={18} />
                <span className="hidden sm:inline">{tab?.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="animate-fade-in-up">
            {activeTab === 'consultation' && <ConsultationBooking />}
            {activeTab === 'contact' && <ContactForm />}
            {activeTab === 'info' && <ContactInfo />}
            {activeTab === 'preparation' && <ConsultationPreparation />}
          </div>
        </div>
      </section>
      {/* Client Testimonials */}
      <section className="py-16 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Client Experiences</h2>
            <p className="text-lg text-muted-foreground">
              What clients say about our consultation and communication process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials?.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-xl shadow-card border border-border p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 italic">
                  "{testimonial?.content}"
                </blockquote>
                <div>
                  <div className="font-semibold text-foreground">{testimonial?.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial?.role}</div>
                  <div className="text-sm text-primary">{testimonial?.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <Icon name="Rocket" size={32} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Salesforce Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how strategic Salesforce implementation can drive your business forward
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="default"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              iconName="Calendar"
              iconPosition="left"
              onClick={() => setActiveTab('consultation')}
            >
              Schedule Your Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
              iconName="Phone"
              iconPosition="left"
              onClick={() => window.open('tel:+15558472963')}
            >
              Call Now: (555) 847-2963
            </Button>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg font-accent">F</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Fuhad Portfolio Pro</h3>
                  <p className="text-sm opacity-80">Salesforce Virtuoso</p>
                </div>
              </div>
              <p className="text-sm opacity-80 mb-4">
                Transforming businesses through strategic Salesforce implementation and Marketing Cloud optimization. 
                Your trusted partner for enterprise-grade solutions.
              </p>
              <div className="flex items-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-background hover:bg-background/10"
                  iconName="Linkedin"
                  onClick={() => window.open('https://linkedin.com/in/fuhad-hossain', '_blank')}
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-background hover:bg-background/10"
                  iconName="Mail"
                  onClick={() => window.open('mailto:fuhad.hossain@salesforce.expert')}
                />
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-background hover:bg-background/10"
                  iconName="Phone"
                  onClick={() => window.open('tel:+15558472963')}
                />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Contact</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={14} />
                  <span>fuhad.hossain@salesforce.expert</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={14} />
                  <span>+1 (555) 847-2963</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={14} />
                  <span>Mon-Fri, 9 AM - 6 PM EST</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Professional Standards</h4>
              <div className="space-y-2 text-sm opacity-80">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={14} />
                  <span>NDA Protected</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={14} />
                  <span>Certified Expert</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={14} />
                  <span>4-6 Hour Response</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-sm opacity-60">
              © {new Date()?.getFullYear()} Fuhad Portfolio Pro. All rights reserved. | Professional Salesforce Consulting Services
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactConsultationBooking;