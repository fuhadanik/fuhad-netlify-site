import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const getComplexityColor = (level) => {
    switch (level) {
      case 'Simple': return 'bg-success text-success-foreground';
      case 'Moderate': return 'bg-warning text-warning-foreground';
      case 'Complex': return 'bg-error text-error-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getIndustryIcon = (industry) => {
    switch (industry) {
      case 'Manufacturing': return 'Factory';
      case 'SaaS': return 'Cloud';
      case 'Healthcare': return 'Heart';
      case 'Financial Services': return 'DollarSign';
      case 'E-commerce': return 'ShoppingCart';
      case 'Education': return 'GraduationCap';
      default: return 'Building';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-card hover:shadow-elevation transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getComplexityColor(project?.complexity)}`}>
            {project?.complexity}
          </span>
          <span className="bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground flex items-center space-x-1">
            <Icon name={getIndustryIcon(project?.industry)} size={12} />
            <span>{project?.industry}</span>
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <div className="bg-primary text-primary-foreground px-2 py-1 rounded-lg text-xs font-bold">
            {project?.duration}
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
            {project?.title}
          </h3>
          <div className="flex items-center space-x-1 text-accent">
            <Icon name="TrendingUp" size={16} />
            <span className="text-sm font-bold">+{project?.roiImprovement}</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project?.description}
        </p>

        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Implementation Time:</span>
            <span className="font-medium text-foreground">{project?.implementationTime}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Team Size:</span>
            <span className="font-medium text-foreground">{project?.teamSize}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">User Adoption:</span>
            <span className="font-medium text-accent">{project?.userAdoption}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project?.technologies?.slice(0, 3)?.map((tech, index) => (
            <span
              key={index}
              className="bg-surface text-foreground px-2 py-1 rounded-md text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project?.technologies?.length > 3 && (
            <span className="bg-muted text-muted-foreground px-2 py-1 rounded-md text-xs font-medium">
              +{project?.technologies?.length - 3} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <Icon name="CheckCircle" size={16} className="text-white" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Client Rating</p>
              <div className="flex items-center space-x-1">
                {[...Array(5)]?.map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={12}
                    className={i < project?.rating ? "text-warning fill-current" : "text-muted"}
                  />
                ))}
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(project)}
            iconName="ArrowRight"
            iconPosition="right"
            className="hover:bg-primary hover:text-primary-foreground"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;