import { useEffect, useState, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { magic } from './auth';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkLoggedIn = async () => {
      setIsLoggedIn(await magic.user.isLoggedIn());
    };
    checkLoggedIn();
  }, []);

  if (isLoggedIn === null) {
    return null; // Show a loading spinner or something similar here
  }

  return isLoggedIn ? <>{children}</> : <Navigate to="/" />;
};

export const withProtectedRoute = (
  Component: React.ComponentType<any>,
  props?: any
) => {
  return (
    <ProtectedRoute>
      <Component {...props} />
    </ProtectedRoute>
  );
};
