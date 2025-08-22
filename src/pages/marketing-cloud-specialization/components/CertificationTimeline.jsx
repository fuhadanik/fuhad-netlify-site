import React from 'react';
import Icon from '../../../components/AppIcon';

const CertificationTimeline = () => {
  const certifications = [
    {
      id: 1,
      title: "Marketing Cloud Email Specialist",
      date: "March 2020",
      description: "Advanced email marketing strategies and automation workflows",
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=100&h=100&fit=crop&crop=center",
      status: "certified",
      skills: ["Email Studio", "Journey Builder", "Automation Studio"]
    },
    {
      id: 2,
      title: "Marketing Cloud Consultant",
      date: "August 2020",
      description: "Strategic implementation and customer journey optimization",
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=100&h=100&fit=crop&crop=center",
      status: "certified",
      skills: ["Data Extensions", "AMPscript", "SQL Queries"]
    },
    {
      id: 3,
      title: "Marketing Cloud Developer",
      date: "January 2021",
      description: "Advanced technical implementation and custom solutions",
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=100&h=100&fit=crop&crop=center",
      status: "certified",
      skills: ["API Integration", "Custom Activities", "CloudPages"]
    },
    {
      id: 4,
      title: "Marketing Cloud Administrator",
      date: "June 2021",
      description: "Platform administration and user management expertise",
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=100&h=100&fit=crop&crop=center",
      status: "certified",
      skills: ["User Management", "Security", "Data Management"]
    },
    {
      id: 5,
      title: "Marketing Cloud Advanced Specialist",
      date: "December 2021",
      description: "Expert-level strategic implementation and optimization",
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=100&h=100&fit=crop&crop=center",
      status: "certified",
      skills: ["Advanced Segmentation", "Predictive Analytics", "Einstein"]
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Certification Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and expertise development in Marketing Cloud ecosystem
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border"></div>

          <div className="space-y-12">
            {certifications?.map((cert, index) => (
              <div key={cert?.id} className={`relative flex items-center ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}>
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content Card */}
                <div className={`w-full max-w-md ${
                  index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'
                }`}>
                  <div className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevation transition-all duration-300">
                    <div className={`flex items-start gap-4 ${
                      index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                    }`}>
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Award" size={24} className="text-primary" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm font-medium text-success bg-success/10 px-2 py-1 rounded-full">
                            Certified
                          </span>
                          <span className="text-sm text-muted-foreground">{cert?.date}</span>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {cert?.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-4">
                          {cert?.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {cert?.skills?.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex}
                              className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <div className="text-3xl font-bold text-primary mb-2">5</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <div className="text-3xl font-bold text-secondary mb-2">2+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <div className="text-3xl font-bold text-accent mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Pass Rate</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <div className="text-3xl font-bold text-cta mb-2">Latest</div>
            <div className="text-sm text-muted-foreground">Up to Date</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationTimeline;