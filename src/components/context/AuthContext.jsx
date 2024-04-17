import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true); // Set initial loading state to true
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [client, setClient] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [user, setUser] = useState(null); // Add state for user
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const clientData = JSON.parse(localStorage.getItem("client") || "null");
    const userData = JSON.parse(localStorage.getItem("user") || "null");
    const adminData = JSON.parse(localStorage.getItem("admin") || "null");
    const employeeData = JSON.parse(localStorage.getItem("employee") || "null");

    if ((token && clientData) || adminData || userData || employeeData) {
      setIsAuthenticated(true);
      setClient(clientData);
      setAdmin(adminData);
      setUser(userData); // Set user state
      setEmployee(employeeData); // Set user state
    }
    setLoading(false); // Set loading to false after data is fetched
  }, []);

  const login = (token, userLogin, clientLogin, adminLogin, employeeLogin) => {
    setIsAuthenticated(true);

    if (clientLogin) {
      setClient(clientLogin);
      localStorage.setItem("client", JSON.stringify(clientLogin));
    } else if (adminLogin) {
      setAdmin(adminLogin);
      localStorage.setItem("admin", JSON.stringify(adminLogin));
    } else if (userLogin) {
      setUser(userLogin);
      localStorage.setItem("user", JSON.stringify(userLogin));
    } else if (employeeLogin) {
      setEmployee(employeeLogin);
      localStorage.setItem("employee", JSON.stringify(employeeLogin));
    }

    localStorage.setItem("token", token);
  };

  const logout = () => {
    window.location.reload();
    setIsAuthenticated(false);
    setClient(null);
    setAdmin(null);
    setUser(null);
    setEmployee(null); // Clear employee state
    localStorage.removeItem("token");
    localStorage.removeItem("client");
    localStorage.removeItem("admin");
    localStorage.removeItem("user");
    localStorage.removeItem("employee"); // Remove employee from localStorage
  };
  // Wrap children with AuthContext.Provider only when loading is false

  const [userData, setUserData] = useState("");
  const [clientData, setClientData] = useState("");
  const [adminData, setAdminData] = useState("");
  const [employeeData, setEmployeeData] = useState("");

  useEffect(() => {
    if (user) {
      setUserData(user[0]);
    }
  }, [user]);

  useEffect(() => {
    if (client) {
      setClientData(client[0]);
    }
  }, [client]);

  useEffect(() => {
    if (admin) {
      setAdminData(admin[0]);
    }
  }, [admin]);
  useEffect(() => {
    if (employee) {
      setEmployeeData(employee[0]);
    }
  }, [employee]);

  return !loading ? (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userData,
        clientData,
        adminData,
        employeeData,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  ) : null;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
