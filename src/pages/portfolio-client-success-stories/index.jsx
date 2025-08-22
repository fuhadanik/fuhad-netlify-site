import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ProjectCard from './components/ProjectCard';
import FilterBar from './components/FilterBar';
import ProjectModal from './components/ProjectModal';
import StatsOverview from './components/StatsOverview';
import IndustryShowcase from './components/IndustryShowcase';

const PortfolioClientSuccessStories = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [activeFilters, setActiveFilters] = useState({
    industry: 'all',
    complexity: 'all',
    solutionType: 'all',
    technologies: []
  });

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "Enterprise Sales Cloud Transformation",
      client: "TechCorp Manufacturing",
      industry: "Manufacturing",
      complexity: "Complex",
      solutionType: "Sales Cloud",
      duration: "18 months",
      implementationTime: "12 months",
      teamSize: "8 specialists",
      userAdoption: "94%",
      roiImprovement: "340%",
      rating: 5,
      completionDate: "March 2024",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop",
      description: `Complete overhaul of legacy CRM system with custom Salesforce implementation, integrating manufacturing processes, inventory management, and multi-location sales operations across 15 global offices.`,
      challenge: `TechCorp Manufacturing was struggling with disconnected systems across their global operations. Sales teams couldn't access real-time inventory data, manufacturing schedules weren't integrated with sales forecasts, and reporting was fragmented across multiple platforms. The legacy CRM system was causing significant inefficiencies and missed opportunities.`,
      approach: `We conducted a comprehensive business process analysis across all 15 locations, mapped existing workflows, and designed a unified Salesforce architecture. The approach included phased rollout, extensive user training, and custom integrations with existing manufacturing systems to ensure seamless data flow.`,
      solution: `Implemented a comprehensive Sales Cloud solution with custom objects for manufacturing processes, automated workflows for quote-to-cash operations, integrated inventory management system, and real-time reporting dashboards. Built custom Lightning components for manufacturing-specific requirements and established automated data synchronization with ERP systems.`,
      outcomes: [
        "340% increase in sales team productivity through automated processes",
        "94% user adoption rate within 6 months of deployment",
        "65% reduction in quote generation time from 3 days to 1 day",
        "Real-time visibility into inventory across all 15 global locations",
        "Unified reporting system providing executive-level insights",
        "50% improvement in forecast accuracy through integrated data"
      ],
      technologies: ["Sales Cloud", "Lightning Platform", "Apex", "Integration", "Custom Objects", "Workflows"],
      testimonial: {
        quote: "Fuhad's expertise transformed our entire sales operation. The integration with our manufacturing systems was seamless, and the productivity gains exceeded all expectations. Our sales team now has real-time access to inventory and manufacturing schedules, which has revolutionized our customer service.",
        author: "Sarah Mitchell",
        role: "VP of Sales Operations, TechCorp Manufacturing"
      }
    },
    {
      id: 2,
      title: "Marketing Cloud Campaign Optimization",
      client: "HealthTech Solutions",
      industry: "Healthcare",
      complexity: "Moderate",
      solutionType: "Marketing Cloud",
      duration: "8 months",
      implementationTime: "6 months",
      teamSize: "5 specialists",
      userAdoption: "89%",
      roiImprovement: "275%",
      rating: 5,
      completionDate: "January 2024",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop",
      description: `Advanced Marketing Cloud implementation with personalized patient journey automation, HIPAA-compliant communication workflows, and integrated analytics for healthcare provider engagement.`,
      challenge: `HealthTech Solutions needed to improve patient engagement while maintaining strict HIPAA compliance. Their existing email marketing system couldn't handle personalized patient journeys, and they lacked proper segmentation for different healthcare providers and patient demographics.`,
      approach: `Designed a HIPAA-compliant Marketing Cloud architecture with encrypted data handling, automated patient journey mapping, and sophisticated segmentation strategies. Implemented comprehensive testing protocols to ensure all communications met healthcare industry standards.`,
      solution: `Built automated patient journey campaigns with personalized content based on treatment stages, implemented HIPAA-compliant data handling processes, created dynamic segmentation for healthcare providers, and established comprehensive analytics dashboards for campaign performance tracking.`,
      outcomes: [
        "275% improvement in patient engagement rates",
        "89% adoption rate among healthcare providers",
        "45% increase in appointment scheduling through automated campaigns",
        "100% HIPAA compliance maintained across all communications",
        "60% reduction in manual campaign management time",
        "35% improvement in patient satisfaction scores"
      ],
      technologies: ["Marketing Cloud", "Journey Builder", "Email Studio", "Automation", "Analytics", "HIPAA Compliance"],
      testimonial: {
        quote: "The Marketing Cloud implementation has revolutionized how we engage with patients. The automated journeys are incredibly sophisticated yet easy to manage, and the HIPAA compliance features give us complete confidence in our communications.",
        author: "Dr. Michael Chen",
        role: "Chief Marketing Officer, HealthTech Solutions"
      }
    },
    {
      id: 3,
      title: "Service Cloud Contact Center Modernization",
      client: "FinanceFirst Bank",
      industry: "Financial Services",
      complexity: "Complex",
      solutionType: "Service Cloud",
      duration: "14 months",
      implementationTime: "10 months",
      teamSize: "12 specialists",
      userAdoption: "96%",
      roiImprovement: "420%",
      rating: 5,
      completionDate: "November 2023",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      description: `Complete Service Cloud transformation for a major financial institution, including omnichannel customer service, AI-powered case routing, and regulatory compliance automation.`,
      challenge: `FinanceFirst Bank's legacy contact center system couldn't handle the volume of customer inquiries across multiple channels. Agents lacked unified customer views, case resolution times were excessive, and regulatory compliance reporting was manual and error-prone.`,
      approach: `Implemented a comprehensive Service Cloud solution with omnichannel routing, AI-powered case classification, and automated compliance workflows. Designed custom Lightning components for banking-specific processes and integrated with core banking systems for real-time account information.`,
      solution: `Deployed Service Cloud with Einstein Case Classification, omnichannel routing for phone, email, chat, and social media, automated compliance case handling, real-time customer 360-degree views, and comprehensive reporting dashboards for regulatory requirements.`,
      outcomes: [
        "420% improvement in case resolution efficiency",
        "96% agent adoption rate within 4 months",
        "70% reduction in average case resolution time",
        "Unified customer view across all banking products",
        "Automated regulatory compliance reporting",
        "85% improvement in customer satisfaction scores"
      ],
      technologies: ["Service Cloud", "Einstein AI", "Omnichannel", "Lightning Platform", "Integration", "Compliance"],
      testimonial: {
        quote: "This Service Cloud implementation has transformed our customer service capabilities. Our agents now have complete customer visibility, and the AI-powered routing has dramatically improved our efficiency. The compliance automation alone has saved us countless hours.",
        author: "Jennifer Rodriguez",
        role: "Head of Customer Operations, FinanceFirst Bank"
      }
    },
    {
      id: 4,
      title: "E-commerce Platform Integration",
      client: "RetailMax Online",
      industry: "E-commerce",
      complexity: "Moderate",
      solutionType: "Commerce Cloud",
      duration: "10 months",
      implementationTime: "7 months",
      teamSize: "6 specialists",
      userAdoption: "92%",
      roiImprovement: "285%",
      rating: 4,
      completionDate: "September 2023",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      description: `Commerce Cloud implementation with personalized shopping experiences, inventory synchronization, and integrated customer service for multi-channel retail operations.`,
      challenge: `RetailMax Online needed to unify their online and offline retail operations. Customer data was siloed, inventory wasn't synchronized between channels, and they lacked personalized shopping experiences that could compete with major e-commerce platforms.`,
      approach: `Implemented Commerce Cloud with integrated customer data platform, real-time inventory synchronization, and AI-powered personalization. Created seamless omnichannel experiences with unified customer profiles and integrated customer service capabilities.`,
      solution: `Built comprehensive Commerce Cloud solution with personalized product recommendations, real-time inventory management across all channels, integrated customer service portal, automated marketing campaigns, and unified customer data platform.`,
      outcomes: [
        "285% increase in online conversion rates",
        "92% adoption rate among retail staff",
        "55% improvement in customer lifetime value",
        "Real-time inventory synchronization across all channels",
        "40% increase in average order value through personalization",
        "65% reduction in customer service response time"
      ],
      technologies: ["Commerce Cloud", "Personalization", "Integration", "Customer Data Platform", "AI Recommendations", "Omnichannel"],
      testimonial: {
        quote: "The Commerce Cloud implementation has elevated our customer experience to compete with the biggest players in e-commerce. The personalization features and seamless omnichannel integration have significantly boosted our sales and customer satisfaction.",
        author: "David Park",
        role: "Chief Digital Officer, RetailMax Online"
      }
    },
    {
      id: 5,
      title: "Educational CRM Transformation",
      client: "University Excellence",
      industry: "Education",
      complexity: "Moderate",
      solutionType: "Education Cloud",
      duration: "12 months",
      implementationTime: "8 months",
      teamSize: "7 specialists",
      userAdoption: "88%",
      roiImprovement: "195%",
      rating: 5,
      completionDate: "June 2023",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop",
      description: `Education Cloud implementation for student lifecycle management, automated admissions processes, and integrated alumni engagement platform for a major university system.`,
      challenge: `University Excellence was managing student information across multiple disconnected systems. Admissions processes were manual and time-consuming, student services lacked unified views, and alumni engagement was fragmented across different departments.`,
      approach: `Implemented Education Cloud with automated student lifecycle management, integrated admissions workflows, and comprehensive alumni engagement platform. Created custom Lightning components for university-specific processes and integrated with existing academic systems.`,
      solution: `Deployed Education Cloud with automated admissions workflows, unified student information system, integrated alumni engagement platform, comprehensive reporting for academic performance, and automated communication campaigns for student success.`,
      outcomes: [
        "195% improvement in admissions process efficiency",
        "88% adoption rate among faculty and staff",
        "50% reduction in student onboarding time",
        "Unified view of student lifecycle from prospect to alumni",
        "Automated student success intervention programs",
        "75% increase in alumni engagement rates"
      ],
      technologies: ["Education Cloud", "Student Success", "Automation", "Integration", "Alumni Management", "Analytics"],
      testimonial: {
        quote: "The Education Cloud implementation has revolutionized how we manage student relationships. From admissions to alumni engagement, we now have a unified platform that has dramatically improved our efficiency and student satisfaction.",
        author: "Dr. Lisa Thompson",
        role: "VP of Student Services, University Excellence"
      }
    },
    {
      id: 6,
      title: "SaaS Customer Success Platform",
      client: "CloudTech Innovations",
      industry: "SaaS",
      complexity: "Complex",
      solutionType: "Sales & Service Cloud",
      duration: "16 months",
      implementationTime: "11 months",
      teamSize: "10 specialists",
      userAdoption: "91%",
      roiImprovement: "380%",
      rating: 5,
      completionDate: "April 2023",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      description: `Comprehensive Salesforce implementation combining Sales and Service Cloud for SaaS customer lifecycle management, churn prediction, and automated customer success workflows.`,
      challenge: `CloudTech Innovations needed to scale their customer success operations as they grew from startup to enterprise. They lacked visibility into customer health, churn prediction capabilities, and automated workflows for customer onboarding and success management.`,
      approach: `Implemented integrated Sales and Service Cloud solution with custom customer health scoring, automated churn prediction workflows, and comprehensive customer success automation. Built custom Lightning components for SaaS-specific metrics and integrated with product usage analytics.`,
      solution: `Created comprehensive customer success platform with automated health scoring, churn prediction algorithms, integrated customer onboarding workflows, usage analytics integration, and automated renewal management processes.`,
      outcomes: [
        "380% improvement in customer retention rates",
        "91% adoption rate among customer success teams",
        "60% reduction in customer churn through predictive analytics",
        "Automated customer health monitoring and intervention",
        "45% increase in upsell and cross-sell opportunities",
        "80% improvement in customer onboarding efficiency"
      ],
      technologies: ["Sales Cloud", "Service Cloud", "Einstein Analytics", "Custom Development", "Integration", "Automation"],
      testimonial: {
        quote: "This Salesforce implementation has been game-changing for our customer success operations. The predictive analytics and automated workflows have allowed us to scale our customer success efforts while dramatically improving retention rates.",
        author: "Mark Johnson",
        role: "Chief Customer Officer, CloudTech Innovations"
      }
    }
  ];

  // Filter configuration
  const filters = {
    industries: [...new Set(projects.map(p => p.industry))],
    complexities: ['Simple', 'Moderate', 'Complex'],
    solutionTypes: [...new Set(projects.map(p => p.solutionType))],
    technologies: [...new Set(projects.flatMap(p => p.technologies))]
  };

  // Filter and sort projects
  const getFilteredProjects = () => {
    let filtered = projects?.filter(project => {
      const matchesSearch = searchTerm === '' || 
        project?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        project?.industry?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
        project?.technologies?.some(tech => tech?.toLowerCase()?.includes(searchTerm?.toLowerCase()));

      const matchesIndustry = activeFilters?.industry === 'all' || project?.industry === activeFilters?.industry;
      const matchesComplexity = activeFilters?.complexity === 'all' || project?.complexity === activeFilters?.complexity;
      const matchesSolutionType = activeFilters?.solutionType === 'all' || project?.solutionType === activeFilters?.solutionType;
      const matchesTechnologies = activeFilters?.technologies?.length === 0 || 
        activeFilters?.technologies?.some(tech => project?.technologies?.includes(tech));

      return matchesSearch && matchesIndustry && matchesComplexity && matchesSolutionType && matchesTechnologies;
    });

    // Sort projects
    filtered?.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.completionDate) - new Date(a.completionDate);
        case 'oldest':
          return new Date(a.completionDate) - new Date(b.completionDate);
        case 'complexity':
          const complexityOrder = { 'Simple': 1, 'Moderate': 2, 'Complex': 3 };
          return complexityOrder?.[b?.complexity] - complexityOrder?.[a?.complexity];
        case 'roi':
          return parseInt(b?.roiImprovement?.replace('%', '')) - parseInt(a?.roiImprovement?.replace('%', ''));
        case 'rating':
          return b?.rating - a?.rating;
        default:
          return 0;
      }
    });

    return filtered;
  };

  const filteredProjects = getFilteredProjects();

  const handleFilterChange = (filterType, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleClearFilters = () => {
    setActiveFilters({
      industry: 'all',
      complexity: 'all',
      solutionType: 'all',
      technologies: []
    });
    setSearchTerm('');
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Portfolio - Client Success Stories | Fuhad Portfolio Pro</title>
        <meta name="description" content="Explore detailed case studies of Fuhad's most impactful Salesforce implementations across industries, featuring measurable ROI improvements and client testimonials." />
        <meta name="keywords" content="Salesforce portfolio, client success stories, case studies, ROI improvements, enterprise implementations" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-card">
                  <Icon name="Trophy" size={32} className="text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Client Success Stories
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Discover how strategic Salesforce implementations have transformed businesses across industries, 
                delivering measurable ROI and driving sustainable growth through innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="default"
                  className="bg-cta hover:bg-cta/90 text-cta-foreground"
                  iconName="Calendar"
                  iconPosition="left"
                >
                  Schedule Consultation
                </Button>
                <Button
                  variant="outline"
                  iconName="Download"
                  iconPosition="left"
                >
                  Download Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StatsOverview projects={projects} />
          </div>
        </section>

        {/* Industry Showcase */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <IndustryShowcase projects={projects} />
          </div>
        </section>

        {/* Filter and Projects Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Explore Project Portfolio
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Filter and discover detailed case studies showcasing strategic approaches, 
                technical solutions, and measurable business outcomes.
              </p>
            </div>

            {/* Filter Bar */}
            <div className="mb-8">
              <FilterBar
                filters={filters}
                activeFilters={activeFilters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                sortBy={sortBy}
                onSortChange={setSortBy}
              />
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-muted-foreground">
                Showing {filteredProjects?.length} of {projects?.length} projects
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Icon name="Filter" size={16} />
                <span>Sorted by {sortBy?.replace(/([A-Z])/g, ' $1')?.toLowerCase()}</span>
              </div>
            </div>

            {/* Projects Grid */}
            {filteredProjects?.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects?.map(project => (
                  <ProjectCard
                    key={project?.id}
                    project={project}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Search" size={24} className="text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">No projects found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters or search terms to find relevant projects.
                </p>
                <Button
                  variant="outline"
                  onClick={handleClearFilters}
                  iconName="RefreshCw"
                  iconPosition="left"
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cta to-warning rounded-xl flex items-center justify-center mx-auto mb-6">
              <Icon name="Rocket" size={32} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how similar strategic Salesforce implementations can drive 
              measurable growth and operational excellence for your organization.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                size="lg"
                className="bg-cta hover:bg-cta/90 text-cta-foreground"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Discuss Your Project
              </Button>
            </div>
          </div>
        </section>
      </main>
      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg font-accent">F</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Fuhad Portfolio Pro</h3>
                  <p className="text-sm text-muted-foreground">Salesforce Virtuoso</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Transforming businesses through strategic Salesforce implementations 
                that deliver measurable ROI and sustainable growth.
              </p>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" iconName="Linkedin" />
                <Button variant="ghost" size="icon" iconName="Twitter" />
                <Button variant="ghost" size="icon" iconName="Github" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="/about-professional-story" className="block text-muted-foreground hover:text-foreground transition-colors">About</a>
                <a href="/salesforce-development-expertise" className="block text-muted-foreground hover:text-foreground transition-colors">Expertise</a>
                <a href="/marketing-cloud-specialization" className="block text-muted-foreground hover:text-foreground transition-colors">Marketing Cloud</a>
                <a href="/contact-consultation-booking" className="block text-muted-foreground hover:text-foreground transition-colors">Contact</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <div className="space-y-2">
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Case Studies</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">White Papers</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Best Practices</a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Industry Insights</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © {new Date()?.getFullYear()} Fuhad Portfolio Pro. All rights reserved. 
              Salesforce and related trademarks are property of Salesforce.com, Inc.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioClientSuccessStories;