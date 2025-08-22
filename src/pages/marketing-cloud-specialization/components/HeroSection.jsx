import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <span className="text-white/80 font-medium">Marketing Cloud Expertise</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Transform Customer
                <span className="block text-cta">Journeys</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                Architect sophisticated Marketing Cloud solutions that drive measurable engagement, 
                automate complex customer journeys, and deliver personalized experiences at enterprise scale.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cta">180%</div>
                <div className="text-sm text-white/80">CLV Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cta">95%</div>
                <div className="text-sm text-white/80">Automation Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cta">50+</div>
                <div className="text-sm text-white/80">Campaigns Built</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                className="bg-cta hover:bg-cta/90 text-cta-foreground"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Strategy Session
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                iconName="Download"
                iconPosition="left"
              >
                Download Portfolio
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Campaign Performance</h3>
                  <div className="flex items-center space-x-2 text-success">
                    <Icon name="TrendingUp" size={16} />
                    <span className="text-sm">+47% this month</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Email Open Rate</span>
                    <span className="font-semibold">68.5%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-success h-2 rounded-full" style={{width: '68.5%'}}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Click-Through Rate</span>
                    <span className="font-semibold">24.3%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-cta h-2 rounded-full" style={{width: '24.3%'}}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Conversion Rate</span>
                    <span className="font-semibold">12.8%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{width: '12.8%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;