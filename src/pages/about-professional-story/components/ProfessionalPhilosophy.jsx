import React from 'react';
import Icon from '../../../components/AppIcon';

const ProfessionalPhilosophy = () => {
  const philosophyPoints = [
    {
      icon: "Target",
      title: "Business-First Approach",
      description: "Every technical decision is evaluated through the lens of business impact and measurable outcomes."
    },
    {
      icon: "Users",
      title: "Client Success Over Technical Showcasing",
      description: "The best solution is the one that solves real problems and drives genuine transformation."
    },
    {
      icon: "Lightbulb",
      title: "Innovation Through Simplicity",
      description: "Complex problems often require elegant, simple solutions that users can actually adopt and love."
    },
    {
      icon: "Shield",
      title: "Integrity in Every Implementation",
      description: "Transparent communication, honest timelines, and ethical practices form the foundation of trust."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Icon name="Heart" size={20} className="text-primary" />
            <span className="text-primary font-semibold">Core Philosophy</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Principles That Drive Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My approach to Salesforce architecture is built on fundamental principles that ensure 
            every project delivers transformational value, not just technical implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {philosophyPoints?.map((point, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl p-8 shadow-subtle hover:shadow-card transition-all duration-300 border border-border hover:border-primary/20"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary group-hover:text-white rounded-lg flex items-center justify-center transition-all duration-300">
                    <Icon name={point?.icon} size={24} className="text-primary group-hover:text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {point?.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <Icon name="Quote" size={48} className="text-primary/30 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-accent text-foreground leading-relaxed mb-8">
              "Technology is only as powerful as the human problems it solves. My mission is to bridge 
              the gap between Salesforce's incredible capabilities and real business transformation."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl font-accent">F</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Fuhad Hossain</p>
                <p className="text-muted-foreground">Salesforce Architect & Marketing Cloud Strategist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalPhilosophy;