
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const ProfilePrivateRoute = ({ children }) => {
  const { firebaseUser } = useAuth();

  return firebaseUser ? children : <Navigate to="/auth" replace />;
};
