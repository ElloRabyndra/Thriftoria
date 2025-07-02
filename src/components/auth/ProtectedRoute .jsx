import { Navigate, useLocation } from "react-router";
import { useAuth } from "@/hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();



  // Redirect ke halaman login dengan menyimpan lokasi sebelumnya
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Jika sudah login, tampilkan children
  return children;
};

export default ProtectedRoute;
