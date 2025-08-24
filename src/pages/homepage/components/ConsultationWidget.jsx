import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ConsultationWidget = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    timezone: 'EST'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const timeSlots = [
    { value: '9:00', label: '9:00 AM EST' },
    { value: '10:00', label: '10:00 AM EST' },
    { value: '11:00', label: '11:00 AM EST' },
    { value: '14:00', label: '2:00 PM EST' },
    { value: '15:00', label: '3:00 PM EST' },
    { value: '16:00', label: '4:00 PM EST' }
  ];

  const projectTypes = [
    { value: 'sales-cloud', label: 'Sales Cloud Implementation' },
    { value: 'service-cloud', label: 'Service Cloud Setup' },
    { value: 'marketing-cloud', label: 'Marketing Cloud Strategy' },
    { value: 'custom-development', label: 'Custom Development' },
    { value: 'integration', label: 'System Integration' },
    { value: 'optimization', label: 'Performance Optimization' },
    { value: 'consultation', label: 'General Consultation' }
  ];

  const timezones = [
    { value: 'EST', label: 'Eastern Time (EST)' },
    { value: 'CST', label: 'Central Time (CST)' },
    { value: 'MST', label: 'Mountain Time (MST)' },
    { value: 'PST', label: 'Pacific Time (PST)' },
    { value: 'GMT', label: 'Greenwich Mean Time (GMT)' },
    { value: 'CET', label: 'Central European Time (CET)' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
  // Netlify default form submission
  };

  const getAvailabilityStatus = () => {
    const hour = currentTime?.getHours();
    if (hour >= 9 && hour < 17) {
      return { status: 'available', text: 'Available Now', color: 'text-success' };
    } else if (hour >= 17 && hour < 20) {
      return { status: 'limited', text: 'Limited Availability', color: 'text-warning' };
    } else {
      return { status: 'offline', text: 'Available Tomorrow', color: 'text-muted-foreground' };
    }
  };

  const availability = getAvailabilityStatus();

  return (
    <section className="py-20 bg-gradient-to-b from-surface to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Ready to Transform Your Salesforce?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Schedule a free consultation to discuss your Salesforce challenges and discover 
                how we can drive measurable business transformation together.
              </p>
            </div>

            {/* Availability Status */}
            <div className="flex items-center space-x-3 bg-card border border-border rounded-lg p-4">
              <div className={`w-3 h-3 rounded-full ${
                availability?.status === 'available' ? 'bg-success animate-pulse' :
                availability?.status === 'limited' ? 'bg-warning' : 'bg-muted-foreground'
              }`}></div>
              <span className={`font-medium ${availability?.color}`}>
                {availability?.text}
              </span>
              <span className="text-sm text-muted-foreground">
                ({currentTime?.toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  timeZoneName: 'short'
                })})
              </span>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">What You'll Get:</h3>
              <div className="grid gap-3">
                {[
                  'Comprehensive Salesforce assessment',
                  'Customized implementation roadmap',
                  'ROI projections and timeline',
                  'Best practices recommendations',
                  'No-obligation project estimate'
                ]?.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-success flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Proof */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 border border-primary/10">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-xs text-muted-foreground">Consultations</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">98%</div>
                  <div className="text-xs text-muted-foreground">Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">24h</div>
                  <div className="text-xs text-muted-foreground">Response Time</div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Schedule Your Free Consultation
              </h3>
              <p className="text-muted-foreground">
                30-minute strategy session • No commitment required
              </p>
            </div>

            <form 
              name="homepage-consultation" 
              method="POST" 
              data-netlify="true" 
              netlify-honeypot="bot-field" 
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              {/* Netlify hidden input for form name */}
              <input type="hidden" name="form-name" value="homepage-consultation" />
              {/* Netlify honeypot field */}
              <input type="hidden" name="bot-field" />
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="John Doe"
                  value={formData?.name}
                  onChange={(e) => handleInputChange('name', e?.target?.value)}
                  required
                />
                
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="john@company.com"
                  value={formData?.email}
                  onChange={(e) => handleInputChange('email', e?.target?.value)}
                  required
                />
              </div>

              <Input
                label="Company Name"
                type="text"
                placeholder="Your Company"
                value={formData?.company}
                onChange={(e) => handleInputChange('company', e?.target?.value)}
                required
              />

              <Select
                label="Project Type"
                placeholder="Select your primary interest"
                options={projectTypes}
                value={formData?.projectType}
                onChange={(value) => handleInputChange('projectType', value)}
                required
              />

              <div className="grid grid-cols-2 gap-4">
                <Select
                  label="Preferred Time"
                  placeholder="Select time slot"
                  options={timeSlots}
                  value={selectedTimeSlot}
                  onChange={setSelectedTimeSlot}
                  required
                />

                <Select
                  label="Your Timezone"
                  options={timezones}
                  value={formData?.timezone}
                  onChange={(value) => handleInputChange('timezone', value)}
                />
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                className="bg-cta hover:bg-cta/90 text-cta-foreground"
                iconName="Calendar"
                iconPosition="left"
              >
                Book Free Consultation
              </Button>

              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  By booking, you agree to our terms and privacy policy. 
                  You can reschedule or cancel anytime.
                </p>
              </div>
            </form>

            {/* Alternative Contact */}
            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground mb-3">
                Prefer to talk directly?
              </p>
              <div className="flex justify-center space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="Phone"
                  iconPosition="left"
                >
                  Call Now
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Live Chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationWidget;