import React from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const InsightsSection = () => {
  const insights = [
    {
      id: 1,
      title: "Marketing Cloud Journey Builder: Advanced Automation Strategies",
      excerpt: `Discover how to leverage Journey Builder's advanced features to create sophisticated customer experiences that drive engagement and conversion. Learn about decision splits, wait activities, and Einstein recommendations.`,
      category: "Marketing Cloud",
      readTime: "8 min read",
      publishDate: "2024-08-20",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      tags: ["Journey Builder", "Automation", "Customer Experience"],
      featured: true
    },
    {
      id: 2,
      title: "Salesforce Lightning Web Components: Performance Best Practices",
      excerpt: `Optimize your Lightning Web Components for maximum performance with these proven techniques. From lazy loading to efficient data handling, boost your app's speed and user experience.`,
      category: "Development",
      readTime: "12 min read",
      publishDate: "2024-08-18",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
      tags: ["LWC", "Performance", "Best Practices"],
      featured: false
    },
    {
      id: 3,
      title: "Sales Cloud Einstein: Predictive Analytics Implementation Guide",
      excerpt: `Harness the power of Einstein Analytics to predict sales outcomes and optimize your pipeline. Step-by-step guide to implementing predictive lead scoring and opportunity insights.`,
      category: "Sales Cloud",
      readTime: "10 min read",
      publishDate: "2024-08-15",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      tags: ["Einstein", "Analytics", "Sales Optimization"],
      featured: false
    }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Marketing Cloud': return 'text-purple-600 bg-purple-50 border-purple-200';
      case 'Development': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Sales Cloud': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Latest Insights & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay ahead with cutting-edge Salesforce strategies, best practices, and industry insights 
            from real-world implementations and continuous innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            {insights?.filter(insight => insight?.featured)?.map(insight => (
                <article key={insight?.id} className="bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-elevation transition-all duration-300">
                  <div className="relative">
                    <Image
                      src={insight?.image}
                      alt={insight?.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(insight?.category)}`}>
                        {insight?.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 bg-cta text-cta-foreground px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <Icon name="Calendar" size={14} />
                        <span>{formatDate(insight?.publishDate)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Clock" size={14} />
                        <span>{insight?.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                      {insight?.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {insight?.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {insight?.tags?.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <Button 
                        variant="outline" 
                        size="sm"
                        iconName="ArrowRight"
                        iconPosition="right"
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
          </div>

          {/* Recent Articles */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">Recent Articles</h3>
            
            {insights?.filter(insight => !insight?.featured)?.map(insight => (
                <article key={insight?.id} className="bg-card border border-border rounded-lg p-6 shadow-subtle hover:shadow-card transition-all duration-300">
                  <div className="flex space-x-4">
                    <Image
                      src={insight?.image}
                      alt={insight?.title}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getCategoryColor(insight?.category)}`}>
                          {insight?.category}
                        </span>
                      </div>
                      
                      <h4 className="font-semibold text-foreground mb-2 leading-tight line-clamp-2">
                        {insight?.title}
                      </h4>
                      
                      <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-3">
                        <span>{formatDate(insight?.publishDate)}</span>
                        <span>•</span>
                        <span>{insight?.readTime}</span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {insight?.excerpt}
                      </p>
                      
                      <button className="flex items-center space-x-1 text-sm text-primary hover:text-primary/80 transition-colors duration-200">
                        <span>Read article</span>
                        <Icon name="ArrowRight" size={14} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6 border border-primary/10">
              <div className="text-center space-y-4">
                <Icon name="Mail" size={32} className="text-primary mx-auto" />
                <h4 className="font-semibold text-foreground">Stay Updated</h4>
                <p className="text-sm text-muted-foreground">
                  Get the latest Salesforce insights and best practices delivered to your inbox.
                </p>
                <Button 
                  variant="default"
                  size="sm"
                  fullWidth
                  className="bg-primary hover:bg-primary/90"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  Subscribe to Newsletter
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            iconName="BookOpen"
            iconPosition="left"
          >
            View All Articles & Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;