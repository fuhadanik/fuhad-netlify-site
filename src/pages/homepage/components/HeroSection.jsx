import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [metrics, setMetrics] = useState({
    roi: 285,
    efficiency: 67,
    adoption: 94
  });

  // Simulate real-time metric updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        roi: prev?.roi + Math.floor(Math.random() * 5) - 2,
        efficiency: Math.min(100, prev?.efficiency + Math.floor(Math.random() * 3) - 1),
        adoption: Math.min(100, prev?.adoption + Math.floor(Math.random() * 2))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-surface to-muted overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content Side */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cta rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Salesforce Virtuoso
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Transforming Business Through
                <span className="block text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                  Salesforce Excellence
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Premium Salesforce architect and Marketing Cloud strategist delivering measurable business transformation. 
                50+ successful implementations with 98% client retention rate.
              </p>
            </div>

            {/* Live Metrics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-lg p-4 shadow-subtle">
                <div className="flex items-center space-x-2">
                  <Icon name="TrendingUp" size={20} className="text-success" />
                  <span className="text-2xl font-bold text-foreground">{metrics?.roi}%</span>
                </div>
                <p className="text-sm text-muted-foreground">Avg ROI Increase</p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-4 shadow-subtle">
                <div className="flex items-center space-x-2">
                  <Icon name="Zap" size={20} className="text-secondary" />
                  <span className="text-2xl font-bold text-foreground">{metrics?.efficiency}%</span>
                </div>
                <p className="text-sm text-muted-foreground">Efficiency Gains</p>
              </div>
              
              <div className="bg-card border border-border rounded-lg p-4 shadow-subtle">
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={20} className="text-accent" />
                  <span className="text-2xl font-bold text-foreground">{metrics?.adoption}%</span>
                </div>
                <p className="text-sm text-muted-foreground">User Adoption</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                className="bg-cta hover:bg-cta/90 text-cta-foreground animate-pulse-subtle"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Free Consultation
              </Button>
              
              <Link to="/portfolio-client-success-stories">
                <Button 
                  variant="outline" 
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                >
                  View Success Stories
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-trust" />
                <span className="text-sm text-muted-foreground">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-trust" />
                <span className="text-sm text-muted-foreground">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-trust" />
                <span className="text-sm text-muted-foreground">Certified Expert</span>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Main Image */}
              <div className="relative w-full max-w-lg mx-auto">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-elevation bg-gradient-to-br from-primary/10 to-secondary/10">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
                    alt="Fuhad Hossain - Salesforce Expert"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-3 shadow-card animate-pulse-subtle">
                  <div className="flex items-center space-x-2">
                    <Icon name="Star" size={16} className="text-warning fill-current" />
                    <span className="text-sm font-semibold text-foreground">5.0 Rating</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-3 shadow-card animate-pulse-subtle">
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-success" />
                    <span className="text-sm font-semibold text-foreground">50+ Projects</span>
                  </div>
                </div>
              </div>

              {/* Background Decorations */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;