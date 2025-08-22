import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveDemo = () => {
  const [activeDemo, setActiveDemo] = useState('objects');
  const [selectedObject, setSelectedObject] = useState('Account');
  const [selectedField, setSelectedField] = useState('Name');

  const demoSections = {
    objects: {
      title: "Custom Objects & Fields",
      description: "Explore custom Salesforce objects I\'ve built for enterprise clients",
      icon: "Database"
    },
    validation: {
      title: "Validation Rules",
      description: "Complex business logic enforcement through custom validation",
      icon: "Shield"
    },
    integration: {
      title: "Integration Patterns",
      description: "Real-world API integration examples and patterns",
      icon: "Link"
    }
  };

  const customObjects = [
    {
      name: "Account",
      label: "Account Management",
      fields: [
        { name: "Name", type: "Text", description: "Account name with validation" },
        { name: "Industry", type: "Picklist", description: "Industry classification" },
        { name: "Revenue", type: "Currency", description: "Annual revenue tracking" }
      ]
    },
    {
      name: "Project__c",
      label: "Project Tracker",
      fields: [
        { name: "Name", type: "Text", description: "Project identifier" },
        { name: "Status__c", type: "Picklist", description: "Current project status" },
        { name: "Budget__c", type: "Currency", description: "Project budget allocation" }
      ]
    },
    {
      name: "Contract__c",
      label: "Contract Management",
      fields: [
        { name: "Contract_Number__c", type: "Auto Number", description: "Unique contract ID" },
        { name: "Start_Date__c", type: "Date", description: "Contract start date" },
        { name: "Value__c", type: "Currency", description: "Contract value" }
      ]
    }
  ];

  const validationRules = [
    {
      name: "Opportunity_Amount_Validation",
      object: "Opportunity",
      description: "Ensures opportunity amount is positive and within realistic bounds",
      formula: "Amount <= 0 || Amount > 10000000",
      errorMessage: "Opportunity amount must be between $1 and $10,000,000"
    },
    {
      name: "Account_Phone_Format",
      object: "Account", 
      description: "Validates phone number format for international standards",
      formula: "NOT(REGEX(Phone, '^[+]?[0-9]{10,15}$'))",
      errorMessage: "Please enter a valid phone number (10-15 digits)"
    },
    {
      name: "Contract_Date_Logic",
      object: "Contract__c",
      description: "Ensures end date is after start date with minimum duration",
      formula: "End_Date__c <= Start_Date__c || (End_Date__c - Start_Date__c) < 30",
      errorMessage: "Contract must be at least 30 days long and end after start date"
    }
  ];

  const integrationPatterns = [
    {
      name: "REST API Integration",
      description: "Bidirectional data sync with external ERP system",
      method: "POST",
      endpoint: "/api/salesforce/sync",
      responseTime: "< 200ms",
      reliability: "99.9%"
    },
    {
      name: "Webhook Processing",
      description: "Real-time event processing from marketing automation",
      method: "POST",
      endpoint: "/api/webhooks/marketing",
      responseTime: "< 100ms",
      reliability: "99.95%"
    },
    {
      name: "Batch Data Import",
      description: "Scheduled bulk data processing from data warehouse",
      method: "BATCH",
      endpoint: "/api/batch/import",
      responseTime: "< 5min",
      reliability: "100%"
    }
  ];

  const renderObjectDemo = () => (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 mb-6">
        {customObjects?.map((obj) => (
          <button
            key={obj?.name}
            onClick={() => setSelectedObject(obj?.name)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedObject === obj?.name
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:text-foreground'
            }`}
          >
            {obj?.label}
          </button>
        ))}
      </div>

      {customObjects?.find(obj => obj?.name === selectedObject) && (
        <div className="bg-card border border-border rounded-lg p-6">
          <h4 className="text-lg font-semibold text-foreground mb-4">
            {customObjects?.find(obj => obj?.name === selectedObject)?.label} Fields
          </h4>
          <div className="space-y-3">
            {customObjects?.find(obj => obj?.name === selectedObject)?.fields?.map((field, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <div className="font-medium text-foreground">{field?.name}</div>
                  <div className="text-sm text-muted-foreground">{field?.description}</div>
                </div>
                <div className="text-sm font-medium text-secondary bg-secondary/10 px-2 py-1 rounded">
                  {field?.type}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderValidationDemo = () => (
    <div className="space-y-4">
      {validationRules?.map((rule, index) => (
        <div key={index} className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="text-lg font-semibold text-foreground">{rule?.name}</h4>
              <div className="text-sm text-secondary font-medium">{rule?.object}</div>
            </div>
            <div className="w-8 h-8 bg-warning/10 rounded-lg flex items-center justify-center">
              <Icon name="AlertTriangle" size={16} className="text-warning" />
            </div>
          </div>
          <p className="text-muted-foreground mb-4">{rule?.description}</p>
          <div className="bg-gray-900 rounded-lg p-4 mb-4">
            <div className="text-sm text-gray-400 mb-2">Formula:</div>
            <code className="text-green-400 font-mono text-sm">{rule?.formula}</code>
          </div>
          <div className="bg-error/10 border border-error/20 rounded-lg p-3">
            <div className="text-sm font-medium text-error">{rule?.errorMessage}</div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderIntegrationDemo = () => (
    <div className="space-y-4">
      {integrationPatterns?.map((pattern, index) => (
        <div key={index} className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="text-lg font-semibold text-foreground">{pattern?.name}</h4>
              <p className="text-muted-foreground">{pattern?.description}</p>
            </div>
            <div className={`px-2 py-1 rounded text-xs font-medium ${
              pattern?.method === 'POST' ? 'bg-success/10 text-success' :
              pattern?.method === 'BATCH'? 'bg-warning/10 text-warning' : 'bg-secondary/10 text-secondary'
            }`}>
              {pattern?.method}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-muted/50 rounded-lg p-3">
              <div className="text-sm text-muted-foreground mb-1">Endpoint</div>
              <code className="text-sm font-mono text-foreground">{pattern?.endpoint}</code>
            </div>
            <div className="bg-muted/50 rounded-lg p-3">
              <div className="text-sm text-muted-foreground mb-1">Response Time</div>
              <div className="text-sm font-semibold text-success">{pattern?.responseTime}</div>
            </div>
            <div className="bg-muted/50 rounded-lg p-3">
              <div className="text-sm text-muted-foreground mb-1">Reliability</div>
              <div className="text-sm font-semibold text-success">{pattern?.reliability}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeDemo) {
      case 'objects':
        return renderObjectDemo();
      case 'validation':
        return renderValidationDemo();
      case 'integration':
        return renderIntegrationDemo();
      default:
        return renderObjectDemo();
    }
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Play" size={16} />
            <span>Interactive Demonstration</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Explore Salesforce Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interactive examples of custom Salesforce implementations. Click through real configurations 
            and see how complex business requirements translate into elegant technical solutions.
          </p>
        </div>

        {/* Demo Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(demoSections)?.map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveDemo(key)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-lg font-medium transition-all duration-200 ${
                activeDemo === key
                  ? 'bg-primary text-primary-foreground shadow-card'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted border border-border'
              }`}
            >
              <Icon name={section?.icon} size={20} />
              <div className="text-left">
                <div className="font-semibold">{section?.title}</div>
                <div className="text-xs opacity-80">{section?.description}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Demo Content */}
        <div className="bg-background rounded-2xl border border-border p-8">
          {renderContent()}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="default" 
            size="lg"
            className="bg-cta hover:bg-cta/90 text-cta-foreground"
            iconName="Calendar"
            iconPosition="left"
          >
            Schedule Technical Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;