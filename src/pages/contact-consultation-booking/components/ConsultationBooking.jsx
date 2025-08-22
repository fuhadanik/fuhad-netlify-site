import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ConsultationBooking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedTimezone, setSelectedTimezone] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectDetails: ''
  });

  const consultationTypes = [
    { value: '30min-discovery', label: '30-min Discovery Call', description: 'Initial project discussion and requirements gathering' },
    { value: '60min-strategic', label: '60-min Strategic Discussion', description: 'Comprehensive solution planning and roadmap' },
    { value: '90min-planning', label: '90-min Project Planning', description: 'Detailed technical architecture and implementation planning' }
  ];

  const timezones = [
    { value: 'EST', label: 'Eastern Time (EST)' },
    { value: 'CST', label: 'Central Time (CST)' },
    { value: 'MST', label: 'Mountain Time (MST)' },
    { value: 'PST', label: 'Pacific Time (PST)' },
    { value: 'GMT', label: 'Greenwich Mean Time (GMT)' },
    { value: 'CET', label: 'Central European Time (CET)' }
  ];

  const availableDates = [
    { value: '2025-08-25', label: 'Monday, Aug 25' },
    { value: '2025-08-26', label: 'Tuesday, Aug 26' },
    { value: '2025-08-27', label: 'Wednesday, Aug 27' },
    { value: '2025-08-28', label: 'Thursday, Aug 28' },
    { value: '2025-08-29', label: 'Friday, Aug 29' }
  ];

  const availableTimes = [
    { value: '09:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    console.log('Consultation booking submitted:', {
      ...formData,
      selectedDate,
      selectedTime,
      selectedType,
      selectedTimezone
    });
  };

  return (
    <div className="bg-card rounded-xl shadow-card border border-border p-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mb-4">
          <Icon name="Calendar" size={32} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Schedule Your Consultation</h2>
        <p className="text-muted-foreground">Book a strategic discussion to explore how we can transform your Salesforce implementation</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Consultation Type Selection */}
        <div>
          <Select
            label="Consultation Type"
            description="Choose the session that best fits your needs"
            options={consultationTypes}
            value={selectedType}
            onChange={setSelectedType}
            placeholder="Select consultation type"
            required
          />
        </div>

        {/* Date and Time Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Preferred Date"
            options={availableDates}
            value={selectedDate}
            onChange={setSelectedDate}
            placeholder="Select date"
            required
          />
          <Select
            label="Preferred Time"
            options={availableTimes}
            value={selectedTime}
            onChange={setSelectedTime}
            placeholder="Select time"
            required
          />
        </div>

        {/* Timezone Selection */}
        <div>
          <Select
            label="Your Timezone"
            options={timezones}
            value={selectedTimezone}
            onChange={setSelectedTimezone}
            placeholder="Select your timezone"
            required
          />
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            type="text"
            name="name"
            value={formData?.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            required
          />
          <Input
            label="Email Address"
            type="email"
            name="email"
            value={formData?.email}
            onChange={handleInputChange}
            placeholder="your.email@company.com"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Company Name"
            type="text"
            name="company"
            value={formData?.company}
            onChange={handleInputChange}
            placeholder="Your company name"
            required
          />
          <Input
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData?.phone}
            onChange={handleInputChange}
            placeholder="+1 (555) 123-4567"
          />
        </div>

        {/* Project Details */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Project Details <span className="text-error">*</span>
          </label>
          <textarea
            name="projectDetails"
            value={formData?.projectDetails}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
            placeholder="Briefly describe your Salesforce project, current challenges, or specific areas you'd like to discuss..."
            required
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="default"
            size="lg"
            fullWidth
            className="bg-cta hover:bg-cta/90 text-cta-foreground"
            iconName="Calendar"
            iconPosition="left"
          >
            Schedule Consultation
          </Button>
        </div>
      </form>
      {/* Consultation Benefits */}
      <div className="mt-8 pt-8 border-t border-border">
        <h3 className="text-lg font-semibold text-foreground mb-4">What to Expect</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="CheckCircle" size={16} className="text-success" />
            </div>
            <div>
              <h4 className="font-medium text-foreground">Strategic Assessment</h4>
              <p className="text-sm text-muted-foreground">Comprehensive review of your current setup and goals</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="Target" size={16} className="text-success" />
            </div>
            <div>
              <h4 className="font-medium text-foreground">Custom Roadmap</h4>
              <p className="text-sm text-muted-foreground">Tailored implementation strategy for your business</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icon name="Users" size={16} className="text-success" />
            </div>
            <div>
              <h4 className="font-medium text-foreground">Expert Guidance</h4>
              <p className="text-sm text-muted-foreground">Professional insights from certified Salesforce expert</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationBooking;