// src/routes/ProtectedRoute.tsx

import React from 'react'
import { Navigate, useLocation } from 'react-router';
import { useAuth } from '../contexts/AuthenticationContext';

type Props = { 
    children: React.ReactNode 
};

const ProtectedRoute = ({children}: Props) => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  
  return isLoggedIn() ? (
    <>{children}</> 
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default ProtectedRoute