import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ExpertiseEvolution = () => {
  const [activePhase, setActivePhase] = useState(0);

  const evolutionPhases = [
    {
      phase: "Foundation Builder",
      period: "2018-2019",
      title: "Mastering the Fundamentals",
      description: "Building solid foundation in Salesforce development, understanding platform capabilities, and learning to translate business requirements into technical solutions.",
      skills: ["Apex Programming", "Lightning Components", "Data Modeling", "Workflow Automation"],
      challenges: [
        "Learning Salesforce\'s unique development paradigms",
        "Understanding declarative vs programmatic approaches",
        "Mastering governor limits and best practices"
      ],
      innovations: [
        "Created reusable component library for faster development",
        "Developed automated testing framework for Apex classes",
        "Built custom data migration tools"
      ],
      icon: "Code",
      color: "bg-blue-500"
    },
    {
      phase: "Integration Specialist",
      period: "2019-2020",
      title: "Connecting Systems & Data",
      description: "Specializing in complex integrations, API development, and creating seamless data flows between Salesforce and external systems.",
      skills: ["REST/SOAP APIs", "Integration Patterns", "Middleware Solutions", "Data Synchronization"],
      challenges: [
        "Handling complex data transformations",
        "Managing real-time vs batch integration patterns",
        "Ensuring data consistency across systems"
      ],
      innovations: [
        "Designed fault-tolerant integration architecture",
        "Built custom middleware for legacy system connections",
        "Created monitoring dashboard for integration health"
      ],
      icon: "Link",
      color: "bg-primary"
    },
    {
      phase: "Marketing Cloud Pioneer",
      period: "2020-2021",
      title: "Mastering Customer Journeys",
      description: "Deep dive into Marketing Cloud capabilities, becoming expert in automation, personalization, and multi-channel customer engagement strategies.",
      skills: ["Journey Builder", "AMPscript", "Email Studio", "Audience Segmentation"],
      challenges: [
        "Complex customer journey mapping",
        "Advanced personalization at scale",
        "Cross-channel message coordination"
      ],
      innovations: [
        "Developed AI-driven content personalization engine",
        "Created dynamic journey optimization framework",
        "Built predictive audience segmentation models"
      ],
      icon: "Mail",
      color: "bg-accent"
    },
    {
      phase: "Solution Architect",
      period: "2021-2022",
      title: "Designing Enterprise Solutions",
      description: "Evolving into architectural thinking, designing scalable multi-cloud solutions, and leading complex enterprise transformations.",
      skills: ["Solution Architecture", "Multi-Cloud Design", "Security Architecture", "Performance Optimization"],
      challenges: [
        "Designing for enterprise scale and complexity",
        "Balancing multiple cloud capabilities",
        "Ensuring security and compliance requirements"
      ],
      innovations: [
        "Created enterprise architecture framework",
        "Developed multi-cloud integration patterns",
        "Built automated security compliance tools"
      ],
      icon: "Building",
      color: "bg-secondary"
    },
    {
      phase: "Transformation Leader",
      period: "2022-Present",
      title: "Driving Business Innovation",
      description: "Leading digital transformations, mentoring teams, and pioneering innovative approaches to Salesforce implementation and optimization.",
      skills: ["Digital Transformation", "Team Leadership", "Innovation Strategy", "Thought Leadership"],
      challenges: [
        "Driving organizational change management",
        "Balancing innovation with stability",
        "Scaling expertise across teams"
      ],
      innovations: [
        "Developed transformation methodology framework",
        "Created AI-enhanced Salesforce solutions",
        "Built community knowledge sharing platform"
      ],
      icon: "Star",
      color: "bg-cta"
    }
  ];

  const currentPhase = evolutionPhases?.[activePhase];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
            <Icon name="TrendingUp" size={20} className="text-primary" />
            <span className="text-primary font-semibold">Expertise Evolution</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            From Developer to Innovation Leader
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A journey of continuous growth, from mastering technical fundamentals to pioneering 
            innovative solutions that drive business transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Phase Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-4 sticky top-8">
              {evolutionPhases?.map((phase, index) => (
                <button
                  key={index}
                  onClick={() => setActivePhase(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    activePhase === index
                      ? 'bg-primary text-primary-foreground shadow-card'
                      : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted border border-border'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      activePhase === index ? 'bg-primary-foreground/20' : phase?.color
                    }`}>
                      <Icon 
                        name={phase?.icon} 
                        size={20} 
                        className={activePhase === index ? 'text-primary-foreground' : 'text-white'} 
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{phase?.phase}</h3>
                      <p className="text-xs opacity-80">{phase?.period}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Phase Content */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl p-8 shadow-card border border-border">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-xl ${currentPhase?.color} flex items-center justify-center`}>
                  <Icon name={currentPhase?.icon} size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{currentPhase?.title}</h3>
                  <p className="text-muted-foreground">{currentPhase?.period}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-8">
                {currentPhase?.description}
              </p>

              {/* Skills */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Core Skills Developed</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {currentPhase?.skills?.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-muted rounded-lg p-3">
                      <Icon name="CheckCircle" size={16} className="text-success" />
                      <span className="text-foreground font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Innovations */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Challenges */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
                    <Icon name="AlertTriangle" size={20} className="text-warning" />
                    <span>Key Challenges</span>
                  </h4>
                  <ul className="space-y-3">
                    {currentPhase?.challenges?.map((challenge, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Icon name="Minus" size={16} className="text-warning mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Innovations */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
                    <Icon name="Lightbulb" size={20} className="text-cta" />
                    <span>Innovations Created</span>
                  </h4>
                  <ul className="space-y-3">
                    {currentPhase?.innovations?.map((innovation, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Icon name="Plus" size={16} className="text-cta mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{innovation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-12">
          <div className="flex items-center justify-center space-x-2">
            {evolutionPhases?.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index <= activePhase ? 'bg-primary' : 'bg-border'
                } ${index === activePhase ? 'w-8' : 'w-2'}`}
              />
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-4">
            Phase {activePhase + 1} of {evolutionPhases?.length}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseEvolution;