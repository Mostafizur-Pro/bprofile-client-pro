import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState("false");
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  // console.log("isAdminLoading", isAdmin);
  useEffect(() => {
    setIsAdminLoading(true)
    if (email) {
      fetch(
        `${import.meta.env.VITE_LOCAL_API_URL}/api/v1/admin?searchTerm=${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data?.data[0]);
          // console.log(data.data[0]);
          setIsAdminLoading(false);
        });
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
