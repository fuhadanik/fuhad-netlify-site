import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ThoughtLeadership = () => {
  const speakingEngagements = [
    {
      event: "Salesforce World Tour 2023",
      title: "Marketing Cloud Architecture for Enterprise Scale",
      date: "September 2023",
      location: "New York, NY",
      audience: "500+ Attendees",
      type: "Keynote",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop"
    },
    {
      event: "Dreamforce 2023",
      title: "AI-Powered Customer Journey Optimization",
      date: "September 2023",
      location: "San Francisco, CA",
      audience: "1000+ Attendees",
      type: "Technical Session",
      image: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=400&h=250&fit=crop"
    },
    {
      event: "Marketing Cloud User Group",
      title: "Advanced AMPscript Techniques",
      date: "June 2023",
      location: "Virtual Event",
      audience: "300+ Attendees",
      type: "Workshop",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=250&fit=crop"
    }
  ];

  const publications = [
    {
      title: "The Future of Marketing Automation: AI and Personalization at Scale",
      publication: "Salesforce Blog",
      date: "August 2023",
      readTime: "8 min read",
      views: "15,000+",
      type: "Article",
      excerpt: "Exploring how artificial intelligence is revolutionizing marketing automation and enabling unprecedented levels of personalization in customer engagement."
    },
    {
      title: "Enterprise Salesforce Architecture: Best Practices and Patterns",
      publication: "TechCrunch",
      date: "June 2023",
      readTime: "12 min read",
      views: "25,000+",
      type: "Whitepaper",
      excerpt: "A comprehensive guide to designing scalable Salesforce architectures for enterprise organizations with complex requirements."
    },
    {
      title: "Marketing Cloud ROI: Measuring Success Beyond Open Rates",
      publication: "MarTech Today",
      date: "April 2023",
      readTime: "6 min read",
      views: "18,000+",
      type: "Article",
      excerpt: "Moving beyond vanity metrics to understand the true business impact of Marketing Cloud implementations and optimizations."
    }
  ];

  const communityContributions = [
    {
      platform: "Salesforce Trailblazer Community",
      role: "Top Contributor",
      contributions: "500+ Answers",
      recognition: "Golden Hoodie Nominee",
      icon: "Users"
    },
    {
      platform: "GitHub",
      role: "Open Source Maintainer",
      contributions: "25+ Repositories",
      recognition: "10,000+ Stars",
      icon: "Github"
    },
    {
      platform: "LinkedIn",
      role: "Thought Leader",
      contributions: "50+ Articles",
      recognition: "100,000+ Followers",
      icon: "Linkedin"
    },
    {
      platform: "YouTube",
      role: "Technical Educator",
      contributions: "75+ Videos",
      recognition: "25,000+ Subscribers",
      icon: "Youtube"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Icon name="Mic" size={20} className="text-primary" />
            <span className="text-primary font-semibold">Thought Leadership</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Sharing Knowledge, Building Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Contributing to the Salesforce ecosystem through speaking, writing, and community 
            engagement to help others succeed in their digital transformation journeys.
          </p>
        </div>

        {/* Speaking Engagements */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center space-x-3">
            <Icon name="Mic" size={24} className="text-primary" />
            <span>Speaking Engagements</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakingEngagements?.map((engagement, index) => (
              <div key={index} className="group bg-card rounded-xl shadow-card border border-border hover:shadow-elevation transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={engagement?.image}
                    alt={engagement?.event}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                      {engagement?.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {engagement?.title}
                  </h4>
                  <p className="text-secondary font-medium mb-3">{engagement?.event}</p>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Icon name="Calendar" size={16} />
                      <span>{engagement?.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="MapPin" size={16} />
                      <span>{engagement?.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Users" size={16} />
                      <span>{engagement?.audience}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center space-x-3">
            <Icon name="FileText" size={24} className="text-primary" />
            <span>Publications & Articles</span>
          </h3>
          
          <div className="space-y-6">
            {publications?.map((publication, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevation transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center space-x-3 mb-2 md:mb-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="FileText" size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{publication?.title}</h4>
                      <p className="text-secondary font-medium">{publication?.publication}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-md font-medium">
                      {publication?.type}
                    </span>
                    <span>{publication?.date}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {publication?.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={16} />
                      <span>{publication?.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" size={16} />
                      <span>{publication?.views}</span>
                    </div>
                  </div>
                  
                  <button className="text-primary hover:text-primary/80 font-medium text-sm flex items-center space-x-1">
                    <span>Read Article</span>
                    <Icon name="ExternalLink" size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Contributions */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center space-x-3">
            <Icon name="Heart" size={24} className="text-primary" />
            <span>Community Contributions</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityContributions?.map((contribution, index) => (
              <div key={index} className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevation transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={contribution?.icon} size={24} className="text-primary" />
                </div>
                
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {contribution?.platform}
                </h4>
                <p className="text-secondary font-medium mb-3">{contribution?.role}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="bg-muted rounded-lg p-2">
                    <span className="text-foreground font-medium">{contribution?.contributions}</span>
                  </div>
                  <div className="bg-success/10 text-success rounded-lg p-2">
                    <span className="font-medium">{contribution?.recognition}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Let's Connect and Collaborate
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Interested in speaking opportunities, collaboration, or just want to discuss 
            Salesforce innovations? I'm always excited to connect with fellow professionals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300">
              <Icon name="Mail" size={20} />
              <span>Speaking Inquiries</span>
            </button>
            <button className="flex items-center space-x-2 bg-card text-foreground border border-border px-6 py-3 rounded-lg hover:bg-muted transition-colors duration-300">
              <Icon name="Users" size={20} />
              <span>Join Community</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThoughtLeadership;