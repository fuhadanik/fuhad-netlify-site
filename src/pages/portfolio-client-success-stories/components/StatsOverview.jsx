import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsOverview = ({ projects }) => {
  const calculateStats = () => {
    const totalProjects = projects?.length;
    const avgROI = Math.round(
      projects?.reduce((sum, p) => sum + parseInt(p?.roiImprovement?.replace('%', '')), 0) / totalProjects
    );
    const avgRating = (projects?.reduce((sum, p) => sum + p?.rating, 0) / totalProjects)?.toFixed(1);
    const industries = new Set(projects.map(p => p.industry))?.size;
    const totalUsers = projects?.reduce((sum, p) => {
      const adoption = parseInt(p?.userAdoption?.replace(/[^\d]/g, ''));
      return sum + (adoption || 0);
    }, 0);

    return { totalProjects, avgROI, avgRating, industries, totalUsers };
  };

  const stats = calculateStats();

  const statItems = [
    {
      icon: 'Briefcase',
      label: 'Projects Completed',
      value: stats?.totalProjects,
      suffix: '+',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      icon: 'TrendingUp',
      label: 'Average ROI Improvement',
      value: stats?.avgROI,
      suffix: '%',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      icon: 'Star',
      label: 'Client Satisfaction',
      value: stats?.avgRating,
      suffix: '/5',
      color: 'text-warning',
      bgColor: 'bg-warning/10'
    },
    {
      icon: 'Building',
      label: 'Industries Served',
      value: stats?.industries,
      suffix: '+',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      icon: 'Users',
      label: 'Users Impacted',
      value: `${Math.round(stats?.totalUsers / 1000)}K`,
      suffix: '+',
      color: 'text-cta',
      bgColor: 'bg-cta/10'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-card">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
          <Icon name="BarChart3" size={20} className="text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-foreground">Portfolio Impact</h2>
          <p className="text-muted-foreground text-sm">Measurable results across all projects</p>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {statItems?.map((stat, index) => (
          <div key={index} className="text-center">
            <div className={`w-12 h-12 ${stat?.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3`}>
              <Icon name={stat?.icon} size={20} className={stat?.color} />
            </div>
            <div className={`text-2xl font-bold ${stat?.color} mb-1`}>
              {stat?.value}{stat?.suffix}
            </div>
            <div className="text-xs text-muted-foreground leading-tight">
              {stat?.label}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-border">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-semibold text-foreground mb-1">Enterprise Focus</div>
            <div className="text-sm text-muted-foreground">
              {Math.round((projects?.filter(p => p?.complexity === 'Complex')?.length / projects?.length) * 100)}% complex implementations
            </div>
          </div>
          <div>
            <div className="text-lg font-semibold text-foreground mb-1">Quick Delivery</div>
            <div className="text-sm text-muted-foreground">
              Average {Math.round(projects?.reduce((sum, p) => {
                const months = parseInt(p?.implementationTime?.split(' ')?.[0]);
                return sum + months;
              }, 0) / projects?.length)} month implementation
            </div>
          </div>
          <div>
            <div className="text-lg font-semibold text-foreground mb-1">High Adoption</div>
            <div className="text-sm text-muted-foreground">
              {Math.round(projects?.reduce((sum, p) => {
                const adoption = parseInt(p?.userAdoption?.replace('%', ''));
                return sum + adoption;
              }, 0) / projects?.length)}% average user adoption
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsOverview;