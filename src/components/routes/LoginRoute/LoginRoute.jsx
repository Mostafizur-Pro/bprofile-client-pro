import CustomSpinner from "@/components/core/spinner/Spinner";
import { Navigate, useLocation } from "react-router-dom";

const LoginRoute = () => {
  // Parse user data from localStorage
  const clientData = JSON.parse(localStorage.getItem("client") || "null");
  const userData = JSON.parse(localStorage.getItem("user") || "null");
  const adminData = JSON.parse(localStorage.getItem("admin") || "null");
  const employeeData = JSON.parse(localStorage.getItem("employee") || "null");


  // const from = location.state?.from?.pathname || "/";

  // Get current location
  const location = useLocation();

  console.log('data', employeeData)

  // Check if any user data exists
  const isAuthenticated = clientData || userData || adminData || employeeData;

  // Show spinner while checking user authentication
  if (isAuthenticated === null) {
    return <CustomSpinner />;
  }

  // Determine redirect based on user role
  let redirectTo = "/login"; // Default redirect to login

  if (clientData) {
    redirectTo = "/room";
  } else if (userData) {
    redirectTo = "/room";
  } else if (adminData) {
    redirectTo = "/room";
  } else if (employeeData) {
    redirectTo = "/dashboard/employee_profile";
  }

  // Redirect user based on authentication status
  return (
    <Navigate
      to={redirectTo}
      state={{ from: location }}
      replace
    />
  );
};

export default LoginRoute;
