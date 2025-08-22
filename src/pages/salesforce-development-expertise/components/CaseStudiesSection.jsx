import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CaseStudiesSection = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  const caseStudies = [
    {
      title: "Custom CPQ Solution for Manufacturing Giant",
      client: "Fortune 500 Manufacturing Company",
      challenge: "Manual quote generation taking 2+ hours, causing delays and lost deals",
      solution: "Built custom CPQ solution with automated pricing rules and approval workflows",
      results: {
        timeReduction: "87%",
        quoteTime: "15 minutes",
        dealVelocity: "+45%",
        accuracy: "99.8%"
      },
      technologies: ["Lightning Web Components", "Apex", "Flow Builder", "Custom Objects"],
      timeline: "8 weeks",
      complexity: "High",
      industry: "Manufacturing",
      description: `Developed a comprehensive Configure-Price-Quote solution that automated complex pricing calculations, 
      integrated with existing ERP systems, and implemented multi-level approval workflows. The solution included 
      custom Lightning components for product configuration, automated discount calculations based on volume and 
      customer tier, and real-time inventory checking.`,
      technicalHighlights: [
        "Custom pricing engine with 50+ business rules",
        "Real-time ERP integration for inventory data",
        "Multi-currency support with dynamic exchange rates",
        "Automated approval routing based on deal size"
      ]
    },
    {
      title: "Marketing Automation Integration Platform",
      client: "SaaS Technology Company",
      challenge: "Disconnected marketing and sales data causing lead qualification issues",
      solution: "Integrated Salesforce with marketing automation platform using custom APIs",
      results: {
        leadQuality: "+60%",
        conversionRate: "+35%",
        dataAccuracy: "98%",
        syncTime: "Real-time"
      },
      technologies: ["REST APIs", "Platform Events", "Custom Metadata", "Lightning Components"],
      timeline: "6 weeks",
      complexity: "Medium",
      industry: "Technology",
      description: `Created a bidirectional integration between Salesforce and HubSpot that synchronized lead data, 
      campaign responses, and behavioral tracking in real-time. Implemented custom scoring algorithms and 
      automated lead routing based on engagement patterns and demographic data.`,
      technicalHighlights: [
        "Real-time bidirectional data synchronization",
        "Custom lead scoring algorithm implementation",
        "Automated campaign ROI tracking",
        "Exception handling with retry mechanisms"
      ]
    },
    {
      title: "Financial Services Compliance Dashboard",
      client: "Regional Investment Firm",
      challenge: "Manual compliance reporting taking weeks, regulatory risk exposure",
      solution: "Built automated compliance monitoring with real-time alerts and reporting",
      results: {
        reportingTime: "95%",
        complianceScore: "100%",
        riskReduction: "80%",
        auditPrep: "2 hours"
      },
      technologies: ["Einstein Analytics", "Custom Objects", "Scheduled Apex", "Email Alerts"],
      timeline: "10 weeks",
      complexity: "High",
      industry: "Financial Services",
      description: `Developed a comprehensive compliance monitoring system that tracks client interactions, 
      investment recommendations, and regulatory requirements. The solution includes automated risk scoring, 
      exception reporting, and audit trail generation with full data lineage tracking.`,
      technicalHighlights: [
        "Automated regulatory reporting generation",
        "Real-time risk assessment algorithms",
        "Audit trail with complete data lineage",
        "Integration with external compliance databases"
      ]
    }
  ];

  const currentCase = caseStudies?.[selectedCase];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="TrendingUp" size={16} />
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Transformational Case Studies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world examples of complex technical challenges solved with measurable business impact. 
            Each project demonstrates the intersection of technical excellence and business value.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Case Study Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {caseStudies?.map((caseStudy, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCase(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                    selectedCase === index
                      ? 'bg-primary text-primary-foreground shadow-card'
                      : 'bg-card border border-border hover:shadow-subtle hover:border-primary/20'
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-sm leading-tight pr-2">
                      {caseStudy?.title}
                    </h3>
                    <div className={`px-2 py-1 rounded text-xs font-medium flex-shrink-0 ${
                      caseStudy?.complexity === 'High' ? 'bg-error/10 text-error' :
                      caseStudy?.complexity === 'Medium'? 'bg-warning/10 text-warning' : 'bg-success/10 text-success'
                    }`}>
                      {caseStudy?.complexity}
                    </div>
                  </div>
                  <div className={`text-xs mb-2 ${
                    selectedCase === index ? 'text-primary-foreground/80' : 'text-muted-foreground'
                  }`}>
                    {caseStudy?.industry} • {caseStudy?.timeline}
                  </div>
                  <div className={`text-xs ${
                    selectedCase === index ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  }`}>
                    {caseStudy?.challenge?.substring(0, 80)}...
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Case Study Details */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {currentCase?.title}
                  </h3>
                  <div className="text-muted-foreground font-medium">
                    {currentCase?.client}
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="text-center">
                    <div className="text-muted-foreground">Timeline</div>
                    <div className="font-semibold text-foreground">{currentCase?.timeline}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-muted-foreground">Industry</div>
                    <div className="font-semibold text-foreground">{currentCase?.industry}</div>
                  </div>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Icon name="AlertCircle" size={16} className="text-error mr-2" />
                    Challenge
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {currentCase?.challenge}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <Icon name="CheckCircle" size={16} className="text-success mr-2" />
                    Solution
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {currentCase?.solution}
                  </p>
                </div>
              </div>

              {/* Results */}
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-4 flex items-center">
                  <Icon name="TrendingUp" size={16} className="text-success mr-2" />
                  Measurable Results
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(currentCase?.results)?.map(([key, value]) => (
                    <div key={key} className="bg-success/5 border border-success/20 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-success mb-1">{value}</div>
                      <div className="text-sm text-muted-foreground capitalize">
                        {key?.replace(/([A-Z])/g, ' $1')?.trim()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Details */}
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-4 flex items-center">
                  <Icon name="Code" size={16} className="text-secondary mr-2" />
                  Technical Implementation
                </h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {currentCase?.description}
                </p>
                <div className="space-y-2">
                  {currentCase?.technicalHighlights?.map((highlight, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {currentCase?.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="default" 
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Discuss Similar Project
                </Button>
                <Button 
                  variant="outline" 
                  iconName="FileText"
                  iconPosition="left"
                >
                  Download Case Study
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;