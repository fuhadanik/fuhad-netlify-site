import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  const getComplexityColor = (level) => {
    switch (level) {
      case 'Simple': return 'bg-success text-success-foreground';
      case 'Moderate': return 'bg-warning text-warning-foreground';
      case 'Complex': return 'bg-error text-error-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-card border border-border rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-modal">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="Briefcase" size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{project?.title}</h2>
              <p className="text-muted-foreground">{project?.client} • {project?.industry}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            iconName="X"
            className="hover:bg-muted"
          />
        </div>

        <div className="p-6">
          {/* Project Image */}
          <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
            <Image
              src={project?.image}
              alt={project?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex items-center space-x-2">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getComplexityColor(project?.complexity)}`}>
                {project?.complexity}
              </span>
              <span className="bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground">
                {project?.duration}
              </span>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-surface rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-accent mb-1">+{project?.roiImprovement}</div>
              <div className="text-sm text-muted-foreground">ROI Improvement</div>
            </div>
            <div className="bg-surface rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">{project?.userAdoption}</div>
              <div className="text-sm text-muted-foreground">User Adoption</div>
            </div>
            <div className="bg-surface rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-secondary mb-1">{project?.implementationTime}</div>
              <div className="text-sm text-muted-foreground">Implementation</div>
            </div>
            <div className="bg-surface rounded-lg p-4 text-center">
              <div className="flex items-center justify-center space-x-1 mb-1">
                {[...Array(5)]?.map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={16}
                    className={i < project?.rating ? "text-warning fill-current" : "text-muted"}
                  />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">Client Rating</div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                  <Icon name="Target" size={20} className="text-primary" />
                  <span>Business Challenge</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project?.challenge}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                  <Icon name="Lightbulb" size={20} className="text-secondary" />
                  <span>Strategic Approach</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project?.approach}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                  <Icon name="Settings" size={20} className="text-accent" />
                  <span>Technical Solution</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project?.solution}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project?.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                  <Icon name="TrendingUp" size={20} className="text-success" />
                  <span>Measurable Outcomes</span>
                </h3>
                <div className="space-y-3">
                  {project?.outcomes?.map((outcome, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-success mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                  <Icon name="MessageSquare" size={20} className="text-cta" />
                  <span>Client Testimonial</span>
                </h3>
                <div className="bg-surface rounded-lg p-4">
                  <blockquote className="text-muted-foreground italic mb-3">
                    "{project?.testimonial?.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-sm">
                        {project?.testimonial?.author?.split(' ')?.map(n => n?.[0])?.join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{project?.testimonial?.author}</div>
                      <div className="text-sm text-muted-foreground">{project?.testimonial?.role}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center space-x-2">
                  <Icon name="Users" size={20} className="text-primary" />
                  <span>Project Details</span>
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Team Size:</span>
                    <span className="font-medium text-foreground">{project?.teamSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Project Duration:</span>
                    <span className="font-medium text-foreground">{project?.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Solution Type:</span>
                    <span className="font-medium text-foreground">{project?.solutionType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Completion Date:</span>
                    <span className="font-medium text-foreground">{project?.completionDate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-8 pt-6 border-t border-border">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Ready to Transform Your Business?
              </h3>
              <p className="text-muted-foreground mb-4">
                Let's discuss how similar solutions can drive growth for your organization.
              </p>
              <Button
                variant="default"
                className="bg-cta hover:bg-cta/90 text-cta-foreground"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;