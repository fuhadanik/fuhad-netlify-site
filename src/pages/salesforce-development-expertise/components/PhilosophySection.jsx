import React from 'react';
import Icon from '../../../components/AppIcon';

const PhilosophySection = () => {
  const principles = [
    {
      icon: "Target",
      title: "Business-First Approach",
      description: "Every line of code serves a business purpose. I prioritize solutions that deliver measurable ROI over technical complexity for its own sake."
    },
    {
      icon: "Layers",
      title: "Scalable Architecture",
      description: "Building for tomorrow\'s growth today. My solutions are designed to handle increasing data volumes and user loads without performance degradation."
    },
    {
      icon: "Shield",
      title: "Security by Design",
      description: "Enterprise-grade security isn't an afterthought. I implement robust security patterns from the ground up, ensuring data protection and compliance."
    },
    {
      icon: "Users",
      title: "User-Centric Design",
      description: "Technology should empower users, not frustrate them. I create intuitive interfaces that reduce training time and increase adoption rates."
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Lightbulb" size={16} />
            <span>Development Philosophy</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Code That Drives Business Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My development approach emphasizes scalable, maintainable solutions that align with business objectives 
            rather than just technical complexity. Every project is an opportunity to create lasting value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles?.map((principle, index) => (
            <div key={index} className="group">
              <div className="bg-card border border-border rounded-lg p-6 h-full hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon name={principle?.icon} size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {principle?.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {principle?.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <Icon name="Quote" size={48} className="text-primary/30 mx-auto mb-6" />
            <blockquote className="text-2xl lg:text-3xl font-medium text-foreground mb-6 leading-relaxed">
              "Great Salesforce development isn't about writing clever code—it's about solving real business problems with elegant, maintainable solutions that scale with your organization's growth."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Fuhad Hossain</div>
                <div className="text-sm text-muted-foreground">Salesforce Development Expert</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;