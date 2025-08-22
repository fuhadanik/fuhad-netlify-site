import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CareerTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const timelineData = [
    {
      year: "2018",
      title: "The Beginning",
      role: "Junior Developer",
      company: "TechStart Solutions",
      description: "Started my journey in software development, working on web applications and discovering the power of CRM systems.",
      achievements: [
        "Built first customer management system",
        "Learned fundamentals of business process automation",
        "Developed passion for user-centric design"
      ],
      icon: "Code",
      color: "bg-blue-500"
    },
    {
      year: "2019",
      title: "Salesforce Discovery",
      role: "Salesforce Developer",
      company: "CloudTech Innovations",
      description: "First encounter with Salesforce platform. Immediately recognized its potential for business transformation.",
      achievements: [
        "Completed first Salesforce implementation",
        "Earned Platform Developer I certification",
        "Delivered 40% efficiency improvement for client"
      ],
      icon: "Cloud",
      color: "bg-primary"
    },
    {
      year: "2020",
      title: "Rapid Growth",
      role: "Senior Salesforce Developer",
      company: "Enterprise Solutions Inc",
      description: "Expanded expertise across multiple Salesforce clouds while leading complex integration projects.",
      achievements: [
        "Led team of 5 developers",
        "Implemented multi-cloud solutions",
        "Achieved 95% client satisfaction rate"
      ],
      icon: "TrendingUp",
      color: "bg-secondary"
    },
    {
      year: "2021",
      title: "Marketing Cloud Mastery",
      role: "Salesforce Architect",
      company: "Digital Transform Co",
      description: "Specialized in Marketing Cloud implementations, becoming the go-to expert for complex automation scenarios.",
      achievements: [
        "Earned Marketing Cloud certifications",
        "Delivered $2M+ ROI for enterprise client",
        "Spoke at Salesforce community events"
      ],
      icon: "Mail",
      color: "bg-accent"
    },
    {
      year: "2022",
      title: "Thought Leadership",
      role: "Principal Architect",
      company: "Innovation Labs",
      description: "Established thought leadership in Salesforce ecosystem while mentoring next generation of developers.",
      achievements: [
        "Published industry whitepapers",
        "Mentored 20+ junior developers",
        "Recognized as Salesforce MVP candidate"
      ],
      icon: "Award",
      color: "bg-success"
    },
    {
      year: "2023",
      title: "Independent Excellence",
      role: "Freelance Consultant",
      company: "Fuhad Portfolio Pro",
      description: "Launched independent consulting practice, focusing on high-impact Salesforce transformations for enterprise clients.",
      achievements: [
        "Achieved Salesforce MVP status",
        "Generated $50M+ ROI for clients",
        "Built reputation as transformation expert"
      ],
      icon: "Star",
      color: "bg-cta"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Icon name="Clock" size={20} className="text-primary" />
            <span className="text-primary font-semibold">Career Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Evolution of Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From curious developer to recognized Salesforce architect - a journey of continuous 
            learning, client success, and technological mastery.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border"></div>
              
              {timelineData?.map((item, index) => (
                <div key={index} className="relative mb-16">
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevation transition-all duration-300">
                        <div className="mb-4">
                          <span className="text-2xl font-bold text-primary">{item?.year}</span>
                          <h3 className="text-xl font-semibold text-foreground mt-1">{item?.title}</h3>
                          <p className="text-secondary font-medium">{item?.role}</p>
                          <p className="text-muted-foreground text-sm">{item?.company}</p>
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {item?.description}
                        </p>
                        <ul className="space-y-2">
                          {item?.achievements?.map((achievement, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-background border-4 border-border flex items-center justify-center z-10">
                      <div className={`w-10 h-10 rounded-full ${item?.color} flex items-center justify-center`}>
                        <Icon name={item?.icon} size={20} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {timelineData?.map((item, index) => (
              <div key={index} className="relative pl-12">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
                
                {/* Timeline Node */}
                <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-background border-4 border-border flex items-center justify-center">
                  <div className={`w-8 h-8 rounded-full ${item?.color} flex items-center justify-center`}>
                    <Icon name={item?.icon} size={16} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                  <div className="mb-4">
                    <span className="text-xl font-bold text-primary">{item?.year}</span>
                    <h3 className="text-lg font-semibold text-foreground mt-1">{item?.title}</h3>
                    <p className="text-secondary font-medium">{item?.role}</p>
                    <p className="text-muted-foreground text-sm">{item?.company}</p>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item?.description}
                  </p>
                  <ul className="space-y-2">
                    {item?.achievements?.map((achievement, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icon name="CheckCircle" size={16} className="text-success flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;