import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'fuhad.hossain@salesforce.expert',
      description: 'Primary contact for all inquiries',
      action: 'mailto:fuhad.hossain@salesforce.expert',
      actionText: 'Send Email'
    },
    {
      icon: 'Phone',
      title: 'Phone',
      value: '+1 (555) 847-2963',
      description: 'Available Mon-Fri, 9 AM - 6 PM EST',
      action: 'tel:+15558472963',
      actionText: 'Call Now'
    },
    {
      icon: 'Linkedin',
      title: 'LinkedIn',
      value: 'linkedin.com/in/fuhad-hossain',
      description: 'Professional networking and updates',
      action: 'https://linkedin.com/in/fuhad-hossain',
      actionText: 'Connect'
    }
  ];

  const availabilitySchedule = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM EST', available: true },
    { day: 'Saturday', time: '10:00 AM - 2:00 PM EST', available: true },
    { day: 'Sunday', time: 'Emergency only', available: false }
  ];

  const responseCommitments = [
    {
      icon: 'Zap',
      title: 'Immediate Response',
      description: 'Urgent project needs within 2 hours during business hours',
      color: 'text-cta'
    },
    {
      icon: 'Clock',
      title: 'Standard Response',
      description: 'All inquiries acknowledged within 4-6 business hours',
      color: 'text-primary'
    },
    {
      icon: 'Shield',
      title: 'Confidentiality',
      description: 'All communications protected under NDA standards',
      color: 'text-success'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Direct Contact Methods */}
      <div className="bg-card rounded-xl shadow-card border border-border p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full mb-4">
            <Icon name="Phone" size={32} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Direct Contact</h2>
          <p className="text-muted-foreground">Multiple ways to reach out for immediate assistance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods?.map((method, index) => (
            <div key={index} className="text-center p-6 bg-surface rounded-lg border border-border hover:shadow-card transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Icon name={method?.icon} size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{method?.title}</h3>
              <p className="text-sm font-medium text-secondary mb-2">{method?.value}</p>
              <p className="text-xs text-muted-foreground mb-4">{method?.description}</p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(method?.action, '_blank')}
                className="w-full"
              >
                {method?.actionText}
              </Button>
            </div>
          ))}
        </div>
      </div>
      {/* Availability Schedule */}
      <div className="bg-card rounded-xl shadow-card border border-border p-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
            <Icon name="Calendar" size={20} className="text-success" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">Availability Schedule</h3>
            <p className="text-muted-foreground">When you can expect to reach me directly</p>
          </div>
        </div>

        <div className="space-y-4">
          {availabilitySchedule?.map((schedule, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-surface rounded-lg border border-border">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${schedule?.available ? 'bg-success' : 'bg-warning'}`}></div>
                <span className="font-medium text-foreground">{schedule?.day}</span>
              </div>
              <span className="text-muted-foreground">{schedule?.time}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
          <div className="flex items-start space-x-3">
            <Icon name="Info" size={20} className="text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-foreground mb-1">Timezone Flexibility</h4>
              <p className="text-sm text-muted-foreground">
                Available for consultations across multiple timezones. International clients can schedule calls during mutually convenient hours, including early morning or evening slots.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Response Commitments */}
      <div className="bg-card rounded-xl shadow-card border border-border p-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-trust/10 rounded-lg flex items-center justify-center">
            <Icon name="Shield" size={20} className="text-trust" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">Professional Commitments</h3>
            <p className="text-muted-foreground">What you can expect from our communication</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {responseCommitments?.map((commitment, index) => (
            <div key={index} className="text-center p-6 bg-surface rounded-lg border border-border">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-surface rounded-full mb-4">
                <Icon name={commitment?.icon} size={24} className={commitment?.color} />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{commitment?.title}</h4>
              <p className="text-sm text-muted-foreground">{commitment?.description}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Geographic Flexibility */}
      <div className="bg-card rounded-xl shadow-card border border-border p-8">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
            <Icon name="Globe" size={20} className="text-secondary" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground">Geographic Flexibility</h3>
            <p className="text-muted-foreground">Remote and on-site engagement options</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-surface rounded-lg border border-border">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="Video" size={20} className="text-primary" />
              <h4 className="font-semibold text-foreground">Remote Consultations</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Comprehensive remote support via video conferencing, screen sharing, and collaborative tools. Perfect for strategy sessions, code reviews, and ongoing project management.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Icon name="CheckCircle" size={14} className="text-success" />
                <span className="text-muted-foreground">Zoom, Teams, Google Meet</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Icon name="CheckCircle" size={14} className="text-success" />
                <span className="text-muted-foreground">Screen sharing & collaboration</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Icon name="CheckCircle" size={14} className="text-success" />
                <span className="text-muted-foreground">Recorded sessions available</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-surface rounded-lg border border-border">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="MapPin" size={20} className="text-cta" />
              <h4 className="font-semibold text-foreground">On-Site Engagements</h4>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Available for significant enterprise projects requiring on-site presence. Ideal for complex implementations, team training, and stakeholder workshops.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Icon name="CheckCircle" size={14} className="text-success" />
                <span className="text-muted-foreground">Enterprise projects ($100K+)</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Icon name="CheckCircle" size={14} className="text-success" />
                <span className="text-muted-foreground">Team training & workshops</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Icon name="CheckCircle" size={14} className="text-success" />
                <span className="text-muted-foreground">North America & Europe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;