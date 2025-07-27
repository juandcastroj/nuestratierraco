
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Loading from '../components/loading/Loading';

export const ProfilePrivateRoute = ({ children }) => {
  const { firebaseUser, loading } = useAuth();

  if (loading) return <Loading />;

  return firebaseUser ? children : <Navigate to="/auth" replace />;
};
