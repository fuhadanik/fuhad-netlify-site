import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CredentialsGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const certifications = [
    {
      id: 1,
      name: "Salesforce Certified Marketing Cloud Developer",
      category: "marketing",
      issueDate: "2024-03-15",
      expiryDate: "2027-03-15",
      credentialId: "MC-DEV-2024-001",
      badge: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=100&h=100&fit=crop",
      verified: true,
      level: "Expert"
    },
    {
      id: 2,
      name: "Salesforce Certified Platform Developer II",
      category: "development",
      issueDate: "2023-11-20",
      expiryDate: "2026-11-20",
      credentialId: "PD2-2023-045",
      badge: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=100&h=100&fit=crop",
      verified: true,
      level: "Advanced"
    },
    {
      id: 3,
      name: "Salesforce Certified Sales Cloud Consultant",
      category: "sales",
      issueDate: "2023-08-10",
      expiryDate: "2026-08-10",
      credentialId: "SCC-2023-078",
      badge: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=100&h=100&fit=crop",
      verified: true,
      level: "Professional"
    },
    {
      id: 4,
      name: "Salesforce Certified Service Cloud Consultant",
      category: "service",
      issueDate: "2023-06-05",
      expiryDate: "2026-06-05",
      credentialId: "SVC-2023-092",
      badge: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=100&h=100&fit=crop",
      verified: true,
      level: "Professional"
    },
    {
      id: 5,
      name: "Salesforce Certified Administrator",
      category: "admin",
      issueDate: "2022-12-15",
      expiryDate: "2025-12-15",
      credentialId: "ADM-2022-156",
      badge: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=100&h=100&fit=crop",
      verified: true,
      level: "Foundation"
    },
    {
      id: 6,
      name: "Salesforce Certified JavaScript Developer I",
      category: "development",
      issueDate: "2024-01-20",
      expiryDate: "2027-01-20",
      credentialId: "JS1-2024-023",
      badge: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=100&h=100&fit=crop",
      verified: true,
      level: "Professional"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Certifications', icon: 'Award', count: certifications?.length },
    { id: 'marketing', name: 'Marketing Cloud', icon: 'Mail', count: certifications?.filter(c => c?.category === 'marketing')?.length },
    { id: 'development', name: 'Development', icon: 'Code', count: certifications?.filter(c => c?.category === 'development')?.length },
    { id: 'sales', name: 'Sales Cloud', icon: 'TrendingUp', count: certifications?.filter(c => c?.category === 'sales')?.length },
    { id: 'service', name: 'Service Cloud', icon: 'Headphones', count: certifications?.filter(c => c?.category === 'service')?.length },
    { id: 'admin', name: 'Administration', icon: 'Settings', count: certifications?.filter(c => c?.category === 'admin')?.length }
  ];

  const filteredCertifications = selectedCategory === 'all' 
    ? certifications 
    : certifications?.filter(cert => cert?.category === selectedCategory);

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return 'text-cta bg-cta/10 border-cta/20';
      case 'Advanced': return 'text-secondary bg-secondary/10 border-secondary/20';
      case 'Professional': return 'text-primary bg-primary/10 border-primary/20';
      case 'Foundation': return 'text-accent bg-accent/10 border-accent/20';
      default: return 'text-muted-foreground bg-muted border-border';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-surface to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Salesforce Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Verified expertise across the Salesforce ecosystem with current certifications 
            and continuous learning commitment.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setSelectedCategory(category?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus-ring ${
                selectedCategory === category?.id
                  ? 'bg-primary text-primary-foreground shadow-subtle'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <Icon name={category?.icon} size={16} />
              <span>{category?.name}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                selectedCategory === category?.id
                  ? 'bg-primary-foreground/20 text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}>
                {category?.count}
              </span>
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCertifications?.map((cert) => (
            <div
              key={cert?.id}
              className="bg-card border border-border rounded-lg p-6 shadow-subtle hover:shadow-card transition-all duration-300 animate-fade-in-up"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                    <Image
                      src={cert?.badge}
                      alt={`${cert?.name} badge`}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  {cert?.verified && (
                    <div className="flex items-center space-x-1">
                      <Icon name="CheckCircle" size={16} className="text-success" />
                      <span className="text-xs text-success font-medium">Verified</span>
                    </div>
                  )}
                </div>
                
                <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(cert?.level)}`}>
                  {cert?.level}
                </span>
              </div>

              <h3 className="font-semibold text-foreground mb-3 leading-tight">
                {cert?.name}
              </h3>

              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>Issued:</span>
                  <span className="font-medium">{formatDate(cert?.issueDate)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Expires:</span>
                  <span className="font-medium">{formatDate(cert?.expiryDate)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Credential ID:</span>
                  <span className="font-mono text-xs">{cert?.credentialId}</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <button className="flex items-center space-x-2 text-sm text-primary hover:text-primary/80 transition-colors duration-200">
                  <Icon name="ExternalLink" size={14} />
                  <span>Verify Credential</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Active Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Verification Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">5</div>
              <div className="text-sm text-muted-foreground">Cloud Specializations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-cta mb-2">2024</div>
              <div className="text-sm text-muted-foreground">Latest Achievement</div>
            </div>
          </div>
        </div>

        {/* Continuous Learning Commitment */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-card border border-border rounded-lg px-4 py-2">
            <Icon name="BookOpen" size={16} className="text-primary" />
            <span className="text-sm text-muted-foreground">
              Committed to continuous learning and staying current with Salesforce innovations
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsGallery;