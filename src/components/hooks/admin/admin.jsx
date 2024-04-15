// import { useEffect } from "react";
// import { useState } from "react";

// const useGetAdminData = (url) => {
//   const [admins, setAdmins] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (url) {
//       const fetchAdmins = async () => {
//         try {
//           const response = await fetch(url);
//           if (!response.ok) {
//             throw new Error("Failed to fetch data");
//           }
//           const data = await response.json();
//           setAdmins(data.data);
//           setLoading(false);
//         } catch (error) {
//           setError(error.message);
//           setLoading(false);
//         }
//       };

//       fetchAdmins();
//     }
//   }, [url]);

//   return [admins, loading, error];
// };
// export default useGetAdminData;

import { useQuery } from "react-query";

const useGetAdminData = (url) => {
  const {
    data = [],
    isLoading: loading,
    error,
    refetch,
  } = useQuery("admins", async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  });

  return [data?.data || [], loading, error, refetch];
};

export default useGetAdminData;
