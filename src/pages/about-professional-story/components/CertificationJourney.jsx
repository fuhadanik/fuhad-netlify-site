import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CertificationJourney = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const certifications = [
    {
      name: "Salesforce Certified Platform Developer I",
      category: "development",
      date: "March 2019",
      level: "Professional",
      description: "Foundation certification demonstrating core platform development skills and Apex programming expertise.",
      impact: "Enabled delivery of first major Salesforce implementation with 40% efficiency improvement",
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=100&h=100&fit=crop",
      skills: ["Apex Programming", "Lightning Components", "Data Modeling", "Security"]
    },
    {
      name: "Salesforce Certified Platform Developer II",
      category: "development",
      date: "August 2019",
      level: "Expert",
      description: "Advanced development certification covering complex integrations, advanced Apex patterns, and performance optimization.",
      impact: "Qualified for enterprise-level projects with complex integration requirements",
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=100&h=100&fit=crop",
      skills: ["Advanced Apex", "Integration Patterns", "Performance Tuning", "Testing"]
    },
    {
      name: "Salesforce Certified Marketing Cloud Developer",
      category: "marketing",
      date: "February 2021",
      level: "Professional",
      description: "Specialized certification for Marketing Cloud development including AMPscript, SSJS, and automation workflows.",
      impact: "Opened doors to high-value Marketing Cloud specialization projects",
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=100&h=100&fit=crop",
      skills: ["AMPscript", "Server-Side JavaScript", "Journey Builder", "Email Studio"]
    },
    {
      name: "Salesforce Certified Marketing Cloud Consultant",
      category: "marketing",
      date: "June 2021",
      level: "Expert",
      description: "Strategic Marketing Cloud certification focusing on solution design, implementation strategy, and business requirements.",
      impact: "Established expertise for $2M+ ROI Marketing Cloud transformation project",
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=100&h=100&fit=crop",
      skills: ["Solution Design", "Data Architecture", "Campaign Strategy", "Analytics"]
    },
    {
      name: "Salesforce Certified Application Architect",
      category: "architecture",
      date: "November 2021",
      level: "Architect",
      description: "Premier architect certification demonstrating ability to design scalable, secure, and maintainable Salesforce solutions.",
      impact: "Qualified for enterprise architect roles and complex multi-cloud implementations",
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=100&h=100&fit=crop",
      skills: ["Solution Architecture", "Integration Design", "Security Architecture", "Scalability"]
    },
    {
      name: "Salesforce Certified System Architect",
      category: "architecture",
      date: "March 2022",
      level: "Architect",
      description: "Comprehensive architect certification covering data architecture, integration patterns, and enterprise-scale solutions.",
      impact: "Enabled leadership of complex enterprise transformations with multiple Salesforce clouds",
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=100&h=100&fit=crop",
      skills: ["Data Architecture", "Enterprise Integration", "Multi-Cloud Solutions", "Governance"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Certifications', icon: 'Award', count: certifications?.length },
    { id: 'development', name: 'Development', icon: 'Code', count: certifications?.filter(c => c?.category === 'development')?.length },
    { id: 'marketing', name: 'Marketing Cloud', icon: 'Mail', count: certifications?.filter(c => c?.category === 'marketing')?.length },
    { id: 'architecture', name: 'Architecture', icon: 'Building', count: certifications?.filter(c => c?.category === 'architecture')?.length }
  ];

  const filteredCertifications = selectedCategory === 'all' 
    ? certifications 
    : certifications?.filter(cert => cert?.category === selectedCategory);

  const getLevelColor = (level) => {
    switch (level) {
      case 'Professional': return 'bg-blue-500';
      case 'Expert': return 'bg-purple-500';
      case 'Architect': return 'bg-cta';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Icon name="Award" size={20} className="text-primary" />
            <span className="text-primary font-semibold">Certification Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Continuous Learning & Mastery
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each certification represents not just knowledge gained, but real business impact delivered 
            and new capabilities unlocked for client success.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setSelectedCategory(category?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category?.id
                  ? 'bg-primary text-primary-foreground shadow-card'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted border border-border'
              }`}
            >
              <Icon name={category?.icon} size={20} />
              <span>{category?.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertifications?.map((cert, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevation transition-all duration-300 hover:border-primary/20"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon name="Award" size={24} className="text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${getLevelColor(cert?.level)}`}>
                      {cert?.level}
                    </div>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">{cert?.date}</span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {cert?.name}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert?.description}
                </p>

                {/* Impact */}
                <div className="bg-success/10 rounded-lg p-3">
                  <div className="flex items-start space-x-2">
                    <Icon name="TrendingUp" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-success font-medium">
                      {cert?.impact}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">Key Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {cert?.skills?.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Total Certifications</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">4</div>
              <p className="text-muted-foreground">Architect Level</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">5</div>
              <p className="text-muted-foreground">Years Learning</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-cta mb-2">100%</div>
              <p className="text-muted-foreground">Pass Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationJourney;