import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CampaignShowcase = () => {
  const [activeTab, setActiveTab] = useState('journey');

  const campaigns = [
    {
      id: 1,
      title: "SaaS Customer Onboarding Journey",
      client: "TechFlow Solutions",
      industry: "Software",
      description: "Multi-touch onboarding sequence with behavioral triggers and personalized content paths",
      metrics: {
        engagement: "+180%",
        conversion: "+67%",
        retention: "+45%"
      },
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      tags: ["Journey Builder", "Behavioral Triggers", "Personalization"]
    },
    {
      id: 2,
      title: "E-commerce Abandoned Cart Recovery",
      client: "RetailMax",
      industry: "E-commerce",
      description: "Dynamic product recommendations with time-sensitive offers and cross-sell opportunities",
      metrics: {
        recovery: "+89%",
        revenue: "+$2.3M",
        roi: "450%"
      },
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      tags: ["Automation Studio", "Dynamic Content", "Revenue Recovery"]
    },
    {
      id: 3,
      title: "B2B Lead Nurturing Campaign",
      client: "Enterprise Solutions Inc",
      industry: "B2B Services",
      description: "Account-based marketing with progressive profiling and sales-ready lead scoring",
      metrics: {
        qualified: "+156%",
        pipeline: "+$8.7M",
        velocity: "+34%"
      },
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center",
      tags: ["Lead Scoring", "Progressive Profiling", "ABM"]
    }
  ];

  const journeySteps = [
    {
      step: 1,
      title: "Entry Point",
      description: "User signs up or triggers behavior",
      icon: "UserPlus",
      color: "bg-primary"
    },
    {
      step: 2,
      title: "Segmentation",
      description: "Dynamic audience segmentation based on attributes",
      icon: "Filter",
      color: "bg-secondary"
    },
    {
      step: 3,
      title: "Personalization",
      description: "Content tailored to user preferences and behavior",
      icon: "Target",
      color: "bg-accent"
    },
    {
      step: 4,
      title: "Multi-Channel",
      description: "Email, SMS, push notifications coordinated delivery",
      icon: "MessageSquare",
      color: "bg-cta"
    },
    {
      step: 5,
      title: "Optimization",
      description: "A/B testing and performance optimization",
      icon: "TrendingUp",
      color: "bg-success"
    }
  ];

  const tabs = [
    { id: 'journey', label: 'Journey Builder', icon: 'Route' },
    { id: 'campaigns', label: 'Campaign Gallery', icon: 'Mail' },
    { id: 'automation', label: 'Automation Workflows', icon: 'Zap' }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Campaign Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world Marketing Cloud implementations delivering measurable business impact
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted p-1 rounded-lg">
            {tabs?.map((tab) => (
              <button
                key={tab?.id}
                onClick={() => setActiveTab(tab?.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab?.id
                    ? 'bg-primary text-primary-foreground shadow-subtle'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={tab?.icon} size={16} />
                <span>{tab?.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Journey Builder Tab */}
        {activeTab === 'journey' && (
          <div className="space-y-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Customer Journey Architecture
              </h3>
              <p className="text-muted-foreground">
                Sophisticated journey orchestration with behavioral triggers and personalization
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {journeySteps?.map((step, index) => (
                <div key={step?.step} className="relative">
                  {index < journeySteps?.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-border z-0"></div>
                  )}
                  
                  <div className="relative bg-card rounded-xl p-6 border border-border hover:shadow-card transition-all duration-300 text-center">
                    <div className={`w-12 h-12 ${step?.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <Icon name={step?.icon} size={20} className="text-white" />
                    </div>
                    
                    <div className="text-sm font-medium text-primary mb-2">
                      Step {step?.step}
                    </div>
                    
                    <h4 className="font-semibold text-foreground mb-2">
                      {step?.title}
                    </h4>
                    
                    <p className="text-sm text-muted-foreground">
                      {step?.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Campaign Gallery Tab */}
        {activeTab === 'campaigns' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {campaigns?.map((campaign) => (
              <div key={campaign?.id} className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-elevation transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={campaign?.image} 
                    alt={campaign?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                      {campaign?.industry}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {campaign?.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    Client: {campaign?.client}
                  </p>
                  
                  <p className="text-muted-foreground mb-6">
                    {campaign?.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(campaign?.metrics)?.map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-success">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {campaign?.tags?.map((tag, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    fullWidth
                    iconName="ExternalLink"
                    iconPosition="right"
                  >
                    View Case Study
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Automation Workflows Tab */}
        {activeTab === 'automation' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Automation Studio Workflows
              </h3>
              <p className="text-muted-foreground">
                Complex automation sequences driving engagement and conversions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-8 border border-border">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Zap" size={20} className="text-secondary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">
                    Behavioral Trigger Automation
                  </h4>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                    <Icon name="MousePointer" size={16} className="text-muted-foreground" />
                    <span className="text-sm">Website behavior tracking</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                    <Icon name="Filter" size={16} className="text-muted-foreground" />
                    <span className="text-sm">Dynamic segmentation</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                    <Icon name="Send" size={16} className="text-muted-foreground" />
                    <span className="text-sm">Triggered email sequences</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                    <Icon name="BarChart" size={16} className="text-muted-foreground" />
                    <span className="text-sm">Performance optimization</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-8 border border-border">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="Database" size={20} className="text-accent" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">
                    Data Extension Management
                  </h4>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                    <Icon name="Import" size={16} className="text-muted-foreground" />
                    <span className="text-sm">Automated data imports</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                    <Icon name="RefreshCw" size={16} className="text-muted-foreground" />
                    <span className="text-sm">Data synchronization</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                    <Icon name="Shield" size={16} className="text-muted-foreground" />
                    <span className="text-sm">Data validation rules</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                    <Icon name="Archive" size={16} className="text-muted-foreground" />
                    <span className="text-sm">Automated archiving</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CampaignShowcase;