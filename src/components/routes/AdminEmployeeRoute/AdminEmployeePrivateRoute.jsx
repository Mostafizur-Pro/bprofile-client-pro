import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "@/components/context/AuthContext";
import CustomSpinner from "@/components/core/spinner/Spinner";
import useAdmin from "@/components/hooks/admin/useAdmin";
import useEmployee from "@/components/hooks/admin/useEmployee";

const AdminEmployeePrivateRoute = ({ children }) => {
  const { adminData, employeeData, loading } = useContext(AuthContext);
  const location = useLocation();


  // Custom hooks to check admin and employee status
  const [isAdmin, isAdminLoading] = useAdmin(adminData?.admin_email);
  const [isEmployee, isEmployeeLoading] = useEmployee(employeeData?.emp_email);

  if (loading) {
    <CustomSpinner />;
  }

  if (adminData) {
    // If adminData exists and isAdmin is true, allow access to children
    if (isAdmin) {
      return children;
    }

    // Show spinner while loading admin status
    if (isAdminLoading) {
      return <CustomSpinner />;
    }

    // Redirect to /admin if not an admin
    return <Navigate to="/admin" state={{ from: location }} replace />;
  }

  if (employeeData) {
    // If employeeData exists and isEmployee is true, allow access to children
    if (isEmployee) {
      return children;
    }

    // Show spinner while loading employee status
    if (isEmployeeLoading) {
      return <CustomSpinner />;
    }

    // Redirect to /login if not an employee
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If neither adminData nor employeeData exists, redirect to /login
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminEmployeePrivateRoute;
