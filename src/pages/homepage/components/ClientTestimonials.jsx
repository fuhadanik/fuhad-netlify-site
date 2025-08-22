import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ClientTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      client: "Sarah Mitchell",
      position: "VP of Sales Operations",
      company: "TechFlow Industries",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      testimonial: `Fuhad transformed our entire sales process with his Salesforce expertise. Our lead conversion increased by 340% within the first quarter, and the automation he implemented saved our team 25 hours per week.`,
      metrics: {
        improvement: "340%",
        metric: "Lead Conversion",
        timeframe: "First Quarter"
      },
      caseStudyId: "techflow-transformation"
    },
    {
      id: 2,
      client: "Michael Rodriguez",
      position: "Chief Marketing Officer",
      company: "Global Dynamics Corp",
      logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=200&h=100&fit=crop",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      testimonial: `The Marketing Cloud implementation exceeded all expectations. Fuhad's strategic approach to customer journey mapping resulted in a 280% increase in email engagement and 45% boost in customer lifetime value.`,
      metrics: {
        improvement: "280%",
        metric: "Email Engagement",
        timeframe: "6 Months"
      },
      caseStudyId: "global-dynamics-marketing"
    },
    {
      id: 3,
      client: "Jennifer Chen",
      position: "Director of Customer Success",
      company: "InnovateTech Solutions",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=200&h=100&fit=crop",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      testimonial: `Fuhad's Service Cloud optimization revolutionized our customer support. Case resolution time decreased by 60%, customer satisfaction scores improved to 4.8/5, and our support team efficiency increased dramatically.`,
      metrics: {
        improvement: "60%",
        metric: "Faster Resolution",
        timeframe: "3 Months"
      },
      caseStudyId: "innovatetech-service"
    }
  ];

  const clientLogos = [
    { name: "TechFlow Industries", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=75&fit=crop" },
    { name: "Global Dynamics", logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=150&h=75&fit=crop" },
    { name: "InnovateTech", logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=150&h=75&fit=crop" },
    { name: "DataStream Corp", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=75&fit=crop" },
    { name: "CloudFirst Ltd", logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=150&h=75&fit=crop" },
    { name: "NextGen Systems", logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=150&h=75&fit=crop" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials?.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transformational results that speak for themselves. Real clients, measurable outcomes, 
            and lasting business impact across industries.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative mb-16">
          <div className="bg-card border border-border rounded-2xl p-8 sm:p-12 shadow-card">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Testimonial Content */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-start space-x-4">
                  <Icon name="Quote" size={32} className="text-primary flex-shrink-0 mt-1" />
                  <blockquote className="text-lg sm:text-xl text-foreground leading-relaxed">
                    {testimonials?.[currentTestimonial]?.testimonial}
                  </blockquote>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonials?.[currentTestimonial]?.avatar}
                      alt={testimonials?.[currentTestimonial]?.client}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonials?.[currentTestimonial]?.client}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials?.[currentTestimonial]?.position}
                      </div>
                      <div className="text-sm font-medium text-primary">
                        {testimonials?.[currentTestimonial]?.company}
                      </div>
                    </div>
                  </div>

                  <Image
                    src={testimonials?.[currentTestimonial]?.logo}
                    alt={`${testimonials?.[currentTestimonial]?.company} logo`}
                    className="h-8 w-auto opacity-60"
                  />
                </div>
              </div>

              {/* Metrics Card */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
                <div className="text-center space-y-4">
                  <div className="text-4xl font-bold text-primary">
                    {testimonials?.[currentTestimonial]?.metrics?.improvement}
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    {testimonials?.[currentTestimonial]?.metrics?.metric}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Achieved in {testimonials?.[currentTestimonial]?.metrics?.timeframe}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    iconName="ExternalLink"
                    iconPosition="right"
                  >
                    View Case Study
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors duration-200 focus-ring"
            >
              <Icon name="ChevronLeft" size={20} className="text-muted-foreground" />
            </button>

            <div className="flex space-x-2">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentTestimonial ? 'bg-primary w-8' : 'bg-border'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-muted transition-colors duration-200 focus-ring"
            >
              <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
            </button>
          </div>
        </div>

        {/* Client Logos */}
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Trusted by Leading Organizations
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            {clientLogos?.map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={client?.logo}
                  alt={`${client?.name} logo`}
                  className="h-8 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/portfolio-client-success-stories">
            <Button 
              variant="default"
              size="lg"
              className="bg-primary hover:bg-primary/90"
              iconName="ArrowRight"
              iconPosition="right"
            >
              View All Success Stories
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;