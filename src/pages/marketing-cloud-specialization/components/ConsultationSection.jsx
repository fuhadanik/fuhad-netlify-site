import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ConsultationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    consultationType: '',
    currentPlatform: '',
    teamSize: '',
    timeline: '',
    budget: '',
    challenges: '',
    goals: ''
  });

  const consultationTypes = [
    { value: 'strategy', label: 'Marketing Cloud Strategy Session' },
    { value: 'audit', label: 'Technical Audit & Assessment' },
    { value: 'implementation', label: 'Implementation Planning' },
    { value: 'optimization', label: 'Performance Optimization' },
    { value: 'training', label: 'Team Training & Enablement' },
    { value: 'integration', label: 'System Integration Planning' }
  ];

  const platformOptions = [
    { value: 'none', label: 'No Marketing Automation Platform' },
    { value: 'pardot', label: 'Pardot/Account Engagement' },
    { value: 'hubspot', label: 'HubSpot' },
    { value: 'marketo', label: 'Marketo' },
    { value: 'mailchimp', label: 'Mailchimp' },
    { value: 'other', label: 'Other Platform' }
  ];

  const teamSizeOptions = [
    { value: '1-5', label: '1-5 people' },
    { value: '6-15', label: '6-15 people' },
    { value: '16-50', label: '16-50 people' },
    { value: '51-200', label: '51-200 people' },
    { value: '200+', label: '200+ people' }
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Immediate (Within 30 days)' },
    { value: '1-3months', label: '1-3 months' },
    { value: '3-6months', label: '3-6 months' },
    { value: '6-12months', label: '6-12 months' },
    { value: 'planning', label: 'Planning phase' }
  ];

  const budgetOptions = [
    { value: 'under-25k', label: 'Under $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-250k', label: '$100,000 - $250,000' },
    { value: '250k+', label: '$250,000+' }
  ];

  const services = [
    {
      id: 'strategy',
      title: 'Marketing Cloud Strategy Session',
      duration: '90 minutes',
      price: 'Free',
      description: 'Comprehensive strategy discussion covering your Marketing Cloud goals, current challenges, and roadmap planning.',
      deliverables: [
        'Current state assessment',
        'Strategic roadmap outline',
        'Technology recommendations',
        'Implementation timeline',
        'Resource requirements'
      ],
      icon: 'Target',
      color: 'bg-primary'
    },
    {
      id: 'audit',
      title: 'Technical Audit & Assessment',
      duration: '2-3 weeks',
      price: '$2,500',
      description: 'In-depth technical review of your current Marketing Cloud setup with detailed optimization recommendations.',
      deliverables: [
        'Technical architecture review',
        'Performance analysis report',
        'Security assessment',
        'Optimization recommendations',
        'Implementation priority matrix'
      ],
      icon: 'Search',
      color: 'bg-secondary'
    },
    {
      id: 'implementation',
      title: 'Implementation Planning',
      duration: '1-2 weeks',
      price: '$1,500',
      description: 'Detailed implementation planning with technical specifications and project management framework.',
      deliverables: [
        'Technical specification document',
        'Project timeline and milestones',
        'Resource allocation plan',
        'Risk assessment and mitigation',
        'Success metrics definition'
      ],
      icon: 'FileText',
      color: 'bg-accent'
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Marketing Cloud Consultation Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get expert guidance tailored to your Marketing Cloud journey with clear deliverables and timelines
          </p>
        </div>

        {/* Service Options */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services?.map((service) => (
            <div key={service?.id} className="bg-card rounded-xl p-8 border border-border hover:shadow-elevation transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 ${service?.color} rounded-lg flex items-center justify-center`}>
                  <Icon name={service?.icon} size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{service?.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{service?.duration}</span>
                    <span className="font-semibold text-success">{service?.price}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">
                {service?.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-medium text-foreground mb-3">Deliverables:</h4>
                <ul className="space-y-2">
                  {service?.deliverables?.map((deliverable, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Icon name="Check" size={14} className="text-success" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button 
                variant={service?.price === 'Free' ? 'default' : 'outline'}
                size="sm" 
                fullWidth
                className={service?.price === 'Free' ? 'bg-success hover:bg-success/90 text-success-foreground' : ''}
                iconName="Calendar"
                iconPosition="left"
              >
                {service?.price === 'Free' ? 'Schedule Free Session' : 'Request Quote'}
              </Button>
            </div>
          ))}
        </div>

        {/* Consultation Form */}
        <div className="bg-card rounded-2xl p-8 border border-border">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Schedule Your Consultation
              </h3>
              
              <form 
                name="marketing-cloud-consultation" 
                method="POST" 
                data-netlify="true" 
                netlify-honeypot="bot-field" 
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                {/* Netlify hidden input for form name */}
                <input type="hidden" name="form-name" value="marketing-cloud-consultation" />
                {/* Netlify honeypot field */}
                <input type="hidden" name="bot-field" />
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Full Name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData?.name}
                    onChange={(e) => handleInputChange('name', e?.target?.value)}
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="Enter your email"
                    value={formData?.email}
                    onChange={(e) => handleInputChange('email', e?.target?.value)}
                    required
                  />
                </div>
                
                <Input
                  label="Company Name"
                  type="text"
                  placeholder="Enter your company name"
                  value={formData?.company}
                  onChange={(e) => handleInputChange('company', e?.target?.value)}
                  required
                />
                
                <Select
                  label="Consultation Type"
                  placeholder="Select consultation type"
                  options={consultationTypes}
                  value={formData?.consultationType}
                  onChange={(value) => handleInputChange('consultationType', value)}
                  required
                />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Select
                    label="Current Platform"
                    placeholder="Select current platform"
                    options={platformOptions}
                    value={formData?.currentPlatform}
                    onChange={(value) => handleInputChange('currentPlatform', value)}
                  />
                  <Select
                    label="Team Size"
                    placeholder="Select team size"
                    options={teamSizeOptions}
                    value={formData?.teamSize}
                    onChange={(value) => handleInputChange('teamSize', value)}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Select
                    label="Timeline"
                    placeholder="Select timeline"
                    options={timelineOptions}
                    value={formData?.timeline}
                    onChange={(value) => handleInputChange('timeline', value)}
                  />
                  <Select
                    label="Budget Range"
                    placeholder="Select budget range"
                    options={budgetOptions}
                    value={formData?.budget}
                    onChange={(value) => handleInputChange('budget', value)}
                  />
                </div>
                
                <Input
                  label="Current Challenges"
                  type="text"
                  placeholder="Describe your main Marketing Cloud challenges"
                  value={formData?.challenges}
                  onChange={(e) => handleInputChange('challenges', e?.target?.value)}
                />
                
                <Input
                  label="Goals & Objectives"
                  type="text"
                  placeholder="What do you want to achieve with Marketing Cloud?"
                  value={formData?.goals}
                  onChange={(e) => handleInputChange('goals', e?.target?.value)}
                />
                
                <Button 
                  type="submit"
                  variant="default" 
                  size="lg" 
                  fullWidth
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  iconName="Send"
                  iconPosition="left"
                >
                  Submit Consultation Request
                </Button>
              </form>
            </div>

            {/* Consultation Benefits */}
            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">
                  What to Expect
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Clock" size={16} className="text-primary" />
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground mb-1">Quick Response</h5>
                      <p className="text-sm text-muted-foreground">
                        I'll respond within 24 hours to schedule your consultation at a convenient time.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Users" size={16} className="text-secondary" />
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground mb-1">Personalized Discussion</h5>
                      <p className="text-sm text-muted-foreground">
                        Tailored conversation focused on your specific Marketing Cloud needs and challenges.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="FileText" size={16} className="text-accent" />
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground mb-1">Actionable Insights</h5>
                      <p className="text-sm text-muted-foreground">
                        Leave with clear next steps and recommendations for your Marketing Cloud journey.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-cta/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Shield" size={16} className="text-cta" />
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground mb-1">No Pressure</h5>
                      <p className="text-sm text-muted-foreground">
                        Consultative approach focused on providing value, not pushing services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-muted rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-4">
                  Prefer to Connect Directly?
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">fuhad@marketingcloud.expert</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Calendar" size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Available Mon-Fri, 9 AM - 6 PM EST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;