// import { useEffect } from "react";
// import { useState } from "react";

// const useGetUserData = (url) => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   //   console.log("data", posts);
//   useEffect(() => {
//     if (url) {
//       const fetchPosts = async () => {
//         try {
//           const response = await fetch(url);
//           if (!response.ok) {
//             throw new Error("Failed to fetch data");
//           }
//           const data = await response.json();
//           setUsers(data.data); // Assuming the response data is an array of posts
//           setLoading(false);
//         } catch (error) {
//           setError(error.message);
//           setLoading(false);
//         }
//       };

//       fetchPosts();
//     }
//   }, [url]);

//   return [users, loading, error];
// };
// export default useGetUserData;

import { useQuery } from "react-query";

const useGetUserData = (url) => {
  const {
    data = [],
    isLoading: loading,
    error,
    refetch,
  } = useQuery("userData", async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  });

  return [data?.data || [], loading, error, refetch];
};

export default useGetUserData;
