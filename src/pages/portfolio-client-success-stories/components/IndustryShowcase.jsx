import React from 'react';
import Icon from '../../../components/AppIcon';


const IndustryShowcase = ({ projects }) => {
  const getIndustryData = () => {
    const industryMap = {};
    
    projects?.forEach(project => {
      if (!industryMap?.[project?.industry]) {
        industryMap[project.industry] = {
          name: project?.industry,
          projects: [],
          totalROI: 0,
          avgRating: 0
        };
      }
      
      industryMap?.[project?.industry]?.projects?.push(project);
      industryMap[project.industry].totalROI += parseInt(project?.roiImprovement?.replace('%', ''));
      industryMap[project.industry].avgRating += project?.rating;
    });

    return Object.values(industryMap)?.map(industry => ({
      ...industry,
      avgROI: Math.round(industry?.totalROI / industry?.projects?.length),
      avgRating: (industry?.avgRating / industry?.projects?.length)?.toFixed(1),
      projectCount: industry?.projects?.length
    }))?.sort((a, b) => b?.projectCount - a?.projectCount);
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

  const getIndustryColor = (index) => {
    const colors = [
      'from-primary to-secondary',
      'from-accent to-success',
      'from-warning to-cta',
      'from-secondary to-primary',
      'from-success to-accent',
      'from-cta to-warning'
    ];
    return colors?.[index % colors?.length];
  };

  const industries = getIndustryData();

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-card">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-accent to-success rounded-lg flex items-center justify-center">
          <Icon name="Building2" size={20} className="text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Industry Expertise</h2>
          <p className="text-muted-foreground text-sm">Specialized solutions across diverse sectors</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {industries?.map((industry, index) => (
          <div key={industry?.name} className="group">
            <div className="bg-surface hover:bg-muted rounded-lg p-4 transition-all duration-300 border border-transparent hover:border-border">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${getIndustryColor(index)} rounded-lg flex items-center justify-center`}>
                  <Icon name={getIndustryIcon(industry?.name)} size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {industry?.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {industry?.projectCount} project{industry?.projectCount !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Avg ROI Impact</span>
                  <span className="font-semibold text-accent">+{industry?.avgROI}%</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Client Rating</span>
                  <div className="flex items-center space-x-1">
                    <span className="font-semibold text-warning">{industry?.avgRating}</span>
                    <Icon name="Star" size={14} className="text-warning fill-current" />
                  </div>
                </div>

                <div className="pt-2 border-t border-border">
                  <div className="text-xs text-muted-foreground mb-2">Recent Projects:</div>
                  <div className="space-y-1">
                    {industry?.projects?.slice(0, 2)?.map((project, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-xs text-foreground truncate">{project?.title}</span>
                      </div>
                    ))}
                    {industry?.projects?.length > 2 && (
                      <div className="text-xs text-muted-foreground pl-4">
                        +{industry?.projects?.length - 2} more projects
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-border">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-foreground mb-2">Cross-Industry Excellence</h3>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Deep expertise across {industries?.length} industries with proven ability to understand 
            sector-specific challenges and deliver tailored Salesforce solutions that drive measurable business outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IndustryShowcase;