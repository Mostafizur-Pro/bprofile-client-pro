import { AuthContext } from "@/components/context/AuthContext";
import CustomSpinner from "@/components/core/spinner/Spinner";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

const AdminPrivateRoute = ({ children }) => {
  const { adminData, loading } = useContext(AuthContext);
  // console.log(loading);
  const location = useLocation();

  if (loading) {
    return <CustomSpinner />;
  }

  if (adminData) {
    return children;
  }

  return <Navigate to="/admin" state={{ from: location }} replace></Navigate>;
};

export default AdminPrivateRoute;
