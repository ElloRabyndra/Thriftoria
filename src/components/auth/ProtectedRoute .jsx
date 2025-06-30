import { Navigate, useLocation } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import Loading from "@/components/ui/loading";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  // Tampilkan loading saat masih mengecek authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loading />
      </div>
    );
  }

  // Redirect ke halaman login dengan menyimpan lokasi sebelumnya
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Jika sudah login, tampilkan children
  return children;
};

export default ProtectedRoute;
