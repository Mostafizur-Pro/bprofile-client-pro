import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "@/components/context/AuthContext";
import CustomSpinner from "@/components/core/spinner/Spinner";

const AllProviderRoute = ({ children }) => {
  const { userData, clientData, adminData, employeeData, loading } =
    useContext(AuthContext);
  const location = useLocation();

  // Show spinner while loading authentication state
  if (loading) {
    return <CustomSpinner />;
  }

  // Check if any user is authenticated
  const isAuthenticated = adminData || clientData || userData || employeeData;

  // Render children if authenticated, otherwise redirect to login
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default AllProviderRoute;
