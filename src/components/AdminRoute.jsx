import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const isAdminAuthenticated = () => {
    const adminToken = localStorage.getItem('adminToken');
    const adminUser = localStorage.getItem('adminUser');
    
    if (!adminToken || !adminUser) return false;
    
    try {
      const tokenData = JSON.parse(atob(adminToken.split('.')[1]));
      const currentTime = Date.now() / 1000;
      
      // Check if token is expired (24 hours)
      return tokenData.exp > currentTime;
    } catch {
      return false;
    }
  };

  return isAdminAuthenticated() ? children : <Navigate to="/admin/login" replace />;
};

export default AdminRoute;