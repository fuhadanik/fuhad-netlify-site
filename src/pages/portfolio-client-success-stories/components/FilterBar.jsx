import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FilterBar = ({ 
  filters, 
  activeFilters, 
  onFilterChange, 
  onClearFilters, 
  searchTerm, 
  onSearchChange,
  sortBy,
  onSortChange 
}) => {
  const hasActiveFilters = Object.values(activeFilters)?.some(filter => 
    Array.isArray(filter) ? filter?.length > 0 : filter !== 'all'
  );

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-card">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Icon 
          name="Search" 
          size={20} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
        />
        <input
          type="text"
          placeholder="Search projects by name, industry, or technology..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e?.target?.value)}
          className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
        {/* Industry Filter */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Industry</label>
          <select
            value={activeFilters?.industry}
            onChange={(e) => onFilterChange('industry', e?.target?.value)}
            className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent text-sm"
          >
            <option value="all">All Industries</option>
            {filters?.industries?.map(industry => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>
        </div>

        {/* Complexity Filter */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Complexity</label>
          <select
            value={activeFilters?.complexity}
            onChange={(e) => onFilterChange('complexity', e?.target?.value)}
            className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent text-sm"
          >
            <option value="all">All Levels</option>
            {filters?.complexities?.map(complexity => (
              <option key={complexity} value={complexity}>{complexity}</option>
            ))}
          </select>
        </div>

        {/* Solution Type Filter */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Solution Type</label>
          <select
            value={activeFilters?.solutionType}
            onChange={(e) => onFilterChange('solutionType', e?.target?.value)}
            className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent text-sm"
          >
            <option value="all">All Types</option>
            {filters?.solutionTypes?.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Sort By */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">Sort By</label>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e?.target?.value)}
            className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent text-sm"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="complexity">Complexity</option>
            <option value="roi">ROI Impact</option>
            <option value="rating">Client Rating</option>
          </select>
        </div>
      </div>
      {/* Technology Tags */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-foreground mb-2">Technologies</label>
        <div className="flex flex-wrap gap-2">
          {filters?.technologies?.map(tech => (
            <button
              key={tech}
              onClick={() => {
                const newTechs = activeFilters?.technologies?.includes(tech)
                  ? activeFilters?.technologies?.filter(t => t !== tech)
                  : [...activeFilters?.technologies, tech];
                onFilterChange('technologies', newTechs);
              }}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                activeFilters?.technologies?.includes(tech)
                  ? 'bg-primary text-primary-foreground shadow-subtle'
                  : 'bg-surface text-foreground hover:bg-muted'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
      {/* Clear Filters */}
      {hasActiveFilters && (
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="text-sm text-muted-foreground">
            Active filters applied
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            iconName="X"
            iconPosition="left"
            className="text-muted-foreground hover:text-foreground"
          >
            Clear All Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default FilterBar;