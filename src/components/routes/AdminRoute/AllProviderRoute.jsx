import { AuthContext } from "@/components/context/AuthContext";
import CustomSpinner from "@/components/core/spinner/Spinner";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

const AllProviderRoute = ({ children }) => {
  const { admin, client, user, employee, loading } = useContext(AuthContext);
  // console.log(loading);
  const location = useLocation();

  if (loading) {
    return <CustomSpinner />;
  }

  if (admin || client || user || employee) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AllProviderRoute;
