import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveDemo = () => {
  const [activeDemo, setActiveDemo] = useState('email');
  const [simulationStep, setSimulationStep] = useState(0);

  const demos = [
    { id: 'email', label: 'Email Studio', icon: 'Mail' },
    { id: 'journey', label: 'Journey Builder', icon: 'Route' },
    { id: 'automation', label: 'Automation Studio', icon: 'Zap' }
  ];

  const emailTemplates = [
    {
      id: 1,
      name: "Welcome Series Template",
      category: "Onboarding",
      preview: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop&crop=center",
      metrics: { openRate: "72%", clickRate: "28%", conversion: "15%" }
    },
    {
      id: 2,
      name: "Product Launch Campaign",
      category: "Promotional",
      preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
      metrics: { openRate: "68%", clickRate: "31%", conversion: "18%" }
    },
    {
      id: 3,
      name: "Abandoned Cart Recovery",
      category: "E-commerce",
      preview: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
      metrics: { openRate: "89%", clickRate: "45%", conversion: "23%" }
    }
  ];

  const journeySimulation = [
    {
      step: 0,
      title: "Customer Entry",
      description: "New customer signs up for newsletter",
      icon: "UserPlus",
      status: "active"
    },
    {
      step: 1,
      title: "Welcome Email",
      description: "Immediate welcome email with brand introduction",
      icon: "Mail",
      status: "pending"
    },
    {
      step: 2,
      title: "Behavioral Tracking",
      description: "Monitor website activity and engagement",
      icon: "Eye",
      status: "pending"
    },
    {
      step: 3,
      title: "Personalized Content",
      description: "Send targeted content based on interests",
      icon: "Target",
      status: "pending"
    },
    {
      step: 4,
      title: "Conversion Goal",
      description: "Customer makes first purchase",
      icon: "ShoppingCart",
      status: "pending"
    }
  ];

  const automationWorkflows = [
    {
      id: 1,
      name: "Lead Scoring Automation",
      description: "Automatically score leads based on engagement and behavior",
      triggers: ["Email Opens", "Website Visits", "Content Downloads"],
      actions: ["Update Score", "Assign to Sales", "Send Follow-up"],
      frequency: "Real-time"
    },
    {
      id: 2,
      name: "Re-engagement Campaign",
      description: "Win back inactive subscribers with targeted messaging",
      triggers: ["30 days inactive", "No email opens", "No website visits"],
      actions: ["Send re-engagement", "Offer incentive", "Segment update"],
      frequency: "Weekly"
    }
  ];

  const runSimulation = () => {
    if (simulationStep < journeySimulation?.length - 1) {
      setSimulationStep(simulationStep + 1);
    } else {
      setSimulationStep(0);
    }
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Interactive Marketing Cloud Demo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the power of Marketing Cloud through interactive demonstrations
          </p>
        </div>

        {/* Demo Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-card border border-border rounded-lg p-1">
            {demos?.map((demo) => (
              <button
                key={demo?.id}
                onClick={() => setActiveDemo(demo?.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeDemo === demo?.id
                    ? 'bg-primary text-primary-foreground shadow-subtle'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={demo?.icon} size={16} />
                <span>{demo?.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Email Studio Demo */}
        {activeDemo === 'email' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Email Template Gallery
              </h3>
              <p className="text-muted-foreground">
                Responsive email templates designed for maximum engagement
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {emailTemplates?.map((template) => (
                <div key={template?.id} className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-card transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={template?.preview} 
                      alt={template?.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                        {template?.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4">
                      {template?.name}
                    </h4>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-success">{template?.metrics?.openRate}</div>
                        <div className="text-xs text-muted-foreground">Open Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-secondary">{template?.metrics?.clickRate}</div>
                        <div className="text-xs text-muted-foreground">Click Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-cta">{template?.metrics?.conversion}</div>
                        <div className="text-xs text-muted-foreground">Conversion</div>
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      fullWidth
                      iconName="Eye"
                      iconPosition="left"
                    >
                      Preview Template
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Journey Builder Demo */}
        {activeDemo === 'journey' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Customer Journey Simulation
              </h3>
              <p className="text-muted-foreground">
                Watch how customers progress through automated journeys
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="flex justify-between items-center mb-8">
                <h4 className="text-xl font-semibold text-foreground">
                  Welcome Journey Simulation
                </h4>
                <Button 
                  variant="default"
                  onClick={runSimulation}
                  iconName="Play"
                  iconPosition="left"
                >
                  {simulationStep === 0 ? 'Start Simulation' : 'Next Step'}
                </Button>
              </div>

              <div className="space-y-6">
                {journeySimulation?.map((step, index) => (
                  <div 
                    key={step?.step}
                    className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-500 ${
                      index <= simulationStep 
                        ? 'bg-primary/10 border-l-4 border-primary' :'bg-muted'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      index <= simulationStep 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted-foreground/20 text-muted-foreground'
                    }`}>
                      <Icon name={step?.icon} size={16} />
                    </div>
                    
                    <div className="flex-1">
                      <h5 className={`font-semibold ${
                        index <= simulationStep ? 'text-foreground' : 'text-muted-foreground'
                      }`}>
                        {step?.title}
                      </h5>
                      <p className={`text-sm ${
                        index <= simulationStep ? 'text-muted-foreground' : 'text-muted-foreground/60'
                      }`}>
                        {step?.description}
                      </p>
                    </div>
                    
                    {index <= simulationStep && (
                      <div className="flex items-center space-x-2 text-success">
                        <Icon name="CheckCircle" size={16} />
                        <span className="text-sm font-medium">Complete</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Automation Studio Demo */}
        {activeDemo === 'automation' && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Automation Workflows
              </h3>
              <p className="text-muted-foreground">
                Complex automation sequences that run behind the scenes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {automationWorkflows?.map((workflow) => (
                <div key={workflow?.id} className="bg-card rounded-xl p-8 border border-border">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon name="Zap" size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {workflow?.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Runs {workflow?.frequency}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6">
                    {workflow?.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Triggers</h5>
                      <div className="flex flex-wrap gap-2">
                        {workflow?.triggers?.map((trigger, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full"
                          >
                            {trigger}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Actions</h5>
                      <div className="flex flex-wrap gap-2">
                        {workflow?.actions?.map((action, index) => (
                          <span 
                            key={index}
                            className="text-xs bg-success/10 text-success px-2 py-1 rounded-full"
                          >
                            {action}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveDemo;