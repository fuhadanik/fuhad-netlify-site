import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CapabilitiesSection = () => {
  const [activeTab, setActiveTab] = useState('lightning');

  const capabilities = {
    lightning: {
      title: "Lightning Web Components",
      description: "Modern, performant components built with web standards",
      codeExample: `import { LightningElement, api, track, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';


export default class EnterpriseDataTable extends LightningElement {
    @api recordId;
    @api objectApiName;
    @track data = [];
    @track isLoading = true;
    
    columns = [
        { label: 'Name', fieldName: 'Name', type: 'text' },
        { label: 'Status', fieldName: 'Status__c', type: 'text' },
        { label: 'Amount', fieldName: 'Amount__c', type: 'currency' }
    ];
    
    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    wiredRecord({ error, data }) {
        if (data) {
            this.processData(data);
            this.isLoading = false;
        } else if (error) {
            this.showError('Error loading data');
        }
    }
    
    processData(record) {
        // Custom business logic
        this.data = this.transformData(record);
    }
}`,
      features: [
        "Custom Lightning Web Components",
        "Aura to LWC Migration",
        "Lightning Design System Integration",
        "Event-Driven Architecture",
        "Performance Optimization"
      ]
    },
    api: {
      title: "API Integrations",
      description: "Seamless connections between Salesforce and external systems",
      codeExample: `public class EnterpriseAPIService {
    
    @future(callout=true)
    public static void syncExternalData(Set<Id> recordIds) {
        List<Account> accountsToUpdate = new List<Account>();
        
        for (Id recordId : recordIds) {
            try {
                HttpRequest req = new HttpRequest();
                req.setEndpoint('https://api.external-system.com/accounts/' + recordId);
                req.setMethod('GET');
                req.setHeader('Authorization', 'Bearer ' + getAccessToken());
                req.setTimeout(30000);
                
                Http http = new Http();
                HttpResponse res = http.send(req);
                
                if (res.getStatusCode() == 200) {
                    ExternalAccountData extData = 
                        (ExternalAccountData) JSON.deserialize(
                            res.getBody(), ExternalAccountData.class
                        );
                    
                    Account acc = new Account(
                        Id = recordId,
                        External_Status__c = extData.status,
                        Last_Sync__c = System.now()
                    );
                    accountsToUpdate.add(acc);
                }
            } catch (Exception e) {
                System.debug('API Error: ' + e.getMessage());
                // Error handling and logging
            }
        }
        
        if (!accountsToUpdate.isEmpty()) {
            Database.update(accountsToUpdate, false);
        }
    }
}`,
      features: [
        "REST & SOAP API Integration",
        "Real-time Data Synchronization",
        "Error Handling & Retry Logic",
        "OAuth 2.0 Authentication",
        "Bulk Data Processing"
      ]
    },
    automation: {
      title: "Workflow Automation",
      description: "Intelligent process automation that scales with your business",
      codeExample: `public class OpportunityAutomationHandler {
    
    public static void handleOpportunityUpdates(
        List<Opportunity> newOpps, 
        Map<Id, Opportunity> oldOppsMap
    ) {
        List<Task> tasksToCreate = new List<Task>();
        List<Opportunity> oppsToUpdate = new List<Opportunity>();
        
        for (Opportunity opp : newOpps) {
            Opportunity oldOpp = oldOppsMap.get(opp.Id);
            
            // Stage progression automation
            if (opp.StageName != oldOpp.StageName) {
                handleStageChange(opp, oldOpp, tasksToCreate);
            }
            
            // Amount threshold automation
            if (opp.Amount > 100000 && oldOpp.Amount <= 100000) {
                createExecutiveReviewTask(opp, tasksToCreate);
                opp.Executive_Review_Required__c = true;
                oppsToUpdate.add(opp);
            }
            
            // Probability-based automation
            if (opp.Probability >= 75 && oldOpp.Probability < 75) {
                triggerContractGeneration(opp);
            }
        }
        
        // Bulk operations for performance
        if (!tasksToCreate.isEmpty()) {
            insert tasksToCreate;
        }
        
        if (!oppsToUpdate.isEmpty()) {
            update oppsToUpdate;
        }
    }
    
    private static void handleStageChange(
        Opportunity newOpp, 
        Opportunity oldOpp, 
        List<Task> tasks
    ) {
        // Custom stage-specific logic
        switch on newOpp.StageName {
            when 'Proposal/Price Quote' {
                createProposalTask(newOpp, tasks);
            }
            when 'Negotiation/Review' {
                createNegotiationTask(newOpp, tasks);
            }
            when 'Closed Won' {
                triggerImplementationProcess(newOpp);
            }
        }
    }
}`,
      features: [
        "Process Builder Optimization",
        "Flow Development",
        "Trigger Framework",
        "Batch Processing",
        "Scheduled Jobs"
      ]
    }
  };

  const tabs = [
    { key: 'lightning', label: 'Lightning Components', icon: 'Zap' },
    { key: 'api', label: 'API Integration', icon: 'Link' },
    { key: 'automation', label: 'Automation', icon: 'Settings' }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Code" size={16} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Enterprise Development Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From custom Lightning components to complex integrations, explore the technical solutions 
            that have transformed businesses across industries.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs?.map((tab) => (
            <button
              key={tab?.key}
              onClick={() => setActiveTab(tab?.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab?.key
                  ? 'bg-primary text-primary-foreground shadow-card'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted border border-border'
              }`}
            >
              <Icon name={tab?.icon} size={18} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Code Example */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-gray-800">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm">
                  {capabilities?.[activeTab]?.title?.replace(/\s+/g, '') + '.js'}
                </span>
              </div>
              <div className="p-6 text-sm font-mono overflow-x-auto">
                <pre className="text-gray-300 whitespace-pre-wrap">
                  {capabilities?.[activeTab]?.codeExample}
                </pre>
              </div>
            </div>
          </div>

          {/* Description and Features */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {capabilities?.[activeTab]?.title}
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {capabilities?.[activeTab]?.description}
            </p>

            <div className="space-y-4 mb-8">
              {capabilities?.[activeTab]?.features?.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={14} className="text-success" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                iconName="Play"
                iconPosition="left"
              >
                View Live Demo
              </Button>
              <Button 
                variant="outline" 
                iconName="Download"
                iconPosition="left"
              >
                Download Sample
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;