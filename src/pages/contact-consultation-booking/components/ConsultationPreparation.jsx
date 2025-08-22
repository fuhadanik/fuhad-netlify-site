import React from 'react';
import Icon from '../../../components/AppIcon';

const ConsultationPreparation = () => {
  const preparationSteps = [
    {
      icon: 'FileText',
      title: 'Document Current State',
      description: 'Prepare an overview of your current Salesforce setup, including org structure, key processes, and pain points',
      items: [
        'Current Salesforce edition and licenses',
        'Key business processes using Salesforce',
        'Integration points with other systems',
        'Major pain points or limitations'
      ]
    },
    {
      icon: 'Target',
      title: 'Define Objectives',
      description: 'Clearly articulate your business goals and what success looks like for your project',
      items: [
        'Primary business objectives',
        'Success metrics and KPIs',
        'Timeline expectations',
        'Budget considerations'
      ]
    },
    {
      icon: 'Users',
      title: 'Identify Stakeholders',
      description: 'Determine who should be involved in the consultation and decision-making process',
      items: [
        'Key decision makers',
        'End users and their needs',
        'IT and technical contacts',
        'Budget approval authority'
      ]
    }
  ];

  const discussionTopics = [
    {
      category: 'Technical Assessment',
      topics: [
        'Current Salesforce org architecture review',
        'Data quality and migration considerations',
        'Integration requirements and challenges',
        'Security and compliance needs',
        'Performance optimization opportunities'
      ]
    },
    {
      category: 'Business Strategy',
      topics: [
        'Business process optimization',
        'User adoption and change management',
        'ROI expectations and measurement',
        'Scalability and future growth plans',
        'Training and support requirements'
      ]
    },
    {
      category: 'Implementation Planning',
      topics: [
        'Project scope and deliverables',
        'Timeline and milestone planning',
        'Resource allocation and team structure',
        'Risk assessment and mitigation',
        'Testing and deployment strategy'
      ]
    }
  ];

  const expectedOutcomes = [
    {
      icon: 'CheckCircle',
      title: 'Clear Project Scope',
      description: 'Detailed understanding of project requirements, deliverables, and success criteria'
    },
    {
      icon: 'Map',
      title: 'Implementation Roadmap',
      description: 'Strategic plan with phases, timelines, and key milestones for your Salesforce project'
    },
    {
      icon: 'DollarSign',
      title: 'Investment Estimate',
      description: 'Transparent pricing structure and investment requirements for your specific needs'
    },
    {
      icon: 'Calendar',
      title: 'Next Steps Plan',
      description: 'Clear action items and timeline for moving forward with your project'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Preparation Guidelines */}
      <div className="bg-card rounded-xl shadow-card border border-border p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mb-4">
            <Icon name="BookOpen" size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Consultation Preparation</h2>
          <p className="text-muted-foreground">How to prepare for a productive discussion about your Salesforce project</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {preparationSteps?.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <Icon name={step?.icon} size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step?.title}</h3>
                <p className="text-sm text-muted-foreground">{step?.description}</p>
              </div>
              
              <div className="space-y-3">
                {step?.items?.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              
              {index < preparationSteps?.length - 1 && (
                <div className="hidden md:block absolute top-6 -right-4 w-8 h-0.5 bg-border"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Discussion Topics */}
      <div className="bg-card rounded-xl shadow-card border border-border p-8">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
            <Icon name="MessageSquare" size={20} className="text-secondary" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">Typical Discussion Topics</h3>
            <p className="text-muted-foreground">Areas we'll explore during our consultation</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {discussionTopics?.map((category, index) => (
            <div key={index} className="p-6 bg-surface rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-4">{category?.category}</h4>
              <div className="space-y-3">
                {category?.topics?.map((topic, topicIndex) => (
                  <div key={topicIndex} className="flex items-start space-x-3">
                    <Icon name="ArrowRight" size={14} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Expected Outcomes */}
      <div className="bg-card rounded-xl shadow-card border border-border p-8">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
            <Icon name="Target" size={20} className="text-success" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">Expected Outcomes</h3>
            <p className="text-muted-foreground">What you'll walk away with after our consultation</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expectedOutcomes?.map((outcome, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 bg-surface rounded-lg border border-border">
              <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={outcome?.icon} size={20} className="text-success" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">{outcome?.title}</h4>
                <p className="text-sm text-muted-foreground">{outcome?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Security & Confidentiality */}
      <div className="bg-card rounded-xl shadow-card border border-border p-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-trust/10 rounded-lg flex items-center justify-center">
            <Icon name="Shield" size={20} className="text-trust" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">Security & Confidentiality</h3>
            <p className="text-muted-foreground">Your business information is protected</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-foreground mb-4">Confidentiality Commitment</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Icon name="Lock" size={16} className="text-trust mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">All discussions covered under professional NDA standards</span>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="Eye" size={16} className="text-trust mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">No sharing of sensitive business information</span>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="FileText" size={16} className="text-trust mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Formal NDA available upon request</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Data Protection</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Icon name="Database" size={16} className="text-trust mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">No access to production data during consultation</span>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="Shield" size={16} className="text-trust mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Secure communication channels for sensitive topics</span>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="Trash2" size={16} className="text-trust mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Information purged after project completion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPreparation;