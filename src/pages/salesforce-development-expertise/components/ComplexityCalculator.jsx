import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const ComplexityCalculator = () => {
  const [projectType, setProjectType] = useState('');
  const [integrations, setIntegrations] = useState('');
  const [dataVolume, setDataVolume] = useState('');
  const [customization, setCustomization] = useState('');
  const [timeline, setTimeline] = useState('');
  const [showResults, setShowResults] = useState(false);

  const projectTypeOptions = [
    { value: 'new-implementation', label: 'New Salesforce Implementation' },
    { value: 'enhancement', label: 'Existing System Enhancement' },
    { value: 'integration', label: 'System Integration Project' },
    { value: 'migration', label: 'Data Migration Project' },
    { value: 'custom-app', label: 'Custom Application Development' }
  ];

  const integrationOptions = [
    { value: 'none', label: 'No External Integrations' },
    { value: 'simple', label: '1-2 Simple API Integrations' },
    { value: 'moderate', label: '3-5 Standard Integrations' },
    { value: 'complex', label: '5+ Complex Integrations' },
    { value: 'enterprise', label: 'Enterprise Middleware/ESB' }
  ];

  const dataVolumeOptions = [
    { value: 'small', label: 'Small (< 100K records)' },
    { value: 'medium', label: 'Medium (100K - 1M records)' },
    { value: 'large', label: 'Large (1M - 10M records)' },
    { value: 'enterprise', label: 'Enterprise (> 10M records)' }
  ];

  const customizationOptions = [
    { value: 'minimal', label: 'Minimal (Standard features only)' },
    { value: 'moderate', label: 'Moderate (Some custom fields/objects)' },
    { value: 'extensive', label: 'Extensive (Custom Lightning components)' },
    { value: 'advanced', label: 'Advanced (Complex Apex/Triggers)' }
  ];

  const timelineOptions = [
    { value: 'urgent', label: 'Urgent (< 4 weeks)' },
    { value: 'standard', label: 'Standard (1-3 months)' },
    { value: 'extended', label: 'Extended (3-6 months)' },
    { value: 'phased', label: 'Phased (6+ months)' }
  ];

  const calculateComplexity = () => {
    let score = 0;
    let factors = [];

    // Project type scoring
    const projectScores = {
      'new-implementation': 3,
      'enhancement': 2,
      'integration': 4,
      'migration': 3,
      'custom-app': 5
    };
    score += projectScores?.[projectType] || 0;

    // Integration scoring
    const integrationScores = {
      'none': 0,
      'simple': 2,
      'moderate': 3,
      'complex': 4,
      'enterprise': 5
    };
    score += integrationScores?.[integrations] || 0;

    // Data volume scoring
    const dataScores = {
      'small': 1,
      'medium': 2,
      'large': 3,
      'enterprise': 4
    };
    score += dataScores?.[dataVolume] || 0;

    // Customization scoring
    const customScores = {
      'minimal': 1,
      'moderate': 2,
      'extensive': 3,
      'advanced': 4
    };
    score += customScores?.[customization] || 0;

    // Timeline scoring (urgency adds complexity)
    const timelineScores = {
      'urgent': 3,
      'standard': 1,
      'extended': 0,
      'phased': -1
    };
    score += timelineScores?.[timeline] || 0;

    // Determine complexity level
    let complexity, duration, estimatedCost, riskLevel;
    
    if (score <= 6) {
      complexity = 'Low';
      duration = '2-6 weeks';
      estimatedCost = '$15,000 - $35,000';
      riskLevel = 'Low';
      factors = [
        'Standard Salesforce features',
        'Minimal customization required',
        'Straightforward implementation',
        'Low integration complexity'
      ];
    } else if (score <= 12) {
      complexity = 'Medium';
      duration = '6-12 weeks';
      estimatedCost = '$35,000 - $75,000';
      riskLevel = 'Medium';
      factors = [
        'Some custom development needed',
        'Moderate integration requirements',
        'Standard business processes',
        'Manageable data migration'
      ];
    } else if (score <= 18) {
      complexity = 'High';
      duration = '3-6 months';
      estimatedCost = '$75,000 - $150,000';
      riskLevel = 'Medium-High';
      factors = [
        'Extensive customization required',
        'Complex integration patterns',
        'Large data volumes',
        'Advanced business logic'
      ];
    } else {
      complexity = 'Very High';
      duration = '6+ months';
      estimatedCost = '$150,000+';
      riskLevel = 'High';
      factors = [
        'Enterprise-grade complexity',
        'Multiple system integrations',
        'Massive data migration',
        'Advanced custom development'
      ];
    }

    return {
      complexity,
      duration,
      estimatedCost,
      riskLevel,
      factors,
      score
    };
  };

  const handleCalculate = () => {
    if (projectType && integrations && dataVolume && customization && timeline) {
      setShowResults(true);
    }
  };

  const results = showResults ? calculateComplexity() : null;

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-warning/10 text-warning px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Calculator" size={16} />
            <span>Project Complexity Calculator</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Estimate Your Project Scope
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get an instant assessment of your Salesforce project's complexity, timeline, and estimated investment. 
            This tool helps you understand the scope before we discuss detailed requirements.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <Select
                label="Project Type"
                description="What type of Salesforce project are you planning?"
                options={projectTypeOptions}
                value={projectType}
                onChange={setProjectType}
                placeholder="Select project type"
                required
              />
            </div>

            <div>
              <Select
                label="Integration Requirements"
                description="How many external systems need to connect?"
                options={integrationOptions}
                value={integrations}
                onChange={setIntegrations}
                placeholder="Select integration level"
                required
              />
            </div>

            <div>
              <Select
                label="Data Volume"
                description="How much data will be processed?"
                options={dataVolumeOptions}
                value={dataVolume}
                onChange={setDataVolume}
                placeholder="Select data volume"
                required
              />
            </div>

            <div>
              <Select
                label="Customization Level"
                description="How much custom development is needed?"
                options={customizationOptions}
                value={customization}
                onChange={setCustomization}
                placeholder="Select customization level"
                required
              />
            </div>

            <div className="md:col-span-2">
              <Select
                label="Preferred Timeline"
                description="When do you need the project completed?"
                options={timelineOptions}
                value={timeline}
                onChange={setTimeline}
                placeholder="Select timeline"
                required
              />
            </div>
          </div>

          <div className="text-center mb-8">
            <Button 
              variant="default" 
              size="lg"
              onClick={handleCalculate}
              disabled={!projectType || !integrations || !dataVolume || !customization || !timeline}
              iconName="Calculator"
              iconPosition="left"
            >
              Calculate Project Complexity
            </Button>
          </div>

          {showResults && results && (
            <div className="border-t border-border pt-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">Project Assessment Results</h3>
                <p className="text-muted-foreground">Based on your requirements, here's what to expect:</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-background border border-border rounded-lg p-6 text-center">
                  <div className={`text-3xl font-bold mb-2 ${
                    results?.complexity === 'Low' ? 'text-success' :
                    results?.complexity === 'Medium' ? 'text-warning' :
                    results?.complexity === 'High'? 'text-error' : 'text-error'
                  }`}>
                    {results?.complexity}
                  </div>
                  <div className="text-sm text-muted-foreground">Complexity Level</div>
                </div>

                <div className="bg-background border border-border rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{results?.duration}</div>
                  <div className="text-sm text-muted-foreground">Estimated Duration</div>
                </div>

                <div className="bg-background border border-border rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">{results?.estimatedCost}</div>
                  <div className="text-sm text-muted-foreground">Investment Range</div>
                </div>

                <div className="bg-background border border-border rounded-lg p-6 text-center">
                  <div className={`text-3xl font-bold mb-2 ${
                    results?.riskLevel === 'Low' ? 'text-success' :
                    results?.riskLevel === 'Medium'? 'text-warning' : 'text-error'
                  }`}>
                    {results?.riskLevel}
                  </div>
                  <div className="text-sm text-muted-foreground">Risk Level</div>
                </div>
              </div>

              <div className="bg-background border border-border rounded-lg p-6 mb-8">
                <h4 className="font-semibold text-foreground mb-4 flex items-center">
                  <Icon name="CheckCircle" size={16} className="text-success mr-2" />
                  Key Project Characteristics
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {results?.factors?.map((factor, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">{factor}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 text-center">
                <h4 className="font-semibold text-foreground mb-2">Ready to Discuss Your Project?</h4>
                <p className="text-muted-foreground mb-4">
                  This assessment provides a baseline estimate. Let's schedule a consultation to discuss 
                  your specific requirements and create a detailed project plan.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="default" 
                    iconName="Calendar"
                    iconPosition="left"
                  >
                    Schedule Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    iconName="FileText"
                    iconPosition="left"
                  >
                    Request Detailed Proposal
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            * This calculator provides rough estimates based on typical project patterns. 
            Actual scope, timeline, and costs may vary based on specific requirements and complexity factors.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComplexityCalculator;