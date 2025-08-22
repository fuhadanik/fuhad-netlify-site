import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const IntegrationExamples = () => {
  const [activeIntegration, setActiveIntegration] = useState('salescloud');

  const integrations = [
    {
      id: 'salescloud',
      name: 'Sales Cloud',
      icon: 'Users',
      color: 'bg-primary',
      description: 'Seamless lead nurturing and sales alignment'
    },
    {
      id: 'servicecloud',
      name: 'Service Cloud',
      icon: 'Headphones',
      color: 'bg-secondary',
      description: 'Customer service integration and support workflows'
    },
    {
      id: 'commerce',
      name: 'Commerce Cloud',
      icon: 'ShoppingCart',
      color: 'bg-accent',
      description: 'E-commerce personalization and abandoned cart recovery'
    },
    {
      id: 'external',
      name: 'External Systems',
      icon: 'Link',
      color: 'bg-cta',
      description: 'Third-party integrations and custom APIs'
    }
  ];

  const integrationDetails = {
    salescloud: {
      title: "Marketing Cloud + Sales Cloud Integration",
      benefits: [
        "Automated lead scoring and qualification",
        "Sales-ready lead notifications",
        "Closed-loop reporting and attribution",
        "Personalized nurture campaigns based on sales stage"
      ],
      features: [
        {
          name: "Lead Scoring Automation",
          description: "Automatically score leads based on email engagement and website behavior",
          icon: "Target"
        },
        {
          name: "Sales Alert Triggers",
          description: "Notify sales reps when leads reach qualification thresholds",
          icon: "Bell"
        },
        {
          name: "Campaign Attribution",
          description: "Track marketing influence on sales opportunities and revenue",
          icon: "BarChart"
        },
        {
          name: "Dynamic List Sync",
          description: "Sync Marketing Cloud segments with Sales Cloud campaigns",
          icon: "RefreshCw"
        }
      ],
      metrics: {
        leadQuality: "+156%",
        salesVelocity: "+34%",
        attribution: "85%"
      },
      caseStudy: {
        client: "TechFlow Solutions",
        challenge: "Disconnect between marketing qualified leads and sales acceptance",
        solution: "Implemented behavioral scoring with automated sales notifications",
        result: "Increased sales-accepted leads by 156% and reduced lead response time by 67%"
      }
    },
    servicecloud: {
      title: "Marketing Cloud + Service Cloud Integration",
      benefits: [
        "Post-purchase customer journey automation",
        "Support ticket-triggered campaigns",
        "Customer satisfaction surveys",
        "Proactive service communications"
      ],
      features: [
        {
          name: "Support Case Triggers",
          description: "Automatically send follow-up campaigns based on case status",
          icon: "MessageSquare"
        },
        {
          name: "Satisfaction Surveys",
          description: "Automated CSAT surveys after case resolution",
          icon: "Star"
        },
        {
          name: "Proactive Notifications",
          description: "Alert customers about service updates and maintenance",
          icon: "AlertCircle"
        },
        {
          name: "Escalation Workflows",
          description: "Trigger executive outreach for high-value customer issues",
          icon: "ArrowUp"
        }
      ],
      metrics: {
        satisfaction: "+42%",
        retention: "+28%",
        resolution: "+19%"
      },
      caseStudy: {
        client: "ServiceMax Corp",
        challenge: "Poor post-service communication and low customer satisfaction",
        solution: "Automated service journey with satisfaction tracking and follow-ups",
        result: "Improved CSAT scores by 42% and reduced churn by 28%"
      }
    },
    commerce: {
      title: "Marketing Cloud + Commerce Cloud Integration",
      benefits: [
        "Personalized product recommendations",
        "Abandoned cart recovery campaigns",
        "Post-purchase upsell sequences",
        "Behavioral segmentation for targeting"
      ],
      features: [
        {
          name: "Cart Abandonment",
          description: "Automated recovery campaigns with dynamic product displays",
          icon: "ShoppingCart"
        },
        {
          name: "Product Recommendations",
          description: "AI-powered personalized product suggestions in emails",
          icon: "Sparkles"
        },
        {
          name: "Purchase Triggers",
          description: "Post-purchase thank you and upsell campaign automation",
          icon: "Gift"
        },
        {
          name: "Inventory Alerts",
          description: "Back-in-stock notifications for wishlist items",
          icon: "Package"
        }
      ],
      metrics: {
        recovery: "+89%",
        revenue: "+$2.3M",
        engagement: "+67%"
      },
      caseStudy: {
        client: "RetailMax",
        challenge: "High cart abandonment rates and low repeat purchase rates",
        solution: "Implemented dynamic cart recovery with personalized recommendations",
        result: "Recovered 89% more abandoned carts and increased repeat purchases by 67%"
      }
    },
    external: {
      title: "Marketing Cloud + External Systems",
      benefits: [
        "CRM system synchronization",
        "E-commerce platform integration",
        "Analytics and BI tool connections",
        "Custom API implementations"
      ],
      features: [
        {
          name: "API Integrations",
          description: "Custom REST API connections for data synchronization",
          icon: "Code"
        },
        {
          name: "Webhook Automation",
          description: "Real-time data updates from external systems",
          icon: "Zap"
        },
        {
          name: "Data Transformation",
          description: "ETL processes for complex data mapping and cleansing",
          icon: "Database"
        },
        {
          name: "Security Compliance",
          description: "Secure data transmission with encryption and authentication",
          icon: "Shield"
        }
      ],
      metrics: {
        dataAccuracy: "+95%",
        syncSpeed: "Real-time",
        uptime: "99.9%"
      },
      caseStudy: {
        client: "Enterprise Solutions Inc",
        challenge: "Multiple disconnected systems causing data silos",
        solution: "Built unified data architecture with Marketing Cloud as central hub",
        result: "Achieved 95% data accuracy and real-time synchronization across all systems"
      }
    }
  };

  const currentIntegration = integrationDetails?.[activeIntegration];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Unified Customer Experience Integration
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect Marketing Cloud with your entire technology ecosystem for seamless customer journeys
          </p>
        </div>

        {/* Integration Selector */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {integrations?.map((integration) => (
            <button
              key={integration?.id}
              onClick={() => setActiveIntegration(integration?.id)}
              className={`p-6 rounded-xl border transition-all duration-300 text-left ${
                activeIntegration === integration?.id
                  ? 'border-primary bg-primary/5 shadow-card'
                  : 'border-border bg-card hover:border-primary/50 hover:shadow-subtle'
              }`}
            >
              <div className={`w-12 h-12 ${integration?.color} rounded-lg flex items-center justify-center mb-4`}>
                <Icon name={integration?.icon} size={20} className="text-white" />
              </div>
              <h3 className={`font-semibold mb-2 ${
                activeIntegration === integration?.id ? 'text-primary' : 'text-foreground'
              }`}>
                {integration?.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {integration?.description}
              </p>
            </button>
          ))}
        </div>

        {/* Integration Details */}
        <div className="bg-card rounded-2xl p-8 border border-border">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Features & Benefits */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {currentIntegration?.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  Seamless integration delivering unified customer experiences and measurable business impact.
                </p>
              </div>

              {/* Key Benefits */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Key Benefits</h4>
                <div className="space-y-3">
                  {currentIntegration?.benefits?.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Performance Impact</h4>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(currentIntegration?.metrics)?.map(([key, value]) => (
                    <div key={key} className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-2xl font-bold text-success mb-1">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">
                        {key?.replace(/([A-Z])/g, ' $1')?.trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Features */}
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-6">Integration Features</h4>
                <div className="space-y-4">
                  {currentIntegration?.features?.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-muted rounded-lg">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={feature?.icon} size={16} className="text-primary" />
                      </div>
                      <div>
                        <h5 className="font-medium text-foreground mb-1">{feature?.name}</h5>
                        <p className="text-sm text-muted-foreground">{feature?.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Case Study */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
                <div className="flex items-center space-x-2 mb-4">
                  <Icon name="FileText" size={16} className="text-primary" />
                  <h4 className="font-semibold text-foreground">Success Story</h4>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-primary">Client: </span>
                    <span className="text-sm text-foreground">{currentIntegration?.caseStudy?.client}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-primary">Challenge: </span>
                    <span className="text-sm text-muted-foreground">{currentIntegration?.caseStudy?.challenge}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-primary">Solution: </span>
                    <span className="text-sm text-muted-foreground">{currentIntegration?.caseStudy?.solution}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-primary">Result: </span>
                    <span className="text-sm text-success font-medium">{currentIntegration?.caseStudy?.result}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Integrate Your Marketing Cloud?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Let's discuss your integration requirements and design a unified customer experience 
              that drives measurable business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                size="lg"
                className="bg-cta hover:bg-cta/90 text-cta-foreground"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Integration Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                iconName="Download"
                iconPosition="left"
              >
                Download Integration Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationExamples;