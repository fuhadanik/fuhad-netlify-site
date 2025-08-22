import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState('custom');

  const services = {
    custom: {
      title: "Custom Development",
      subtitle: "Tailored Solutions for Unique Business Needs",
      description: "From simple customizations to complex enterprise applications, I build solutions that perfectly align with your business processes and objectives.",
      icon: "Code",
      pricing: "Starting at $150/hour",
      timeline: "2-12 weeks",
      offerings: [
        {
          name: "Lightning Web Components",
          description: "Modern, performant UI components built with web standards",
          deliverables: ["Custom component library", "Documentation", "Unit tests", "Deployment guide"],
          complexity: "Medium to High"
        },
        {
          name: "Apex Development",
          description: "Server-side business logic and data processing solutions",
          deliverables: ["Custom classes", "Trigger framework", "Test coverage", "Performance optimization"],
          complexity: "Medium to High"
        },
        {
          name: "Custom Objects & Fields",
          description: "Data model design and implementation for specific business needs",
          deliverables: ["Object schema", "Field definitions", "Validation rules", "Page layouts"],
          complexity: "Low to Medium"
        }
      ]
    },
    integration: {
      title: "API Integration",
      subtitle: "Seamless System Connectivity",
      description: "Connect Salesforce with your existing systems through robust, scalable integration solutions that ensure data consistency and real-time synchronization.",
      icon: "Link",
      pricing: "Starting at $200/hour",
      timeline: "3-8 weeks",
      offerings: [
        {
          name: "REST API Integration",
          description: "Modern API connections with external systems and services",
          deliverables: ["API wrapper classes", "Error handling", "Authentication setup", "Monitoring dashboard"],
          complexity: "Medium to High"
        },
        {
          name: "Data Synchronization",
          description: "Real-time or batch data sync between systems",
          deliverables: ["Sync framework", "Conflict resolution", "Data mapping", "Monitoring tools"],
          complexity: "High"
        },
        {
          name: "Middleware Solutions",
          description: "Enterprise service bus and middleware platform integration",
          deliverables: ["Integration patterns", "Message queuing", "Transformation logic", "Error recovery"],
          complexity: "High"
        }
      ]
    },
    automation: {
      title: "Process Automation",
      subtitle: "Intelligent Workflow Solutions",
      description: "Streamline your business processes with intelligent automation that reduces manual work and ensures consistency across your organization.",
      icon: "Settings",
      pricing: "Starting at $125/hour",
      timeline: "1-6 weeks",
      offerings: [
        {
          name: "Flow Development",
          description: "Visual workflow automation for complex business processes",
          deliverables: ["Custom flows", "Screen flows", "Auto-launched flows", "Flow documentation"],
          complexity: "Low to Medium"
        },
        {
          name: "Approval Processes",
          description: "Multi-step approval workflows with dynamic routing",
          deliverables: ["Approval matrix", "Email templates", "Escalation rules", "Reporting dashboard"],
          complexity: "Medium"
        },
        {
          name: "Scheduled Jobs",
          description: "Automated batch processing and scheduled operations",
          deliverables: ["Batch classes", "Schedulable classes", "Monitoring setup", "Error handling"],
          complexity: "Medium to High"
        }
      ]
    },
    optimization: {
      title: "Performance Optimization",
      subtitle: "Scale and Speed Enhancement",
      description: "Optimize your existing Salesforce implementation for better performance, scalability, and user experience through code review and architectural improvements.",
      icon: "Zap",
      pricing: "Starting at $175/hour",
      timeline: "2-8 weeks",
      offerings: [
        {
          name: "Code Review & Refactoring",
          description: "Comprehensive analysis and improvement of existing code",
          deliverables: ["Code audit report", "Refactored code", "Performance benchmarks", "Best practices guide"],
          complexity: "Medium to High"
        },
        {
          name: "Database Optimization",
          description: "Query optimization and data model improvements",
          deliverables: ["Query analysis", "Index recommendations", "Data archiving strategy", "Performance monitoring"],
          complexity: "High"
        },
        {
          name: "Architecture Review",
          description: "System architecture assessment and improvement recommendations",
          deliverables: ["Architecture assessment", "Improvement roadmap", "Migration plan", "Risk analysis"],
          complexity: "High"
        }
      ]
    }
  };

  const engagementModels = [
    {
      name: "Project-Based",
      description: "Fixed scope projects with defined deliverables and timeline",
      bestFor: "Specific features or integrations",
      pricing: "Fixed price based on scope",
      icon: "Target"
    },
    {
      name: "Hourly Consulting",
      description: "Flexible engagement for ongoing support and development",
      bestFor: "Ongoing maintenance and enhancements",
      pricing: "$125-$200 per hour",
      icon: "Clock"
    },
    {
      name: "Retainer Agreement",
      description: "Monthly commitment for continuous development support",
      bestFor: "Long-term partnerships",
      pricing: "Monthly retainer + hourly rate",
      icon: "Calendar"
    }
  ];

  const currentService = services?.[selectedService];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-cta/10 text-cta px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Briefcase" size={16} />
            <span>Development Services</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Comprehensive Salesforce Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From simple customizations to complex enterprise implementations, I offer transparent, 
            value-driven development services with clear pricing and defined deliverables.
          </p>
        </div>

        {/* Service Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(services)?.map(([key, service]) => (
            <button
              key={key}
              onClick={() => setSelectedService(key)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-lg font-medium transition-all duration-200 ${
                selectedService === key
                  ? 'bg-primary text-primary-foreground shadow-card'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted border border-border'
              }`}
            >
              <Icon name={service?.icon} size={20} />
              <span>{service?.title}</span>
            </button>
          ))}
        </div>

        {/* Service Details */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Service Overview */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-8">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Icon name={currentService?.icon} size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {currentService?.title}
              </h3>
              <p className="text-lg text-secondary font-medium mb-4">
                {currentService?.subtitle}
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {currentService?.description}
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Starting Price:</span>
                  <span className="font-semibold text-foreground">{currentService?.pricing}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Timeline:</span>
                  <span className="font-semibold text-foreground">{currentService?.timeline}</span>
                </div>
              </div>

              <Button 
                variant="default" 
                fullWidth
                iconName="MessageCircle"
                iconPosition="left"
              >
                Discuss Requirements
              </Button>
            </div>
          </div>

          {/* Service Offerings */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {currentService?.offerings?.map((offering, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        {offering?.name}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {offering?.description}
                      </p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ml-4 ${
                      offering?.complexity === 'High' ? 'bg-error/10 text-error' :
                      offering?.complexity === 'Medium to High' ? 'bg-warning/10 text-warning' :
                      offering?.complexity === 'Medium'? 'bg-secondary/10 text-secondary' : 'bg-success/10 text-success'
                    }`}>
                      {offering?.complexity}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-medium text-foreground mb-3">Deliverables:</h5>
                    <div className="grid md:grid-cols-2 gap-2">
                      {offering?.deliverables?.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Engagement Models */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Engagement Models</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {engagementModels?.map((model, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={model?.icon} size={24} className="text-secondary" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{model?.name}</h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {model?.description}
                </p>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Best for: </span>
                    <span className="font-medium text-foreground">{model?.bestFor}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Pricing: </span>
                    <span className="font-medium text-primary">{model?.pricing}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Salesforce Implementation?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your specific requirements and create a development plan that delivers 
            measurable business value. Every project starts with understanding your unique challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="default" 
              size="lg"
              className="bg-cta hover:bg-cta/90 text-cta-foreground"
              iconName="Calendar"
              iconPosition="left"
            >
              Schedule Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              iconName="Calculator"
              iconPosition="left"
            >
              Get Project Estimate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;