import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ExpertiseVisualization = () => {
  const [activeCloud, setActiveCloud] = useState(null);

  const cloudExpertise = [
    {
      id: 'sales',
      name: 'Sales Cloud',
      icon: 'TrendingUp',
      color: 'from-blue-500 to-blue-600',
      position: { top: '20%', left: '15%' },
      capabilities: [
        'Lead Management & Scoring',
        'Opportunity Pipeline Optimization',
        'Custom Objects & Workflows',
        'Einstein Analytics Integration'
      ],
      certifications: ['Sales Cloud Consultant', 'Advanced Administrator']
    },
    {
      id: 'service',
      name: 'Service Cloud',
      icon: 'Headphones',
      color: 'from-green-500 to-green-600',
      position: { top: '20%', right: '15%' },
      capabilities: [
        'Case Management Automation',
        'Knowledge Base Optimization',
        'Omni-Channel Routing',
        'Field Service Lightning'
      ],
      certifications: ['Service Cloud Consultant', 'Field Service Consultant']
    },
    {
      id: 'marketing',
      name: 'Marketing Cloud',
      icon: 'Mail',
      color: 'from-purple-500 to-purple-600',
      position: { bottom: '20%', left: '15%' },
      capabilities: [
        'Journey Builder Automation',
        'Email Studio Campaigns',
        'Audience Segmentation',
        'Cross-Channel Analytics'
      ],
      certifications: ['Marketing Cloud Developer', 'Email Specialist']
    },
    {
      id: 'custom',
      name: 'Custom Development',
      icon: 'Code',
      color: 'from-orange-500 to-orange-600',
      position: { bottom: '20%', right: '15%' },
      capabilities: [
        'Apex & Visualforce Development',
        'Lightning Web Components',
        'API Integrations',
        'Custom App Development'
      ],
      certifications: ['Platform Developer I & II', 'JavaScript Developer']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-surface to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Salesforce Ecosystem Mastery
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the entire Salesforce platform with deep specialization 
            in each cloud solution and custom development capabilities.
          </p>
        </div>

        <div className="relative">
          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-elevation">
              <div className="text-center">
                <Icon name="Zap" size={32} className="text-white mx-auto mb-1" />
                <span className="text-white text-sm font-semibold">Salesforce</span>
              </div>
            </div>
          </div>

          {/* Interactive Cloud Nodes */}
          <div className="relative h-96 sm:h-[500px]">
            {cloudExpertise?.map((cloud) => (
              <div
                key={cloud?.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300"
                style={cloud?.position}
                onMouseEnter={() => setActiveCloud(cloud?.id)}
                onMouseLeave={() => setActiveCloud(null)}
              >
                <div className={`w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br ${cloud?.color} rounded-full flex items-center justify-center shadow-card hover:shadow-elevation transition-all duration-300 ${
                  activeCloud === cloud?.id ? 'scale-110' : 'hover:scale-105'
                }`}>
                  <Icon name={cloud?.icon} size={28} className="text-white" />
                </div>
                
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2">
                  <span className="text-sm font-medium text-foreground whitespace-nowrap">
                    {cloud?.name}
                  </span>
                </div>

                {/* Connection Lines */}
                <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <line
                    x1="0"
                    y1="0"
                    x2={cloud?.position?.left ? "100" : cloud?.position?.right ? "-100" : "0"}
                    y2={cloud?.position?.top ? "80" : "-80"}
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-border opacity-30"
                    strokeDasharray="5,5"
                  />
                </svg>
              </div>
            ))}
          </div>

          {/* Capability Details Panel */}
          {activeCloud && (
            <div className="mt-8 bg-card border border-border rounded-lg p-6 shadow-card animate-fade-in-up">
              {cloudExpertise?.filter(cloud => cloud?.id === activeCloud)?.map(cloud => (
                  <div key={cloud?.id} className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                        <Icon name={cloud?.icon} size={24} className="mr-2" />
                        {cloud?.name} Capabilities
                      </h3>
                      <ul className="space-y-2">
                        {cloud?.capabilities?.map((capability, index) => (
                          <li key={index} className="flex items-center text-muted-foreground">
                            <Icon name="CheckCircle" size={16} className="text-success mr-2 flex-shrink-0" />
                            {capability}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                        <Icon name="Award" size={20} className="mr-2" />
                        Certifications
                      </h4>
                      <div className="space-y-2">
                        {cloud?.certifications?.map((cert, index) => (
                          <div key={index} className="flex items-center bg-muted rounded-lg p-3">
                            <Icon name="Badge" size={16} className="text-secondary mr-2" />
                            <span className="text-sm font-medium text-foreground">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Salesforce Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">5</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cta mb-2">98%</div>
            <div className="text-sm text-muted-foreground">Client Retention</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseVisualization;