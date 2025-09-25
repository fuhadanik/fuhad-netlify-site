import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [adminUser, setAdminUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('adminUser');
    if (user) {
      setAdminUser(JSON.parse(user));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'BarChart3' },
    { id: 'users', label: 'User Management', icon: 'Users' },
    { id: 'content', label: 'Content Management', icon: 'FileText' },
    { id: 'analytics', label: 'Analytics', icon: 'TrendingUp' },
    { id: 'settings', label: 'Settings', icon: 'Settings' }
  ];

  const stats = [
    { label: 'Total Users', value: '1,247', change: '+12%', icon: 'Users', color: 'text-primary' },
    { label: 'Page Views', value: '45,892', change: '+8%', icon: 'Eye', color: 'text-secondary' },
    { label: 'Consultations', value: '156', change: '+23%', icon: 'Calendar', color: 'text-accent' },
    { label: 'Conversion Rate', value: '3.2%', change: '+0.5%', icon: 'TrendingUp', color: 'text-cta' }
  ];

  const recentActivities = [
    { type: 'user', message: 'New user registration: john.doe@company.com', time: '2 minutes ago', icon: 'UserPlus' },
    { type: 'consultation', message: 'Consultation booked by Sarah Mitchell', time: '15 minutes ago', icon: 'Calendar' },
    { type: 'content', message: 'Blog post "Marketing Cloud Best Practices" published', time: '1 hour ago', icon: 'FileText' },
    { type: 'system', message: 'System backup completed successfully', time: '2 hours ago', icon: 'Database' }
  ];

  const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@company.com', role: 'User', status: 'Active', lastLogin: '2024-01-15' },
    { id: 2, name: 'Sarah Mitchell', email: 'sarah.m@techflow.com', role: 'User', status: 'Active', lastLogin: '2024-01-14' },
    { id: 3, name: 'Michael Rodriguez', email: 'michael.r@global.com', role: 'User', status: 'Inactive', lastLogin: '2024-01-10' }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-subtle">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 ${stat.color.replace('text-', 'bg-')}/10 rounded-lg flex items-center justify-center`}>
                <Icon name={stat.icon} size={20} className={stat.color} />
              </div>
              <span className="text-sm font-medium text-success">{stat.change}</span>
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-subtle">
        <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
          <Icon name="Activity" size={20} />
          <span>Recent Activity</span>
        </h3>
        <div className="space-y-4">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-surface rounded-lg">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={activity.icon} size={16} className="text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground">{activity.message}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderUserManagement = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">User Management</h3>
        <Button variant="default" iconName="UserPlus" iconPosition="left">
          Add New User
        </Button>
      </div>

      <div className="bg-card border border-border rounded-lg shadow-subtle overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-surface border-b border-border">
              <tr>
                <th className="text-left p-4 font-medium text-foreground">User</th>
                <th className="text-left p-4 font-medium text-foreground">Role</th>
                <th className="text-left p-4 font-medium text-foreground">Status</th>
                <th className="text-left p-4 font-medium text-foreground">Last Login</th>
                <th className="text-left p-4 font-medium text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-border hover:bg-surface/50">
                  <td className="p-4">
                    <div>
                      <div className="font-medium text-foreground">{user.name}</div>
                      <div className="text-sm text-muted-foreground">{user.email}</div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                      {user.role}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Active' 
                        ? 'bg-success/10 text-success' 
                        : 'bg-error/10 text-error'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">{user.lastLogin}</td>
                  <td className="p-4">
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm" iconName="Edit" />
                      <Button variant="ghost" size="sm" iconName="Trash2" className="text-error hover:text-error" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderContentManagement = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-foreground">Content Management</h3>
        <Button variant="default" iconName="Plus" iconPosition="left">
          Create New Content
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-lg p-6 shadow-subtle">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="FileText" size={20} className="text-primary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Blog Posts</h4>
              <p className="text-sm text-muted-foreground">Manage blog content</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Published:</span>
              <span className="font-medium text-foreground">24</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Drafts:</span>
              <span className="font-medium text-foreground">3</span>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 shadow-subtle">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
              <Icon name="Image" size={20} className="text-secondary" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Media Library</h4>
              <p className="text-sm text-muted-foreground">Manage images and files</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Images:</span>
              <span className="font-medium text-foreground">156</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Documents:</span>
              <span className="font-medium text-foreground">42</span>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 shadow-subtle">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <Icon name="MessageSquare" size={20} className="text-accent" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Testimonials</h4>
              <p className="text-sm text-muted-foreground">Client feedback</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Approved:</span>
              <span className="font-medium text-foreground">18</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Pending:</span>
              <span className="font-medium text-foreground">2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-foreground">Analytics Dashboard</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6 shadow-subtle">
          <h4 className="font-semibold text-foreground mb-4">Traffic Overview</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Page Views</span>
              <span className="font-semibold text-foreground">45,892</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Unique Visitors</span>
              <span className="font-semibold text-foreground">12,456</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Bounce Rate</span>
              <span className="font-semibold text-foreground">24.3%</span>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 shadow-subtle">
          <h4 className="font-semibold text-foreground mb-4">Conversion Metrics</h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Consultation Requests</span>
              <span className="font-semibold text-foreground">156</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Contact Form Submissions</span>
              <span className="font-semibold text-foreground">89</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Newsletter Signups</span>
              <span className="font-semibold text-foreground">234</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-foreground">System Settings</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6 shadow-subtle">
          <h4 className="font-semibold text-foreground mb-4">Site Configuration</h4>
          <div className="space-y-4">
            <Input
              label="Site Title"
              type="text"
              defaultValue="Fuhad Portfolio Pro"
            />
            <Input
              label="Site Description"
              type="text"
              defaultValue="Salesforce Virtuoso"
            />
            <Select
              label="Maintenance Mode"
              options={[
                { value: 'off', label: 'Off' },
                { value: 'on', label: 'On' }
              ]}
              defaultValue="off"
            />
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 shadow-subtle">
          <h4 className="font-semibold text-foreground mb-4">Security Settings</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-foreground">Two-Factor Authentication</span>
              <div className="w-3 h-3 bg-success rounded-full"></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-foreground">SSL Certificate</span>
              <div className="w-3 h-3 bg-success rounded-full"></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-foreground">Backup Status</span>
              <div className="w-3 h-3 bg-success rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'users':
        return renderUserManagement();
      case 'content':
        return renderContentManagement();
      case 'analytics':
        return renderAnalytics();
      case 'settings':
        return renderSettings();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Shield" size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
                <p className="text-sm text-muted-foreground">Site Administration Panel</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="User" size={16} className="text-primary" />
                </div>
                <div className="hidden sm:block">
                  <div className="text-sm font-medium text-foreground">{adminUser?.username}</div>
                  <div className="text-xs text-muted-foreground">Administrator</div>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                iconName="LogOut"
                iconPosition="left"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-primary text-primary-foreground shadow-subtle'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={tab.icon} size={20} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;