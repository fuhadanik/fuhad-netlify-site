import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CertificationSection = () => {
  const certifications = [
    {
      name: "Platform Developer I",
      issuer: "Salesforce",
      date: "March 2023",
      credentialId: "SF-PDI-2023-001",
      status: "Active",
      level: "Professional",
      description: "Demonstrates expertise in building custom applications on the Salesforce Platform using Apex and Visualforce.",
      skills: ["Apex Programming", "Visualforce", "SOQL/SOSL", "Data Management", "Security"],
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=100&h=100&fit=crop&crop=center"
    },
    {
      name: "Platform Developer II",
      issuer: "Salesforce",
      date: "July 2023",
      credentialId: "SF-PDII-2023-002",
      status: "Active",
      level: "Expert",
      description: "Advanced certification covering complex development scenarios, integration patterns, and performance optimization.",
      skills: ["Advanced Apex", "Lightning Components", "Integration", "Performance Tuning", "Testing"],
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=100&h=100&fit=crop&crop=center"
    },
    {
      name: "JavaScript Developer I",
      issuer: "Salesforce",
      date: "September 2023",
      credentialId: "SF-JSD-2023-003",
      status: "Active",
      level: "Professional",
      description: "Validates skills in Lightning Web Components development and modern JavaScript frameworks.",
      skills: ["Lightning Web Components", "JavaScript ES6+", "Web Standards", "Testing", "Debugging"],
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=100&h=100&fit=crop&crop=center"
    },
    {
      name: "Platform App Builder",
      issuer: "Salesforce",
      date: "January 2023",
      credentialId: "SF-PAB-2023-004",
      status: "Active",
      level: "Professional",
      description: "Demonstrates ability to design and build custom applications using the declarative capabilities of the platform.",
      skills: ["App Design", "Data Modeling", "Business Logic", "User Interface", "Reports & Dashboards"],
      badge: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=100&h=100&fit=crop&crop=center"
    }
  ];

  const trailheadStats = {
    points: "125,000+",
    badges: "180+",
    trails: "25+",
    rank: "Ranger",
    profileUrl: "https://trailblazer.me/id/fuhad-hossain"
  };

  const communityContributions = [
    {
      type: "Stack Overflow",
      metric: "2,500+ reputation",
      description: "Active contributor helping developers solve complex Salesforce challenges",
      icon: "MessageSquare"
    },
    {
      type: "Salesforce Community",
      metric: "500+ answers",
      description: "Helping fellow developers in official Salesforce forums",
      icon: "Users"
    },
    {
      type: "GitHub Projects",
      metric: "15+ repositories",
      description: "Open source Salesforce utilities and code samples",
      icon: "Github"
    },
    {
      type: "Technical Blog",
      metric: "50+ articles",
      description: "Sharing insights on Salesforce development best practices",
      icon: "Edit"
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-trust/10 text-trust px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Award" size={16} />
            <span>Certifications & Recognition</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Proven Expertise & Credentials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Official Salesforce certifications and community recognition that validate technical expertise 
            and commitment to continuous learning in the ever-evolving Salesforce ecosystem.
          </p>
        </div>

        {/* Trailhead Profile Highlight */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Trailhead Profile</h3>
                  <div className="text-muted-foreground">Salesforce Learning Platform</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Active learner and contributor in the Salesforce ecosystem, consistently staying updated 
                with the latest platform features and best practices through hands-on learning.
              </p>
              <Button 
                variant="default" 
                iconName="ExternalLink"
                iconPosition="right"
              >
                View Trailhead Profile
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">{trailheadStats?.points}</div>
                <div className="text-sm text-muted-foreground">Points Earned</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">{trailheadStats?.badges}</div>
                <div className="text-sm text-muted-foreground">Badges Earned</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-success mb-2">{trailheadStats?.trails}</div>
                <div className="text-sm text-muted-foreground">Trails Completed</div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-cta mb-2">{trailheadStats?.rank}</div>
                <div className="text-sm text-muted-foreground">Current Rank</div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Official Salesforce Certifications</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications?.map((cert, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-card transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center overflow-hidden">
                      <Icon name="Award" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{cert?.name}</h4>
                      <div className="text-sm text-muted-foreground">{cert?.issuer}</div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    cert?.level === 'Expert' ? 'bg-error/10 text-error' :
                    cert?.level === 'Professional'? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'
                  }`}>
                    {cert?.level}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {cert?.description}
                </p>

                <div className="mb-4">
                  <div className="text-sm font-medium text-foreground mb-2">Key Skills Validated:</div>
                  <div className="flex flex-wrap gap-2">
                    {cert?.skills?.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div>
                    <span className="text-muted-foreground">Earned: </span>
                    <span className="font-medium text-foreground">{cert?.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-success font-medium">{cert?.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Contributions */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Community Contributions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityContributions?.map((contribution, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={contribution?.icon} size={24} className="text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{contribution?.type}</h4>
                <div className="text-2xl font-bold text-secondary mb-2">{contribution?.metric}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {contribution?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Work with a Certified Expert?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              These certifications represent hundreds of hours of study and hands-on experience. 
              Let's discuss how this expertise can benefit your Salesforce implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                size="lg"
                className="bg-cta hover:bg-cta/90 text-cta-foreground"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Technical Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                iconName="Download"
                iconPosition="left"
              >
                Download Certification Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;