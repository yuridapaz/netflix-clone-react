import React from 'react';
import { UserAuth } from '../../context/AuthContext';
import { AuthContextType } from '../../types/AuthContextType';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth() as AuthContextType;

  if (!user) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
