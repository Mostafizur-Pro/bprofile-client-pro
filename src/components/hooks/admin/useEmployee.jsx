import { useEffect, useState } from "react";

const useEmployee = (email) => {
  const [isEmployee, setIsEmployee] = useState(false);
  const [isEmployeeLoading, setIsEmployeeLoading] = useState(true);
  // console.log("admin", email);
  useEffect(() => {
    if (email) {
      fetch(
        `${
          import.meta.env.VITE_LOCAL_API_URL
        }/api/v1/employee?searchTerm=${email}`
      )
        .then((res) => res.json())
        .then((data) => {
          //   console.log(data.data);
          setIsEmployee(data.data);
          setIsEmployeeLoading(false);
        });
    }
  }, [email]);
  return [isEmployee, isEmployeeLoading];
};

export default useEmployee;
