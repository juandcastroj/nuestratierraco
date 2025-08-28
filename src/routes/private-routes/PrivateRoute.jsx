import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Loading from '../../components/loading/Loading';

export const PrivateRoute = ({
  children,
  requireAuth = true,         // ¿necesita estar logueado?
  requireVerified = false,     // ¿necesita tener email verificado?
  onlyWhenNotVerified = false, // ¿solo accesible a usuarios logueados Y NO verificados?
  redirectTo = "/auth",        // a dónde mandar si no está logueado
  verifiedRedirect = "/verify-email", // a dónde mandar si no está verificado
  loggedRedirect = "/mi-cuenta"  // a dónde mandar si ya está logueado y no debería estar aquí
}) => {
  const { firebaseUser, loading } = useAuth();

  if (loading) return <Loading />;

  // --- Ruta exclusiva para usuarios logueados pero NO verificados ---
  if (onlyWhenNotVerified) {
    if (!firebaseUser) return <Navigate to={redirectTo} replace />;
    if (firebaseUser.emailVerified) return <Navigate to={loggedRedirect} replace />;
    return children; // usuario logueado y NO verificado -> puede entrar
  }

  // --- Ruta que requiere estar logueado ---
  if (requireAuth && !firebaseUser) {
    return <Navigate to={redirectTo} replace />;
  }

  // --- Ruta que requiere email verificado ---
  if (requireVerified) {
    if (!firebaseUser) return <Navigate to={redirectTo} replace />;
    if (!firebaseUser.emailVerified) return <Navigate to={verifiedRedirect} replace />;
  }

  // --- Rutas públicas (ej: /auth): si ya está logueado redirige ---
  if (!requireAuth && firebaseUser) {
    if (firebaseUser.emailVerified) {
      return <Navigate to={loggedRedirect} replace />;
    } else {
      return <Navigate to={verifiedRedirect} replace />;
    }
  }

  // Si ninguna condición aplica -> renderiza children
  return children;
};
