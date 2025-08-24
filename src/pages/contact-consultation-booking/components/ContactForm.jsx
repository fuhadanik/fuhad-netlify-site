import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const inquiryTypes = [
    { value: 'immediate-project', label: 'Immediate Project Needs', description: 'Ready to start a Salesforce project within 30 days' },
    { value: 'strategic-planning', label: 'Strategic Planning Discussion', description: 'Long-term Salesforce strategy and roadmap planning' },
    { value: 'technical-questions', label: 'Technical Questions', description: 'Specific technical challenges or implementation questions' },
    { value: 'partnership', label: 'Partnership Opportunities', description: 'Collaboration, referral, or business partnership discussions' }
  ];

  const budgetRanges = [
    { value: 'under-25k', label: 'Under $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-250k', label: '$100,000 - $250,000' },
    { value: 'over-250k', label: 'Over $250,000' },
    { value: 'discuss', label: 'Prefer to discuss' }
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Immediate (Within 30 days)' },
    { value: '1-3-months', label: '1-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: '6-12-months', label: '6-12 months' },
    { value: 'planning-phase', label: 'Still in planning phase' }
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
    console.log('Contact form submitted:', formData);
  };

  return (
  <div className="bg-card rounded-xl shadow-card border border-border p-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full mb-4">
          <Icon name="MessageCircle" size={32} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Get In Touch</h2>
        <p className="text-muted-foreground">Share your project details and let's discuss how we can help transform your business</p>
      </div>
      <form 
        name="contact-form" 
        method="POST" 
        data-netlify="true" 
        netlify-honeypot="bot-field" 
        onSubmit={handleSubmit} 
        className="space-y-6"
      >
        {/* Netlify hidden input for form name */}
        <input type="hidden" name="form-name" value="contact-form" />
        {/* Netlify honeypot field */}
        <input type="hidden" name="bot-field" />
        {/* Inquiry Type */}
        <div>
          <Select
            label="Type of Inquiry"
            description="Help us route your message to the right discussion"
            options={inquiryTypes}
            value={formData?.inquiryType}
            onChange={(value) => setFormData(prev => ({ ...prev, inquiryType: value }))}
            placeholder="Select inquiry type"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Project Budget Range"
            options={budgetRanges}
            value={formData?.budget}
            onChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
            placeholder="Select budget range"
          />
          <Select
            label="Project Timeline"
            options={timelineOptions}
            value={formData?.timeline}
            onChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}
            placeholder="Select timeline"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Project Details & Message <span className="text-error">*</span>
          </label>
          <textarea
            name="message"
            value={formData?.message}
            onChange={handleInputChange}
            rows={5}
            className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
            placeholder="Please describe your project requirements, current challenges, specific goals, or any questions you have about Salesforce implementation..."
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
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            iconName="Send"
            iconPosition="left"
          >
            Send Message
          </Button>
        </div>
      </form>
      {/* Response Time Information */}
      <div className="mt-8 pt-8 border-t border-border">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Clock" size={16} className="text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Response Time</h3>
            <p className="text-sm text-muted-foreground">We typically respond within 4-6 business hours</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircle" size={16} className="text-success" />
            <span className="text-muted-foreground">Immediate projects: Same day response</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircle" size={16} className="text-success" />
            <span className="text-muted-foreground">Strategic planning: Within 24 hours</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircle" size={16} className="text-success" />
            <span className="text-muted-foreground">Technical questions: Within 12 hours</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircle" size={16} className="text-success" />
            <span className="text-muted-foreground">Partnership inquiries: Within 48 hours</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;