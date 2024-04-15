import { AuthContext } from "@/components/context/AuthContext";
import CustomSpinner from "@/components/core/spinner/Spinner";
import useAdmin from "@/components/hooks/admin/useAdmin";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { adminData, loading } = useContext(AuthContext);

  // console.log("adminRoute", admin);

  const [isAdmin, isAdminLoading] = useAdmin(adminData?.admin_email);

  // console.log("isAdmin", adminData);

  const location = useLocation();

  if (loading || isAdminLoading) {
    return <CustomSpinner />;
  }

  if (adminData && isAdmin) {
    return children;
  }

  return <Navigate to="/admin" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
