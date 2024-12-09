/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { Navigate, Route, useLocation } from 'react-router';
import { authService } from '../service/auth.service';
import LoginPage from './Login';

const ProtectedRoute = ({ component: Component }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const { key } = useLocation();

  console.log("FROM---",  key);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await authService.checkAuth();
        if (response) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    // Optionally render a loading spinner or similar while the authentication status is being checked
    return <div>Loading...</div>;
  }

 return isAuthenticated ?  <Component /> : <Navigate to="/" /> 
};

export default ProtectedRoute;