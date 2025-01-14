import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';

const ProtectedRoute = ({children}) => {
  const {token} = useAuth();

  // route 보호. 로그인페이지로 보냄
  if(!token) {
    return <Navigate to={'/'} replace/>
  }

  return children;
}

export default ProtectedRoute;
