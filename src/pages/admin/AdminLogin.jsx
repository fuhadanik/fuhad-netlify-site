import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate authentication (replace with real authentication)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Demo credentials
      if (formData.username === 'admin' && formData.password === 'admin123') {
        // Create mock JWT token
        const tokenPayload = {
          username: formData.username,
          role: 'admin',
          exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 hours
        };
        
        const mockToken = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' })) + '.' +
                          btoa(JSON.stringify(tokenPayload)) + '.' +
                          btoa('mock-signature');
        
        localStorage.setItem('adminToken', mockToken);
        localStorage.setItem('adminUser', JSON.stringify({
          username: formData.username,
          role: 'admin',
          loginTime: new Date().toISOString()
        }));
        
        navigate('/admin/dashboard');
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl mb-4 shadow-card">
            <Icon name="Shield" size={32} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Portal</h1>
          <p className="text-muted-foreground">Secure access to site administration</p>
        </div>

        {/* Login Form */}
        <div className="bg-card border border-border rounded-xl shadow-card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Username"
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter admin username"
              required
              error={error && !formData.username ? 'Username is required' : ''}
            />

            <Input
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter admin password"
              required
              error={error && !formData.password ? 'Password is required' : ''}
            />

            {error && (
              <div className="bg-error/10 border border-error/20 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <Icon name="AlertCircle" size={16} className="text-error" />
                  <span className="text-error text-sm font-medium">{error}</span>
                </div>
              </div>
            )}

            <Button
              type="submit"
              variant="default"
              size="lg"
              fullWidth
              loading={isLoading}
              className="bg-primary hover:bg-primary/90"
              iconName="LogIn"
              iconPosition="left"
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </Button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 pt-6 border-t border-border">
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Info" size={16} className="text-primary" />
                <span className="text-sm font-medium text-foreground">Demo Credentials</span>
              </div>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>Username: <code className="bg-background px-2 py-1 rounded text-foreground">admin</code></div>
                <div>Password: <code className="bg-background px-2 py-1 rounded text-foreground">admin123</code></div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-6 text-center">
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Icon name="Lock" size={14} />
            <span>Secured with enterprise-grade encryption</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;