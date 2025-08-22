import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "VP of Technology",
      company: "Enterprise Solutions Corp",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: `Fuhad doesn't just implement Salesforce, he transforms how we think about customer engagement. His strategic approach to our Marketing Cloud implementation resulted in a 340% increase in campaign ROI within the first quarter. What sets him apart is his ability to translate complex technical concepts into clear business value.`,
      project: "Marketing Cloud Transformation",
      results: ["340% Campaign ROI Increase", "65% Reduction in Manual Tasks", "98% User Adoption Rate"],
      rating: 5
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Chief Digital Officer",
      company: "Global Manufacturing Inc",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: `Working with Fuhad was a game-changer for our digital transformation. His expertise in multi-cloud Salesforce architecture helped us integrate our entire customer journey across Sales, Service, and Marketing clouds. The result? A unified view of our customers that drove $2.3M in additional revenue in year one.`,
      project: "Multi-Cloud Integration",
      results: ["$2.3M Additional Revenue", "360° Customer View", "50% Faster Response Times"],
      rating: 5
    },
    {
      id: 3,
      name: "Jennifer Chen",
      role: "Director of Customer Success",
      company: "TechStart Innovations",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: `As a growing startup, we needed someone who could scale with us. Fuhad designed a Salesforce architecture that not only solved our immediate needs but anticipated our growth challenges. His mentorship of our internal team was invaluable - he doesn't just deliver solutions, he builds capability.`,
      project: "Scalable Growth Architecture",
      results: ["300% User Growth Supported", "Zero Downtime Migration", "Internal Team Upskilled"],
      rating: 5
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Head of Marketing Operations",
      company: "Retail Excellence Group",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: `Fuhad's Marketing Cloud expertise is unmatched. He took our fragmented email marketing and transformed it into a sophisticated automation engine. Our customer lifetime value increased by 45% thanks to his personalization strategies and journey optimization. He's not just a consultant - he's a strategic partner.`,
      project: "Marketing Automation Excellence",
      results: ["45% CLV Increase", "80% Email Engagement Boost", "Automated Journey Optimization"],
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Icon name="MessageSquare" size={20} className="text-primary" />
            <span className="text-primary font-semibold">Client Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Voices of Transformation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real stories from real clients who experienced measurable business transformation 
            through strategic Salesforce implementations.
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="bg-card rounded-2xl shadow-elevation p-8 md:p-12 mb-8">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Client Info */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-card">
                    <Image
                      src={currentTestimonial?.avatar}
                      alt={currentTestimonial?.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center shadow-card">
                    <Icon name="CheckCircle" size={16} className="text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {currentTestimonial?.name}
                </h3>
                <p className="text-secondary font-medium mb-1">
                  {currentTestimonial?.role}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {currentTestimonial?.company}
                </p>

                {/* Rating */}
                <div className="flex justify-center lg:justify-start space-x-1 mb-4">
                  {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="bg-primary/10 rounded-lg p-3">
                  <p className="text-sm font-medium text-primary mb-1">Project:</p>
                  <p className="text-sm text-foreground">{currentTestimonial?.project}</p>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Icon name="Quote" size={48} className="text-primary/20 absolute -top-4 -left-4" />
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed font-accent relative z-10 mb-6">
                    {currentTestimonial?.content}
                  </blockquote>
                </div>

                {/* Results */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                    Key Results Achieved:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {currentTestimonial?.results?.map((result, index) => (
                      <div key={index} className="flex items-center space-x-2 bg-success/10 rounded-lg p-3">
                        <Icon name="TrendingUp" size={16} className="text-success flex-shrink-0" />
                        <span className="text-sm font-medium text-success">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={prevTestimonial}
              className="flex items-center space-x-2 px-6 py-3 bg-card rounded-lg shadow-subtle hover:shadow-card transition-all duration-300 text-muted-foreground hover:text-foreground border border-border hover:border-primary/20"
            >
              <Icon name="ChevronLeft" size={20} />
              <span className="hidden sm:inline">Previous</span>
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? 'bg-primary scale-125' :'bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="flex items-center space-x-2 px-6 py-3 bg-card rounded-lg shadow-subtle hover:shadow-card transition-all duration-300 text-muted-foreground hover:text-foreground border border-border hover:border-primary/20"
            >
              <span className="hidden sm:inline">Next</span>
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">98.5%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">200+</div>
              <p className="text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">$50M+</div>
              <p className="text-muted-foreground">ROI Generated</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-cta">100%</div>
              <p className="text-muted-foreground">On-Time Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;