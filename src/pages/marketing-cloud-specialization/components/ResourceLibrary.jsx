import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResourceLibrary = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Resources', count: 24 },
    { id: 'templates', label: 'Templates', count: 8 },
    { id: 'guides', label: 'Strategy Guides', count: 6 },
    { id: 'tools', label: 'Tools & Scripts', count: 5 },
    { id: 'best-practices', label: 'Best Practices', count: 5 }
  ];

  const resources = [
    {
      id: 1,
      title: "Email Template Library",
      description: "Collection of 50+ responsive email templates for various industries and use cases",
      category: "templates",
      type: "Download",
      format: "ZIP",
      size: "15 MB",
      downloads: 1247,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=300&h=200&fit=crop&crop=center",
      tags: ["Email Studio", "Responsive", "Multi-industry"]
    },
    {
      id: 2,
      title: "Journey Builder Best Practices Guide",
      description: "Comprehensive guide to building effective customer journeys with proven strategies",
      category: "guides",
      type: "PDF Guide",
      format: "PDF",
      size: "8.5 MB",
      downloads: 892,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=center",
      tags: ["Journey Builder", "Strategy", "Customer Experience"]
    },
    {
      id: 3,
      title: "AMPscript Code Snippets",
      description: "Ready-to-use AMPscript functions for personalization and dynamic content",
      category: "tools",
      type: "Code Library",
      format: "TXT",
      size: "2.1 MB",
      downloads: 654,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop&crop=center",
      tags: ["AMPscript", "Personalization", "Development"]
    },
    {
      id: 4,
      title: "Data Extension Architecture Templates",
      description: "Pre-built data extension structures for common Marketing Cloud implementations",
      category: "templates",
      type: "Template Set",
      format: "XML",
      size: "1.8 MB",
      downloads: 423,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&crop=center",
      tags: ["Data Extensions", "Architecture", "Setup"]
    },
    {
      id: 5,
      title: "Marketing Cloud ROI Calculator",
      description: "Interactive spreadsheet to calculate Marketing Cloud implementation ROI",
      category: "tools",
      type: "Calculator",
      format: "XLSX",
      size: "0.8 MB",
      downloads: 789,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop&crop=center",
      tags: ["ROI", "Business Case", "Planning"]
    },
    {
      id: 6,
      title: "Automation Studio Workflow Examples",
      description: "Real-world automation examples with step-by-step implementation guides",
      category: "best-practices",
      type: "Guide Collection",
      format: "PDF",
      size: "12.3 MB",
      downloads: 567,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop&crop=center",
      tags: ["Automation Studio", "Workflows", "Implementation"]
    }
  ];

  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources?.filter(resource => resource?.category === activeCategory);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Marketing Cloud Resource Library
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Free templates, guides, and tools to accelerate your Marketing Cloud success
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveCategory(category?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === category?.id
                  ? 'bg-primary text-primary-foreground shadow-subtle'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted border border-border'
              }`}
            >
              <span>{category?.label}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeCategory === category?.id
                  ? 'bg-primary-foreground/20 text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}>
                {category?.count}
              </span>
            </button>
          ))}
        </div>

        {/* Resource Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources?.map((resource) => (
            <div key={resource?.id} className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-elevation transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={resource?.image} 
                  alt={resource?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                    {resource?.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                    <Icon name="Star" size={12} className="text-yellow-400 fill-current" />
                    <span>{resource?.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {resource?.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm">
                  {resource?.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <span>{resource?.format}</span>
                    <span>{resource?.size}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Download" size={14} />
                    <span>{resource?.downloads?.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource?.tags?.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="default" 
                  size="sm" 
                  fullWidth
                  className="bg-success hover:bg-success/90 text-success-foreground"
                  iconName="Download"
                  iconPosition="left"
                >
                  Free Download
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Need Custom Marketing Cloud Solutions?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Get personalized templates, custom automation workflows, and strategic guidance 
              tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                size="lg"
                className="bg-cta hover:bg-cta/90 text-cta-foreground"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Request Custom Resources
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceLibrary;