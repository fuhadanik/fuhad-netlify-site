import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-cta rounded-full flex items-center justify-center">
                  <Icon name="User" size={24} className="text-white" />
                </div>
                <span className="text-cta font-semibold text-lg">Professional Story</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                From Developer to
                <span className="block text-cta font-accent">Salesforce Architect</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl">
                "Architecting digital experiences that drive measurable business growth"
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-white/80 leading-relaxed">
                My journey began with a simple belief: technology should transform businesses, not complicate them. 
                Over the years, I've evolved from writing code to architecting comprehensive Salesforce solutions 
                that deliver real, measurable impact for organizations worldwide.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Icon name="Award" size={20} className="text-cta" />
                  <span className="text-white font-medium">15+ Certifications</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Icon name="Users" size={20} className="text-cta" />
                  <span className="text-white font-medium">200+ Projects</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Icon name="TrendingUp" size={20} className="text-cta" />
                  <span className="text-white font-medium">$50M+ ROI Generated</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <div className="w-full max-w-lg mx-auto">
                <div className="relative overflow-hidden rounded-2xl shadow-elevation">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&crop=face"
                    alt="Fuhad Hossain - Salesforce Architect"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
              </div>
              
              {/* Floating Achievement Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-card p-4 animate-pulse-subtle">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center">
                    <Icon name="Trophy" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Salesforce MVP</p>
                    <p className="text-xs text-muted-foreground">2023 Recognition</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-card p-4 animate-pulse-subtle">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                    <Icon name="Star" size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Client Satisfaction</p>
                    <p className="text-xs text-muted-foreground">98.5% Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;