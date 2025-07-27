
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const AuthPrivateRoute = ({ children }) => {
  const { firebaseUser } = useAuth();

  return !firebaseUser ? children : <Navigate to="/mi-cuenta" replace />;
};
