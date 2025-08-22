import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-lg rotate-12"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-lg -rotate-12"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-white/20 rounded-lg rotate-45"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <Icon name="Code" size={24} className="text-white" />
              </div>
              <span className="text-white/80 font-medium">Salesforce Development Mastery</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Enterprise-Grade
              <span className="block text-cta">Salesforce Solutions</span>
            </h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Architecting scalable, maintainable Salesforce solutions that align with business objectives. 
              From custom Lightning components to complex integrations, I deliver code that drives measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="default" 
                size="lg"
                className="bg-cta hover:bg-cta/90 text-cta-foreground"
                iconName="Play"
                iconPosition="left"
              >
                View Live Demos
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
                iconName="Download"
                iconPosition="left"
              >
                Download Code Samples
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cta mb-1">150+</div>
                <div className="text-sm text-white/70">Custom Components</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cta mb-1">50+</div>
                <div className="text-sm text-white/70">API Integrations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cta mb-1">99.9%</div>
                <div className="text-sm text-white/70">Uptime Record</div>
              </div>
            </div>
          </div>

          {/* Code Preview */}
          <div className="relative">
            <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-gray-800">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm">CustomLightningComponent.js</span>
              </div>
              <div className="p-6 text-sm font-mono">
                <div className="text-gray-500">// Enterprise Lightning Web Component</div>
                <div className="text-blue-400 mt-2">import</div>
                <span className="text-white"> &#123; LightningElement, api, track &#125; </span>
                <div className="text-blue-400">from</div>
                <span className="text-green-400"> 'lwc'</span>
                <span className="text-white">;</span>
                
                <div className="mt-4 text-blue-400">export default class</div>
                <span className="text-yellow-400"> CustomComponent </span>
                <div className="text-blue-400">extends</div>
                <span className="text-yellow-400"> LightningElement </span>
                <span className="text-white">&#123;</span>
                
                <div className="ml-4 mt-2 text-purple-400">@api</div>
                <span className="text-white"> recordId;</span>
                
                <div className="ml-4 text-purple-400">@track</div>
                <span className="text-white"> data = &#123;&#125;;</span>
                
                <div className="ml-4 mt-2 text-green-400">connectedCallback</div>
                <span className="text-white">() &#123;</span>
                <div className="ml-8 text-gray-400">// Custom logic here</div>
                <div className="ml-4 text-white">&#125;</div>
                <div className="text-white">&#125;</div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-cta/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={32} className="text-cta" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;