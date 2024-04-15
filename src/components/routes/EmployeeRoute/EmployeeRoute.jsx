import { AuthContext } from "@/components/context/AuthContext";
import CustomSpinner from "@/components/core/spinner/Spinner";
import useAdmin from "@/components/hooks/admin/useAdmin";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

const EmployeeRoute = ({ children }) => {
  const { employeeData, loading } = useContext(AuthContext);

  // console.log("adminRoute", admin);

  const [isAdmin, isAdminLoading] = useAdmin(employeeData?.emp_email);

  // console.log("isAdmin", isAdmin);

  const location = useLocation();

  if (loading || isAdminLoading) {
    return <CustomSpinner />;
  }

  if (employeeData && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default EmployeeRoute;
